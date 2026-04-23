import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Which service is right for my company?",
  "What is an AI Opportunity Audit?",
  "Can you ship an AI feature for our product?",
];

export default function AIChatTeaser() {
  return (
    <section id="chat" className="py-20 md:py-28">
      <div className="section-container fade-in text-center">
        <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
          Ask the studio
        </p>
        <h2 className="mt-4 font-serif text-display-serif text-foreground text-balance">
          Prefer to just <span className="italic">ask?</span>
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
          Chat with an assistant trained on DevJoe&apos;s services, scope, and
          pricing. It&apos;ll recommend the right engagement and flag anything
          out of scope.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <Link
              key={prompt}
              href={`/chat?q=${encodeURIComponent(prompt)}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface/60 text-sm text-foreground hover:border-foreground hover:bg-surface transition-colors"
            >
              {prompt}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ))}
        </div>

        <Link
          href="/chat"
          className="mt-10 inline-block text-sm text-primary hover:underline underline-offset-4"
        >
          Or start a blank chat →
        </Link>
      </div>
    </section>
  );
}
