import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Reveal,
  SectionShell,
} from "@/components/blocks/primitives";

export function HowWeWorkPage() {
  const t = useTranslations("process");

  const STEPS = [
    {
      number: "1",
      title: t("step1Title"),
      body: t("step1Body"),
      items: [t("step1Items.0"), t("step1Items.1"), t("step1Items.2"), t("step1Items.3"), t("step1Items.4")],
      goal: t("step1Goal"),
    },
    {
      number: "2",
      title: t("step2Title"),
      body: t("step2Body"),
      items: [t("step2Items.0"), t("step2Items.1"), t("step2Items.2"), t("step2Items.3")],
      goal: t("step2Goal"),
    },
    {
      number: "3",
      title: t("step3Title"),
      body: t("step3Body"),
      items: [t("step3Items.0"), t("step3Items.1"), t("step3Items.2"), t("step3Items.3"), t("step3Items.4")],
      goal: t("step3Goal"),
    },
    {
      number: "4",
      title: t("step4Title"),
      body: t("step4Body"),
      items: [t("step4Items.0"), t("step4Items.1"), t("step4Items.2"), t("step4Items.3")],
      goal: null,
    },
    {
      number: "5",
      title: t("step5Title"),
      body: t("step5Body"),
      items: [],
      goal: t("step5Goal"),
    },
  ];

  return (
    <>
      {/* Intro */}
      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("introP1")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("introP2")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("introP3")}
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
                  {t("theGoal")} {step.goal}
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
              {t("philosophyTitle")}
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("philosophyP1")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("philosophyP2")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("philosophyP3")}
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
              {t("startConversation")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
