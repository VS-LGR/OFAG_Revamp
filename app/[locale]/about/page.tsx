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
          <p className="mt-4 text-lg text-neutral-700">{t("introExtended")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-primary">{t("title")}</h2>
            <p className="mt-3 text-neutral-700">{t("whoWeAre")}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">{t("presence")}</h2>
            <p className="mt-3 text-neutral-700">{t("whatWeDo")}</p>
          </div>
        </div>
      </Section>
      <Section className="border-t border-neutral-200 bg-neutral-50/80">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-xl font-semibold text-primary">{t("history")}</h2>
          <p className="text-neutral-700">{t("intro")}</p>
          <p className="text-neutral-700">{t("differentiation")}</p>
        </div>
      </Section>
    </>
  );
}
