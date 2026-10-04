import type { ReactNode } from "react";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";
import { cn } from "@/lib/utils";

type EventData = Record<string, string | number | boolean | null>;

const variants = {
  solid: "bg-neutral-950 text-white hover:bg-neutral-800",
  outline:
    "border border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-100",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "md",
  eventName,
  eventData,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  eventName?: string;
  eventData?: EventData;
  external?: boolean;
  className?: string;
}) {
  const linkProps = {
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
    className: cn(
      "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
      variants[variant],
      sizes[size],
      className,
    ),
  };

  if (!eventName) return <Link {...linkProps}>{children}</Link>;

  return (
    <TrackedLink {...linkProps} eventName={eventName} eventData={eventData}>
      {children}
    </TrackedLink>
  );
}
