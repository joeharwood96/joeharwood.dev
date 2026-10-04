import { ArrowRight } from "lucide-react";
import Section from "@/components/site/section";
import TrackedLink from "@/components/tracked-link";
import { services } from "@/data/services";

export default function Offers() {
  return (
    <Section id="offers" innerClassName="border-b">
      <div className="flex flex-col gap-4 px-6 pt-16 sm:px-10 sm:pt-24 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-balance text-4xl font-medium tracking-tight sm:text-5xl">
          Three ways to work together
        </h2>
        <p className="max-w-sm text-base text-neutral-500">
          Fixed prices, written scope, and you own the code. Agencies can book
          any of these white-label.
        </p>
      </div>

      <ul className="mt-12 grid border-t border-neutral-200 md:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.slug}
            className="border-neutral-200 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r"
          >
            <TrackedLink
              href={`/services/${service.slug}`}
              eventName="Service Viewed"
              eventData={{ service: service.slug, location: "homepage" }}
              className="group flex h-full flex-col p-6 transition-colors hover:bg-white sm:p-10"
            >
              <p className="mono-label">{service.durationLabel}</p>
              <h3 className="mt-6 text-2xl font-medium tracking-tight">
                {service.name}
              </h3>
              <p className="mt-1 text-lg tabular-nums text-neutral-950">
                {service.priceLabel}
              </p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-neutral-500">
                {service.tagline}
              </p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-950">
                {service.linkLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </TrackedLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
