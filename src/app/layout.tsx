import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Root layout , provides <html> and <body> wrappers.
 * The locale-aware layout (Navbar, Footer, metadata, JSON-LD) lives in
 * src/app/[locale]/layout.tsx.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://haal-lab.solutions"),
  title: {
    default: "Haal Lab — Private AI Systems",
    template: "%s · Haal Lab",
  },
  description:
    "Deep-tech AI engineering company. We build private AI systems, LLM applications, RAG, and AI infrastructure.",
  applicationName: "Haal Lab",
  authors: [
    { name: "Hussain Nazary", url: "https://haal-lab.solutions" },
    { name: "Haal Lab", url: "https://haal-lab.solutions" }
  ],
  generator: "Next.js",
  keywords: [
    "AI engineering",
    "private AI",
    "LLM applications",
    "RAG systems",
    "AI infrastructure",
    "on-premise AI",
    "GDPR compliant AI",
    "AI sovereignty",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Hussain Nazary",
  publisher: "Haal Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/research/feed.xml", title: "Haal Lab Research Articles RSS Feed" },
      ],
    },
  },
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    shortcut: '/icon',
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
        color: '#00E0FF',
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://haal-lab.solutions",
    siteName: "Haal Lab",
    title: "Haal Lab — Private AI Systems",
    description:
      "On-premises AI systems. Deploy LLMs, RAG systems, and custom AI on your infrastructure with full data sovereignty.",
    images: [
      {
        url: "https://haal-lab.solutions/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haal Lab — Private AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@haallab",
    creator: "@haallab",
    title: "Haal Lab — Private AI Systems",
    description:
      "On-premises AI systems. Deploy LLMs, RAG systems, and custom AI on your infrastructure with full data sovereignty.",
    images: [
      {
        url: "https://haal-lab.solutions/og-image.png",
        alt: "Haal Lab — Private AI Systems",
      },
    ],
  },
  // Note: Site verified via DNS (Domain name provider method) in Google Search Console
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080B12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hussain Nazary, CTO & AI Engineer at Haal Lab" />
        <meta name="copyright" content="Haal Lab © 2026" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/icon" type="image/png" />
        <link rel="alternate" type="text/markdown" href="/sitemap.md" title="Markdown sitemap for AI agents" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add .js class immediately so reveal animations only run with JS enabled. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
