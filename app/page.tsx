import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";
import Button from "@/components/button";
import ProjectCard from "@/components/project-card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiOpenjdk,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
} from "react-icons/si";

const experiences = [
  {
    company: "DevJoe",
    role: "Freelance Software Engineer",
    location: "Amsterdam, NL",
    period: "October 2025 - Present",
    summary: "Delivering full-stack web development services for startups and SMEs, building reusable React/Next.js component libraries and AI-powered integrations.",
    tools: ["TypeScript", "React", "Next.js", "Node.js", "Jest"],
  },
  {
    company: "Booking.com",
    role: "Software Engineer II",
    location: "Amsterdam, NL",
    period: "May 2022 - October 2025",
    summary: "Launched Booking.com's first AI Trip Planner with ChatGPT integration and led the neighbourhood feature implementation, generating €19.7M per year in customer equity.",
    tools: ["TypeScript", "React", "Next.js", "Node.js", "Jest", "Java", "Perl", "Kubernetes"],
  },
  {
    company: "Appical",
    role: "Software Engineer I",
    location: "Amsterdam, NL",
    period: "November 2021 - May 2022",
    summary: "Led migration from JSP to React.js and TypeScript, achieving 200% improvement in feature implementation time and implementing OpenId Connect authentication.",
    tools: ["TypeScript", "React", "Node.js", "TailwindCSS", "Jest"],
  },
  {
    company: "IBM",
    role: "Software Engineer Intern",
    location: "London, UK",
    period: "July 2019 - September 2021",
    summary: "Built a performance review platform used by 5K+ IBM UK personnel and modernized IBM Netcool Operations Insight by converting WebGUI to React with E2E testing.",
    tools: ["TypeScript", "React", "Node.js", "Java", "Python"],
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", description: "For building fast, interactive UIs", icon: SiReact },
      { name: "Next.js", description: "React framework with routing & SSR", icon: SiNextdotjs },
      { name: "TypeScript", description: "Typed JavaScript for safer code", icon: SiTypescript },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime for servers", icon: SiNodedotjs },
      { name: "Java", description: "Enterprise backend development", icon: SiOpenjdk },
      { name: "GoLang", description: "High-performance backend systems", icon: SiGo },
      { name: "Python", description: "Scripting and automation", icon: SiPython },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", description: "Powerful relational database", icon: SiPostgresql },
      { name: "MySQL", description: "Popular open-source database", icon: SiMysql },
      { name: "Supabase", description: "Open-source Firebase alternative", icon: SiSupabase },
    ],
  },
  {
    category: "Tools & DevOps",
    technologies: [
      { name: "Jest", description: "JavaScript testing framework", icon: SiJest },
      { name: "Docker", description: "Containers for isolated environments", icon: SiDocker },
      { name: "Kubernetes", description: "Container orchestration", icon: SiKubernetes },
      { name: "Git & GitHub", description: "Version control and collaboration", icon: SiGithub },
    ],
  },
];

const projects = [
  {
    title: "Queryhub.ai",
    description: "AI Agent for database queries.",
    link: "https://www.queryhub.ai",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "PostgreSQL"],
  },
  {
    title: "file-drive",
    description: "A file storage and sharing application.",
    link: "https://github.com/joeharwood96/file-drive",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "Convex"],
  },
  {
    title: "appical-news",
    description: "A news aggregator.",
    link: "https://github.com/joeharwood96/appical-news",
    tags: ["React", "Typescript", "Node.js", "PostgreSQL"],
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
              Welcome, I&apos;m Joe!
            </h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
              Freelance Software Engineer based in Amsterdam.
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl md:w-4/5">
              I deliver full-stack web development services for startups and SMEs with a focus on scalable, performant applications. Previously at Booking.com, Appical, and IBM.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="mailto:joeharwooddev@gmail.com">Let&apos;s Connect</Button>
              <Link
                href="/Joseph Harwood - Freelance CV.pdf"
                target="_blank"
                className="border border-black rounded-lg px-4 py-2 w-fit flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="experience">
          <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border border-black rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-600">
                    {exp.location} • {exp.period}
                  </p>
                </div>
                <p className="text-sm md:text-base">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8" id="tech-stack">
          <h2 className="text-2xl md:text-4xl font-bold">What I Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((stack) => (
              <div
                key={stack.category}
                className="border border-black rounded-lg p-6 flex flex-col gap-4"
              >
                <h3 className="text-xl font-bold bg-[#FFC497] rounded-lg px-3 py-2 w-fit">
                  {stack.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {stack.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-start gap-3">
                        <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-base">{tech.name}</p>
                          <p className="text-sm text-gray-600">{tech.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
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
