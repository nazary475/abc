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
import { getAllArticles } from "@/lib/research-articles";

const CATEGORIES = ["All", "Engineering", "Experiments", "Insights"] as const;

export function ResearchPage() {
  const articles = getAllArticles();

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
              {articles.length} articles
            </span>
          </div>
        </Reveal>

        <ul className="mt-10 divide-y divide-hl-border">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.id} delay={i * 0.04}>
              <Link href={`/research/${a.id}`}>
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
              </Link>
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
                  systems we are actually building , sent when there is something worth reading.
                </Lead>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-hl-cyan px-5 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 sm:w-auto"
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
