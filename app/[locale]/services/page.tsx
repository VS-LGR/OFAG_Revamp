import { getTranslations, setRequestLocale } from "next-intl/server";
import { Tags, FileText, Printer, Box } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import Section from "@/components/ui/Section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const { canonical, languages } = getAlternates("/services");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

const serviceKeys = ["labels", "leaflets", "offset", "flexo"] as const;
const icons = [Tags, FileText, Printer, Box];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-neutral-600">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {serviceKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <article
                key={key}
                className="rounded-lg border border-neutral-200 p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-primary">
                  {t(`${key}.title`)}
                </h2>
                <p className="mt-2 text-neutral-600">{t(`${key}.desc`)}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
