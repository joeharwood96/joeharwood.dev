import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { z } from "zod";
import { systemPrompt } from "@/lib/chat/prompt";
import {
  checkBurst,
  checkQuota,
  rateLimitConfigured,
  type LimitResult,
} from "@/lib/chat/rate-limit";

export const maxDuration = 30;

const MODEL = process.env.OPENAI_MODEL ?? "gpt-5.4-nano";
const MAX_BODY_BYTES = 8_000;
const MAX_QUESTION_CHARS = 500;
const MAX_TURN_CHARS = 1_500;
const HISTORY_TURNS = 6;
const MAX_OUTPUT_TOKENS = 350;

const allowedOrigins = new Set([
  "https://www.devjoe.io",
  "https://devjoe.io",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
]);

// Only plain user/assistant turns are accepted, so nobody can smuggle in a
// system message or tool call.
const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(MAX_TURN_CHARS),
      }),
    )
    .min(1)
    .max(20),
});

function json(status: number, body: Record<string, unknown>, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function limited(result: Extract<LimitResult, { ok: false }>) {
  return json(
    429,
    { error: "rate_limited", reason: result.reason, retryAfter: result.retryAfter },
    { "Retry-After": String(result.retryAfter) },
  );
}

function clientIp(req: Request) {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

export async function POST(req: Request) {
  if (process.env.CHAT_ENABLED === "false" || !process.env.OPENAI_API_KEY) {
    return json(503, { error: "disabled" });
  }
  // Fail closed: without the rate limiter there is no spend guard.
  if (!rateLimitConfigured()) {
    return json(503, { error: "disabled" });
  }

  const origin = req.headers.get("origin");
  if (!origin || !allowedOrigins.has(origin)) {
    return json(403, { error: "forbidden" });
  }

  const ip = clientIp(req);
  const burst = await checkBurst(ip);
  if (!burst.ok) return limited(burst);

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json(413, { error: "too_large" });
  }

  let parsed;
  try {
    parsed = bodySchema.safeParse(JSON.parse(raw));
  } catch {
    return json(400, { error: "invalid" });
  }
  if (!parsed.success) return json(400, { error: "invalid" });

  const history = parsed.data.messages.slice(-HISTORY_TURNS);
  const question = history[history.length - 1];
  if (question.role !== "user" || question.content.length > MAX_QUESTION_CHARS) {
    return json(400, { error: "invalid" });
  }

  const quota = await checkQuota(ip);
  if (!quota.ok) return limited(quota);

  const result = streamText({
    model: openai(MODEL),
    system: systemPrompt,
    messages: history,
    maxOutputTokens: MAX_OUTPUT_TOKENS,
    maxRetries: 1,
    abortSignal: req.signal,
    onError: ({ error }) => {
      // Log the failure type only, never message content.
      console.error("chat stream error", error instanceof Error ? error.name : "unknown");
    },
  });

  return result.toTextStreamResponse({
    headers: {
      "Cache-Control": "no-store",
      "X-Chat-Remaining": String(quota.remaining),
    },
  });
}
