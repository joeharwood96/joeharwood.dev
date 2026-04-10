import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";
import AIChatTeaser from "@/components/ai-chat-teaser";
import { projects } from "@/data/projects";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://joeharwood.dev/#person",
        name: "Joe Harwood",
        url: "https://joeharwood.dev",
        jobTitle: "Software Engineer",
        description:
          "Software engineer in Amsterdam building AI-powered products and clean web experiences.",
        email: "joeharwooddev@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amsterdam",
          addressCountry: "NL",
        },
        sameAs: [
          "https://github.com/joeharwood96",
          "https://www.linkedin.com/in/josephharwood-3/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://joeharwood.dev/#website",
        url: "https://joeharwood.dev",
        name: "Joe Harwood — Software Engineer",
        publisher: { "@id": "https://joeharwood.dev/#person" },
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
      <section id="hero" className="pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-3xl mx-auto px-6 fade-in">
          <p className="text-sm text-muted-foreground mb-8">
            Joe Harwood — Software engineer, Amsterdam
          </p>

          <h1 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold tracking-tight leading-[1.02] text-foreground">
            I build AI-powered products and clean web experiences.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Full-stack engineer with six years building software at Booking.com,
            IBM, and my own products. Focused on shipping fast, useful things.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:border-foreground transition-colors"
            >
              Chat with my AI CV
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 fade-in">
          <p className="text-sm text-muted-foreground mb-8">Selected work</p>
          <ul className="border-y border-border divide-y divide-border">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 fade-in">
          <p className="text-sm text-muted-foreground">About</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-foreground">
            A software engineer who likes shipping.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m based in Amsterdam and have spent the last six years
              building web applications across enterprise platforms, startups,
              and my own side projects — from high-traffic booking systems at{" "}
              <span className="text-foreground">Booking.com</span> to AI-powered
              tools and the social discovery platform{" "}
              <span className="text-foreground">Weeknights</span>.
            </p>
            <p>
              I care about code quality, user experience, and the small details
              that make software feel calm to use. Lately I&apos;ve been focused
              on AI products and the design space around them.
            </p>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Next.js · TypeScript · React · Node.js · Postgres · Supabase ·
            Tailwind
          </p>
        </div>
      </section>

      {/* AI Chat teaser */}
      <AIChatTeaser />

      {/* Contact */}
      <section id="contact" className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 fade-in">
          <p className="text-sm text-muted-foreground">Contact</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-foreground">
            Get in touch.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Interested in working together, or have an opportunity to discuss?
            I&apos;d love to hear from you.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
