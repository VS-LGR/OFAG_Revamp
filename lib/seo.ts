import { LOCALES, DEFAULT_LOCALE } from "./constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ofag.com";

export function getAlternates(path: string = "") {
  const pathNorm = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}${pathNorm}`;
  }
  return {
    canonical: `${SITE_URL}/${DEFAULT_LOCALE}${pathNorm}`,
    languages,
  };
}

export function getAbsoluteUrl(locale: string, path: string = "") {
  const pathNorm = path.startsWith("/") ? path.slice(1) : path;
  return `${SITE_URL}/${locale}${pathNorm ? `/${pathNorm}` : ""}`;
}
