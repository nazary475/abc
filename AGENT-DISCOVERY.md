# Agent Discovery Implementation (RFC 8288)

This document describes the implementation of RFC 8288 Link headers for AI agent discovery on the Haal Lab website.

## Overview

The website now includes HTTP Link headers that allow AI agents to discover available resources, APIs, and documentation automatically. This follows RFC 8288 (Web Linking) and best practices for agent-ready websites.

## Implemented Link Headers

The following Link headers are included on all homepage routes:

### 1. AI Plugin Discovery (llms.txt)
```
Link: </llms.txt>; rel="ai-plugin"; type="text/plain"
```
Points to the existing llms.txt file that contains structured information about Haal Lab in a format optimized for LLM consumption.

### 2. AI Plugin Manifest
```
Link: </.well-known/ai-plugin.json>; rel="ai-plugin"; type="application/json"
```
A structured JSON manifest describing the Haal Lab AI plugin, including name, description, API endpoint, and authentication details.

### 3. OpenAPI Specification
```
Link: </.well-known/openapi.json>; rel="service-desc"; type="application/json"
```
Complete OpenAPI 3.1.0 specification for the Haal Lab Chat API, allowing agents to understand and interact with the API programmatically.

### 4. Research Feed (RSS)
```
Link: </research/feed.xml>; rel="alternate"; type="application/rss+xml"; title="Research Feed"
```
RSS feed for Haal Lab's research articles, enabling agents to discover and track new technical content.

### 5. Security Policy
```
Link: </.well-known/security.txt>; rel="security-policy"
```
Security contact information following the security.txt standard (RFC 9116).

### 6. Web App Manifest
```
Link: </manifest.json>; rel="manifest"
```
PWA manifest for the website.

## Implementation Details

### For Vercel Deployment (Server Mode)
Headers are configured in `next.config.ts` using the `headers()` function:
```typescript
async headers() {
  return [
    {
      source: "/:locale(en|de|fr|es|it)?",
      headers: [
        {
          key: "Link",
          value: [
            '</llms.txt>; rel="ai-plugin"; type="text/plain"',
            // ... more headers
          ].join(", "),
        },
      ],
    },
  ];
}
```

### For Static Export (GitHub Pages, Netlify, Cloudflare Pages)
Headers are defined in `public/_headers` file using Netlify header format:
```
/
  Link: </llms.txt>; rel="ai-plugin"; type="text/plain"
  Link: </.well-known/ai-plugin.json>; rel="ai-plugin"; type="application/json"
  # ... more headers
```

## Created Resources

### 1. `public/.well-known/ai-plugin.json`
AI plugin manifest describing Haal Lab's capabilities, API endpoints, and authentication.

### 2. `public/.well-known/openapi.json`
OpenAPI 3.1.0 specification for the `/api/chat` endpoint, documenting:
- Request/response schemas
- Authentication requirements
- Error responses
- Usage examples

### 3. `public/.well-known/security.txt`
Security policy file with contact information and expiration date.

### 4. `public/_headers`
Static header configuration for platforms that support this format (Netlify, Cloudflare Pages).

## Testing

### Testing on Vercel
Once deployed, test with:
```bash
curl -I https://haal-lab.solutions/
```

Look for the `Link:` header in the response.

### Testing Locally
1. Start the development server: `npm run dev`
2. Use curl to check headers:
```bash
curl -I http://localhost:3000/
```

Note: Headers may not appear in development mode with static export. Deploy to Vercel or a compatible host to test.

### Validating with Agent Discovery Tools
1. Visit [isitagentready.com](https://isitagentready.com) and enter `https://haal-lab.solutions`
2. The tool will check for Link headers and validate the discovery implementation

## Standards Compliance

- **RFC 8288**: Web Linking (HTTP Link headers)
- **RFC 9116**: security.txt specification
- **RFC 9727**: HTTP API descriptions (service-desc relation)
- **OpenAPI 3.1.0**: API specification format
- **IANA Link Relations**: Using registered relation types (ai-plugin, service-desc, alternate, security-policy, manifest)

## Benefits for AI Agents

1. **Automatic Discovery**: Agents can discover available APIs without manual configuration
2. **Structured Documentation**: OpenAPI spec provides complete API documentation
3. **Content Feeds**: RSS feed allows agents to track new research content
4. **Security Information**: Easy access to security contact and policies
5. **Standardized Format**: Following RFCs ensures compatibility with various agent frameworks

## Maintenance

- Update `openapi.json` when API endpoints change
- Refresh `security.txt` before expiration (currently set to 2027-12-31)
- Keep `ai-plugin.json` synchronized with actual capabilities
- Test Link headers after deployment configuration changes

## DNS-AID Integration

This Link header implementation is complemented by DNS-AID (DNS for AI Discovery) records that enable DNS-based agent discovery. See:

- **DNS-AID-IMPLEMENTATION.md** - Complete DNS-AID implementation guide
- **CLOUDFLARE-DNS-AID-SETUP.md** - Step-by-step Cloudflare setup
- **DNS-RECORDS.txt** - Specific DNS records to add

DNS-AID provides:
- DNS-based service discovery using SVCB/HTTPS records
- DNSSEC-authenticated trust chain
- Decentralized, cacheable agent discovery
- Protocol-agnostic endpoint advertisement

Together, Link headers (RFC 8288) and DNS-AID (IETF draft) provide comprehensive agent discovery:
- **Link Headers**: HTTP-based discovery when accessing the website
- **DNS-AID**: DNS-based discovery before connecting

## References

- [RFC 8288 - Web Linking](https://www.rfc-editor.org/rfc/rfc8288)
- [RFC 9727 - HTTP API Descriptions](https://www.rfc-editor.org/rfc/rfc9727)
- [RFC 9116 - security.txt](https://www.rfc-editor.org/rfc/rfc9116)
- [RFC 9460 - Service Binding (SVCB/HTTPS records)](https://www.rfc-editor.org/rfc/rfc9460)
- [IANA Link Relations Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml)
- [Agent Ready Skills - Link Headers](https://isitagentready.com/.well-known/agent-skills/link-headers/SKILL.md)
- [IETF Draft - DNS-AID](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/)
- [DNS-AID Website](https://dnsaid.org/)
