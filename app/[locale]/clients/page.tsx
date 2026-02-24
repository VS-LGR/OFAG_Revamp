import { getTranslations, setRequestLocale } from "next-intl/server";
import { Globe } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import Section from "@/components/ui/Section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "clients" });
  const { canonical, languages } = getAlternates("/clients");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("clients");

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-neutral-600">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto flex max-w-md flex-col items-center rounded-lg border border-neutral-200 bg-white p-8 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <Globe className="h-8 w-8" />
          </div>
          <p className="mt-4 text-xl font-semibold text-primary">{t("presence")}</p>
        </div>
      </Section>
    </>
  );
}
