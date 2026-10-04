import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  SUBSTACK_URL,
  serviceLinks,
} from "@/lib/nav";

type FooterLink = { href: string; label: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: serviceLinks.map(({ href, label }) => ({ href, label })),
  },
  {
    title: "Work",
    links: caseStudies.map((study) => ({
      href: `/work/${study.slug}`,
      label: study.company,
    })),
  },
  {
    title: "Writing",
    links: [
      { href: "/articles", label: "Articles" },
      { href: SUBSTACK_URL, label: "Substack", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
      { href: LINKEDIN_URL, label: "LinkedIn", external: true },
      { href: GITHUB_URL, label: "GitHub", external: true },
      { href: "/cv", label: "CV" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1200px] py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-medium text-neutral-950">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={112}
              height={32}
              className="h-5 w-auto object-contain"
            />
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              Available for work · Amsterdam
            </p>
          </div>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} DevJoe
          </p>
        </div>
      </div>
    </footer>
  );
}
