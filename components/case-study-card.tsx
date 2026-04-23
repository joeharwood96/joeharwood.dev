import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({
  caseStudy,
  compact = false,
}: {
  caseStudy: CaseStudy;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <li>
        <Link
          href={`/work/${caseStudy.slug}`}
          className="group flex flex-col md:grid md:grid-cols-[200px_1fr_auto] gap-5 md:gap-8 py-8 md:items-center transition-colors hover:bg-foreground/[0.02]"
        >
          <div className="relative aspect-[16/10] w-full md:w-[200px] overflow-hidden rounded-xl border border-border bg-muted">
            {caseStudy.image ? (
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : null}
          </div>

          <div className="min-w-0">
            <p className="text-xs text-muted-foreground tabular-nums mb-2">
              {caseStudy.company} · {caseStudy.year}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl leading-[1.05] text-foreground">
              {caseStudy.title}
            </h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty">
              {caseStudy.description}
            </p>
          </div>

          <ArrowUpRight
            className="hidden md:block w-5 h-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        </Link>
      </li>
    );
  }

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-surface/70 overflow-hidden transition-all hover:border-foreground/40"
    >
      <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
        {caseStudy.image ? (
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
      </div>

      <div className="flex-1 p-6 md:p-7">
        <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
          {caseStudy.company} · {caseStudy.year}
        </p>
        <h3 className="mt-4 font-serif text-2xl md:text-[1.75rem] leading-[1.05] text-foreground">
          {caseStudy.title}
        </h3>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty">
          {caseStudy.description}
        </p>
      </div>
    </Link>
  );
}
