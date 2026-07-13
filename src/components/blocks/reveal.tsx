"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Reveal — fade + rise when scrolled into view.
 *
 * SEO-safe: content is visible by default in the server-rendered HTML.
 * The hiding only happens when JavaScript is active (via the `.js` class
 * on <html>), so crawlers and no-JS users always see the full content.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "h2" | "p";
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`hl-reveal ${inView ? "hl-reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
