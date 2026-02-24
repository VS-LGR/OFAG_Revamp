"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: in production, post to API or email service
    await new Promise((r) => setTimeout(r, 500));
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
          {t("company")}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      {status === "sent" && (
        <p className="text-sm text-secondary">Mensagem enviada. Entraremos em contato em breve.</p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "..." : t("send")}
      </Button>
    </form>
  );
}
