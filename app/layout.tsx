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
  title: "DevJoe — Custom software for businesses",
  description:
    "Custom booking systems, customer portals, and internal tools for businesses that have outgrown spreadsheets.",
  keywords: [
    "custom software development",
    "booking system development",
    "customer portal development",
    "internal tools development",
    "workflow automation",
    "full-stack developer Amsterdam",
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
    title: "DevJoe — Custom software for businesses",
    description:
      "Custom booking systems, customer portals, and internal tools for businesses that have outgrown spreadsheets.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevJoe — Custom software for businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevJoe — Custom software for businesses",
    description:
      "Custom booking systems, customer portals, and internal tools for businesses that have outgrown spreadsheets.",
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
