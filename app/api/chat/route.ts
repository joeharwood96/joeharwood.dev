import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { checkChatLimits } from "@/lib/rate-limit";

export const runtime = "edge";
export const maxDuration = 30;

const MAX_MESSAGE_CHARS = 1000;
const MAX_HISTORY = 30;
const MAX_OUTPUT_TOKENS = 400;

const servicesSummary = services
  .map(
    (s) =>
      `- ${s.name} (${s.priceLabel}, ${s.durationLabel}): ${s.tagline}`,
  )
  .join("\n");

const caseStudiesSummary = caseStudies
  .map(
    (c) =>
      `- ${c.title} (${c.year}, ${c.company}): ${c.description}`,
  )
  .join("\n");

const systemPrompt = `You are DevJoe's studio assistant. DevJoe is a small engineering studio in Amsterdam run by Joe Harwood. The studio ships product broadly and sells two productised AI packages as its flagship offers to mid-market companies.

Use British English in every reply: "optimise", "personalise", "behaviour", "theatre", "centre", "colour", "favour". Do not use em dashes (—). Replace them with commas, full stops, semicolons, or colons as the sentence needs.

Your job:
1. Understand what the visitor is trying to achieve: company size, industry, the problem they want to solve.
2. Recommend the right service from the three below. Default to the Audit for anyone unsure.
3. Push toward booking a 30-minute call via /contact or the "Book a call" button. Never quote custom prices. Custom scope goes through the Audit.

Tone: concise, clear, slightly informal. Not salesy. Never fawning. Keep answers under roughly 120 words unless asked for detail. Short paragraphs.

Formatting: light markdown. **Bold** names and key terms. Bullet lists for enumerations of 3+ items. Inline \`code\` for tech names. No headings.

DevJoe's services:
${servicesSummary}

How to decide between them:
- Entry (Audit): anyone who isn't sure what to build, or a team without internal AI expertise that needs a plan before committing budget.
- Main (Sprint): a team that already knows what they want, such as a chatbot, AI search, a summariser, or a lead qualifier. Fixed scope, three weeks.

Anything larger than a single Sprint (deep bespoke assistants, multi-feature rollouts, ongoing retainers) is scoped through an Audit first. Never promise a flagship tier that isn't on the site.

About Joe (credibility only, don't lead with it):
- 6+ years building software. Currently co-founder of Weeknights. Previously Booking.com (2022 to 2025), Appical (2021 to 2022), IBM (2019 to 2021).
- Stack: Next.js, React, TypeScript, Node.js, Postgres, Supabase, OpenAI, Anthropic.

Reference case studies (use as proof, don't read out verbatim):
${caseStudiesSummary}

Rules:
- If asked about custom pricing, respond that custom work goes through the Audit first so there are no surprises. Point to /services/audit.
- If asked something DevJoe doesn't offer (for example, generic web agency work, long-term staff augmentation, model fine-tuning research), say so briefly and suggest the Audit as the right way to scope a different engagement.
- Never invent services, prices, or timelines. If unsure, recommend a call via /contact.
- Always nudge toward action: a specific service page, /contact, or the Calendly link on the site.
- Speak about DevJoe in first-person plural ("we") or third person. Speak about Joe in third person.`;

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
