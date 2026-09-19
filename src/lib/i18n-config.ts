// Shared by the server layout and the client LanguageProvider, so no "use client" here.

export type Lang = "en" | "kh" | "zh";

export const LANG_COOKIE = "ep-lang";

// BCP 47 codes for <html lang>. Khmer is "km", not "kh".
export const htmlLang: Record<Lang, string> = { en: "en", kh: "km", zh: "zh" };

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "kh" || value === "zh";
}

export function parseLang(value: string | undefined): Lang {
  return isLang(value) ? value : "en";
}
