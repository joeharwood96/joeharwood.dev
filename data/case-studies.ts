export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  fullDescription: string;
  challenge?: string;
  solution?: string;
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
    title: "Conversational travel discovery at Booking.com",
    company: "Booking.com",
    year: "2023",
    description:
      "Built AI-assisted travel planning and recommendation experiences that helped users move from intent to relevant trip ideas faster.",
    fullDescription:
      "At Booking.com, the work focused on turning complex travel intent into clearer product experiences. Projects included an early AI Trip Planner, recommendation-led discovery flows, and a personalised Year in Travel experience that helped users revisit and share their travel history.",
    challenge:
      "Travel intent is messy. Users often know the kind of trip they want, but not the exact destination, dates, filters, or path through a traditional search flow.",
    solution:
      "I worked on conversational and recommendation-led product experiences that translated broad travel intent into clearer discovery paths, including AI trip planning concepts and personalised travel surfaces.",
    tags: ["React", "TypeScript", "Node.js", "Java"],
    image: "/booking-trip-planner.png",
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
    title: "Local discovery and onboarding for Amsterdam communities",
    company: "Weeknights",
    year: "2025",
    description:
      "Built a local marketplace that helped people find clubs, events, and communities through smoother onboarding, browsing, and local search.",
    fullDescription:
      "Weeknights helps Amsterdam residents find and join local clubs: book clubs, running groups, cooking classes, language practice, board games. Built from scratch as a co-founder, with a focus on reducing onboarding friction, making local browsing feel natural, and helping communities get discovered organically.",
    challenge:
      "Local discovery breaks when supply is fragmented and users do not know what to search for. Communities also need a low-friction way to get listed.",
    solution:
      "I designed and built the marketplace around simple onboarding, interest-led browsing, location-aware discovery, and SEO-friendly pages that helped real organisers become discoverable.",
    link: "https://weeknights.nl/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    image: "/weeknights.png",
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
    title: "Natural-language train planning for Dutch rail",
    company: "RailGPT",
    year: "2024",
    description:
      "Turned rigid timetable search into a conversational planning experience grounded in real Dutch rail data.",
    fullDescription:
      "RailGPT is a conversational travel planner for Dutch rail journeys. Users ask natural language questions like \"find trains from Amsterdam to Utrecht tomorrow at 9am\" and get accurate schedule results grounded in the NS API, turning a rigid timetable workflow into a simple product experience.",
    challenge:
      "Planning train journeys often means translating a real-world question into rigid form fields, routes, transfers, and timetable constraints.",
    solution:
      "I built a conversational interface over the NS API so users could ask journey questions naturally and receive grounded, structured travel answers.",
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
    title: "Conversational data access for internal workflows",
    company: "Queryhub.ai",
    year: "2024",
    description:
      "Built a natural-language interface for querying databases, reducing the friction between business questions and usable SQL.",
    fullDescription:
      "Queryhub.ai helps developers and analysts access data through natural language. Connect a database, ask a question, get an optimised query, and run it in the browser. It explores how conversational interfaces can reduce workflow friction without sacrificing grounded, inspectable outputs.",
    challenge:
      "Internal teams often need data answers but depend on SQL knowledge, analysts, or slow handoffs to turn questions into queries.",
    solution:
      "I built a conversational data workflow that generated inspectable SQL from natural language, kept schema context visible, and let users run queries in-browser.",
    link: "https://github.com/joeharwood96/queryhub.ai",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/queryhub.png",
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
