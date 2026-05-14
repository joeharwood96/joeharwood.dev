import Image from "next/image";
import Link from "next/link";
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
          className="group grid gap-5 border-b border-border py-8 transition-opacity hover:opacity-80 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-8"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-surface">
            {caseStudy.image ? (
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : null}
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {caseStudy.company} · {caseStudy.year}
            </p>
            <h3 className="text-2xl font-medium leading-tight text-foreground md:text-3xl">
              {caseStudy.title}
            </h3>
            <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground">
              {caseStudy.description}
            </p>
          </div>

          <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:block" />
        </Link>
      </li>
    );
  }

  return (
    <Link href={`/work/${caseStudy.slug}`} className="group block">
      <article>
        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface">
          {caseStudy.image ? (
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : null}
        </div>

        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {caseStudy.company} · {caseStudy.year}
            </p>
            <h3 className="text-2xl font-medium leading-tight text-foreground">
              {caseStudy.title}
            </h3>
            <p className="mt-3 text-lg font-medium leading-snug text-muted-foreground">
              {caseStudy.description}
            </p>
          </div>
          <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
