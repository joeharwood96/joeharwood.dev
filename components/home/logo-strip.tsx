import Image from "next/image";
import Section from "@/components/site/section";

const logos = [
  { name: "Booking.com", src: "/logos/Booking.com/Booking.com_Logo_0.svg", width: 182, height: 30, className: "h-5" },
  { name: "IBM", src: "/logos/ibm-logo-18910.png", width: 800, height: 600, className: "h-16" },
  { name: "Appical", src: "/logos/Appical/Appical_idtsDOMAEO_1.svg", width: 160, height: 64, className: "h-8" },
  { name: "Weeknights", src: "/logos/weeknights-orange.png", width: 166, height: 30, className: "h-5" },
];

export default function LogoStrip() {
  return (
    <Section innerClassName="border-b">
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {logos.map((logo, index) => (
          <li
            key={logo.name}
            className={`flex h-24 items-center justify-center border-neutral-200 sm:h-28 ${
              index % 2 === 0 ? "border-r" : "md:border-r"
            } ${index < 2 ? "max-md:border-b" : ""} md:last:border-r-0`}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className={`w-auto object-contain ${logo.className}`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
