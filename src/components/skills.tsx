import type { Dictionary } from "@/dictionaries";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills" className="border-t border-card-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          {dict.skills.label}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          {dict.skills.title}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{dict.skills.subtitle}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.skills.categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-card-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold tracking-tight">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((s) => (
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
