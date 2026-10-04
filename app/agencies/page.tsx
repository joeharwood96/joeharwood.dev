import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import FeatureList from "@/components/site/feature-list";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI features for agencies · DevJoe",
  description:
    "White-label AI product engineering for agencies. Sell the AI work, I build it under your name.",
  openGraph: {
    type: "website",
    url: "https://www.devjoe.io/agencies",
    title: "AI features for agencies · DevJoe",
    description:
      "White-label AI product engineering for agencies. Sell the AI work, I build it under your name.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const modes = [
  {
    title: "One-off AI feature",
    description:
      "Your client wants a chatbot, smart search or document tool. I build it into the site or app you already run for them.",
  },
  {
    title: "Overflow delivery",
    description:
      "The project is sold and your team is full. I take a defined part of it in React, Next.js or Node.",
  },
  {
    title: "Ongoing AI partner",
    description:
      "Steady AI work across several clients. Two days a week, booked in advance.",
  },
];

const capabilities = [
  "Chat and search over client content",
  "Document summaries and extraction",
  "Recommendations and personalisation",
  "React and Next.js front ends",
  "Node, Postgres and Supabase back ends",
  "Stripe and third-party integrations",
];

export default function AgenciesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      <Section innerClassName="border-b px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
        <FadeIn y={12}>
          <p className="mono-label">For agencies</p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-medium tracking-tight sm:text-6xl">
            Sell the AI work. I&apos;ll build it under your name.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            Clients keep asking for AI features. I build them inside your
            process, for your client, without you hiring for it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={`${CALENDLY_URL}?utm_source=agency-hero`}
              external
              size="lg"
              eventName="Agency Enquiry Clicked"
              eventData={{ action: "schedule", location: "agency_hero" }}
            >
              Check availability
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href={`mailto:${CONTACT_EMAIL}?subject=Agency%20AI%20project`}
              variant="outline"
              size="lg"
              eventName="Agency Enquiry Clicked"
              eventData={{ action: "email", location: "agency_hero" }}
            >
              Email the brief
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section innerClassName="border-b">
        <div className="px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="mono-label">How we can work</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Pick what fits the project
          </h2>
        </div>
        <ul className="mt-10 grid border-t border-neutral-200 md:grid-cols-3">
          {modes.map((mode) => (
            <li
              key={mode.title}
              className="border-neutral-200 p-6 sm:p-10 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r"
            >
              <h3 className="text-xl font-medium tracking-tight">{mode.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-500">
                {mode.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section innerClassName="grid gap-10 border-b px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-2">
        <div>
          <p className="mono-label">Background</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Built AI at Booking.com scale
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-500">
            Three and a half years at Booking.com, where I built their first AI
            Trip Planner. Before that, Appical and IBM. I&apos;m used to other
            people&apos;s codebases, design files and review processes.
          </p>
        </div>
        <FeatureList label="What I build" items={capabilities} />
      </Section>

      <Section innerClassName="px-6 py-16 sm:px-10 sm:py-24">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Got a client asking for AI?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
          Send the brief, the stack and the timing. I&apos;ll reply within a
          working day with availability and a rough price.
        </p>
        <ButtonLink
          href={`${CALENDLY_URL}?utm_source=agency-footer`}
          external
          size="lg"
          className="mt-8"
          eventName="Agency Enquiry Clicked"
          eventData={{ action: "schedule", location: "agency_footer" }}
        >
          Check availability
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </Section>
    </main>
  );
}
