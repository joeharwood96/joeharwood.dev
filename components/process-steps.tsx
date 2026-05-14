import { Check } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export type ProcessStep = {
  title: string;
  body: string;
};

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <Stagger
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
      staggerChildren={0.1}
    >
      {steps.map((step, index) => (
        <StaggerItem
          key={step.title}
          className={`group min-h-[240px] rounded-[6px] p-6 md:p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_44px_-36px_rgba(20,15,12,0.32)] ${
            index === 0
              ? "bg-primary text-primary-foreground"
              : "border border-primary/15 bg-primary/10"
          }`}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full ${
              index === 0
                ? "bg-primary-foreground/15 text-primary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            <Check className="h-4 w-4" />
          </span>
          <div className="mt-10">
            <h3
              className={`text-xl font-semibold leading-tight ${
                index === 0 ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-4 text-base leading-relaxed text-pretty ${
                index === 0
                  ? "text-primary-foreground/75"
                  : "text-muted-foreground"
              }`}
            >
              {step.body}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
