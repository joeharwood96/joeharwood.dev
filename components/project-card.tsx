import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col md:grid md:grid-cols-[180px_1fr_auto] gap-5 md:gap-8 py-8 md:items-center transition-colors hover:bg-foreground/[0.02]"
      >
        <div className="relative aspect-[16/10] w-full md:w-[180px] overflow-hidden rounded-md border border-border bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 180px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : null}
        </div>

        <div className="min-w-0">
          <p className="text-xs text-muted-foreground tabular-nums mb-2">
            {project.year}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <ArrowUpRight
          className="hidden md:block w-5 h-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}
