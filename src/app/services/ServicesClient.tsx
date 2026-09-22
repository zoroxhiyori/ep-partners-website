"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";
import { labelTracking, useLanguage } from "@/lib/i18n";

export interface ServiceData {
  number: string;
  title: string;
  description: string;
  subServices: string[];
  icon_bg: string;
  icon_color: string;
}

const icons: Record<string, ReactElement> = {
  "01": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M4 22V8l8-6 8 6v14H4zm2-2h12V9.15L12 4.5 6 9.15V20zm3-3h6v-2H9v2zm0-4h6v-2H9v2zm0-4h6V7H9v2z"/>
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 17v-1h8v1H8zm0-3v-1h8v1H8zm0-3v-1h4v1H8z"/>
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  ),
  "05": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zM16.2 13h2.8v6h-2.8v-6z"/>
    </svg>
  ),
  "06": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
    </svg>
  ),
  "07": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M9 12c0 1.66-1.34 3-3 3S3 13.66 3 12s1.34-3 3-3 3 1.34 3 3zm9-3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.72 3.39L12 11.06l-1.28 1.33C10.18 13.4 9.65 14 9 14.5v1c.69-.33 1.31-.8 1.84-1.38L12 13l1.16 1.12A6.23 6.23 0 0015 15.5v-1c-.65-.5-1.18-1.1-1.72-2.11z"/>
    </svg>
  ),
  "08": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17A9.006 9.006 0 003 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.5-1.02-4.77-2.67-6.83z"/>
    </svg>
  ),
};

const phases = ["p1", "p2", "p3"];

export default function ServicesClient({ services }: { services: ServiceData[] }) {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleCardClick = (index: number) => setActiveIndex(activeIndex === index ? null : index);
  const activeService = activeIndex !== null ? services[activeIndex] : null;

  // Service data comes from content/services/*.md in English. Translate it by
  // svc.NN.* key, falling back to the markdown text if a key is missing.
  const tr = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <>
      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("services.hero.label")}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white whitespace-pre-line">
              {t("services.hero.heading")}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              {t("services.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICE CARDS — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("services.grid.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("services.grid.heading")}</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              {t("services.grid.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map(({ number, title, description, icon_bg, icon_color }, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={number}
                  onClick={() => handleCardClick(index)}
                  className={`text-left rounded-lg p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9a84c] ${
                    isActive
                      ? "bg-[#0f1f3d] border border-[#c9a84c]/40 shadow-lg"
                      : "bg-white border border-[#e5e7eb] hover:border-[#c9a84c] hover:shadow-md hover:-translate-y-1"
                  } group`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isActive ? "rgba(201,168,76,0.15)" : icon_bg,
                      color: isActive ? "#c9a84c" : icon_color,
                    }}
                  >
                    {icons[number]}
                  </div>
                  <h3 className={`text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#c9a84c]" : "text-[#0f1f3d] group-hover:text-[#c9a84c]"}`}>
                    {tr(`svc.${number}.name`, title)}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 ${isActive ? "text-white/65" : "text-[#445571]"}`}>
                    {tr(`svc.${number}.tagline`, description)}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Animate grid rows 0fr → 1fr rather than max-height, so the panel fits
              however many lines the sub-services wrap to (Khmer runs much taller). */}
          <div className={`grid transition-all duration-500 ease-in-out ${activeService ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden min-h-0">
              {activeService && (
                <div className="bg-[#0f1f3d] rounded-lg border border-[#c9a84c]/20 px-6 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12">
                  <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start">
                    <div>
                      <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-3`}>{t("services.detail.service_label")} {activeService.number}</p>
                      <h3 className="text-2xl font-bold text-white leading-snug">{tr(`svc.${activeService.number}.name`, activeService.title)}</h3>
                      <span className="mt-5 block w-8 h-0.5 bg-[#c9a84c]" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                      {activeService.subServices.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c] shrink-0" />
                          <p className="text-sm leading-relaxed text-white/65">{tr(`svc.${activeService.number}.sub.${i + 1}`, item)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("services.method.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">{t("services.method.heading")}</h2>
          </div>
          <div className="flex flex-col divide-y divide-[#0f1f3d]/10">
            {phases.map((phase) => (
              <div key={phase} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[140px_240px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className={`text-xs font-semibold ${labelTracking(lang, "tracking-[0.22em]")} uppercase text-[#c9a84c]`}>{t(`services.method.${phase}.label`)}</span>
                <h3 className="text-xl font-semibold text-[#0f1f3d]">{t(`services.method.${phase}.title`)}</h3>
                <p className="text-base leading-relaxed text-[#445571]">{t(`services.method.${phase}.desc`)}</p>
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
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c]`}>{t("services.cta.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{t("services.cta.heading")}</h2>
              <p className="text-base leading-relaxed text-white/65">{t("services.cta.desc")}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#b8972a] transition-all duration-200 w-full sm:w-auto text-center">
                {t("btn.lets_connect")}
              </Link>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@eppartnerskh.com" className="text-sm !text-white/50 hover:!text-white transition-colors">info@eppartnerskh.com</a>
                <p className="text-xs text-white/30">{t("services.cta.response")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
