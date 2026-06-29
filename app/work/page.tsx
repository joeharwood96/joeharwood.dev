import type { Metadata } from "next";
import CaseStudyCard from "@/components/case-study-card";
import FadeIn from "@/components/motion/fade-in";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work · DevJoe",
  description:
    "Selected work building marketing sites, MVPs, and SaaS products for founders and teams.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/work",
    title: "Work · DevJoe",
    description:
      "Selected work building marketing sites, MVPs, and SaaS products for founders and teams.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work · DevJoe",
    description:
      "Selected work building marketing sites, MVPs, and SaaS products for founders and teams.",
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <Navbar />

      <section className="px-6 pb-20 pt-40 sm:pt-52">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn className="max-w-5xl">
            <h1 className="text-balance text-[3rem] font-medium leading-none tracking-tight text-neutral-900 sm:text-[5rem] md:text-[6.5rem]">
              Selected work.{" "}
              <span className="text-neutral-400">
                Marketing sites, MVPs, and SaaS products shipped for founders,
                marketplaces, and teams.
              </span>
            </h1>
          </FadeIn>

          <ul className="mt-20 border-t border-border">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                compact
              />
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
