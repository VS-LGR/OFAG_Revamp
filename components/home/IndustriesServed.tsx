import { useTranslations } from "next-intl";
import { Pill, Heart, Shield, Factory } from "lucide-react";
import Section from "@/components/ui/Section";

const industryKeys = ["pharmaceutical", "healthcare", "regulated", "industrial"] as const;
const icons = [Pill, Heart, Shield, Factory];

export default function IndustriesServed() {
  const t = useTranslations("home.industries");

  return (
    <Section id="industries">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("title")}</h2>
        <p className="mt-3 text-neutral-600">{t("subtitle")}</p>
      </div>
      <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industryKeys.map((key, i) => {
          const Icon = icons[i];
          return (
            <article
              key={key}
              className="rounded-card border border-neutral-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-neutral-900">{t(`${key}.title`)}</h3>
              <p className="mt-1 text-sm text-neutral-600">{t(`${key}.desc`)}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
