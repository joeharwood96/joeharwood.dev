import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | DevJoe - Freelance Next.js Developer",
  description:
    "Transparent pricing for Next.js development projects. Fixed-price packages from €3,500 for landing pages to €18,000+ for full-stack applications. Based in Amsterdam.",
  keywords: [
    "Next.js developer pricing",
    "freelance web developer rates",
    "web development packages Amsterdam",
    "Next.js development cost",
    "freelance developer Netherlands pricing",
    "website development packages",
  ],
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/pricing",
    title: "Pricing & Packages | DevJoe",
    description:
      "Transparent pricing for Next.js development. Fixed-price packages from €3,500 to €18,000+. No hidden fees.",
    siteName: "DevJoe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevJoe Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Packages | DevJoe",
    description:
      "Transparent pricing for Next.js development. Fixed-price packages from €3,500 to €18,000+.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://joeharwood.dev/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
