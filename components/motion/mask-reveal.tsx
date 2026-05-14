"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

// Masked line reveal. Renders the child inside an overflow-hidden clip,
// then slides the child up from below so the text paints inside the clip
// (safe for LCP because the actual element is never opacity 0 before paint).
export default function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: Props) {
  return (
    <span
      className={`inline-block overflow-hidden align-bottom ${className ?? ""}`}
    >
      <m.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          delay,
          duration,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </m.span>
    </span>
  );
}
