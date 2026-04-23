import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const { accent } = service;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl p-7 md:p-8 transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: accent.bg,
        color: accent.fg,
        boxShadow: `inset 0 0 0 1px ${accent.border}`,
      }}
    >
      <div>
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center text-xs tracking-[0.22em] uppercase"
            style={{ color: accent.fgMuted }}
          >
            {service.label}
          </span>
          <span
            className="text-xs tabular-nums"
            style={{ color: accent.fgMuted }}
          >
            {service.durationLabel}
          </span>
        </div>

        <h3
          className="mt-10 font-serif text-[2rem] md:text-[2.5rem] leading-[1.02]"
          style={{ color: accent.fg }}
        >
          {service.name}
        </h3>

        <p
          className="mt-5 text-base leading-relaxed text-pretty"
          style={{ color: accent.fgMuted }}
        >
          {service.tagline}
        </p>
      </div>

      <div
        className="mt-12 flex items-end justify-between pt-6"
        style={{ borderTop: `1px solid ${accent.border}` }}
      >
        <span
          className="font-serif text-3xl md:text-[2rem]"
          style={{ color: accent.fg }}
        >
          {service.priceLabel}
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-sm transition-transform group-hover:translate-x-0.5"
          style={{ color: accent.fg }}
        >
          Learn more
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
