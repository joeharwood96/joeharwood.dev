import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex h-full flex-col p-6 transition-colors hover:bg-white sm:p-8"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-neutral-200 bg-[#F5F5F5]">
        {caseStudy.image ? (
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : null}
      </div>
      <p className="mono-label mt-6">
        {caseStudy.company} · {caseStudy.year}
      </p>
      <h2 className="mt-2 flex items-start justify-between gap-4 text-2xl font-medium tracking-tight">
        {caseStudy.title}
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950" />
      </h2>
      <p className="mt-2 text-base leading-relaxed text-neutral-500">
        {caseStudy.description}
      </p>
    </Link>
  );
}
