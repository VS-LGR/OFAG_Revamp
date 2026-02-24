import { useTranslations } from "next-intl";
import { FileCheck, Factory, ShieldCheck, ScanSearch } from "lucide-react";
import Section from "@/components/ui/Section";

const icons = [FileCheck, Factory, ShieldCheck, ScanSearch];

export default function TechnologyProcess() {
  const t = useTranslations("home.technology");

  return (
    <Section id="technology" className="bg-neutral-50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("title")}</h2>
        <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
      </div>
      <div className="mx-auto mt-12 max-w-5xl">
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {([1, 2, 3, 4] as const).map((step) => {
            const Icon = icons[step - 1];
            return (
              <li key={step} className="relative flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-card">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-2 text-sm font-semibold text-primary">
                  {String(step)}
                </span>
                <h3 className="mt-1 font-semibold text-neutral-900">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-1 text-sm text-neutral-700">
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
