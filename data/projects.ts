export type Project = {
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

export const projects: Project[] = [
  {
    slug: "weeknights",
    title: "Weeknights",
    company: "Personal Project",
    year: "2025",
    description:
      "Social discovery platform for Amsterdam. Find and join local clubs — book clubs, running groups, cooking classes, language practice, board games, and more.",
    fullDescription:
      "Weeknights is a social discovery platform that helps Amsterdam residents find and join local clubs and community events. The platform offers a comprehensive directory of clubs across categories including art and crafts, running, book clubs, sports and fitness, language exchange, and business networking. Each club has a detailed profile with descriptions, images, and upcoming events, making it easy to connect with like-minded people and build lasting friendships through shared interests.",
    link: "https://weeknights.nl/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    image: "/weeknights-new.png",
    features: [
      "Club directory with categories spanning art, sports, social, language, and networking",
      "Detailed club profiles with descriptions, images, and event listings",
      "Event discovery for workshops, meetups, and group activities",
      "Location-focused community building for Amsterdam residents",
    ],
    technologies: [
      "Next.js 15 for server-side rendering and routing",
      "TypeScript for type-safe development",
      "Supabase for authentication and database",
      "Tailwind CSS for styling",
    ],
    outcomes: "Successfully launched with active user base in Amsterdam, helping people combat social isolation by connecting through shared interests",
  },
  {
    slug: "railgpt",
    title: "RailGPT",
    company: "Personal Project",
    year: "2024",
    description:
      "Conversational AI assistant for Dutch train travel. Ask questions like \"next train from Rotterdam to The Hague\" and get instant schedule results.",
    fullDescription:
      "RailGPT is a conversational AI assistant that makes planning train travel in the Netherlands effortless. Instead of navigating timetable apps, users simply ask natural language questions — like \"Find trains from Amsterdam to Utrecht tomorrow at 9am\" or \"What time is the next train from Eindhoven to Maastricht?\" — and get instant, accurate schedule results powered by the NS (Dutch Railways) API.",
    link: "https://www.railgpt.app",
    tags: ["Next.js", "TypeScript", "AI", "OpenAI"],
    image: "/railgpt-new.png",
    features: [
      "Conversational natural language interface for train queries",
      "Time-specific schedule searches across all Dutch stations",
      "Real-time departure and arrival information from NS API",
      "Multi-city route planning with transfer details",
    ],
    technologies: [
      "Next.js for full-stack application",
      "OpenAI GPT for natural language processing",
      "NS API integration for real-time data",
      "TypeScript for type safety",
    ],
    outcomes: "Making Dutch train travel planning conversational and intuitive, removing the friction of traditional timetable interfaces",
  },
  {
    slug: "year-in-travel",
    title: "Year in Travel",
    company: "Booking.com",
    year: "2023",
    description:
      "Personalized travel statistics feature for Booking.com users, similar to Spotify Wrapped. Won 1st place in Booking.com's internal hackathon.",
    fullDescription:
      "Year in Travel is an innovative feature that provides Booking.com users with a personalized summary of their travel year, inspired by Spotify Wrapped. The project won first place in Booking.com's internal hackathon and showcases user travel statistics in an engaging, shareable format.",
    tags: ["React", "TypeScript", "Node.js", "Java"],
    image: "/bookingcom.png",
    features: [
      "Personalized travel statistics and insights",
      "Beautiful data visualizations",
      "Social sharing capabilities",
      "Secure user data aggregation",
    ],
    technologies: [
      "React for interactive UI",
      "TypeScript for type safety",
      "Java backend services",
      "Node.js for data processing",
    ],
    outcomes:
      "Won 1st place in Booking.com hackathon, generated significant user engagement",
  },
  {
    slug: "queryhub",
    title: "Queryhub.ai",
    company: "Personal Project",
    year: "2024",
    description: "AI-powered database query assistant. Write SQL using natural language — connect your database, ask a question, and get optimised queries instantly.",
    fullDescription:
      "Queryhub.ai is an intelligent database query assistant that helps developers and data analysts write SQL queries using natural language. The platform leverages AI to understand intent and generate optimized database queries.",
    link: "https://github.com/joeharwood96/queryhub.ai",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    video: "https://www.youtube.com/embed/Mt9EzgNsm6M",
    features: [
      "Natural language to SQL conversion",
      "Support for multiple database types",
      "Query optimization suggestions",
      "Real-time query execution and results",
    ],
    technologies: [
      "Next.js for application framework",
      "PostgreSQL for database",
      "AI integration for query generation",
      "TypeScript for development",
    ],
    outcomes: "Open-source project helping developers write better SQL queries",
  },
];
