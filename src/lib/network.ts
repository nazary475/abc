/**
 * Partners data for Haal Lab.
 *
 * Used by:
 * - PartnersSection (homepage + /network)
 * - /network page content
 */

export type Partner = {
  id: string;
  name: string;
  category: "Technology" | "Infrastructure" | "Research" | "Cloud";
  description: string;
  url: string;
  /** Two- or three-letter monogram shown if no logo image is available. */
  monogram: string;
  /** Real logo image URL (from image search). If set, replaces the monogram. */
  logoUrl?: string;
};



/* ───────────────────────── Partners ───────────────────────── */

export const PARTNERS: Partner[] = [
  {
    id: "nvidia",
    name: "NVIDIA",
    category: "Technology",
    description:
      "GPU acceleration and CUDA ecosystem — the compute backbone for our local inference and training pipelines.",
    url: "https://www.nvidia.com",
    monogram: "NV",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/79b6bddd12d6.jpg",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "Technology",
    description:
      "Open-weight model hub and inference tooling. We integrate Transformers, tokenizers, and evaluation harnesses into our pipelines.",
    url: "https://huggingface.co",
    monogram: "HF",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/f0afb85fbbd8.jpg",
  },
  {
    id: "qdrant",
    name: "Qdrant",
    category: "Technology",
    description:
      "Vector database for production RAG systems. Powers our semantic search and knowledge intelligence deployments.",
    url: "https://qdrant.tech",
    monogram: "Qd",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/702310fe4174.png",
  },
  {
    id: "mistral",
    name: "Mistral AI",
    category: "Technology",
    description:
      "Open-weight LLM provider. We deploy Mistral models on private infrastructure for clients with data-sovereignty requirements.",
    url: "https://mistral.ai",
    monogram: "Mi",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/6c1e33cf310a.jpg",
  },
  {
    id: "aleph-alpha",
    name: "Aleph Alpha",
    category: "Technology",
    description:
      "German sovereign AI lab. We integrate Aleph Alpha's models for public-sector and regulated-industry deployments.",
    url: "https://aleph-alpha.com",
    monogram: "AA",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/a51dea44a5a0.png",
  },
  {
    id: "hetzner",
    name: "Hetzner",
    category: "Cloud",
    description:
      "Cloud and bare-metal GPU servers. GDPR-compliant infrastructure for AI deployments.",
    url: "https://www.hetzner.com",
    monogram: "Hz",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/7ebfdac6506d.png",
  },
  {
    id: "scaleway",
    name: "Scaleway",
    category: "Cloud",
    description:
      "Cloud provider with GPU instances. Supports our AI infrastructure stack.",
    url: "https://www.scaleway.com",
    monogram: "Sc",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/f2d91dad2e7e.png",
  },
  {
    id: "gaia-x",
    name: "Gaia-X",
    category: "Infrastructure",
    description:
      "Federated data infrastructure initiative. We align our deployments with Gaia-X sovereignty and interoperability standards.",
    url: "https://www.gaia-x.eu",
    monogram: "GX",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/4b0c1dfe3b8d.jpg",
  },
  {
    id: "fraunhofer",
    name: "Fraunhofer",
    category: "Research",
    description:
      "Applied research organization. Collaborative research on applied AI, retrieval systems, and document intelligence.",
    url: "https://www.fraunhofer.de",
    monogram: "Fh",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/cfbaaff3cb7d.jpg",
  },
  {
    id: "inria",
    name: "INRIA",
    category: "Research",
    description:
      "French national research institute for digital science. Joint work on ML systems, evaluation methodology, and multilingual NLP.",
    url: "https://www.inria.fr",
    monogram: "In",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/c9848f92bf03.jpg",
  },
  {
    id: "apache",
    name: "Apache Software Foundation",
    category: "Technology",
    description:
      "Open-source infrastructure we build on — including vLLM, Kafka, and Spark for production AI systems.",
    url: "https://apache.org",
    monogram: "Ap",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/8039a664f0f5.jpg",
  },
  {
    id: "linux-foundation",
    name: "Linux Foundation",
    category: "Infrastructure",
    description:
      "Open governance for the infrastructure layer of modern AI. We contribute to and build on LF-hosted projects.",
    url: "https://www.linuxfoundation.org",
    monogram: "LF",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/55b4bd9d1e93.jpg",
  },
];

export const PARTNER_CATEGORIES = [
  "All",
  "Technology",
  "Infrastructure",
  "Cloud",
  "Research",
] as const;


