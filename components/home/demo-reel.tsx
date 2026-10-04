"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// A looping, code-drawn "video" of one AI Prototype: scope, build, ship.
// Everything is derived from the elapsed time `t` in the current scene, so
// pausing and jumping between scenes stays in sync.

const scenes = [
  { key: "scope", label: "Scope", duration: 6000 },
  { key: "build", label: "Build", duration: 7500 },
  { key: "ship", label: "Ship", duration: 6500 },
] as const;

const TICK = 50;

function typed(text: string, t: number, start: number, cps = 45) {
  const count = Math.floor(Math.max(0, t - start) / (1000 / cps));
  return text.slice(0, count);
}

function Caret({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-neutral-950" />
  );
}

function Panel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col border-neutral-200 bg-white", className)}>
      <p className="mono-label border-b border-neutral-200 px-4 py-2.5">{title}</p>
      <div className="flex-1 p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Appear({ at, t, children }: { at: number; t: number; children: React.ReactNode }) {
  const visible = t >= at;
  return (
    <div
      className={cn(
        "transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
      )}
    >
      {children}
    </div>
  );
}

const brief =
  "Customers email us all day asking where their order is. Can they just ask in chat?";

const scope = [
  { label: "Feature", value: "Order questions in chat", at: 2400 },
  { label: "Data", value: "Orders and shipping API", at: 3000 },
  { label: "Model", value: "OpenAI, swappable later", at: 3600 },
  { label: "Done when", value: "8 in 10 questions answered without support", at: 4200 },
];

function ScopeScene({ t }: { t: number }) {
  const text = typed(brief, t, 300);
  return (
    <div className="grid h-full md:grid-cols-2">
      <Panel title="Client brief" className="max-md:border-b md:border-r">
        <p className="text-lg leading-relaxed text-neutral-950 sm:text-xl">
          &ldquo;{text}
          <Caret show={text.length < brief.length} />
          {text.length === brief.length ? "”" : null}
        </p>
        <Appear at={2100} t={t}>
          <p className="mt-4 font-mono text-xs text-neutral-500">
            Ops lead · online shop · 30 min call
          </p>
        </Appear>
      </Panel>
      <Panel title="Agreed scope">
        <dl className="space-y-3">
          {scope.map((item) => (
            <Appear key={item.label} at={item.at} t={t}>
              <div className="grid grid-cols-[88px_1fr] gap-3 border-b border-dashed border-neutral-200 pb-3">
                <dt className="font-mono text-xs uppercase tracking-[0.06em] text-neutral-500">
                  {item.label}
                </dt>
                <dd className="text-sm text-neutral-950">{item.value}</dd>
              </div>
            </Appear>
          ))}
        </dl>
      </Panel>
    </div>
  );
}

const code = `export async function POST(req: Request) {
  const { question, customerId } = await req.json();
  const orders = await getOrders(customerId);

  return streamAnswer({
    question,
    context: orders,
    handOff: ["refund", "complaint"],
  });
}`;

const question = "Where's order #4821?";
const answer =
  "It left the Rotterdam warehouse this morning. It should arrive Thursday before 18:00.";

function BuildScene({ t }: { t: number }) {
  const src = typed(code, t, 200, 70);
  const reply = typed(answer, t, 4300, 32);
  return (
    <div className="grid h-full md:grid-cols-2">
      <Panel title="app/api/assistant/route.ts" className="max-md:border-b md:border-r">
        <pre className="overflow-hidden whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-neutral-800 sm:text-xs">
          {src}
          <Caret show={src.length < code.length} />
        </pre>
      </Panel>
      <Panel title="Preview · shop.example.com">
        <div className="flex h-full flex-col justify-end gap-3">
          <Appear at={3200} t={t}>
            <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-neutral-950 px-3.5 py-2 text-sm text-white">
              {question}
            </p>
          </Appear>
          <Appear at={3900} t={t}>
            <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-neutral-200 bg-[#F5F5F5] px-3.5 py-2 text-sm text-neutral-950">
              {reply || <span className="text-neutral-400">···</span>}
              <Caret show={reply.length > 0 && reply.length < answer.length} />
            </div>
          </Appear>
          <Appear at={7000} t={t}>
            <p className="font-mono text-[11px] text-neutral-500">
              sources: orders, shipping · 1.2s
            </p>
          </Appear>
          <div className="mt-1 flex h-9 items-center rounded-full border border-neutral-200 px-3.5 text-sm text-neutral-400">
            Ask about an order
          </div>
        </div>
      </Panel>
    </div>
  );
}

const log = [
  { text: "$ npm run evals", at: 300, tone: "cmd" },
  { text: "✓ 47 of 50 answers correct", at: 1000, tone: "ok" },
  { text: "✓ refunds hand off to a person", at: 1600, tone: "ok" },
  { text: "✓ €0.002 per answer", at: 2200, tone: "ok" },
  { text: "$ vercel deploy --prod", at: 2900, tone: "cmd" },
  { text: "● live at shop.example.com", at: 3700, tone: "live" },
] as const;

const timeline = [
  { step: "scope()", offset: 0, width: 10 },
  { step: "build()", offset: 10, width: 70 },
  { step: "test()", offset: 60, width: 25 },
  { step: "ship()", offset: 85, width: 15 },
];

function ShipScene({ t }: { t: number }) {
  const progress = Math.min(1, Math.max(0, (t - 300) / 4000));
  return (
    <div className="grid h-full md:grid-cols-2">
      <Panel title="Terminal" className="max-md:border-b md:border-r">
        <div className="space-y-1.5 font-mono text-xs">
          {log.map((line) => (
            <Appear key={line.text} at={line.at} t={t}>
              <p
                className={cn(
                  line.tone === "cmd" && "text-neutral-500",
                  line.tone === "ok" && "text-neutral-950",
                  line.tone === "live" && "text-emerald-600",
                )}
              >
                {line.text}
              </p>
            </Appear>
          ))}
        </div>
      </Panel>
      <Panel title="10 working days">
        <div className="space-y-2.5">
          {timeline.map((row) => {
            const end = (row.offset + row.width) / 100;
            const fill = Math.min(1, Math.max(0, (progress - row.offset / 100) / (end - row.offset / 100)));
            return (
              <div key={row.step} className="grid grid-cols-[64px_1fr] items-center gap-3">
                <span className="font-mono text-xs text-neutral-900">{row.step}</span>
                <div className="relative h-6 border-x border-dashed border-neutral-200">
                  <div
                    className="absolute inset-y-1 rounded-sm border border-neutral-300 bg-neutral-100"
                    style={{
                      left: `${row.offset}%`,
                      width: `${row.width * fill}%`,
                      opacity: fill > 0 ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Appear at={4600} t={t}>
          <p className="mt-5 flex items-center gap-2 text-sm text-neutral-950">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live with real customers. Code and report handed over.
          </p>
        </Appear>
      </Panel>
    </div>
  );
}

export default function DemoReel() {
  const reduceMotion = useReducedMotion();
  const [{ scene, t }, setPlayhead] = useState({ scene: 0, t: 0 });
  const [paused, setPaused] = useState(false);

  // Reduced motion: show each scene finished and let people step through.
  const stopped = paused || !!reduceMotion;

  useEffect(() => {
    if (stopped) return;
    const id = setInterval(() => {
      setPlayhead((prev) => {
        const next = prev.t + TICK;
        return next >= scenes[prev.scene].duration
          ? { scene: (prev.scene + 1) % scenes.length, t: 0 }
          : { scene: prev.scene, t: next };
      });
    }, TICK);
    return () => clearInterval(id);
  }, [stopped]);

  const shownT = reduceMotion ? scenes[scene].duration : t;

  const goTo = (index: number) => setPlayhead({ scene: index, t: 0 });

  return (
    <div
      className="grid-frame bg-white"
      role="region"
      aria-roledescription="demo"
      aria-label="Demo: an AI order assistant going from brief to live in ten working days"
    >
      <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-2.5">
        <div className="flex items-center gap-1">
          {scenes.map((s, index) => {
            const active = index === scene;
            const fill = active ? (reduceMotion ? 1 : shownT / s.duration) : index < scene ? 1 : 0;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => goTo(index)}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "relative overflow-hidden rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.06em] transition-colors",
                  active ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-700",
                )}
              >
                <span className="mr-1.5 text-neutral-400">0{index + 1}</span>
                {s.label}
                <span
                  className="absolute inset-x-3 bottom-0 h-px origin-left bg-neutral-950"
                  style={{ transform: `scaleX(${fill})` }}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <p className="hidden font-mono text-xs text-neutral-500 sm:block">
            demo · ai order assistant
          </p>
          {!reduceMotion ? (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play demo" : "Pause demo"}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100"
            >
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          ) : null}
        </div>
      </div>

      <div className="h-[560px] overflow-hidden sm:h-[420px] md:h-[300px]">
        {scene === 0 ? <ScopeScene t={shownT} /> : null}
        {scene === 1 ? <BuildScene t={shownT} /> : null}
        {scene === 2 ? <ShipScene t={shownT} /> : null}
      </div>
    </div>
  );
}
