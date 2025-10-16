"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-fit"
      >
        <Link
          href={href}
          className="border border-black rounded-lg px-4 py-2 w-fit bg-white block hover:bg-black hover:text-white transition-colors"
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className="border border-black rounded-lg px-4 py-2 w-fit bg-white hover:bg-black hover:text-white transition-colors"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
