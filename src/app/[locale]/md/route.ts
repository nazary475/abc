import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { estimateTokens } from '@/lib/html-to-markdown';
import { locales } from '@/i18n/routing';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Markdown endpoint for homepage
 * Serves markdown version when Accept: text/markdown is sent
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'homePage' });

  // Create markdown content for homepage
  const markdown = `---
title: ${t('metaTitle')}
description: ${t('metaDescription')}
url: https://haal-lab.solutions/${locale}
locale: ${locale}
---

# ${t('heroTitle')}

${t('heroDescription')}

## Services

### Custom AI Development
Build private AI systems tailored to your infrastructure and requirements.

### RAG Systems
Advanced retrieval-augmented generation with hybrid search and reranking.

### LLM Applications
Production-grade LLM applications with evaluation, guardrails, and observability.

### AI Infrastructure
Deploy, optimize, and scale AI systems on your infrastructure.

## Why Haal Lab?

### Privacy First
Your data stays on your infrastructure. Local execution, encrypted pipelines, zero data leakage.

### Research Driven
Transform modern AI research into practical solutions that ship.

### Engineering Excellence
Reliable AI systems from prototype to production with observability and evaluation.

## Get Started

Ready to build private AI systems?

**Contact:** hussain.nazary@haal-lab.solutions  
**Website:** https://haal-lab.solutions  
**Research:** https://haal-lab.solutions/${locale}/research

---

**Haal Lab** — Private AI Systems
`;

  const tokens = estimateTokens(markdown);

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Markdown-Tokens': tokens.toString(),
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
