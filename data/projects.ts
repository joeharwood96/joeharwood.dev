export type Project = {
  slug: string;
  title: string;
  company: string;
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
    description:
      "Local club discovery platform for Amsterdam, connecting people through interest-based communities from book clubs to sports groups.",
    fullDescription:
      "Weeknights is a community-driven platform designed to help Amsterdam residents discover and join local clubs and interest groups. The platform connects people with shared interests, from book clubs to sports teams, making it easy to build meaningful connections in the city.",
    link: "https://weeknights.nl/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    image: "/weeknights-new.png",
    features: [
      "Browse and search local clubs by interest category",
      "User authentication and profile management",
      "Real-time updates on club activities and events",
      "Responsive design for mobile and desktop",
    ],
    technologies: [
      "Next.js 15 for server-side rendering and routing",
      "TypeScript for type-safe development",
      "Supabase for authentication and database",
      "Tailwind CSS for styling",
    ],
    outcomes: "Successfully launched with active user base in Amsterdam",
  },
  {
    slug: "railgpt",
    title: "RailGPT",
    company: "Personal Project",
    description:
      "AI-powered train travel assistant for the Netherlands. Find trains, check schedules, and plan journeys using natural language queries.",
    fullDescription:
      "RailGPT transforms the way Dutch travelers plan their train journeys by leveraging AI to provide natural language queries for train schedules, route planning, and real-time updates. The platform integrates with NS (Dutch Railways) API to deliver accurate and up-to-date information.",
    link: "https://www.railgpt.app",
    tags: ["Next.js", "TypeScript", "AI", "OpenAI"],
    image: "/railgpt-new.png",
    features: [
      "Natural language queries for train schedules",
      "Real-time train departure and arrival information",
      "Multi-route journey planning with transfers",
      "Integration with OpenAI for intelligent responses",
    ],
    technologies: [
      "Next.js for full-stack application",
      "OpenAI GPT for natural language processing",
      "NS API integration for real-time data",
      "TypeScript for type safety",
    ],
    outcomes: "Helping travelers plan journeys more intuitively",
  },
  {
    slug: "year-in-travel",
    title: "Year in Travel",
    company: "Booking.com",
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
    description: "AI Agent for database queries.",
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
