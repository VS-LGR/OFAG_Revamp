import { getTranslations, setRequestLocale } from "next-intl/server";
import { Award, ShieldCheck, FileCheck, ExternalLink } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import { CERTIFICATE_URLS } from "@/lib/constants";
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
          <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
          <article className="flex gap-4 rounded-lg border border-neutral-200 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-primary">{t("iso9001.title")}</h2>
              <p className="mt-1 text-neutral-700">{t("iso9001.desc")}</p>
            </div>
          </article>
          <article className="flex gap-4 rounded-lg border border-neutral-200 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-primary">{t("gmp.title")}</h2>
              <p className="mt-1 text-neutral-700">{t("gmp.desc")}</p>
            </div>
          </article>
        </div>
      </Section>
      <Section className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label mb-6 flex items-center gap-2 text-secondary">
            <FileCheck className="h-4 w-4" />
            {t("documentsSection")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={CERTIFICATE_URLS.iso9001}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-secondary">
                ISO 9001
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-neutral-600">
                {t("viewCertificate")}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href={CERTIFICATE_URLS.fscPage1}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-secondary">
                {t("fscPage1")}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-neutral-600">
                {t("viewCertificate")}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href={CERTIFICATE_URLS.fscPage2}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-secondary">
                {t("fscPage2")}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-neutral-600">
                {t("viewCertificate")}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href={CERTIFICATE_URLS.dunBradstreet}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-secondary">
                Dun & Bradstreet
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-neutral-600">
                {t("viewCertificate")}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
