import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joe Harwood — Software Engineer",
  description:
    "Software engineer based in Amsterdam. Building modern web applications with React, Next.js, TypeScript, and Node.js. Previously at Booking.com, IBM, and Appical.",
  keywords: [
    "software engineer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "full-stack developer",
    "Node.js developer",
    "Amsterdam",
    "Joe Harwood",
  ],
  authors: [{ name: "Joe Harwood", url: "https://joeharwood.dev" }],
  creator: "Joe Harwood",
  metadataBase: new URL("https://joeharwood.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joeharwood.dev",
    title: "Joe Harwood — Software Engineer",
    description:
      "Software engineer based in Amsterdam. Building modern web applications with React, Next.js, TypeScript, and Node.js.",
    siteName: "Joe Harwood",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joe Harwood — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Harwood — Software Engineer",
    description:
      "Software engineer based in Amsterdam. Building modern web applications with React, Next.js, TypeScript, and Node.js.",
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${cormorant.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
