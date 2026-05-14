import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeProcess from "@/components/home-process";
import Navbar from "@/components/navbar";
import FadeIn from "@/components/motion/fade-in";
import { caseStudies } from "@/data/case-studies";
import { CALENDLY_URL } from "@/lib/constants";

const clientTiles = [
  {
    name: "Booking.com",
    src: "/logos/Booking.com/Booking.com_Logo_0.svg",
    width: 182,
    height: 30,
    className: "max-h-9 max-w-[170px]",
  },
  {
    name: "IBM",
    src: "/logos/ibm-logo-18910.png",
    width: 800,
    height: 600,
    className: "max-h-14 max-w-[130px]",
  },
  {
    name: "Appical",
    src: "/logos/Appical/Appical_idtsDOMAEO_1.svg",
    width: 160,
    height: 64,
    className: "max-h-12 max-w-[150px]",
  },
  {
    name: "Post Office",
    src: "/logos/Post Office/Post Office_idXyh21KYa_1.svg",
    width: 160,
    height: 120,
    className: "max-h-14 max-w-[150px]",
  },
  {
    name: "Weeknights",
    src: "/logos/weeknights-orange.png",
    width: 166,
    height: 30,
    className: "max-h-10 max-w-[170px]",
  },
];

const services = [
  {
    title: "AI Discovery Audit",
    description:
      "A focused review of your product, workflows, onboarding, and discovery experience to identify where AI can create meaningful product value.",
    deliverables: [
      "Product & UX review",
      "AI opportunity mapping",
      "Technical feasibility review",
      "Prioritised roadmap",
      "Loom walkthrough or review call",
      "Optional prototype sprint",
    ],
  },
  {
    title: "AI Prototype Sprint",
    description:
      "A focused sprint to prototype and validate a high-impact AI feature before committing to a full implementation.",
  },
  {
    title: "Implementation Sprint",
    description:
      "Production-ready implementation of validated AI features across search, recommendations, workflows, onboarding, and discovery systems.",
  },
];

export default function Home() {
  const featuredCaseStudies = caseStudies;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://joeharwood.dev/#studio",
        name: "DevJoe",
        url: "https://joeharwood.dev",
        description:
          "AI discovery and recommendation engineering for travel, marketplace, and local-commerce startups.",
        founder: {
          "@type": "Person",
          name: "Joseph Harwood",
          url: "https://joeharwood.dev",
          jobTitle: "AI Product Engineer",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amsterdam",
          addressCountry: "NL",
        },
        areaServed: ["Amsterdam", "Netherlands", "Europe"],
      },
      {
        "@type": "Person",
        "@id": "https://joeharwood.dev/#person",
        name: "Joseph Harwood",
        jobTitle: "AI Product Engineer",
        url: "https://joeharwood.dev",
        email: "joeharwooddev@gmail.com",
        sameAs: [
          "https://github.com/joeharwood96",
          "https://www.linkedin.com/in/josephharwood-3/",
        ],
      },
    ],
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-52 sm:pb-32 sm:pt-44 lg:pt-40">
        <div className="max-w-6xl">
          <FadeIn y={20} duration={0.8}>
            <h1 className="text-balance text-[2.45rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[3.6rem] md:text-[4.35rem] lg:text-[4.75rem]">
              AI search and recommendations for travel and marketplace
              startups.
              <span className="mt-6 block text-[0.78em] leading-[1.08] text-neutral-400">
                I help teams improve discovery, engagement, and conversion.
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {clientTiles.map((tile, index) => (
            <FadeIn key={tile.name} delay={index * 0.05}>
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-[#F5F5F5] p-8 sm:h-40 sm:aspect-auto">
                <Image
                  src={tile.src}
                  alt={tile.name}
                  width={tile.width}
                  height={tile.height}
                  className={`h-auto w-auto object-contain ${tile.className}`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-[1400px] px-6 py-20">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          {featuredCaseStudies.map((caseStudy, index) => (
            <FadeIn key={caseStudy.slug} delay={index * 0.1} y={40} duration={0.8}>
              <Link href={`/work/${caseStudy.slug}`} className="group block">
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-neutral-100">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    {caseStudy.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                </div>

                <h3 className="mb-1 text-2xl font-medium text-neutral-900">
                  {caseStudy.company}
                </h3>
                <p className="pr-4 text-lg font-medium leading-snug text-neutral-500">
                  {caseStudy.title}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-[1400px] px-6 py-32">
        <FadeIn className="mb-16 max-w-4xl" duration={0.8}>
          <h2 className="mb-6 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-neutral-200">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1} duration={0.6}>
              <div className="flex flex-col gap-6 border-b border-neutral-200 py-10 md:flex-row md:gap-12">
                <h3 className="shrink-0 text-2xl font-medium tracking-tight sm:text-3xl md:w-1/3">
                  {service.title}
                </h3>
                <div className="flex-1">
                  <p className="text-xl leading-relaxed text-neutral-500 md:pt-1">
                    {service.description}
                  </p>
                  {service.deliverables ? (
                    <div className="mt-8 border-t border-neutral-100 pt-6">
                      <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-900">
                        Includes
                      </h4>
                      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-base font-medium text-neutral-600"
                          >
                            <span className="mr-3 mt-0.5 text-neutral-300">
                              -
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <HomeProcess />

      <section
        id="contact"
        className="mx-auto w-full max-w-[1400px] px-6 py-32 text-center"
      >
        <FadeIn className="mx-auto max-w-4xl" y={30} duration={0.8}>
          <h2 className="mb-6 text-[3rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[4.5rem]">
            Not sure where AI actually fits into your product?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-neutral-500">
            I help teams identify practical AI opportunities across search,
            onboarding, recommendations, workflows, and discovery before wasting
            time building the wrong thing.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${CALENDLY_URL}?utm_source=home-ai-audit`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-10 py-5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95 sm:w-auto"
            >
              Book an AI audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/#work"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#F5F5F5] px-10 py-5 text-lg font-medium text-neutral-900 transition-all hover:bg-[#E5E5E5] sm:w-auto"
            >
              View relevant work
            </Link>
          </div>
        </FadeIn>
      </section>

      <footer className="mx-auto w-full max-w-[1400px] px-6 pb-10">
        <div className="flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-neutral-900">DevJoe</div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>
              © {new Date().getFullYear()} DevJoe. All rights reserved.
            </p>
            <a
              href="https://www.linkedin.com/in/josephharwood-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
