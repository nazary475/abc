"use client";

import { useEffect, useRef } from "react";

/**
 * HeroVisual — abstract AI architecture visualization.
 * Pure SVG + canvas hybrid. Shows:
 *  - layered neural node graph (input → transformer blocks → output)
 *  - flowing data pipelines between layers
 *  - subtle drifting particles in the background
 *
 * No robots, no brains, no faces — pure engineering schematic.
 */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // re-seed particles on resize
      const count = Math.max(30, Math.floor((rect.width * rect.height) / 12000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.5 + 0.1,
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
        ctx.fillStyle = `rgba(0, 224, 255, ${p.a})`;
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

  return (
    <div className="relative h-full w-full">
      {/* Particle canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* SVG neural architecture layer */}
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Abstract diagram of an AI model architecture with connected nodes and data flows."
      >
        <defs>
          <linearGradient id="hl-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(0,224,255,0)" />
            <stop offset="50%" stopColor="rgba(0,224,255,0.55)" />
            <stop offset="100%" stopColor="rgba(110,168,255,0)" />
          </linearGradient>
          <linearGradient id="hl-node" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00E0FF" />
            <stop offset="100%" stopColor="#6EA8FF" />
          </linearGradient>
          <radialGradient id="hl-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,224,255,0.5)" />
            <stop offset="100%" stopColor="rgba(0,224,255,0)" />
          </radialGradient>
          <filter id="hl-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Layer labels (left axis) */}
        {[
          { y: 90, label: "INPUT" },
          { y: 200, label: "EMBED" },
          { y: 310, label: "ATTN" },
          { y: 420, label: "OUTPUT" },
        ].map((row) => (
          <g key={row.label}>
            <text
              x="32"
              y={row.y + 4}
              fill="rgba(138,147,166,0.7)"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="1.5"
            >
              {row.label}
            </text>
            <line
              x1="80"
              y1={row.y}
              x2="780"
              y2={row.y}
              stroke="rgba(255,255,255,0.04)"
              strokeDasharray="2 6"
            />
          </g>
        ))}

        {/* Connection lines — input → embed */}
        {connectLines(
          nodesAt(140, 90, 5),
          nodesAt(220, 200, 6),
          "rgba(0,224,255,0.18)"
        )}
        {/* embed → attn */}
        {connectLines(
          nodesAt(220, 200, 6),
          nodesAt(560, 310, 6),
          "rgba(0,224,255,0.22)"
        )}
        {/* attn → output */}
        {connectLines(
          nodesAt(560, 310, 6),
          nodesAt(660, 420, 4),
          "rgba(110,168,255,0.22)"
        )}

        {/* Flowing data line across the architecture */}
        <path
          d="M140 90 C 260 90, 320 200, 400 250 S 560 310, 660 420"
          stroke="url(#hl-edge)"
          strokeWidth="1.5"
          fill="none"
          className="hl-flow"
        />

        {/* Render nodes */}
        {[
          ...nodesAt(140, 90, 5),
          ...nodesAt(220, 200, 6),
          ...nodesAt(560, 310, 6),
          ...nodesAt(660, 420, 4),
        ].map((n, i) => (
          <g key={`n-${i}`}>
            <circle cx={n.x} cy={n.y} r="9" fill="url(#hl-glow)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="3"
              fill="url(#hl-node)"
              className="hl-pulse"
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
            />
          </g>
        ))}

        {/* Architecture block borders (transformer blocks) */}
        <rect
          x="200"
          y="170"
          width="40"
          height="60"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          rx="4"
        />
        <rect
          x="540"
          y="280"
          width="40"
          height="60"
          fill="none"
          stroke="rgba(0,224,255,0.25)"
          rx="4"
        />
        <text
          x="540"
          y="275"
          fill="rgba(0,224,255,0.7)"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="1"
        >
          ATTENTION
        </text>
        <text
          x="200"
          y="165"
          fill="rgba(138,147,166,0.7)"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="1"
        >
          EMBED
        </text>

        {/* Output stream indicator */}
        <g transform="translate(700, 420)">
          <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(110,168,255,0.4)" strokeWidth="1" />
          <polygon points="60,0 54,-3 54,3" fill="rgba(110,168,255,0.7)" />
          <text x="0" y="-8" fill="rgba(138,147,166,0.7)" fontSize="9" fontFamily="monospace" letterSpacing="1">
            TOKENS
          </text>
        </g>
      </svg>

      {/* Subtle vignette over the entire visual */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 hl-mask-fade-x" />
    </div>
  );
}

function nodesAt(x: number, y: number, count: number): { x: number; y: number }[] {
  const spacing = 18;
  const total = (count - 1) * spacing;
  const startY = y - total / 2;
  return Array.from({ length: count }, (_, i) => ({ x, y: startY + i * spacing }));
}

function connectLines(
  from: { x: number; y: number }[],
  to: { x: number; y: number }[],
  stroke: string
) {
  const lines: React.ReactElement[] = [];
  from.forEach((f, fi) => {
    to.forEach((t, ti) => {
      // skip ~half to keep it readable
      if ((fi + ti) % 2 === 1) return;
      const midX = (f.x + t.x) / 2;
      lines.push(
        <path
          key={`${fi}-${ti}`}
          d={`M${f.x} ${f.y} C ${midX} ${f.y}, ${midX} ${t.y}, ${t.x} ${t.y}`}
          stroke={stroke}
          strokeWidth="0.6"
          fill="none"
        />
      );
    });
  });
  return lines;
}
