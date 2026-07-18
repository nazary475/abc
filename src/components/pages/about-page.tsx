import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
} from "@/components/blocks/primitives";

export function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <>
      <PageHeader pageKey="about" />

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("intro1")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("intro2")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("intro3")}
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("missionTitle")}
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("missionP1")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("missionP2")}
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("visionTitle")}
            </h2>

            <h3 className="text-xl font-semibold text-foreground">
              {t("visionH3a")}
            </h3>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("visionP1")}
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              {t("visionH3b")}
            </h3>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("visionP2")}
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              {t("visionH3c")}
            </h3>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("visionP3")}
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("researchTitle")}
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("researchP1")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("researchP2")}
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("futureTitle")}
            </h2>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("futureP1")}
            </p>
            <p className="text-lg leading-relaxed text-justify text-hl-muted">
              {t("futureP2")}
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("partnerTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-justify text-hl-muted">
              {t("partnerP1")}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-hl-cyan hover:underline"
            >
              {t("getInTouch")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
