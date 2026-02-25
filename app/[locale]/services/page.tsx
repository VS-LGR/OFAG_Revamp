import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  FileText,
  Tags,
  ThermometerSnowflake,
  ScanSearch,
  Quote,
} from "lucide-react";
import { getAlternates } from "@/lib/seo";
import Section from "@/components/ui/Section";
import { Link } from "@/lib/navigation";

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

type LeafletsLabels = {
  title: string;
  desc: string;
  items: string[];
};

type ProductionInspection = {
  title: string;
  desc: string;
};

type QualityRef = {
  title: string;
  p1: string;
  p2: string;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const leaflets = t.raw("leaflets") as LeafletsLabels;
  const labels = t.raw("labels") as LeafletsLabels;
  const production = t.raw("production") as ProductionInspection;
  const inspection = t.raw("inspection") as ProductionInspection;
  const qualityRef = t.raw("qualityRef") as QualityRef;

  const productBlocks = [
    {
      key: "leaflets",
      title: leaflets?.title ?? "",
      desc: leaflets?.desc ?? "",
      items: Array.isArray(leaflets?.items) ? leaflets.items : [],
      icon: FileText,
      accent: "primary",
    },
    {
      key: "labels",
      title: labels?.title ?? "",
      desc: labels?.desc ?? "",
      items: Array.isArray(labels?.items) ? labels.items : [],
      icon: Tags,
      accent: "secondary",
    },
  ] as const;

  const capabilityBlocks = [
    {
      key: "production",
      title: production?.title ?? "",
      desc: production?.desc ?? "",
      icon: ThermometerSnowflake,
    },
    {
      key: "inspection",
      title: inspection?.title ?? "",
      desc: inspection?.desc ?? "",
      icon: ScanSearch,
    },
  ] as const;

  return (
    <>
      {/* Hero: core offering */}
      <Section className="border-b border-primary-dark bg-primary-dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-medium tracking-wide text-white/90 md:text-xl">
            {t("heroLine")}
          </p>
        </div>
      </Section>

      {/* Intro: commitment & values */}
      <Section className="border-b border-neutral-200 bg-neutral-50/80">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-6 leading-relaxed text-neutral-700">{t("subtitle")}</p>
          <p className="mt-4 leading-relaxed text-neutral-600">{t("introValues")}</p>
        </div>
      </Section>

      {/* Products: Bulas + Rótulos with item lists */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {productBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.key}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    block.accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-primary">
                  {block.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {block.desc}
                </p>
                {block.items.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2" role="list">
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <span className="inline-flex rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </Section>

      {/* Capabilities: production + inspection */}
      <Section className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {capabilityBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.key}
                className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{block.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{block.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Quality reference */}
      <Section className="border-t border-neutral-200">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2 text-secondary">
            <Quote className="h-5 w-5 shrink-0 opacity-70" aria-hidden />
            <h2 className="text-lg font-bold text-primary">
              {qualityRef?.title ?? ""}
            </h2>
          </div>
          <p className="mt-4 leading-relaxed text-neutral-700">
            {qualityRef?.p1}
          </p>
          <p className="mt-4 leading-relaxed text-neutral-700">
            {qualityRef?.p2}
          </p>
          <p className="mt-6">
            <Link
              href="/clients"
              className="inline-flex items-center font-medium text-secondary hover:text-secondary-dark"
            >
              {t("viewOurClients")}
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
