import { Link } from "@/i18n/routing";
import { ArrowUpRight, Cpu, FileSearch, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Tag,
} from "@/components/blocks/primitives";

type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  architecture: { label: string; value: string }[];
};

const PROJECTS: Project[] = [
  {
    id: "gguf-loader",
    name: "GGUF Loader",
    category: "Local AI Platform",
    summary:
      "An offline AI platform enabling users to run large language models locally with privacy and control.",
    problem:
      "Running capable open-weight LLMs locally has historically required deep expertise — manual quantization, fragmented runtimes, GPU/CPU juggling, and no clean way to add retrieval. Most users gave up and routed private data through cloud APIs.",
    approach:
      "GGUF Loader packages the entire local-inference stack behind a single interface: model loading via the GGUF format, CUDA-accelerated inference through llama.cpp, a retrieval layer for grounded answers, and a clean API for tool integration. The system is hardware-aware — it picks the right quantization, context length, and batch size for the GPU it detects.",
    outcome:
      "A platform that turns local LLM deployment from a research project into a one-step operation — without surrendering data to a third-party endpoint.",
    tags: ["Python", "LLMs", "GGUF", "RAG", "CUDA"],
    architecture: [
      { label: "Runtime", value: "llama.cpp" },
      { label: "Format", value: "GGUF" },
      { label: "Retrieval", value: "RAG" },
      { label: "Acceleration", value: "CUDA" },
    ],
  },
  {
    id: "legal-intelligence",
    name: "Legal Intelligence System",
    category: "Semantic Retrieval",
    summary:
      "A semantic retrieval system designed for complex document analysis and knowledge discovery.",
    problem:
      "Legal corpora are hostile to naive search. Documents span decades, mix scanned PDFs with structured text, cite each other across jurisdictions, and use terminology that defeats keyword retrieval. Lawyers waste hours finding the paragraph they already half-remember.",
    approach:
      "The system ingests heterogeneous legal documents through an OCR + layout-aware pipeline, embeds them with BGE-M3 for multilingual dense + sparse representations, indexes them in a vector database tuned for high-recall retrieval, and applies a cross-encoder reranker on the shortlist. The result is search that understands intent — not just keywords — across contracts, statutes, and case law.",
    outcome:
      "A retrieval system that returns the right clause, in the right document, with citation — even when the query is paraphrased, multilingual, or spans multiple documents.",
    tags: ["BGE-M3", "Vector Database", "Reranking", "OCR"],
    architecture: [
      { label: "Embedder", value: "BGE-M3" },
      { label: "Index", value: "Vector DB" },
      { label: "Precision", value: "Reranking" },
      { label: "Ingest", value: "OCR" },
    ],
  },
];

const CAPABILITIES_TEASER: { title: string; description: string; icon: typeof Cpu }[] = [
  {
    title: "From prototype to production",
    description:
      "Every project we ship is built to operate — not just to demo. Evaluation, observability, and documentation are part of the deliverable.",
    icon: Cpu,
  },
  {
    title: "Open and extensible by default",
    description:
      "We build on open-weight models and open-source infrastructure. You own the system, the weights, and the data — no platform lock-in.",
    icon: FileSearch,
  },
];

export function ProjectsPage() {
  return (
    <>
      <PageHeader pageKey="projects" />

      {/* Projects */}
      <div className="hl-container hl-section-pad divide-y divide-hl-border">
        {PROJECTS.map((p, idx) => (
          <section key={p.id} id={p.id} className="py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-cyan">
                  {String(idx + 1).padStart(2, "0")} / {p.category}
                </span>
                <span className="h-px flex-1 bg-hl-border" />
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/90">
                    {p.summary}
                  </p>

                  <div className="mt-8 rounded-2xl border border-hl-border bg-hl-surface/60 p-5">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-hl-muted">
                      Architecture
                    </h3>
                    <dl className="mt-4 grid grid-cols-2 gap-4">
                      {p.architecture.map((a) => (
                        <div key={a.label}>
                          <dt className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                            {a.label}
                          </dt>
                          <dd className="mt-1 text-sm font-medium text-foreground">
                            {a.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <div className="space-y-7">
                    <ProjectBlock label="Problem" body={p.problem} />
                    <ProjectBlock label="Approach" body={p.approach} />
                    <ProjectBlock label="Outcome" body={p.outcome} />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Engineering commitments */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <Reveal>
          <Eyebrow>Engineering commitments</Eyebrow>
          <SectionHeading className="mt-4">
            What every Haal Lab project ships with
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAPABILITIES_TEASER.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="h-full rounded-2xl border border-hl-border bg-hl-surface/60 p-7 hl-card-glow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                  {c.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-hl-border bg-hl-surface/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Have a project in mind?
              </h3>
              <p className="mt-1 text-sm text-hl-muted">
                We take on a small number of engagements at a time. Tell us what you are building.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-5 py-3 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

function ProjectBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-cyan">
        {label}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
