export type Service = {
  slug: "workflow-review" | "workflow-build" | "ongoing-improvements";
  label: string;
  name: string;
  priceLabel: string;
  durationLabel: string;
  tagline: string;
  eligibilityNote?: string;
  linkLabel: string;
  description: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  whoFor: string[];
  terms?: string[];
  faq: { question: string; answer: string }[];
  accent: {
    bg: string;
    fg: string;
    fgMuted: string;
    border: string;
  };
};

export const services: Service[] = [
  {
    slug: "workflow-review",
    label: "Review",
    name: "Workflow Review",
    priceLabel: "€750 fixed",
    durationLabel: "Delivered in 5 business days",
    tagline:
      "Turn one inefficient process into a clear, costed plan for improvement.",
    linkLabel: "See how it works",
    description:
      "A focused review of one customer or operational workflow. We map how it works today, identify the biggest bottlenecks, and define a practical replacement before you commit to a larger build.",
    deliverables: [
      "One 60-minute stakeholder workshop",
      "Current-state map for one workflow",
      "Bottlenecks and recommended replacement",
      "Scoped implementation plan and cost estimate",
    ],
    process: [
      {
        title: "Workshop",
        description:
          "Walk through one workflow, who touches it, where information moves, and what currently causes delays or mistakes.",
      },
      {
        title: "Review",
        description:
          "Map the current process, isolate the highest-value improvements, and outline a practical replacement.",
      },
      {
        title: "Recommendation",
        description:
          "Receive written findings, a scoped implementation plan, and a cost estimate within five business days of the workshop.",
      },
    ],
    whoFor: [
      "Businesses with one manual or unreliable process they want to improve",
      "Teams that need clarity before commissioning custom software",
      "Owners and operational leaders who want a costed next step",
    ],
    terms: [
      "Covers one workflow and one stakeholder workshop",
      "Includes one clarification round",
      "Does not include implementation or production-ready designs",
      "Multiple workflows, user research, and technical audits are scoped separately",
    ],
    faq: [
      {
        question: "What counts as one workflow?",
        answer:
          "One workflow is a single end-to-end process with a clear start and finish, such as registering for a course, onboarding a member, or preparing a weekly report.",
      },
      {
        question: "Will I receive a working prototype?",
        answer:
          "No. The review may include light screens or a flow sketch when that makes the recommendation easier to understand, but production-ready design and implementation are separate work.",
      },
      {
        question: "Do I have to use you for the build?",
        answer:
          "No. The findings and recommendation are yours. The implementation proposal gives you a clear option to continue with me, but there is no obligation.",
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
    slug: "workflow-build",
    label: "Build",
    name: "Workflow Build",
    priceLabel: "From €3,000",
    durationLabel: "Typically 2–8 weeks",
    tagline:
      "Replace a manual process with software designed around how your business actually works.",
    linkLabel: "View details",
    description:
      "A clearly scoped operational improvement, integration, booking flow, customer portal, or internal tool. Smaller workflow builds begin at €3,000; larger portals and platforms are scoped and priced after a Workflow Review.",
    deliverables: [
      "Clear scope and success criteria",
      "UX and interface design",
      "Complete design and development",
      "Integrations, testing and production launch",
    ],
    process: [
      {
        title: "Scope",
        description:
          "Agree the workflow, integrations, boundaries, timeline, and definition of done before development starts.",
      },
      {
        title: "Design & build",
        description:
          "Design the new flow and build the working system, sharing progress at clear checkpoints along the way.",
      },
      {
        title: "Launch",
        description:
          "Test the agreed scenarios, deploy the system, and support the team as the new workflow goes live.",
      },
    ],
    whoFor: [
      "Businesses replacing forms, email, spreadsheets, or disconnected tools",
      "Teams that need a customer, member, or staff portal",
      "Operational leaders who need one person to own delivery end to end",
    ],
    terms: [
      "Smaller, clearly bounded builds begin at €3,000",
      "Larger portals and platforms are priced after a Workflow Review",
      "Third-party services and usage costs are identified separately",
    ],
    faq: [
      {
        question: "Does a full portal cost €3,000?",
        answer:
          "Not usually. €3,000 is the starting point for a small, clearly scoped workflow improvement. Larger portals and internal platforms vary significantly and are costed after the Workflow Review.",
      },
      {
        question: "Can you connect our existing systems?",
        answer:
          "Yes, where those systems provide suitable APIs or integration options. The proposal will identify the integrations, constraints, and any third-party costs before work begins.",
      },
      {
        question: "Who owns the finished system?",
        answer:
          "You do. You receive the codebase, deployment access, and handover information needed to keep operating or developing it.",
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
    slug: "ongoing-improvements",
    label: "Support",
    name: "Ongoing Improvements",
    priceLabel: "From €500/month",
    durationLabel: "3-month minimum",
    tagline:
      "Reserved development time to keep your system reliable and continuously improving.",
    eligibilityNote: "Available for systems I have built or reviewed.",
    linkLabel: "View details",
    description:
      "A defined monthly development allocation covering maintenance, monitoring, and agreed improvements. Work is prioritised and scheduled rather than unlimited or on demand.",
    deliverables: [
      "Reserved monthly development time",
      "Prioritised maintenance and improvements",
      "Monitoring of agreed critical journeys",
      "Scheduled releases and progress updates",
    ],
    process: [
      {
        title: "Plan",
        description:
          "Agree the monthly allocation, support boundaries, priorities, and release schedule for a system I have built or reviewed.",
      },
      {
        title: "Improve",
        description:
          "Use the reserved time on the highest-priority maintenance and improvements agreed for that month.",
      },
      {
        title: "Review",
        description:
          "Summarise what shipped, note anything that needs attention, and set the next priorities together.",
      },
    ],
    whoFor: [
      "Clients who want continued support after a Workflow Build",
      "Businesses whose existing system has first been through a Workflow Review",
      "Teams that need predictable access to development without hiring internally",
    ],
    terms: [
      "Available only for systems I have built or reviewed",
      "Work is limited to the monthly allocation agreed in the proposal",
      "Hosting, subscriptions, API usage, and other third-party costs are separate",
      "Initial three-month commitment, then month to month",
    ],
    faq: [
      {
        question: "Is this unlimited support?",
        answer:
          "No. Each plan reserves a defined amount of development time. Requests are prioritised together and scheduled within that allocation.",
      },
      {
        question: "Can you take over a system somebody else built?",
        answer:
          "Potentially, but only after I have reviewed the system and confirmed that I can support it responsibly. Unknown systems are not accepted directly onto a monthly plan.",
      },
      {
        question: "Are hosting and software costs included?",
        answer:
          "No. Hosting, subscriptions, API usage, licences, and other third-party charges remain separate and are paid by the client.",
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
  return services.find((service) => service.slug === slug);
}
