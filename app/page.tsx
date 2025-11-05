"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Download } from "lucide-react";
import ProjectCard from "@/components/project-card";
import LogoCarousel from "@/components/logo-carousel";
import AnimatedGridBackground from "@/components/animated-grid-background";
import Footer from "@/components/footer";
import { projects } from "@/data/projects";
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
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "React",
        description: "For building fast, interactive UIs",
        icon: SiReact,
      },
      {
        name: "Next.js",
        description: "React framework with routing & SSR",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for safer code",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime for servers",
        icon: SiNodedotjs,
      },
      {
        name: "Java",
        description: "Enterprise backend development",
        icon: SiOpenjdk,
      },
      {
        name: "GoLang",
        description: "High-performance backend systems",
        icon: SiGo,
      },
      {
        name: "Python",
        description: "Scripting and automation",
        icon: SiPython,
      },
    ],
  },
  {
    category: "Database",
    technologies: [
      {
        name: "PostgreSQL",
        description: "Powerful relational database",
        icon: SiPostgresql,
      },
      {
        name: "MySQL",
        description: "Popular open-source database",
        icon: SiMysql,
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alternative",
        icon: SiSupabase,
      },
    ],
  },
  {
    category: "Tools & DevOps",
    technologies: [
      {
        name: "Jest",
        description: "JavaScript testing framework",
        icon: SiJest,
      },
      {
        name: "Docker",
        description: "Containers for isolated environments",
        icon: SiDocker,
      },
      {
        name: "Kubernetes",
        description: "Container orchestration",
        icon: SiKubernetes,
      },
      {
        name: "Git & GitHub",
        description: "Version control and collaboration",
        icon: SiGithub,
      },
    ],
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ background: "var(--background)" }}
    >
      <div className="min-h-[70vh] flex flex-col relative w-full">
        <AnimatedGridBackground />
        <motion.nav
          className="flex justify-between items-center px-6 py-6 sm:px-8 md:px-12 md:py-8 lg:px-24 lg:w-4/5 mx-auto w-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={120}
              height={25}
              className="md:w-[150px] md:h-[31px]"
              priority
              unoptimized
            />
          </Link>
          <div className="flex gap-6 md:gap-8 items-center">
            <div className="hidden md:flex gap-8">
              <Link
                href="#experience"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Projects
              </Link>
              <Link
                href="#tech-stack"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Tech Stack
              </Link>
            </div>
            <div className="flex gap-3 md:gap-4">
              <Link
                href="https://github.com/joeharwood96"
                target="_blank"
                className="hover:opacity-60 transition-opacity"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/josephharwood-3/"
                target="_blank"
                className="hover:opacity-60 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.nav>

        <div className="flex-1 flex items-center justify-center w-full">
          <motion.div
            className="flex flex-col gap-8 px-6 sm:px-8 md:px-12 lg:px-24 lg:w-4/5 w-full mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-sm text-[#6B7280]">Full-Stack Development</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Build scalable web applications with expert engineering.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mt-4">
                Freelance Software Engineer based in Amsterdam, delivering
                full-stack solutions for startups and SMEs. Previously at
                Booking.com, Appical, and IBM.
              </p>
            </motion.div>
            <motion.div
              className="flex gap-4 flex-wrap mt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href="mailto:joeharwooddev@gmail.com"
                className="relative bg-black text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors overflow-hidden group"
              >
                <span className="relative z-10">Get in touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </a>
              <Link
                href="/Joseph Harwood - Freelance CV.pdf"
                target="_blank"
                className="border border-black rounded-full px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 px-6 sm:px-8 md:px-12 lg:px-24 lg:w-4/5 mx-auto mb-16 md:mb-24">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 -mt-12 md:-mt-16" id="experience">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#6B7280]">Trusted By</p>
          </motion.div>
          <LogoCarousel />
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12" id="projects">
          <motion.p
            className="text-sm text-[#6B7280]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Work
          </motion.p>
          <div className="grid grid-cols-1 gap-8 w-full">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12" id="tech-stack">
          <motion.p
            className="text-sm text-[#6B7280]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.p>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 md:gap-12 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {techStack.flatMap((stack) =>
              stack.technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-3xl bg-[#F5F5F5] group-hover:bg-white transition-colors border border-black/5 group-hover:border-black/10 group-hover:shadow-lg">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#6B7280] group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-[#6B7280] group-hover:text-black transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
