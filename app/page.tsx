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
    title: "AI Discovery Sprint",
    description:
      "A focused 1-2 week sprint to design and build an AI-powered search, recommendation, or conversational discovery feature.",
  },
  {
    title: "Marketplace Search",
    description:
      "Improve how users find the right listings using better ranking, personalization, and AI-assisted discovery experiences.",
  },
  {
    title: "AI Feature Build",
    description:
      "Production-ready AI features built quickly using modern web technologies, scalable patterns, and AI tooling.",
  },
];

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

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
        <div className="max-w-5xl">
          <FadeIn y={20} duration={0.8}>
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
              AI Search & Recommendation Systems for Travel and Marketplace
              Startups{" "}
              <span className="text-neutral-400">
                I help startups improve discovery, engagement, and conversion
                with AI-powered search, recommendations, and conversational
                product experiences.
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
                <p className="text-xl leading-relaxed text-neutral-500 md:pt-1">
                  {service.description}
                </p>
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
          <h2 className="mb-12 text-[3rem] font-medium leading-[1] tracking-tight text-neutral-900 sm:text-[5rem]">
            Let&apos;s build
            <br />
            something great.
          </h2>
          <a
            href={`${CALENDLY_URL}?utm_source=home-cta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-10 py-5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95"
          >
            Book a discovery call
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
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
