"use client";

import {
  useEffect,
  useRef,
  useState,
  Suspense,
  type ReactNode,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useChat } from "ai/react";
import { ArrowRight, X } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/navbar";
import { getOrCreateSessionId } from "@/lib/session-id";

const SUGGESTED_PROMPTS = [
  "Which service is right for my company?",
  "What is an AI Opportunity Audit?",
  "Can you ship an AI feature for our product?",
];

const isExternal = (href?: string) => !!href && /^https?:\/\//i.test(href);

const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="text-lg leading-relaxed text-foreground [&:not(:first-child)]:mt-4">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 space-y-2 list-decimal pl-5 marker:text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => {
    const unwrapped = (Array.isArray(children) ? children : [children]).map(
      (child) => {
        if (
          child &&
          typeof child === "object" &&
          "props" in child &&
          (child as { type?: unknown }).type === "p"
        ) {
          return (child as { props: { children: ReactNode } }).props.children;
        }
        return child;
      },
    );
    return (
      <li className="text-lg leading-relaxed text-foreground pl-1">
        {unwrapped}
      </li>
    );
  },
  a: ({ href, children }) => (
    <a
      href={href}
      {...(isExternal(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
    >
      {children}
    </a>
  ),
  code: ({ className, children, ...props }) => {
    const isBlock = className?.startsWith("language-");
    if (isBlock) {
      return (
        <code className="font-mono text-sm" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded bg-foreground/[0.06] px-1.5 py-0.5 text-[0.9em] font-mono text-foreground"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mt-4 rounded-md border border-border bg-foreground/[0.04] p-4 text-sm font-mono text-foreground overflow-x-auto">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-2 border-border pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-6 border-border" />,
  h1: ({ children }) => (
    <h1 className="text-xl font-semibold mt-6 text-foreground">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-6 text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 text-foreground">{children}</h3>
  ),
};

type LimitState = null | "burst" | "session_quota";

function ChatInner() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q");
  const seededRef = useRef(false);
  const endRef = useRef<HTMLDivElement>(null);

  const sessionIdRef = useRef<string>("");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [limitState, setLimitState] = useState<LimitState>(null);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
  } = useChat({
    api: "/api/chat",
    headers: { "x-session-id": sessionIdRef.current },
    fetch: async (url, init) => {
      const headers = new Headers(init?.headers);
      if (sessionIdRef.current) {
        headers.set("x-session-id", sessionIdRef.current);
      }
      const res = await fetch(url, { ...init, headers });
      if (res.status === 429) {
        const cloned = res.clone();
        try {
          const body = (await cloned.json()) as { kind?: LimitState };
          setLimitState(body.kind === "session_quota" ? "session_quota" : "burst");
        } catch {
          setLimitState("burst");
        }
        setRemaining(0);
        setBannerDismissed(false);
      } else if (res.ok) {
        const r = res.headers.get("X-RateLimit-Remaining");
        if (r != null) setRemaining(Number(r));
        // A successful response means we're back under the burst window.
        if (limitState === "burst") setLimitState(null);
      }
      return res;
    },
  });

  useEffect(() => {
    if (initialQuery && !seededRef.current && messages.length === 0) {
      seededRef.current = true;
      append({ role: "user", content: initialQuery });
    }
  }, [initialQuery, messages.length, append]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
  }, [messages]);

  // Auto-clear burst banner after 60s.
  useEffect(() => {
    if (limitState !== "burst") return;
    const t = setTimeout(() => setLimitState(null), 60_000);
    return () => clearTimeout(t);
  }, [limitState]);

  const isEmpty = messages.length === 0;
  const inputDisabled = isLoading || limitState === "session_quota";
  const showBanner = limitState !== null && !bannerDismissed;
  const showRemainingHint =
    remaining !== null &&
    remaining > 0 &&
    remaining <= 5 &&
    limitState !== "session_quota";

  return (
    <main className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-6 pt-24 md:pt-32 pb-4">
        {isEmpty ? (
          <div className="flex-1 flex flex-col justify-center fade-in">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Ask the studio
            </p>
            <h1 className="mt-4 font-serif text-display-serif text-foreground leading-[1.02] text-balance">
              What are you trying to <span className="italic">ship?</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              An assistant trained on DevJoe&apos;s services, scope, and
              pricing. Describe what you&apos;re working on. It&apos;ll
              recommend the right engagement or tell you if it&apos;s out of
              scope.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={inputDisabled}
                  onClick={() => append({ role: "user", content: prompt })}
                  className="inline-flex items-center justify-between sm:justify-start gap-2 px-5 py-3 rounded-full border border-border text-sm text-foreground hover:border-foreground hover:bg-foreground/[0.03] transition-colors w-full sm:w-auto text-left disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 space-y-12 pb-44 md:pb-48">
            {messages.map((message) => (
              <div key={message.id} className="fade-in">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {message.role === "user" ? "You" : "DevJoe (AI)"}
                </p>
                {message.role === "assistant" ? (
                  <div className="text-foreground">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={markdownComponents}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-lg leading-relaxed whitespace-pre-wrap text-foreground">
                    {message.content}
                  </div>
                )}
              </div>
            ))}
            {isLoading &&
              messages[messages.length - 1]?.role === "user" && (
                <div className="text-sm text-muted-foreground">Thinking…</div>
              )}
            <div ref={endRef} className="scroll-mb-44 md:scroll-mb-48" />
          </div>
        )}

        <div className="sticky bottom-0 mt-8 -mx-6 px-6 pt-8 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-background from-60% to-transparent">
          {showBanner && (
            <RateLimitBanner
              kind={limitState!}
              onDismiss={() => setBannerDismissed(true)}
            />
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 sm:gap-3">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={
                  limitState === "session_quota"
                    ? "Daily limit reached"
                    : "Ask about services, scope, pricing…"
                }
                disabled={inputDisabled}
                enterKeyHint="send"
                autoComplete="off"
                className="flex-1 min-w-0 border border-border bg-background rounded-full px-5 sm:px-6 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={inputDisabled || !input.trim()}
                aria-label="Send message"
                className="inline-flex items-center justify-center gap-2 h-12 w-12 sm:w-auto sm:px-6 sm:py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-30 shrink-0"
              >
                <span className="hidden sm:inline">Send</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {showRemainingHint && (
              <p className="mt-3 text-xs text-muted-foreground text-center">
                {remaining} message{remaining === 1 ? "" : "s"} left today
              </p>
            )}

            {!showRemainingHint && (
              <p className="mt-3 text-xs text-muted-foreground text-center">
                AI-generated. May get details wrong. For anything important,
                use{" "}
                <Link
                  href="/contact"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  the contact form
                </Link>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

function RateLimitBanner({
  kind,
  onDismiss,
}: {
  kind: "burst" | "session_quota";
  onDismiss: () => void;
}) {
  const isQuota = kind === "session_quota";

  return (
    <div className="mb-4 flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 fade-in">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">
          {isQuota
            ? "You've reached your daily message limit."
            : "Slow down, too many requests."}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {isQuota
            ? "Want to talk directly? Send me a message instead."
            : "Try again in a moment."}
        </p>
      </div>

      {isQuota && (
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors shrink-0"
        >
          Contact
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}

      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss"
        className="shrink-0 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ChatInner />
    </Suspense>
  );
}
