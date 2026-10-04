import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "../_components/service-layout";
import { getService } from "@/data/services";

const service = getService("embedded-ai-engineer");

export const metadata: Metadata = {
  title: `${service?.name} · DevJoe`,
  description: service?.tagline,
  openGraph: {
    title: `${service?.name} · DevJoe`,
    description: service?.tagline,
    url: "/services/embedded-ai-engineer",
  },
};

export default function EmbeddedAiEngineerPage() {
  if (!service) notFound();
  return <ServiceLayout service={service} />;
}
