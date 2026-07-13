import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";

const SITE_URL = "https://haal-lab.solutions";

// Required for static export (output: "export") compatibility.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/network", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/research", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  const now = new Date();

  // Generate URLs for all locales
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const url = `${SITE_URL}/${locale}${route.path}`;
      // Add hreflang alternates for the first locale entry of each route
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = `${SITE_URL}/${altLocale}${route.path}`;
      }

      entries.push({
        url,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
