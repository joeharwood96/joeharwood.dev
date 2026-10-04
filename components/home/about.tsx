import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import { LINKEDIN_URL } from "@/lib/nav";

export default function About() {
  return (
    <Section id="about" innerClassName="grid border-b md:grid-cols-[320px_1fr]">
      <div className="border-neutral-200 p-6 sm:p-10 max-md:border-b md:border-r">
        <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-neutral-200 bg-neutral-100">
          <Image
            src="/joe.png"
            alt="Joe Harwood"
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>
      </div>

      <FadeIn y={12} className="p-6 sm:p-10">
        <p className="mono-label">About</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          I&apos;m Joe. I build AI products and ship them.
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-neutral-600">
          <p>
            I spent three and a half years at Booking.com, where I built their
            first AI Trip Planner and a neighbourhood search worth an estimated
            €19.7M a year. Before that, Appical and IBM.
          </p>
          <p>
            In 2026 I launched Weeknights, a marketplace for clubs and events in
            Amsterdam. I built all of it, from Stripe Connect payouts to the
            search, and it now has 830 accounts and 273 published events.
          </p>
          <p>
            I&apos;m based in Amsterdam and work with teams across Europe. I&apos;m
            also open to the right full-time role.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/cv" external eventName="CV Downloaded" eventData={{ location: "about" }}>
            <Download className="h-4 w-4" />
            Download CV
          </ButtonLink>
          <ButtonLink href={LINKEDIN_URL} variant="outline" external>
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </FadeIn>
    </Section>
  );
}
