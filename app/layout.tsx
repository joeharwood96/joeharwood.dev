import type { Metadata } from "next";
import localFont from "next/font/local";
import { Pixelify_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DevJoe - Freelance Software Engineer | Amsterdam",
  description:
    "Freelance Software Engineer based in Amsterdam, delivering full-stack solutions for startups and SMEs. Previously at Booking.com, Appical, and IBM. Expert in React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "freelance software engineer",
    "full-stack developer",
    "Amsterdam developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web development Amsterdam",
    "freelance developer Netherlands",
    "Joe Harwood",
    "DevJoe",
  ],
  authors: [{ name: "Joe Harwood", url: "https://joeharwood.dev" }],
  creator: "Joe Harwood",
  metadataBase: new URL("https://joeharwood.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joeharwood.dev",
    title: "DevJoe - Freelance Software Engineer | Amsterdam",
    description:
      "Freelance Software Engineer based in Amsterdam, delivering full-stack solutions for startups and SMEs. Previously at Booking.com, Appical, and IBM.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevJoe - Freelance Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevJoe - Freelance Software Engineer | Amsterdam",
    description:
      "Freelance Software Engineer based in Amsterdam. Full-stack web development services for startups and SMEs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
