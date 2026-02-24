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
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-wide py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-primary">OFAG</p>
            <p className="mt-2 text-sm text-neutral-600">{tFooter("qualityNote")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Navegação</h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {footerNavKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={pathByKey[key] ? `/${pathByKey[key]}` : "/"}
                    className="text-sm text-neutral-600 hover:text-primary"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{tContact("address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${tContact("phone").replace(/\s/g, "")}`}>{tContact("phone")}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${tContact("email")}`}>{tContact("email")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} OFAG — Osvaldo, Fernandes S.A. Artes Gráficas
        </div>
      </div>
    </footer>
  );
}
