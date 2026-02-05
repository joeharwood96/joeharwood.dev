"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Database, Globe, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/ui/blur-fade";
import DotPattern from "@/components/ui/dot-pattern";
import ProjectCard from "@/components/project-card";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Booking.com", logo: "/logos/Booking.com/Booking.com_Logo_1.png" },
  { name: "IBM", logo: "/logos/ibm-logo-18910.png" },
  { name: "Post Office", logo: "/logos/Post%20Office/Post%20Office_idXyh21KYa_0.png" },
  { name: "Appical", logo: "/logos/Appical/Appical_idtsDOMAEO_0.png" },
];

const services = [
  {
    icon: Globe,
    title: "Next.js Development",
    description:
      "High-performance web applications with server-side rendering, static generation, and the App Router.",
  },
  {
    icon: Database,
    title: "Headless CMS",
    description:
      "Content-driven websites powered by Sanity, Contentful, or Strapi. Fully editable by your team.",
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    description:
      "End-to-end product development with authentication, payments, and real-time features.",
  },
  {
    icon: Code2,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs built with Node.js and TypeScript. Third-party integrations included.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
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
      },
      {
        "@type": "WebSite",
        "@id": "https://joeharwood.dev/#website",
        url: "https://joeharwood.dev",
        name: "DevJoe - Freelance Next.js Developer",
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
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <DotPattern
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-16">
          <BlurFade delay={0.1}>
            <Badge variant="secondary" className="mb-6">
              Available for new projects
            </Badge>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Building modern web
              <br />
              experiences with{" "}
              <span className="text-primary">Next.js</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Freelance developer based in Amsterdam, specializing in Next.js,
              headless CMS, and TypeScript applications.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#work">
                  View my work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contact">Get in touch</Link>
              </Button>
            </div>
          </BlurFade>

          {/* Stats */}
          <BlurFade delay={0.5}>
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-md mx-auto">
              {[
                { value: "6+", label: "Years" },
                { value: "4", label: "Enterprise Clients" },
                { value: "AMS", label: "Based" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Previously at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
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
                  className="h-8 w-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.1}>
              <div>
                <Badge variant="outline" className="mb-4">
                  About
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  I build fast, scalable web applications
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With 6+ years of experience, I specialize in{" "}
                  <span className="text-foreground font-medium">Next.js</span>,{" "}
                  <span className="text-foreground font-medium">headless CMS</span>, and{" "}
                  <span className="text-foreground font-medium">TypeScript</span>.
                </p>
                <p className="text-muted-foreground mb-8">
                  Previously engineering at Booking.com, IBM, Post Office, and
                  Appical. Now I help startups and businesses ship modern web
                  products.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="space-y-4">
                {[
                  { company: "Booking.com", role: "Software Engineer", period: "2021-2024" },
                  { company: "IBM", role: "Full Stack Developer", period: "2019-2021" },
                  { company: "Post Office", role: "Frontend Developer", period: "2018-2019" },
                  { company: "Appical", role: "Web Developer", period: "2017-2018" },
                ].map((exp) => (
                  <Card key={exp.company}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.role}</p>
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What I Do
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end web development from concept to deployment
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <BlurFade key={service.title} delay={0.1 + index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/pricing">
                  View Packages & Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How It Works
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We discuss your goals and I provide a detailed proposal.",
              },
              {
                step: "02",
                title: "Design",
                description: "I create wireframes and designs for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description: "I build your project with regular updates.",
              },
              {
                step: "04",
                title: "Launch",
                description: "Final review, deployment, and handover.",
              },
            ].map((item, index) => (
              <BlurFade key={item.step} delay={0.1 + index * 0.1}>
                <div className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border" />
                  )}
                  <div className="text-4xl font-bold text-muted-foreground/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Selected Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recent work across web applications, marketing sites, and AI-powered tools
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <BlurFade key={project.slug} delay={0.1 + index * 0.1}>
                <ProjectCard project={project} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Contact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let&apos;s work together
              </h2>
              <p className="text-muted-foreground">
                Have a project in mind? Get in touch and I&apos;ll respond within
                24 hours.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  );
}
