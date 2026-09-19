"use client";

import Link from "next/link";

import Footer from "@/components/Footer";
import { labelTracking, useLanguage } from "@/lib/i18n";

const services = [
  { number: "01", key: "home.services.s1" },
  { number: "02", key: "home.services.s2" },
  { number: "03", key: "home.services.s3" },
  { number: "04", key: "home.services.s4" },
  { number: "05", key: "home.services.s5" },
  { number: "06", key: "home.services.s6" },
  { number: "07", key: "home.services.s7" },
  { number: "08", key: "home.services.s8" },
];

const advantages = ["01", "02", "03"];

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <main className="flex flex-col">

      {/* ── 1. HERO — navy ── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center bg-[#0f1f3d]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 sm:py-24 lg:py-0">
          <div className="flex flex-col gap-6">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c]`}>
              {t("home.hero.label")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight whitespace-pre-line">
              {t("home.hero.headline")}
            </h1>
            <p className="text-base leading-relaxed text-white/65 max-w-md">
              {t("home.hero.subtext")}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#b8972a] transition-all duration-200 w-full sm:w-auto text-center">
                {t("btn.lets_connect")}
              </Link>
              <Link href="/services" className="inline-block border-2 border-white !text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-white hover:!text-[#0f1f3d] transition-all duration-200 w-full sm:w-auto text-center">
                {t("btn.our_services")}
              </Link>
            </div>
          </div>
          <div className="relative hidden sm:block lg:aspect-[5/6] overflow-hidden rounded-lg">
            <img
              src="/images/hero-photo.jpg.jpg"
              alt={t("home.hero.image_alt")}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. PILLARS — white ── */}
      <section className="bg-white border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
            {["home.pillars.1", "home.pillars.2", "home.pillars.3"].map((pillar) => (
              <div key={pillar} className="px-6 sm:px-8 py-8 sm:py-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] shrink-0" />
                <p className="text-sm font-semibold tracking-wide text-[#0f1f3d]">{t(pillar)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES — light gray ── */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("home.services.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("home.services.heading")}</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              {t("home.services.desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
            {services.map(({ number, key }) => (
              <div key={number} className="bg-white border border-[#e5e7eb] rounded-lg p-6 sm:p-8 flex flex-col gap-4 hover:border-[#c9a84c] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-3xl font-bold text-[#c9a84c]/50 leading-none">{number}</span>
                <h3 className="text-xl font-semibold text-[#0f1f3d] group-hover:text-[#c9a84c] transition-colors duration-200">{t(key)}</h3>
                <p className="text-sm leading-relaxed text-[#445571] flex-1">{t(`${key}.desc`)}</p>
                <span className="w-8 h-0.5 bg-[#c9a84c]/40 group-hover:w-12 group-hover:bg-[#c9a84c] transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/services" className="inline-block border-2 border-[#0f1f3d] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#0f1f3d] hover:text-white transition-all duration-200">
              {t("btn.view_all_services")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. WHY US — navy ── */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("home.why.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{t("home.why.heading")}</h2>
          </div>
          <div className="flex flex-col divide-y divide-white/10">
            {advantages.map((number) => (
              <div key={number} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[80px_220px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className="text-4xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
                <h3 className="text-lg font-semibold text-white">{t(`home.why.${number}.title`)}</h3>
                <p className="text-base leading-relaxed text-white/65">{t(`home.why.${number}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHO WE ARE — white ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div style={{width:'100%', height:'500px', position:'relative', overflow:'hidden', borderRadius:'12px'}}>
              <img
                src="/images/about-photo.jpg.png"
                alt={t("home.whoweare.image_alt")}
                style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'12px', display:'block'}}
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c]`}>{t("home.whoweare.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("home.whoweare.heading")}</h2>
              <p className="text-base leading-relaxed text-[#445571]">
                {t("home.whoweare.desc")}
              </p>
              <div className="pt-2">
                <Link href="/about" className="inline-block bg-[#0f1f3d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0f1f3d] transition-all duration-200 w-full sm:w-auto text-center">
                  {t("btn.more_about_us")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
