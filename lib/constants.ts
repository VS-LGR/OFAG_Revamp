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

/** URLs dos certificados (visualização em nova aba) */
export const CERTIFICATE_URLS = {
  iso9001: "https://i.imgur.com/5a3MyKN.jpeg",
  fscPage1: "https://i.imgur.com/zozaxpg.jpeg",
  fscPage2: "https://i.imgur.com/PBArsdr.jpeg",
  dunBradstreet: "https://i.imgur.com/ZO0qkqG.jpeg",
} as const;

/** Nomes dos principais clientes (exibidos na página Clientes) */
export const CLIENT_NAMES = [
  "Lilly",
  "Novo Nordisk",
  "GSK",
  "Biolab",
  "Sandoz",
  "Prati-Donaduzzi",
  "Novartis",
  "EMS",
  "MSD",
  "Sanofi",
  "Vallée",
  "Ourofino",
  "Abbott",
  "BD",
  "Stiefel",
  "Medley",
] as const;
