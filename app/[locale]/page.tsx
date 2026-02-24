import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import TechnologyProcess from "@/components/home/TechnologyProcess";
import IndustriesServed from "@/components/home/IndustriesServed";
import QualityCompliance from "@/components/home/QualityCompliance";
import CertificationsTeaser from "@/components/home/CertificationsTeaser";
import CtaBlock from "@/components/home/CtaBlock";
import { getAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  const { canonical, languages } = getAlternates("");
  return {
    title: "OFAG — Technical Printing Solutions for Regulated Industries",
    description: t("subtitle"),
    alternates: { canonical, languages },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatsStrip />
      <TechnologyProcess />
      <IndustriesServed />
      <QualityCompliance />
      <CertificationsTeaser />
      <CtaBlock />
    </>
  );
}
