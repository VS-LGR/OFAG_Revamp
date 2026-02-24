import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-primary px-4 py-24 md:py-32">
      {/* Transição suave para a seção seguinte */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent"
        aria-hidden
      />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-tight">
            {t("title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10">
            <Button variant="primary" asChild>
              <Link href="/quote">{t("cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
