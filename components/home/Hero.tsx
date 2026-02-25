import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      {/* Fundo com imagem da empresa + camadas de opacidade */}
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerBO4mDAlc7ht-Vs9B5IsIXUBEZmjZrV3i5pfbEHrf8p8LNPqousHsshzpzAWPRVEEftrExcdUa28n1l6dYRxSfXdgqJ3nRKdTd-Uf1xnwkggYWRe4AROQxjA9tiBtHltNQA2Uw=s1360-w1360-h1020-rw"
          alt="Fachada da OFAG"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2)_0,transparent_55%)]" />
      </div>
      {/* Sombra interna para profundidade */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-80px_140px_rgba(15,23,42,0.85)]" />

      <div className="container-wide relative">
        <div className="max-w-3xl rounded-2xl border border-white/15 bg-white/8 p-8 shadow-[0_32px_80px_rgba(15,23,42,0.75)] backdrop-blur-md md:p-10">
          <p
            className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90"
            aria-hidden
          >
            {t("label")}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.15]">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" asChild>
              <Link href="/quote">{t("cta")}</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-white/80">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
              Pharma & Healthcare
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
              Regulated industries
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
              Technical printing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
