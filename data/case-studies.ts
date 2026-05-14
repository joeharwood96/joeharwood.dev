export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  fullDescription: string;
  link?: string;
  tags: string[];
  image?: string;
  video?: string;
  features: string[];
  technologies: string[];
  outcomes: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "year-in-travel",
    title:
      "AI trip planning and travel recommendations built for scale, evolution, and performance",
    company: "Booking.com",
    year: "2023",
    description:
      "Built Booking.com's first AI Trip Planner and shipped discovery product experiences around conversational UI, travel recommendations, and large-scale personalisation.",
    fullDescription:
      "At Booking.com, the work focused on turning complex travel intent into clearer product experiences. Projects included an early AI Trip Planner, recommendation-led discovery flows, and a personalised Year in Travel experience that helped users revisit and share their travel history.",
    tags: ["React", "TypeScript", "Node.js", "Java"],
    image: "/bookingyit.png",
    features: [
      "Conversational travel planning concepts for high-intent discovery",
      "Recommendation-led experiences that helped users explore travel options",
      "Personalised travel summaries built for mobile-first sharing",
      "Product work designed to fit large-scale consumer travel surfaces",
    ],
    technologies: [
      "React for interactive front-end",
      "TypeScript for type safety",
      "Java services for user data aggregation",
      "Node.js for the personalisation pipeline",
    ],
    outcomes:
      "Shipped product experiences inside Booking.com and validated AI-assisted discovery patterns in a large-scale travel environment.",
  },
  {
    slug: "weeknights",
    title: "Weeknights",
    company: "Weeknights · Co-founder",
    year: "2025",
    description:
      "Built a local discovery marketplace for finding clubs, events, and communities, with frictionless onboarding, browsing, and local search.",
    fullDescription:
      "Weeknights helps Amsterdam residents find and join local clubs: book clubs, running groups, cooking classes, language practice, board games. Built from scratch as a co-founder, with a focus on reducing onboarding friction, making local browsing feel natural, and helping communities get discovered organically.",
    link: "https://weeknights.nl/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    image: "/weeknights-dj.png",
    features: [
      "Frictionless onboarding for clubs, hosts, and local communities",
      "Browsing flows designed around real-world interests and neighbourhood context",
      "Local search and filtering tuned for Amsterdam discovery",
      "Content-driven SEO that helps communities get found organically",
    ],
    technologies: [
      "Next.js 15 on Vercel",
      "Supabase for auth, database, and storage",
      "TypeScript end to end",
      "Tailwind for a minimal, content-first design system",
    ],
    outcomes:
      "Reached 3,000+ monthly active users organically with clubs and events created by real organisers, not seed data.",
  },
  {
    slug: "railgpt",
    title: "RailGPT",
    company: "Independent",
    year: "2024",
    description:
      "An AI-powered conversational UX that simplifies complex Dutch train journeys and makes natural language the core discovery experience.",
    fullDescription:
      "RailGPT is a conversational travel planner for Dutch rail journeys. Users ask natural language questions like \"find trains from Amsterdam to Utrecht tomorrow at 9am\" and get accurate schedule results grounded in the NS API, turning a rigid timetable workflow into a simple product experience.",
    link: "https://www.railgpt.app",
    tags: ["Next.js", "TypeScript", "OpenAI", "NS API"],
    image: "/railgpt.png",
    features: [
      "Natural language journeys for departures, arrivals, and transfers",
      "Conversational UI layered over a real transport API",
      "Grounded answers that reduce timetable-search friction",
      "Shareable query URLs so travel answers can move between channels",
    ],
    technologies: [
      "OpenAI tool calling for structured queries",
      "NS API for real-time Dutch rail data",
      "Next.js streaming responses",
      "TypeScript for end-to-end type safety",
    ],
    outcomes:
      "Shipped as a working reference for how conversational product experiences can sit on top of structured travel APIs.",
  },
  {
    slug: "queryhub",
    title: "Queryhub.ai",
    company: "Independent",
    year: "2024",
    description:
      "A conversational platform for reducing workflow friction with natural-language data access and faster internal discovery.",
    fullDescription:
      "Queryhub.ai helps developers and analysts access data through natural language. Connect a database, ask a question, get an optimised query, and run it in the browser. It explores how conversational interfaces can reduce workflow friction without sacrificing grounded, inspectable outputs.",
    link: "https://github.com/joeharwood96/queryhub.ai",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/queryhub-dj.png",
    video: "https://www.youtube.com/embed/Mt9EzgNsm6M",
    features: [
      "Natural language data access across multiple database types",
      "In-browser query execution with grounded schema context",
      "Conversational workflows for faster internal discovery",
      "Open-source foundations teams can fork and tune internally",
    ],
    technologies: [
      "Next.js App Router for full-stack SSR",
      "PostgreSQL as the canonical reference integration",
      "OpenAI for query generation grounded in schema context",
      "TypeScript and Tailwind throughout",
    ],
    outcomes:
      "Open-sourced as a working reference for grounded conversational data workflows.",
  },
];
