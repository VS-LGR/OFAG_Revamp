"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SetLocaleLang() {
  const pathname = usePathname();
  const locale = pathname?.slice(1, 3);
  const valid = locale === "pt" || locale === "en" || locale === "es";

  useEffect(() => {
    if (typeof document !== "undefined" && valid) {
      document.documentElement.lang = locale;
    }
  }, [locale, valid]);

  return null;
}
