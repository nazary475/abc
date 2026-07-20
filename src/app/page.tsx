import { redirect } from "next/navigation";
import type { Metadata } from "next";

/**
 * Root page - redirects to the default locale (/en).
 * 
 * Server-side redirect ensures crawlers immediately see proper content
 * without client-side JavaScript or "Loading..." placeholders.
 */

export const metadata: Metadata = {
  title: "Haal Lab — Private AI Systems",
  description:
    "On-premises AI systems. We build private LLMs, RAG systems, and custom AI applications deployed on your infrastructure with full data sovereignty.",
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
    title: "Haal Lab — Private AI Systems",
    description:
      "On-premises AI systems. Private LLMs, RAG systems, and custom AI applications.",
    url: "https://haal-lab.solutions",
    siteName: "Haal Lab",
    locale: "en",
    type: "website",
    images: [
      {
        url: "https://haal-lab.solutions/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haal Lab — Private AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haal Lab — Private AI Systems",
    description:
      "On-premises AI systems. Private LLMs, RAG systems, and custom AI applications.",
    creator: "@haallab",
    images: ["https://haal-lab.solutions/og-image.png"],
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
