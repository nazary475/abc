# DNS-AID Implementation Guide for Haal Lab

## Overview

DNS for AI Discovery (DNS-AID) enables AI agents to discover your services through DNS using SVCB/HTTPS records. This document describes the implementation for haal-lab.solutions.

## What is DNS-AID?

DNS-AID is a standardized way for AI agents to discover other agents, APIs, and services using the existing DNS infrastructure. It leverages:

- **RFC 9460** - Service Binding (SVCB) and HTTPS records
- **RFC 4033** - DNSSEC for trust and authentication
- **IETF Draft** - draft-mozleywilliams-dnsop-dnsaid

Think of it as "service discovery for AI agents" - similar to how SRV records work for services, but designed specifically for AI agent-to-agent communication.

## DNS-AID Naming Pattern

DNS-AID uses a structured naming convention:

```
_<agent-name>._<protocol>._agents.<your-domain>
```

### Examples for Haal Lab:

1. **Index (entry point)**
   ```
   _index._agents.haal-lab.solutions
   ```

2. **MCP Chat Agent**
   ```
   _chat._mcp._agents.haal-lab.solutions
   ```

3. **HTTPS Assistant**
   ```
   _assistant._https._agents.haal-lab.solutions
   ```

## DNS Records to Add

### Option 1: HTTPS Records (Preferred)

If your DNS provider (Cloudflare) supports HTTPS records with custom parameters:

```dns
; Agent discovery index
_index._agents.haal-lab.solutions. 3600 IN HTTPS 1 haal-lab.solutions. (
    alpn="h2,h3"
    port=443
)

; MCP chat endpoint
_chat._mcp._agents.haal-lab.solutions. 3600 IN HTTPS 1 haal-lab.solutions. (
    alpn="mcp"
    port=443
)

; HTTPS assistant endpoint
_assistant._https._agents.haal-lab.solutions. 3600 IN HTTPS 1 haal-lab.solutions. (
    alpn="h2"
    port=443
)
```

### Option 2: TXT Records (Fallback)

If HTTPS/SVCB records aren't fully supported, use TXT records:

```dns
; Index pointer
_agents.haal-lab.solutions. 3600 IN TXT "index=https://haal-lab.solutions/.well-known/ai-plugin.json"

; Capabilities advertisement
_capabilities._agents.haal-lab.solutions. 3600 IN TXT "chat,research,consulting,ai-systems"

; MCP endpoint
_chat._mcp._agents.haal-lab.solutions. 3600 IN TXT "endpoint=https://haal-lab.solutions/api/chat" "protocol=mcp"

; Metadata
_meta._agents.haal-lab.solutions. 3600 IN TXT "name=Haal Lab" "contact=hussain.nazary@haal-lab.solutions"
```

## Implementation Steps

### Step 1: Enable DNSSEC (REQUIRED)

DNSSEC provides cryptographic authentication for DNS records, which is essential for agent trust.

**In Cloudflare:**

1. Log in to Cloudflare Dashboard
2. Select your domain: haal-lab.solutions
3. Go to **DNS** → **Settings**
4. Scroll to **DNSSEC** section
5. Click **Enable DNSSEC**
6. Follow the prompts to complete setup
7. Verify with: `dig +dnssec haal-lab.solutions`

**Why DNSSEC matters for DNS-AID:**
- Prevents DNS spoofing attacks
- Provides cryptographic proof of record authenticity
- Required by DNS-AID specification for public zones
- Enables agents to trust discovery results

### Step 2: Add DNS Records

**In Cloudflare DNS:**

1. Go to **DNS** → **Records**
2. Click **Add record**

#### Add HTTPS Records (if supported):

**Record 1: Index**
- Type: `HTTPS`
- Name: `_index._agents`
- Target: `haal-lab.solutions`
- Priority: `1`
- Parameters: `alpn=h2,h3 port=443`
- TTL: `3600` (1 hour)

**Record 2: MCP Chat**
- Type: `HTTPS`
- Name: `_chat._mcp._agents`
- Target: `haal-lab.solutions`
- Priority: `1`
- Parameters: `alpn=mcp port=443`
- TTL: `3600`

**Record 3: HTTPS Assistant**
- Type: `HTTPS`
- Name: `_assistant._https._agents`
- Target: `haal-lab.solutions`
- Priority: `1`
- Parameters: `alpn=h2 port=443`
- TTL: `3600`

#### Add TXT Records (fallback or supplementary):

**Record 4: Agent Index**
- Type: `TXT`
- Name: `_agents`
- Content: `index=https://haal-lab.solutions/.well-known/ai-plugin.json`
- TTL: `3600`

**Record 5: Capabilities**
- Type: `TXT`
- Name: `_capabilities._agents`
- Content: `chat,research,consulting,ai-systems`
- TTL: `3600`

**Record 6: Metadata**
- Type: `TXT`
- Name: `_meta._agents`
- Content: `name=Haal Lab` (add multiple TXT values)
- Content: `contact=hussain.nazary@haal-lab.solutions`
- TTL: `3600`

### Step 3: Verify DNS Propagation

Wait 5-10 minutes for DNS propagation, then test:

```bash
# Check HTTPS records (if added)
dig HTTPS _index._agents.haal-lab.solutions

# Check TXT records
dig TXT _agents.haal-lab.solutions

# Check DNSSEC
dig +dnssec haal-lab.solutions

# Online tools
# https://dnschecker.org/
# https://dnssec-debugger.verisignlabs.com/haal-lab.solutions
```

### Step 4: Test with DNS-AID Tools

**Using isitagentready.com:**

```bash
curl -X POST https://isitagentready.com/api/scan \
  -H "Content-Type: application/json" \
  -d '{"url":"https://haal-lab.solutions"}'
```

Check that `checks.discoverability.dnsAid.status` returns `"pass"`.

**Using dns-aid CLI (Python):**

```bash
# Install dns-aid
pip install "dns-aid[all]"

# Discover agents
dns-aid discover haal-lab.solutions

# Verify a specific agent
dns-aid verify _chat._mcp._agents.haal-lab.solutions

# Run diagnostics
dns-aid doctor --domain haal-lab.solutions
```

## Integration with Existing Resources

DNS-AID complements the existing agent discovery mechanisms:

### 1. Link Headers (Already Implemented)
```http
Link: </.well-known/ai-plugin.json>; rel="ai-plugin"
```

### 2. .well-known Resources (Already Implemented)
- `/.well-known/ai-plugin.json` - AI plugin manifest
- `/.well-known/openapi.json` - OpenAPI spec
- `/.well-known/security.txt` - Security contact

### 3. llms.txt (Already Implemented)
- `/llms.txt` - LLM-optimized site information

### 4. DNS-AID (NEW)
- DNS-based discovery via SVCB/HTTPS records
- DNSSEC-authenticated trust chain
- Cacheable and decentralized

## Agent Discovery Flow

When an AI agent wants to discover Haal Lab's services:

```
┌─────────────────────────────────────────────────────────────────┐
│  1. DNS Query                                                   │
│     Agent queries: _index._agents.haal-lab.solutions           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. DNS Response (DNSSEC-signed)                               │
│     Returns: HTTPS record with endpoint + protocol info        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. DNSSEC Validation                                          │
│     Agent verifies cryptographic chain of trust                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  4. Fetch Metadata                                             │
│     GET /.well-known/ai-plugin.json                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  5. Connect to Service                                         │
│     POST /api/chat with proper protocol (MCP, HTTPS, etc.)     │
└─────────────────────────────────────────────────────────────────┘
```

## Parameters Explained

### ALPN (Application-Layer Protocol Negotiation)
- `alpn="h2"` - HTTP/2
- `alpn="h3"` - HTTP/3
- `alpn="mcp"` - Model Context Protocol
- `alpn="a2a"` - Agent-to-Agent protocol

### Port
- `port=443` - HTTPS (standard)
- Custom ports if needed

### Additional Parameters (future):
- `cap` - Capability document URI
- `cap-sha256` - Integrity hash
- `bap` - Bulk protocol versions
- `policy` - Governance URL
- `realm` - Tenant scope

## Benefits

1. **Decentralized Discovery**
   - No central registry required
   - Works with existing DNS infrastructure
   - Leverages DNS caching for performance

2. **Authenticated Trust**
   - DNSSEC provides cryptographic verification
   - Prevents spoofing and tampering
   - Domain ownership proves authority

3. **Protocol Agnostic**
   - Supports MCP, A2A, HTTPS, and future protocols
   - Flexible endpoint configuration
   - Multiple agents per domain

4. **Standards-Based**
   - Built on RFC 9460 (SVCB/HTTPS records)
   - IETF draft specification
   - Interoperable with DNS-AID tools

5. **Enterprise-Ready**
   - Split-horizon DNS support
   - Multi-tenant isolation
   - Internal/external agent separation

## Cloudflare Limitations

**Current Status (as of 2026):**
- Cloudflare supports HTTPS records
- Custom SVCB parameters may have limited support
- TXT record fallback always works

**Workarounds:**
1. Use TXT records for full compatibility
2. Implement Cloudflare Worker for custom response
3. Contact Cloudflare support for SVCB parameter support
4. Consider alternative DNS provider (Route53, NS1) for full SVCB

## Monitoring and Maintenance

### Regular Checks

**Monthly:**
- Verify DNSSEC signatures are valid
- Test DNS-AID discovery with `dns-aid verify`
- Check isitagentready.com scan results

**After Changes:**
- Re-run `dns-aid doctor --domain haal-lab.solutions`
- Update DNS records if endpoints change
- Refresh ai-plugin.json manifest

**Expiration:**
- DNSSEC keys rotate automatically in Cloudflare
- Monitor for any DNSSEC issues
- Keep security.txt expiration current

## Troubleshooting

### DNS-AID Discovery Fails

**Check DNSSEC:**
```bash
dig +dnssec haal-lab.solutions
```
Look for `ad` (authenticated data) flag.

**Check DNS Records:**
```bash
dig TXT _agents.haal-lab.solutions
dig HTTPS _index._agents.haal-lab.solutions
```

**Use DNS-AID Doctor:**
```bash
dns-aid doctor --domain haal-lab.solutions
```

### DNSSEC Validation Errors

1. Check DNSSEC status in Cloudflare
2. Verify DS records at registrar
3. Use dnssec-debugger.verisignlabs.com
4. Contact Cloudflare support if issues persist

### HTTPS Records Not Working

1. Verify Cloudflare supports HTTPS records
2. Check record syntax and parameters
3. Fall back to TXT records
4. Consider DNS-over-HTTPS query: `https://cloudflare-dns.com/dns-query`

## Security Considerations

1. **DNSSEC is Mandatory**
   - Prevents DNS cache poisoning
   - Ensures record authenticity
   - Required by DNS-AID spec

2. **Record Validation**
   - Agents should validate DNSSEC signatures
   - Check TLS certificates match DNS hints
   - Verify capability document integrity

3. **Access Control**
   - DNS-AID only provides discovery
   - Authentication happens at application layer
   - Use OAuth, API keys, or mTLS for access control

4. **Privacy**
   - DNS queries are public
   - Sensitive endpoints should use authentication
   - Consider split-horizon DNS for internal agents

## Resources

- **IETF Draft:** https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/
- **RFC 9460 (SVCB):** https://www.rfc-editor.org/rfc/rfc9460
- **RFC 4033 (DNSSEC):** https://www.rfc-editor.org/rfc/rfc4033
- **DNS-AID Website:** https://dnsaid.org/
- **DNS-AID GitHub:** https://github.com/infobloxopen/dns-aid-core
- **Scanner:** https://isitagentready.com/
- **DNSSEC Debugger:** https://dnssec-debugger.verisignlabs.com/

## Next Steps

1. ✅ Link headers implemented (AGENT-DISCOVERY.md)
2. ✅ .well-known resources created
3. ⏳ **Enable DNSSEC in Cloudflare**
4. ⏳ **Add DNS-AID records (HTTPS or TXT)**
5. ⏳ Test with dns-aid CLI
6. ⏳ Verify with isitagentready.com
7. ⏳ Monitor and maintain

## Support

For questions about DNS-AID implementation:
- Email: hussain.nazary@haal-lab.solutions
- Review: DNS-RECORDS.txt for specific records to add
- Reference: AGENT-DISCOVERY.md for Link headers
