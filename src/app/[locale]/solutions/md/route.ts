import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { estimateTokens } from '@/lib/html-to-markdown';
import { locales } from '@/i18n/routing';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Markdown endpoint for solutions page
 * Serves markdown version when Accept: text/markdown is sent
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'solutionsPage' });

  const markdown = `---
title: Solutions — Haal Lab
description: Private AI solutions for European organizations
url: https://haal-lab.solutions/${locale}/solutions
locale: ${locale}
---

# AI Solutions

Private, intelligent, and reliable AI systems for your organization.

## Local AI Systems

**Run AI privately on your infrastructure**

Deploy AI models on-premises, air-gapped, or on dedicated workstations. Full data sovereignty with zero external dependencies.

**Technologies:**
- GGUF format models
- llama.cpp for CPU/GPU inference
- vLLM for high-throughput serving
- CUDA acceleration
- Quantization (4-bit, 8-bit)

**Use cases:**
- Sensitive document processing
- Internal knowledge bases
- Compliance-critical applications
- Air-gapped environments

## LLM Applications

**Custom AI assistants and automation**

Build production-grade LLM applications with evaluation harnesses, guardrails, and observability from day one.

**Features:**
- Custom AI assistants
- Intelligent automation
- Multi-agent orchestration
- Prompt engineering
- Output validation
- Cost tracking

**Examples:**
- Document intelligence
- Code generation
- Data extraction
- Report generation

## Knowledge Intelligence

**Advanced RAG and semantic search**

Retrieval-augmented generation systems with hybrid search, reranking, and source attribution.

**Architecture:**
- BM25 keyword search
- Dense vector embeddings
- Cross-encoder reranking
- BGE-M3 multilingual retrieval
- OCR integration
- Source attribution

**Applications:**
- Enterprise search
- Document Q&A
- Research assistance
- Knowledge management

## AI Infrastructure

**Deploy, optimize, and scale AI systems**

Production AI infrastructure with model serving, GPU scheduling, and observability.

**Services:**
- Model deployment (vLLM, Triton)
- GPU resource management
- Load balancing
- Monitoring and logging
- Evaluation CI/CD
- Performance optimization

**Platforms:**
- On-premises deployment
- European cloud (Hetzner, Scaleway)
- Hybrid infrastructure
- Edge deployment

## Engagement Model

### 1. Discovery
Understand your problem, constraints, data, success criteria, and production environment.

### 2. Architecture
Design the end-to-end system with model choices, retrieval strategy, infrastructure, and evaluation harness.

### 3. Build
Engineer in small increments with evaluation reports at every milestone.

### 4. Deploy
Ship to your environment with observability, runbooks, and documentation.

## Why Choose Haal Lab?

**Privacy First:** Your data stays under your control  
**Research Driven:** Latest AI research in production systems  
**Engineering Excellence:** Reliable, observable, evaluated systems  
**European Focus:** GDPR-compliant, sovereign infrastructure  
**Open Ecosystem:** Open-weight models, open-source tools  

## Get Started

**Email:** hussain.nazary@haal-lab.solutions  
**Schedule:** Book a discovery call  
**Research:** Read our technical articles at /research

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
