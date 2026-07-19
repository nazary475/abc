import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { estimateTokens } from '@/lib/html-to-markdown';
import { locales } from '@/i18n/routing';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Markdown endpoint for about page
 * Serves markdown version when Accept: text/markdown is sent
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });

  const markdown = `---
title: ${t('metaTitle')}
description: ${t('metaDescription')}
url: https://haal-lab.solutions/${locale}/about
locale: ${locale}
---

# ${t('title')}

${t('description')}

## Our Mission

${t('missionDescription')}

## Core Principles

### Privacy First
${t('privacyFirstDescription')}

Your data remains under your control. We build AI systems that run on your infrastructure — on-premises, air-gapped, or on dedicated workstations. Local execution, encrypted pipelines, and zero data leakage by default.

### Research Driven
${t('researchDrivenDescription')}

We track the AI research frontier and translate cutting-edge developments into production-ready engineering. From transformer architectures to retrieval strategies, we turn papers into practical systems.

### Engineering Excellence
${t('engineeringExcellenceDescription')}

We design reliable AI systems from prototype to production. Observability, evaluation harnesses, and reproducibility are built in from day one, not bolted on later.

## Team

### Hussain Nazary
**CTO & AI Engineer**

Deep-tech AI engineering with focus on private AI systems, LLM applications, and AI infrastructure. Expertise in RAG systems, local AI deployment, and evaluation-driven development.

**Contact:** hussain.nazary@haal-lab.solutions

### Ali Zafar Najafi
**Advisor**

Strategic advisor with expertise in AI systems and technology consulting.

### Jaafar Najafi-Rad
**Advisor**

Strategic advisor with focus on AI deployment and business strategy.

## Technology Stack

**LLM Inference:**
- GGUF format, llama.cpp
- vLLM, CUDA acceleration
- GPU scheduling and optimization

**Retrieval Systems:**
- Hybrid search (BM25 + dense embeddings)
- Cross-encoder reranking
- BGE-M3 multilingual retrieval
- Qdrant vector database

**Infrastructure:**
- NVIDIA GPU/CUDA
- Hugging Face open-weight models
- Cloud providers (Hetzner, Scaleway)
- GDPR-compliant deployment

## Partners

**Technology:** NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha  
**Cloud:** Hetzner, Scaleway  
**Infrastructure:** Gaia-X, Linux Foundation  
**Research:** Fraunhofer, INRIA

## Contact

**Email:** hussain.nazary@haal-lab.solutions  
**Website:** https://haal-lab.solutions  
**GitHub:** https://github.com/haal-lab  
**LinkedIn:** https://www.linkedin.com/company/haal-lab

---

**Haal Lab** — Building the future of private AI systems
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
