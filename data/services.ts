export type Service = {
  slug: "audit" | "sprint" | "implementation";
  label: string;
  name: string;
  priceLabel: string;
  durationLabel: string;
  tagline: string;
  description: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  whoFor: string[];
  faq: { question: string; answer: string }[];
  // Pastel accent used on the homepage service cards.
  accent: {
    // Background color for the card (CSS color, dark pastel).
    bg: string;
    // Foreground (main text) color, should contrast on bg.
    fg: string;
    // Muted foreground for secondary text on the card.
    fgMuted: string;
    // Subtle overlay/border on the card.
    border: string;
  };
};

export const services: Service[] = [
  {
    slug: "audit",
    label: "Audit",
    name: "AI Discovery Audit",
    priceLabel: "€2,000",
    durationLabel: "1 week",
    tagline:
      "A focused review of your product, workflows, onboarding, and discovery experience to identify where AI can create meaningful product value.",
    description:
      "A focused audit to understand your product, identify practical AI opportunities, and turn vague AI interest into a prioritised roadmap. The goal is to find where search, recommendations, onboarding, workflows, or discovery can be improved before wasting time building the wrong thing.",
    deliverables: [
      "Product & UX review",
      "AI opportunity mapping",
      "Technical feasibility review",
      "Prioritised roadmap",
      "Loom walkthrough or review call",
      "Optional prototype sprint",
    ],
    process: [
      {
        title: "Understand",
        description:
          "Review the product, onboarding, discovery flows, workflows, search, and points of user friction.",
      },
      {
        title: "Map",
        description:
          "Identify practical AI opportunities and assess them against impact, feasibility, and implementation risk.",
      },
      {
        title: "Prioritise",
        description:
          "Turn the strongest opportunities into a clear roadmap and walkthrough so your team knows what to validate first.",
      },
    ],
    whoFor: [
      "Teams unsure where AI actually fits into their product",
      "Founders and product leads who want clarity before committing budget",
      "Startups improving search, onboarding, workflows, recommendations, or discovery",
    ],
    faq: [
      {
        question: "What if we don't find anything worth building?",
        answer:
          "That is still useful. You avoid spending time and budget on the wrong thing, and you get a clearer view of where AI does and does not make sense.",
      },
      {
        question: "Can this lead into a prototype sprint?",
        answer:
          "Yes. If the audit surfaces a strong opportunity, the next step is usually a focused prototype sprint to validate the experience before production implementation.",
      },
      {
        question: "Do you sign an NDA?",
        answer:
          "Happy to. Send yours over before we kick off, or use mine.",
      },
    ],
    accent: {
      bg: "#8B5566",
      fg: "#F7EFE6",
      fgMuted: "rgba(247, 239, 230, 0.72)",
      border: "rgba(247, 239, 230, 0.14)",
    },
  },
  {
    slug: "sprint",
    label: "Prototype",
    name: "AI Prototype Sprint",
    priceLabel: "€12,000",
    durationLabel: "3 weeks",
    tagline:
      "A focused sprint to prototype and validate a high-impact AI feature before committing to a full production implementation.",
    description:
      "A prototype sprint is for validating a specific AI opportunity quickly. Examples include semantic search, recommendations, conversational onboarding, AI-assisted workflows, internal copilots, or ranking improvements. The aim is to prove the product experience before turning it into a production build.",
    deliverables: [
      "A working prototype of one validated AI feature",
      "Interaction flow and UX recommendations",
      "Technical implementation notes",
      "Clear production-readiness assessment",
      "Recommended next steps for an Implementation Sprint",
    ],
    process: [
      {
        title: "Scope",
        description:
          "Define the product problem, success criteria, and the smallest useful prototype.",
      },
      {
        title: "Prototype",
        description:
          "Build the interaction, data flow, and AI behaviour needed to test the opportunity.",
      },
      {
        title: "Validate",
        description:
          "Review the prototype, identify risks, and decide whether it is worth turning into production software.",
      },
    ],
    whoFor: [
      "Teams with a promising AI idea that needs validation",
      "Startups testing search, recommendation, onboarding, or workflow concepts",
      "Product teams that want evidence before committing to implementation",
    ],
    faq: [
      {
        question: "Is this production-ready?",
        answer:
          "The goal is validation, not a polished production launch. If the prototype proves useful, the next step is an Implementation Sprint.",
      },
      {
        question: "Do you work on existing codebases?",
        answer:
          "Yes. A prototype can sit inside an existing product, staging environment, or lightweight standalone experience depending on what is fastest to validate.",
      },
      {
        question: "What happens after validation?",
        answer:
          "If the prototype is worth shipping, I can scope an Implementation Sprint to turn it into production-ready product work.",
      },
    ],
    accent: {
      bg: "#2F4E4A",
      fg: "#F2EDE3",
      fgMuted: "rgba(242, 237, 227, 0.72)",
      border: "rgba(242, 237, 227, 0.14)",
    },
  },
  {
    slug: "implementation",
    label: "Implementation",
    name: "Implementation Sprint",
    priceLabel: "Scoped after validation",
    durationLabel: "2-6 weeks",
    tagline:
      "Production-ready implementation of validated AI features across search, recommendations, workflows, onboarding, and discovery systems.",
    description:
      "An implementation sprint turns a validated AI opportunity into production-ready product work. The focus is on shipping the feature cleanly inside your existing product, with the right UX, data flow, quality controls, and launch support.",
    deliverables: [
      "Production-ready feature implementation",
      "Front-end and API integration",
      "LLM, embedding, ranking, or retrieval workflows where useful",
      "Quality assurance and launch support",
      "Instrumentation recommendations",
      "Post-launch iteration plan",
    ],
    process: [
      {
        title: "Prepare",
        description:
          "Confirm the validated scope, technical constraints, UX details, and launch criteria.",
      },
      {
        title: "Build",
        description:
          "Implement the product flow, data integration, and AI behaviour needed for a reliable launch.",
      },
      {
        title: "Ship",
        description:
          "Test, release, and refine the feature around real user behaviour and product feedback.",
      },
    ],
    whoFor: [
      "Teams ready to ship a validated AI feature into production",
      "Startups moving from prototype to real product usage",
      "Products that need practical AI work without adding unnecessary platform complexity",
    ],
    faq: [
      {
        question: "Do we need to do an audit first?",
        answer:
          "Not always. If the opportunity is already clear and validated, an implementation sprint can start directly from the existing product scope.",
      },
      {
        question: "Can you work inside our existing stack?",
        answer:
          "Yes. The sprint is scoped around your current product, codebase, data, and delivery process.",
      },
      {
        question: "What happens after launch?",
        answer:
          "The sprint includes launch support and a practical iteration plan so the feature can improve around real usage.",
      },
    ],
    accent: {
      bg: "#3E4058",
      fg: "#F4F1EA",
      fgMuted: "rgba(244, 241, 234, 0.72)",
      border: "rgba(244, 241, 234, 0.14)",
    },
  },
];

export function getService(slug: Service["slug"]) {
  return services.find((s) => s.slug === slug);
}
