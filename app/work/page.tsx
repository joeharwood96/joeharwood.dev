import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CaseStudyCard from "@/components/case-study-card";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work · DevJoe",
  description:
    "Selected case studies from DevJoe: products and features shipped for Booking.com, Weeknights, and independent projects.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/work",
    title: "Work · DevJoe",
    description:
      "Selected case studies from DevJoe: products and features shipped for Booking.com, Weeknights, and independent projects.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work · DevJoe",
    description: "Selected case studies from DevJoe.",
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="section-container fade-in">
          <div className="text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Work
            </p>
            <h1 className="mt-6 font-serif text-hero-serif text-foreground text-balance">
              <span className="italic">Things</span> we&apos;ve shipped.
            </h1>
            <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              A mix of independent products, AI experiments, and features
              built inside large product teams. Each one was shipped to real
              users.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
