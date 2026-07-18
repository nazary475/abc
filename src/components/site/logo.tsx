"use client";

import { Link } from "@/i18n/routing";

type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

export function Logo({ size = 28, withWordmark = true, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Haal Lab , home"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:rotate-[8deg]"
      >
        <defs>
          <linearGradient id="hl-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E0FF" />
            <stop offset="1" stopColor="#6EA8FF" />
          </linearGradient>
        </defs>
        <rect x="0.5" y="0.5" width="31" height="31" rx="8" stroke="rgba(255,255,255,0.12)" />
        <rect x="0.5" y="0.5" width="31" height="31" rx="8" fill="rgba(0,224,255,0.04)" />
        <path d="M9 8 V24 M9 16 H17 M17 8 V24" stroke="url(#hl-logo-grad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="8" r="1.6" fill="#00E0FF" />
        <circle cx="17" cy="16" r="1.6" fill="#00E0FF" />
        <circle cx="9" cy="24" r="1.6" fill="#6EA8FF" />
        <path d="M22 14 L26 16 L22 18 Z" fill="url(#hl-logo-grad)" />
      </svg>
      {withWordmark && (
        <span className="font-sans text-[15px] font-semibold tracking-tight text-foreground">
          Haal<span className="text-hl-cyan">Lab</span>
        </span>
      )}
    </Link>
  );
}
