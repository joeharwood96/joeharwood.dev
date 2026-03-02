"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-center ${
          isEven ? "" : "md:[grid-template-columns:1.5fr_1fr]"
        }`}
      >
        {/* Text */}
        <div className={isEven ? "md:order-1" : "md:order-2"}>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className={`relative aspect-[16/10] rounded-lg overflow-hidden bg-muted ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-lg text-muted-foreground">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
