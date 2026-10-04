"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { track } from "@vercel/analytics";
import Section from "@/components/site/section";
import ButtonLink from "@/components/site/button-link";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export default function ClosingCta() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      track("Email Copied", { location: "homepage_footer" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <Section id="contact" innerClassName="px-6 py-20 text-center sm:px-10 sm:py-28">
      <h2 className="mx-auto max-w-2xl text-balance text-4xl font-medium tracking-tight sm:text-5xl">
        Have an AI feature on the roadmap?
      </h2>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink
          href={`${CALENDLY_URL}?utm_source=homepage-footer`}
          external
          eventName="Fit Call Clicked"
          eventData={{ location: "homepage_footer" }}
        >
          Book a call
          <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex h-10 items-center gap-3 rounded-full border border-neutral-200 bg-white pl-4 pr-3 font-mono text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
          aria-label={`Copy ${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
          {copied ? (
            <Check className="h-4 w-4 text-emerald-600" />
          ) : (
            <Copy className="h-4 w-4 text-neutral-400" />
          )}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </p>
    </Section>
  );
}
