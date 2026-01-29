"use client";

import Image from "next/image";

const companies = [
  { name: "Booking.com", logo: "/logos/Booking.com/Booking.com_Logo_0.svg" },
  { name: "IBM", logo: "/logos/ibm-logo-18910.png" },
  { name: "Appical", logo: "/logos/Appical/Appical_idtsDOMAEO_1.svg" },
  { name: "Post Office", logo: "/logos/Post Office/Post Office_idXyh21KYa_1.svg" },
];

export default function ProjectMarquee() {
  // Triple the list for seamless loop
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 marquee-container">
      <p className="mono-text text-[#525252] text-center mb-12">Companies I&apos;ve Worked With</p>
      <div className="marquee-track flex items-center gap-16 md:gap-24">
        {allCompanies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="relative h-12 md:h-16 w-[160px] md:w-[200px] flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
              <Image
                src={company.logo}
                alt={company.name}
                width={200}
                height={64}
                className="object-contain max-h-full w-auto"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
