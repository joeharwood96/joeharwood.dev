import type { Metadata } from "next";
import localFont from "next/font/local";
import { Pixelify_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ScrollProgress from "@/components/scroll-progress";

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
  title: "DevJoe - Freelance Software Engineer",
  description: "DevJoe - Freelance Software Engineer based in Amsterdam. Full-stack web development services for startups and SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
