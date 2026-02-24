"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "@/components/ui/Button";

const navKeys = [
  "home",
  "about",
  "services",
  "certifications",
  "clients",
  "contact",
  "quote",
] as const;

const pathByKey: Record<(typeof navKeys)[number], string> = {
  home: "",
  about: "about",
  services: "services",
  certifications: "certifications",
  clients: "clients",
  contact: "contact",
  quote: "quote",
};

export default function Header() {
  const t = useTranslations("common.nav");
  const tCta = useTranslations("common.cta");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 shadow-header backdrop-blur-sm">
      <div className="container-wide flex h-16 min-h-[4.25rem] items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-primary transition-opacity hover:opacity-90"
        >
          <span>OFAG</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={pathByKey[key] ? `/${pathByKey[key]}` : "/"}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-primary"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <Button asChild variant="primary">
              <Link href="/quote">{tCta("requestQuote")}</Link>
            </Button>
          </div>
          <button
            type="button"
            className="rounded-lg p-2.5 text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-primary md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-neutral-50/80 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-0.5" aria-label="Main mobile">
            {navKeys.map((key) => (
              <Link
                key={key}
                href={pathByKey[key] ? `/${pathByKey[key]}` : "/"}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-white hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
            <div className="mt-3 border-t border-neutral-200 pt-3">
              <Button asChild variant="primary" className="w-full">
                <Link href="/quote" onClick={() => setOpen(false)}>
                  {tCta("requestQuote")}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
