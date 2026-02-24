import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-primary px-4 py-24 md:py-32">
      {/* Elemento geométrico sutil */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 border-l border-white/5"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent"
        aria-hidden
      />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <p
            className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
            aria-hidden
          >
            {t("label")}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.15]">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary" asChild>
              <Link href="/quote">{t("cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
