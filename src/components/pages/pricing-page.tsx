"use client";

import { Link } from "@/i18n/routing";
import {
  FlaskConical,
  Building2,
  Rocket,
  GraduationCap,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  SectionShell,
  SectionHeader,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

/* ────────────── Tier data ────────────── */

type Tier = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  popular?: boolean;
  features: string[];
  details: { label: string; value: string }[];
  cta: string;
  accent: string;
  accentGlow: string;
};

const TIERS: Tier[] = [
  {
    id: "starter",
    icon: FlaskConical,
    name: "Starter",
    tagline: "Perfect for solo founders and freelancers who want to test AI for their specific use case.",
    price: "€1,900",
    priceSuffix: "one-time",
    features: [
      "1-hour consultation call",
      "Feasibility assessment",
      "Quick prototype (3-5 days)",
      "Setup guidance & documentation",
      "Email support for 2 weeks",
    ],
    details: [
      { label: "Duration", value: "1 week" },
      { label: "Use cases", value: "1 simple" },
      { label: "Delivery", value: "Prototype + guide" },
    ],
    cta: "Get started",
    accent: "from-[#10B981]/20 to-transparent",
    accentGlow: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "explorer",
    icon: FlaskConical,
    name: "Explorer",
    tagline: "Validate whether AI can solve your specific problem — before committing budget.",
    price: "€4,900",
    priceSuffix: "one-time",
    features: [
      "2-hour discovery workshop",
      "Written feasibility report",
      "Architecture sketch",
      "Working proof-of-concept",
      "Cloud-hosted demo delivery",
    ],
    details: [
      { label: "Duration", value: "2 weeks" },
      { label: "Use cases", value: "1 focused" },
      { label: "Delivery", value: "Demo + report" },
    ],
    cta: "Start exploring",
    accent: "from-[#2563EB]/20 to-transparent",
    accentGlow: "rgba(37, 99, 235, 0.15)",
  },
  {
    id: "professional",
    icon: Rocket,
    name: "Professional",
    tagline: "A production-ready AI system — built, integrated, and deployed for your business.",
    price: "€14,900",
    priceSuffix: "per project",
    popular: true,
    features: [
      "Everything in Explorer",
      "1 complete AI system (assistant, search, or automation)",
      "Integration with your existing tools & APIs",
      "Evaluation harness with quality metrics",
      "Cloud or self-hosted deployment",
      "30 days post-launch support",
    ],
    details: [
      { label: "Duration", value: "6–8 weeks" },
      { label: "Systems", value: "1 production" },
      { label: "Support", value: "30 days" },
    ],
    cta: "Get a proposal",
    accent: "from-[#0950CD]/25 to-transparent",
    accentGlow: "rgba(9, 80, 205, 0.2)",
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    tagline: "Private AI infrastructure with compliance, multi-system orchestration, and full ownership.",
    price: "€39,900+",
    priceSuffix: "per engagement",
    features: [
      "Everything in Professional",
      "Up to 3 interconnected AI systems",
      "On-prem / air-gapped deployment",
      "GDPR & EU AI Act compliance by design",
      "GPU optimization & hardware-aware quantization",
      "Full observability: traces, metrics, eval drift",
      "Team training, runbooks & documentation",
      "90-day post-launch support + SLA",
    ],
    details: [
      { label: "Duration", value: "12–16 weeks" },
      { label: "Systems", value: "Up to 3" },
      { label: "Support", value: "90 days + SLA" },
    ],
    cta: "Book a call",
    accent: "from-[#4AF3F8]/20 to-transparent",
    accentGlow: "rgba(74, 243, 248, 0.12)",
  },
  {
    id: "research",
    icon: GraduationCap,
    name: "Research & Academic",
    tagline: "Specialized AI systems for university labs, research institutions, and grant-funded projects.",
    price: "Custom",
    priceSuffix: "academic pricing",
    features: [
      "Scoped to research budget & grant cycles",
      "RAG / retrieval systems for research corpora",
      "Reproducible experiment infrastructure",
      "Open-weight models — publishable results",
      "Co-authorship option on system design",
      "30–40% below commercial rates",
    ],
    details: [
      { label: "Duration", value: "Flexible" },
      { label: "Pricing", value: "Academic rates" },
      { label: "Scope", value: "Grant-aligned" },
    ],
    cta: "Discuss your project",
    accent: "from-[#29C4F8]/20 to-transparent",
    accentGlow: "rgba(41, 196, 248, 0.12)",
  },
];

/* ────────────── Add-ons ────────────── */

const ADDONS: { name: string; description: string; price: string }[] = [
  {
    name: "Extended Support",
    description: "Ongoing engineering support beyond the post-launch window.",
    price: "€2,400 / month",
  },
  {
    name: "Additional Integrations",
    description: "Connect your AI system to more tools, APIs, or data sources.",
    price: "€3,900 / integration",
  },
  {
    name: "Team Training Workshop",
    description: "Half-day hands-on workshop for your engineering or operations team.",
    price: "€1,900 / session",
  },
  {
    name: "Evaluation & Monitoring",
    description: "Continuous evaluation pipeline with drift detection and alerting.",
    price: "€2,900 / month",
  },
];

/* ────────────── Component ────────────── */

export function PricingPage() {
  return (
    <>
      {/* ── Tier cards ── */}
      <SectionShell id="pricing-tiers">
        <SectionHeader
          eyebrow="Pricing"
          heading="Packages built for real AI needs"
          lead="Five tiers designed for solo founders, startups, businesses, enterprises, and research institutions. Every package delivers a working system — not a slide deck."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.08}>
              <article
                className={`hl-card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-hl-surface/60 p-7 hl-card-glow ${
                  tier.popular
                    ? "border-hl-cyan/40 shadow-[0_0_60px_-20px_rgba(37,99,235,0.25)]"
                    : "border-hl-border"
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${tier.accent}`}
                />
                {/* Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                  style={{ background: `radial-gradient(circle, ${tier.accentGlow}, transparent 70%)` }}
                />

                {/* Popular badge */}
                {tier.popular && (
                  <span className="absolute right-5 top-5 inline-flex items-center rounded-full bg-hl-cyan px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#04141A]">
                    Most Popular
                  </span>
                )}

                <div className="relative flex flex-1 flex-col">
                  {/* Icon & name */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                      <tier.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mt-6">
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-hl-muted">
                      {tier.priceSuffix}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="mt-3 text-sm font-medium leading-relaxed text-hl-muted">
                    {tier.tagline}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-hl-border pt-6">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-foreground/90"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-hl-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Key details */}
                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-hl-border pt-5">
                    {tier.details.map((d) => (
                      <div key={d.label}>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                          {d.label}
                        </p>
                        <p className="mt-1 text-xs font-medium text-foreground">
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-hl-cyan text-[#04141A] hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(37,99,235,0.6)]"
                        : "border border-hl-border text-foreground hover:border-hl-cyan/40 hover:text-hl-cyan"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Add-ons ── */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Add-ons</Eyebrow>
            <SectionHeading className="mt-4">
              Extend any package
            </SectionHeading>
            <Lead className="mt-4">
              Need more support, integrations, or ongoing monitoring? Add these
              to any tier.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2 lg:grid-cols-4">
          {ADDONS.map((addon, i) => (
            <Reveal key={addon.name} delay={i * 0.06}>
              <article className="flex h-full flex-col bg-hl-surface/80 p-7 transition-colors hover:bg-hl-surface-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {addon.name}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-hl-muted">
                  {addon.description}
                </p>
                <p className="mt-4 font-mono text-sm font-bold tracking-tight text-hl-cyan">
                  {addon.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Comparison table ── */}
      <SectionShell>
        <SectionHeader
          eyebrow="Compare"
          heading="What's in each package"
          lead="A side-by-side breakdown of what you get at every tier."
          align="center"
        />
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto">
            <ComparisonTable />
          </div>
        </Reveal>
      </SectionShell>

      {/* ── CTA ── */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-hl-border bg-hl-surface/60 p-10 md:p-16 hl-card-glow">
            <div className="pointer-events-none absolute inset-0 hl-grid-bg-fine opacity-50" />
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-hl-cyan/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#6EA8FF]/10 blur-3xl" />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Eyebrow>Not sure which package?</Eyebrow>
                <SectionHeading className="mt-4">
                  Let&apos;s figure it out together.
                </SectionHeading>
                <Lead className="mt-4">
                  Tell us what you&apos;re trying to achieve and we&apos;ll recommend
                  the right engagement — honestly, with no upsell pressure.
                </Lead>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(0,224,255,0.6)]"
                  >
                    Talk to us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="mailto:hello@haal-lab.solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-hl-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                  >
                    hello@haal-lab.solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

/* ────────────── Comparison table ────────────── */

type FeatureRow = {
  feature: string;
  starter: boolean | string;
  explorer: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
  research: boolean | string;
};

const COMPARISON: FeatureRow[] = [
  { feature: "Consultation", starter: "1 hour", explorer: "2 hours", professional: "2 hours", enterprise: "2 hours", research: "2 hours" },
  { feature: "Feasibility report", starter: "Brief", explorer: true, professional: true, enterprise: true, research: true },
  { feature: "Proof-of-concept", starter: "Quick prototype", explorer: true, professional: true, enterprise: true, research: true },
  { feature: "Production AI system", starter: false, explorer: false, professional: "1 system", enterprise: "Up to 3", research: "Scoped" },
  { feature: "API / tool integration", starter: false, explorer: false, professional: true, enterprise: true, research: true },
  { feature: "Evaluation harness", starter: false, explorer: false, professional: true, enterprise: true, research: true },
  { feature: "On-prem / air-gapped", starter: false, explorer: false, professional: false, enterprise: true, research: "Optional" },
  { feature: "GDPR & EU AI Act compliance", starter: false, explorer: false, professional: false, enterprise: true, research: false },
  { feature: "GPU optimization", starter: false, explorer: false, professional: false, enterprise: true, research: "Optional" },
  { feature: "Full observability", starter: false, explorer: false, professional: false, enterprise: true, research: false },
  { feature: "Team training & runbooks", starter: false, explorer: false, professional: false, enterprise: true, research: "Optional" },
  { feature: "Post-launch support", starter: "2 weeks email", explorer: false, professional: "30 days", enterprise: "90 days + SLA", research: "Flexible" },
  { feature: "Academic discount", starter: false, explorer: false, professional: false, enterprise: false, research: "30–40%" },
  { feature: "Co-authorship option", starter: false, explorer: false, professional: false, enterprise: false, research: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-hl-cyan" />;
  }
  if (value === false) {
    return <span className="mx-auto block h-px w-4 bg-hl-border" />;
  }
  return (
    <span className="text-xs font-medium text-foreground">{value}</span>
  );
}

function ComparisonTable() {
  const headers = [
    { key: "starter", label: "Starter" },
    { key: "explorer", label: "Explorer" },
    { key: "professional", label: "Professional" },
    { key: "enterprise", label: "Enterprise" },
    { key: "research", label: "Research" },
  ] as const;

  return (
    <table className="w-full min-w-[640px] text-left">
      <thead>
        <tr className="border-b border-hl-border">
          <th className="pb-4 pr-4 text-left font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
            Feature
          </th>
          {headers.map((h) => (
            <th
              key={h.key}
              className="pb-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted"
            >
              {h.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {COMPARISON.map((row) => (
          <tr
            key={row.feature}
            className="border-b border-hl-border/50 transition-colors hover:bg-hl-surface/40"
          >
            <td className="py-3.5 pr-4 text-sm font-medium text-foreground/90">
              {row.feature}
            </td>
            {headers.map((h) => (
              <td key={h.key} className="py-3.5 text-center">
                <CellValue value={row[h.key]} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
