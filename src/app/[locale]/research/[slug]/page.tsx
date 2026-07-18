import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import { ResearchArticle } from "@/components/pages/research-article";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { RelatedLinks } from "@/components/site/related-links";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/research-articles";
import { generateResearchHreflangAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  // Generate rich keywords from title, excerpt, tags, and category
  const keywords = [
    ...article.tags,
    article.category,
    "AI research",
    "LLM deployment",
    "AI engineering",
    "machine learning",
    "Haal Lab",
    ...article.title.toLowerCase().split(" ").filter(w => w.length > 3)
  ];

  // Extract key phrases for better GEO
  const keyPhrases = article.excerpt.match(/[A-Z][a-z]+(?:\s+[a-z]+){1,4}/g) || [];

  return {
    title: `${article.title} | Haal Lab Research`,
    description: article.excerpt,
    keywords: [...new Set([...keywords, ...keyPhrases])].join(", "),
    authors: [{ name: article.author || "Haal Lab Team" }],
    creator: "Haal Lab",
    publisher: "Haal Lab",
    applicationName: "Haal Lab Research",
    
    // Professional multilingual SEO with x-default
    ...generateResearchHreflangAlternates(locale as Locale, slug),
    
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://haal-lab.solutions/${locale}/research/${slug}`,
      siteName: "Haal Lab",
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author || "Haal Lab Team"],
      tags: article.tags,
      locale: locale,
      alternateLocale: ["en", "de", "fr"].filter(l => l !== locale),
    },
    
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      creator: "@haallab",
      site: "@haallab",
    },
    
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    // Additional metadata for AI crawlers
    other: {
      "article:published_time": article.date,
      "article:author": article.author || "Haal Lab Team",
      "article:section": article.category,
      "article:tag": article.tags.join(", "),
      "reading:time": article.readTime,
      "citation_title": article.title,
      "citation_author": article.author || "Haal Lab Team",
      "citation_publication_date": article.date,
      "citation_journal_title": "Haal Lab Research",
      // Dublin Core metadata for academic/research indexing
      "DC.title": article.title,
      "DC.creator": article.author || "Haal Lab Team",
      "DC.date": article.date,
      "DC.description": article.excerpt,
      "DC.subject": article.tags.join("; "),
      "DC.type": "Text.Article",
      "DC.format": "text/html",
      "DC.language": locale,
    },
  };
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Enhanced article schema with comprehensive metadata
  const enhancedArticleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "TechArticle", "ScholarlyArticle"],
    headline: article.title,
    description: article.excerpt,
    abstract: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    
    author: {
      "@type": "Person",
      name: article.author || "Haal Lab Team",
      url: "https://haal-lab.solutions",
      jobTitle: "AI Engineering Team",
      worksFor: {
        "@type": "Organization",
        name: "Haal Lab",
        url: "https://haal-lab.solutions",
      },
    },
    
    publisher: {
      "@type": "Organization",
      name: "Haal Lab",
      url: "https://haal-lab.solutions",
      logo: { 
        "@type": "ImageObject", 
        url: "https://haal-lab.solutions/logo.svg",
        width: 600,
        height: 600,
      },
    },
    
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://haal-lab.solutions/${locale}/research/${slug}`,
    },
    
    keywords: article.tags.join(", "),
    articleSection: article.category,
    wordCount: article.content.split(/\s+/).length,
    timeRequired: `PT${article.readTime.split(" ")[0]}M`,
    
    genre: ["Technology", "Artificial Intelligence", "Engineering"],
    about: {
      "@type": "Thing",
      name: "Artificial Intelligence Engineering",
      description: "Practical AI deployment and LLM engineering",
    },
    
    educationalUse: "Professional Development",
    learningResourceType: "Technical Article",
    
    audience: {
      "@type": "Audience",
      audienceType: ["Developers", "Engineers", "Technical Leaders", "AI Practitioners"],
    },
    
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://haal-lab.solutions",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research",
          item: `https://haal-lab.solutions/${locale}/research`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://haal-lab.solutions/${locale}/research/${slug}`,
        },
      ],
    },
    
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    inLanguage: locale,
  };

  return (
    <>
      {/* Enhanced JSON-LD for search engines and AI crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedArticleSchema) }}
      />
      
      <PageSchemas path={`/research/${slug}`} locale={locale} />
      <Breadcrumbs
        path={`/research/${slug}`}
        customLabel={article.title}
      />
      <ResearchArticle article={article} />
      <RelatedLinks
        current="/research"
        title="Continue exploring"
        eyebrow="Next"
      />
    </>
  );
}
