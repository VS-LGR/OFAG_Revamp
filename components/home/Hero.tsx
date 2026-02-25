import { useTranslations } from "next-intl";
import Image from "next/image";
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
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
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
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-card">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQHfHKlzAdKC7w/feedshare-shrink_800/B4DZah71c5G8Ak-/0/1746473540301?e=2147483647&v=beta&t=I08wLT9uCbI01GKZnJOi5_Zu5BIivHPNDsh5PCNmBZM"
                alt="Industrial printing line at OFAG"
                fill
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 460px, 0px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
