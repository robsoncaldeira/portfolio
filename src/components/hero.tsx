export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-14">
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ededed 1px, transparent 1px), linear-gradient(to bottom, #ededed 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest uppercase text-accent">
          Data &middot; Automation &middot; AI
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Robson Caldeira
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I build systems that collect, clean, and centralize data from multiple
          sources — then automate decisions on top of it. From identity
          resolution pipelines to autonomous AI agents.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#cases"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
          <path d="M8 4v16M3 15l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
