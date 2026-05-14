"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export type FaqItem = {
  q: string;
  a: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <Stagger className="mx-auto max-w-4xl" staggerChildren={0.06}>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <StaggerItem key={item.q}>
            <AccordionItem
              value={`item-${i}`}
              className="mb-3 overflow-hidden rounded-[6px] border border-primary/15 bg-white px-5 md:px-7 last:mb-0"
            >
              <AccordionTrigger className="py-5 md:py-6 font-serif text-xl md:text-2xl leading-tight text-foreground hover:no-underline hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-base text-muted-foreground leading-relaxed text-pretty pb-5 md:pb-7">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </StaggerItem>
        ))}
      </Accordion>
    </Stagger>
  );
}
