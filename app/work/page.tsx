import type { Metadata } from "next";
import CaseStudyCard from "@/components/case-study-card";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work · DevJoe",
  description:
    "AI products and marketplaces I have built and shipped, from Booking.com to my own launches.",
  openGraph: {
    type: "website",
    url: "https://www.devjoe.io/work",
    title: "Work · DevJoe",
    description:
      "AI products and marketplaces I have built and shipped, from Booking.com to my own launches.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work · DevJoe",
    description:
      "AI products and marketplaces I have built and shipped, from Booking.com to my own launches.",
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      <Section innerClassName="border-b px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24">
        <FadeIn y={12}>
          <p className="mono-label">Work</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-medium tracking-tight sm:text-6xl">
            Things I&apos;ve built and shipped
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            AI features at Booking.com, a marketplace of my own, and two AI tools
            I built on the side.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <ul className="grid md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <li
              key={caseStudy.slug}
              className="border-b border-neutral-200 md:odd:border-r"
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
