import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CtaBlock() {
  const t = useTranslations("home.ctaBlock");

  return (
    <Section className="bg-secondary text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{t("title")}</h2>
        <p className="mt-3 text-white">{t("subtitle")}</p>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <Link href="/quote" className="bg-white !text-secondary hover:bg-white/95 hover:!text-secondary-dark">
              {t("cta")}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
