import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import FadeIn from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, type Service } from "@/data/services";
import { CALENDLY_URL } from "@/lib/constants";

export default function ServiceLayout({ service }: { service: Service }) {
  const nextService =
    services[
      (services.findIndex((s) => s.slug === service.slug) + 1) % services.length
    ];

  return (
    <main className="relative flex min-h-screen flex-col bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 sm:pt-40">
        <FadeIn y={20} duration={0.8}>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
        </FadeIn>

        <FadeIn y={20} duration={0.8} delay={0.1}>
          <div
            className="relative mt-8 overflow-hidden rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-24"
            style={{
              backgroundColor: service.accent.bg,
              color: service.accent.fg,
            }}
          >
            <div className="flex flex-wrap gap-3">
              {[service.label, service.priceLabel, service.durationLabel].map(
                (chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tabular-nums"
                    style={{ border: `1px solid ${service.accent.border}` }}
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>

            <h1 className="mt-10 max-w-3xl text-balance text-[2.45rem] font-medium leading-[1.1] tracking-tight sm:text-[3.6rem] md:text-[4.35rem]">
              {service.name}
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl"
              style={{ color: service.accent.fgMuted }}
            >
              {service.description}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${CALENDLY_URL}?utm_source=service-${service.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: service.accent.fg,
                  color: service.accent.bg,
                }}
              >
                Book this
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-opacity hover:opacity-80"
                style={{
                  color: service.accent.fg,
                  border: `1px solid ${service.accent.border}`,
                }}
              >
                Ask a question
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Deliverables */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn className="mb-12 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            What you get
          </h2>
        </FadeIn>
        <FadeIn duration={0.6}>
          <ul className="grid gap-x-6 gap-y-3 border-t border-neutral-200 pt-8 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start text-base font-medium text-neutral-600"
              >
                <span className="mr-3 mt-0.5 text-neutral-300">-</span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn className="mb-12 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            How it works
          </h2>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1} duration={0.6}>
              <div className="h-full rounded-[2rem] border border-neutral-200 bg-[#F5F5F5] p-8">
                <span className="text-sm font-medium tabular-nums text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn className="mb-12 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Who it&apos;s for
          </h2>
        </FadeIn>
        <FadeIn duration={0.6}>
          <ul className="max-w-3xl space-y-4 border-t border-neutral-200 pt-8">
            {service.whoFor.map((item) => (
              <li
                key={item}
                className="flex items-start text-lg font-medium leading-relaxed text-neutral-600"
              >
                <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn className="mb-12 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Questions we get a lot
          </h2>
        </FadeIn>
        <FadeIn duration={0.6}>
          <Accordion
            type="single"
            collapsible
            className="max-w-3xl border-t border-neutral-200"
          >
            {service.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-neutral-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-neutral-500">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 text-center sm:py-28">
        <FadeIn className="mx-auto max-w-4xl" y={30} duration={0.8}>
          <h2 className="mb-6 text-[3rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[4.5rem]">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-neutral-500">
            Pick a 30-minute slot and tell me what you&apos;re working on. No
            pitch deck, no sales call, just a focused conversation about what you
            want to ship.
          </p>
          <a
            href={`${CALENDLY_URL}?utm_source=service-${service.slug}-footer`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-10 py-5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95"
          >
            Book the {service.label.toLowerCase()}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </FadeIn>
      </section>

      {/* Next service */}
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-10">
        <Link
          href={`/services/${nextService.slug}`}
          className="group flex flex-col gap-4 border-t border-neutral-200 py-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-neutral-400">Next</p>
            <h3 className="mt-2 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              {nextService.name}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors group-hover:text-neutral-900">
            View service
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
