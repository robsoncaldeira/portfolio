export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-card-border px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-accent">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Looking for someone who can build data pipelines, automation systems,
          or AI-powered products from zero to production? Reach out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:calderarobson@gmail.com"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            calderarobson@gmail.com
          </a>
          <a
            href="https://github.com/robsoncaldeira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/robson-caldeira-a712a03a/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-card-border pt-8">
          <p className="font-mono text-xs text-muted">
            RC<span className="text-accent">.</span>
          </p>
          <p className="text-xs text-muted">
            {new Date().getFullYear()} Robson Caldeira
          </p>
        </div>
      </div>
    </footer>
  );
}
