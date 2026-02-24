import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Award } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CertificationsTeaser() {
  const t = useTranslations("home.certificationsTeaser");

  return (
    <Section className="bg-neutral-50">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-card md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-card">
            <Award className="h-7 w-7" />
          </div>
          <div>
            <p className="section-label">{t("title")}</p>
            <h2 className="mt-1 text-xl font-bold text-primary">{t("subtitle")}</h2>
          </div>
        </div>
        <Button variant="outline" asChild>
          <Link href="/certifications">{t("cta")}</Link>
        </Button>
      </div>
    </Section>
  );
}
