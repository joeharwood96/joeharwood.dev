"use client";

import DemoPlayer, { type DemoScene } from "@/components/demo/demo-player";
import {
  Appear,
  Bar,
  Caret,
  Panel,
  Split,
  progress,
  typed,
} from "@/components/demo/primitives";
import { cn } from "@/lib/utils";

// Homepage demo: one AI Prototype from brief to live in ten working days.

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
    <Split
      left={
        <Panel title="Client brief" className="h-full">
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
      }
      right={
        <Panel title="Agreed scope" className="h-full">
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
      }
    />
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
    <Split
      left={
        <Panel title="app/api/assistant/route.ts" className="h-full">
          <pre className="overflow-hidden whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-neutral-800 sm:text-xs">
            {src}
            <Caret show={src.length < code.length} />
          </pre>
        </Panel>
      }
      right={
        <Panel title="Preview · shop.example.com" className="h-full">
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
      }
    />
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
  const p = progress(t, 300, 4000);
  return (
    <Split
      left={
        <Panel title="Terminal" className="h-full">
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
      }
      right={
        <Panel title="10 working days" className="h-full">
          <div className="space-y-2.5">
            {timeline.map((row) => {
              const start = row.offset / 100;
              const end = (row.offset + row.width) / 100;
              const fill = Math.min(1, Math.max(0, (p - start) / (end - start)));
              return (
                <div key={row.step} className="grid grid-cols-[64px_1fr] items-center gap-3">
                  <span className="font-mono text-xs text-neutral-900">{row.step}</span>
                  <Bar offset={row.offset} width={row.width} fill={fill} />
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
      }
    />
  );
}

const scenes: DemoScene[] = [
  { key: "scope", label: "Scope", duration: 6000, Scene: ScopeScene },
  { key: "build", label: "Build", duration: 7500, Scene: BuildScene },
  { key: "ship", label: "Ship", duration: 6500, Scene: ShipScene },
];

export default function DemoReel() {
  return (
    <DemoPlayer
      scenes={scenes}
      caption="demo · ai order assistant"
      ariaLabel="Demo: an AI order assistant going from brief to live in ten working days"
    />
  );
}
