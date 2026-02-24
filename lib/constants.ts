export const LOCALES = ["pt", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

export const ROUTES = {
  home: "",
  about: "about",
  services: "services",
  certifications: "certifications",
  clients: "clients",
  contact: "contact",
  quote: "quote",
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ofag.com";
