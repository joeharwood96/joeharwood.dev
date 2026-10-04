import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import { CALENDLY_URL } from "@/lib/constants";

// A two-week prototype, drawn as a trace. Widths are share of 10 working days.
const timeline = [
  { step: "scope()", offset: 0, width: 10, time: "day 1" },
  { step: "build()", offset: 10, width: 70, time: "days 2-8" },
  { step: "test()", offset: 60, width: 25, time: "days 7-9" },
  { step: "ship()", offset: 85, width: 15, time: "day 10" },
];

export default function Hero() {
  return (
    <Section innerClassName="border-b">
      <div className="grid gap-10 px-6 pb-12 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1fr_auto] lg:items-end">
        <FadeIn y={12}>
          <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            AI features,
            <br />
            shipped to production.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={`${CALENDLY_URL}?utm_source=hero`}
              external
              size="lg"
              eventName="Fit Call Clicked"
              eventData={{ location: "hero" }}
            >
              Book a call
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#offers" variant="outline" size="lg">
              See the offers
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn y={12} delay={0.1}>
          <ul className="space-y-1 font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-neutral-600 lg:text-right">
            <li>For startups and agencies</li>
            <li>Fixed price, fixed scope</li>
            <li>Ex Booking.com</li>
          </ul>
        </FadeIn>
      </div>

      <FadeIn y={12} delay={0.15}>
        <div className="px-6 pb-16 sm:px-10 sm:pb-24">
          <div className="grid-frame bg-white p-5 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="mono-label">ai-prototype · 10 working days</p>
              <p className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                live
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {timeline.map((row) => (
                <div
                  key={row.step}
                  className="grid grid-cols-[72px_1fr_64px] items-center gap-3 sm:grid-cols-[96px_1fr_80px]"
                >
                  <span className="font-mono text-xs text-neutral-900">
                    {row.step}
                  </span>
                  <div className="relative h-7 border-x border-dashed border-neutral-200">
                    <div
                      className="absolute inset-y-1 rounded-sm border border-neutral-300 bg-neutral-100"
                      style={{ left: `${row.offset}%`, width: `${row.width}%` }}
                    />
                  </div>
                  <span className="text-right font-mono text-xs text-neutral-500">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
