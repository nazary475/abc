import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Next.js config for GitHub Pages deployment (static export) with
 * multilingual support via next-intl.
 *
 * - `output: "export"` generates a fully static site in `out/`.
 * - `trailingSlash: true` produces `/solutions/index.html` so GitHub
 *   Pages resolves URLs without a server.
 * - `images.unoptimized: true` disables the Next.js image optimization
 *   server (not available on static hosts).
 * - `basePath` is read from `NEXT_PUBLIC_BASE_PATH` for project pages.
 * - `allowedDevOrigins` allows the preview proxy to serve /_next/* assets
 *   in dev mode.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Detect if we're building for static export (GitHub Pages) or server (Vercel)
// If VERCEL environment variable exists, we're on Vercel and should NOT use static export
const isVercel = !!process.env.VERCEL;

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages, not for Vercel
  ...(isVercel ? {} : { output: "export" }),
  // Don't use trailing slash on Vercel (causes issues with API routes)
  trailingSlash: !isVercel,
  basePath: basePath || undefined,
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
