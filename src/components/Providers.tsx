"use client";

import { LanguageProvider, type Lang } from "@/lib/i18n";

export default function Providers({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  return <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>;
}
