import type { MetadataRoute } from "next";

const SITE_URL = "https://haal-lab.solutions";

// Required for static export (output: "export") compatibility.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
    // Include llms.txt for AI crawlers (GEO best practice)
    // Note: the `host` and other fields above are standard;
    // llms.txt is fetched at /llms.txt by AI engines that support it.
  };
}
