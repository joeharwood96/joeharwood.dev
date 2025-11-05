"use client";
import { motion } from "framer-motion";

export default function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgba(0,0,0,0.03)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-50"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-gray-100 to-transparent rounded-full blur-3xl opacity-50"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
