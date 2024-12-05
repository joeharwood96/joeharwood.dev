import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import Button from "@/components/button";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "file-drive",
    description: "A file storage and sharing application.",
    link: "https://github.com/joeharwood96/file-drive",
    tags: ["Next.js", "Tailwind CSS", "Typescript"],
  },
  {
    title: "umami",
    description: "A simple analytics tool for your website.",
    link: "https://github.com/joeharwood96/umami",
    tags: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "appical-news",
    description: "A news aggregator.",
    link: "https://github.com/joeharwood96/appical-news",
    tags: ["Next.js", "Tailwind CSS", "Typescript"],
  },
  {
    title: "simple-bank",
    description: "A simple bank app.",
    link: "https://github.com/joeharwood96/simple-bank",
    tags: ["React", "GoLang", "PostgreSQL"],
  },
  {
    title: "smart-brain",
    description: "A face recognition app.",
    link: "https://github.com/joeharwood96/smart-brain",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "adidas-product-reviews",
    description: "A product review app.",
    link: "https://github.com/joeharwood96/adidas-product-reviews",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <div className="h-screen">
      <nav className="flex justify-between items-center px-12 py-12 md:px-24 lg:w-4/5 mx-auto ">
        <h1 className="text-2xl font-bold">jh.dev</h1>
        <div className="flex gap-4">
          <Link
            href="https://github.com/joeharwood96"
            target="_blank"
            className="hover:underline"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/josephharwood-3/"
            target="_blank"
            className="hover:underline"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <main className="flex flex-col gap-16 px-12 py-12 md:px-24 lg:w-4/5 mx-auto">
        <div className="flex md:justify-center md:items-center h-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl font-bold lg:text-6xl">
              Welcome, I&apos;m Joe. <br /> A Software Engineer based in
              Amsterdam.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              I&apos;m a software engineer with a passion for building products
              that are both functional and beautiful. I&apos;m currently working
              at{" "}
              <Link
                href="https://www.booking.com"
                target="_blank"
                className="underline"
              >
                Booking.com
              </Link>
              .
            </p>
            <Button href="mailto:hello@joeharwood.dev">Lets Connect</Button>
          </div>
        </div>
        <div className="flex flex-col gap-8" id="projects">
          <h2 className="text-2xl md:text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center py-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Joe Harwood. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
