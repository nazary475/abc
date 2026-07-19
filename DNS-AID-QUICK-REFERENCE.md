# DNS-AID Quick Reference Card

## 🎯 What is DNS-AID?

DNS for AI Discovery - enables AI agents to discover services via DNS using SVCB/HTTPS records with DNSSEC authentication.

---

## 📋 Quick Checklist

- [ ] Enable DNSSEC in Cloudflare
- [ ] Add `_agents` TXT record (index)
- [ ] Add `_capabilities._agents` TXT record
- [ ] Add `_chat._mcp._agents` TXT records (x2)
- [ ] Add `_meta._agents` TXT records (x2)
- [ ] Add `_assistant._https._agents` TXT records (x2)
- [ ] Wait 10 minutes for DNS propagation
- [ ] Test with `nslookup` or dnschecker.org
- [ ] Verify with `dns-aid discover haal-lab.solutions`
- [ ] Scan with isitagentready.com

---

## 🚀 Records to Add (TXT - Universal)

### 1. Index Entry Point
```
Type: TXT
Name: _agents
Content: index=https://haal-lab.solutions/.well-known/ai-plugin.json
TTL: 3600
Proxy: DNS only (gray cloud)
```

### 2. Capabilities
```
Type: TXT
Name: _capabilities._agents
Content: chat,research,consulting,ai-systems,rag,llm-deployment
TTL: 3600
Proxy: DNS only
```

### 3. MCP Chat Endpoint (Record 1)
```
Type: TXT
Name: _chat._mcp._agents
Content: endpoint=https://haal-lab.solutions/api/chat
TTL: 3600
Proxy: DNS only
```

### 4. MCP Chat Protocol (Record 2)
```
Type: TXT
Name: _chat._mcp._agents
Content: protocol=mcp
TTL: 3600
Proxy: DNS only
```

### 5. Metadata - Name
```
Type: TXT
Name: _meta._agents
Content: name=Haal Lab
TTL: 3600
Proxy: DNS only
```

### 6. Metadata - Contact
```
Type: TXT
Name: _meta._agents
Content: contact=hussain.nazary@haal-lab.solutions
TTL: 3600
Proxy: DNS only
```

### 7. HTTPS Assistant (Record 1)
```
Type: TXT
Name: _assistant._https._agents
Content: endpoint=https://haal-lab.solutions
TTL: 3600
Proxy: DNS only
```

### 8. HTTPS Assistant Protocol (Record 2)
```
Type: TXT
Name: _assistant._https._agents
Content: protocol=https
TTL: 3600
Proxy: DNS only
```

---

## 🔒 DNSSEC Setup

**Cloudflare Dashboard:**
1. Select domain: haal-lab.solutions
2. Go to: DNS → Settings
3. Find: DNSSEC section
4. Click: Enable DNSSEC
5. Follow prompts (auto-configured on Cloudflare)

**Verify:**
```bash
nslookup -type=DNSKEY haal-lab.solutions
```
Or: https://dnssec-debugger.verisignlabs.com/haal-lab.solutions

---

## ✅ Testing Commands

### Test DNS Records
```powershell
# Index
nslookup -type=TXT _agents.haal-lab.solutions

# Capabilities
nslookup -type=TXT _capabilities._agents.haal-lab.solutions

# MCP Chat
nslookup -type=TXT _chat._mcp._agents.haal-lab.solutions

# Metadata
nslookup -type=TXT _meta._agents.haal-lab.solutions

# HTTPS Assistant
nslookup -type=TXT _assistant._https._agents.haal-lab.solutions
```

### Test with DNS-AID CLI
```bash
# Install
pip install "dns-aid[all]"

# Discover
dns-aid discover haal-lab.solutions

# Verify
dns-aid verify _chat._mcp._agents.haal-lab.solutions

# Diagnose
dns-aid doctor --domain haal-lab.solutions
```

### Test with Scanner
```bash
curl -X POST https://isitagentready.com/api/scan \
  -H "Content-Type: application/json" \
  -d "{\"url\":\"https://haal-lab.solutions\"}"
```

---

## 📐 DNS-AID Naming Pattern

```
_<agent-name>._<protocol>._agents.<domain>
```

**Examples:**
- `_chat._mcp._agents.haal-lab.solutions` - MCP chat agent
- `_assistant._https._agents.haal-lab.solutions` - HTTPS assistant
- `_index._agents.haal-lab.solutions` - Discovery index

**Protocols:**
- `mcp` - Model Context Protocol
- `https` - Standard HTTPS
- `a2a` - Agent-to-Agent
- `h2` - HTTP/2
- `h3` - HTTP/3

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Records not resolving | Wait 10 min, check name spelling, ensure gray cloud |
| DNSSEC errors | Verify enabled in Cloudflare, check DS records at registrar |
| Scanner fails | Check DNSSEC + TXT records + `.well-known/ai-plugin.json` |
| HTTPS records unsupported | Use TXT records (full functionality) |

---

## 📚 Resources

| Resource | Link |
|----------|------|
| Step-by-step Setup | CLOUDFLARE-DNS-AID-SETUP.md |
| Full Implementation | DNS-AID-IMPLEMENTATION.md |
| DNS Records List | DNS-RECORDS.txt |
| Link Headers | AGENT-DISCOVERY.md |
| Cloudflare Dashboard | https://dash.cloudflare.com/ |
| DNSSEC Debugger | https://dnssec-debugger.verisignlabs.com/ |
| DNS Checker | https://dnschecker.org/ |
| Scanner | https://isitagentready.com/ |
| DNS-AID Website | https://dnsaid.org/ |
| IETF Draft | https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/ |

---

## 🎓 Key Concepts

**SVCB/HTTPS Records:**
- Service Binding records (RFC 9460)
- Advertise endpoint metadata
- Include protocol, port, capabilities

**DNSSEC:**
- Cryptographic DNS authentication
- Prevents spoofing/tampering
- Required for DNS-AID

**TXT Fallback:**
- Universal compatibility
- Works on all DNS providers
- Full DNS-AID functionality

**Agent Discovery Flow:**
```
DNS Query → DNSSEC Validation → Metadata Fetch → Service Connection
```

---

## 💡 Quick Tips

1. **Always use DNS only** (gray cloud) for DNS-AID records
2. **DNSSEC is mandatory** - enable first
3. **TXT records work everywhere** - use them if HTTPS records fail
4. **Multiple TXT records** with same name are allowed
5. **Wait 10 minutes** for DNS propagation after changes
6. **Test immediately** with nslookup or dnschecker.org
7. **Verify monthly** to ensure records are valid

---

## 📞 Support

**Questions?**
- Email: hussain.nazary@haal-lab.solutions
- Review detailed guides: DNS-AID-IMPLEMENTATION.md
- Check DNS records: DNS-RECORDS.txt

---

## ✨ What You're Building

A **decentralized, authenticated, DNS-based discovery system** for AI agents:

✅ No central registry required  
✅ Uses existing DNS infrastructure  
✅ DNSSEC provides trust chain  
✅ Protocol agnostic (MCP, A2A, HTTPS)  
✅ Cacheable and performant  
✅ Industry standard (IETF draft, RFC 9460)  
✅ Works with existing agent tools  

---

**Last Updated:** January 2026  
**Status:** Ready for implementation  
**Platform:** Cloudflare DNS
