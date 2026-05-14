"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    id: 1,
    title: "Understand the product",
    description:
      "Review onboarding, discovery flows, workflows, search, and user friction.",
    capabilities: [
      "Product deep-dive",
      "UX / UI Audit",
      "Friction mapping",
      "User behaviour analysis",
    ],
    graphic: (
      <div className="relative flex aspect-[2/1] w-full max-w-[300px] items-center justify-center">
        <div className="absolute inset-0 rounded-[100%] border border-neutral-300" />
        <div className="absolute inset-6 rounded-[100%] border border-neutral-300" />
        <div className="absolute inset-12 rounded-[100%] border border-neutral-300" />
        <div className="absolute left-[50%] top-[20%] h-1.5 w-1.5 rounded-full bg-neutral-900" />
        <span className="absolute right-[15%] top-[20%] font-mono text-[10px] text-neutral-400">
          2.9
        </span>
        <span className="absolute right-[5%] top-[40%] font-mono text-[10px] text-neutral-400">
          4.6
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: "Identify AI opportunities",
    description:
      "Map practical AI opportunities with the highest product impact.",
    capabilities: [
      "Opportunity mapping",
      "Technical feasibility",
      "Prioritisation",
      "Strategic roadmap",
    ],
    graphic: (
      <div className="relative flex h-24 w-full max-w-[300px] items-center justify-between border-b border-neutral-200">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-neutral-300">
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
        </div>
        <div className="h-px w-16 bg-neutral-300" />
        <svg
          viewBox="0 0 100 50"
          className="h-12 w-24 overflow-visible fill-none stroke-neutral-400"
        >
          <path
            d="M0,25 Q12.5,0 25,25 T50,25 T75,25 T100,25"
            strokeWidth="1"
          />
        </svg>
      </div>
    ),
  },
  {
    id: 3,
    title: "Prototype & validate",
    description:
      "Test ideas quickly before over-investing in implementation.",
    capabilities: [
      "Rapid prototyping",
      "Conversational UX",
      "Validation testing",
      "Concept iteration",
    ],
    graphic: (
      <div className="relative flex h-24 w-full max-w-[300px] items-end justify-center gap-4">
        <div className="h-16 w-12 rounded-t-lg border border-neutral-200 bg-neutral-100" />
        <div className="relative h-20 w-12 rounded-t-lg border border-neutral-300 bg-neutral-200">
          <div className="absolute -top-3 left-1/2 -ml-1 h-2 w-2 rounded-full bg-neutral-900" />
        </div>
        <div className="h-24 w-12 rounded-t-lg border border-neutral-200 bg-neutral-100" />
      </div>
    ),
  },
  {
    id: 4,
    title: "Ship & iterate",
    description:
      "Implement validated features and refine based on real usage.",
    capabilities: [
      "Production build",
      "Quality assurance",
      "Launch support",
      "Continuous refinement",
    ],
    graphic: (
      <div className="relative flex h-24 w-full max-w-[300px] items-center justify-center">
        <div className="absolute inset-0 rounded-2xl border border-dashed border-neutral-300" />
        <div className="flex h-12 w-32 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 font-mono text-xs text-neutral-500">
          v2.0.4
        </div>
      </div>
    ),
  },
];

export default function HomeProcess() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="mx-auto mb-20 w-full max-w-[1400px] px-6"
    >
      <div className="relative rounded-[3rem] bg-[#0a0a0a] px-6 py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[3rem]">
          <m.div
            className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-[#0a0a0a]"
            style={{ opacity: opacity1 }}
          />
          <m.div
            className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-[#0a0a0a]"
            style={{ opacity: opacity2 }}
          />
          <m.div
            className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-900 via-[#0a0a0a]"
            style={{ opacity: opacity3 }}
          />
          <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-white opacity-[0.03] blur-[150px]" />
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="flex flex-col justify-center py-12 lg:sticky lg:top-[10vh] lg:h-[80vh] lg:py-0">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="mb-4 text-xl font-medium tracking-tight text-white/50">
                How I help teams improve discovery
              </h2>
              <div className="text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Better Search,
                <br />
                Recommendations &<br />
                Product Discovery
              </div>
              <p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-neutral-400 sm:text-xl">
                I work closely with teams to improve how users find, compare,
                and choose the right thing.
              </p>
            </m.div>
          </div>

          <div className="flex flex-col gap-6 pb-20 pt-12 lg:pb-[15vh] lg:pt-[10vh]">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="sticky w-full rounded-[2rem] border border-neutral-200/80 bg-[#FDFDFD] p-8 text-neutral-900 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(255,255,255,0.5)_inset] sm:p-12"
                style={{ top: `calc(7rem + ${index * 2}rem)` }}
              >
                <div className="mb-10 flex w-full justify-center border-b border-neutral-100 pb-8">
                  {step.graphic}
                </div>

                <h3 className="mb-4 text-2xl font-medium tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mb-10 text-lg font-medium leading-relaxed text-neutral-600">
                  {step.description}
                </p>

                <div>
                  <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                    Our Capabilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {step.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-center gap-3 rounded-xl bg-[#F4F4F4]/80 px-4 py-3 text-sm font-medium text-neutral-800"
                      >
                        <div className="h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
