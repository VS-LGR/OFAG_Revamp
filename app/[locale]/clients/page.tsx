import { getTranslations, setRequestLocale, getMessages } from "next-intl/server";
import { Globe } from "lucide-react";
import { getAlternates } from "@/lib/seo";
import { CLIENT_NAMES } from "@/lib/constants";
import Section from "@/components/ui/Section";
import ReviewsCarousel from "@/components/clients/ReviewsCarousel";

type ReviewEntry = {
  comment: string;
  companyResponsible: string;
  service: string;
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "clients" });
  const { canonical, languages } = getAlternates("/clients");
  return {
    title: `${t("title")} | OFAG`,
    description: t("metaDescription"),
    alternates: { canonical, languages },
  };
}

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("clients");
  const messages = await getMessages();
  const clients = messages?.clients as {
    reviews?: ReviewEntry[];
    reviewLabel?: { company: string; service: string };
    reviewsTitle?: string;
    reviewsSubtitle?: string;
  } | undefined;
  const reviews = Array.isArray(clients?.reviews) ? clients.reviews : [];
  const reviewLabel = clients?.reviewLabel ?? { company: "", service: "" };
  const reviewsTitle = clients?.reviewsTitle ?? "";
  const reviewsSubtitle = clients?.reviewsSubtitle ?? "";

  return (
    <>
      <Section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-neutral-700">{t("subtitle")}</p>
        </div>
      </Section>
      <Section className="relative overflow-hidden border-t border-neutral-200 bg-gradient-to-b from-primary/[0.03] to-transparent">
        {/* Subtle grid pattern for precision/strategy feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(14,42,71,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(14,42,71,0.5) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="container-wide relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">{t("partnersTag")}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl">
              {t("knowOurClients")}
            </h2>
          </div>
          <ul
            className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4"
            role="list"
            aria-label={t("knowOurClients")}
          >
            {CLIENT_NAMES.map((name) => (
              <li key={name}>
                <span className="client-card block" role="listitem">
                  {name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-neutral-600">
            {t("partnersSubline")}
          </p>
        </div>
      </Section>
      {reviews.length > 0 && (
        <Section className="border-t border-neutral-200 bg-neutral-50/30">
          <ReviewsCarousel
            reviews={reviews}
            title={reviewsTitle}
            subtitle={reviewsSubtitle}
            labelCompany={reviewLabel.company}
            labelService={reviewLabel.service}
            ariaPrev={t("reviewCarouselPrev")}
            ariaNext={t("reviewCarouselNext")}
          />
        </Section>
      )}
      <Section className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto flex max-w-md flex-col items-center rounded-lg border border-neutral-200 bg-white p-8 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <Globe className="h-8 w-8" />
          </div>
          <p className="mt-4 text-xl font-semibold text-primary">{t("presence")}</p>
        </div>
      </Section>
    </>
  );
}
