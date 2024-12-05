import Link from "next/link";
import { Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-black rounded-lg flex flex-col gap-4 hover:scale-105 transition-all duration-300">
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <p key={tag} className="bg-[#FFC497] rounded-lg px-2 py-1">
              {tag}
            </p>
          ))}
        </div>
        <Link
          href={project.link}
          className="flex gap-2 items-center border border-black rounded-lg px-2 py-1 w-fit"
          target="_blank"
        >
          <Github className="w-4 h-4" /> View Project
        </Link>
      </div>
    </div>
  );
}
