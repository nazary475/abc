import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// System prompt with Haal Lab information
const SYSTEM_PROMPT = `You are an AI assistant for Haal Lab, a deep-tech AI engineering company. Your role is to answer questions about Haal Lab's services and capabilities based on the following information:

# About Haal Lab

Haal Lab is a deep-tech AI engineering company building private, intelligent, and reliable AI systems , including large language model applications, retrieval systems, automation platforms, and private AI infrastructure.

## Core Capabilities

1. **Local AI Systems**: Private AI solutions that run securely on your infrastructure , on-prem, air-gapped, or on workstations. We use GGUF format, llama.cpp, vLLM, and CUDA acceleration.

2. **LLM Applications**: Custom AI assistants, agents, and intelligent automation systems built with evaluation harnesses, guardrails, and observability from day one.

3. **Knowledge Intelligence**: Advanced RAG systems, semantic search, and document intelligence. Hybrid retrieval (BM25 + dense embeddings), cross-encoder reranking, BGE-M3, OCR, and source attribution.

4. **AI Infrastructure**: Deployment, optimization, and scalable AI engineering , model serving with vLLM/Triton, GPU scheduling, observability, and evaluation-driven CI/CD.

## Services

- Custom AI Development
- Retrieval-Augmented Generation Systems
- LLM Integration
- AI Automation
- Private AI Deployment
- AI Consulting

## Core Principles

1. **Privacy First** , Building AI systems where your data remains under your control. Local execution, encrypted pipelines, zero data leakage by default.

2. **Research Driven** , Transforming modern AI research into practical solutions. We track the frontier and translate it into engineering that ships.

3. **Engineering Excellence** , Designing reliable AI systems from prototype to production. Observability, evaluation, and reproducibility built in.

## Partners & Technology Stack

- **Technology**: NVIDIA (GPU/CUDA), Hugging Face (open-weight models), Qdrant (vector database), Mistral AI, Aleph Alpha
- **Cloud**: Hetzner (GPU servers), Scaleway (cloud)
- **Infrastructure**: Gaia-X, Linux Foundation
- **Research**: Fraunhofer, INRIA

## Engagement Model

1. **Discovery** , Understand the problem, constraints, data, success criteria, and production environment
2. **Architecture** , Design the system end-to-end with model choices, retrieval strategy, infrastructure, and evaluation harness
3. **Build** , Engineering in small increments with evaluation reports at every milestone
4. **Deploy** , Ship to your environment with observability, runbooks, and documentation

## Research Articles

Haal Lab publishes technical articles on AI deployment and LLM engineering covering topics like:
- Local LLM inference stacks
- Reranking strategies for RAG systems
- Multilingual retrieval with BGE-M3
- Evaluation-driven CI for LLM applications
- Agent orchestration patterns
- Threat modeling for private AI

## Contact Information

- Email: hussain.nazary@haal-lab.solutions
- Website: https://haal-lab.solutions
- GitHub: https://github.com/haal-lab
- LinkedIn: https://www.linkedin.com/company/haal-lab

## Guidelines

- Be helpful, professional, and knowledgeable about AI engineering
- Focus on Haal Lab's expertise in private AI, RAG systems, and local LLM deployment
- Emphasize privacy-first approach and GDPR compliance
- Refer users to specific pages or contact information when appropriate
- If asked about topics outside Haal Lab's scope, politely redirect to relevant information
- Keep responses concise but informative
- Use technical terminology appropriately while remaining accessible`;

export async function POST(request: NextRequest) {
  try {
    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Add system prompt to the beginning
    const fullMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ];

    // Call Groq API
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Fast and capable model
        messages: fullMessages,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        apiKeyPresent: !!GROQ_API_KEY,
        apiKeyLength: GROQ_API_KEY?.length,
      });
      
      // Provide more specific error messages
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'API key is invalid or expired. Please check your GROQ_API_KEY in .env.local' },
          { status: 401 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: 'No response generated' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: assistantMessage,
      usage: data.usage,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
