import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroBackdrop from "@/components/hero-backdrop";
import ServiceCard from "@/components/service-card";
import CaseStudyCard from "@/components/case-study-card";
import AIChatTeaser from "@/components/ai-chat-teaser";
import CalendlyButton from "@/components/calendly-button";
import TrustStrip from "@/components/trust-strip";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { BRAND } from "@/lib/constants";

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://joeharwood.dev/#studio",
        name: "DevJoe",
        url: "https://joeharwood.dev",
        description:
          "A small engineering studio in Amsterdam. Product, with AI where it earns its keep.",
        founder: {
          "@type": "Person",
          name: BRAND.founder,
          url: "https://joeharwood.dev",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amsterdam",
          addressCountry: "NL",
        },
        areaServed: ["Netherlands", "Europe"],
      },
      {
        "@type": "Person",
        "@id": "https://joeharwood.dev/#person",
        name: BRAND.founder,
        jobTitle: "Founder, DevJoe",
        url: "https://joeharwood.dev",
        email: "joeharwooddev@gmail.com",
        sameAs: [
          "https://github.com/joeharwood96",
          "https://www.linkedin.com/in/josephharwood-3/",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
        <HeroBackdrop />
        <div className="relative section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Engineering studio, Amsterdam
          </p>

          <h1 className="mt-10 font-serif text-hero-serif text-foreground text-balance">
            <span className="italic">Product</span>
            <br />
            that actually ships.
          </h1>

          <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            A small studio shipping product for mid-market companies, with AI
            where it earns its keep. In weeks, not quarters.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton label="Book a call" source="home-hero" />
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm font-medium text-foreground hover:border-foreground transition-colors"
            >
              See the services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="section-container fade-in">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Services
            </p>
            <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
              Two ways to <span className="italic">work</span> together.
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed text-pretty">
              Two productised ways to bring AI into your product. Pick the
              smallest thing that proves value. Most engagements start with an
              audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="work" className="py-20 md:py-28">
        <div className="section-container fade-in">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Work
            </p>
            <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
              Selected <span className="italic">case studies.</span>
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed text-pretty">
              Independent products, AI experiments, and features shipped inside
              larger product teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
            >
              See all work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Studio
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            Run by <span className="italic">Joe Harwood.</span>
          </h2>
          <div className="mt-10 mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-foreground/80 text-pretty">
            <p>
              DevJoe is a small engineering studio in Amsterdam. It&apos;s run
              by Joe, six years shipping software at{" "}
              <span className="text-foreground">Booking.com</span>,{" "}
              <span className="text-foreground">IBM</span>, and his own
              products, including the social discovery platform{" "}
              <span className="text-foreground">Weeknights</span>.
            </p>
            <p>
              The goal is simple: help mid-market companies ship good product,
              with AI where it earns its keep. No 12-month roadmaps, no
              innovation theatre. Scope the smallest thing that proves value,
              build it, hand it over, and let the result do the talking.
            </p>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Next.js · TypeScript · React · Node.js · Postgres · Supabase ·
            OpenAI · Anthropic
          </p>
        </div>
      </section>

      {/* AI Chat teaser */}
      <AIChatTeaser />

      {/* Primary CTA */}
      <section className="py-20 md:py-28">
        <div className="section-container fade-in text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Start here
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            Book a <span className="italic">30-minute call.</span>
          </h2>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            A no-pitch conversation about what you&apos;re trying to ship and
            whether DevJoe is the right fit. Free.
          </p>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3">
            <CalendlyButton label="Book a 30-minute call" source="home-cta" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/60 text-sm font-medium text-foreground hover:border-foreground transition-colors"
            >
              Or send a message
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
