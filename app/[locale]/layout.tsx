import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "pt" | "en" | "es")) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("common.a11y");

  return (
    <NextIntlClientProvider messages={messages}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        {t("skipToContent")}
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
