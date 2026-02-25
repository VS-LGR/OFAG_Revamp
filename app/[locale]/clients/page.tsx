import { getTranslations, setRequestLocale } from "next-intl/server";
import { Globe } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import { CLIENT_NAMES } from "@/lib/constants";
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
          <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-semibold text-secondary md:text-2xl">
            {t("knowOurClients")}
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {CLIENT_NAMES.map((name) => (
              <li key={name}>
                <span
                  className="block rounded-xl border border-neutral-200 bg-neutral-100/80 px-4 py-3 text-center text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:border-neutral-300 hover:bg-neutral-100"
                  role="listitem"
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="border-t border-neutral-200 bg-neutral-50/50">
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
