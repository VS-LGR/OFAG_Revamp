import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Phone, Mail } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const { canonical, languages } = getAlternates("/contact");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tContact = await getTranslations("common.contact");

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-neutral-600">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-primary">Contato</h2>
            <ul className="mt-4 space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>{tContact("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <a href={`tel:${tContact("phone").replace(/\s/g, "")}`} className="hover:text-primary">
                  {tContact("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <a href={`mailto:${tContact("email")}`} className="hover:text-primary">
                  {tContact("email")}
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
