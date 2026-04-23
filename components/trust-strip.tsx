import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
  // Per-logo height class so each logo can match the others optically,
  // even though their SVGs/PNGs have different intrinsic aspect ratios.
  heightClass: string;
};

const LOGOS: Logo[] = [
  {
    name: "Booking.com",
    src: "/logos/Booking.com/Booking.com_Logo_0.svg",
    width: 140,
    height: 32,
    heightClass: "h-6 md:h-7",
  },
  {
    name: "IBM",
    src: "/logos/ibm-logo-18910.png",
    width: 72,
    height: 32,
    heightClass: "h-10 md:h-12",
  },
  {
    name: "Appical",
    src: "/logos/Appical/Appical_idtsDOMAEO_1.svg",
    width: 110,
    height: 32,
    heightClass: "h-9 md:h-11",
  },
  {
    name: "Weeknights",
    src: "/logos/weeknights-orange.png",
    width: 130,
    height: 32,
    heightClass: "h-6 md:h-7",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <p className="text-center text-xs tracking-[0.22em] uppercase text-muted-foreground mb-8">
          Experience from
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {LOGOS.map((logo) => (
            <li key={logo.name} className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className={`logo-muted ${logo.heightClass} w-auto`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
