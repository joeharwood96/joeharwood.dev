import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export type Example = {
  title: string;
  type: string;
  line: string;
  number: string;
  tags?: string[];
  href: string;
  image?: string;
};

export default function ExampleCard({ example }: { example: Example }) {
  return (
    <a
      href={example.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-6 border-t border-primary/20 py-8 md:grid-cols-[0.78fr_1.22fr] md:gap-10 md:py-10 last:border-b"
    >
      <div className="flex flex-col justify-between gap-10">
        <div>
          <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>{example.number}</span>
            <span>{example.type}</span>
          </div>

          <h3 className="mt-8 font-serif text-4xl leading-[0.95] text-foreground md:text-5xl">
            {example.title}
          </h3>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {example.line}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {(example.tags ?? []).map((tag) => (
              <span key={tag}>
                <span className="text-primary">#</span>
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            View live site
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-primary/10 md:aspect-[16/8.8]">
        {example.image ? (
          <Image
            src={example.image}
            alt={example.title}
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            {example.title}
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </a>
  );
}
