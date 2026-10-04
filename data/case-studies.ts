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
  stats?: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "year-in-travel",
    title: "Booking.com's first AI Trip Planner",
    company: "Booking.com",
    year: "2022-2025",
    description:
      "Built and launched a customer-facing conversational trip planner on the OpenAI API, plus recommendation and discovery work across the app.",
    fullDescription:
      "Three and a half years at Booking.com turning messy travel intent into clear product. The headline was the AI Trip Planner, Booking.com's first customer-facing conversational recommender. Alongside it: a neighbourhood search worth an estimated €19.7M a year, and Year in Travel, a shareable travel recap that won the internal hackathon.",
    challenge:
      "Travel intent is messy. Users often know the kind of trip they want, but not the exact destination, dates, filters, or path through a traditional search flow.",
    solution:
      "I built and launched the AI Trip Planner, a conversational recommender on the OpenAI API that turns a loose idea into stays and destinations. I also led frontend delivery for neighbourhood search and built recommendation components marketing could configure themselves.",
    tags: ["React", "TypeScript", "OpenAI API", "Node.js"],
    image: "/booking-trip-planner.webp",
    features: [
      "Conversational trip planning powered by the OpenAI API",
      "Neighbourhood search that helped travellers pick where to stay",
      "Configurable recommendation components with self-service tooling",
      "Year in Travel, a personalised recap built for sharing",
    ],
    technologies: [
      "OpenAI API",
      "React and TypeScript",
      "Node.js",
      "A/B experimentation",
    ],
    outcomes:
      "Launched Booking.com's first AI Trip Planner to customers. The neighbourhood search was valued at an estimated €19.7M a year, and the self-service tooling cut marketing launch time from two weeks to two days.",
    stats: [
      { value: "1st", label: "AI Trip Planner at Booking.com" },
      { value: "€19.7M", label: "Estimated yearly value, neighbourhood search" },
      { value: "2 days", label: "Marketing launch time, down from 2 weeks" },
    ],
  },
  {
    slug: "weeknights",
    title: "A marketplace for Amsterdam clubs and events",
    company: "Weeknights",
    year: "2026",
    description:
      "Built and launched a two-sided marketplace where people find local clubs and book events, and hosts get paid through Stripe Connect.",
    fullDescription:
      "Weeknights helps people in Amsterdam find and join local clubs: book clubs, running groups, cooking classes, language practice, board games. I built it from scratch as the founder, covering discovery, UX, booking and ticketing, and host payouts.",
    challenge:
      "Local discovery breaks when supply is fragmented and users do not know what to search for. Communities also need a low-friction way to get listed.",
    solution:
      "I designed and built the marketplace around simple onboarding, interest-led browsing, location-aware discovery, and SEO-friendly pages that helped real organisers become discoverable.",
    link: "https://weeknights.nl/",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe Connect"],
    image: "/weeknights.webp",
    features: [
      "Event publishing, booking and ticketing for hosts and guests",
      "Stripe Connect onboarding, payments and payouts for hosts",
      "Browsing flows designed around real-world interests and neighbourhood context",
      "Local search and filtering tuned for Amsterdam discovery",
    ],
    technologies: [
      "Next.js on Vercel",
      "Supabase and PostgreSQL",
      "Stripe Connect",
      "TypeScript end to end",
    ],
    outcomes:
      "Grew organically to 830 accounts, 131 active clubs and 599 confirmed ticket places across 273 events by September 2026. 82 of 320 buyers have booked more than once.",
    stats: [
      { value: "830", label: "Registered accounts" },
      { value: "273", label: "Published events" },
      { value: "599", label: "Confirmed ticket places" },
    ],
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
    image: "/railgpt.webp",
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
