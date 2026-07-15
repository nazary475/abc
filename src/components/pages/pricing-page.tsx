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
    id: "founder",
    icon: GraduationCap,
    name: "Founder Program",
    tagline: "Designed for solo founders, researchers, PhD students, and early-stage startups exploring AI opportunities.",
    price: "€1,900",
    priceSuffix: "one-time",
    features: [
      "Strategy consultation",
      "AI feasibility assessment",
      "Opportunity mapping",
      "Architecture recommendation",
      "Technical roadmap",
      "Cost and timeline estimate",
    ],
    details: [
      { label: "Duration", value: "1 week" },
      { label: "Best For", value: "Startup founders" },
      { label: "Delivery", value: "Assessment" },
    ],
    cta: "Get started",
    accent: "from-[#10B981]/20 to-transparent",
    accentGlow: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "pilot",
    icon: FlaskConical,
    name: "AI Pilot",
    tagline: "Validate an AI use case before committing to a larger investment.",
    price: "€9,900+",
    priceSuffix: "starting at",
    features: [
      "Discovery workshop",
      "Working proof-of-concept",
      "Real data testing",
      "Technical feasibility report",
      "Deployment roadmap",
    ],
    details: [
      { label: "Duration", value: "2–4 weeks" },
      { label: "Best For", value: "Startups & SMEs" },
      { label: "Delivery", value: "POC + report" },
    ],
    cta: "Start pilot",
    accent: "from-[#2563EB]/20 to-transparent",
    accentGlow: "rgba(37, 99, 235, 0.15)",
  },
  {
    id: "production",
    icon: Rocket,
    name: "Production AI System",
    tagline: "A production-ready AI solution deployed for real-world use.",
    price: "€24,900+",
    priceSuffix: "starting at",
    popular: true,
    features: [
      "System design",
      "Development",
      "Integrations",
      "Evaluation framework",
      "Deployment",
      "Documentation",
      "Team onboarding",
      "30-day support",
    ],
    details: [
      { label: "Duration", value: "6–10 weeks" },
      { label: "Examples", value: "AI assistants, RAG" },
      { label: "Support", value: "30 days" },
    ],
    cta: "Get a proposal",
    accent: "from-[#0950CD]/25 to-transparent",
    accentGlow: "rgba(9, 80, 205, 0.2)",
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise & Research Infrastructure",
    tagline: "Custom AI platforms for organizations requiring scale, security, compliance, and long-term ownership.",
    price: "€60,000+",
    priceSuffix: "starting at",
    features: [
      "Architecture design",
      "Infrastructure deployment",
      "Security review",
      "Monitoring and observability",
      "Team training",
      "Runbooks and documentation",
      "Extended support options",
    ],
    details: [
      { label: "Duration", value: "2–6 months" },
      { label: "Examples", value: "AI platforms" },
      { label: "Support", value: "Extended" },
    ],
    cta: "Book a call",
    accent: "from-[#4AF3F8]/20 to-transparent",
    accentGlow: "rgba(74, 243, 248, 0.12)",
  },
];

/* ────────────── Services ────────────── */

const SERVICES: { name: string; description: string; price: string }[] = [
  {
    name: "AI Readiness Assessment",
    description: "Evaluate where AI can create measurable value within your organization.",
    price: "€2,500+",
  },
  {
    name: "Fractional AI Architect",
    description: "Ongoing technical leadership for startups and growing organizations.",
    price: "€3,500/month+",
  },
  {
    name: "Research Corpus Search Systems",
    description: "Semantic search and retrieval systems for academic and research datasets.",
    price: "€7,500+",
  },
  {
    name: "Reproducible Research Infrastructure",
    description: "Infrastructure for repeatable experiments and AI research workflows.",
    price: "€15,000+",
  },
  {
    name: "RAG Audit",
    description: "Independent review of retrieval-augmented generation systems.",
    price: "€3,500+",
  },
  {
    name: "LLM Infrastructure Audit",
    description: "Review model deployment, architecture, cost efficiency, and security.",
    price: "€5,000+",
  },
  {
    name: "Executive AI Workshop",
    description: "A strategic workshop for leadership teams evaluating AI adoption.",
    price: "€2,500/session",
  },
  {
    name: "Technical Team Workshop",
    description: "Hands-on training for engineering and technical teams.",
    price: "€3,500/session",
  },
];

/* ────────────── Managed Services ────────────── */

const MANAGED_SERVICES: { name: string; description: string; price: string }[] = [
  {
    name: "AI Operations Support",
    description: "Keep AI systems reliable, monitored, and continuously improving.",
    price: "€2,500/month+",
  },
  {
    name: "Managed AI Platform",
    description: "Fully managed AI operations for production environments.",
    price: "€5,000/month+",
  },
];

/* ────────────── Specialized Solutions ────────────── */

const SPECIALIZED: { name: string; description: string; price: string }[] = [
  {
    name: "Private AI Deployment",
    description: "Deploy AI systems entirely within your infrastructure.",
    price: "€15,000+",
  },
  {
    name: "RAG System Development",
    description: "Build knowledge retrieval systems over documents, databases, and internal knowledge.",
    price: "€15,000+",
  },
  {
    name: "Multi-Agent Automation Systems",
    description: "Design autonomous workflows and AI-powered operational systems.",
    price: "€20,000+",
  },
  {
    name: "AI Knowledge Platforms",
    description: "Enterprise search, organizational memory, and knowledge management systems.",
    price: "€25,000+",
  },
];

/* ────────────── Component ────────────── */

export function PricingPage() {
  return (
    <>
      {/* Page Header */}
      <header className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 hl-radial-glow opacity-70" />
        <div className="pointer-events-none absolute inset-0 hl-grid-bg opacity-40" />
        <div className="hl-container hl-section-pad relative">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading as="h1" className="mt-5 max-w-4xl">
              Packages built for real AI needs
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.16}>
            <Lead className="mt-5">
              Built for founders, startups, businesses, enterprises, and research institutions. Every engagement is focused on delivering measurable outcomes, working systems, and practical AI adoption.
            </Lead>
          </Reveal>
        </div>
      </header>

      {/* ── Tier cards ── */}
      <SectionShell id="pricing-tiers">
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      {/* ── Services ── */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <SectionHeading className="mt-4">
              Professional Services
            </SectionHeading>
            <Lead className="mt-4">
              Workshops, assessments, audits, and advisory services to support your AI journey.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.06}>
              <article className="flex h-full flex-col bg-hl-surface/80 p-7 transition-colors hover:bg-hl-surface-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-hl-muted">
                  {service.description}
                </p>
                <p className="mt-4 font-mono text-sm font-bold tracking-tight text-hl-cyan">
                  {service.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Managed Services ── */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Managed Services</Eyebrow>
            <SectionHeading className="mt-4">
              Ongoing Operations
            </SectionHeading>
            <Lead className="mt-4">
              Continuous support and management for your AI systems.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2">
          {MANAGED_SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.06}>
              <article className="flex h-full flex-col bg-hl-surface/80 p-7 transition-colors hover:bg-hl-surface-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-hl-muted">
                  {service.description}
                </p>
                <p className="mt-4 font-mono text-sm font-bold tracking-tight text-hl-cyan">
                  {service.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Specialized Solutions ── */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Specialized Solutions</Eyebrow>
            <SectionHeading className="mt-4">
              Custom Development
            </SectionHeading>
            <Lead className="mt-4">
              Tailored AI solutions for specific use cases and requirements.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIZED.map((solution, i) => (
            <Reveal key={solution.name} delay={i * 0.06}>
              <article className="flex h-full flex-col bg-hl-surface/80 p-7 transition-colors hover:bg-hl-surface-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {solution.name}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-hl-muted">
                  {solution.description}
                </p>
                <p className="mt-4 font-mono text-sm font-bold tracking-tight text-hl-cyan">
                  {solution.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Founding Client Program ── */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-hl-cyan/40 bg-hl-surface/60 p-10 md:p-16 hl-card-glow shadow-[0_0_60px_-20px_rgba(74,243,248,0.25)]">
            <div className="pointer-events-none absolute inset-0 hl-grid-bg-fine opacity-50" />
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-hl-cyan/10 blur-3xl" />
            
            <div className="relative">
              <Eyebrow>Limited Availability</Eyebrow>
              <SectionHeading className="mt-4">
                Founding Client Program
              </SectionHeading>
              <Lead className="mt-4 max-w-3xl">
                Selected startups, researchers, and early-stage companies may qualify for reduced pricing in exchange for case study participation, feedback sessions, public testimonial, and product collaboration opportunities.
              </Lead>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(74,243,248,0.6)]"
                >
                  Apply during your discovery call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
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
                    href="mailto:hussain.nazary@haal-lab.solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-hl-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                  >
                    hussain.nazary@haal-lab.solutions
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


