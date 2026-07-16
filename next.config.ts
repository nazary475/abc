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
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages, not for Vercel
  ...(isVercel ? {} : { output: "export" }),
  trailingSlash: true,
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
};

export default withNextIntl(nextConfig);
