import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import { caseStudies } from "@/data/case-studies";
import { CALENDLY_URL } from "@/lib/constants";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import FeatureList from "@/components/site/feature-list";

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

  const baseUrl = "https://www.devjoe.io";
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
      "AI product engineering",
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

  const baseUrl = "https://www.devjoe.io";
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

  const index = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const nextCase = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section innerClassName="border-b px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24">
        <FadeIn y={12}>
          <p className="mono-label">
            <Link href="/work" className="hover:text-neutral-950">
              Work
            </Link>{" "}
            / {caseStudy.company} · {caseStudy.year}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-medium tracking-tight sm:text-6xl">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            {caseStudy.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {caseStudy.link ? (
              <ButtonLink href={caseStudy.link} external>
                View live
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            ) : null}
            <ButtonLink
              href={`${CALENDLY_URL}?utm_source=work-${caseStudy.slug}`}
              variant={caseStudy.link ? "outline" : "solid"}
              external
              eventName="Fit Call Clicked"
              eventData={{ location: "case_study", caseStudy: caseStudy.slug }}
            >
              Book a call
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {caseStudy.image ? (
        <Section innerClassName="border-b p-6 sm:p-10">
          <div className="overflow-hidden border border-neutral-200 bg-[#F5F5F5]">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={2400}
              height={1800}
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="h-auto w-full"
              priority
            />
          </div>
        </Section>
      ) : null}

      {caseStudy.stats ? (
        <Section innerClassName="border-b">
          <ul className="grid sm:grid-cols-3">
            {caseStudy.stats.map((stat) => (
              <li
                key={stat.label}
                className="border-neutral-200 p-6 sm:p-10 max-sm:[&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-r"
              >
                <p className="text-4xl font-medium tracking-tight tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section innerClassName="grid border-b md:grid-cols-2">
        <div className="border-neutral-200 p-6 sm:p-10 max-md:border-b md:border-r">
          <p className="mono-label">Problem</p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            {caseStudy.challenge ?? caseStudy.fullDescription}
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <p className="mono-label">What I built</p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            {caseStudy.solution ?? caseStudy.fullDescription}
          </p>
          <ul className="mt-6 space-y-2">
            {caseStudy.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-base text-neutral-600">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-950" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section innerClassName="grid gap-10 border-b p-6 sm:p-10 md:grid-cols-2">
        <FeatureList label="Stack" items={caseStudy.technologies} />
        <div>
          <p className="text-sm text-neutral-500">Outcome</p>
          <p className="mt-2 text-lg leading-relaxed text-neutral-950">
            {caseStudy.outcomes}
          </p>
        </div>
      </Section>

      <Section>
        <Link
          href={`/work/${nextCase.slug}`}
          className="group flex flex-col gap-2 p-6 transition-colors hover:bg-white sm:flex-row sm:items-end sm:justify-between sm:p-10"
        >
          <div>
            <p className="mono-label">Next case</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              {nextCase.title}
            </h2>
          </div>
          <ArrowRight className="h-6 w-6 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-950" />
        </Link>
      </Section>
    </main>
  );
}
