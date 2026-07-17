import { Link } from "@/i18n/routing";
import {
  Cpu,
  MessagesSquare,
  Database,
  ServerCog,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

type Capability = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  overview: string;
  capabilities: string[];
  stack: string[];
};

const CAPABILITIES: Capability[] = [
  {
    id: "local-ai",
    icon: Cpu,
    title: "Local AI Systems",
    tagline: "Private AI solutions that run securely on your infrastructure.",
    overview:
      "We build AI systems that operate entirely inside your environment, on workstations, on-prem servers, or air-gapped clusters. Local execution removes the trust, latency, and compliance constraints of cloud-hosted models, while preserving the full capabilities of modern open-weight LLMs. Our deployments are designed around quantized inference runtimes, GPU/CPU co-scheduling, and hardware-aware model selection so that the system remains responsive on whatever hardware you already own.",
    capabilities: [
      "On-prem inference with GGUF, llama.cpp, vLLM, and TGI",
      "Air-gapped deployment for regulated environments",
      "Hardware-aware quantization (INT4 / INT8 / FP8)",
      "Data sovereignty by architecture, not policy",
      "Offline model registry and version control",
    ],
    stack: ["GGUF", "llama.cpp", "vLLM", "CUDA", "Docker", "Kubernetes"],
  },
  {
    id: "llm-applications",
    icon: MessagesSquare,
    title: "LLM Applications",
    tagline: "Custom AI assistants, agents, and intelligent automation systems.",
    overview:
      "We design and ship LLM applications that go beyond chat, assistants that take action, agents that orchestrate tools, and automation systems that integrate cleanly with your existing software. Every application is built with evaluation harnesses, guardrails, and observability from day one, so behaviour stays predictable as you scale from prototype to production traffic.",
    capabilities: [
      "Agent orchestration with structured tool calling",
      "Tool-augmented LLMs over your internal APIs",
      "Workflow automation with human-in-the-loop safety",
      "Prompt and response evaluation pipelines",
      "Streaming, structured output, and function calling",
    ],
    stack: ["Python", "TypeScript", "OpenAI", "Anthropic", "Open weights", "LangGraph"],
  },
  {
    id: "knowledge-intelligence",
    icon: Database,
    title: "Knowledge Intelligence",
    tagline: "Advanced RAG systems, semantic search, and document intelligence.",
    overview:
      "We build retrieval systems that actually find the right answer. Our RAG pipelines combine dense and sparse retrieval, cross-encoder reranking, query rewriting, and source attribution into a single, observable system. For document-heavy domains we add OCR, layout-aware chunking, and table understanding, so the system works on contracts, research papers, and scanned archives, not just clean text.",
    capabilities: [
      "Hybrid retrieval (BM25 + dense embeddings)",
      "Cross-encoder reranking for precision",
      "Multi-vector and parent-document indexing",
      "OCR + layout-aware document chunking",
      "Source attribution and citation tracking",
    ],
    stack: ["BGE-M3", "Qdrant", "Postgres", "ColPali", "OCR", "rerankers"],
  },
  {
    id: "ai-infrastructure",
    icon: ServerCog,
    title: "AI Infrastructure",
    tagline: "Deployment, optimization, and scalable AI engineering.",
    overview:
      "We build the infrastructure layer that makes AI systems run reliably in production. That means model serving tuned for your hardware, autoscaling that respects GPU memory, observability that surfaces latency and quality drift, and CI/CD pipelines that evaluate models, not just unit tests. The result is an AI platform your team can iterate on without firefighting.",
    capabilities: [
      "Model serving with vLLM, TGI, and Triton",
      "GPU scheduling, batching, and memory tuning",
      "Observability: traces, metrics, evals, drift",
      "Evaluation-driven CI/CD for prompts and models",
      "Cost and throughput optimization",
    ],
    stack: ["vLLM", "Triton", "Prometheus", "OpenTelemetry", "Kubernetes", "Terraform"],
  },
];

const ENGAGEMENT_STEPS: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with the problem, not the model. A focused engagement to understand constraints, data, success criteria, and the production environment the system will live in.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "We design the system end-to-end, model choices, retrieval strategy, infrastructure, evaluation harness, and pressure-test it against your real workloads before committing.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Engineering in small, demonstrable increments. You see working software early and often, with evaluation reports attached to every milestone.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "We ship to your environment, cloud, on-prem, or air-gapped, with the observability, runbooks, and documentation your team needs to operate it confidently.",
  },
];

export function SolutionsPage() {
  return (
    <>
      <PageHeader pageKey="solutions" />

      {/* Capability deep-dives */}
      <div className="hl-container hl-section-pad divide-y divide-hl-border">
        {CAPABILITIES.map((cap, idx) => (
          <section key={cap.id} id={cap.id} className="py-10 md:py-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                      {String(idx + 1).padStart(2, "0")} / Capability
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {cap.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-hl-muted">
                    {cap.tagline}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <p className="text-base leading-relaxed text-foreground/90">
                    {cap.overview}
                  </p>

                  <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                    What we deliver
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {cap.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-foreground/90">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-hl-cyan" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                    Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cap.stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full border border-hl-border bg-hl-surface-2 px-2.5 py-1 font-mono text-[11px] tracking-wide text-hl-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Engagement model */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Engagement</Eyebrow>
            <SectionHeading className="mt-4">How we work</SectionHeading>
            <Lead className="mt-4">
              A four-stage engagement model designed to de-risk AI projects, and to leave
              your team with a system they can operate and extend.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border md:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <article className="h-full bg-hl-surface/80 p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-cyan">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-hl-border bg-hl-surface/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Want a deeper walkthrough?
              </h3>
              <p className="mt-1 text-sm text-hl-muted">
                We can map any of these capabilities to your specific use case in a 45-minute call.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-5 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
