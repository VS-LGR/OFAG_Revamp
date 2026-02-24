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
    <nav aria-label="Language selection" className="flex items-center gap-1">
      {LOCALES.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending}
          className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
            locale === loc
              ? "bg-primary text-white"
              : "text-neutral-600 hover:bg-neutral-100 hover:text-primary"
          }`}
          aria-current={locale === loc ? "true" : undefined}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </nav>
  );
}
