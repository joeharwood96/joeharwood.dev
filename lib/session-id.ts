const COOKIE = "chat_sid";
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

export function getOrCreateSessionId(): string {
  if (typeof document === "undefined") return "ssr";

  const existing = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE}=`))
    ?.split("=")[1];

  if (existing) return existing;

  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const expires = new Date(Date.now() + ONE_MONTH_MS).toUTCString();
  document.cookie = `${COOKIE}=${id}; expires=${expires}; path=/; SameSite=Lax`;

  return id;
}
