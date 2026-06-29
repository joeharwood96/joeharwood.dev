import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import MotionProvider from "@/components/motion/motion-provider";
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
  title: "DevJoe — Web products for founders",
  description:
    "Freelance product engineer in Amsterdam. I design and build marketing sites, MVPs, and SaaS for founders, made to look premium and built to convert.",
  keywords: [
    "web developer for founders",
    "MVP development",
    "SaaS development",
    "marketplace development",
    "marketing website",
    "product engineer Amsterdam",
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
    title: "Joseph Harwood — Web products for founders",
    description:
      "I design and build marketing sites, MVPs, and SaaS for founders, made to look premium and built to convert.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joseph Harwood — Web products for founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Harwood — Web products for founders",
    description:
      "I design and build marketing sites, MVPs, and SaaS for founders, made to look premium and built to convert.",
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
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
