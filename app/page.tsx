import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeProcess from "@/components/home-process";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import FadeIn from "@/components/motion/fade-in";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { CALENDLY_URL } from "@/lib/constants";
import TrackedLink from "@/components/tracked-link";

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

const operationalProblems = [
  "Bookings copied between forms, email, and spreadsheets",
  "Customers or members relying on staff for simple updates",
  "Confirmations, reminders, and reports assembled by hand",
  "Information duplicated across tools that do not communicate",
  "Important workflows that only one employee fully understands",
  "Off-the-shelf software forcing the business into the wrong process",
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
          "Custom booking systems, customer portals, and internal tools for businesses that have outgrown spreadsheets.",
        founder: {
          "@type": "Person",
          name: "Joseph Harwood",
          url: "https://joeharwood.dev",
          jobTitle: "Full-stack Developer",
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
        jobTitle: "Full-stack Developer",
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
              Software for businesses that have outgrown spreadsheets.
              <span className="mt-6 block text-[0.78em] leading-[1.08] text-neutral-400">
                Booking systems, customer portals and internal tools, built
                around how your business actually works.
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
        <FadeIn duration={0.6}>
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Experience includes
          </p>
        </FadeIn>
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

      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:py-32">
        <FadeIn className="max-w-4xl" duration={0.8}>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
            When the current process stops scaling
          </p>
          <h2 className="mt-5 text-balance text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Your business should not depend on copying information between
            forms, inboxes, and spreadsheets.
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-neutral-500">
            I turn fragile, repetitive workflows into straightforward software
            built around the way your team and customers actually work.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {operationalProblems.map((problem, index) => (
            <FadeIn key={problem} delay={index * 0.05} duration={0.6}>
              <div className="h-full rounded-3xl bg-[#F5F5F5] p-7 text-lg font-medium leading-relaxed text-neutral-700">
                {problem}
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10" duration={0.6}>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            This is especially useful for training providers, membership
            organisations, event and community businesses, and other teams
            managing bookings or recurring customer administration.
          </p>
        </FadeIn>
      </section>

      <section id="work" className="mx-auto w-full max-w-[1400px] px-6 py-20">
        <FadeIn className="mb-16 max-w-4xl" duration={0.8}>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Relevant experience
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-neutral-500">
            Booking, onboarding, discovery, and internal workflows built for
            established companies and my own products.
          </p>
        </FadeIn>
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          {featuredCaseStudies.map((caseStudy, index) => (
            <FadeIn
              key={caseStudy.slug}
              delay={index * 0.1}
              y={40}
              duration={0.8}
            >
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
                <p className="mt-3 max-w-2xl pr-4 text-base font-medium leading-relaxed text-neutral-500">
                  {caseStudy.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-[1400px] px-6 py-32"
      >
        <FadeIn className="mb-16 max-w-4xl" duration={0.8}>
          <h2 className="mb-6 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-neutral-200">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.1} duration={0.6}>
              <TrackedLink
                href={`/services/${service.slug}`}
                eventName="Service Viewed"
                eventData={{ service: service.slug, location: "homepage" }}
                className="group flex flex-col gap-6 border-b border-neutral-200 py-10 md:flex-row md:gap-12"
              >
                <div className="shrink-0 md:w-1/3">
                  <h3 className="flex items-start gap-2 text-2xl font-medium tracking-tight sm:text-3xl">
                    {service.name}
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900" />
                  </h3>
                  <p className="mt-3 text-base font-medium tabular-nums text-neutral-400">
                    {service.priceLabel}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-xl leading-relaxed text-neutral-500 md:pt-1">
                    {service.tagline}
                  </p>
                  {service.eligibilityNote ? (
                    <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
                      {service.eligibilityNote}
                    </p>
                  ) : null}
                  <div className="mt-8 border-t border-neutral-100 pt-6">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-900">
                      Includes
                    </h4>
                    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.deliverables.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-base font-medium text-neutral-600"
                        >
                          <span className="mr-3 mt-0.5 text-neutral-300">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors group-hover:text-neutral-900">
                    {service.linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </TrackedLink>
            </FadeIn>
          ))}
        </div>
      </section>

      <HomeProcess />

      <section id="about" className="mx-auto w-full max-w-[1400px] px-6 py-32">
        <FadeIn className="mb-16 max-w-4xl" duration={0.8}>
          <h2 className="mb-6 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            About
          </h2>
        </FadeIn>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn y={30} duration={0.8}>
            <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[2rem] bg-neutral-100">
              <Image
                src="/joe.png"
                alt="Joe Harwood in Amsterdam"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn y={30} delay={0.1} duration={0.8}>
            <div className="space-y-6 text-xl leading-relaxed text-neutral-500 md:pt-2">
              <p>I&apos;m Joe, a full-stack developer based in Amsterdam.</p>
              <p>
                I spent the last three and a half years at Booking.com, where I
                launched their first AI Trip Planner and built features used by
                millions of travellers. Before that I worked at Appical and
                IBM.
              </p>
              <p>
                On the side I build my own products. Weeknights, a marketplace
                for social and hobby clubs in Amsterdam that grew to 3,000
                monthly users, and RailGPT, an AI travel planner for Dutch
                trains.
              </p>
              <p>
                Now I help established businesses replace manual processes with
                software that fits how they actually operate—from the first
                workflow map through to a working system.
              </p>
            </div>
            <a
              href="/Joseph_Harwood_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#F5F5F5] px-10 py-5 text-lg font-medium text-neutral-900 transition-all hover:bg-[#E5E5E5]"
            >
              View my CV
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </FadeIn>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[1400px] px-6 py-32 text-center"
      >
        <FadeIn className="mx-auto max-w-4xl" y={30} duration={0.8}>
          <h2 className="mb-6 text-[3rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[4.5rem]">
            What is your team still doing by hand?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-neutral-500">
            Book a 30-minute fit call. We&apos;ll look at the workflow, the
            urgency, and whether a review or build is the right next step.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedLink
              href={`${CALENDLY_URL}?utm_source=home-cta`}
              target="_blank"
              rel="noopener noreferrer"
              eventName="Fit Call Clicked"
              eventData={{ location: "homepage_footer" }}
              className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-10 py-5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95 sm:w-auto"
            >
              Book a fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
            <Link
              href="/#work"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#F5F5F5] px-10 py-5 text-lg font-medium text-neutral-900 transition-all hover:bg-[#E5E5E5] sm:w-auto"
            >
              View work
            </Link>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
    </main>
  );
}
