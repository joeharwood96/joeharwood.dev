"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type PricingTier = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  timeline: string;
  popular?: boolean;
  cta: string;
};

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col h-full transition-all duration-300",
        tier.popular
          ? "border-primary shadow-lg scale-[1.02]"
          : "hover:shadow-md"
      )}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="px-4 py-1">Most Popular</Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
          <span className="font-mono text-xs text-muted-foreground">
            {tier.timeline}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{tier.description}</p>
      </CardHeader>

      <CardContent className="pb-6 border-b border-border">
        {tier.priceNote && (
          <p className="text-xs text-muted-foreground mb-1">{tier.priceNote}</p>
        )}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{tier.price}</span>
        </div>
      </CardContent>

      <CardContent className="flex-1 pt-6">
        <ul className="space-y-4">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          asChild
          className="w-full"
          variant={tier.popular ? "default" : "outline"}
        >
          <Link href={`/?package=${tier.name.toLowerCase()}#contact`}>{tier.cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
