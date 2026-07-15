"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function CalendlyEventTracking() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;

      track("Fit Call Scheduled", { location: "contact_embed" });
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
