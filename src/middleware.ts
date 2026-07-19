import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing, locales } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

/**
 * Middleware for:
 * 1. Content negotiation (Markdown for Agents)
 * 2. Link response headers for agent discovery (RFC 8288)
 * 3. Internationalization
 */
export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // Check if agent is requesting markdown (Accept: text/markdown)
  if (acceptHeader.includes("text/markdown")) {
    // Rewrite to markdown endpoint if it exists
    // Pattern: /en/about -> /en/about/md
    // Ensure the path has a locale prefix before appending /md
    const hasLocalePrefix = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    const basePath = hasLocalePrefix ? pathname : `/en${pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = `${basePath}/md`;
    return NextResponse.rewrite(url);
  }

  // Apply internationalization middleware
  const response = intlMiddleware(request);

  // Add Link headers for agent discovery
  // These help agents discover available resources and APIs
  response.headers.set(
    "Link",
    [
      // AI plugin manifest
      '</.well-known/ai-plugin.json>; rel="ai-plugin"; type="application/json"',
      // OpenAPI specification
      '</.well-known/openapi.json>; rel="service-desc"; type="application/json"',
      // LLMs.txt
      '</llms.txt>; rel="ai-plugin"; type="text/plain"',
      // RSS feed for research
      '</research/feed.xml>; rel="alternate"; type="application/rss+xml"',
      // Security policy
      '</.well-known/security.txt>; rel="security-policy"',
    ].join(", ")
  );

  return response;
}

// Apply middleware to all routes except static files and API routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
