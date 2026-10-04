"use client";

import DemoPlayer, { type DemoScene } from "@/components/demo/demo-player";
import { Appear, Panel, Split, progress } from "@/components/demo/primitives";
import { cn } from "@/lib/utils";

// AI Feature Launch demo: smart search shipped into an existing product.

const diff = [
  { sign: "+", text: "import { smartSearch } from \"@/lib/ai/search\";", at: 300 },
  { sign: " ", text: "", at: 500 },
  { sign: "-", text: "const results = await db.candidates.where(filters);", at: 800 },
  { sign: "+", text: "const results = query.length > 3", at: 1300 },
  { sign: "+", text: "  ? await smartSearch(query, { orgId, limit: 20 })", at: 1700 },
  { sign: "+", text: "  : await db.candidates.where(filters);", at: 2100 },
  { sign: "+", text: "track(\"search\", { mode: \"smart\", ms });", at: 2600 },
];

const checks = [
  { text: "Types and lint", at: 3400 },
  { text: "Unit tests (42)", at: 3900 },
  { text: "Preview deployed", at: 4400 },
  { text: "Approved by your tech lead", at: 5200 },
];

function BuildScene({ t }: { t: number }) {
  return (
    <Split
      left={
        <Panel title="PR #318 · smart search for candidates" className="h-full">
          <div className="space-y-0.5 font-mono text-[11px] leading-relaxed sm:text-xs">
            {diff.map((line, i) => (
              <Appear key={i} at={line.at} t={t}>
                <p
                  className={cn(
                    "-mx-2 whitespace-pre px-2",
                    line.sign === "+" && "bg-emerald-50 text-emerald-900",
                    line.sign === "-" && "bg-red-50 text-red-900 line-through decoration-red-300",
                  )}
                >
                  <span className="mr-2 text-neutral-400">{line.sign}</span>
                  {line.text}
                </p>
              </Appear>
            ))}
          </div>
        </Panel>
      }
      right={
        <Panel title="Checks · your repo, your process" className="h-full">
          <ul className="space-y-3">
            {checks.map((c) => (
              <Appear key={c.text} at={c.at} t={t}>
                <li className="flex items-center gap-3 text-sm text-neutral-950">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                    ✓
                  </span>
                  {c.text}
                </li>
              </Appear>
            ))}
          </ul>
          <Appear at={6000} t={t}>
            <p className="mt-5 font-mono text-[11px] text-neutral-500">merged · week 3 of 5</p>
          </Appear>
        </Panel>
      }
    />
  );
}

const evals = [
  { q: "senior react devs in amsterdam", ok: true, at: 300 },
  { q: "nurses open to night shifts", ok: true, at: 700 },
  { q: "someone like our last hire", ok: true, at: 1100 },
  { q: "candidates who speak dutch and german", ok: true, at: 1500 },
  { q: "cheap developers", ok: false, at: 1900 },
];

const guardrails = [
  { text: "Never ranks on age, gender or nationality", at: 3200 },
  { text: "Ignores instructions hidden in CVs", at: 3800 },
  { text: "Falls back to normal search if the model is down", at: 4400 },
];

function TestScene({ t }: { t: number }) {
  const score = Math.round(80 + 14 * progress(t, 300, 2200));
  return (
    <Split
      left={
        <Panel title="Answer quality · 120 test searches" className="h-full">
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-medium tabular-nums tracking-tight text-neutral-950">{score}%</p>
            <p className="font-mono text-xs text-neutral-500">relevant top 5</p>
          </div>
          <ul className="mt-4 space-y-1.5 font-mono text-[11px] sm:text-xs">
            {evals.map((e) => (
              <Appear key={e.q} at={e.at} t={t}>
                <li className="flex justify-between gap-3">
                  <span className="truncate text-neutral-700">&ldquo;{e.q}&rdquo;</span>
                  <span className={e.ok ? "text-emerald-600" : "text-amber-600"}>
                    {e.ok ? "pass" : "flagged"}
                  </span>
                </li>
              </Appear>
            ))}
          </ul>
        </Panel>
      }
      right={
        <Panel title="Guardrails" className="h-full">
          <ul className="space-y-3">
            {guardrails.map((g) => (
              <Appear key={g.text} at={g.at} t={t}>
                <li className="flex gap-3 text-sm text-neutral-950">
                  <span className="font-mono text-emerald-600">✓</span>
                  {g.text}
                </li>
              </Appear>
            ))}
          </ul>
          <Appear at={5200} t={t}>
            <p className="mt-5 text-sm text-neutral-600">
              &ldquo;Cheap developers&rdquo; now asks for a budget instead of guessing.
            </p>
          </Appear>
        </Panel>
      }
    />
  );
}

const stages = [
  { pct: "5%", at: 300 },
  { pct: "25%", at: 1800 },
  { pct: "100%", at: 3300 },
];

function LaunchScene({ t }: { t: number }) {
  const stage = stages.filter((s) => t >= s.at).length;
  const grow = progress(t, 300, 4200);
  const bars = [0.2, 0.25, 0.3, 0.45, 0.6, 0.7, 0.85, 0.95, 1];
  return (
    <Split
      left={
        <Panel title="Rollout · feature flag smart-search" className="h-full">
          <div className="grid grid-cols-3 gap-2">
            {stages.map((s, i) => (
              <div
                key={s.pct}
                className={cn(
                  "border px-3 py-3 text-center transition-colors duration-500",
                  i < stage ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 text-neutral-400",
                )}
              >
                <p className="text-lg font-medium tabular-nums">{s.pct}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.06em]">of users</p>
              </div>
            ))}
          </div>
          <Appear at={4200} t={t}>
            <p className="mt-5 flex items-center gap-2 text-sm text-neutral-950">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live for everyone. Two weeks of tuning included.
            </p>
          </Appear>
        </Panel>
      }
      right={
        <Panel title="Monitoring · first week" className="h-full">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Searches", value: Math.round(2140 * grow).toLocaleString("en-GB") },
              { label: "Cost / day", value: `€${(1.8 * grow).toFixed(2)}` },
              { label: "p95", value: "0.9s" },
            ].map((m) => (
              <div key={m.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-neutral-500">{m.label}</p>
                <p className="mt-1 text-lg font-medium tabular-nums text-neutral-950">{m.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex h-16 items-end gap-1.5" aria-hidden>
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-neutral-200"
                style={{ height: `${Math.max(4, h * 100 * Math.min(1, grow * 1.4 - i * 0.05))}%` }}
              />
            ))}
          </div>
        </Panel>
      }
    />
  );
}

const scenes: DemoScene[] = [
  { key: "build", label: "Build", duration: 7000, Scene: BuildScene },
  { key: "test", label: "Test", duration: 6500, Scene: TestScene },
  { key: "launch", label: "Launch", duration: 6500, Scene: LaunchScene },
];

export default function FeatureLaunchDemo() {
  return (
    <DemoPlayer
      scenes={scenes}
      caption="example · smart search launch"
      ariaLabel="Example AI Feature Launch: smart search built into an existing product, tested for quality and safety, then rolled out behind a feature flag"
    />
  );
}
