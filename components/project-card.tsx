"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <h3 className="text-xl font-semibold text-muted-foreground text-center px-6">
                {project.title}
              </h3>
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.company}</p>
            </div>

            {/* Arrow */}
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
