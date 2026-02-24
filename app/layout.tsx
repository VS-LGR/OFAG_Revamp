import type { Metadata } from "next";
import "./globals.css";
import SetLocaleLang from "@/components/layout/SetLocaleLang";

export const metadata: Metadata = {
  title: "OFAG — Technical Printing Solutions for Regulated Industries",
  description:
    "Technical printing of leaflets and pharmaceutical packaging. Over 57 years in the market, presence in more than 80 countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <SetLocaleLang />
        {children}
      </body>
    </html>
  );
}
