"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import ProjectCard from "@/components/project-card";
import ProjectMarquee from "@/components/project-marquee";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import CustomCursor from "@/components/custom-cursor";
import { projects } from "@/data/projects";

// Animated line component for hero - reveals whole lines to avoid glyph clipping
function AnimatedLine({
  text,
  delay = 0
}: {
  text: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className="block px-[0.05em]"
      style={{ clipPath: "inset(-5% -5% -15% -5%)" }}
    >
      <span
        className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "translate-y-[115%]"
        }`}
      >
        {text}
      </span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://joeharwood.dev/#person",
        name: "Joe Harwood",
        url: "https://joeharwood.dev",
        image: "https://joeharwood.dev/dev-joe.png",
        jobTitle: "Freelance Next.js Developer",
        description:
          "Freelance Next.js developer based in Amsterdam, specialising in Next.js, headless CMS, TypeScript, and full-stack web applications.",
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
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Headless CMS",
          "Tailwind CSS",
          "Full-Stack Development",
          "Web Development",
        ],
        alumniOf: [
          { "@type": "Organization", name: "Booking.com" },
          { "@type": "Organization", name: "IBM" },
          { "@type": "Organization", name: "Post Office" },
          { "@type": "Organization", name: "Appical" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://joeharwood.dev/#website",
        url: "https://joeharwood.dev",
        name: "DevJoe - Freelance Next.js Developer",
        description:
          "Freelance Next.js developer based in Amsterdam. Headless CMS, TypeScript, and full-stack web applications.",
        publisher: { "@id": "https://joeharwood.dev/#person" },
      },
      {
        "@type": "ItemList",
        "@id": "https://joeharwood.dev/#projects",
        name: "Featured Projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: `https://joeharwood.dev/projects/${project.slug}`,
            author: { "@id": "https://joeharwood.dev/#person" },
            keywords: project.tags.join(", "),
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CustomCursor />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <nav className="flex justify-between items-center px-6 py-6 md:px-12">
          <Link href="/" className="relative">
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={120}
              height={25}
              className="invert"
              priority
              unoptimized
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white hover:opacity-70 transition-opacity duration-500"
            aria-label="Toggle menu"
          >
            <Plus
              className={`w-6 h-6 transition-transform duration-500 ${
                menuOpen ? "rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {[
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "#work", label: "Work" },
            { href: "#contact", label: "Contact" },
          ].map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-5xl md:text-7xl font-bold text-white tracking-tighter hover:opacity-50 transition-all duration-500 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 100}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 pt-32">
        <div className="text-center">
          <h1 className="headline text-[12vw] md:text-[10vw] leading-[1]">
            <AnimatedLine text="Modern Web" delay={100} />
            <AnimatedLine text="Development" delay={300} />
          </h1>
          <p className="text-xl md:text-2xl text-[#525252] mt-8 max-w-2xl mx-auto body-text opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            Freelance developer based in Amsterdam, specialising in Next.js, headless CMS, and TypeScript applications.
          </p>
          <div className="flex gap-4 justify-center mt-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.3s" }}>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors duration-500"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-500"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      {/* Project Marquee */}
      <ProjectMarquee />

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="mono-text text-[#525252] mb-6">About</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            I build fast, scalable web applications with{" "}
            <span className="text-[#525252]">Next.js</span>,{" "}
            <span className="text-[#525252]">headless CMS</span>, and{" "}
            <span className="text-[#525252]">TypeScript</span>.
          </p>
          <p className="text-lg md:text-xl text-[#525252] body-text mt-8 max-w-3xl leading-relaxed">
            Previously engineering at Booking.com, IBM, Post Office, and Appical. Now I help startups and businesses ship modern web products — from marketing sites with headless CMS to full-stack SaaS applications.
          </p>
          <div className="flex flex-wrap gap-4 mt-12">
            {["Next.js", "React", "TypeScript", "Node.js", "Headless CMS", "Tailwind CSS", "Supabase", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="mono-text text-[#737373] hover:text-black transition-colors duration-500"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <p className="mono-text text-[#525252] mb-6">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              {
                title: "Next.js Development",
                description: "High-performance web applications built with Next.js — server-side rendering, static generation, API routes, and the App Router.",
              },
              {
                title: "Headless CMS Integration",
                description: "Content-driven websites powered by Sanity, Contentful, or Strapi. Fully editable by your team, fast for your users.",
              },
              {
                title: "Full-Stack Applications",
                description: "End-to-end product development from database design to deployment. Authentication, payments, real-time features — the full stack.",
              },
              {
                title: "API & Backend Development",
                description: "RESTful and GraphQL APIs built with Node.js and TypeScript. Third-party integrations, data pipelines, and microservices.",
              },
            ].map((service) => (
              <div key={service.title} className="flex flex-col gap-4 group">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#525252] body-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="mono-text text-[#525252] mb-6">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Selected Projects
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="mono-text text-[#525252] mb-6">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">
            Let&apos;s work together
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
