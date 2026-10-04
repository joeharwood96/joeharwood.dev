import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Building blocks for the code-drawn demos. Every scene receives `t`, the
// milliseconds elapsed in that scene, and derives what to show from it.

export function typed(text: string, t: number, start: number, cps = 45) {
  const count = Math.floor(Math.max(0, t - start) / (1000 / cps));
  return text.slice(0, count);
}

// 0 before `start`, 1 after `start + duration`, linear in between.
export function progress(t: number, start: number, duration: number) {
  return Math.min(1, Math.max(0, (t - start) / duration));
}

export function Caret({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-neutral-950" />
  );
}

export function Panel({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex min-h-0 flex-col border-neutral-200 bg-white", className)}>
      <p className="mono-label border-b border-neutral-200 px-4 py-2.5">{title}</p>
      <div className="min-h-0 flex-1 p-4 sm:p-5">{children}</div>
    </div>
  );
}

export function Appear({
  at,
  t,
  children,
  className,
}: {
  at: number;
  t: number;
  children: ReactNode;
  className?: string;
}) {
  const visible = t >= at;
  return (
    <div
      className={cn(
        "transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

// Two panels side by side on desktop, stacked on mobile.
export function Split({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="grid h-full md:grid-cols-2">
      <div className="min-h-0 border-neutral-200 max-md:border-b md:border-r">{left}</div>
      <div className="min-h-0">{right}</div>
    </div>
  );
}

export function Bar({
  offset,
  width,
  fill = 1,
}: {
  offset: number;
  width: number;
  fill?: number;
}) {
  return (
    <div className="relative h-6 border-x border-dashed border-neutral-200">
      <div
        className="absolute inset-y-1 rounded-sm border border-neutral-300 bg-neutral-100"
        style={{
          left: `${offset}%`,
          width: `${width * fill}%`,
          opacity: fill > 0 ? 1 : 0,
        }}
      />
    </div>
  );
}
