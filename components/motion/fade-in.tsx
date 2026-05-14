"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  // If true, animate every time the element enters the viewport.
  // Default false (once): run once on first scroll-into-view.
  repeat?: boolean;
  as?: "div" | "section" | "li" | "p" | "span";
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  duration = 0.55,
  repeat = false,
  as = "div",
}: Props) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, amount: 0.2 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Tag>
  );
}
