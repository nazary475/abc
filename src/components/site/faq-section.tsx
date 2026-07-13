import { Reveal, Eyebrow, SectionHeading } from "@/components/blocks/primitives";
import { FAQ } from "@/lib/seo";

/**
 * FaqSection — visible Q&A section.
 *
 * Renders an accessible accordion-free FAQ list. Each Q is an <h3> and
 * each A is a <p> — this is the format AI chatbots (ChatGPT, Perplexity,
 * Claude, Gemini) retrieve and cite most reliably.
 *
 * The matching FAQPage JSON-LD is emitted by <PageSchemas /> in the
 * page.tsx file. Both visible content and structured data are sourced
 * from src/lib/seo.ts so they never drift out of sync.
 *
 * Why no accordion? Accordions hide content behind JS interactions,
 * which some crawlers don't execute. Plain visible Q&A is more
 * crawlable and more citation-friendly.
 */
export function FaqSection({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  intro,
}: {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      className="hl-container hl-section-pad py-20 md:py-28 border-t border-hl-border"
      aria-labelledby="faq-heading"
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionHeading id="faq-heading" className="mt-4">
          {title}
        </SectionHeading>
        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-hl-muted md:text-lg">
            {intro}
          </p>
        )}
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border lg:grid-cols-2">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.04}>
            <article className="h-full bg-hl-surface/80 p-7">
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-hl-muted">
                {faq.answer}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
