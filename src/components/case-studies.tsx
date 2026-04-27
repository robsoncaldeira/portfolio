const cases = [
  {
    id: "identity-resolution",
    tag: "Data Engineering",
    title: "Identity Resolution Pipeline for 10K+ Leads",
    problem:
      "A commercial database with 10,000+ leads from 6 different sources (Google Maps, Brave Search, SharePoint, WhatsApp, web forms) had 21% of records with no dedup protection. Phone fields contained GPS coordinates, shared numbers (0800), and fake patterns. Different sources created duplicate entries for the same company.",
    approach: [
      "Designed a cascading dedup strategy: website (normalized) as primary key, phone (E.164) as secondary, CNPJ as tertiary",
      "Built a PostgreSQL function normalize_phone_br() that strips formatting, rejects coordinates and fake numbers, and normalizes to E.164 format",
      "Created an RPC function upsert_commercial_lead() with intelligent merge — never overwrites existing data with NULL (incremental enrichment)",
      "Added auto-detection: Brazilian mobile numbers are automatically flagged as WhatsApp-reachable",
    ],
    results: [
      "Dedup coverage: 79% to 95%+",
      "446 dirty records cleaned (GPS coords, 0800 numbers, fake patterns)",
      "190 phone duplicates resolved",
      "Zero duplicate entries since deployment",
    ],
    tech: [
      "PostgreSQL",
      "Supabase RPC",
      "E.164 normalization",
      "Partial unique indexes",
      "n8n workflow integration",
    ],
  },
  {
    id: "multi-agent",
    tag: "AI Engineering",
    title: "Autonomous Multi-Agent System with Self-Correcting Feedback Loops",
    problem:
      "A team of AI agents was producing shallow outputs — generic reports with no real data, hallucinated metrics, and no way to verify quality. When a tool failed silently, the agent would continue generating content from training data instead of flagging the failure.",
    approach: [
      "Deployed 13 specialized agents (CTO, CFO, CMO, CSO, etc.) each with isolated workspaces, tools, and memory",
      "Implemented an Output Quality Standard: every agent self-declares assessment (COMPLETE/PARTIAL/STUB) with data sources used",
      "Built an external Quality Gate (CSO agent) that validates outputs — computes real line count vs. declared, detects self-bias",
      "Added meta-learning: 2+ STUBs from the same agent trigger an adaptive instruction written directly into the agent's configuration",
      "Retry queue with failure-type classification (data_not_fetched, analysis_shallow, session_failed) and automatic re-spawn",
    ],
    results: [
      "Closed-loop system: agents self-correct without human intervention",
      "Anti-hallucination: tool failures now halt execution instead of generating fake data",
      "Meta-learning modifies agent behavior based on repeated failure patterns",
      "Daily synthesis report with quality metrics delivered via Telegram",
    ],
    tech: [
      "OpenClaw",
      "DeepSeek V3",
      "Python",
      "Playwright",
      "PostgreSQL",
      "Telegram API",
    ],
  },
  {
    id: "infra-provisioning",
    tag: "DevOps / Platform Engineering",
    title: "Zero-Touch Client Infrastructure Provisioning",
    problem:
      "Each new client needed a dedicated VPS with Docker containers, reverse proxy, SSL certificates, and pre-configured services. Manual setup took hours and was error-prone.",
    approach: [
      "Built an n8n workflow (INFRA_01) that calls the Hetzner Cloud API to provision a VPS, creates DNS records via GoDaddy API, and generates cloud-init scripts",
      "Solved the SSL chicken-and-egg problem: Phase 1 deploys HTTP-only nginx, Phase 2 runs certbot for certificates, then rewrites to HTTPS config",
      "Created Docker Hub images (openclaw-client, monitoring-agent) pre-configured for client environments",
      "Automated the full chain: VPS creation, DNS propagation, container deployment, SSL certification, heartbeat monitoring, and Telegram notification",
    ],
    results: [
      "Client provisioning reduced from hours to minutes",
      "Fully automated: zero manual SSH into client servers",
      "Monitoring agent sends heartbeats every 5 minutes",
      "Reproducible: same workflow for every new client",
    ],
    tech: [
      "Hetzner Cloud API",
      "GoDaddy API",
      "Docker",
      "cloud-init",
      "nginx",
      "Let's Encrypt",
      "n8n",
    ],
  },
  {
    id: "lead-pipeline",
    tag: "Automation / Data Acquisition",
    title: "Automated Lead Prospecting and Qualification Pipeline",
    problem:
      "Manual prospecting could not scale. Finding, scoring, and qualifying leads across multiple business segments required visiting hundreds of Google Maps pages and company websites daily.",
    approach: [
      "Built a FastAPI + Playwright scraper service for Google Maps business data extraction at scale",
      "Implemented rule-based scoring (no LLM cost) with segment-specific weights: accounting firms +25, real estate +22, clinics +20",
      "Created dual ingestion: scheduled scraping (every 30 min) plus a real-time webhook for external sources",
      "Email enrichment via dedicated /extract-email endpoint: visits company websites, checks /contato pages, extracts mailto links and regex patterns",
    ],
    results: [
      "10,000+ leads collected from 6 sources",
      "80% email extraction success rate in target segments",
      "Batch processing: 20 leads per cycle with parallel execution",
      "All leads automatically scored and normalized on ingestion",
    ],
    tech: [
      "FastAPI",
      "Playwright",
      "Python",
      "PostgreSQL",
      "n8n",
      "Google Maps scraping",
    ],
  },
  {
    id: "saas-portal",
    tag: "Product Engineering",
    title: "Multi-Tenant SaaS Portal with Automated Deployment",
    problem:
      "Clients needed visibility into their automations — status, metrics, KPIs — without being exposed to the underlying technical complexity (n8n workflows, Evolution API, database schemas).",
    approach: [
      "Built a Next.js 14 portal with invite-based onboarding, cookie-based sessions, and multi-step registration",
      "Designed a 3-layer data protection system: technical field names never reach the client UI",
      "Implemented admin impersonation: operators can view the portal as any client via a secure cookie-based mechanism",
      "Created automated deployment: client adds an automation, a webhook triggers n8n to fetch the template from GitHub, substitute variables, import, and activate",
      "Built time-series metrics dashboard with Recharts — KPI cards and 30-day Sparkline graphs per automation",
    ],
    results: [
      "End-to-end: invite, register, onboard, dashboard, metrics — all automated",
      "Zero technical exposure to clients",
      "Admin can manage any client account without separate credentials",
      "New automations deploy automatically via GitHub templates",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Recharts",
      "Vercel",
      "n8n webhooks",
    ],
  },
];

function CaseCard({
  c,
  index,
}: {
  c: (typeof cases)[number];
  index: number;
}) {
  return (
    <article className="rounded-2xl border border-card-border bg-card p-8 sm:p-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-accent/30 bg-accent-dim/30 px-3 py-0.5 text-xs font-medium text-accent">
          {c.tag}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
        {c.title}
      </h3>

      {/* Problem */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          The Problem
        </p>
        <p className="mt-2 leading-relaxed text-muted">{c.problem}</p>
      </div>

      {/* Approach */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          What I Built
        </p>
        <ul className="mt-2 space-y-2">
          {c.approach.map((a, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Results
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {c.results.map((r, i) => (
            <div
              key={i}
              className="rounded-lg border border-card-border bg-background px-4 py-3 text-sm"
            >
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* Tech */}
      <div className="mt-6 flex flex-wrap gap-2">
        {c.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="cases" className="border-t border-card-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          What I&apos;ve built
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Each project below is a real system running in production. Problem,
          approach, result — with the technical decisions that made it work.
        </p>

        <div className="mt-12 space-y-8">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
