import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import MotionProvider from "@/components/motion/motion-provider";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevJoe · AI product engineering for startups and agencies",
  description:
    "Fixed-price AI prototypes and feature launches, built by a senior AI product engineer who shipped Booking.com's first AI Trip Planner.",
  keywords: [
    "AI product engineer",
    "AI prototype",
    "LLM feature development",
    "AI engineer Amsterdam",
    "Next.js developer Amsterdam",
    "freelance AI engineer Europe",
    "Joseph Harwood",
    "DevJoe",
  ],
  authors: [{ name: "Joseph Harwood", url: "https://www.devjoe.io" }],
  creator: "Joseph Harwood",
  metadataBase: new URL("https://www.devjoe.io"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.devjoe.io",
    title: "DevJoe · AI product engineering for startups and agencies",
    description:
      "Fixed-price AI prototypes and feature launches, built by a senior AI product engineer who shipped Booking.com's first AI Trip Planner.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevJoe · AI product engineering for startups and agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevJoe · AI product engineering for startups and agencies",
    description:
      "Fixed-price AI prototypes and feature launches, built by a senior AI product engineer who shipped Booking.com's first AI Trip Planner.",
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <MotionProvider>
          <Navbar />
          {children}
          <SiteFooter />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
