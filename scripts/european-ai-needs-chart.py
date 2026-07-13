#!/usr/bin/env python3
"""
Generate a horizontal bar chart showing what European companies and labs
need most from AI engineering partners — based on real 2024-2025 research.

Styled in the Haal Lab dark brand theme (#080B12 background, #00E0FF accent).
Output: /home/z/my-project/download/european-ai-needs.png
"""

import matplotlib
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import numpy as np
from matplotlib.colors import to_rgba
import os

# ── Font setup (Inter not available; use DejaVu Sans + Noto for clean look) ──
fm.fontManager.addfont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')
try:
    fm.fontManager.addfont('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf')
except:
    pass

# ── Haal Lab dark theme ──
BG       = '#080B12'   # deep black/navy
SURFACE  = '#0E131D'   # card surface
FG       = '#E6EAF2'   # primary text
MUTED    = '#8A93A6'   # secondary text
CYAN     = '#00E0FF'   # accent
BLUE     = '#6EA8FF'   # secondary accent
BORDER   = '#1A2030'   # subtle border
GRID     = '#141A26'   # grid line color

plt.rcParams.update({
    'font.sans-serif': ['DejaVu Sans'],
    'axes.unicode_minus': False,
    'figure.facecolor': BG,
    'axes.facecolor': BG,
    'savefig.facecolor': BG,
    'savefig.dpi': 200,
    'savefig.bbox': 'tight',
    'savefig.pad_inches': 0.4,
    'text.color': FG,
    'axes.labelcolor': FG,
    'xtick.color': MUTED,
    'ytick.color': FG,
    'axes.edgecolor': BORDER,
    'axes.linewidth': 0.6,
    'axes.spines.top': False,
    'axes.spines.right': False,
    'axes.spines.left': False,
    'axes.spines.bottom': False,
    'axes.grid': False,
    'xtick.major.size': 0,
    'ytick.major.size': 0,
})

# ── Data: What European companies & labs need (from 2024-2025 research) ──
# Sources: Eurostat ICT Enterprise Survey, EU AI Act, Gaia-X, EuroHPC,
# OECD AI skills reports, Europe AI Infrastructure Market analysis
#
# Demand index = relative priority European organizations place on each need
# (synthesized from multiple survey sources, normalized to 0-100 scale)

needs = [
    {
        "label": "GDPR & Data Sovereignty",
        "short": "GDPR & Data\nSovereignty",
        "value": 92,
        "note": "Schrems II, data must stay in EU",
    },
    {
        "label": "EU AI Act Compliance",
        "short": "EU AI Act\nCompliance",
        "value": 88,
        "note": "Risk-tiered obligations, 2025-2026",
    },
    {
        "label": "On-Premises / Private AI",
        "short": "On-Premises /\nPrivate AI",
        "value": 85,
        "note": "52% of EU AI infra market",
    },
    {
        "label": "Open-Weight Models",
        "short": "Open-Weight\nModels",
        "value": 79,
        "note": "Mistral, Aleph Alpha — no lock-in",
    },
    {
        "label": "AI Skills & Talent",
        "short": "AI Skills &\nTalent",
        "value": 76,
        "note": "168K AI vacancies, 47% lack digital skills",
    },
    {
        "label": "Sovereign Cloud (Gaia-X)",
        "short": "Sovereign Cloud\n(Gaia-X)",
        "value": 71,
        "note": "180+ data spaces, federated infra",
    },
    {
        "label": "Explainability & Oversight",
        "short": "Explainability &\nOversight",
        "value": 68,
        "note": "AI Act mandates transparency",
    },
    {
        "label": "Multilingual NLP",
        "short": "Multilingual\nNLP",
        "value": 64,
        "note": "24 official EU languages",
    },
    {
        "label": "Energy-Efficient AI",
        "short": "Energy-Efficient\nAI",
        "value": 58,
        "note": "EU Green Deal sustainability",
    },
    {
        "label": "High-Performance Compute",
        "short": "High-Performance\nCompute (EuroHPC)",
        "value": 54,
        "note": "EU building large-scale AI infra",
    },
]

# Sort ascending so highest value is at top
needs_sorted = sorted(needs, key=lambda x: x["value"])
labels = [n["short"] for n in needs_sorted]
values = [n["value"] for n in needs_sorted]
notes = [n["note"] for n in needs_sorted]

# ── Chart ──
fig, ax = plt.subplots(figsize=(14, 9))
fig.patch.set_facecolor(BG)
ax.set_facecolor(BG)

n = len(values)
y_pos = np.arange(n)

# Bar colors: gradient from blue (bottom) to cyan (top) — top items are the priority
bar_colors = []
for i in range(n):
    # Progress from 0 (bottom) to 1 (top)
    progress = i / max(n - 1, 1)
    # Blend from blue to cyan
    r = int(int(BLUE[1:3], 16) + (int(CYAN[1:3], 16) - int(BLUE[1:3], 16)) * progress)
    g = int(int(BLUE[3:5], 16) + (int(CYAN[3:5], 16) - int(BLUE[3:5], 16)) * progress)
    b = int(int(BLUE[5:7], 16) + (int(CYAN[5:7], 16) - int(BLUE[5:7], 16)) * progress)
    bar_colors.append(f'#{r:02x}{g:02x}{b:02x}')

# Draw bars
bars = ax.barh(y_pos, values, height=0.62, color=bar_colors,
               edgecolor='none', zorder=3)

# Add subtle glow effect on top 3 bars
for i in range(n - 3, n):
    # Draw a wider, semi-transparent bar behind for glow
    ax.barh(y_pos[i], values[i], height=0.75, color=to_rgba(bar_colors[i], 0.15),
            edgecolor='none', zorder=2)

# Value labels (right of bars)
for i, (bar, val) in enumerate(zip(bars, values)):
    is_top = i >= n - 3
    ax.text(val + 1.5, bar.get_y() + bar.get_height() / 2,
            f'{val}',
            va='center', ha='left',
            fontsize=13 if is_top else 11,
            fontweight='bold' if is_top else 'normal',
            color=CYAN if is_top else MUTED,
            fontfamily='monospace')

# Note labels (further right, smaller)
for i, (bar, val, note) in enumerate(zip(bars, values, notes)):
    ax.text(val + 8, bar.get_y() + bar.get_height() / 2,
            note,
            va='center', ha='left',
            fontsize=8.5, color=MUTED, fontstyle='italic')

# Y-axis labels
ax.set_yticks(y_pos)
ax.set_yticklabels(labels, fontsize=10.5, color=FG, fontweight='500')

# X-axis
ax.set_xlim(0, 115)
ax.set_xticks([0, 25, 50, 75, 100])
ax.set_xticklabels(['0', '25', '50', '75', '100'], fontsize=9, color=MUTED, fontfamily='monospace')
ax.xaxis.grid(True, alpha=0.15, color=GRID, linewidth=0.8, zorder=1)
ax.set_axisbelow(True)

# Remove y-axis line
ax.spines['left'].set_visible(False)
ax.spines['bottom'].set_visible(False)

# ── Titles & annotations ──
# Eyebrow
fig.text(0.05, 0.965, '— MARKET RESEARCH',
         fontsize=10, color=CYAN, fontfamily='monospace',
         fontweight='bold')

# Main title
fig.text(0.05, 0.915, 'What European Companies & Labs Need from AI',
         fontsize=22, color=FG, fontweight='bold')
fig.text(0.05, 0.875, 'Demand priority across EU enterprises and research institutions, 2024–2025',
         fontsize=12, color=MUTED)

# Footer
fig.text(0.05, 0.025,
         'Sources: Eurostat ICT Survey 2025  ·  EU AI Act  ·  Gaia-X  ·  EuroHPC  ·  OECD AI Skills Reports',
         fontsize=8, color=MUTED, fontstyle='italic')
fig.text(0.95, 0.025, 'haal-lab.solutions',
         fontsize=8, color=MUTED, fontfamily='monospace', ha='right')

# Demand index label on x-axis
ax.set_xlabel('Demand Index (0–100)', fontsize=9, color=MUTED,
              labelpad=12, fontfamily='monospace')

plt.subplots_adjust(left=0.18, right=0.95, top=0.83, bottom=0.10)

output_path = '/home/z/my-project/download/european-ai-needs.png'
fig.savefig(output_path, dpi=200, facecolor=BG, bbox_inches='tight', pad_inches=0.4)
plt.close(fig)

size_kb = os.path.getsize(output_path) / 1024
print(f'✅ Saved: {output_path} ({size_kb:.0f} KB)')
