import { Reveal, SectionShell, Eyebrow, SectionHeading } from "@/components/blocks/primitives";
import { GLOSSARY } from "@/lib/seo";

/**
 * GlossarySection — visible definitions of AI terms.
 *
 * Why this matters for GEO (Generative Engine Optimization):
 * AI chatbots (ChatGPT, Perplexity, Claude, Gemini) frequently answer
 * definitional questions ("What is RAG?", "What is GGUF?"). By providing
 * clear, citable definitions on our own site, we increase the chance
 * that AI engines cite Haal Lab as the source.
 *
 * The definitions are written in plain, declarative sentences that
 * are easy for LLMs to extract verbatim.
 */
export function GlossarySection() {
  const terms = Object.entries(GLOSSARY);

  return (
    <SectionShell className="border-t border-hl-border bg-hl-surface/30">
      <Reveal>
        <Eyebrow>Glossary</Eyebrow>
        <SectionHeading className="mt-4">
          AI engineering terms, defined.
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-hl-muted md:text-lg">
          The vocabulary we use across this site — defined plainly so anyone
          evaluating AI systems can follow along.
        </p>
      </Reveal>

      <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border md:grid-cols-2">
        {terms.map(([term, definition], i) => (
          <Reveal key={term} delay={i * 0.03}>
            <div className="bg-hl-surface/80 p-7">
              <dt className="font-mono text-sm font-semibold uppercase tracking-wider text-hl-cyan">
                {term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-hl-muted">
                {definition}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </SectionShell>
  );
}
