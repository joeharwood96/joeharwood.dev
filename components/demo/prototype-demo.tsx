"use client";

import { FileText } from "lucide-react";
import DemoPlayer, { type DemoScene } from "@/components/demo/demo-player";
import { Appear, Caret, Panel, Split, progress, typed } from "@/components/demo/primitives";

// AI Prototype demo: a contract Q&A tool, from kick-off to the hand-over report.

const oneThing =
  "Our team reads 40-page policy documents to answer one question. Can it find the answer and show where it came from?";

const kickoff = [
  { label: "Must do", value: "Answer questions about one policy, with the clause it came from", at: 2600 },
  { label: "Data", value: "20 sample policies (PDF)", at: 3200 },
  { label: "Not now", value: "Logins, billing, other document types", at: 3800 },
  { label: "Demo on", value: "Day 10, with the team", at: 4400 },
];

function KickoffScene({ t }: { t: number }) {
  const text = typed(oneThing, t, 300);
  return (
    <Split
      left={
        <Panel title="Kick-off call" className="h-full">
          <p className="text-lg leading-relaxed text-neutral-950 sm:text-xl">
            &ldquo;{text}
            <Caret show={text.length < oneThing.length} />
            {text.length === oneThing.length ? "”" : null}
          </p>
          <Appear at={2400} t={t}>
            <p className="mt-4 font-mono text-xs text-neutral-500">
              Founder · insurance startup · day 1
            </p>
          </Appear>
        </Panel>
      }
      right={
        <Panel title="The one thing it must do" className="h-full">
          <dl className="space-y-3">
            {kickoff.map((item) => (
              <Appear key={item.label} at={item.at} t={t}>
                <div className="grid grid-cols-[80px_1fr] gap-3 border-b border-dashed border-neutral-200 pb-3">
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

const question = "Is water damage from a burst pipe covered?";
const answer =
  "Yes, if the pipe burst suddenly. Gradual leaks are excluded. The excess is €250.";

function PrototypeScene({ t }: { t: number }) {
  const upload = progress(t, 300, 1500);
  const reply = typed(answer, t, 3600, 32);
  const done = reply.length === answer.length;
  return (
    <Split
      left={
        <Panel title="policy-HX-2041.pdf" className="h-full">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 shrink-0 text-neutral-400" aria-hidden />
            <div className="flex-1">
              <p className="text-sm text-neutral-950">Home policy · 42 pages</p>
              <div className="mt-2 h-1 w-full bg-neutral-100">
                <div className="h-1 bg-neutral-950" style={{ width: `${upload * 100}%` }} />
              </div>
              <p className="mt-1 font-mono text-[11px] text-neutral-500">
                {upload < 1 ? "reading pages..." : "312 clauses indexed"}
              </p>
            </div>
          </div>
          <div className="mt-5 space-y-2 font-mono text-[11px] leading-relaxed text-neutral-400">
            <p>4.1 Escape of water</p>
            <p
              className={
                done
                  ? "-mx-1 rounded-sm bg-amber-100 px-1 text-neutral-950 transition-colors duration-500"
                  : "transition-colors duration-500"
              }
            >
              4.2 We cover sudden escape of water from fixed pipes. Gradual leaks or
              seepage are excluded. Excess: €250.
            </p>
            <p>4.3 Frozen pipes in unoccupied homes</p>
          </div>
        </Panel>
      }
      right={
        <Panel title="Prototype · demo link" className="h-full">
          <div className="flex h-full flex-col justify-end gap-3">
            <Appear at={2200} t={t}>
              <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-neutral-950 px-3.5 py-2 text-sm text-white">
                {question}
              </p>
            </Appear>
            <Appear at={3000} t={t}>
              <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-neutral-200 bg-[#F5F5F5] px-3.5 py-2 text-sm text-neutral-950">
                {reply || <span className="text-neutral-400">···</span>}
                <Caret show={reply.length > 0 && !done} />
              </div>
            </Appear>
            <Appear at={6600} t={t}>
              <p className="font-mono text-[11px] text-neutral-500">source: clause 4.2, page 17</p>
            </Appear>
          </div>
        </Panel>
      }
    />
  );
}

const findings = [
  { mark: "✓", text: "Right answer and clause on 18 of 20 test questions", at: 400 },
  { mark: "✓", text: "Answers in under 3 seconds", at: 1000 },
  { mark: "✗", text: "Struggles with scanned PDFs", at: 1600 },
  { mark: "→", text: "Next: add OCR, then test with real users", at: 2200 },
];

function ReportScene({ t }: { t: number }) {
  return (
    <Split
      left={
        <Panel title="Report · what we learned" className="h-full">
          <ul className="space-y-2.5">
            {findings.map((f) => (
              <Appear key={f.text} at={f.at} t={t}>
                <li className="flex gap-3 text-sm text-neutral-950">
                  <span className="w-4 shrink-0 font-mono text-neutral-500">{f.mark}</span>
                  {f.text}
                </li>
              </Appear>
            ))}
          </ul>
        </Panel>
      }
      right={
        <Panel title="Report · what a real build costs" className="h-full">
          <Appear at={3000} t={t}>
            <p className="mono-label">Production version</p>
            <p className="mt-1 text-2xl font-medium tracking-tight text-neutral-950">
              From €12,000 · 4 to 6 weeks
            </p>
          </Appear>
          <Appear at={3800} t={t}>
            <p className="mt-4 text-sm text-neutral-600">
              Running cost at 1,000 questions a month: about €4.
            </p>
          </Appear>
          <Appear at={4600} t={t}>
            <p className="mt-5 flex items-center gap-2 text-sm text-neutral-950">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Code, demo link and report handed over. Yours to keep.
            </p>
          </Appear>
        </Panel>
      }
    />
  );
}

const scenes: DemoScene[] = [
  { key: "kickoff", label: "Kick-off", duration: 6500, Scene: KickoffScene },
  { key: "prototype", label: "Prototype", duration: 8000, Scene: PrototypeScene },
  { key: "report", label: "Report", duration: 6500, Scene: ReportScene },
];

export default function PrototypeDemo() {
  return (
    <DemoPlayer
      scenes={scenes}
      caption="example · policy q&a prototype"
      ariaLabel="Example AI Prototype: a policy question tool going from kick-off call to working prototype to hand-over report"
    />
  );
}
