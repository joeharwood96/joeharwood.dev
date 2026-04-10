import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joe Harwood — Software Engineer",
  description:
    "Software engineer in Amsterdam building AI-powered products and clean web experiences. Previously at Booking.com, IBM, and Appical.",
  keywords: [
    "software engineer",
    "AI engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
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
      "Software engineer in Amsterdam building AI-powered products and clean web experiences.",
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
      "Software engineer in Amsterdam building AI-powered products and clean web experiences.",
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
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
