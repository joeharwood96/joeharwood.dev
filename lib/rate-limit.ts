import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

// Burst control — per IP, 10 requests per minute.
const burst = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  prefix: "chat:burst",
  analytics: true,
});

// Daily quota — per anonymous session cookie, 20 messages per day.
const daily = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, "1 d"),
  prefix: "chat:daily",
  analytics: true,
});

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; kind: "burst" | "session_quota"; retryAfter: number };

export async function checkChatLimits({
  ip,
  sessionId,
}: {
  ip: string;
  sessionId: string;
}): Promise<RateLimitResult> {
  const [b, d] = await Promise.all([burst.limit(ip), daily.limit(sessionId)]);

  if (!b.success) {
    return { ok: false, kind: "burst", retryAfter: 60 };
  }
  if (!d.success) {
    return { ok: false, kind: "session_quota", retryAfter: 60 * 60 };
  }

  return { ok: true, remaining: d.remaining };
}
