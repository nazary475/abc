"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

/**
 * HeroVisual — Enterprise AI Architecture Diagram
 *
 * Professional architecture-focused visual showing:
 *
 *   PDFs, Contracts, Research Papers, Emails, Databases, APIs
 *        ↓
 *   Knowledge Platform (AI-powered intelligence layer)
 *        ↓
 *   Search, Analysis, Automation
 *        ↓
 *   Reports, Insights, Workflows, Decisions
 *
 * Clean, modern, technical, enterprise-grade design.
 * SVG-based with animated data flows.
 */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = useTranslations("heroVisual");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(15, Math.floor((rect.width * rect.height) / 20000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        r: Math.random() * 1.0 + 0.3,
        a: Math.random() * 0.2 + 0.05,
      }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.a})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Layout coordinates within the 800×500 viewBox (compact for better fit)
  const W = 800;
  const H = 500;

  // Input sources (top row, horizontally distributed)
  const sources = [
    { x: 40, label: t("sources.pdfs"), icon: "document" },
    { x: 160, label: t("sources.contracts"), icon: "contract" },
    { x: 280, label: t("sources.research"), icon: "research" },
    { x: 400, label: t("sources.emails"), icon: "email" },
    { x: 520, label: t("sources.databases"), icon: "database" },
    { x: 640, label: t("sources.apis"), icon: "api" },
  ];

  const sourceY = 40;
  const sourceWidth = 100;
  const sourceHeight = 60;

  // Knowledge Platform (center)
  const platformX = 150;
  const platformY = 170;
  const platformWidth = 500;
  const platformHeight = 110;

  // Processing stages (inside platform)
  const stages = [
    { x: 200, label: t("stages.search") },
    { x: 400, label: t("stages.analysis") },
    { x: 600, label: t("stages.automation") },
  ];

  // Output results (bottom row)
  const outputs = [
    { x: 80, label: t("outputs.reports") },
    { x: 270, label: t("outputs.insights") },
    { x: 460, label: t("outputs.workflows") },
    { x: 650, label: t("outputs.decisions") },
  ];

  const outputY = 390;
  const outputWidth = 120;
  const outputHeight = 55;

  // SVG icons as path data
  const icons = {
    document: "M7 3v18h14V8l-5-5H7zm8 0v5h5",
    contract: "M8 2v4h12v14H8v4h16V2H8zm4 8h8m-8 4h8",
    research: "M12 2l-2 7h5l-2 7 7-9h-5l2-5z",
    email: "M3 8l9 6 9-6M3 8v10h18V8",
    database: "M12 2c-4.4 0-8 1.8-8 4v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6c0-2.2-3.6-4-8-4z",
    api: "M3 12h3m12 0h3M7.8 7.8l2.1 2.1m8.2 0l2.1-2.1M12 3v3m0 12v3",
  };

  return (
    <div className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={t("ariaLabel")}
      >
        <defs>
          <linearGradient id="hv-platform-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <linearGradient id="hv-flow-down" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(37,99,235,0)" />
            <stop offset="50%" stopColor="rgba(37,99,235,0.8)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </linearGradient>

          <filter id="hv-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <pattern id="hv-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(37,99,235,0.15)" />
          </pattern>
        </defs>

        {/* ── Input Sources (Top Row) ── */}
        <text x={W / 2} y={20} fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="700" textAnchor="middle" letterSpacing="2.5">
          {t("dataSources")}
        </text>

        {sources.map((s, i) => {
          const centerX = s.x + sourceWidth / 2;
          const bottomY = sourceY + sourceHeight;

          return (
            <g key={`src-${i}`}>
              {/* Card */}
              <rect
                x={s.x}
                y={sourceY}
                width={sourceWidth}
                height={sourceHeight}
                rx="8"
                fill="#F8FAFC"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />

              {/* Icon container */}
              <rect
                x={s.x + sourceWidth / 2 - 12}
                y={sourceY + 12}
                width="24"
                height="24"
                rx="5"
                fill="#EFF6FF"
                stroke="#BFDBFE"
                strokeWidth="1"
              />

              {/* Icon */}
              <g transform={`translate(${s.x + sourceWidth / 2 - 8}, ${sourceY + 18})`}>
                <path
                  d={icons[s.icon as keyof typeof icons]}
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Label */}
              <text
                x={centerX}
                y={sourceY + 50}
                fill="#1E293B"
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
                textAnchor="middle"
              >
                {s.label}
              </text>

              {/* Flow line to platform */}
              <line
                x1={centerX}
                y1={bottomY}
                x2={centerX}
                y2={platformY - 10}
                stroke="rgba(37,99,235,0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Animated flow pulse */}
              <line
                x1={centerX}
                y1={bottomY}
                x2={centerX}
                y2={platformY - 10}
                stroke="url(#hv-flow-down)"
                strokeWidth="2.5"
                className="hl-flow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />

              {/* Arrow at platform entry */}
              <polygon
                points={`${centerX},${platformY - 10} ${centerX - 4},${platformY - 16} ${centerX + 4},${platformY - 16}`}
                fill="#2563EB"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* ── Knowledge Platform (Center) ── */}
        <g>
          {/* Platform container */}
          <rect
            x={platformX}
            y={platformY}
            width={platformWidth}
            height={platformHeight}
            rx="12"
            fill="url(#hv-platform-grad)"
            filter="url(#hv-glow)"
          />

          {/* Dot pattern overlay */}
          <rect
            x={platformX}
            y={platformY}
            width={platformWidth}
            height={platformHeight}
            rx="12"
            fill="url(#hv-dots)"
          />

          {/* Platform title */}
          <text
            x={platformX + platformWidth / 2}
            y={platformY + 25}
            fill="white"
            fontSize="13"
            fontFamily="monospace"
            fontWeight="700"
            textAnchor="middle"
            letterSpacing="3"
          >
            {t("knowledgePlatform")}
          </text>

          {/* Subtitle */}
          <text
            x={platformX + platformWidth / 2}
            y={platformY + 42}
            fill="rgba(255,255,255,0.7)"
            fontSize="9"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            textAnchor="middle"
          >
            {t("aiLayer")}
          </text>

          {/* Processing stages */}
          {stages.map((stage, i) => (
            <g key={`stage-${i}`}>
              <rect
                x={stage.x - 50}
                y={platformY + 60}
                width="100"
                height="30"
                rx="6"
                fill="rgba(255,255,255,0.15)"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
              <text
                x={stage.x}
                y={platformY + 80}
                fill="white"
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
                textAnchor="middle"
              >
                {stage.label}
              </text>

              {/* Processing indicator */}
              <circle
                cx={stage.x}
                cy={platformY + 68}
                r="2.5"
                fill="#00E0FF"
                className="hl-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}

          {/* Flow indicators inside platform */}
          <path
            d={`M ${stages[0].x + 50} ${platformY + 75} L ${stages[1].x - 50} ${platformY + 75}`}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-white)"
          />
          <path
            d={`M ${stages[1].x + 50} ${platformY + 75} L ${stages[2].x - 50} ${platformY + 75}`}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-white)"
          />
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrow-white" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="rgba(255,255,255,0.5)" />
          </marker>
        </defs>

        {/* ── Output Results (Bottom Row) ── */}
        <text x={W / 2} y={outputY - 20} fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="700" textAnchor="middle" letterSpacing="2.5">
          {t("intelligentOutputs")}
        </text>

        {outputs.map((o, i) => {
          const centerX = o.x + outputWidth / 2;
          const platformBottom = platformY + platformHeight;

          return (
            <g key={`out-${i}`}>
              {/* Flow line from platform */}
              <line
                x1={centerX}
                y1={platformBottom + 10}
                x2={centerX}
                y2={outputY}
                stroke="rgba(37,99,235,0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Animated flow pulse */}
              <line
                x1={centerX}
                y1={platformBottom + 10}
                x2={centerX}
                y2={outputY}
                stroke="url(#hv-flow-down)"
                strokeWidth="2.5"
                className="hl-flow"
                style={{ animationDelay: `${i * 0.2 + 1}s` }}
              />

              {/* Arrow at output entry */}
              <polygon
                points={`${centerX},${outputY} ${centerX - 4},${outputY - 6} ${centerX + 4},${outputY - 6}`}
                fill="#2563EB"
                opacity="0.6"
              />

              {/* Output card */}
              <rect
                x={o.x}
                y={outputY}
                width={outputWidth}
                height={outputHeight}
                rx="8"
                fill="#F0F9FF"
                stroke="#0950CD"
                strokeWidth="1.5"
              />

              {/* Result indicator */}
              <circle
                cx={centerX}
                cy={outputY + 16}
                r="5"
                fill="#00E0FF"
                opacity="0.2"
              />
              <circle
                cx={centerX}
                cy={outputY + 16}
                r="2.5"
                fill="#00E0FF"
                className="hl-pulse"
                style={{ animationDelay: `${i * 0.25 + 1.5}s` }}
              />

              {/* Label */}
              <text
                x={centerX}
                y={outputY + 38}
                fill="#0A1A3A"
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                textAnchor="middle"
              >
                {o.label}
              </text>
            </g>
          );
        })}

        {/* ── Decorative elements ── */}
        <rect
          x={platformX - 10}
          y={platformY - 10}
          width={platformWidth + 20}
          height={platformHeight + 20}
          rx="16"
          fill="none"
          stroke="rgba(37,99,235,0.1)"
          strokeWidth="1"
          strokeDasharray="8 4"
        />
      </svg>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-20" />
    </div>
  );
}
