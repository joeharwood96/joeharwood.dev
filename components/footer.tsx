"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

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
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12">
        <div>
          <Link
            href="/"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
            aria-label="DevJoe, home"
          >
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={112}
              height={32}
              className="h-7 w-auto"
            />
          </Link>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
            A small engineering studio in Amsterdam. Product, shipped.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-4 md:contents">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Services
            </p>
            <Link
              href="/services/audit"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              AI Opportunity Audit
            </Link>
            <Link
              href="/services/sprint"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              AI Feature Sprint
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Studio
            </p>
            <Link
              href="/work"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/articles"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/chat"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              Chat
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} DevJoe · Run by Joe Harwood, Amsterdam
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
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
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joeharwood96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
