"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasMedia = project.video || project.image;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="flex flex-col">
        {/* Card area */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
          {project.video ? (
            <iframe
              src={project.video}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover img-grayscale"
                priority
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </>
          ) : (
            /* Fallback: typographic card for projects without media */
            <div className="w-full h-full bg-[#F5F5F5] flex flex-col justify-between p-8 md:p-10">
              <div className="flex justify-between items-start">
                <span className="mono-text text-[#737373] text-xs">{project.company}</span>
                <span className="mono-text text-[#737373] text-xs">{project.year}</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-black group-hover:opacity-60 transition-opacity duration-500">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="mono-text text-[#737373] text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Arrow icon - appears on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${hasMedia ? "bg-white" : "bg-black"}`}>
              <ArrowUpRight className={`w-5 h-5 ${hasMedia ? "text-black" : "text-white"}`} />
            </div>
          </div>
        </div>

        {/* Metadata row */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/10">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:opacity-70 transition-opacity duration-500">
              {project.title}
            </h3>
            <div className="flex items-center gap-4">
              <span className="mono-text text-[#525252]">{project.company}</span>
              <span className="mono-text text-[#737373]">{project.year}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
