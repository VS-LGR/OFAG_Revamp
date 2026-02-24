"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

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
  home: "",
  about: "about",
  services: "services",
  certifications: "certifications",
  clients: "clients",
  contact: "contact",
  quote: "quote",
};

export default function Footer() {
  const t = useTranslations("common.nav");
  const tContact = useTranslations("common.contact");
  const tFooter = useTranslations("common.footer");

  return (
    <footer className="border-t border-neutral-200 bg-primary-dark">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-lg font-bold tracking-tight text-white">OFAG</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-200">
              {tFooter("qualityNote")}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              {footerNavKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={pathByKey[key] ? `/${pathByKey[key]}` : "/"}
                    className="text-sm text-neutral-200 transition-colors hover:text-white"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{tContact("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href={`tel:${tContact("phone").replace(/\s/g, "")}`}
                  className="transition-colors hover:text-secondary-light"
                >
                  {tContact("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
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
        <div className="mt-12 border-t border-primary-light pt-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} OFAG — Osvaldo, Fernandes S.A. Artes Gráficas
        </div>
      </div>
    </footer>
  );
}
