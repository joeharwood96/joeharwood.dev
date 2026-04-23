"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/articles", label: "Articles" },
  { href: "/chat", label: "Chat" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-6 rounded-full border border-border pl-5 pr-2 py-2 transition-colors duration-200 ${
            scrolled
              ? "bg-surface/85 backdrop-blur-md"
              : "bg-surface/60 backdrop-blur-sm"
          }`}
        >
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="DevJoe, home"
          >
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={96}
              height={28}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Book a call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-foreground rounded-full hover:bg-foreground/5"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl leading-none text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium"
          >
            Book a call
          </a>
        </div>
      </div>
    </>
  );
}
