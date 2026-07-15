"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { m } from "motion/react";
import { CALENDLY_URL } from "@/lib/constants";
import TrackedLink from "@/components/tracked-link";

const ease = [0.16, 1, 0.3, 1] as const;

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = ["work", "services", "process", "about", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (pathname !== "/") return false;
    return href === `/#${activeSection}`;
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 sm:py-10">
        <Link
          href="/"
          className="transition-opacity hover:opacity-80"
          aria-label="DevJoe, home"
        >
          <Image
            src="/dev-joe.png"
            alt="DevJoe Logo"
            width={112}
            height={32}
            className="h-6 w-auto object-contain sm:h-8"
            priority
          />
        </Link>

        <TrackedLink
          href={`${CALENDLY_URL}?utm_source=top-nav`}
          target="_blank"
          rel="noopener noreferrer"
          eventName="Fit Call Clicked"
          eventData={{ location: "top_nav" }}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95"
        >
          Book a fit call
        </TrackedLink>
      </header>

      <m.div
        initial={{ y: 50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ delay: 0.5, duration: 0.8, ease }}
        className="fixed bottom-8 left-1/2 z-50 pointer-events-auto"
      >
        <nav
          className="flex items-center gap-0.5 rounded-full border border-white/20 bg-[#F5F5F5]/90 px-1.5 py-1.5 shadow-[0_4px_20px_rgb(0,0,0,0.08)] backdrop-blur-xl sm:gap-2 sm:px-2 sm:py-2"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
                  active
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:bg-white/50 hover:text-neutral-900"
                }`}
              >
                {active ? (
                  <m.span
                    layoutId="nav-dot"
                    className="h-1.5 w-1.5 rounded-full bg-neutral-900"
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </m.div>
    </>
  );
}
