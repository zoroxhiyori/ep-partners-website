"use client";

import Footer from "@/components/Footer";
import { labelTracking, useLanguage } from "@/lib/i18n";

const values = [
  { number: "01", key: "about.values.v1" },
  { number: "02", key: "about.values.v2" },
  { number: "03", key: "about.values.v3" },
  { number: "04", key: "about.values.v4" },
];

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <main className="flex flex-col">

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-0">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("about.hero.label")}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              {t("about.hero.heading")}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              {t("about.hero.desc")}
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl" style={{ height: '500px' }}>
            <img
              src="/images/about-hero.jpg.png?v=2"
              alt={t("about.hero.image_alt")}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 items-start">
            <div className="flex flex-col gap-4">
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c]`}>{t("about.philosophy.label")}</p>
              <span className="w-8 h-0.5 bg-[#c9a84c]" />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">{t("about.philosophy.heading")}</h2>
              <p className="text-base leading-relaxed text-[#445571] max-w-2xl">
                {t("about.philosophy.p1")}
              </p>
              <p className="text-base leading-relaxed text-[#445571] max-w-2xl">
                {t("about.philosophy.p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES — navy */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("about.values.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{t("about.values.heading")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map(({ number, key }) => (
              <div key={number} className="bg-white/[0.05] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col gap-4 hover:bg-white/[0.08] hover:border-[#c9a84c]/40 transition-all duration-300 group">
                <span className="text-3xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#c9a84c] transition-colors duration-300">{t(`${key}.title`)}</h3>
                <p className="text-sm leading-relaxed text-white/65">{t(`${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
