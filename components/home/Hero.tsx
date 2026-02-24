import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative bg-primary px-4 py-24 text-white md:py-32">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl lg:leading-tight">
            {t("title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-primary-light/90 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10">
            <Button variant="secondary" asChild>
              <Link href="/quote">{t("cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
