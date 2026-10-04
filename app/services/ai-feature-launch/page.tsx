import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "../_components/service-layout";
import { getService } from "@/data/services";

const service = getService("ai-feature-launch");

export const metadata: Metadata = {
  title: `${service?.name} · DevJoe`,
  description: service?.tagline,
  openGraph: {
    title: `${service?.name} · DevJoe`,
    description: service?.tagline,
    url: "/services/ai-feature-launch",
  },
};

export default function AiFeatureLaunchPage() {
  if (!service) notFound();
  return <ServiceLayout service={service} />;
}
