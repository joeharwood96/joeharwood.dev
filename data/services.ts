export type Service = {
  slug: "startup-mvp" | "launch-site" | "growth-sprint";
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
    slug: "startup-mvp",
    label: "MVP",
    name: "Startup MVP",
    priceLabel: "€12,000–20,000",
    durationLabel: "4-8 weeks",
    tagline:
      "A production-ready SaaS or marketplace, designed and built end to end and ready to put in front of real users.",
    description:
      "For founders who need to go from idea to a real, working product. I design and build the whole thing: the interface, the backend, auth, payments, and the core flows your users actually need. You get something solid enough to launch, raise on, or start charging for.",
    deliverables: [
      "Product & UX design",
      "Full front-end build",
      "Backend, database & APIs",
      "Auth, payments & core integrations",
      "Production deployment",
      "Handover & launch support",
    ],
    process: [
      {
        title: "Scope",
        description:
          "Get clear on the product, the core flows, and the smallest version worth launching.",
      },
      {
        title: "Design & build",
        description:
          "Design the experience and build the real thing: front end, backend, data, and integrations.",
      },
      {
        title: "Ship",
        description:
          "Deploy to production, hand it over, and support the launch so you can put it in front of users.",
      },
    ],
    whoFor: [
      "Founders turning an idea into a real product",
      "Teams that need to launch before raising or selling",
      "Non-technical founders who need one person to own delivery",
    ],
    faq: [
      {
        question: "Can we start without a full spec?",
        answer:
          "Yes. Most founders come with an idea, not a spec. The first step is scoping it together into the smallest version worth building.",
      },
      {
        question: "Do I own the code?",
        answer:
          "Completely. You get the full codebase, the deployment, and everything needed to keep building after launch.",
      },
      {
        question: "What happens after launch?",
        answer:
          "I support the launch and can keep working with you on the next set of features, or hand over cleanly if you have a team ready to take it on.",
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
    slug: "launch-site",
    label: "Site",
    name: "Launch Site",
    priceLabel: "€4,000–6,000",
    durationLabel: "2-3 weeks",
    tagline:
      "A fast, beautiful marketing site with a CMS you can update yourself.",
    description:
      "A marketing website that looks premium and converts. Designed around your story and your offer, built to load fast and rank well, and running on a CMS so you can edit content without calling a developer.",
    deliverables: [
      "Custom design",
      "Responsive build",
      "CMS setup",
      "SEO & performance",
      "Analytics",
      "Launch support",
    ],
    process: [
      {
        title: "Design",
        description:
          "Shape the story, the structure, and a design that makes your offer look the part.",
      },
      {
        title: "Build",
        description:
          "Build it fast and responsive, wired up to a CMS so you can edit it yourself.",
      },
      {
        title: "Launch",
        description:
          "Set up SEO, analytics, and hosting, then ship it live with support through launch.",
      },
    ],
    whoFor: [
      "Founders and brands that need a site that looks the part",
      "Teams replacing a slow or dated website",
      "Anyone who wants to update their own content",
    ],
    faq: [
      {
        question: "Can I update the site myself afterwards?",
        answer:
          "Yes. That is the point of the CMS. You can edit copy, images, and pages without touching code or waiting on a developer.",
      },
      {
        question: "Do you handle hosting and domains?",
        answer:
          "I set up hosting, connect your domain, and make sure everything is live and fast. You keep ownership of all of it.",
      },
      {
        question: "What if I need more pages later?",
        answer:
          "The build is set up so new pages are easy to add. I can do them for you or you can add them through the CMS.",
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
    slug: "growth-sprint",
    label: "Sprint",
    name: "Growth Sprint",
    priceLabel: "€3,000–5,000",
    durationLabel: "1-2 weeks",
    tagline:
      "A focused sprint to improve conversion, onboarding, search, or a key flow in your existing product.",
    description:
      "For products that already exist but are not pulling their weight somewhere. We pick one high-impact area, conversion, onboarding, search, or a clunky flow, and I ship real improvements in a short, focused sprint.",
    deliverables: [
      "Focused review of the chosen area",
      "Prioritised list of improvements",
      "Implementation of the agreed changes",
      "Before & after measurement",
      "Handover notes",
    ],
    process: [
      {
        title: "Review",
        description:
          "Dig into the chosen area and find the changes most likely to move the number.",
      },
      {
        title: "Build",
        description:
          "Ship the agreed improvements directly into your existing product.",
      },
      {
        title: "Measure",
        description:
          "Check the before and after, and leave clear notes on what changed and why.",
      },
    ],
    whoFor: [
      "Teams with a live product and a specific problem",
      "Founders who want quick, measurable wins",
      "Products with leaky onboarding, search, or conversion",
    ],
    faq: [
      {
        question: "Can you work inside our existing stack?",
        answer:
          "Yes. The sprint is scoped around your current product, codebase, and delivery process.",
      },
      {
        question: "How do you pick what to work on?",
        answer:
          "We start from your goal, then I focus on the single area where a short sprint can make the biggest measurable difference.",
      },
      {
        question: "What happens after the sprint?",
        answer:
          "You get the changes shipped plus notes on what to try next. We can run another sprint or keep working together from there.",
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
