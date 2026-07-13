"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "./logo";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const FOOTER_LINKS: { label: string; href: "/solutions" | "/projects" | "/research" | "/network" | "/about" | "/contact" }[] = [
    { label: tNav("solutions"), href: "/solutions" },
    { label: tNav("projects"), href: "/projects" },
    { label: tNav("research"), href: "/research" },
    { label: tNav("network"), href: "/network" },
    { label: tNav("about"), href: "/about" },
    { label: tNav("contact"), href: "/contact" },
  ];

  return (
    <footer className="mt-auto border-t border-hl-border bg-hl-surface/40">
      <div className="hl-container hl-section-pad py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-hl-muted">
              {t("description")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="https://github.com/haal-lab" label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/haal-lab" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="mailto:hello@haal-lab.solutions" label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-4">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
              {t("pages")}
            </h2>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hl-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
              {t("getInTouch")}
            </h2>
            <a
              href="mailto:hello@haal-lab.solutions"
              className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-hl-cyan"
            >
              hello@haal-lab.solutions
              <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-xs text-hl-muted">haal-lab.solutions</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hl-border pt-6 text-xs text-hl-muted sm:flex-row sm:items-center">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
          <p className="font-mono uppercase tracking-wider">
            Engineering Intelligent Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = !href.startsWith("mailto:") && !href.startsWith("/");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all hover:border-hl-cyan/50 hover:text-hl-cyan"
    >
      {children}
    </a>
  );
}
