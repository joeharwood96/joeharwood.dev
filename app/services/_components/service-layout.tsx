import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CalendlyButton from "@/components/calendly-button";
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
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28"
        style={{ backgroundColor: service.accent.bg, color: service.accent.fg }}
      >
        <div className="section-container fade-in text-center">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm mb-16 transition-opacity hover:opacity-80"
            style={{ color: service.accent.fgMuted }}
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs tracking-[0.22em] uppercase"
              style={{
                color: service.accent.fg,
                border: `1px solid ${service.accent.border}`,
              }}
            >
              {service.label}
            </span>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs tabular-nums"
              style={{
                color: service.accent.fg,
                border: `1px solid ${service.accent.border}`,
              }}
            >
              {service.priceLabel}
            </span>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs"
              style={{
                color: service.accent.fg,
                border: `1px solid ${service.accent.border}`,
              }}
            >
              {service.durationLabel}
            </span>
          </div>

          <h1
            className="font-serif text-hero-serif text-balance"
            style={{ color: service.accent.fg }}
          >
            {service.name}
          </h1>

          <p
            className="mt-10 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-pretty"
            style={{ color: service.accent.fgMuted }}
          >
            {service.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href={`${CALENDLY_URL}?utm_source=service-${service.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: service.accent.fg,
                color: service.accent.bg,
              }}
            >
              Book this
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
              style={{
                color: service.accent.fg,
                border: `1px solid ${service.accent.border}`,
              }}
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            What you get
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            Deliverables, plain and <span className="italic">simple.</span>
          </h2>
          <ul className="mt-12 mx-auto max-w-3xl border-t border-border">
            {service.deliverables.map((item, i) => (
              <li
                key={i}
                className="py-6 border-b border-border flex gap-6 text-foreground/90 text-left"
              >
                <span className="text-sm text-muted-foreground tabular-nums w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-pretty">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Process
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            How it <span className="italic">breaks down.</span>
          </h2>

          <ol className="mt-14 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.process.map((step, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border bg-surface/60 p-7 text-left"
              >
                <span className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
                  {step.title}
                </span>
                <p className="mt-4 text-base leading-relaxed text-foreground/90 text-pretty">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Who it&apos;s for
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            If this sounds like <span className="italic">you.</span>
          </h2>
          <ul className="mt-12 mx-auto max-w-2xl space-y-4 text-left">
            {service.whoFor.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 text-base leading-relaxed text-foreground/90 text-pretty"
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: service.accent.bg }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            Questions we get a <span className="italic">lot.</span>
          </h2>

          <Accordion
            type="single"
            collapsible
            className="mt-10 mx-auto max-w-3xl text-left"
          >
            {service.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground text-pretty">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Ready to start
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            Book your <span className="italic">{service.name.toLowerCase()}.</span>
          </h2>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Click through to Calendly, pick a 30-minute slot, and we&apos;ll
            take it from there. No pitch deck, no sales call.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CalendlyButton
              label={`Book the ${service.label.toLowerCase()}`}
              source={`service-${service.slug}-footer`}
            />
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="border-t border-border">
        <div className="section-container py-16 text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-6">
            Next
          </p>
          <Link
            href={`/services/${nextService.slug}`}
            className="group inline-flex flex-col items-center gap-3 py-6 transition-opacity hover:opacity-80"
          >
            <span className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              {nextService.label}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              {nextService.name}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              Read service
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
