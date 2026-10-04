"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUp,
  Box,
  Briefcase,
  Building2,
  Check,
  ChevronsRight,
  Copy,
  Plane,
  Trash2,
} from "lucide-react";
import { track } from "@vercel/analytics";
import { CONTACT_EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const MAX_CHARS = 500;

const suggestions = [
  { icon: Box, text: "What's in the AI Prototype?" },
  { icon: Plane, text: "What did Joe build at Booking.com?" },
  { icon: Briefcase, text: "Is Joe open to full-time roles?" },
  { icon: Building2, text: "Do you work with agencies?" },
];

const errorCopy: Record<string, string> = {
  burst: "That's a lot of questions at once. Give it a minute and try again.",
  daily: `That's today's limit for this chat. You can email ${CONTACT_EMAIL} or book a call instead.`,
  global: `The assistant has had a busy day and is resting. Email ${CONTACT_EMAIL} and Joe will reply himself.`,
  disabled: `The assistant is offline right now. Email ${CONTACT_EMAIL} instead.`,
  default: "Something went wrong. Please try again.",
};

// Only [label](/path) links from the assistant become clickable, and only to
// pages on this site or Joe's email.
function renderContent(text: string, onNavigate: () => void): ReactNode {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    const [full, label, href] = match;
    parts.push(text.slice(last, match.index));
    const internal = href.startsWith("/") && !href.startsWith("//");
    if (href === "/cv") {
      parts.push(
        <a key={match.index} href="/cv" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          {label}
        </a>,
      );
    } else if (internal) {
      parts.push(
        <Link key={match.index} href={href} onClick={onNavigate} className="underline underline-offset-4">
          {label}
        </Link>,
      );
    } else if (href === `mailto:${CONTACT_EMAIL}`) {
      parts.push(
        <a key={match.index} href={href} className="underline underline-offset-4">
          {label}
        </a>,
      );
    } else {
      parts.push(label);
    }
    last = match.index + full.length;
  }
  parts.push(text.slice(last));
  return parts.map((part, i) => <Fragment key={i}>{part}</Fragment>);
}

export default function ChatPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, error]);

  useEffect(() => () => abortRef.current?.abort(), []);

  // On small screens the panel covers the page, so close it when following a link.
  const closeIfCovering = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) onClose();
  };

  const send = async (text: string) => {
    const question = text.trim().slice(0, MAX_CHARS);
    if (!question || streaming) return;

    const history: Message[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setStreaming(true);
    track("Chat Message Sent");

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-6) }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => ({}));
        const key = res.status === 429 ? body.reason : body.error;
        setError(errorCopy[key] ?? errorCopy.default);
        setMessages(history.slice(0, -1).concat({ role: "user", content: question }));
        return;
      }

      const left = res.headers.get("X-Chat-Remaining");
      setRemaining(left ? Number(left) : null);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer) {
        setError(errorCopy.default);
        setMessages(history);
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setError(errorCopy.default);
        setMessages(history);
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const clear = () => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    inputRef.current?.focus();
  };

  const copyConversation = async () => {
    const text = messages
      .map((m) => `${m.role === "user" ? "You" : "AI"}: ${m.content}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked; nothing else to do.
    }
  };

  const iconButton =
    "inline-flex h-8 w-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <aside
      id="site-chat"
      aria-label="Ask AI"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      className={cn(
        "fixed inset-y-0 right-0 z-[60] flex h-[100dvh] w-full flex-col border-l border-neutral-200 bg-white transition-transform duration-300 ease-out lg:w-[400px]",
        open ? "translate-x-0" : "invisible translate-x-full",
      )}
    >
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-200 px-4">
        <h2 className="text-base font-medium text-neutral-950">Ask AI</h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={copyConversation}
            disabled={messages.length === 0}
            aria-label="Copy conversation"
            className={iconButton}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={clear}
            disabled={messages.length === 0}
            aria-label="Clear conversation"
            className={iconButton}
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button type="button" onClick={onClose} aria-label="Close chat" className={iconButton}>
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div ref={logRef} role="log" aria-live="polite" className="flex flex-1 flex-col overflow-y-auto px-4 py-5">
        {messages.length === 0 ? (
          <div className="mt-auto">
            <p className="text-sm text-neutral-500">
              Ask about Joe&apos;s work, services, prices or availability.
            </p>
            <ul className="mt-4 space-y-1">
              {suggestions.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <button
                    type="button"
                    onClick={() => send(text)}
                    className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-neutral-950 transition-colors hover:bg-neutral-100"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-neutral-500" aria-hidden />
                    {text}
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-5 hidden items-center gap-1.5 text-sm text-neutral-500 lg:flex">
              Tip: open and close chat with
              <kbd className="rounded border border-neutral-200 px-1.5 font-mono text-xs">⌘</kbd>
              <kbd className="rounded border border-neutral-200 px-1.5 font-mono text-xs">I</kbd>
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <p
                  key={i}
                  className="ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-neutral-950 px-3.5 py-2 text-sm text-white"
                >
                  {m.content}
                </p>
              ) : (
                <div key={i} className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-800">
                  {m.content ? (
                    renderContent(m.content, closeIfCovering)
                  ) : (
                    <span className="inline-flex gap-1 text-neutral-400" aria-label="Thinking">
                      <span className="animate-pulse">·</span>
                      <span className="animate-pulse [animation-delay:150ms]">·</span>
                      <span className="animate-pulse [animation-delay:300ms]">·</span>
                    </span>
                  )}
                </div>
              ),
            )}
          </div>
        )}
        {error ? (
          <p className="mt-5 rounded-md border border-neutral-200 bg-[#F5F5F5] px-3 py-2 text-sm text-neutral-700">
            {error}
          </p>
        ) : null}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="shrink-0 border-t border-neutral-200 p-3"
      >
        <div className="rounded-xl border border-neutral-200 focus-within:border-neutral-400">
          <label htmlFor="chat-input" className="sr-only">
            Ask a question
          </label>
          <textarea
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            maxLength={MAX_CHARS}
            rows={3}
            placeholder="Ask a question..."
            className="block w-full resize-none bg-transparent px-3 pt-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none"
          />
          <div className="flex items-center justify-between px-3 pb-2">
            <span className="font-mono text-[11px] text-neutral-400">
              {input.length > MAX_CHARS - 100 ? `${input.length}/${MAX_CHARS}` : ""}
            </span>
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              aria-label="Send"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-950 text-white transition-colors hover:bg-neutral-800 disabled:bg-neutral-100 disabled:text-neutral-400"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-[11px] leading-snug text-neutral-400">
          Answers are AI-generated and sent via OpenAI. Don&apos;t share personal details.
          {remaining !== null && remaining <= 5 ? ` ${remaining} messages left today.` : ""}
        </p>
      </form>
    </aside>
  );
}
