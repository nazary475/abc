import { NextRequest, NextResponse } from 'next/server';
import { estimateTokens } from '@/lib/html-to-markdown';
import { locales } from '@/i18n/routing';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Markdown endpoint for contact page
 * Serves markdown version when Accept: text/markdown is sent
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;

  const markdown = `---
title: Contact — Haal Lab
description: Get in touch with Haal Lab for AI consulting and development
url: https://haal-lab.solutions/${locale}/contact
locale: ${locale}
---

# Contact Haal Lab

Let's discuss your AI project.

## Get in Touch

**Email:** hussain.nazary@haal-lab.solutions  
**Website:** https://haal-lab.solutions  
**GitHub:** https://github.com/haal-lab  
**LinkedIn:** https://www.linkedin.com/company/haal-lab

## What We Discuss

- Private AI system requirements
- LLM application architecture
- RAG system design
- AI infrastructure planning
- Model selection and deployment
- Evaluation strategies
- GDPR compliance and data sovereignty

## Our Approach

1. **Discovery Call** — Understand your requirements, constraints, and goals
2. **Architecture Proposal** — Design end-to-end system with technology choices
3. **Pilot Project** — Small scope to validate approach and establish collaboration
4. **Full Development** — Iterative engineering with evaluation at each milestone
5. **Deployment** — Production deployment with documentation and knowledge transfer

## Typical Projects

**Custom AI Development**
- 4-12 weeks
- Private LLM deployment
- Custom RAG systems
- AI automation pipelines

**AI Consulting**
- Strategic planning
- Architecture review
- Technology selection
- Team training

**Infrastructure Setup**
- On-premises AI deployment
- GPU infrastructure
- Model serving setup
- Monitoring and observability

## Office

**Haal Lab**  
Berlin, Germany  
European Union

## Response Time

We typically respond within 24 hours on business days.

For urgent inquiries, please mention "URGENT" in your subject line.

## Research & Blog

Stay updated with our latest research and technical articles:

**Research:** https://haal-lab.solutions/${locale}/research  
**RSS Feed:** https://haal-lab.solutions/research/feed.xml

Topics we write about:
- Local LLM deployment
- RAG system architecture
- Evaluation strategies
- Multilingual retrieval
- Agent orchestration
- Private AI infrastructure

---

**Haal Lab** — Private AI Systems for European Organizations
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
