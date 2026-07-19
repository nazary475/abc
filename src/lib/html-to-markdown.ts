import TurndownService from 'turndown';

/**
 * Converts HTML to clean, token-efficient Markdown for AI agents.
 * This follows the Markdown for Agents pattern where agents can request
 * markdown versions via Accept: text/markdown content negotiation.
 */

const turndownService = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
  strongDelimiter: '**',
});

// Remove navigation, footers, scripts, and other non-content elements
turndownService.remove(['nav', 'footer', 'script', 'style', 'noscript', 'iframe']);

// Custom rules for better markdown output
turndownService.addRule('removeClasses', {
  filter: function (node) {
    return node.hasAttribute('class');
  },
  replacement: function (content, node) {
    // Pass through the content without the class attributes
    return content;
  },
});

/**
 * Converts HTML content to Markdown
 * @param html - HTML string to convert
 * @returns Markdown string
 */
export function htmlToMarkdown(html: string): string {
  try {
    // Clean up the HTML before conversion
    let cleanHtml = html
      // Remove script and style tags and their content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      // Remove navigation elements
      .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
      // Remove footer elements
      .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
      // Remove excessive whitespace
      .replace(/\s+/g, ' ')
      .trim();

    const markdown = turndownService.turndown(cleanHtml);
    
    // Clean up the markdown
    return markdown
      // Remove excessive blank lines (more than 2 consecutive)
      .replace(/\n{3,}/g, '\n\n')
      // Trim whitespace
      .trim();
  } catch (error) {
    console.error('Error converting HTML to Markdown:', error);
    throw error;
  }
}

/**
 * Estimates the number of tokens in a text string
 * Uses a simple heuristic: ~4 characters per token (GPT-style tokenization)
 * @param text - Text to estimate tokens for
 * @returns Estimated token count
 */
export function estimateTokens(text: string): number {
  // Simple estimation: ~4 characters per token
  // This is a rough approximation for GPT-style tokenization
  return Math.ceil(text.length / 4);
}

/**
 * Creates a markdown-friendly representation of page content
 * Includes frontmatter with metadata
 * @param title - Page title
 * @param description - Page description
 * @param content - Page content (HTML)
 * @param url - Page URL
 * @returns Markdown string with frontmatter
 */
export function createMarkdownPage(
  title: string,
  description: string,
  content: string,
  url: string
): string {
  const markdownContent = htmlToMarkdown(content);
  const tokens = estimateTokens(markdownContent);
  
  // YAML frontmatter
  const frontmatter = `---
title: ${title}
description: ${description}
url: ${url}
tokens: ${tokens}
---

`;

  return frontmatter + markdownContent;
}
