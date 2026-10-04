"use client";

import type { Service } from "@/data/services";
import EmbeddedDemo from "./embedded-demo";
import FeatureLaunchDemo from "./feature-launch-demo";
import PrototypeDemo from "./prototype-demo";

const demos: Record<Service["slug"], () => JSX.Element> = {
  "ai-prototype": PrototypeDemo,
  "ai-feature-launch": FeatureLaunchDemo,
  "embedded-ai-engineer": EmbeddedDemo,
};

export default function ServiceDemo({ slug }: { slug: Service["slug"] }) {
  const Demo = demos[slug];
  return <Demo />;
}
