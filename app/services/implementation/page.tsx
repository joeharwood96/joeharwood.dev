import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "../_components/service-layout";
import { getService } from "@/data/services";

const service = getService("implementation");

export const metadata: Metadata = {
  title: `${service?.name} · DevJoe`,
  description: service?.description,
  openGraph: {
    title: `${service?.name} · DevJoe`,
    description: service?.description,
  },
};

export default function ImplementationPage() {
  if (!service) notFound();
  return <ServiceLayout service={service} />;
}
