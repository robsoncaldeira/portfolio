const categories = [
  {
    title: "Data Engineering",
    skills: [
      "Identity Resolution / Entity Dedup",
      "Data Quality & Cleaning",
      "ETL / Multi-Source Ingestion",
      "PostgreSQL (functions, triggers, views, partial indexes)",
      "Supabase (RPC, RLS, pgvector)",
      "E.164 Phone Normalization",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "Multi-Agent Orchestration",
      "Prompt Engineering",
      "Closed-Loop Feedback Systems",
      "Quality Gates & Meta-Learning",
      "n8n Workflow Design (20+ workflows)",
      "Web Scraping (Playwright, FastAPI)",
    ],
  },
  {
    title: "Full-Stack Development",
    skills: [
      "Next.js 14 (App Router)",
      "React 19 / TypeScript",
      "tRPC / Express",
      "Tailwind CSS",
      "Recharts / Data Visualization",
      "REST API Design",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Docker & Docker Compose",
      "Cloud Provisioning (Hetzner API)",
      "nginx / SSL Automation (Let's Encrypt)",
      "Prometheus + Grafana Monitoring",
      "CI/CD (Vercel, GitHub)",
      "cloud-init / IaC",
    ],
  },
  {
    title: "Integrations",
    skills: [
      "WhatsApp Business (Evolution API)",
      "Microsoft Graph API (Exchange)",
      "Telegram Bot API",
      "Google Maps Data Extraction",
      "Payment Gateways (Asaas)",
      "DNS Management (GoDaddy API)",
    ],
  },
  {
    title: "Architecture & Design",
    skills: [
      "Data-Model-Centric Design",
      "Event-Driven Architecture",
      "Multi-Tenant SaaS",
      "Webhook / Polling Hybrid Patterns",
      "Data Flow Auditing",
      "Incremental Enrichment Patterns",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-card-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Technical competencies
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Everything listed here is backed by production code — not
          certifications or tutorials.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-card-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold tracking-tight">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
