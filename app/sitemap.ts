import { MetadataRoute } from "next";
import { LOCALES } from "@/lib/constants";
import { getAbsoluteUrl } from "@/lib/seo";

const PATHS = ["", "about", "services", "certifications", "clients", "contact", "quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ofag.com";
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of PATHS) {
      const url = getAbsoluteUrl(locale, path);
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
