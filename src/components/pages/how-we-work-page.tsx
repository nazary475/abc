import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import {
  Reveal,
  SectionShell,
} from "@/components/blocks/primitives";

const STEPS = [
  {
    number: "1",
    title: "Understanding the Challenge",
    body: "We begin by understanding the organization's objectives, existing processes, available resources, and the problem that needs to be solved.",
    items: [
      "Business goals",
      "Operational challenges",
      "Existing knowledge and data sources",
      "Technical requirements",
      "Security and privacy considerations",
    ],
    goal: "Understand the real problem before designing a solution.",
  },
  {
    number: "2",
    title: "Research & Exploration",
    body: "Before committing to an approach, we investigate available technologies and possible architectures.",
    items: [
      "Exploring different AI methods",
      "Evaluating suitable models and techniques",
      "Testing possible architectures",
      "Studying trade-offs between performance, cost, security, and scalability",
    ],
    goal: "Find the approach that best fits the organization's needs.",
  },
  {
    number: "3",
    title: "Experimentation & Evaluation",
    body: "AI development requires careful testing. We build experiments and prototypes to evaluate different solutions before full implementation.",
    items: [
      "Effectiveness",
      "Reliability",
      "Performance",
      "Integration requirements",
      "Long-term sustainability",
    ],
    goal: "Make informed decisions based on results.",
  },
  {
    number: "4",
    title: "Engineering & Development",
    body: "After identifying the most suitable approach, we design and develop the AI system according to the organization's environment and requirements.",
    items: [
      "Practical",
      "Secure",
      "Maintainable",
      "Ready for real-world use",
    ],
    goal: null,
  },
  {
    number: "5",
    title: "Deployment & Continuous Improvement",
    body: "AI systems continue evolving after deployment. We support organizations in integrating AI into their workflows, monitoring performance, and improving capabilities as new requirements and technologies emerge.",
    items: [],
    goal: "Create a long-term AI capability, not just a one-time implementation.",
  },
];

export function HowWeWorkPage() {
  return (
    <>
      {/* Intro */}
      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              At Haal Lab, we believe successful AI systems are not created by applying
              the same solution to every organization.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Every challenge has different requirements, data environments, security
              considerations, and operational goals. Our process combines research,
              experimentation, engineering, and continuous evaluation to identify and build
              the most suitable AI approach for each organization.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              We explore multiple possibilities, test different methods, evaluate their
              strengths and limitations, and develop solutions based on evidence rather
              than assumptions.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      {/* Steps */}
      {STEPS.map((step, i) => (
        <SectionShell
          key={step.number}
          className={`border-t border-hl-border${i % 2 === 1 ? " bg-hl-surface/30" : ""}`}
        >
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hl-cyan/10 font-mono text-sm font-bold text-hl-cyan">
                  {step.number}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {step.title}
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-justify text-hl-muted">
                {step.body}
              </p>

              {step.items.length > 0 && (
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-hl-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hl-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {step.goal && (
                <p className="text-base font-medium text-foreground">
                  The goal: {step.goal}
                </p>
              )}
            </div>
          </Reveal>
        </SectionShell>
      ))}

      {/* Philosophy */}
      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Our Philosophy
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              The best AI solution is not always the newest or largest technology.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              It is the solution that best matches the organization's goals, constraints,
              and future vision.
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              Haal Lab combines scientific exploration with engineering discipline to help
              organizations build AI systems they can trust.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      {/* CTA */}
      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-hl-cyan hover:underline"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
