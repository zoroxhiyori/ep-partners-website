"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import en from "@/messages/en.json";
import kh from "@/messages/kh.json";
import zh from "@/messages/zh.json";
import { LANG_COOKIE, type Lang } from "@/lib/i18n-config";

export type { Lang } from "@/lib/i18n-config";

type Dictionary = Record<string, string>;

const dictionaries: Record<Lang, Dictionary> = { en, kh, zh };

const ONE_YEAR = 31536000;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const router = useRouter();

  const setLang = useCallback(
    (next: Lang) => {
      document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
      setLangState(next);
      // Re-render server components so <html lang> picks up the new cookie.
      router.refresh();
    },
    [router],
  );

  const t = useCallback(
    (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
