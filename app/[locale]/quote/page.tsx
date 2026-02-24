import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/components/ui/Section";
import { getAlternates } from "@/lib/seo";
import QuoteForm from "@/components/quote/QuoteForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote" });
  const { canonical, languages } = getAlternates("/quote");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("quote");

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-xl">
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
