import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Factory, Leaf, ShieldCheck, Workflow } from "lucide-react";
import Section from "@/components/ui/Section";
import { getAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quality" });
  const { canonical, languages } = getAlternates("/quality");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

type SupplyChain = {
  title: string;
  intro: string;
  steps: string[];
};

type FlowWithSteps = {
  title: string;
  steps: string[];
};

type Inspections = {
  title: string;
  summary: string;
  items: string[];
};

type CleaningRelease = {
  title: string;
  summary: string;
  steps: string[];
};

type SimpleBlock = {
  title: string;
  summary: string;
};

export default async function QualityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("quality");

  const supplyChain = t.raw("supplyChain") as SupplyChain;
  const newProductFlow = t.raw("newProductFlow") as FlowWithSteps;
  const offsetFlow = t.raw("offsetFlow") as FlowWithSteps;
  const inspections = t.raw("inspections") as Inspections;
  const cleaningRelease = t.raw("cleaningRelease") as CleaningRelease;
  const sustainableProducts = t.raw("sustainableProducts") as SimpleBlock;
  const equipment = t.raw("equipment") as SimpleBlock;

  return (
    <>
      <Section className="relative min-h-[18rem] overflow-hidden border-b border-neutral-200 bg-neutral-100 py-14 md:min-h-[20rem] md:py-16">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/images/quality-hero.png"
              alt=""
              fill
              className="object-cover object-center opacity-[0.22]"
              sizes="100vw"
              priority
            />
          </div>
          <div
            className="absolute inset-0 bg-white/75"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Qualidade • Processos • Sustentabilidade
          </p>
          <h1 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700 md:text-base">
            {t("heroSubtitle")}
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-primary/10 bg-gradient-to-br from-white via-neutral-50 to-primary/5 p-6 shadow-md shadow-primary/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Factory className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-primary">
              {t("orgChart.title")}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {t("orgChart.summary")}
            </p>
          </article>
          <article className="rounded-3xl border border-secondary/10 bg-gradient-to-br from-white via-neutral-50 to-secondary/5 p-6 shadow-md shadow-secondary/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-primary">
              {t("qualityOrgChart.title")}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {t("qualityOrgChart.summary")}
            </p>
          </article>
        </div>
      </Section>

      <Section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-primary">
            {supplyChain?.title}
          </h2>
          <p className="mt-3 text-neutral-700">{supplyChain?.intro}</p>
          {Array.isArray(supplyChain?.steps) && supplyChain.steps.length > 0 && (
            <ol className="mt-6 space-y-3 border-l border-dashed border-primary/30 pl-4 text-sm text-neutral-700">
              {supplyChain.steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white shadow-sm shadow-secondary/50">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md shadow-neutral-200/80">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Workflow className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-primary">
              {newProductFlow?.title}
              </h2>
            </div>
            {Array.isArray(newProductFlow?.steps) && (
              <ol className="mt-4 space-y-2 text-sm text-neutral-700">
                {newProductFlow.steps.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-0.5 text-xs font-semibold text-secondary">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </article>
          <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md shadow-neutral-200/80">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Factory className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-primary">
              {offsetFlow?.title}
              </h2>
            </div>
            {Array.isArray(offsetFlow?.steps) && (
              <ol className="mt-4 space-y-2 text-sm text-neutral-700">
                {offsetFlow.steps.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-0.5 text-xs font-semibold text-secondary">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </article>
        </div>
      </Section>

      <Section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-primary">
            {inspections?.title}
          </h2>
          <p className="mt-3 text-neutral-700">{inspections?.summary}</p>
          {Array.isArray(inspections?.items) && (
            <ul className="mt-5 grid gap-3 text-sm text-neutral-700 md:grid-cols-2">
              {inspections.items.map((item, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-neutral-200 bg-white/80 p-3 shadow-sm shadow-neutral-200/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-primary/10 bg-gradient-to-br from-white via-neutral-50 to-primary/5 p-6 shadow-md shadow-primary/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-primary">
              {cleaningRelease?.title}
              </h2>
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              {cleaningRelease?.summary}
            </p>
            {Array.isArray(cleaningRelease?.steps) && (
              <ol className="mt-4 space-y-2 text-sm text-neutral-700">
                {cleaningRelease.steps.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-0.5 text-xs font-semibold text-secondary">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </article>
          <article className="rounded-3xl border border-secondary/10 bg-gradient-to-br from-white via-neutral-50 to-secondary/5 p-6 shadow-md shadow-secondary/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Leaf className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-primary">
              {sustainableProducts?.title}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {sustainableProducts?.summary}
            </p>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest text-secondary">
              {equipment?.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              {equipment?.summary}
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}

