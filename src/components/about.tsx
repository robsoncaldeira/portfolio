const highlights = [
  { number: "10K+", label: "Leads processed" },
  { number: "13", label: "Autonomous AI agents" },
  { number: "6", label: "Data sources unified" },
  { number: "95%", label: "Dedup coverage" },
];

export function About() {
  return (
    <section id="about" className="border-t border-card-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          About
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight">
              Engineering systems that turn raw data into business decisions
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              I design and build end-to-end data pipelines, automation systems,
              and AI-powered agents. My focus is on data-model-centric
              architecture: making the data model the single source of truth,
              then building everything else around it.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              At Graventum, I built the entire technical stack from scratch as a
              solo engineer — from web scraping and identity resolution to a
              multi-agent AI system with self-correcting feedback loops and a
              client-facing SaaS portal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center justify-center rounded-xl border border-card-border bg-card p-6 text-center"
              >
                <span className="text-2xl font-bold text-accent">
                  {h.number}
                </span>
                <span className="mt-1 text-xs text-muted">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
