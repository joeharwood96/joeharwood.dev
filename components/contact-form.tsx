"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");

      // Reset error message after 5 seconds
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
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
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
          className="px-4 py-3 border border-black/10 rounded-2xl focus:outline-none focus:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
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
          className="px-4 py-3 border border-black/10 rounded-2xl focus:outline-none focus:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          rows={6}
          className="px-4 py-3 border border-black/10 rounded-2xl focus:outline-none focus:border-black transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-black text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-fit"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-600"
          >
            Thanks! Your message has been sent successfully.
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {errorMessage || "Failed to send message. Please try again."}
          </motion.p>
        )}
      </div>
    </motion.form>
  );
}
