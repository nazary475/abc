import { redirect } from "next/navigation";
import type { Metadata } from "next";

/**
 * Root page - redirects to the default locale.
 *
 * On Vercel: Dynamic server-side redirect with Accept-Language detection
 * On static export: Static redirect to /en
 * 
 * This ensures crawlers see proper content without "Loading..." states.
 */

// Detect if we're in static export mode
const isStatic = process.env.VERCEL === undefined;

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

export default function RootPage() {
  // Simple redirect to default locale (English)
  // For Vercel, middleware can handle locale detection
  redirect("/en");
}
