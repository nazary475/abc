import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { LocaleRedirect } from "@/components/site/locale-redirect";

/**
 * Root page — redirects to the appropriate locale.
 *
 * With localePrefix: "always" (required for static export), every locale
 * gets a URL prefix including English.
 *
 * Server-side: redirects to /en (default)
 * Client-side: JavaScript detects browser language and redirects accordingly
 * 
 * This approach works with static export (GitHub Pages compatible).
 */

export const metadata: Metadata = {
  title: "Haal Lab — Engineering Intelligent Systems",
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
    title: "Haal Lab — Engineering Intelligent Systems",
    description:
      "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
    url: "https://haal-lab.solutions",
    siteName: "Haal Lab",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haal Lab — Engineering Intelligent Systems",
    description:
      "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
    creator: "@haallab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootPage() {
  // This server-side redirect is a fallback for crawlers/bots
  // Client-side component will detect browser language and redirect
  return <LocaleRedirect />;
}
