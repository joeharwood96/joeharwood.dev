"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Column 1: Logo and Info */}
          <div>
            <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
              <Image
                src="/dev-joe.png"
                alt="DevJoe"
                width={100}
                height={32}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Freelance Next.js Developer
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Amsterdam, Netherlands
            </p>

            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              <a
                href="https://github.com/joeharwood96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/dev-joe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:joeharwooddev@gmail.com"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "/#about", label: "About" },
                { href: "/#services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/#work", label: "Work" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Next.js Development",
                "Headless CMS",
                "Full-Stack Apps",
                "API Development",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:joeharwooddev@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  joeharwooddev@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/Joseph_Harwood_CV.pdf"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <FileText className="w-3 h-3" />
                  Download CV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevJoe. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            52.3676&deg; N, 4.9041&deg; E
          </p>
        </div>
      </div>
    </footer>
  );
}
