import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  label: string;
  href: string;
  inverse?: boolean;
  source?: string;
  className?: string;
};

const BASE =
  "group inline-flex items-center gap-2 px-6 py-3 text-[13px] font-mono uppercase tracking-tight transition-all duration-200 ease-out border";

const VARIANT =
  "bg-primary text-primary-foreground hover:bg-transparent hover:text-primary border-primary";

export default function PrimaryCTA({
  label,
  href,
  source,
  className = "",
}: Props) {
  const isExternal = /^https?:\/\//i.test(href);
  const finalHref =
    isExternal && source
      ? `${href}${href.includes("?") ? "&" : "?"}utm_source=${encodeURIComponent(source)}`
      : href;
  const classes = `${BASE} ${VARIANT} ${className}`;
  const icon = (
    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  );

  if (isExternal) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={finalHref} className={classes}>
      {label}
      {icon}
    </Link>
  );
}
