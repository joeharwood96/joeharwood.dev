import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    title: `${project.title} - ${project.company} | DevJoe`,
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
      siteName: "DevJoe",
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
              <Badge variant="secondary">{project.company}</Badge>
              <span className="font-mono text-sm text-muted-foreground">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl">
              {project.description}
            </p>

            {project.link && (
              <Button asChild className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Media Section */}
        {(project.video || project.image) && (
          <div className="px-6 max-w-6xl mx-auto">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-muted">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            {/* Main Content */}
            <div className="space-y-16">
              {/* Overview */}
              <div>
                <Badge variant="outline" className="mb-4">
                  Overview
                </Badge>
                <p className="text-lg text-muted-foreground">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <Badge variant="outline" className="mb-6">
                  Key Features
                </Badge>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-4 pb-4 border-b border-border"
                    >
                      <span className="font-mono text-primary text-sm mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              {project.outcomes && (
                <div>
                  <Badge variant="outline" className="mb-4">
                    Outcomes
                  </Badge>
                  <p className="text-lg text-muted-foreground">
                    {project.outcomes}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar - Tech Specs */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">
                    Technologies
                  </Badge>
                  <ul className="space-y-3">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Stack Tags */}
              <Card>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">
                    Stack
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      {/* Next Project */}
      <section className="px-6 max-w-6xl mx-auto py-24 border-t border-border">
        <span className="text-sm font-medium text-muted-foreground mb-4 block">
          Next Project
        </span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex items-center justify-between"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
            {nextProject.title}
          </h2>
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
