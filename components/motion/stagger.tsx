"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type StaggerProps = {
  children: ReactNode;
  className?: string;
  // Delay between child animations, in seconds.
  delayChildren?: number;
  staggerChildren?: number;
  // Which HTML element the stagger parent renders as.
  as?: "div" | "ul" | "ol" | "section";
};

export function Stagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.06,
  as = "div",
}: StaggerProps) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "span" | "p";
};

export function StaggerItem({
  children,
  className,
  y = 16,
  as = "div",
}: StaggerItemProps) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease },
        },
      }}
    >
      {children}
    </Tag>
  );
}
