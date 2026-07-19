import { NextResponse } from 'next/server';
import { estimateTokens } from '@/lib/html-to-markdown';

export const dynamic = 'force-static';

/**
 * Markdown sitemap for agent discovery
 * Provides a structured table of contents in markdown format
 */
export async function GET() {
  const markdown = `# Haal Lab Site Map

Complete navigation for AI agents and automated tools.

## Main Pages

- [Home](/)
- [About](/en/about)
- [Solutions](/en/solutions)
- [How We Work](/en/how-we-work)
- [Pricing](/en/pricing)
- [Research](/en/research)
- [Network](/en/network)
- [Contact](/en/contact)

## Languages

### English
- [Home](/en)
- [About](/en/about)
- [Solutions](/en/solutions)
- [Contact](/en/contact)

### Deutsch (German)
- [Startseite](/de)
- [Über uns](/de/about)
- [Lösungen](/de/solutions)
- [Kontakt](/de/contact)

### Français (French)
- [Accueil](/fr)
- [À propos](/fr/about)
- [Solutions](/fr/solutions)
- [Contact](/fr/contact)

### Español (Spanish)
- [Inicio](/es)
- [Acerca de](/es/about)
- [Soluciones](/es/solutions)
- [Contacto](/es/contact)

### Italiano (Italian)
- [Home](/it)
- [Chi siamo](/it/about)
- [Soluzioni](/it/solutions)
- [Contatto](/it/contact)

## Research Articles

[View all research articles](/en/research)

### Featured Research
- [Local LLM Stack 2026](/en/research/local-llm-stack-2026)
- [Reranking Pitfalls](/en/research/reranking-pitfalls)
- [GPT Transformer FFN Comparison](/en/research/gpt-transformer-ffn-comparison)

## API & Integrations

- [Chat API](/api/chat) - AI assistant endpoint
- [OpenAPI Specification](/.well-known/openapi.json)
- [AI Plugin Manifest](/.well-known/ai-plugin.json)
- [LLMs.txt](/llms.txt) - LLM-optimized information
- [RSS Feed](/research/feed.xml) - Research articles feed

## Well-Known Resources

- [AI Plugin](/.well-known/ai-plugin.json)
- [OpenAPI](/.well-known/openapi.json)
- [Security](/.well-known/security.txt)

## DNS-AID Discovery

AI agents can discover Haal Lab services via DNS:

- \`_index._agents.haal-lab.solutions\` - Entry point
- \`_chat._mcp._agents.haal-lab.solutions\` - MCP chat
- \`_assistant._https._agents.haal-lab.solutions\` - HTTPS assistant

## Services

**Custom AI Development**
- Private AI systems
- LLM applications
- RAG systems
- AI automation

**AI Infrastructure**
- On-premises deployment
- GPU infrastructure
- Model serving
- Observability

**AI Consulting**
- Strategy
- Architecture
- Technology selection
- Team training

## Technology Stack

**LLM Inference:** GGUF, llama.cpp, vLLM, CUDA  
**Retrieval:** BM25, dense embeddings, BGE-M3, Qdrant  
**Infrastructure:** NVIDIA, Hugging Face, Hetzner, Scaleway  

## Contact

**Email:** hussain.nazary@haal-lab.solutions  
**Website:** https://haal-lab.solutions  
**GitHub:** https://github.com/haal-lab  
**LinkedIn:** https://www.linkedin.com/company/haal-lab

---

**Last Updated:** ${new Date().toISOString().split('T')[0]}  
**Format:** Markdown for Agents  
**Content-Type:** text/markdown
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
