"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const companies = [
  {
    name: "Booking.com",
    logo: "/logos/Booking.com/Booking.com_Logo_1.png",
    id: 1,
  },
  { name: "IBM", logo: "/logos/ibm-logo-18910.png", id: 2 },
  { name: "Appical", logo: "/logos/Appical/Appical_idtsDOMAEO_0.png", id: 3 },
  {
    name: "Post Office",
    logo: "/logos/Post Office/Post Office_idXyh21KYa_0.png",
    id: 4,
  },
];

export default function LogoCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  // Triple the companies for extra smooth looping
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-32 items-center"
        animate={{
          x: [0, -100 / 3 + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            className="flex items-center justify-center min-w-[140px] sm:min-w-[160px] md:min-w-[200px] group cursor-default"
          >
            <div className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-16 md:w-48 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:opacity-100">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
