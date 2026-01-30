import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Column 1-2: Brand and bio */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Image
              src="/dev-joe.png"
              alt="DevJoe"
              width={200}
              height={42}
              className="invert"
              unoptimized
            />
            <p className="text-white/60 max-w-md body-text">
              Freelance Next.js developer based in Amsterdam. Specialising in
              headless CMS, TypeScript, and full-stack web applications.
            </p>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="mono-text text-white/40 mb-2">Socials</h3>
            <Link
              href="https://github.com/joeharwood96"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors duration-500 link-underline w-fit"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/josephharwood-3/"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors duration-500 link-underline w-fit"
            >
              LinkedIn
            </Link>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="mono-text text-white/40 mb-2">Contact</h3>
            <a
              href="mailto:joeharwooddev@gmail.com"
              className="text-white/80 hover:text-white transition-colors duration-500 link-underline w-fit"
            >
              joeharwooddev@gmail.com
            </a>
            <Link
              href="/Joseph_Harwood_CV.pdf"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors duration-500 link-underline w-fit"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} DevJoe. All rights reserved.
          </p>
          <p className="text-sm text-white/40">Amsterdam, Netherlands</p>
        </div>
      </div>
    </footer>
  );
}
