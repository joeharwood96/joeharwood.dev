import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Page-width container with the thin side rules used across the site.
export default function Section({
  children,
  className,
  innerClassName,
  id,
  bordered = true,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  bordered?: boolean;
}) {
  return (
    <section id={id} className={cn("w-full px-4 sm:px-6", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px]",
          bordered && "border-x border-neutral-200",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
