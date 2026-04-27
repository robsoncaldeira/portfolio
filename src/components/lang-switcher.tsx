"use client";

const labels: Record<string, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

const flags: Record<string, string> = {
  pt: "BR",
  en: "US",
  es: "ES",
};

export function LangSwitcher({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-card-border px-1 py-0.5">
      {Object.keys(labels).map((lang) => (
        <a
          key={lang}
          href={`/${lang}`}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            lang === current
              ? "bg-accent text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {flags[lang]}
        </a>
      ))}
    </div>
  );
}
