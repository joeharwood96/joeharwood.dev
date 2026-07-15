import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "../_components/service-layout";
import { getService } from "@/data/services";

const service = getService("ongoing-improvements");

export const metadata: Metadata = {
  title: `${service?.name} · DevJoe`,
  description: service?.tagline,
  openGraph: {
    title: `${service?.name} · DevJoe`,
    description: service?.tagline,
    url: "/services/ongoing-improvements",
  },
};

export default function OngoingImprovementsPage() {
  if (!service) notFound();
  return <ServiceLayout service={service} />;
}
