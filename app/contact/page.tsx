import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="section-container fade-in">
          <div className="text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Contact
            </p>
            <h1 className="mt-6 font-serif text-hero-serif text-foreground text-balance">
              <span className="italic">Let&apos;s</span> talk.
            </h1>
            <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Pick a 30-minute slot below, or send a message if you&apos;d
              prefer. No pitch deck, no sales call. Just a focused conversation
              about what you want to ship.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-surface/60 overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>

          <div className="mt-24 text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Or send a message
            </p>
            <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
              Prefer to <span className="italic">write first?</span>
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed text-pretty">
              Drop a few lines about your company and what you&apos;re trying
              to build. Replies usually land within a day.
            </p>
            <div className="mt-10 mx-auto max-w-2xl text-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
