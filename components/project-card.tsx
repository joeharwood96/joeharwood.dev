"use client";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
  video?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="border border-black rounded-lg flex flex-col overflow-hidden bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {project.video ? (
        <div className="relative w-full aspect-video">
          <iframe
            src={project.video}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : project.image ? (
        <div className="relative w-full aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 p-4 flex-1">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="flex-1">{project.description}</p>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {project.tags.map((tag) => (
            <motion.p
              key={tag}
              className="bg-[#FFC497] rounded-lg px-2 py-1"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              {tag}
            </motion.p>
          ))}
        </motion.div>
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <Link
            href={project.link}
            className="flex gap-2 items-center border border-black rounded-lg px-2 py-1 w-fit hover:bg-black hover:text-white transition-colors"
            target="_blank"
          >
            {project.link.includes("github") ? (
              <Github className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            View Project
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
