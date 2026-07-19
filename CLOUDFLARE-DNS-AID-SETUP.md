# Cloudflare DNS-AID Setup Guide

## Quick Start: Step-by-Step Instructions

Follow these exact steps to implement DNS-AID on haal-lab.solutions using Cloudflare.

---

## Step 1: Enable DNSSEC

DNSSEC is **required** for DNS-AID to provide authenticated agent discovery.

### Instructions:

1. Log in to **Cloudflare Dashboard**: https://dash.cloudflare.com/
2. Select domain: **haal-lab.solutions**
3. Click **DNS** in left sidebar
4. Scroll down to **Settings** section
5. Find **DNSSEC** section
6. Click **Enable DNSSEC** button
7. Cloudflare will display DS records
8. **Important:** If Cloudflare doesn't auto-configure:
   - Copy the DS record details
   - Add them to your domain registrar's DNS settings
9. Wait 10-15 minutes for propagation

### Verify DNSSEC:

Open PowerShell and run:
```powershell
# Install dig if needed (via Windows Subsystem for Linux or Git Bash)
# Or use online tool: https://dnssec-debugger.verisignlabs.com/haal-lab.solutions

nslookup -type=SOA haal-lab.solutions
```

Or use online checker: https://dnssec-debugger.verisignlabs.com/haal-lab.solutions

**Expected:** Green checkmarks showing valid DNSSEC chain

---

## Step 2: Add DNS-AID TXT Records

Since Cloudflare may have limited SVCB parameter support, we'll use TXT records which work universally.

### Record 1: Agent Index

**Settings:**
- Type: `TXT`
- Name: `_agents`
- Content: `index=https://haal-lab.solutions/.well-known/ai-plugin.json`
- Proxy status: `DNS only` (gray cloud)
- TTL: `Auto` or `3600`

**In Cloudflare:**
1. Go to **DNS** → **Records**
2. Click **Add record**
3. Select **TXT** from type dropdown
4. Name: `_agents`
5. Content: `index=https://haal-lab.solutions/.well-known/ai-plugin.json`
6. Click gray cloud (DNS only, not proxied)
7. Click **Save**

---

### Record 2: Capabilities

**Settings:**
- Type: `TXT`
- Name: `_capabilities._agents`
- Content: `chat,research,consulting,ai-systems,rag,llm-deployment`
- Proxy status: `DNS only`
- TTL: `Auto` or `3600`

**In Cloudflare:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_capabilities._agents`
4. Content: `chat,research,consulting,ai-systems,rag,llm-deployment`
5. Gray cloud (DNS only)
6. Click **Save**

---

### Record 3: MCP Chat Endpoint

**Settings:**
- Type: `TXT`
- Name: `_chat._mcp._agents`
- Content: `endpoint=https://haal-lab.solutions/api/chat`
- Proxy status: `DNS only`
- TTL: `Auto` or `3600`

**In Cloudflare:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_chat._mcp._agents`
4. Content: `endpoint=https://haal-lab.solutions/api/chat`
5. Gray cloud (DNS only)
6. Click **Save**

**Add another TXT record for protocol:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_chat._mcp._agents`
4. Content: `protocol=mcp`
5. Gray cloud (DNS only)
6. Click **Save**

**Note:** Multiple TXT records with same name are allowed and both will be returned.

---

### Record 4: Metadata

**Settings:**
- Type: `TXT`
- Name: `_meta._agents`
- Content: `name=Haal Lab`
- Proxy status: `DNS only`
- TTL: `Auto` or `3600`

**In Cloudflare:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_meta._agents`
4. Content: `name=Haal Lab`
5. Gray cloud (DNS only)
6. Click **Save**

**Add contact record:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_meta._agents`
4. Content: `contact=hussain.nazary@haal-lab.solutions`
5. Gray cloud (DNS only)
6. Click **Save**

---

### Record 5: HTTPS Assistant Endpoint

**Settings:**
- Type: `TXT`
- Name: `_assistant._https._agents`
- Content: `endpoint=https://haal-lab.solutions`
- Proxy status: `DNS only`
- TTL: `Auto` or `3600`

**In Cloudflare:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_assistant._https._agents`
4. Content: `endpoint=https://haal-lab.solutions`
5. Gray cloud (DNS only)
6. Click **Save**

**Add protocol record:**
1. Click **Add record**
2. Type: **TXT**
3. Name: `_assistant._https._agents`
4. Content: `protocol=https`
5. Gray cloud (DNS only)
6. Click **Save**

---

## Step 3: Try HTTPS Records (Optional)

Cloudflare supports HTTPS records (SVCB for HTTPS). Try adding these:

### HTTPS Record 1: Index

**Settings:**
- Type: `HTTPS`
- Name: `_index._agents`
- Priority: `1`
- Target: `haal-lab.solutions.`
- Parameters: Leave default or try to add `alpn="h2,h3" port=443`
- Proxy status: `DNS only`
- TTL: `Auto`

**In Cloudflare:**
1. Click **Add record**
2. Type: Select **HTTPS** if available
3. Name: `_index._agents`
4. Priority: `1`
5. Target: `haal-lab.solutions.` (note the trailing dot)
6. If parameters field exists, enter: `alpn="h2,h3" port=443`
7. Gray cloud (DNS only)
8. Click **Save**

**If HTTPS record type is not available or parameters don't work:**
- TXT records (added above) provide full fallback
- No need to worry - agents will discover via TXT records

---

## Step 4: Verify DNS Propagation

Wait **5-10 minutes** for DNS propagation.

### Test Commands:

**In PowerShell (or Git Bash with dig):**

```powershell
# Test TXT records
nslookup -type=TXT _agents.haal-lab.solutions
nslookup -type=TXT _capabilities._agents.haal-lab.solutions
nslookup -type=TXT _chat._mcp._agents.haal-lab.solutions

# Test HTTPS records (if added)
nslookup -type=HTTPS _index._agents.haal-lab.solutions

# Test DNSSEC
nslookup -type=DNSKEY haal-lab.solutions
```

**Online Tools:**
- DNS Checker: https://dnschecker.org/
- Enter: `_agents.haal-lab.solutions`
- Type: `TXT`
- Check worldwide propagation

---

## Step 5: Test with Agent Scanner

### Using isitagentready.com:

```bash
curl -X POST https://isitagentready.com/api/scan \
  -H "Content-Type: application/json" \
  -d "{\"url\":\"https://haal-lab.solutions\"}"
```

**Expected Response:**
```json
{
  "checks": {
    "discoverability": {
      "dnsAid": {
        "status": "pass",
        "message": "DNS-AID records found and validated"
      }
    }
  }
}
```

### Using dns-aid CLI (Python):

```powershell
# Install Python if not already
# Then install dns-aid
pip install "dns-aid[all]"

# Discover agents
dns-aid discover haal-lab.solutions

# Expected output: List of discovered agents and endpoints

# Run diagnostics
dns-aid doctor --domain haal-lab.solutions

# Verify specific agent
dns-aid verify _chat._mcp._agents.haal-lab.solutions
```

---

## Summary of DNS Records Added

After completing setup, your Cloudflare DNS should have:

| Type  | Name                              | Content/Target                                                     |
|-------|-----------------------------------|--------------------------------------------------------------------|
| TXT   | `_agents`                         | `index=https://haal-lab.solutions/.well-known/ai-plugin.json`      |
| TXT   | `_capabilities._agents`           | `chat,research,consulting,ai-systems,rag,llm-deployment`           |
| TXT   | `_chat._mcp._agents`              | `endpoint=https://haal-lab.solutions/api/chat`                     |
| TXT   | `_chat._mcp._agents`              | `protocol=mcp`                                                     |
| TXT   | `_meta._agents`                   | `name=Haal Lab`                                                    |
| TXT   | `_meta._agents`                   | `contact=hussain.nazary@haal-lab.solutions`                        |
| TXT   | `_assistant._https._agents`       | `endpoint=https://haal-lab.solutions`                              |
| TXT   | `_assistant._https._agents`       | `protocol=https`                                                   |
| HTTPS | `_index._agents` (optional)       | Priority: 1, Target: `haal-lab.solutions.`, Params: `alpn="h2,h3"` |

---

## Troubleshooting

### Problem: DNS records not resolving

**Solution:**
1. Check record names are exact (including underscores and dots)
2. Ensure proxy is **off** (gray cloud, not orange)
3. Wait 10-15 minutes for propagation
4. Clear local DNS cache: `ipconfig /flushdns`
5. Test with online tool: https://dnschecker.org/

### Problem: DNSSEC not working

**Solution:**
1. Verify DNSSEC enabled in Cloudflare
2. Check if DS records are at registrar
3. Use debugger: https://dnssec-debugger.verisignlabs.com/haal-lab.solutions
4. Contact Cloudflare support if issues persist

### Problem: HTTPS records not supported

**Solution:**
- Use TXT records (already added above)
- TXT records provide full DNS-AID functionality
- No action needed - agents will discover via TXT

### Problem: isitagentready.com scan fails

**Solution:**
1. Verify DNSSEC is enabled and valid
2. Check TXT records are returning correct values
3. Ensure `.well-known/ai-plugin.json` is accessible
4. Test individual components:
   ```bash
   curl https://haal-lab.solutions/.well-known/ai-plugin.json
   nslookup -type=TXT _agents.haal-lab.solutions
   ```

---

## Next Steps After Setup

1. ✅ DNSSEC enabled
2. ✅ DNS-AID records added
3. ✅ Verified with dns-aid CLI
4. ✅ Scanned with isitagentready.com
5. 🔄 Monitor DNS-AID discovery monthly
6. 🔄 Update records if endpoints change
7. 🔄 Maintain DNSSEC validity

---

## Visual Summary

```
┌──────────────────────────────────────────────────────────────┐
│                    Cloudflare Dashboard                      │
│                  haal-lab.solutions DNS                      │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  1. Enable DNSSEC                                            │
│     DNS → Settings → DNSSEC → Enable                         │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  2. Add TXT Records                                          │
│     • _agents                                                │
│     • _capabilities._agents                                  │
│     • _chat._mcp._agents (x2)                                │
│     • _meta._agents (x2)                                     │
│     • _assistant._https._agents (x2)                         │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  3. Optional: Try HTTPS Records                              │
│     • _index._agents                                         │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  4. Wait 5-10 minutes for propagation                        │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  5. Verify with nslookup or dnschecker.org                   │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  6. Test with dns-aid CLI or isitagentready.com              │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
                          ✅ Done!
```

---

## Resources

- **This Guide:** CLOUDFLARE-DNS-AID-SETUP.md
- **Full Implementation:** DNS-AID-IMPLEMENTATION.md
- **DNS Records Reference:** DNS-RECORDS.txt
- **Link Headers:** AGENT-DISCOVERY.md
- **Cloudflare Dashboard:** https://dash.cloudflare.com/
- **DNSSEC Debugger:** https://dnssec-debugger.verisignlabs.com/
- **DNS Checker:** https://dnschecker.org/
- **Scanner:** https://isitagentready.com/

---

## Support

Questions? Email: hussain.nazary@haal-lab.solutions
