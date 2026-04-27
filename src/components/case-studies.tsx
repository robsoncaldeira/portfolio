import type { Dictionary } from "@/dictionaries";

type CaseItem = Dictionary["cases"]["items"][number];

function CaseCard({
  c,
  index,
  dict,
}: {
  c: CaseItem;
  index: number;
  dict: Dictionary;
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

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {dict.cases.problem}
        </p>
        <p className="mt-2 leading-relaxed text-muted">{c.problem}</p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {dict.cases.approach}
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

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {dict.cases.results}
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

export function CaseStudies({ dict }: { dict: Dictionary }) {
  return (
    <section id="cases" className="border-t border-card-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          {dict.cases.label}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          {dict.cases.title}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{dict.cases.subtitle}</p>

        <div className="mt-12 space-y-8">
          {dict.cases.items.map((c, i) => (
            <CaseCard key={i} c={c} index={i} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
