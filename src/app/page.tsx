import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { headers } from "next/headers";

/**
 * Root page - performs server-side redirect to appropriate locale.
 *
 * On Vercel: Uses Accept-Language header to redirect server-side
 * On static export: Falls back to /en
 * 
 * This ensures crawlers see proper content without "Loading..." states.
 */

// Detect locale from Accept-Language header
function getPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return "en";
  
  // Parse Accept-Language header (e.g., "en-US,en;q=0.9,de;q=0.8")
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [locale, q = "q=1"] = lang.trim().split(";");
      const quality = parseFloat(q.split("=")[1] || "1");
      return { locale: locale.toLowerCase().split("-")[0], quality };
    })
    .sort((a, b) => b.quality - a.quality);
  
  // Supported locales
  const supportedLocales = ["en", "de", "fr", "es", "it"];
  
  for (const { locale } of languages) {
    if (supportedLocales.includes(locale)) {
      return locale;
    }
  }
  
  return "en"; // Default fallback
}

export const metadata: Metadata = {
  title: "Haal Lab , Engineering Intelligent Systems",
  description:
    "Deep-tech AI engineering company. We build private AI systems, LLM applications, RAG, and AI infrastructure for European organizations.",
  metadataBase: new URL("https://haal-lab.solutions"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      de: "/de",
      fr: "/fr",
      es: "/es",
      it: "/it",
    },
  },
  openGraph: {
    title: "Haal Lab , Engineering Intelligent Systems",
    description:
      "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
    url: "https://haal-lab.solutions",
    siteName: "Haal Lab",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haal Lab , Engineering Intelligent Systems",
    description:
      "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
    creator: "@haallab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootPage() {
  // Server-side redirect based on Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);
  
  redirect(`/${locale}`);
}
