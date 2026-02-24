import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Pill, Heart, Shield, Factory, Globe } from "lucide-react";
import Section from "@/components/ui/Section";

const industryKeys = ["pharmaceutical", "healthcare", "regulated", "industrial"] as const;
const icons = [Pill, Heart, Shield, Factory];

export default function IndustriesServed() {
  const t = useTranslations("home.industries");
  const tStats = useTranslations("home.stats");

  return (
    <Section id="industries" className="bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Segmentos</p>
        <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
      </div>
      {/* Bento grid: destaque + 4 indústrias */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col justify-center rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-6 sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white">
            <Globe className="h-7 w-7" />
          </div>
          <p className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            80+
          </p>
          <p className="mt-1 text-sm font-semibold text-secondary">
            {tStats("countries")}
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            {t("globalPresence")}
          </p>
          <Link
            href="/clients"
            className="mt-4 inline-flex items-center text-sm font-semibold text-secondary hover:underline"
          >
            {t("viewClients")} →
          </Link>
        </article>
        {industryKeys.map((key, i) => {
          const Icon = icons[i];
          return (
            <article
              key={key}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card transition-all hover:border-secondary/30 hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-neutral-900">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-1 text-sm text-neutral-700">{t(`${key}.desc`)}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
