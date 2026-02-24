import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";

export default function QualityCompliance() {
  const t = useTranslations("home.compliance");

  return (
    <Section id="compliance" className="bg-primary text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{t("title")}</h2>
        <p className="mt-3 text-white">{t("subtitle")}</p>
      </div>
      <ul className="mx-auto mt-10 grid gap-3 sm:grid-cols-2 md:max-w-2xl">
        {(t.raw("points") as string[]).map((point) => (
          <li key={point} className="flex items-start gap-2 text-white">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
