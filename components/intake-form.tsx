"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  companyName: string;
  productType: string;
  helpType:
    | "ai-discovery-audit"
    | "ai-prototype-sprint"
    | "implementation-sprint"
    | "marketplace-search"
    | "not-sure"
    | "";
  timeline: "now" | "next-month" | "this-quarter" | "exploring" | "";
  message: string;
};

const HELP_OPTIONS: { value: FormState["helpType"]; label: string }[] = [
  { value: "ai-discovery-audit", label: "AI Discovery Audit" },
  { value: "ai-prototype-sprint", label: "AI Prototype Sprint" },
  { value: "implementation-sprint", label: "Implementation Sprint" },
  { value: "marketplace-search", label: "Search & recommendations" },
  { value: "not-sure", label: "Not sure yet" },
];

const TIMELINE_OPTIONS: { value: FormState["timeline"]; label: string }[] = [
  { value: "now", label: "Now" },
  { value: "next-month", label: "Next month" },
  { value: "this-quarter", label: "This quarter" },
  { value: "exploring", label: "Exploring" },
];

const RADIO_LABEL =
  "flex items-center gap-2 px-4 py-2.5 rounded-[6px] border border-primary/15 bg-white cursor-pointer text-sm text-foreground/80 transition-all duration-200 hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground";

const FIELD_LABEL = "text-sm font-medium text-foreground";
const FIELD_CLASS =
  "h-12 rounded-[6px] border-primary/15 bg-white px-4 shadow-none focus-visible:ring-primary";
const TEXTAREA_CLASS =
  "min-h-[132px] rounded-[6px] border-primary/15 bg-white px-4 py-3 shadow-none focus-visible:ring-primary";

export default function IntakeForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    companyName: "",
    productType: "",
    helpType: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.companyName.trim() &&
    form.productType.trim() &&
    form.helpType &&
    form.timeline &&
    form.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send request");
      }
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send request",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center md:py-16">
        <CheckCircle className="mx-auto mb-6 h-12 w-12 text-primary" />
        <h3 className="mx-auto max-w-xl font-serif text-2xl leading-snug text-foreground text-balance md:text-3xl">
          Thanks. I&apos;ll review the product context and get back to you with
          a useful next step.
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={FIELD_LABEL}>
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            placeholder="Your name"
            className={FIELD_CLASS}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={FIELD_LABEL}>
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            placeholder="you@company.com"
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="companyName" className={FIELD_LABEL}>
          Company or product
        </label>
        <Input
          id="companyName"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          placeholder="Your startup or product name"
          className={FIELD_CLASS}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="productType" className={FIELD_LABEL}>
          What kind of product is it?
        </label>
        <Input
          id="productType"
          name="productType"
          value={form.productType}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          placeholder="Travel, marketplace, local discovery, SaaS..."
          className={FIELD_CLASS}
        />
      </div>

      <fieldset className="space-y-3" disabled={status === "loading"}>
        <legend className={FIELD_LABEL}>What do you need help with?</legend>
        <div className="flex flex-wrap gap-2">
          {HELP_OPTIONS.map((opt) => (
            <label key={opt.value} className={RADIO_LABEL}>
              <input
                type="radio"
                name="helpType"
                value={opt.value}
                checked={form.helpType === opt.value}
                onChange={handleChange}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3" disabled={status === "loading"}>
        <legend className={FIELD_LABEL}>Timeline</legend>
        <div className="flex flex-wrap gap-2">
          {TIMELINE_OPTIONS.map((opt) => (
            <label key={opt.value} className={RADIO_LABEL}>
              <input
                type="radio"
                name="timeline"
                value={opt.value}
                checked={form.timeline === opt.value}
                onChange={handleChange}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <label htmlFor="message" className={FIELD_LABEL}>
          What is the discovery problem?
        </label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          rows={4}
          placeholder="A few lines about your search, recommendation, discovery, or conversational UX problem..."
          className={TEXTAREA_CLASS}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      <div className="flex flex-col items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={!isValid || status === "loading"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary/90 active:translate-y-0 active:scale-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:scale-100 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
              Sending...
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          No pressure. Send enough context for a useful reply.
        </p>
      </div>
    </form>
  );
}
