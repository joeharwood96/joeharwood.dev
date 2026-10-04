import type { Metadata } from "next";
import Script from "next/script";
import FadeIn from "@/components/motion/fade-in";
import ContactForm from "@/components/contact-form";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";
import Section from "@/components/site/section";
import CalendlyEventTracking from "@/components/calendly-event-tracking";

export const metadata: Metadata = {
  title: "Contact · DevJoe",
  description:
    "Book a 30-minute call about an AI feature, a project for your agency, or a role.",
  openGraph: {
    type: "website",
    url: "https://www.devjoe.io/contact",
    title: "Contact · DevJoe",
    description:
      "Book a 30-minute call about an AI feature, a project for your agency, or a role.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      <CalendlyEventTracking />

      <Section innerClassName="border-b px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24">
        <FadeIn y={12}>
          <p className="mono-label">Contact</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-medium tracking-tight sm:text-6xl">
            Let&apos;s talk
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            An AI feature, a project for your agency, or a role you&apos;re
            hiring for. Pick a slot or send a message.
          </p>
        </FadeIn>
      </Section>

      <Section innerClassName="grid lg:grid-cols-[1.3fr_1fr]">
        <div className="border-neutral-200 max-lg:border-b lg:border-r">
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&utm_source=contact-embed`}
            style={{ minWidth: "320px", height: "720px" }}
          />
        </div>
        <div className="p-6 sm:p-10">
          <p className="mono-label">Message</p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight">
            Prefer to write it down?
          </h2>
          <p className="mt-2 text-base leading-relaxed text-neutral-500">
            Tell me what you want to build and by when. I reply within a working
            day. Or email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-neutral-950 underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
