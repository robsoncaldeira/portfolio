"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { LangSwitcher } from "./lang-switcher";

export function Nav({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#cases", label: dict.nav.projects },
    { href: "#skills", label: dict.nav.skills },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          RC<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <LangSwitcher current={lang} />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 sm:hidden">
          <LangSwitcher current={lang} />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted hover:text-foreground"
            aria-label="Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-card-border bg-background px-6 py-4 sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
