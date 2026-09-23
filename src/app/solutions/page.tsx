"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { labelTracking, useLanguage } from "@/lib/i18n";

// Cards 01–06 have five sub-points, 07–12 have six.
const solutions = [
  { number: "01", subs: 5 },
  { number: "02", subs: 5 },
  { number: "03", subs: 5 },
  { number: "04", subs: 5 },
  { number: "05", subs: 5 },
  { number: "06", subs: 5 },
  { number: "07", subs: 6 },
  { number: "08", subs: 6 },
  { number: "09", subs: 6 },
  { number: "10", subs: 6 },
  { number: "11", subs: 6 },
  { number: "12", subs: 6 },
];

const differentiators = [
  { number: "01", key: "solutions.why.d1" },
  { number: "02", key: "solutions.why.d2" },
  { number: "03", key: "solutions.why.d3" },
];

export default function SolutionsPage() {
  const { lang, t } = useLanguage();

  return (
    <main className="flex flex-col">

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("solutions.hero.label")}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white whitespace-pre-line">
              {t("solutions.hero.heading")}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              {t("solutions.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION CARDS — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("solutions.grid.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("solutions.grid.heading")}</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              {t("solutions.grid.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map(({ number, subs }) => (
              <div
                key={number}
                className="bg-[#f4f5f7] border border-[#e5e7eb] rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col gap-5 hover:border-[#c9a84c] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl font-bold text-[#c9a84c]/50 leading-none">{number}</span>
                  <span className={`text-[9px] ${labelTracking(lang, "tracking-[0.22em]")} uppercase text-[#445571]/40 mt-2 text-right`}>{t(`solutions.${number}.tag`)}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-[#0f1f3d] leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">{t(`solutions.${number}.name`)}</h3>
                  <p className={`text-xs ${labelTracking(lang, "tracking-[0.12em]")} uppercase text-[#c9a84c]/80 font-semibold`}>{t(`solutions.${number}.tagline`)}</p>
                </div>

                <p className="text-sm leading-relaxed text-[#445571]">{t(`solutions.${number}.desc`)}</p>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {Array.from({ length: subs }, (_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c]/60 shrink-0" />
                      <span className="text-sm leading-relaxed text-[#445571]">{t(`solutions.${number}.sub.${i + 1}`)}</span>
                    </li>
                  ))}
                </ul>

                <span className="w-8 h-0.5 bg-[#c9a84c]/40 group-hover:w-12 group-hover:bg-[#c9a84c] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIFFERENTIATORS — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("solutions.why.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("solutions.why.heading")}</h2>
          </div>

          <div className="flex flex-col divide-y divide-[#0f1f3d]/10">
            {differentiators.map(({ number, key }) => (
              <div key={number} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[80px_240px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className="text-4xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
                <h3 className="text-xl font-semibold text-[#0f1f3d]">{t(`${key}.title`)}</h3>
                <p className="text-base leading-relaxed text-[#445571]">{t(`${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA — navy */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c]`}>{t("solutions.cta.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight whitespace-pre-line">{t("solutions.cta.heading")}</h2>
              <p className="text-base leading-relaxed text-white/65">
                {t("solutions.cta.desc")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#b8972a] transition-all duration-200 w-full sm:w-auto text-center">
                {t("btn.lets_connect")}
              </Link>
              <div className="flex flex-col gap-1">
                <Link href="/services" className="text-sm !text-white/45 hover:!text-[#c9a84c] transition-colors">
                  {t("solutions.cta.services_link")}
                </Link>
                <p className="text-xs text-white/25">{t("solutions.cta.services_note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
