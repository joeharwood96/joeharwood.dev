import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import { services, type Service } from "@/data/services";
import { CALENDLY_URL } from "@/lib/constants";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="mono-label">{label}</p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function ServiceLayout({ service }: { service: Service }) {
  const nextService =
    services[
      (services.findIndex((s) => s.slug === service.slug) + 1) % services.length
    ];

  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      {/* Hero */}
      <Section innerClassName="border-b px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
        <FadeIn y={12}>
          <p className="mono-label">
            <Link href="/#offers" className="hover:text-neutral-950">
              Services
            </Link>{" "}
            / {service.name}
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_340px] lg:items-end">
          <FadeIn y={12} delay={0.05}>
            <h1 className="text-balance text-5xl font-medium tracking-tight sm:text-6xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500 sm:text-2xl">
              {service.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn y={12} delay={0.1}>
            <div className="grid-frame bg-white p-6">
              <p className="mono-label">Price</p>
              <p className="mt-1 text-2xl font-medium tabular-nums">
                {service.priceLabel}
              </p>
              <p className="mono-label mt-5">Timeline</p>
              <p className="mt-1 text-base">{service.durationLabel}</p>
              <div className="mt-6 grid gap-2">
                <ButtonLink
                  href={`${CALENDLY_URL}?utm_source=service-${service.slug}`}
                  external
                  eventName="Fit Call Clicked"
                  eventData={{ location: "service_hero", service: service.slug }}
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Ask a question
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Deliverables */}
      <Section innerClassName="grid gap-10 border-b px-6 py-16 sm:px-10 md:grid-cols-[1fr_1.4fr] sm:py-20">
        <SectionHeading label="Deliverables" title="What you get" />
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {service.deliverables.map((item) => (
            <li key={item} className="py-4 text-base text-neutral-700">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section innerClassName="border-b">
        <div className="px-6 pt-16 sm:px-10 sm:pt-20">
          <SectionHeading label="Process" title="How it works" />
        </div>
        <ol className="mt-10 grid border-t border-neutral-200 md:grid-cols-3">
          {service.process.map((step, index) => (
            <li
              key={step.title}
              className="border-neutral-200 p-6 sm:p-10 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r"
            >
              <span className="font-mono text-xs text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Fit and terms */}
      <Section innerClassName="grid border-b md:grid-cols-2">
        <div className="border-neutral-200 px-6 py-16 sm:px-10 sm:py-20 max-md:border-b md:border-r">
          <SectionHeading label="Fit" title="Who it's for" />
          <ul className="mt-8 space-y-3">
            {service.whoFor.map((item) => (
              <li key={item} className="flex gap-3 text-base text-neutral-700">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-950" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {service.terms ? (
          <div className="px-6 py-16 sm:px-10 sm:py-20">
            <SectionHeading label="Terms" title="Good to know" />
            <ul className="mt-8 space-y-3">
              {service.terms.map((item) => (
                <li key={item} className="flex gap-3 text-base text-neutral-700">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      {/* FAQ */}
      <Section innerClassName="grid gap-10 border-b px-6 py-16 sm:px-10 md:grid-cols-[1fr_1.4fr] sm:py-20">
        <SectionHeading label="FAQ" title="Common questions" />
        <Accordion type="single" collapsible className="border-t border-neutral-200">
          {service.faq.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-neutral-950">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-neutral-500">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA and next */}
      <Section innerClassName="grid md:grid-cols-2">
        <div className="border-neutral-200 px-6 py-16 sm:px-10 sm:py-20 max-md:border-b md:border-r">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Talk it through first.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
            30 minutes on what you want to build and whether this is the right
            fit. If it isn&apos;t, I&apos;ll say so.
          </p>
          <ButtonLink
            href={`${CALENDLY_URL}?utm_source=service-${service.slug}-footer`}
            external
            size="lg"
            className="mt-8"
            eventName="Fit Call Clicked"
            eventData={{ location: "service_footer", service: service.slug }}
          >
            Book a call
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <Link
          href={`/services/${nextService.slug}`}
          className="group flex flex-col justify-between px-6 py-16 transition-colors hover:bg-white sm:px-10 sm:py-20"
        >
          <p className="mono-label">Next offer</p>
          <div className="mt-10">
            <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
              {nextService.name}
            </h3>
            <p className="mt-2 text-base text-neutral-500">
              {nextService.priceLabel} · {nextService.durationLabel}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-950">
              {nextService.linkLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </Section>
    </main>
  );
}
