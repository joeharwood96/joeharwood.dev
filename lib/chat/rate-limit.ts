import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Spend guard for the site assistant. With a small model each message costs
// roughly $0.001, so the global cap bounds the bill at about $4 a month.
export const LIMITS = {
  burstPerMinute: 5,
  perIpPerDay: 20,
  globalPerDay: 150,
};

let limiters: {
  burst: Ratelimit;
  daily: Ratelimit;
  global: Ratelimit;
} | null = null;

function getLimiters() {
  if (limiters) return limiters;
  const redis = Redis.fromEnv();
  limiters = {
    burst: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(LIMITS.burstPerMinute, "1 m"),
      prefix: "chat:burst",
    }),
    daily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(LIMITS.perIpPerDay, "1 d"),
      prefix: "chat:daily",
    }),
    global: new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(LIMITS.globalPerDay, "1 d"),
      prefix: "chat:global",
    }),
  };
  return limiters;
}

export type LimitResult =
  | { ok: true; remaining: number }
  | { ok: false; reason: "burst" | "daily" | "global"; retryAfter: number };

const secondsUntil = (reset: number) =>
  Math.max(1, Math.ceil((reset - Date.now()) / 1000));

// Cheap check that runs before the body is parsed, so junk traffic still
// counts against the caller.
export async function checkBurst(ip: string): Promise<LimitResult> {
  const res = await getLimiters().burst.limit(ip);
  return res.success
    ? { ok: true, remaining: res.remaining }
    : { ok: false, reason: "burst", retryAfter: secondsUntil(res.reset) };
}

// Only called for valid requests that will reach OpenAI.
export async function checkQuota(ip: string): Promise<LimitResult> {
  const { daily, global } = getLimiters();
  const perIp = await daily.limit(ip);
  if (!perIp.success) {
    return { ok: false, reason: "daily", retryAfter: secondsUntil(perIp.reset) };
  }
  const site = await global.limit("all");
  if (!site.success) {
    return { ok: false, reason: "global", retryAfter: secondsUntil(site.reset) };
  }
  return { ok: true, remaining: perIp.remaining };
}

export function rateLimitConfigured() {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}
