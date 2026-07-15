"use client";

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

type EventData = Record<string, string | number | boolean | null>;

export default function TrackedLink({
  href,
  eventName,
  eventData,
  children,
  className,
  target,
  rel,
  style,
}: {
  href: string;
  eventName: string;
  eventData?: EventData;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onClick={() => track(eventName, eventData)}
    >
      {children}
    </Link>
  );
}
