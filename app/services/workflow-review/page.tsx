import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "../_components/service-layout";
import { getService } from "@/data/services";

const service = getService("workflow-review");

export const metadata: Metadata = {
  title: `${service?.name} · DevJoe`,
  description: service?.tagline,
  openGraph: {
    title: `${service?.name} · DevJoe`,
    description: service?.tagline,
    url: "/services/workflow-review",
  },
};

export default function WorkflowReviewPage() {
  if (!service) notFound();
  return <ServiceLayout service={service} />;
}
