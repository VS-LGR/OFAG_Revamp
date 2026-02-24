import { useTranslations } from "next-intl";
import { FileCheck, Factory, ShieldCheck, ScanSearch } from "lucide-react";
import Section from "@/components/ui/Section";

const icons = [FileCheck, Factory, ShieldCheck, ScanSearch];

export default function TechnologyProcess() {
  const t = useTranslations("home.technology");

  return (
    <Section id="technology" className="bg-neutral-50">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Processo</p>
        <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
      </div>
      <div className="relative mx-auto mt-14 max-w-5xl">
        {/* Linha conectora (desktop) */}
        <div
          className="absolute left-1/2 top-7 hidden h-[calc(100%-3.5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {([1, 2, 3, 4] as const).map((step) => {
            const Icon = icons[step - 1];
            return (
              <li
                key={step}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-card ring-4 ring-neutral-50">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-3 text-sm font-bold text-secondary">
                  {String(step)}
                </span>
                <h3 className="mt-1 font-semibold text-neutral-900">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                  {t(`steps.${step}.desc`)}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
