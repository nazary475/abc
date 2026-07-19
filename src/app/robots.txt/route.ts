const SITE_URL = "https://haal-lab.solutions";

// Required for static export (output: "export") compatibility.
export const dynamic = "force-static";

/**
 * robots.txt for Haal Lab Solutions.
 *
 * Served as a plain Route Handler (rather than via the typed
 * MetadataRoute.Robots / app/robots.ts convention) because Next.js's
 * Robots type has no field for the Content-Signal directive
 * (https://contentsignals.org/, IETF draft-romm-aipref-contentsignals).
 * A route handler lets us emit that raw line ourselves.
 *
 * Content-Signal declares Haal Lab's preferences for how content may be
 * used *after* it's been fetched (separate from crawl access, which is
 * still governed by the Allow/Disallow rules below):
 *   - search=yes    content may be indexed and shown in search results
 *   - ai-train=yes  content may be used to train/fine-tune AI models
 *   - ai-input=yes  content may be used as live input to AI agents (RAG)
 *
 * These are voluntary, unenforced signals honored by cooperating crawlers.
 */
const ROBOTS_TXT = `User-agent: *
Content-Signal: ai-train=yes, search=yes, ai-input=yes
Allow: /
Allow: /_next/static/
Disallow: /api/
Disallow: /_next/data/

# ——— OpenAI (US) ———
User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# ——— Anthropic (US) ———
# ClaudeBot / Claude-User / Claude-SearchBot replaced the older
# anthropic-ai / Claude-Web tokens, deprecated by Anthropic in 2024.
User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

# ——— Google (US) ———
User-agent: Google-Extended
Allow: /

# ——— Perplexity (US) ———
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# ——— Amazon (US) ———
User-agent: Amazonbot
Allow: /

# ——— Apple (US) ———
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# ——— Meta (US) ———
User-agent: meta-externalagent
Allow: /

User-agent: FacebookBot
Allow: /

# ——— xAI (US) ———
# Grok's crawler token is not yet documented in an official xAI
# robots.txt spec; third-party trackers report it as GrokBot.
User-agent: GrokBot
Allow: /

# ——— Common Crawl (US non-profit; feeds many open-source and
# commercial models, including several listed above) ———
User-agent: CCBot
Allow: /

# ——— DuckDuckGo (US) ———
User-agent: DuckAssistBot
Allow: /

# ——— You.com (US) ———
User-agent: YouBot
Allow: /

# ——— Mistral AI (France / EU) ———
User-agent: MistralAI-User
Allow: /

# ——— ByteDance (China) ———
# Note: Bytespider has a mixed compliance record with robots.txt;
# an Allow rule here states intent but isn't a technical guarantee.
User-agent: Bytespider
Allow: /

# ——— Baidu (China) ———
User-agent: Baiduspider
Allow: /

# ——— Alibaba / Qwen (China) ———
# Third-party-tracked token, not from an official Alibaba robots.txt spec.
User-agent: QwenBot
Allow: /

# ——— Zhipu AI / GLM (China) ———
# Third-party-tracked token, not from an official Zhipu AI robots.txt spec.
User-agent: ChatGLM-Spider
Allow: /

# ——— DeepSeek (China) ———
# Third-party-tracked token, not from an official DeepSeek robots.txt spec.
User-agent: DeepSeekBot
Allow: /

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/research-sitemap.xml
`;

export async function GET() {
  return new Response(ROBOTS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
