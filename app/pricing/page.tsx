"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PricingCard, { PricingTier } from "@/components/pricing-card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "@/components/ui/blur-fade";

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "€3,500",
    description:
      "Perfect for landing pages and small marketing sites that need to make an impact.",
    timeline: "1-2 weeks",
    features: [
      "Landing page or 1-3 page website",
      "Next.js with static generation",
      "Responsive design (mobile-first)",
      "Contact form with email notifications",
      "Basic SEO setup",
      "1 round of revisions",
      "Deployment to Vercel",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "€8,000",
    description:
      "Content-managed websites for businesses that need to update their site regularly.",
    timeline: "3-4 weeks",
    popular: true,
    features: [
      "5-10 page website",
      "Headless CMS integration (Sanity/Contentful)",
      "Full content management for your team",
      "Advanced SEO & performance optimization",
      "API routes & form handling",
      "Analytics integration",
      "2 rounds of revisions",
      "30 days post-launch support",
    ],
    cta: "Most Popular",
  },
  {
    name: "Application",
    price: "€18,000",
    priceNote: "Starting from",
    description:
      "Full-stack web applications with authentication, databases, and custom features.",
    timeline: "6-10 weeks",
    features: [
      "Custom web application",
      "User authentication & authorization",
      "Database design & implementation",
      "API development (REST or GraphQL)",
      "Third-party integrations",
      "Admin dashboard",
      "Deployment & CI/CD setup",
      "60 days post-launch support",
    ],
    cta: "Discuss Project",
  },
];

const addOns = [
  {
    id: "01",
    name: "AI Integration",
    price: "+€6,000",
    description:
      "OpenAI/LLM integration, conversational interfaces, natural language features",
  },
  {
    id: "02",
    name: "E-commerce",
    price: "+€4,000",
    description:
      "Stripe/payment integration, product management, order processing",
  },
  {
    id: "03",
    name: "Ongoing Support",
    price: "€800/mo",
    description:
      "Monthly maintenance, updates, bug fixes, and priority support",
  },
];

const faqs = [
  {
    question: "What's included in the timeline?",
    answer:
      "Timelines include discovery, design collaboration, development, revisions, and deployment. They assume timely feedback from your side — delays in feedback may extend the timeline.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Typically 50% upfront to begin work, and 50% upon completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "What if my project doesn't fit these packages?",
    answer:
      "These packages are starting points. Every project is unique — get in touch and I'll provide a custom quote based on your specific requirements.",
  },
  {
    question: "Do you work with agencies?",
    answer:
      "Yes. I regularly partner with design agencies and studios who need development support. My hourly rate for agency work is €95-120/hr depending on scope.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "I specialize in Next.js, React, TypeScript, and Node.js. For databases, I typically use PostgreSQL or Supabase. For CMS, Sanity or Contentful.",
  },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    provider: {
      "@type": "Person",
      name: "Joe Harwood",
      url: "https://joeharwood.dev",
      jobTitle: "Freelance Next.js Developer",
    },
    areaServed: {
      "@type": "Place",
      name: "Amsterdam, Netherlands",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Package",
          description: "Landing page or 1-3 page website with Next.js",
          price: "3500",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Business Package",
          description: "5-10 page website with headless CMS integration",
          price: "8000",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Application Package",
          description: "Full-stack web application with authentication and database",
          price: "18000",
          priceCurrency: "EUR",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Pricing
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Transparent pricing for every project size
              </h1>
              <p className="text-lg text-muted-foreground">
                Fixed-price packages so you know exactly what you&apos;re getting.
                No hidden fees, no hourly surprises.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <BlurFade key={tier.name} delay={0.1 + index * 0.1}>
                <PricingCard tier={tier} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-6 py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Add-ons
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Enhance Your Project
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <BlurFade key={addon.id} delay={0.1 + index * 0.1}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="font-mono text-xs text-primary">
                          {addon.id}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-2">
                          {addon.name}
                        </h3>
                      </div>
                      <span className="text-lg font-semibold text-primary">
                        {addon.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {addon.description}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.1}>
            <Card className="p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to start your project?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Get in touch to discuss your requirements. I&apos;ll respond within
                24 hours with a detailed proposal.
              </p>
              <Button asChild size="lg">
                <Link href="/#contact">
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  );
}
