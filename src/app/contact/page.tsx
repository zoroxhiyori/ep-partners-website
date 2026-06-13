"use client";

import { useState } from "react";

const channels = [
  {
    platform: "Telegram",
    handle: "@telyhav",
    href: "https://t.me/telyhav",
    detail: "Fastest response",
  },
  {
    platform: "WhatsApp",
    handle: "+855 10 558 823",
    href: "https://wa.me/85510558823",
    detail: "Call or message",
  },
  {
    platform: "WeChat",
    handle: "EP_Partners_KH",
    href: "#",
    detail: "For Mandarin-speaking clients",
  },
  {
    platform: "Email",
    handle: "telyhav@eppartnerskh.com",
    href: "mailto:telyhav@eppartnerskh.com",
    detail: "Response within 1 business day",
  },
  {
    platform: "Office",
    handle: "N105 Street 598, Toulkouk, Phnom Penh",
    href: "https://maps.google.com/?q=Street+598+Toulkouk+Phnom+Penh",
    detail: "By appointment",
  },
];

const services = [
  "Business Registration",
  "Tax Compliance",
  "Accounting & Bookkeeping",
  "Audit & Assurance",
  "Financial & Investment Advisory",
  "Business Advisory & Consulting",
  "M&A & Due Diligence",
  "Legal & Compliance",
  "Other / Not Sure",
];

const faqs = [
  {
    question: "How long does company registration take in Cambodia?",
    answer:
      "A standard company registration with the Ministry of Commerce (MOC) typically takes 5–10 business days once all documents are in order. For clients who also require GDT tax registration and patent, the full process usually completes within 3–4 weeks. We handle the entire process on your behalf.",
  },
  {
    question: "What are the annual tax obligations for a Cambodian company?",
    answer:
      "All Cambodian companies are required to file monthly tax returns (VAT, withholding tax, salary tax), an annual tax on income return, and pay patent tax. Depending on your business type, additional obligations such as minimum tax and specific industry taxes may apply. EP Partners manages all of these filings for our clients.",
  },
  {
    question: "Do you offer services fully in Mandarin?",
    answer:
      "Yes. We have dedicated Mandarin-speaking advisors who can handle your entire engagement — from initial consultation through ongoing compliance — in Mandarin. All documentation and reporting can be provided bilingually (Chinese/English) upon request.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We offer transparent, value-based pricing with no hidden fees. Most ongoing services (bookkeeping, tax compliance) are priced as fixed monthly retainers, while project-based work (registration, audit, M&A) is quoted on a flat-fee basis. We provide a full fee proposal before any engagement begins.",
  },
  {
    question: "Can you help foreign investors set up a business in Cambodia?",
    answer:
      "Absolutely. We specialise in guiding foreign investors — including Chinese, Singaporean, Thai, and other ASEAN nationals — through every step of the Cambodia market entry process: entity selection, MOC registration, tax setup, banking, licensing, and ongoing compliance. We also coordinate with legal and visa specialists as needed.",
  },
];

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-white/20 font-sans text-[14px] text-white placeholder:text-white/30 px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200";

  return (
    <main className="flex flex-col">

      {/* ── 1. HERO ── */}
      <section className="bg-navy relative overflow-hidden">
        <span className="absolute top-12 left-12 w-20 h-px bg-gold/30 hidden lg:block" />
        <span className="absolute top-12 left-12 h-20 w-px bg-gold/30 hidden lg:block" />
        <span className="absolute bottom-12 right-12 w-20 h-px bg-gold/30 hidden lg:block" />
        <span className="absolute bottom-12 right-12 h-20 w-px bg-gold/30 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-28 lg:pb-36">
          <div className="max-w-3xl">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-6">
              Get In Touch
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-white">
              Let's Work<br />Together.
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.85] text-white/45 max-w-md">
              Whether you're starting a business, navigating a tax audit, or
              planning a regional expansion — we're ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. CONTACT GRID ── */}
      <section className="bg-navy py-28 lg:py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

            {/* Left: channels */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                  Contact Channels
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-white leading-[1.2]">
                  Reach Us Your<br />Way.
                </h2>
              </div>

              <div className="flex flex-col divide-y divide-white/10">
                {channels.map(({ platform, handle, href, detail }) => (
                  <a
                    key={platform}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="py-6 flex flex-col gap-1.5 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/35 group-hover:text-gold transition-colors duration-200">
                        {platform}
                      </span>
                      <span className="w-4 h-px bg-white/15 group-hover:w-8 group-hover:bg-gold transition-all duration-300" />
                    </div>
                    <p className="font-serif text-[1.05rem] font-medium text-white group-hover:text-gold transition-colors duration-200">
                      {handle}
                    </p>
                    <p className="font-sans text-[12px] text-white/35">
                      {detail}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                  Send a Message
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-white leading-[1.2]">
                  Tell Us About<br />Your Needs.
                </h2>
              </div>

              {submitted ? (
                <div className="border border-gold/30 bg-gold/5 px-8 py-10 flex flex-col gap-3">
                  <p className="font-serif text-2xl font-light text-white">
                    Thank you for reaching out.
                  </p>
                  <p className="font-sans text-[14px] leading-[1.8] text-white/60">
                    We've received your message and will respond within one
                    business day. For urgent matters, please reach out via
                    Telegram or WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Service of Interest</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    placeholder="Tell us about your situation or question... *"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />

                  <div className="flex items-center justify-between gap-6 pt-2">
                    <p className="font-sans text-[11px] text-white/30 leading-[1.7]">
                      We respond within one business day.<br />
                      Your information is kept strictly confidential.
                    </p>
                    <button
                      type="submit"
                      className="shrink-0 bg-gold text-navy font-sans text-[11px] tracking-[0.18em] uppercase px-10 py-[15px] hover:bg-[#d4a843] transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FAQ ── */}
      <section className="bg-[#0a1628] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                Common Questions
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
                Frequently Asked<br />Questions.
              </h2>
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-white/60 max-w-xs lg:text-right">
              Don't see your question? Reach out directly — we're happy to help.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="py-0">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-8 py-7 text-left group focus:outline-none"
                  >
                    <h3
                      className={`font-serif text-xl lg:text-[1.35rem] font-medium leading-snug transition-colors duration-200 ${
                        isOpen ? "text-gold" : "text-white group-hover:text-gold"
                      }`}
                    >
                      {question}
                    </h3>
                    <span
                      className={`shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "border-gold bg-gold text-navy rotate-45"
                          : "border-white/20 text-white/40 group-hover:border-gold group-hover:text-gold"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.2" />
                        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? "max-h-64 opacity-100 pb-7" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-[15px] leading-[1.9] text-white/60 max-w-3xl">
                      {answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a1628] py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/images/EP_partner_logo.png"
            alt="EP Partners"
            className="h-9 w-auto opacity-60 [filter:brightness(0)_invert(1)]"
          />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center">
            <a
              href="mailto:info@eppartnerskh.com"
              className="font-sans text-[11px] tracking-[0.1em] text-white/35 hover:text-gold transition-colors"
            >
              info@eppartnerskh.com
            </a>
            <span className="hidden sm:block w-px h-3 bg-white/15" />
            <p className="font-sans text-[11px] tracking-[0.1em] text-white/30 uppercase">
              © 2012 EP Partners
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
