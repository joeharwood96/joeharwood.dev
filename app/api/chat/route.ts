import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import { projects } from "@/data/projects";
import { checkChatLimits } from "@/lib/rate-limit";

export const runtime = "edge";
export const maxDuration = 30;

const MAX_MESSAGE_CHARS = 1000;
const MAX_HISTORY = 30;
const MAX_OUTPUT_TOKENS = 400;

const projectSummary = projects
  .map((p) => `- ${p.title} (${p.year}, ${p.company}): ${p.description}`)
  .join("\n");

const systemPrompt = `You are Joe Harwood's portfolio assistant.

Tone: concise, clear, slightly informal, helpful for recruiters. Never fawning. Keep answers under ~120 words unless explicitly asked for detail. Short paragraphs.

Formatting: Use light markdown when it helps — **bold** for emphasis on names and key terms, bullet lists for enumerations (3+ items), and inline \`code\` for tech names like \`Next.js\` or \`TypeScript\`. No headings.

About Joe:
- Software engineer based in Amsterdam, 6+ years experience.
- Currently co-founder of Weeknights (2025–present).
- Booking.com — Software Engineer II (2022–2025).
- Appical — Software Engineer I (2021–2022).
- IBM — Software Engineer Intern (2019–2021).
- Stack: Next.js, React, TypeScript, Node.js, Postgres, Supabase, Tailwind.
- Cares about fast, accessible, well-crafted software and shipping things that matter.

Joe's projects:
${projectSummary}

Rules:
- If asked about salary, personal contact details, or anything outside Joe's professional work, decline briefly and point to the contact form at /#contact.
- Never invent facts about Joe. If you don't know, say so and suggest reaching out via the contact form.
- Speak about Joe in the third person ("Joe built…", not "I built…").`;

function jsonError(
  status: number,
  body: Record<string, unknown>,
  headers?: Record<string, string>,
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...(headers ?? {}) },
  });
}

export async function POST(req: Request) {
  // 1. Identify caller
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
  const sessionId = req.headers.get("x-session-id") ?? ip;

  // 2. Server-side rate limit (burst per IP + daily per session)
  const rl = await checkChatLimits({ ip, sessionId });
  if (!rl.ok) {
    return jsonError(
      429,
      {
        error: "rate_limited",
        kind: rl.kind,
        retryAfter: rl.retryAfter,
        remaining: 0,
      },
      {
        "Retry-After": String(rl.retryAfter),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Kind": rl.kind,
      },
    );
  }

  // 3. Per-request hard caps on input
  const body = await req.json().catch(() => null);
  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return jsonError(400, { error: "invalid_payload" });
  }

  const last = messages[messages.length - 1];
  if (typeof last?.content !== "string") {
    return jsonError(400, { error: "invalid_message" });
  }
  if (last.content.length > MAX_MESSAGE_CHARS) {
    return jsonError(400, {
      error: "message_too_long",
      limit: MAX_MESSAGE_CHARS,
    });
  }
  if (messages.length > MAX_HISTORY) {
    return jsonError(400, { error: "history_too_long", limit: MAX_HISTORY });
  }

  // 4. Stream with output cap
  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages: convertToCoreMessages(messages),
    temperature: 0.6,
    maxTokens: MAX_OUTPUT_TOKENS,
  });

  return result.toDataStreamResponse({
    headers: {
      "X-RateLimit-Remaining": String(rl.remaining),
    },
  });
}
