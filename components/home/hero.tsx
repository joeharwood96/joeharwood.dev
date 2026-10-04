import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import { CALENDLY_URL } from "@/lib/constants";
import DemoReel from "@/components/home/demo-reel";

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
          <DemoReel />
        </div>
      </FadeIn>
    </Section>
  );
}
