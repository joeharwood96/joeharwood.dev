"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");

      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="mono-text text-[#525252]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="px-0 py-4 bg-transparent border-b border-black focus:outline-none focus:border-black transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#737373]"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="mono-text text-[#525252]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="px-0 py-4 bg-transparent border-b border-black focus:outline-none focus:border-black transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#737373]"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="mono-text text-[#525252]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          rows={4}
          className="px-0 py-4 bg-transparent border-b border-black focus:outline-none focus:border-black transition-colors duration-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#737373]"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-black text-white px-8 py-4 font-medium hover:bg-black/80 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed w-fit"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-black">
            Thanks! Your message has been sent successfully.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600">
            {errorMessage || "Failed to send message. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
}
