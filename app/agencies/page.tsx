import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import FadeIn from "@/components/motion/fade-in";
import { CALENDLY_URL } from "@/lib/constants";
import TrackedLink from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "React and Next.js support for agencies · DevJoe",
  description:
    "Senior React and Next.js delivery support for design, marketing, and digital agencies that need dependable development capacity.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/agencies",
    title: "React and Next.js support for agencies · DevJoe",
    description:
      "Senior React and Next.js delivery support for agencies that need dependable development capacity.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const supportModes = [
  {
    title: "Overflow delivery",
    description:
      "Add senior development capacity when the work is sold but your internal team is full.",
  },
  {
    title: "Embedded support",
    description:
      "Join an existing project, work within your delivery process, and communicate directly with designers and technical leads.",
  },
  {
    title: "End-to-end implementation",
    description:
      "Take an approved design or clearly scoped brief through development, QA, deployment, and handover.",
  },
];

const capabilities = [
  "React and Next.js implementation",
  "TypeScript front ends and full-stack applications",
  "CMS, API, authentication, and payment integrations",
  "Responsive, accessible UI from supplied designs",
  "Existing codebase improvements and delivery rescue",
  "Clear handover to your team or client",
];

export default function AgenciesPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 sm:pt-52">
        <FadeIn y={20} duration={0.8}>
          <div className="max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
              For design, marketing, and digital agencies
            </p>
            <h1 className="mt-6 text-balance text-[2.45rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[3.6rem] md:text-[4.35rem] lg:text-[4.75rem]">
              Senior React and Next.js delivery support for agencies.
              <span className="mt-6 block text-[0.78em] leading-[1.08] text-neutral-400">
                Dependable development capacity for projects that need to ship
                without adding a permanent hire.
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <TrackedLink
                href={`${CALENDLY_URL}?utm_source=agency-hero`}
                target="_blank"
                rel="noopener noreferrer"
                eventName="Agency Enquiry Clicked"
                eventData={{ action: "schedule", location: "agency_hero" }}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-base font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95"
              >
                Check availability
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </TrackedLink>
              <TrackedLink
                href="mailto:joeharwooddev@gmail.com?subject=Agency%20delivery%20support"
                eventName="Agency Enquiry Clicked"
                eventData={{ action: "email", location: "agency_hero" }}
                className="inline-flex items-center justify-center rounded-full bg-[#F5F5F5] px-8 py-4 text-base font-medium text-neutral-900 transition-colors hover:bg-[#E5E5E5]"
              >
                Email project details
              </TrackedLink>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn className="mb-14 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Flexible support, clear ownership
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-neutral-500">
            I can work under your agency&apos;s process and client relationship,
            taking responsibility for a defined stream of delivery.
          </p>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {supportModes.map((mode, index) => (
            <FadeIn key={mode.title} delay={index * 0.08} duration={0.6}>
              <div className="h-full rounded-[2rem] bg-[#F5F5F5] p-8">
                <h3 className="text-2xl font-medium tracking-tight">
                  {mode.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-500">
                  {mode.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn duration={0.8}>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              What I can own
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-neutral-500">
              Best suited to projects with an agreed direction, an accountable
              agency lead, and enough scope for meaningful delivery.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} duration={0.8}>
            <ul className="border-t border-neutral-200">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start border-b border-neutral-200 py-5 text-lg font-medium text-neutral-700"
                >
                  <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  {capability}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn duration={0.8}>
          <div className="rounded-[3rem] bg-[#0a0a0a] px-8 py-16 text-white sm:px-16 sm:py-24">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Senior delivery experience
            </p>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-medium tracking-tight sm:text-5xl">
              Product-minded development, without a long technical hiring
              process.
            </h2>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-neutral-400">
              I spent three and a half years building customer-facing products
              at Booking.com, with earlier experience at Appical and IBM. I am
              comfortable working with established codebases, cross-functional
              teams, and production delivery standards.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 text-center sm:py-32">
        <FadeIn className="mx-auto max-w-4xl" duration={0.8}>
          <h2 className="text-[3rem] font-medium leading-[1.1] tracking-tight sm:text-[4.5rem]">
            Need delivery capacity?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            Send the project, timing, stack, and the part you need owned. I&apos;ll
            reply with availability and the most practical next step.
          </p>
          <TrackedLink
            href={`${CALENDLY_URL}?utm_source=agency-footer`}
            target="_blank"
            rel="noopener noreferrer"
            eventName="Agency Enquiry Clicked"
            eventData={{ action: "schedule", location: "agency_footer" }}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-neutral-900 px-10 py-5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95"
          >
            Check availability
            <ArrowRight className="ml-2 h-5 w-5" />
          </TrackedLink>
        </FadeIn>
      </section>

      <SiteFooter />
    </main>
  );
}
