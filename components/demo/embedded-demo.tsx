"use client";

import DemoPlayer, { type DemoScene } from "@/components/demo/demo-player";
import { Appear, Panel, Split, progress } from "@/components/demo/primitives";
import { cn } from "@/lib/utils";

// Embedded AI Engineer demo: two days a week inside a team, then the monthly review.

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const joeDays = new Set(["Tue", "Thu"]);

const blocks: Record<string, { time: string; text: string; at: number }[]> = {
  Tue: [
    { time: "09:30", text: "Standup", at: 600 },
    { time: "10:00", text: "Inbox summaries", at: 1200 },
    { time: "14:00", text: "Pair on prompts", at: 1800 },
  ],
  Thu: [
    { time: "09:30", text: "Standup", at: 2400 },
    { time: "10:00", text: "Model cost review", at: 3000 },
    { time: "15:00", text: "Ship + demo", at: 3600 },
  ],
};

function WeekScene({ t }: { t: number }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <p className="mono-label border-b border-neutral-200 px-4 py-2.5">
        Your team&apos;s week · Joe on Tuesdays and Thursdays
      </p>
      <div className="grid flex-1 grid-cols-5">
        {days.map((day) => (
          <div
            key={day}
            className={cn(
              "border-neutral-200 p-2 sm:p-3 [&:not(:last-child)]:border-r",
              !joeDays.has(day) && "bg-[#FAFAFA]",
            )}
          >
            <p
              className={cn(
                "font-mono text-xs uppercase tracking-[0.06em]",
                joeDays.has(day) ? "text-neutral-950" : "text-neutral-400",
              )}
            >
              {day}
            </p>
            <div className="mt-3 space-y-2">
              {(blocks[day] ?? []).map((b) => (
                <Appear key={b.text} at={b.at} t={t}>
                  <div className="rounded-sm border border-neutral-300 bg-neutral-100 px-2 py-1.5">
                    <p className="font-mono text-[10px] text-neutral-500">{b.time}</p>
                    <p className="text-xs text-neutral-950 sm:text-sm">{b.text}</p>
                  </div>
                </Appear>
              ))}
              {!joeDays.has(day) ? (
                <p className="text-[11px] text-neutral-400">Your team</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Each card moves to "In progress" then "Shipped" at its own times.
const cards = [
  { text: "Summarise long support threads", start: 600, ship: 2600 },
  { text: "Switch tagging to a cheaper model", start: 1400, ship: 3600 },
  { text: "Answer-quality tests in CI", start: 2200, ship: 4600 },
  { text: "Draft replies for agents", start: 3400, ship: Infinity },
];

const columns = ["To do", "In progress", "Shipped"] as const;

function BacklogScene({ t }: { t: number }) {
  const stageOf = (c: (typeof cards)[number]) => (t >= c.ship ? 2 : t >= c.start ? 1 : 0);
  return (
    <div className="flex h-full flex-col bg-white">
      <p className="mono-label border-b border-neutral-200 px-4 py-2.5">AI backlog · this month</p>
      <div className="grid flex-1 grid-cols-3">
        {columns.map((col, ci) => (
          <div key={col} className="border-neutral-200 p-2 sm:p-3 [&:not(:last-child)]:border-r">
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-neutral-500">
              {col} · {cards.filter((c) => stageOf(c) === ci).length}
            </p>
            <div className="mt-3 space-y-2">
              {cards
                .filter((c) => stageOf(c) === ci)
                .map((c) => (
                  <div
                    key={c.text}
                    className={cn(
                      "rounded-sm border px-2 py-2 text-xs sm:text-sm",
                      ci === 2
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-neutral-300 bg-neutral-100 text-neutral-950",
                    )}
                  >
                    {c.text}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const shipped = [
  { text: "Thread summaries live for all agents", at: 300 },
  { text: "Tagging moved to a smaller model", at: 900 },
  { text: "Quality tests run on every PR", at: 1500 },
];

function ReviewScene({ t }: { t: number }) {
  const saving = Math.round(62 * progress(t, 2200, 1500));
  return (
    <Split
      left={
        <Panel title="Monthly review · shipped" className="h-full">
          <ul className="space-y-2.5">
            {shipped.map((s) => (
              <Appear key={s.text} at={s.at} t={t}>
                <li className="flex gap-3 text-sm text-neutral-950">
                  <span className="font-mono text-emerald-600">✓</span>
                  {s.text}
                </li>
              </Appear>
            ))}
          </ul>
          <Appear at={2200} t={t}>
            <div className="mt-5">
              <p className="text-3xl font-medium tabular-nums tracking-tight text-neutral-950">
                -{saving}%
              </p>
              <p className="text-sm text-neutral-500">AI running costs after the model switch</p>
            </div>
          </Appear>
        </Panel>
      }
      right={
        <Panel title="Next month" className="h-full">
          <ol className="space-y-2.5">
            {["Draft replies for agents", "Search across the help centre", "Weekly quality report"].map(
              (item, i) => (
                <Appear key={item} at={3600 + i * 500} t={t}>
                  <li className="flex gap-3 text-sm text-neutral-950">
                    <span className="font-mono text-neutral-400">0{i + 1}</span>
                    {item}
                  </li>
                </Appear>
              ),
            )}
          </ol>
          <Appear at={5400} t={t}>
            <p className="mt-5 font-mono text-[11px] text-neutral-500">
              €6,000 / month · 2 days a week · month to month after 3
            </p>
          </Appear>
        </Panel>
      }
    />
  );
}

const scenes: DemoScene[] = [
  { key: "week", label: "Week", duration: 6000, Scene: WeekScene },
  { key: "backlog", label: "Backlog", duration: 6500, Scene: BacklogScene },
  { key: "review", label: "Review", duration: 7000, Scene: ReviewScene },
];

export default function EmbeddedDemo() {
  return (
    <DemoPlayer
      scenes={scenes}
      caption="example · support team, month one"
      ariaLabel="Example Embedded AI Engineer month: two days a week with a support team, backlog items shipped, then a monthly review"
    />
  );
}
