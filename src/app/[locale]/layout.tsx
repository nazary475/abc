import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { ChatAssistant } from "@/components/chat-assistant";
import { SITE, generateHomeHreflangAlternates } from "@/lib/seo";
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

/** Generate static params for all locales , required for static export. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Generate metadata per locale , includes hreflang alternates for SEO. */
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
      default: "Haal Lab — Private AI Systems",
      template: "%s · Haal Lab",
    },
    description: SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: siteUrl }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    keywords: [
      "Haal Lab", "AI engineering", "private AI", "enterprise AI",
      "large language models", "LLM applications", "LLM deployment",
      "RAG systems", "retrieval-augmented generation", "RAG deployment",
      "AI infrastructure", "AI automation platform", "enterprise AI platform",
      "local AI", "on-premises AI", "on-prem AI", "air-gapped AI",
      "GGUF", "BGE-M3", "semantic search", "vector database",
      "knowledge intelligence", "AI automation", "agentic AI", "AI agents",
      "machine learning", "AI consulting", "custom AI development",
      "AI agents", "intelligent agents", "agent orchestration",
      "llama.cpp", "vLLM", "open-weight models", "open-source AI",
      "data sovereignty", "GDPR compliant AI", "AI compliance",
      "private LLM", "local LLM", "self-hosted AI", "private AI deployment"
    ],
    
    // Professional multilingual SEO with x-default fallback
    ...generateHomeHreflangAlternates(currentLocale),
    manifest: "/manifest.json",
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    openGraph: {
      title: "Haal Lab — Private AI Systems",
      description: SITE.description,
      url: `${siteUrl}/${currentLocale}`,
      siteName: SITE.name,
      locale: ogLocales[currentLocale],
      alternateLocale: locales
        .filter((l) => l !== currentLocale)
        .map((l) => ogLocales[l]),
      type: "website",
      images: [
        {
          url: "https://haal-lab.solutions/og-image.png",
          width: 1200,
          height: 630,
          alt: "Haal Lab - Private AI Systems",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Haal Lab — Private AI Systems",
      description: SITE.shortDescription,
      creator: SITE.twitter,
      images: [
        {
          url: "https://haal-lab.solutions/og-image.png",
          alt: "Haal Lab - Private AI Systems",
        },
      ],
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

  // Enable static rendering , must be called BEFORE getMessages()
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
        <ChatAssistant />
      </NextIntlClientProvider>
    </>
  );
}
