import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
} from "@/components/blocks/primitives";

export function AboutPage() {
  return (
    <>
      <PageHeader pageKey="about" />

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Haal Lab is a deep-tech artificial intelligence laboratory focused on
              researching, engineering, and deploying advanced AI systems for organizations
              seeking to adopt artificial intelligence with confidence.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              We help companies, research institutions, and organizations transform AI from
              an emerging technology into practical capabilities that improve
              decision-making, efficiency, knowledge management, and innovation.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              By combining AI research, software engineering, and strategic implementation,
              Haal Lab develops intelligent systems designed for real-world organizational
              challenges.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Artificial intelligence is becoming a fundamental technology shaping the
              future of organizations and industries. However, successful AI adoption
              requires more than access to powerful models. Organizations need a clear
              strategy, reliable technology, and systems that align with their operational
              goals.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Haal Lab exists to bridge the gap between AI research and real-world
              implementation by creating AI systems that are secure, adaptable,
              transparent, and valuable for organizations.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              What We Do
            </h2>

            <h3 className="text-xl font-semibold text-foreground">
              AI Transformation and Strategic Implementation
            </h3>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Haal Lab helps organizations explore, design, and implement artificial
              intelligence solutions that create measurable impact. We work with
              organizations to identify meaningful AI opportunities, develop effective
              strategies, and build systems that integrate AI into existing workflows and
              operations. Our focus is helping organizations move from AI experimentation
              toward practical and scalable AI adoption.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Enterprise AI Systems and Intelligent Infrastructure
            </h3>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Modern organizations contain valuable knowledge, data, and processes that can
              be enhanced through artificial intelligence. Haal Lab designs and develops
              enterprise AI systems that help organizations improve operational efficiency,
              transform internal knowledge into actionable intelligence, automate complex
              workflows, enhance research and decision-making, and develop new AI-powered
              capabilities.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Private and Trustworthy AI Solutions
            </h3>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Organizations increasingly require AI systems that provide security,
              transparency, and control over their information. Haal Lab develops AI
              architectures designed around data privacy, secure deployment, responsible AI
              practices, system transparency, and long-term reliability. We believe
              organizations should be able to understand, manage, and evolve the AI systems
              they depend on.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Research and Engineering
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              As an AI laboratory, Haal Lab combines scientific exploration with practical
              engineering. Our research focuses on advancing areas such as artificial
              intelligence systems, large language model applications, knowledge
              intelligence, AI automation, retrieval and reasoning systems, and AI
              evaluation and reliability.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Our goal is not only to explore new AI capabilities, but to transform them
              into dependable technologies that solve real organizational problems.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              The future of AI will be shaped by organizations that can successfully
              integrate intelligence into their operations while maintaining control,
              trust, and strategic independence.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Haal Lab envisions a future where artificial intelligence becomes a reliable
              foundation for organizations — helping them innovate, operate efficiently,
              and make better decisions.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Partner With Haal Lab
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-justify text-hl-muted">
              Haal Lab collaborates with companies, institutions, and research
              organizations looking to explore the opportunities of artificial intelligence
              and build the next generation of intelligent systems.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-hl-cyan hover:underline"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
