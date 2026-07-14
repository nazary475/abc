import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/seo";
import { routing, locales, type Locale } from "@/i18n/routing";

const siteUrl = SITE.url;

/** Map our locales to OpenGraph locale codes (language_REGION). */
const ogLocales: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
};

/** Generate static params for all locales — required for static export. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Generate metadata per locale — includes hreflang alternates for SEO. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Haal Lab — Engineering Intelligent Systems for the Future",
      template: "%s · Haal Lab",
    },
    description: SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: siteUrl }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    keywords: [
      "Haal Lab", "AI engineering", "private AI", "large language models",
      "LLM applications", "RAG systems", "retrieval-augmented generation",
      "AI infrastructure", "local AI", "GGUF", "BGE-M3", "semantic search",
      "knowledge intelligence", "AI automation", "machine learning",
      "AI consulting", "custom AI development", "on-prem AI",
      "air-gapped AI", "AI agents", "vector database", "llama.cpp",
      "vLLM", "open-weight models",
    ],
    alternates: {
      canonical: `${siteUrl}/${currentLocale}`,
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        fr: `${siteUrl}/fr`,
        es: `${siteUrl}/es`,
        it: `${siteUrl}/it`,
      },
    },
    manifest: "/manifest.json",
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    openGraph: {
      title: "Haal Lab — Engineering Intelligent Systems for the Future",
      description: SITE.description,
      url: `${siteUrl}/${currentLocale}`,
      siteName: SITE.name,
      locale: ogLocales[currentLocale],
      alternateLocale: locales
        .filter((l) => l !== currentLocale)
        .map((l) => ogLocales[l]),
      type: "website",
      images: "https://haal-lab.solutions/og-image.png",
    },
    twitter: {
      card: "summary_large_image",
      title: "Haal Lab — Engineering Intelligent Systems for the Future",
      description: SITE.shortDescription,
      creator: SITE.twitter,
      images: ["https://haal-lab.solutions/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      telephone: false,
      address: false,
      email: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#080B12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  // Enable static rendering — must be called BEFORE getMessages()
  setRequestLocale(currentLocale);

  const messages = await getMessages();

  return (
    <>
      <JsonLd locale={currentLocale} />
      <NextIntlClientProvider locale={currentLocale} messages={messages}>
        <div className="flex min-h-screen flex-col bg-background" lang={currentLocale}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </NextIntlClientProvider>
    </>
  );
}
