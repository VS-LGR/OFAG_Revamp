"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { ROUTES } from "@/lib/constants";

const footerNavKeys = [
  "home",
  "about",
  "services",
  "certifications",
  "clients",
  "contact",
  "quote",
] as const;

const pathByKey: Record<(typeof footerNavKeys)[number], string> = {
  home: ROUTES.home,
  about: ROUTES.about,
  services: ROUTES.services,
  certifications: ROUTES.certifications,
  clients: ROUTES.clients,
  contact: ROUTES.contact,
  quote: ROUTES.quote,
};

export default function Footer() {
  const t = useTranslations("common.nav");
  const tContact = useTranslations("common.contact");
  const tFooter = useTranslations("common.footer");

  return (
    <footer className="bg-primary-dark" role="contentinfo">
      {/* Accent bar */}
      <div className="h-1 bg-secondary" aria-hidden />

      <div className="container-wide py-12 md:py-14">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:max-w-xs">
            <p className="text-xl font-bold tracking-tight text-white">
              OFAG
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              {tFooter("qualityNote")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              {tFooter("navigation")}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerNavKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={pathByKey[key] ? `/${pathByKey[key]}` : "/"}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              {tFooter("contact")}
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-neutral-300">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                  aria-hidden
                />
                <span>{tContact("address")}</span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-secondary"
                  aria-hidden
                />
                <a
                  href={`tel:${tContact("phone").replace(/\s/g, "")}`}
                  className="transition-colors hover:text-secondary-light"
                >
                  {tContact("phone")}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-secondary"
                  aria-hidden
                />
                <a
                  href={`mailto:${tContact("email")}`}
                  className="transition-colors hover:text-secondary-light"
                >
                  {tContact("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} OFAG — {tFooter("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
