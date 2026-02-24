"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import { useTransition } from "react";
import { LOCALES } from "@/lib/constants";

const localeLabels: Record<string, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(newLocale: string) {
    startTransition(() => router.push(pathname || "/", { locale: newLocale }));
  }

  return (
    <nav
      aria-label="Language selection"
      className="flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-0.5"
    >
      {LOCALES.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
            locale === loc
              ? "bg-primary text-white shadow-button"
              : "text-neutral-800 hover:bg-neutral-200 hover:text-primary"
          }`}
          aria-current={locale === loc ? "true" : undefined}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </nav>
  );
}
