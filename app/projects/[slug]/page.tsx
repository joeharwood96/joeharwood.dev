import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "@/components/footer";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-8 md:px-24 lg:w-4/5 mx-auto w-full">
        <Link href="/">
          <Image
            src="/dev-joe.png"
            alt="DevJoe"
            width={150}
            height={31}
            priority
            unoptimized
          />
        </Link>
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="px-12 py-12 md:px-24 lg:w-4/5 mx-auto">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#6B7280] uppercase tracking-wider font-semibold">
              {project.company}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-3xl">
              {project.description}
            </p>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors w-fit"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Image/Video */}
        {project.video ? (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16">
            <iframe
              src={project.video}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : project.image ? (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        ) : null}

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Overview */}
          <div className="md:col-span-2 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-black font-bold mt-1">•</span>
                    <span className="text-lg text-[#6B7280]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            {project.outcomes && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Outcomes
                </h2>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {project.outcomes}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar - Technologies */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#F5F5F5] rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Technologies</h3>
              <ul className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-sm text-[#6B7280]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5F5F5] rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#6B7280] px-3 py-1 border border-black/10 rounded-full bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
