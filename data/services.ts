export type Service = {
  slug: "ai-prototype" | "ai-feature-launch" | "embedded-ai-engineer";
  label: string;
  name: string;
  priceLabel: string;
  durationLabel: string;
  tagline: string;
  linkLabel: string;
  description: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  whoFor: string[];
  terms?: string[];
  faq: { question: string; answer: string }[];
};

const dbaFaq = {
  question: "Is this a problem under the Wet DBA?",
  answer:
    "No. Each project is fixed price with a defined deliverable. I run DevJoe as my own business, use my own tools and set my own hours. You pay for a result.",
};

export const services: Service[] = [
  {
    slug: "ai-prototype",
    label: "Prototype",
    name: "AI Prototype",
    priceLabel: "€4,500 fixed",
    durationLabel: "2 weeks",
    tagline: "A working AI feature on your real data in two weeks.",
    linkLabel: "See how it works",
    description:
      "You have an AI idea and a deadline. In two weeks I build a working version on your own data, so you can put it in front of users or investors and find out if it holds up.",
    deliverables: [
      "Kick-off call to agree the one thing it must do",
      "A deployed prototype on your data, with a shareable link",
      "Prompt, model and cost choices written down",
      "A short report: what worked, what didn't, what a real build costs",
    ],
    process: [
      {
        title: "Scope",
        description:
          "One call to pick the feature, the data and what success looks like. Written up the same day.",
      },
      {
        title: "Build",
        description:
          "Ten working days of building. You get a link to the latest version every couple of days.",
      },
      {
        title: "Hand over",
        description:
          "A walkthrough call, the code, and a plain estimate for taking it to production.",
      },
    ],
    whoFor: [
      "Startups testing an AI feature before committing a team to it",
      "Founders who need something real for a demo day or investor meeting",
      "Product teams who want an answer, not a slide deck",
    ],
    terms: [
      "One feature, one data source",
      "Built to learn from, not to scale",
      "API and hosting costs are billed to you at cost",
      "50% up front, 50% on hand over",
    ],
    faq: [
      {
        question: "What kind of features does this cover?",
        answer:
          "Chat and search over your content, recommendations, summarising or extracting from documents, natural-language queries over your data, and agents that do a narrow job well.",
      },
      {
        question: "Do I own the code?",
        answer: "Yes. The repo and everything in it is yours from day one.",
      },
      {
        question: "What if the idea doesn't work?",
        answer:
          "Then you found out in two weeks for €4,500 instead of six months. The report tells you why and what to try next.",
      },
      dbaFaq,
    ],
  },
  {
    slug: "ai-feature-launch",
    label: "Launch",
    name: "AI Feature Launch",
    priceLabel: "From €12,000",
    durationLabel: "4 to 6 weeks",
    tagline: "An AI feature built into your product and live with real users.",
    linkLabel: "View details",
    description:
      "I build the feature into your product properly: the UI, the backend, testing for bad answers, guardrails, and cost tracking. Then I ship it and watch how people use it.",
    deliverables: [
      "Scope, success metrics and a fixed quote before work starts",
      "Frontend and backend built into your existing stack",
      "Tests for answer quality, plus guardrails for bad output",
      "Cost and usage monitoring",
      "Launch, then two weeks of fixes and tuning",
    ],
    process: [
      {
        title: "Scope",
        description:
          "A short paid discovery, or a finished AI Prototype, turns into a fixed quote with clear boundaries.",
      },
      {
        title: "Build",
        description:
          "Weekly demos on a preview link. You see progress, not status updates.",
      },
      {
        title: "Launch",
        description:
          "Released behind a flag, measured against the agreed metrics, then rolled out.",
      },
    ],
    whoFor: [
      "Startups with an AI feature on the roadmap and no one free to build it",
      "Teams who tried a quick version and need it production-ready",
      "Companies running React, Next.js or Node who want the feature in their own codebase",
    ],
    terms: [
      "Fixed price agreed before work starts",
      "Larger scopes are split into phases",
      "Model, API and hosting costs are separate",
      "Paid in three milestones",
    ],
    faq: [
      {
        question: "Can you work in our codebase?",
        answer:
          "Yes, that is the normal setup. I work in your repo, follow your conventions and go through your code review.",
      },
      {
        question: "Which models do you use?",
        answer:
          "Whatever fits the job and the budget. Usually OpenAI or Anthropic, sometimes a smaller or open model when cost or privacy matters.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Two weeks of fixes and tuning are included. After that, the Embedded AI Engineer plan keeps it improving.",
      },
      dbaFaq,
    ],
  },
  {
    slug: "embedded-ai-engineer",
    label: "Embedded",
    name: "Embedded AI Engineer",
    priceLabel: "€6,000 / month",
    durationLabel: "2 days a week · 3-month minimum",
    tagline: "A senior AI product engineer in your team two days a week.",
    linkLabel: "View details",
    description:
      "Two fixed days a week on your AI roadmap. I join your standups, ship features, and help the rest of the team build AI work well.",
    deliverables: [
      "Two days a week on your roadmap",
      "Features shipped through your normal process",
      "Model, prompt and cost reviews",
      "A monthly summary of what shipped and what's next",
    ],
    process: [
      {
        title: "Plan",
        description:
          "Agree the first month's goals and which days I'm with you.",
      },
      {
        title: "Ship",
        description:
          "Work through the backlog with your team, in your tools.",
      },
      {
        title: "Review",
        description:
          "Monthly check-in on what shipped, what it did, and what comes next.",
      },
    ],
    whoFor: [
      "Startups who need senior AI experience but not a full-time hire yet",
      "Teams after an AI Feature Launch who want to keep improving it",
      "Agencies with steady AI work across several clients",
    ],
    terms: [
      "Three-month minimum, then month to month",
      "Two days a week, agreed in advance",
      "Invoiced monthly",
    ],
    faq: [
      {
        question: "Can we go to more days?",
        answer:
          "Sometimes, depending on my other projects. Ask and I'll tell you straight.",
      },
      {
        question: "Is this a problem under the Wet DBA?",
        answer:
          "It is set up as a monthly scope with agreed goals, not open-ended hours. I run my own business, use my own tools and take other work. If you need someone full time, I'll help you hire them.",
      },
    ],
  },
];

export function getService(slug: Service["slug"]) {
  return services.find((service) => service.slug === slug);
}
