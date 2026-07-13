import { ReactNode } from "react";
import { Reveal } from "./reveal";

export { Reveal };

/** Eyebrow — small monospace label above section headings. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-hl-cyan ${className}`}
    >
      <span className="h-px w-6 bg-hl-cyan/60" />
      {children}
    </span>
  );
}

/** SectionHeading — large gradient-text headline. */
export function SectionHeading({
  children,
  className = "",
  as: As = "h2",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  return (
    <As
      id={id}
      className={`hl-text-gradient text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </As>
  );
}

/** Lead — supporting paragraph below headings. */
export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`max-w-2xl text-base leading-relaxed text-hl-muted md:text-lg ${className}`}
    >
      {children}
    </p>
  );
}

/** Tag — small technology chip. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hl-border bg-hl-surface-2 px-2.5 py-1 font-mono text-[11px] tracking-wide text-hl-muted">
      {children}
    </span>
  );
}

/** SectionShell — consistent vertical rhythm + width. */
export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`hl-container hl-section-pad py-20 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

/** SectionHeader — eyebrow + heading + lead, all aligned. */
export function SectionHeader({
  eyebrow,
  heading,
  lead,
  id,
  align = "left",
}: {
  eyebrow: string;
  heading: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionHeading>{heading}</SectionHeading>
      {lead && <Lead className={align === "center" ? "mx-auto" : ""}>{lead}</Lead>}
    </Reveal>
  );
}
