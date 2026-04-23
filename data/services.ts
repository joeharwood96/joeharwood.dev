export type Service = {
  slug: "audit" | "sprint";
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
    label: "Entry",
    name: "AI Opportunity Audit",
    priceLabel: "€2,000",
    durationLabel: "1 week",
    tagline:
      "A focused week mapping where AI would actually move the needle in your business, and what it would cost to build.",
    description:
      "One week, one written report. I spend a few hours with your team, map your workflows end to end, and hand back a ranked list of three to five AI use cases, each with a rough build estimate and expected ROI. No code, no pressure. Most audits turn into a build project. Some don't, and that's fine too.",
    deliverables: [
      "Three to five AI use cases ranked by expected ROI",
      "Rough build estimate and timeline for each",
      "A prioritised recommendation on what to ship first",
      "A written report you can share with the rest of your team",
      "A 60-minute readout call to walk through findings",
    ],
    process: [
      {
        title: "Day 1",
        description:
          "Kick-off call and three to four hours of interviews with the people closest to the work: operations, support, marketing, product.",
      },
      {
        title: "Days 2 to 4",
        description:
          "I map your workflows, spot the repeatable work, and shortlist AI use cases against effort, risk, and impact.",
      },
      {
        title: "Day 5",
        description:
          "You get the written report and a live walkthrough. If it makes sense to build, we can roll straight into a Sprint.",
      },
    ],
    whoFor: [
      "Teams between 50 and 500 people with no in-house AI expertise",
      "Leaders who want a second opinion before committing budget",
      "Operators who can see AI is coming and want a plan, not a pitch deck",
    ],
    faq: [
      {
        question: "What if we don't find anything worth building?",
        answer:
          "You still walk away with a written report explaining why. That's a useful result. Better than paying six figures for a build that shouldn't have happened.",
      },
      {
        question: "Can the audit credit towards a Sprint if we go ahead?",
        answer:
          "Yes. The €2,000 is credited back against your first Sprint, so it's effectively free if we end up building together.",
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
    label: "Main",
    name: "AI Feature Sprint",
    priceLabel: "€12,000",
    durationLabel: "3 weeks",
    tagline:
      "A single AI feature, scoped, built, and shipped into your product or site in three weeks. Fixed price, fixed scope.",
    description:
      "Three weeks. One feature, shipped. An AI chatbot trained on your docs, an AI search that understands what your customers actually mean, an AI lead qualifier that pre-screens inbound, an AI summariser for long-form content. Scope is locked up front so there are no surprises. You know the price, the timeline, and what you get on day one.",
    deliverables: [
      "A working AI feature integrated into your product or website",
      "Source code, in your repo, owned by you",
      "Infrastructure set up on your accounts (OpenAI, Supabase, Vercel, etc.)",
      "A handover doc covering how it works and how to tune it",
      "Two weeks of post-launch support for tweaks and fixes",
    ],
    process: [
      {
        title: "Week 1",
        description:
          "Scope lock. We define exactly what the feature does, what it doesn't do, and what success looks like.",
      },
      {
        title: "Week 2",
        description:
          "Build. I ship iteratively against a staging environment you can poke at every couple of days.",
      },
      {
        title: "Week 3",
        description:
          "Ship and hand over. Production deploy, docs, two weeks of post-launch support included.",
      },
    ],
    whoFor: [
      "Companies who already know what they want to build",
      "Product teams without spare AI engineering capacity",
      "Agencies who need a senior to deliver one feature cleanly",
    ],
    faq: [
      {
        question: "What if the feature takes longer than three weeks?",
        answer:
          "Fixed price means fixed price. If I've underscoped, that's on me. I finish the work without extra charge. What we agree in week one is what ships.",
      },
      {
        question: "Do you work on existing codebases?",
        answer:
          "Yes, that's the default. Most Sprints ship into an existing Next.js, React, or Node codebase. I can also stand up a greenfield integration if you prefer.",
      },
      {
        question: "What about ongoing maintenance?",
        answer:
          "Two weeks of post-launch support is included. Beyond that, I offer a light retainer for tuning and small changes if you want it.",
      },
    ],
    accent: {
      bg: "#2F4E4A",
      fg: "#F2EDE3",
      fgMuted: "rgba(242, 237, 227, 0.72)",
      border: "rgba(242, 237, 227, 0.14)",
    },
  },
];

export function getService(slug: Service["slug"]) {
  return services.find((s) => s.slug === slug);
}
