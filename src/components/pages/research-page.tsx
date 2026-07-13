import { Link } from "@/i18n/routing";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
  Tag,
} from "@/components/blocks/primitives";

type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: "Experiments" | "Insights" | "Engineering";
  date: string;
  readTime: string;
  tags: string[];
};

const ARTICLES: Article[] = [
  {
    id: "local-llm-stack-2026",
    title: "A practical stack for local LLM inference in 2026",
    excerpt:
      "A field-tested walkthrough of the runtimes, quantization formats, and retrieval layers we deploy when an organization needs open-weight LLMs running entirely on their own hardware.",
    category: "Engineering",
    date: "2026-06-21",
    readTime: "14 min",
    tags: ["LLMs", "GGUF", "vLLM", "Local AI"],
  },
  {
    id: "reranking-pitfalls",
    title: "Where rerankers actually help — and where they don't",
    excerpt:
      "Cross-encoder rerankers are now table stakes in RAG pipelines, but they are not free. We break down the latency, recall, and cost tradeoffs across four production deployments.",
    category: "Experiments",
    date: "2026-05-30",
    readTime: "11 min",
    tags: ["RAG", "Reranking", "Retrieval"],
  },
  {
    id: "bge-m3-multilingual",
    title: "BGE-M3 in production: multilingual retrieval at scale",
    excerpt:
      "Notes from deploying BGE-M3 across a multilingual legal corpus — what worked, what broke, and how we tuned dense, sparse, and ColBERT-style representations for real workloads.",
    category: "Insights",
    date: "2026-05-12",
    readTime: "9 min",
    tags: ["BGE-M3", "Vector Database", "Multilingual"],
  },
  {
    id: "eval-driven-llm-ci",
    title: "Evaluation-driven CI for LLM applications",
    excerpt:
      "Why we treat prompts and model choices like code — versioned, reviewed, and gated by automated evaluations on every commit. The harness we use, and how to bootstrap your own.",
    category: "Engineering",
    date: "2026-04-18",
    readTime: "13 min",
    tags: ["Evaluation", "CI/CD", "LLMs"],
  },
  {
    id: "agent-orchestration-patterns",
    title: "Three patterns for agent orchestration that survived production",
    excerpt:
      "A short catalog of agent topologies — router, planner-executor, critic — with notes on which ones held up under real tool-call latency and failure modes.",
    category: "Experiments",
    date: "2026-03-22",
    readTime: "10 min",
    tags: ["Agents", "LLMs", "Orchestration"],
  },
  {
    id: "private-ai-threat-model",
    title: "Threat modeling for private AI deployments",
    excerpt:
      "Building AI on your own hardware eliminates some risks and introduces others. A practical threat model for on-prem LLM systems, including model supply chain and prompt-injection surfaces.",
    category: "Insights",
    date: "2026-02-14",
    readTime: "12 min",
    tags: ["Privacy", "Security", "Local AI"],
  },
];

const CATEGORIES = ["All", "Engineering", "Experiments", "Insights"] as const;

export function ResearchPage() {
  return (
    <>
      <PageHeader pageKey="research" />

      {/* Articles list */}
      <SectionShell className="border-t border-hl-border">
        {/* Category filter (visual only) */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={`inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider ${
                  i === 0
                    ? "border-hl-cyan/40 bg-hl-cyan/10 text-hl-cyan"
                    : "border-hl-border bg-hl-surface/40 text-hl-muted"
                }`}
              >
                {c}
              </span>
            ))}
            <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-hl-muted">
              {ARTICLES.length} articles
            </span>
          </div>
        </Reveal>

        <ul className="mt-10 divide-y divide-hl-border">
          {ARTICLES.map((a, i) => (
            <Reveal as="li" key={a.id} delay={i * 0.04}>
              <article className="group grid grid-cols-1 gap-4 py-7 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-hl-muted">
                    {formatDate(a.date)}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-hl-muted/80">
                    <Clock className="h-3 w-3" />
                    {a.readTime}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-hl-border bg-hl-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-hl-cyan">
                      {a.category}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-hl-cyan md:text-2xl">
                    {a.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-hl-muted">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {a.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>

                <div className="flex items-start justify-end md:col-span-1">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all group-hover:border-hl-cyan/40 group-hover:text-hl-cyan">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </SectionShell>

      {/* Subscribe CTA */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-hl-border bg-hl-surface/60 p-10 md:p-14 hl-card-glow">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-hl-cyan/10 blur-3xl" />
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Eyebrow>Stay current</Eyebrow>
                <SectionHeading className="mt-4">
                  We publish when we have something to say.
                </SectionHeading>
                <Lead className="mt-4">
                  No newsletter spam, no growth funnels. Just technical writing on the AI
                  systems we are actually building — sent when there is something worth reading.
                </Lead>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-hl-cyan px-5 py-3 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 sm:w-auto"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
