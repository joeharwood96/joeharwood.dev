import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const baseUrl = "https://joeharwood.dev";
  const projectUrl = `${baseUrl}/projects/${project.slug}`;
  const ogImage = project.image
    ? `${baseUrl}${project.image}`
    : `${baseUrl}/og-image.png`;

  return {
    title: `${project.title} — ${project.company} | Joe Harwood`,
    description: project.description,
    keywords: [
      ...project.tags,
      project.company,
      "web development",
      "software engineering",
      "Joe Harwood",
    ],
    authors: [{ name: "Joe Harwood", url: baseUrl }],
    openGraph: {
      type: "article",
      url: projectUrl,
      title: `${project.title} — ${project.company}`,
      description: project.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      siteName: "Joe Harwood",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.company}`,
      description: project.description,
      images: [ogImage],
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const baseUrl = "https://joeharwood.dev";
  const projectUrl = `${baseUrl}/projects/${project.slug}`;

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
            name: "Projects",
            item: `${baseUrl}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": projectUrl,
        name: project.title,
        description: project.fullDescription,
        url: projectUrl,
        image: project.image ? `${baseUrl}${project.image}` : undefined,
        author: { "@type": "Person", name: "Joe Harwood", url: baseUrl },
        creator: { "@type": "Person", name: "Joe Harwood" },
        keywords: project.tags.join(", "),
        about: project.features.join(", "),
        applicationCategory: "WebApplication",
        ...(project.link && { sameAs: project.link }),
      },
    ],
  };

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <article className="pt-32 pb-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto px-6 fade-in">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <p className="text-sm text-muted-foreground">
            {project.company} · {project.year}
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
            {project.title}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
            >
              View live project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Media */}
        {(project.video || project.image) && (
          <div className="max-w-3xl mx-auto px-6 my-24">
            <div className="relative w-full aspect-video overflow-hidden rounded-md border border-border bg-muted">
              {project.video ? (
                <iframe
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
              ) : null}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 space-y-20">
          {/* Overview */}
          <section>
            <h2 className="text-sm text-muted-foreground mb-6">Overview</h2>
            <p className="text-lg leading-relaxed text-foreground">
              {project.fullDescription}
            </p>
          </section>

          {/* Key features */}
          <section>
            <h2 className="text-sm text-muted-foreground mb-6">Key features</h2>
            <ul className="border-t border-border">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="py-6 border-b border-border flex gap-6"
                >
                  <span className="text-sm text-muted-foreground tabular-nums w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-sm text-muted-foreground mb-6">Technologies</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          {project.outcomes && (
            <section>
              <h2 className="text-sm text-muted-foreground mb-6">Outcomes</h2>
              <p className="text-lg leading-relaxed text-foreground">
                {project.outcomes}
              </p>
            </section>
          )}
        </div>
      </article>

      {/* Next project */}
      <section className="border-t border-border mt-32">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-sm text-muted-foreground mb-12">Next</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group grid grid-cols-[56px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-baseline gap-6 md:gap-10 py-8 transition-colors hover:bg-foreground/[0.02]"
          >
            <span className="text-sm text-muted-foreground tabular-nums">
              {nextProject.year}
            </span>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {nextProject.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground max-w-xl leading-relaxed">
                {nextProject.description}
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
