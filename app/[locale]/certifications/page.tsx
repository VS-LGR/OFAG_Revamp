import { getTranslations, setRequestLocale } from "next-intl/server";
import { Award, ShieldCheck } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import Section from "@/components/ui/Section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certifications" });
  const { canonical, languages } = getAlternates("/certifications");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("certifications");

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-neutral-600">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
          <article className="flex gap-4 rounded-lg border border-neutral-200 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-primary">{t("iso.title")}</h2>
              <p className="mt-1 text-neutral-600">{t("iso.desc")}</p>
            </div>
          </article>
          <article className="flex gap-4 rounded-lg border border-neutral-200 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-primary">{t("gmp.title")}</h2>
              <p className="mt-1 text-neutral-600">{t("gmp.desc")}</p>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
