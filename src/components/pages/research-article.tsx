"use client";

import { Calendar, Clock, ArrowLeft, Tag as TagIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import {
  Reveal,
  SectionShell,
  Tag,
} from "@/components/blocks/primitives";
import type { Article } from "@/lib/research-articles";

interface ResearchArticleProps {
  article: Article;
}

export function ResearchArticle({ article }: ResearchArticleProps) {
  return (
    <>
      {/* Article Header */}
      <section className="relative overflow-hidden border-b border-hl-border bg-hl-surface/30 py-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 hl-grid-bg opacity-60" />
        
        <div className="hl-container hl-section-pad relative">
          <Reveal>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-medium text-hl-cyan transition-colors hover:text-hl-cyan/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Research
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-hl-border bg-hl-surface-2 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-hl-cyan">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-hl-muted">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-hl-muted">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-hl-muted">
              {article.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <TagIcon className="h-4 w-4 text-hl-muted" />
              {article.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>

          {article.author && (
            <Reveal delay={0.3}>
              <p className="mt-6 text-sm text-hl-muted">
                By <span className="font-semibold text-foreground">{article.author}</span>
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Article Content */}
      <SectionShell className="border-b border-hl-border">
        <Reveal>
          <article className="prose prose-lg prose-slate mx-auto max-w-4xl">
            <div 
              className="research-article-content"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(article.content) }}
            />
          </article>
        </Reveal>
      </SectionShell>

      {/* Share & CTA */}
      <SectionShell className="border-b border-hl-border bg-hl-surface/30">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-hl-border bg-hl-surface/60 p-10 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Want to implement this in your organization?
            </h3>
            <p className="max-w-2xl text-base text-hl-muted">
              We help teams deploy production-ready AI systems. Share your requirements and 
              we'll discuss the best approach for your use case.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90"
            >
              Discuss Your Project
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

// Simple markdown parser (you can replace with a proper library like marked or remark)
function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Headers (must process from h6 to h1 to avoid conflicts)
  html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Code blocks (process before other replacements)
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre class="bg-hl-surface-2 rounded-lg p-4 overflow-x-auto my-4"><code>$2</code></pre>');

  // Tables (improved to handle multi-line tables properly)
  html = html.replace(/(\|.+\|)\n(\|[-:\s|]+\|)\n((?:\|.+\|\n?)+)/gim, (match, header, separator, rows) => {
    const headerCells = header.split('|').filter((cell: string) => cell.trim()).map((cell: string) => 
      `<th class="border border-hl-border bg-hl-surface-2 px-4 py-2 font-semibold text-left">${cell.trim()}</th>`
    ).join('');
    
    const rowsHtml = rows.trim().split('\n').map((row: string) => {
      const cells = row.split('|').filter((cell: string) => cell.trim()).map((cell: string) => 
        `<td class="border border-hl-border px-4 py-2">${cell.trim()}</td>`
      ).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    
    return `<table class="w-full my-6 border-collapse border border-hl-border"><thead><tr>${headerCells}</tr></thead><tbody>${rowsHtml}</tbody></table>`;
  });

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-hl-cyan hover:underline">$1</a>');

  // Inline code
  html = html.replace(/`([^`]+)`/gim, '<code class="bg-hl-surface-2 px-2 py-0.5 rounded text-sm font-mono">$1</code>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li.*<\/li>)/gim, '<ul class="list-disc my-4">$1</ul>');

  // Horizontal rule
  html = html.replace(/^---$/gim, '<hr class="my-8 border-hl-border" />');

  // Paragraphs (process last)
  html = html.replace(/^\s*\n/gim, '<p class="mb-4">');
  html = html.replace(/\n\n/gim, '</p><p class="mb-4">');

  return html;
}
