import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import FadeIn from "@/components/motion/fade-in";
import ContactForm from "@/components/contact-form";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact · DevJoe",
  description:
    "Book a 30-minute call with DevJoe or send a message. No pitch deck, no sales call. Just a focused conversation about what you want to ship.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/contact",
    title: "Contact · DevJoe",
    description: "Book a 30-minute call with DevJoe or send a message.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 sm:pt-40">
        <FadeIn y={20} duration={0.8}>
          <div className="max-w-6xl">
            <h1 className="text-balance text-[2.45rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[3.6rem] md:text-[4.35rem] lg:text-[4.75rem]">
              Let&apos;s talk.
              <span className="mt-6 block text-[0.78em] leading-[1.08] text-neutral-400">
                Pick a 30-minute slot below, or send a message if you&apos;d
                prefer. No pitch deck, no sales call, just a focused
                conversation about what you want to ship.
              </span>
            </h1>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
        <FadeIn duration={0.8}>
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#F5F5F5]">
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-28">
        <FadeIn className="mb-12 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Prefer to write first?
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            Drop a few lines about your company and what you&apos;re trying to
            build. Replies usually land within a day.
          </p>
        </FadeIn>
        <FadeIn duration={0.6}>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </FadeIn>
      </section>

      <SiteFooter />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
