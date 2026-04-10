import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "What projects has Joe built?",
  "What is Joe good at?",
  "Why should I hire Joe?",
];

export default function AIChatTeaser() {
  return (
    <section id="chat" className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 fade-in">
        <p className="text-sm text-muted-foreground">Ask the site</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.05]">
          Prefer to just ask?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Chat with an AI version of me, trained on my projects and background.
          Try one of these:
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <Link
              key={prompt}
              href={`/chat?q=${encodeURIComponent(prompt)}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm text-foreground hover:border-foreground hover:bg-foreground/[0.03] transition-colors"
            >
              {prompt}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ))}
        </div>

        <Link
          href="/chat"
          className="mt-8 inline-block text-sm text-primary hover:underline underline-offset-4"
        >
          Or start a blank chat →
        </Link>
      </div>
    </section>
  );
}
