import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    title: `${project.title} - ${project.company} | Joe Harwood`,
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
      title: `${project.title} - ${project.company}`,
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
      title: `${project.title} - ${project.company}`,
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
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
        author: {
          "@type": "Person",
          name: "Joe Harwood",
          url: baseUrl,
        },
        creator: {
          "@type": "Person",
          name: "Joe Harwood",
        },
        keywords: project.tags.join(", "),
        about: project.features.join(", "),
        applicationCategory: "WebApplication",
        ...(project.link && { sameAs: project.link }),
      },
    ],
  };

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Hero Section */}
      <article className="pt-32 pb-16">
        <div className="px-6 max-w-6xl mx-auto">
          {/* Back Link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-muted-foreground">{project.company}</span>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                View live project
              </a>
            )}
          </div>
        </div>

        {/* Media Section */}
        {(project.video || project.image) && (
          <div className="px-6 max-w-6xl mx-auto">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
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

        {/* Content Section */}
        <div className="px-6 max-w-6xl mx-auto mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
            {/* Main Content */}
            <div className="space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`pb-4 text-muted-foreground ${
                        index < project.features.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              {project.outcomes && (
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Outcomes
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {project.outcomes}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Technologies */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Technologies
                </h3>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Tags */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Next Project */}
      <section className="px-6 max-w-6xl mx-auto py-24 border-t border-border">
        <span className="text-sm text-muted-foreground mb-4 block">
          Next Project
        </span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group inline-flex items-center gap-4"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors">
            {nextProject.title}
          </h2>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">&rarr;</span>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
