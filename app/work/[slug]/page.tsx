import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CalendlyButton from "@/components/calendly-button";
import { caseStudies } from "@/data/case-studies";
import { Metadata } from "next";

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((c) => c.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case study not found",
    };
  }

  const baseUrl = "https://joeharwood.dev";
  const caseStudyUrl = `${baseUrl}/work/${caseStudy.slug}`;
  const ogImage = caseStudy.image
    ? `${baseUrl}${caseStudy.image}`
    : `${baseUrl}/og-image.png`;

  return {
    title: `${caseStudy.title}, ${caseStudy.company} · DevJoe`,
    description: caseStudy.description,
    keywords: [
      ...caseStudy.tags,
      caseStudy.company,
      "engineering studio",
      "DevJoe",
    ],
    authors: [{ name: "Joe Harwood", url: baseUrl }],
    openGraph: {
      type: "article",
      url: caseStudyUrl,
      title: `${caseStudy.title}, ${caseStudy.company}`,
      description: caseStudy.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      siteName: "DevJoe",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title}, ${caseStudy.company}`,
      description: caseStudy.description,
      images: [ogImage],
    },
    alternates: {
      canonical: caseStudyUrl,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((c) => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const baseUrl = "https://joeharwood.dev";
  const caseStudyUrl = `${baseUrl}/work/${caseStudy.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${baseUrl}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: caseStudy.title,
            item: caseStudyUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": caseStudyUrl,
        name: caseStudy.title,
        description: caseStudy.fullDescription,
        url: caseStudyUrl,
        image: caseStudy.image ? `${baseUrl}${caseStudy.image}` : undefined,
        author: { "@type": "Person", name: "Joe Harwood", url: baseUrl },
        creator: { "@type": "Person", name: "Joe Harwood" },
        keywords: caseStudy.tags.join(", "),
        about: caseStudy.features.join(", "),
        applicationCategory: "WebApplication",
        ...(caseStudy.link && { sameAs: caseStudy.link }),
      },
    ],
  };

  const currentIndex = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <article className="pt-32 pb-16 md:pt-40">
        {/* Header */}
        <div className="section-container fade-in text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            All work
          </Link>

          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            {caseStudy.company} · {caseStudy.year}
          </p>

          <h1 className="mt-8 font-serif text-hero-serif text-foreground text-balance">
            {caseStudy.title}
          </h1>

          <p className="mt-10 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            {caseStudy.description}
          </p>

          {caseStudy.link && (
            <a
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
            >
              View live
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Media */}
        {(caseStudy.video || caseStudy.image) && (
          <div className="section-container my-20">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
              {caseStudy.video ? (
                <iframe
                  src={caseStudy.video}
                  title={caseStudy.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : caseStudy.image ? (
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
              ) : null}
            </div>
          </div>
        )}

        {/* Body sections, unified centered layout */}
        <div className="space-y-24 md:space-y-28">
          <section className="section-container text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Overview
            </p>
            <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-foreground/90 text-pretty">
              {caseStudy.fullDescription}
            </p>
          </section>

          <section className="section-container text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Key features
            </p>
            <ul className="mt-10 mx-auto max-w-3xl border-t border-border">
              {caseStudy.features.map((feature, index) => (
                <li
                  key={index}
                  className="py-6 border-b border-border flex gap-6 text-left"
                >
                  <span className="text-sm text-muted-foreground tabular-nums w-10 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground/90 leading-relaxed text-pretty">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="section-container text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Stack
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {caseStudy.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>

          {caseStudy.outcomes && (
            <section className="section-container text-center">
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
                Outcome
              </p>
              <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-foreground/90 text-pretty">
                {caseStudy.outcomes}
              </p>
            </section>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-border mt-24">
        <div className="section-container py-20 text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            Considering something similar?
          </p>
          <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
            Book a <span className="italic">30-minute call.</span>
          </h2>
          <div className="mt-10">
            <CalendlyButton
              label="Book a call"
              source={`work-${caseStudy.slug}`}
            />
          </div>
        </div>
      </section>

      {/* Next case study */}
      <section className="border-t border-border">
        <div className="section-container py-16 text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-6">
            Next
          </p>
          <Link
            href={`/work/${nextCaseStudy.slug}`}
            className="group inline-flex flex-col items-center gap-3 py-6 transition-opacity hover:opacity-80"
          >
            <span className="text-xs text-muted-foreground tabular-nums">
              {nextCaseStudy.year} · {nextCaseStudy.company}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              {nextCaseStudy.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              Read case study
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
