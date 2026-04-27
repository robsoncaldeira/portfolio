import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

export type Lang = "en" | "pt" | "es";
export const LANGS: Lang[] = ["pt", "en", "es"];
export const DEFAULT_LANG: Lang = "pt";

const dicts = { en, pt, es } as const;

export type Dictionary = typeof en;

export function getDictionary(lang: Lang): Dictionary {
  return dicts[lang] ?? dicts[DEFAULT_LANG];
}
