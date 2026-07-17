import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { getAllArticles } from "@/lib/research-articles";

const SITE_URL = "https://haal-lab.solutions";

// Required for static export (output: "export") compatibility.
export const dynamic = "force-static";

/**
 * Sitemap configuration for Haal Lab Solutions.
 * 
 * Comprehensive sitemap with:
 * - All localized pages (en, de, fr, es, it)
 * - Individual research articles
 * - SEO-optimized priorities and change frequencies
 * - hreflang alternates for international SEO
 * - Proper last modified dates
 * 
 * Priority Guidelines:
 * 1.0 = Homepage (most important)
 * 0.9 = Core business pages (Solutions)
 * 0.8 = Important content (Projects, Network, Pricing, Research Articles)
 * 0.7 = Regularly updated content (Research Index)
 * 0.6 = Company info (About)
 * 0.5 = Contact and support pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { 
      path: "", 
      priority: 1.0, 
      changeFrequency: "weekly" as const,
      description: "Homepage - Haal Lab Solutions" 
    },
    { 
      path: "/solutions", 
      priority: 0.9, 
      changeFrequency: "monthly" as const,
      description: "AI Solutions & Services" 
    },
    { 
      path: "/pricing", 
      priority: 0.85, 
      changeFrequency: "monthly" as const,
      description: "Pricing Plans & Packages" 
    },
    {
      path: "/how-we-work",
      priority: 0.8,
      changeFrequency: "weekly" as const,
      description: "How We Work - AI Engineering Process"
    },
    { 
      path: "/network", 
      priority: 0.8, 
      changeFrequency: "monthly" as const,
      description: "Partner Network & Collaborations" 
    },
    { 
      path: "/research", 
      priority: 0.7, 
      changeFrequency: "weekly" as const,
      description: "Research & Innovation" 
    },
    { 
      path: "/about", 
      priority: 0.6, 
      changeFrequency: "monthly" as const,
      description: "About Haal Lab" 
    },
    { 
      path: "/contact", 
      priority: 0.5, 
      changeFrequency: "monthly" as const,
      description: "Contact Us" 
    },
  ];

  // Use current date for lastModified
  // In production, you might want to track actual modification dates
  const now = new Date();

  // Generate URLs for all locales with proper hreflang alternates
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const url = `${SITE_URL}/${locale}${route.path}`;
      
      // Create hreflang alternates for international SEO
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = `${SITE_URL}/${altLocale}${route.path}`;
      }
      
      // Add x-default for search engines to use as fallback
      alternates["x-default"] = `${SITE_URL}/en${route.path}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { 
          languages: alternates 
        },
      });
    }
  }

  // Add individual research articles
  const articles = getAllArticles();
  for (const article of articles) {
    for (const locale of locales) {
      const url = `${SITE_URL}/${locale}/research/${article.id}`;
      
      // Create hreflang alternates for each article
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = `${SITE_URL}/${altLocale}/research/${article.id}`;
      }
      alternates["x-default"] = `${SITE_URL}/en/research/${article.id}`;

      entries.push({
        url,
        lastModified: new Date(article.date),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { 
          languages: alternates 
        },
      });
    }
  }

  return entries;
}
