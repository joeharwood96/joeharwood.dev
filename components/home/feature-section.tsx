import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import FeatureList from "@/components/site/feature-list";
import { cn } from "@/lib/utils";

export type Feature = {
  heading: string;
  lead: string;
  stat: string;
  features: string[];
  image: string;
  imageAlt: string;
  href: string;
};

// One alternating block, modelled on vercel.com: big heading, a screenshot,
// and a short stat with a mono feature list beside it.
export default function FeatureSection({
  feature,
  flip = false,
}: {
  feature: Feature;
  flip?: boolean;
}) {
  return (
    <Section innerClassName="border-b px-6 py-16 sm:px-10 sm:py-24">
      <FadeIn y={12}>
        <h2
          className={cn(
            "max-w-2xl text-balance text-4xl font-medium tracking-tight sm:text-5xl",
            flip && "lg:ml-auto lg:text-right",
          )}
        >
          {feature.heading}
        </h2>
      </FadeIn>

      <div
        className={cn(
          "mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-14",
          flip && "lg:grid-cols-[1fr_1.6fr]",
        )}
      >
        <FadeIn y={12} delay={0.05} className={cn(flip && "lg:order-2")}>
          <Link
            href={feature.href}
            className="group block overflow-hidden border border-neutral-200 bg-[#F5F5F5]"
          >
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={2400}
              height={1800}
              sizes="(min-width: 1024px) 700px, 100vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </FadeIn>

        <FadeIn y={12} delay={0.1} className={cn(flip && "lg:order-1")}>
          <p className="text-2xl leading-snug tracking-tight text-neutral-500 sm:text-3xl">
            <span className="text-neutral-950">{feature.lead}</span>{" "}
            {feature.stat}
          </p>
          <FeatureList items={feature.features} className="mt-8" />
          <Link
            href={feature.href}
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-950 hover:underline"
          >
            Read the case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </Section>
  );
}
