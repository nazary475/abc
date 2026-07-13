"use client";

import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { BREADCRUMBS } from "@/lib/seo";

export function Breadcrumbs({ path }: { path: string }) {
  const crumbs = BREADCRUMBS[path];
  if (!crumbs || crumbs.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="hl-container hl-section-pad pt-28 md:pt-32"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-hl-muted">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          const href = crumb.path === "" ? "/" : (crumb.path as any);
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-mono uppercase tracking-wider text-foreground/80" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={href}
                    className="font-mono uppercase tracking-wider transition-colors hover:text-hl-cyan"
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-hl-muted/60" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
