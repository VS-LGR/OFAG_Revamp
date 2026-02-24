import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/components/ui/Section";
import { getAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const { canonical, languages } = getAlternates("/about");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-4 text-lg text-neutral-700">{t("intro")}</p>
          <p className="mt-3 font-medium text-secondary">{t("presence")}</p>
          <p className="mt-4 text-neutral-700">{t("differentiation")}</p>
        </div>
      </Section>
    </>
  );
}
