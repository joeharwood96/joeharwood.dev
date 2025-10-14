"use client";
import Link from "next/link";

export default function Button({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className="border border-black rounded-lg px-4 py-2 w-fit bg-white"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className="border border-black rounded-lg px-4 py-2 w-fit bg-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
