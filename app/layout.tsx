import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DevJoe - Freelance Next.js Developer | Amsterdam",
  description:
    "Freelance Next.js developer based in Amsterdam. Specialising in Next.js, headless CMS, TypeScript, and Node.js. Previously at Booking.com, IBM, and Appical.",
  keywords: [
    "Next.js developer",
    "freelance Next.js developer",
    "headless CMS developer",
    "TypeScript developer",
    "Next.js developer Amsterdam",
    "freelance developer Amsterdam",
    "freelance developer Netherlands",
    "React developer",
    "full-stack developer",
    "Node.js developer",
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
    title: "DevJoe - Freelance Next.js Developer | Amsterdam",
    description:
      "Freelance Next.js developer based in Amsterdam. Headless CMS, TypeScript, and full-stack web applications.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevJoe - Freelance Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevJoe - Freelance Next.js Developer | Amsterdam",
    description:
      "Freelance Next.js developer based in Amsterdam. Headless CMS, TypeScript, and full-stack web applications.",
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
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
