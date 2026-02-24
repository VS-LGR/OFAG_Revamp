import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Award } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CertificationsTeaser() {
  const t = useTranslations("home.certificationsTeaser");

  return (
    <Section className="bg-neutral-50">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
            <Award className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">{t("title")}</h2>
            <p className="text-sm text-neutral-600">{t("subtitle")}</p>
          </div>
        </div>
        <Button variant="outline" asChild>
          <Link href="/certifications">{t("cta")}</Link>
        </Button>
      </div>
    </Section>
  );
}
