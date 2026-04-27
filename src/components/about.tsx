import type { Dictionary } from "@/dictionaries";

const numbers = ["10K+", "13", "6", "95%"];

export function About({ dict }: { dict: Dictionary }) {
  const statLabels = [
    dict.about.stats.leads,
    dict.about.stats.agents,
    dict.about.stats.sources,
    dict.about.stats.dedup,
  ];

  return (
    <section id="about" className="border-t border-card-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          {dict.about.label}
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight">
              {dict.about.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{dict.about.p1}</p>
            <p className="mt-4 leading-relaxed text-muted">{dict.about.p2}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {numbers.map((n, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-xl border border-card-border bg-card p-6 text-center"
              >
                <span className="text-2xl font-bold text-accent">{n}</span>
                <span className="mt-1 text-xs text-muted">{statLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
