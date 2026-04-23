import { ArrowUpRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-transparent",
  secondary:
    "bg-surface text-foreground border border-border hover:border-foreground",
  ghost: "text-foreground hover:text-primary underline underline-offset-4",
};

export default function CalendlyButton({
  label = "Book a call",
  variant = "primary",
  source,
  className = "",
}: {
  label?: string;
  variant?: Variant;
  source?: string;
  className?: string;
}) {
  const href = source
    ? `${CALENDLY_URL}?utm_source=${encodeURIComponent(source)}`
    : CALENDLY_URL;

  if (variant === "ghost") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-sm ${VARIANT_CLASSES[variant]} ${className}`}
      >
        {label}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}
