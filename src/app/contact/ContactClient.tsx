"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import type { FAQItem } from "@/lib/content-types";
import { labelTracking, useLanguage } from "@/lib/i18n";

// `handle` is a literal (address, number) unless `comingSoon` is set.
const channels = [
  { key: "email", handle: "info@eppartnerskh.com", href: "mailto:info@eppartnerskh.com" },
  { key: "phone", handle: "+855 10 339 494", href: "tel:+85510339494" },
  { key: "telegram", comingSoon: true, href: "#" },
  { key: "whatsapp", comingSoon: true, href: "#" },
  { key: "wechat", comingSoon: true, href: "#" },
  { key: "address", handle: "Time Square 3, Street 335, BK1, Toulkouk, Phnom Penh, Cambodia", href: "https://maps.google.com/?q=Time+Square+3+Street+335+Toulkouk+Phnom+Penh" },
];

// `value` stays English (it's what the form records); only the label is translated.
const serviceOptions = [
  { value: "Business Registration", key: "svc.01.name" },
  { value: "Tax Compliance", key: "svc.02.name" },
  { value: "Accounting & Bookkeeping", key: "svc.03.name" },
  { value: "Audit & Assurance", key: "svc.04.name" },
  { value: "Financial & Investment Advisory", key: "svc.05.name" },
  { value: "Business Advisory & Consulting", key: "svc.06.name" },
  { value: "M&A & Due Diligence", key: "svc.07.name" },
  { value: "Legal & Compliance", key: "svc.08.name" },
  { value: "Other / Not Sure", key: "form.service.other" },
];

export default function ContactClient({ faqs }: { faqs: FAQItem[] }) {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // FAQs come from content/faq/*.md in English. Translate them by faq.qN / faq.aN,
  // falling back to the markdown text if a key is missing.
  const tr = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-[#e5e7eb] rounded-md text-sm text-[#0f1f3d] placeholder:text-[#445571]/40 px-5 py-4 focus:outline-none focus:border-[#c9a84c] transition-colors duration-200";

  return (
    <>
      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("contact.hero.label")}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white whitespace-pre-line">
              {t("contact.hero.heading")}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              {t("contact.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT GRID — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

            <div className="flex flex-col gap-10">
              <div>
                <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("contact.channels.label")}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("contact.channels.heading")}</h2>
              </div>

              <div className="flex flex-col divide-y divide-[#e5e7eb]">
                {channels.map(({ key, handle, comingSoon, href }) => (
                  <a
                    key={key}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="py-5 flex flex-col gap-1.5 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`text-xs ${labelTracking(lang, "tracking-[0.2em]")} uppercase text-[#445571]/50 group-hover:text-[#c9a84c] transition-colors duration-200`}>
                        {t(`contact.${key}.label`)}
                      </span>
                      <span className="w-4 h-px bg-[#e5e7eb] group-hover:w-8 group-hover:bg-[#c9a84c] transition-all duration-300" />
                    </div>
                    <p className="text-base font-semibold text-[#0f1f3d] group-hover:text-[#c9a84c] transition-colors duration-200">
                      {comingSoon ? t("btn.coming_soon") : handle}
                    </p>
                    <p className="text-sm text-[#445571]/60">{t(`contact.${key}.note`)}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("form.heading")}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("contact.form.heading")}</h2>
              </div>

              {submitted ? (
                <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 rounded-lg px-8 py-10 flex flex-col gap-3">
                  <p className="text-2xl font-bold text-[#0f1f3d]">{t("form.success")}</p>
                  <p className="text-sm leading-relaxed text-[#445571]">
                    {t("form.success.desc")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t("form.name")}
                      aria-label={t("form.name")}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder={t("form.email")}
                      aria-label={t("form.email")}
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder={t("form.phone")}
                      aria-label={t("form.phone")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                    <select
                      value={formData.service}
                      aria-label={t("form.service")}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>{t("form.service")}</option>
                      {serviceOptions.map(({ value, key }) => (
                        <option key={value} value={value}>{t(key)}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    placeholder={t("form.placeholder.message")}
                    aria-label={t("form.placeholder.message")}
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                    <p className="text-xs text-[#445571]/50 leading-relaxed">
                      {t("form.note.response")}<br />
                      {t("form.note.confidential")}
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto shrink-0 bg-[#0f1f3d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0f1f3d] transition-all duration-200"
                    >
                      {t("form.submit")}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className={`text-xs font-semibold ${labelTracking(lang)} uppercase text-[#c9a84c] mb-4`}>{t("contact.faq.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight whitespace-pre-line">{t("contact.faq.heading")}</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              {t("contact.faq.desc")}
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#e5e7eb]">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="py-0">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-8 py-6 text-left group focus:outline-none"
                  >
                    <h3 className={`text-lg font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-[#c9a84c]" : "text-[#0f1f3d] group-hover:text-[#c9a84c]"}`}>
                      {tr(`faq.q${index + 1}`, question)}
                    </h3>
                    <span className={`shrink-0 w-8 h-8 rounded-md border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#c9a84c] bg-[#c9a84c] text-[#0f1f3d] rotate-45" : "border-[#e5e7eb] text-[#445571]/40 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c]"}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.2" />
                        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </button>

                  {/* Grid rows 0fr → 1fr instead of max-height, so long answers (Khmer on mobile) aren't cut off. */}
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden min-h-0">
                      <p className="text-base leading-relaxed text-[#445571] max-w-3xl pb-6">{tr(`faq.a${index + 1}`, answer)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
