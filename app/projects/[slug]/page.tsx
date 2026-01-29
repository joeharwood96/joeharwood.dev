import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
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
            item: `${baseUrl}/#projects`,
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

  return (
    <div className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference">
        <Link href="/">
          <Image
            src="/dev-joe.png"
            alt="DevJoe"
            width={120}
            height={25}
            className="invert"
            priority
            unoptimized
          />
        </Link>
        <Link
          href="/#work"
          className="flex items-center gap-2 text-sm text-white hover:opacity-60 transition-opacity duration-500"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </nav>

      {/* Hero Section */}
      <article className="pt-32 pb-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-text text-[#525252]">{project.company}</span>
            <span className="mono-text text-[#737373]">{project.year}</span>
          </div>

          {/* Title */}
          <h1 className="headline text-5xl md:text-7xl lg:text-8xl mb-8">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[#525252] body-text max-w-3xl mb-12">
            {project.description}
          </p>

          {/* CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors duration-500"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Media: video or image */}
        {project.video ? (
          <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mt-16">
            <div className="relative w-full aspect-video overflow-hidden">
              <iframe
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ) : project.image ? (
          <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mt-16">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        ) : null}

        {/* Divider */}
        <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mt-24">
          <div className="border-t border-black/10" />
        </div>

        {/* Content Grid */}
        <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="md:col-span-2 flex flex-col gap-16">
              {/* Overview */}
              <div>
                <p className="mono-text text-[#525252] mb-6">Overview</p>
                <p className="text-lg text-[#525252] body-text leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <p className="mono-text text-[#525252] mb-6">Key Features</p>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="mono-text text-[#737373] text-xs mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg text-[#525252] body-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              {project.outcomes && (
                <div>
                  <p className="mono-text text-[#525252] mb-6">Outcomes</p>
                  <p className="text-lg text-[#525252] body-text leading-relaxed">
                    {project.outcomes}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-12">
              {/* Technologies */}
              <div>
                <p className="mono-text text-[#525252] mb-6">Technologies</p>
                <ul className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#525252] body-text pb-3 border-b border-black/5 last:border-0"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <p className="mono-text text-[#525252] mb-6">Stack</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono-text text-[#737373] hover:text-black transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Next Project */}
      {(() => {
        const currentIndex = projects.findIndex((p) => p.slug === project.slug);
        const nextProject = projects[(currentIndex + 1) % projects.length];
        return (
          <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto py-24 border-t border-black/10">
            <p className="mono-text text-[#525252] mb-4">Next Project</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter group-hover:opacity-60 transition-opacity duration-500">
                {nextProject.title}
              </h2>
              <span className="mono-text text-[#737373] group-hover:text-black transition-colors duration-500">
                View
              </span>
            </Link>
          </section>
        );
      })()}

      <Footer />
    </div>
  );
}
