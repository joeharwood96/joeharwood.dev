import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-24">
      <div className="lg:w-4/5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/dev-joe.png"
                alt="DevJoe"
                width={120}
                height={25}
                unoptimized
              />
            </Link>
            <p className="text-sm text-[#6B7280]">
              Full-Stack Software Engineer
            </p>
            <a
              href="mailto:joeharwooddev@gmail.com"
              className="text-sm text-[#6B7280] hover:text-black transition-colors w-fit"
            >
              joeharwooddev@gmail.com
            </a>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold mb-1">Navigate</p>
              <Link
                href="/#experience"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/#projects"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#tech-stack"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                Tech Stack
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold mb-1">Connect</p>
              <Link
                href="https://github.com/joeharwood96"
                target="_blank"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/josephharwood-3/"
                target="_blank"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5">
          <p className="text-xs text-[#6B7280]">
            &copy; 2025 Joe Harwood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
