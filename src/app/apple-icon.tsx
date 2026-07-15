import { ImageResponse } from 'next/og';

// Route segment config
export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080B12',
          borderRadius: '40px',
          border: '2px solid rgba(255,255,255,0.12)',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#00E0FF" />
              <stop offset="100%" stopColor="#6EA8FF" />
            </linearGradient>
          </defs>
          <path d="M4 2 V22 M4 12 H14 M14 2 V22" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="4" cy="2" r="2" fill="#00E0FF" />
          <circle cx="14" cy="12" r="2" fill="#00E0FF" />
          <circle cx="4" cy="22" r="2" fill="#6EA8FF" />
          <path d="M18 10 L22 12 L18 14 Z" fill="url(#grad)" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
