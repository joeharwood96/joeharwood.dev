import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import Navbar from "@/components/navbar";
import { caseStudies } from "@/data/case-studies";
import { CALENDLY_URL } from "@/lib/constants";

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
      "AI discovery",
      "recommendation systems",
      "product engineering",
      "Joseph Harwood",
      "DevJoe",
    ],
    authors: [{ name: "Joseph Harwood", url: baseUrl }],
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
        author: { "@type": "Person", name: "Joseph Harwood", url: baseUrl },
        creator: { "@type": "Person", name: "Joseph Harwood" },
        keywords: caseStudy.tags.join(", "),
        about: caseStudy.features.join(", "),
        applicationCategory: "WebApplication",
        ...(caseStudy.link && { sameAs: caseStudy.link }),
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <article className="px-6 pb-32 pt-40">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <Link
              href="/#work"
              className="group mb-12 inline-flex items-center text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>

            <header className="mb-16 max-w-6xl">
              <h1 className="mb-8 text-[3rem] font-medium leading-[1.05] tracking-tight text-neutral-900 sm:text-[5rem]">
                {caseStudy.company}
              </h1>
              <p className="text-2xl font-medium leading-snug text-neutral-500 sm:text-3xl">
                {caseStudy.title}
              </p>
            </header>
          </FadeIn>

          {(caseStudy.video || caseStudy.image) && (
            <FadeIn className="mb-24">
              <div className="relative mb-24 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-100 shadow-sm sm:rounded-[3rem]">
                {caseStudy.video ? (
                  <iframe
                    src={caseStudy.video}
                    title={caseStudy.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : caseStudy.image ? (
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 48px), 1400px"
                    className="object-cover"
                    quality={100}
                    priority
                  />
                ) : null}
              </div>
            </FadeIn>
          )}

          <div className="grid w-full gap-16 md:grid-cols-[minmax(0,1fr)_400px] md:gap-32">
            <div className="space-y-16">
              <section>
                <h2 className="mb-6 text-2xl font-medium text-neutral-900">
                  The Challenge
                </h2>
                <p className="text-xl font-medium leading-relaxed text-neutral-600">
                  {caseStudy.challenge ?? caseStudy.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-medium text-neutral-900">
                  The Solution
                </h2>
                <p className="mb-8 text-xl font-medium leading-relaxed text-neutral-600">
                  {caseStudy.solution ??
                    "I designed and implemented a focused discovery layer around the moments where users need clearer recommendations, faster search, and better paths to value."}
                </p>
                <ul className="space-y-4">
                  {caseStudy.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-xl font-medium text-neutral-600"
                    >
                      <span className="mr-4 text-neutral-300">-</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-12">
              <section>
                <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-neutral-400">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#F5F5F5] px-4 py-2 text-sm font-medium text-neutral-900"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>

              {caseStudy.outcomes ? (
                <section>
                  <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-neutral-400">
                    Outcomes
                  </h2>
                  <p className="text-lg font-medium leading-relaxed text-neutral-500">
                    {caseStudy.outcomes}
                  </p>
                </section>
              ) : null}

              <div className="flex flex-wrap gap-3">
                {caseStudy.link ? (
                  <a
                    href={caseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95"
                  >
                    View live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={`${CALENDLY_URL}?utm_source=work-${caseStudy.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-5 py-3 text-sm font-medium text-neutral-900 transition-all hover:scale-105 hover:bg-neutral-100 active:scale-95"
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
