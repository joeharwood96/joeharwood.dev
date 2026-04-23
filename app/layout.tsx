import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevJoe, a small engineering studio in Amsterdam",
  description:
    "A small engineering studio run by Joe Harwood. Product, with AI where it earns its keep. Audits, feature sprints, and custom AI assistants for mid-market companies.",
  keywords: [
    "engineering studio Amsterdam",
    "product engineering",
    "AI feature sprint",
    "AI opportunity audit",
    "AI assistant",
    "mid-market software",
    "Dutch engineering studio",
    "Joe Harwood",
    "DevJoe",
  ],
  authors: [{ name: "Joe Harwood", url: "https://joeharwood.dev" }],
  creator: "Joe Harwood",
  metadataBase: new URL("https://joeharwood.dev"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://joeharwood.dev",
    title: "DevJoe, a small engineering studio in Amsterdam",
    description:
      "A small engineering studio run by Joe Harwood. Product, with AI where it earns its keep.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevJoe, a small engineering studio in Amsterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevJoe, a small engineering studio in Amsterdam",
    description:
      "Product, with AI where it earns its keep. Audits, feature sprints, and custom AI assistants.",
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
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
