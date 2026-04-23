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
    slug: "weeknights",
    title: "Weeknights",
    company: "Weeknights · Co-founder",
    year: "2025",
    description:
      "A social discovery platform for Amsterdam. Directory of clubs and events, grounded in a calm, content-first product design.",
    fullDescription:
      "Weeknights helps Amsterdam residents find and join local clubs: book clubs, running groups, cooking classes, language practice, board games. Built from scratch as a co-founder, covering product, engineering, and go-to-market. Live in Amsterdam with an active user base.",
    link: "https://weeknights.nl/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    image: "/weeknights-dj.png",
    features: [
      "Club directory across art, sports, language, and networking",
      "Event listings with signup flows and organiser tools",
      "Location-aware discovery tuned to Amsterdam",
      "Content-driven SEO that compounds as clubs list themselves",
    ],
    technologies: [
      "Next.js 15 on Vercel",
      "Supabase for auth, database, and storage",
      "TypeScript end to end",
      "Tailwind for a minimal, content-first design system",
    ],
    outcomes:
      "Launched into Amsterdam with an active user base. Clubs and events created by real organisers, not seed data.",
  },
  {
    slug: "railgpt",
    title: "RailGPT",
    company: "Independent",
    year: "2024",
    description:
      "A conversational interface on top of the Dutch rail API. Ask in plain English, get a train. Built in a weekend to prove the pattern.",
    fullDescription:
      "RailGPT is a conversational AI assistant that makes planning train travel in the Netherlands effortless. Users ask natural language questions like \"find trains from Amsterdam to Utrecht tomorrow at 9am\" and get instant, accurate schedule results grounded in the NS (Dutch Railways) API.",
    link: "https://www.railgpt.app",
    tags: ["Next.js", "TypeScript", "OpenAI", "NS API"],
    image: "/railgpt.png",
    features: [
      "Natural language queries for departures, arrivals, and transfers",
      "Tool calling against the NS API for grounded answers",
      "Sub-second streaming responses with graceful fallbacks",
      "Shareable query URLs so answers live in LinkedIn and Slack",
    ],
    technologies: [
      "OpenAI tool calling for structured queries",
      "NS API for real-time Dutch rail data",
      "Next.js streaming responses",
      "TypeScript for end-to-end type safety",
    ],
    outcomes:
      "Shipped in a weekend. Now a working reference for how a grounded AI assistant can sit on top of a legacy API without hallucinating.",
  },
  {
    slug: "year-in-travel",
    title: "Year in Travel",
    company: "Booking.com",
    year: "2023",
    description:
      "A personalised year-in-review feature for Booking.com users, inspired by Spotify Wrapped. Shipped from a hackathon to first place.",
    fullDescription:
      "Year in Travel gave Booking.com users a personalised summary of their travel year (countries visited, nights booked, cities revisited) in a shareable Wrapped-style format. Won first place in Booking.com's internal hackathon and shipped through to internal staging.",
    tags: ["React", "TypeScript", "Node.js", "Java"],
    image: "/bookingyit.png",
    features: [
      "Personalised travel statistics pulled from booking history",
      "Wrapped-style interactive data visualisations",
      "Social sharing built for mobile-first audiences",
      "Secure aggregation across multiple internal services",
    ],
    technologies: [
      "React for interactive front-end",
      "TypeScript for type safety",
      "Java services for user data aggregation",
      "Node.js for the personalisation pipeline",
    ],
    outcomes:
      "Won first place in Booking.com's internal hackathon. Validated the concept well enough to be picked up by a product team.",
  },
  {
    slug: "queryhub",
    title: "Queryhub.ai",
    company: "Independent",
    year: "2024",
    description:
      "An AI layer for databases. Ask a question in English, get optimised SQL back, run it, see the result. An open-source experiment in grounded AI tooling.",
    fullDescription:
      "Queryhub.ai helps developers and analysts write SQL using natural language. Connect a database, ask a question, get an optimised query, and run it in the browser. Open source, built to explore how AI can sit on top of structured data without making things up.",
    link: "https://github.com/joeharwood96/queryhub.ai",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/queryhub-dj.png",
    video: "https://www.youtube.com/embed/Mt9EzgNsm6M",
    features: [
      "Natural language to SQL across multiple database types",
      "In-browser query execution with grounded schema context",
      "Query optimisation suggestions on top of raw generation",
      "Open source, so teams can fork and tune internally",
    ],
    technologies: [
      "Next.js App Router for full-stack SSR",
      "PostgreSQL as the canonical reference integration",
      "OpenAI for query generation grounded in schema context",
      "TypeScript and Tailwind throughout",
    ],
    outcomes:
      "Open-sourced as a working reference for grounded AI database tooling.",
  },
];
