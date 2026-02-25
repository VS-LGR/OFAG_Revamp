import { useTranslations } from "next-intl";
import Image from "next/image";
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 lg:border-l lg:border-secondary/20 lg:pl-8">
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
          <div className="hidden gap-4 lg:grid">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card">
              <Image
                src="https://lh3.googleusercontent.com/proxy/hc7KqPd6mv5MUS0uT7EbDju4DD2YckVxz3P_BJZvy1VGJSg-Ic6qmV2nWYIxCqD7xijNEU-UcWygUkab-tdRV5hf_2-RNkCKJTvmix9-vPO7TlZuGEUDbkvNq0axDGEQuWMR"
                alt="OFAG industrial printing structure"
                fill
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 440px, 0px"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card">
                <Image
                  src="https://lh5.googleusercontent.com/proxy/AvZCbNsYvAqS0rXyHmQUrPT9la6iTUwEvheim0K7E7D9dp7KU1s2olZgoZsnwx1uYOO39zfEU3drWwmgsL93GLdGnA1gyLvFQn-PQ17C9BLPmnBUE85FDtAIDMCqUNvVzA"
                  alt="Detail of OFAG printing equipment"
                  fill
                  sizes="(min-width: 1280px) 260px, (min-width: 1024px) 220px, 0px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0OP-puyr8KIn2h56A8H5MBvuMxvs0tSDvg&s"
                  alt="OFAG headquarters front"
                  fill
                  sizes="(min-width: 1280px) 260px, (min-width: 1024px) 220px, 0px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
