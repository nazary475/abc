import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Next.js config for Vercel production deployment with multilingual support.
 * 
 * PRODUCTION (haal-lab.solutions on Vercel):
 * - Standard Next.js SSG/SSR mode for full HTML rendering
 * - No static export, no trailing slashes
 * - All pages server-rendered or statically generated with full content
 * 
 * This ensures crawlers (Google, Bing, AI chatbots) receive complete HTML
 * on first byte, not a client-rendered shell.
 */

const nextConfig: NextConfig = {
  // No output: "export" - use standard Next.js rendering for Vercel production
  // This ensures pages are server-rendered or statically generated with full content
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "*.space-z.ai",
    "*.preview-chat-*.space-z.ai",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
  // RFC 8288 Link headers for agent discovery
  async headers() {
    return [
      {
        // Apply to homepage and all locale homepages
        source: "/:locale(en|de|fr|es|it)?",
        headers: [
          {
            key: "Link",
            value: [
              // AI agent discovery (llms.txt format)
              '</llms.txt>; rel="ai-plugin"; type="text/plain"',
              // AI plugin manifest
              '</.well-known/ai-plugin.json>; rel="ai-plugin"; type="application/json"',
              // OpenAPI specification for API documentation
              '</.well-known/openapi.json>; rel="service-desc"; type="application/json"',
              // RSS feed for research content
              '</research/feed.xml>; rel="alternate"; type="application/rss+xml"; title="Research Feed"',
              // Security policy
              '</.well-known/security.txt>; rel="security-policy"',
              // Web app manifest
              '</manifest.json>; rel="manifest"',
            ].join(", "),
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
