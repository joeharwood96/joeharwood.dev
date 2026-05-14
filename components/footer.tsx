"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label="DevJoe, home"
            >
              <Image
                src="/dev-joe.png"
                alt="DevJoe"
                width={128}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-primary-foreground/70">
              AI search and recommendation systems for travel, marketplace, and
              local-commerce startups.
            </p>
            <a
              href={`${CALENDLY_URL}?utm_source=footer`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.98]"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:contents">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/40">
                Explore
              </p>
              <Link
                href="/#services"
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Services
              </Link>
              <Link
                href="/#work"
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Work
              </Link>
              <Link
                href="/#process"
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Process
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/40">
                Studio
              </p>
              <Link
                href="/work"
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                All work
              </Link>
              <Link
                href="/articles"
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Articles
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/50">
            © {year} DevJoe · Joseph Harwood, Amsterdam
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              aria-label={copied ? "Email copied" : "Copy email to clipboard"}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied
                </>
              ) : (
                "Email"
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/josephharwood-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joeharwood96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
