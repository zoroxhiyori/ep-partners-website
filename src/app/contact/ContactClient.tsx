"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import type { FAQItem } from "@/lib/content-types";

const channels = [
  { platform: "Telegram", handle: "@telyhav", href: "https://t.me/telyhav", detail: "Fastest response" },
  { platform: "WhatsApp", handle: "+855 10 558 823", href: "https://wa.me/85510558823", detail: "Call or message" },
  { platform: "WeChat", handle: "EP_Partners_KH", href: "#", detail: "For Mandarin-speaking clients" },
  { platform: "Email", handle: "telyhav@eppartnerskh.com", href: "mailto:telyhav@eppartnerskh.com", detail: "Response within 1 business day" },
  { platform: "Office", handle: "N105 Street 598, Toulkouk, Phnom Penh", href: "https://maps.google.com/?q=Street+598+Toulkouk+Phnom+Penh", detail: "By appointment" },
];

const serviceOptions = [
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

export default function ContactClient({ faqs }: { faqs: FAQItem[] }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-[#e5e7eb] rounded-md text-sm text-[#0f1f3d] placeholder:text-[#445571]/40 px-5 py-4 focus:outline-none focus:border-[#c9a84c] transition-colors duration-200";

  return (
    <>
      {/* 2. CONTACT GRID — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Contact Channels</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] leading-tight">Reach Us Your<br />Way.</h2>
              </div>

              <div className="flex flex-col divide-y divide-[#e5e7eb]">
                {channels.map(({ platform, handle, href, detail }) => (
                  <a
                    key={platform}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="py-5 flex flex-col gap-1.5 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs tracking-[0.2em] uppercase text-[#445571]/50 group-hover:text-[#c9a84c] transition-colors duration-200">
                        {platform}
                      </span>
                      <span className="w-4 h-px bg-[#e5e7eb] group-hover:w-8 group-hover:bg-[#c9a84c] transition-all duration-300" />
                    </div>
                    <p className="text-base font-semibold text-[#0f1f3d] group-hover:text-[#c9a84c] transition-colors duration-200">{handle}</p>
                    <p className="text-sm text-[#445571]/60">{detail}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Send a Message</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] leading-tight">Tell Us About<br />Your Needs.</h2>
              </div>

              {submitted ? (
                <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 rounded-lg px-8 py-10 flex flex-col gap-3">
                  <p className="text-2xl font-bold text-[#0f1f3d]">Thank you for reaching out.</p>
                  <p className="text-sm leading-relaxed text-[#445571]">
                    We&apos;ve received your message and will respond within one business day. For urgent matters, please reach out via Telegram or WhatsApp.
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
                      {serviceOptions.map((s) => (
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

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                    <p className="text-xs text-[#445571]/50 leading-relaxed">
                      We respond within one business day.<br />
                      Your information is kept strictly confidential.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto shrink-0 bg-[#0f1f3d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0f1f3d] transition-all duration-200"
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

      {/* 3. FAQ — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Common Questions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Frequently Asked<br />Questions.</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              Don&apos;t see your question? Reach out directly — we&apos;re happy to help.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#e5e7eb]">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="py-0">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-8 py-6 text-left group focus:outline-none"
                  >
                    <h3 className={`text-lg font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-[#c9a84c]" : "text-[#0f1f3d] group-hover:text-[#c9a84c]"}`}>
                      {question}
                    </h3>
                    <span className={`shrink-0 w-8 h-8 rounded-md border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#c9a84c] bg-[#c9a84c] text-[#0f1f3d] rotate-45" : "border-[#e5e7eb] text-[#445571]/40 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c]"}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.2" />
                        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <p className="text-base leading-relaxed text-[#445571] max-w-3xl">{answer}</p>
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
