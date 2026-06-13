"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Business Registration",
    description:
      "Legally establish your business and get operationally ready with full regulatory compliance from day one.",
    subServices: [
      "Company incorporation & MOC registration",
      "Business name & patent registration",
      "Branch & representative office setup",
      "Trademark & intellectual property filing",
      "Licensing & permit applications",
      "Annual renewal & compliance filings",
    ],
  },
  {
    number: "02",
    title: "Tax Compliance",
    description:
      "Deep-dive planning to optimize your tax liabilities and ensure full regulatory compliance across all obligations.",
    subServices: [
      "Monthly & annual tax filing (ToP, VAT, WHT)",
      "VAT registration & return management",
      "Patent tax & minimum tax advisory",
      "Tax audit support & representation",
      "Transfer pricing documentation",
      "Tax health check & risk assessment",
    ],
  },
  {
    number: "03",
    title: "Accounting & Bookkeeping",
    description:
      "Automated, precise management of your daily transactions and financial data — entirely headache-free.",
    subServices: [
      "Daily transaction recording & categorization",
      "Chart of accounts setup & maintenance",
      "Bank reconciliation & cash flow tracking",
      "Payroll processing & statutory contributions",
      "Monthly & annual financial statement preparation",
      "Cloud accounting setup (QuickBooks, Xero)",
    ],
  },
  {
    number: "04",
    title: "Audit & Assurance",
    description:
      "Independent verification services that build stakeholder confidence and ensure financial integrity.",
    subServices: [
      "Statutory & regulatory audit",
      "Internal audit & controls review",
      "Agreed-upon procedures engagements",
      "Compilation of financial statements",
      "Special purpose & forensic audit",
      "IFRS & CИФRS compliance review",
    ],
  },
  {
    number: "05",
    title: "Financial & Investment Advisory",
    description:
      "Translate financial complexity into clear investment decisions with expert modelling and analysis.",
    subServices: [
      "Financial modelling & cash flow forecasting",
      "Feasibility studies & investment analysis",
      "Business valuation & fair value assessment",
      "Capital structure & funding advisory",
      "Fundraising support & investor deck preparation",
      "Financial risk analysis & scenario planning",
    ],
  },
  {
    number: "06",
    title: "Business Advisory & Consulting",
    description:
      "Strategic guidance to streamline operations, sharpen focus, and position your business for scalable growth.",
    subServices: [
      "Business planning & go-to-market strategy",
      "Market entry & expansion advisory",
      "Process optimization & workflow redesign",
      "KPI development & performance monitoring",
      "Management reporting & board presentation",
      "ERP & accounting system implementation support",
    ],
  },
  {
    number: "07",
    title: "M&A & Due Diligence",
    description:
      "Navigate acquisitions and mergers with confidence through rigorous financial and commercial analysis.",
    subServices: [
      "Financial & tax due diligence",
      "Legal due diligence coordination",
      "Acquisition target screening & analysis",
      "Valuation advisory & deal structuring",
      "SPA review & negotiation support",
      "Post-merger integration planning",
    ],
  },
  {
    number: "08",
    title: "Legal & Compliance",
    description:
      "Protect your business with proactive legal guidance and comprehensive corporate compliance management.",
    subServices: [
      "Contract drafting, review & negotiation",
      "Regulatory compliance advisory",
      "Corporate secretarial services",
      "Employment law & HR compliance",
      "AML & corporate governance frameworks",
      "Dispute resolution & legal coordination",
    ],
  },
];

const methodology = [
  {
    phase: "Phase 01",
    title: "Seamless Onboarding",
    description:
      "We begin with a structured discovery session to understand your business, goals, and existing systems. Our team maps out a tailored engagement plan — so from day one, there's no guesswork, just momentum.",
  },
  {
    phase: "Phase 02",
    title: "Strategic Execution",
    description:
      "With a clear roadmap in place, our specialists execute with precision. You receive regular progress updates, milestone reviews, and direct access to the professionals handling your account.",
  },
  {
    phase: "Phase 03",
    title: "Empowered Clarity",
    description:
      "We close every engagement with a debrief that puts you in full control — plain-language reporting, actionable insights, and a forward-looking plan so your business keeps growing confidently.",
  },
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeService = activeIndex !== null ? services[activeIndex] : null;

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
              What We Do
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-white">
              Everything Your<br />Business Needs.
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.85] text-white/45 max-w-md">
              Eight integrated service categories — from registration to M&A —
              designed to support every stage of your business journey with
              precision and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICE CARDS + 3. ACCORDION ── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                Our Services
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy leading-[1.1]">
                Eight Disciplines.<br />One Partnership.
              </h2>
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-navy/55 max-w-xs lg:text-right">
              Select any service to explore the full scope of what we deliver.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10">
            {services.map(({ number, title, description }, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={number}
                  onClick={() => handleCardClick(index)}
                  className={`text-left p-9 lg:p-10 flex flex-col gap-5 group transition-colors duration-300 focus:outline-none ${
                    isActive ? "bg-navy" : "bg-white hover:bg-[#faf8f5]"
                  }`}
                >
                  <span
                    className={`font-serif text-[2.75rem] font-light leading-none transition-colors duration-300 ${
                      isActive ? "text-gold/50" : "text-gold/35"
                    }`}
                  >
                    {number}
                  </span>
                  <h3
                    className={`font-serif text-[1.2rem] font-medium leading-snug transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-navy group-hover:text-gold"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`font-sans text-sm leading-[1.8] flex-1 transition-colors duration-300 ${
                      isActive ? "text-white/50" : "text-navy/55"
                    }`}
                  >
                    {description}
                  </p>
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? "w-10 bg-gold"
                        : "w-6 bg-gold/40 group-hover:w-10 group-hover:bg-gold"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Accordion detail panel */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeService ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {activeService && (
              <div className="border border-t-0 border-navy/10 bg-[#f7f5f1] px-10 lg:px-14 py-12 lg:py-14">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">

                  {/* Left: title */}
                  <div>
                    <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-4">
                      Service {activeService.number}
                    </p>
                    <h3 className="font-serif text-2xl lg:text-3xl font-light text-navy leading-[1.2]">
                      {activeService.title}
                    </h3>
                    <span className="mt-6 block w-8 h-px bg-gold" />
                  </div>

                  {/* Right: sub-services */}
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                    {activeService.subServices.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-[7px] w-[4px] h-[4px] rounded-full bg-gold shrink-0" />
                        <p className="font-sans text-[14px] leading-[1.75] text-navy/70">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. METHODOLOGY ── */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              How We Work
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
              Our Methodology.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-white/8">
            {methodology.map(({ phase, title, description }) => (
              <div
                key={phase}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[160px_260px_1fr] gap-3 lg:gap-12 items-baseline"
              >
                <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">
                  {phase}
                </span>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-white">
                  {title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.85] text-white/45">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="bg-white py-28 lg:py-36 border-b border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
                Get Started
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.4rem] font-light text-navy leading-[1.1]">
                Not sure which service<br className="hidden lg:block" /> you need?
              </h2>
              <p className="font-sans text-[15px] leading-[1.85] text-navy/55">
                Our advisors will assess your situation and recommend the right
                combination of services — no commitment required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/contact"
                className="inline-block bg-navy text-white font-sans text-[11px] tracking-[0.18em] uppercase px-10 py-[15px] hover:bg-gold transition-colors duration-300 shrink-0"
              >
                Let's Connect
              </Link>
              <div className="flex flex-col gap-1.5">
                <a
                  href="mailto:info@eppartnerskh.com"
                  className="font-sans text-[11px] tracking-[0.1em] text-navy/45 hover:text-navy transition-colors"
                >
                  info@eppartnerskh.com
                </a>
                <p className="font-sans text-[11px] tracking-[0.1em] text-navy/30">
                  Response within one business day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg tracking-wide text-white/80">
            <span className="text-gold">EP</span> Partners
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center">
            <a
              href="mailto:info@eppartnerskh.com"
              className="font-sans text-[11px] tracking-[0.1em] text-white/35 hover:text-white/60 transition-colors"
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
