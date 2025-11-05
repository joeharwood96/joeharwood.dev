"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className="relative rounded-3xl overflow-hidden bg-white flex flex-col group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.02,
        }}
      >
        {/* Visual content */}
        {project.video ? (
          <div className="relative w-full aspect-video overflow-hidden rounded-b-3xl">
            <iframe
              src={project.video}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : project.image ? (
          <div className="relative w-full aspect-video overflow-hidden rounded-b-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              quality={100}
              priority
            />
            {/* Dark overlay that appears on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </div>
        ) : null}

        {/* Content */}
        <div className="flex flex-col gap-2 p-4 sm:py-6 md:py-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-black">
            {project.company}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
