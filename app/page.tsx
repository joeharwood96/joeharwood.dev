"use client";

import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import ProjectCard from "@/components/project-card";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";
import TypewriterText from "@/components/typewriter-text";
import { projects } from "@/data/projects";

const companies = [
  { name: "Booking.com", logo: "/logos/Booking.com/Booking.com_Logo_1.png" },
  { name: "IBM", logo: "/logos/ibm-logo-18910.png" },
  { name: "Weeknights", logo: "/logos/WEEKNIGHTS-LOGO-ORANGE copy.png" },
  { name: "Appical", logo: "/logos/Appical/Appical_idtsDOMAEO_0.png" },
];

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
          "Software engineer based in Amsterdam, building modern web applications with React, Next.js, TypeScript, and Node.js.",
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
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full pt-24">
          <BlurFade delay={0.15}>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Software Engineer &middot; Amsterdam
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8 max-w-4xl min-h-[3em]">
              <TypewriterText />
            </h1>
          </BlurFade>

          <BlurFade delay={0.7}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16">
              Full-stack engineer with 6+ years of experience building web
              applications at scale. Previously at Booking.com, IBM, and
              Appical.
            </p>
          </BlurFade>

          {/* Company Logos — inline with hero */}
          <BlurFade delay={0.9}>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <span className="text-sm text-muted-foreground">
                I&apos;ve worked with
              </span>
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={40}
                    className="h-8 w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.1} inView>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                  About me
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I&apos;m a software engineer based in Amsterdam with a passion for
                  building{" "}
                  <span className="text-foreground font-medium">fast, accessible, and well-crafted</span>{" "}
                  web applications.
                </p>
                <p className="text-muted-foreground mb-8">
                  Over the past 6+ years I&apos;ve worked across enterprise platforms,
                  startups, and my own products — shipping everything from
                  high-traffic booking systems to AI-powered tools. I care deeply
                  about code quality, user experience, and shipping things that
                  matter.
                </p>

                {/* Tech Stack — plain text */}
                <p className="text-sm text-muted-foreground">
                  Next.js · React · TypeScript · Node.js · Tailwind CSS · Supabase · PostgreSQL
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div>
                {[
                  { company: "Weeknights", role: "Co-Founder", period: "2025-Present" },
                  { company: "Booking.com", role: "Software Engineer II", period: "2022-2025" },
                  { company: "Appical", role: "Software Engineer I", period: "2021-2022" },
                  { company: "IBM", role: "Software Engineer Intern", period: "2019-2021" },
                ].map((exp, i, arr) => (
                  <div
                    key={exp.company}
                    className={`flex justify-between items-center py-4 ${
                      i < arr.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div>
                      <p className="font-medium text-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.role}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1} inView>
            <h2 className="font-serif text-2xl font-light text-foreground mb-16">
              Featured work
            </h2>
          </BlurFade>

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <BlurFade key={project.slug} delay={0.1 + index * 0.1} inView>
                <ProjectCard project={project} index={index} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
                Get in touch
              </h2>
              <p className="text-muted-foreground">
                Interested in working together or have an opportunity to discuss?
                I&apos;d love to hear from you.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <ContactForm />
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  );
}
