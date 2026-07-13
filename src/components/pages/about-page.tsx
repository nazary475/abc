import { Link } from "@/i18n/routing";
import {
  ShieldCheck,
  FlaskConical,
  Layers,
  Cpu,
  Target,
  Compass,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

const PRINCIPLES: { icon: typeof ShieldCheck; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Privacy by architecture",
    description:
      "We treat data sovereignty as an engineering property of the system, not a policy document. Where it matters, the model runs on your hardware — full stop.",
  },
  {
    icon: FlaskConical,
    title: "Research as a discipline",
    description:
      "We follow the frontier seriously — retrieval architectures, inference acceleration, evaluation methodology — and translate it into systems that ship.",
  },
  {
    icon: Layers,
    title: "Engineering as a craft",
    description:
      "Observability, evaluation, and reproducibility are part of the deliverable. AI systems should be operable, not magical.",
  },
  {
    icon: Cpu,
    title: "Open by default",
    description:
      "We build on open-weight models and open-source infrastructure. You own the system, the weights, and the data — no platform lock-in.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHeader pageKey="about" />

      {/* Mission & Vision */}
      <SectionShell className="border-t border-hl-border">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-hl-border bg-hl-surface/60 p-8 md:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                Mission
              </h2>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
                Make advanced AI systems private, reliable, and useful in production.
              </p>
              <p className="mt-5 text-base leading-relaxed text-hl-muted">
                We exist to close the gap between AI research and AI in production. Too many
                organizations can access capable models but cannot deploy them under the
                constraints that actually matter — privacy, latency, cost, and
                reproducibility. We build the systems that close that gap.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl border border-hl-border bg-hl-surface/60 p-8 md:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                Vision
              </h2>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
                A world where every organization can run its own intelligence.
              </p>
              <p className="mt-5 text-base leading-relaxed text-hl-muted">
                We believe the most valuable AI systems of the next decade will be private,
                grounded, and owned by the organizations that use them. Our work is to make
                that accessible — engineering the infrastructure, retrieval, and applications
                that let any serious team operate its own intelligent software.
              </p>
            </article>
          </Reveal>
        </div>
      </SectionShell>

      {/* Principles */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <Reveal>
          <Eyebrow>Principles</Eyebrow>
          <SectionHeading className="mt-4">
            How we make engineering decisions
          </SectionHeading>
          <Lead className="mt-4">
            Four principles that shape every architectural choice we make — from model
            selection to deployment topology to evaluation methodology.
          </Lead>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="flex h-full gap-5 rounded-2xl border border-hl-border bg-hl-surface/40 p-7">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                    {p.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Stats */}
      <SectionShell className="border-t border-hl-border">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border md:grid-cols-4">
          {[
            { value: "4", label: "Capability areas" },
            { value: "100%", label: "Open-weight by default" },
            { value: "0", label: "Third-party data sharing" },
            { value: "24/7", label: "Production-grade ops" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-hl-surface/80 p-7 text-center">
                <p className="hl-text-cyan-gradient text-3xl font-semibold tracking-tight md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-hl-border bg-hl-surface/60 p-10 md:flex-row md:items-center md:justify-between md:p-14 hl-card-glow">
            <div>
              <Eyebrow>Work with us</Eyebrow>
              <SectionHeading className="mt-4">
                Let&apos;s build the system you have in mind.
              </SectionHeading>
              <Lead className="mt-4">
                If your problem needs an engineering team that takes AI seriously — we should
                talk.
              </Lead>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
