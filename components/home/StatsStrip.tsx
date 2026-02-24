import { useTranslations } from "next-intl";
import { Globe, Building2, Award } from "lucide-react";

const stats = [
  { key: "years" as const, value: "57+", icon: Building2 },
  { key: "countries" as const, value: "80+", icon: Globe },
  { key: "pharma" as const, value: "40+", icon: Award },
];

export default function StatsStrip() {
  const t = useTranslations("home.stats");

  return (
    <section className="border-y border-neutral-200 bg-white py-8">
      <div className="container-wide">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map(({ key, value, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col items-center text-center sm:border-r sm:border-neutral-200 sm:last:border-r-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-700">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
