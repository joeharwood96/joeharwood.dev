import Hero from "@/components/home/hero";
import LogoStrip from "@/components/home/logo-strip";
import FeatureSection, { type Feature } from "@/components/home/feature-section";
import Offers from "@/components/home/offers";
import About from "@/components/home/about";
import ClosingCta from "@/components/home/closing-cta";
import { CONTACT_EMAIL } from "@/lib/constants";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/nav";

const features: Feature[] = [
  {
    heading: "Shipped AI to millions of travellers",
    lead: "Booking.com's first AI Trip Planner",
    stat: "is a conversational recommender I built and launched on the OpenAI API.",
    features: ["OpenAI API", "Conversational UI", "React and TypeScript", "A/B experimentation"],
    image: "/booking-trip-planner.png",
    imageAlt: "Booking.com AI Trip Planner on mobile",
    href: "/work/year-in-travel",
  },
  {
    heading: "Built a marketplace from zero",
    lead: "Weeknights has 830 accounts",
    stat: "and 273 published events. I built every part of it, payments included.",
    features: ["Next.js", "Supabase and Postgres", "Stripe Connect payouts", "Product analytics"],
    image: "/weeknights.webp",
    imageAlt: "Weeknights explore page showing events and clubs",
    href: "/work/weeknights",
  },
  {
    heading: "AI products, end to end",
    lead: "RailGPT plans Dutch train journeys",
    stat: "from plain questions, using live NS data. Queryhub turns questions into SQL.",
    features: ["OpenAI API", "NS API", "Natural language to SQL", "Open source"],
    image: "/railgpt.webp",
    imageAlt: "RailGPT conversational train planner",
    href: "/work/railgpt",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.devjoe.io/#studio",
      name: "DevJoe",
      url: "https://www.devjoe.io",
      description:
        "Fixed-price AI product engineering for startups and agencies. AI prototypes, feature launches and embedded support.",
      founder: { "@id": "https://www.devjoe.io/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
      areaServed: ["Amsterdam", "Netherlands", "Europe"],
    },
    {
      "@type": "Person",
      "@id": "https://www.devjoe.io/#person",
      name: "Joseph Harwood",
      jobTitle: "Senior AI Product Engineer",
      url: "https://www.devjoe.io",
      email: CONTACT_EMAIL,
      sameAs: [GITHUB_URL, LINKEDIN_URL],
    },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <LogoStrip />
      {features.map((feature, index) => (
        <FeatureSection key={feature.href} feature={feature} flip={index % 2 === 1} />
      ))}
      <Offers />
      <About />
      <ClosingCta />
    </main>
  );
}
