"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import { primaryLinks, serviceLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";
import TrackedLink from "@/components/tracked-link";

const navLink =
  "rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 hover:text-neutral-950";

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
  const servicesActive =
    pathname.startsWith("/services") || pathname === "/agencies";

  // Close menus on navigation.
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Desktop dropdown: close on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  // Mobile sheet: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const sheet = sheetRef.current;
    const menuButton = menuButtonRef.current;
    const focusables = () =>
      Array.from(
        sheet?.querySelectorAll<HTMLElement>("a[href], button") ?? [],
      );
    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      menuButton?.focus();
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="DevJoe, home"
          >
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={112}
              height={32}
              className="h-6 w-auto object-contain"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                // Hover already opened it for mouse users, so a mouse click
                // keeps it open; keyboard activation (detail 0) toggles.
                onClick={(e) =>
                  setServicesOpen((open) => (e.detail === 0 ? !open : true))
                }
                className={cn(
                  navLink,
                  "inline-flex items-center gap-1",
                  servicesActive ? "text-neutral-950" : "text-neutral-600",
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    servicesOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>

              {servicesOpen ? (
                <div id="services-menu" className="absolute left-0 top-full pt-2">
                  <ul className="w-80 rounded-xl border border-neutral-200 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-none"
                        >
                          <span className="block text-sm font-medium text-neutral-950">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-sm text-neutral-500">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  navLink,
                  isActive(item.href) ? "text-neutral-950" : "text-neutral-600",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/cv"
            className="inline-flex h-8 items-center rounded-full border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-100"
          >
            CV
          </Link>
          <TrackedLink
            href={`${CALENDLY_URL}?utm_source=top-nav`}
            target="_blank"
            rel="noopener noreferrer"
            eventName="Fit Call Clicked"
            eventData={{ location: "top_nav" }}
            className="inline-flex h-8 items-center rounded-full bg-neutral-950 px-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Book a call
          </TrackedLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-white px-4 pb-10 pt-4 md:hidden"
        >
          <p className="mono-label px-2">Services</p>
          <ul className="mt-2">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-lg px-2 py-3">
                  <span className="block text-base font-medium text-neutral-950">
                    {item.label}
                  </span>
                  <span className="block text-sm text-neutral-500">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 border-t border-neutral-200 pt-4">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-neutral-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3">
            <TrackedLink
              href={`${CALENDLY_URL}?utm_source=mobile-nav`}
              target="_blank"
              rel="noopener noreferrer"
              eventName="Fit Call Clicked"
              eventData={{ location: "mobile_nav" }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 text-base font-medium text-white"
            >
              Book a call
            </TrackedLink>
            <Link
              href="/cv"
              className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 text-base font-medium text-neutral-950"
            >
              Download CV
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
