import Link from "next/link";
import Footer from "@/components/Footer";
import { getCareers } from "@/lib/content";

const reasons = [
  {
    number: "01",
    title: "International Exposure",
    description:
      "Work alongside Chinese, Singaporean, Thai, and Cambodian clients across manufacturing, hospitality, NGO, and FDI sectors — building a cross-border perspective from day one.",
  },
  {
    number: "02",
    title: "Professional Development",
    description:
      "We invest in your growth through structured training, ACCA/CPA study support, and direct mentorship from senior advisors. Your technical progression is part of our business plan.",
  },
  {
    number: "03",
    title: "Collaborative Culture",
    description:
      "A small, tight-knit team means your work matters and your voice is heard. We operate with transparency, mutual respect, and a shared commitment to doing right by our clients.",
  },
];

const benefits = [
  {
    title: "Competitive Salary",
    detail: "Market-rate compensation reviewed annually with performance bonuses.",
  },
  {
    title: "NSSF & Health Coverage",
    detail: "Full NSSF contributions plus supplementary health insurance for all staff.",
  },
  {
    title: "Professional Training",
    detail: "In-house training, external workshops, and ACCA/CPA study leave support.",
  },
  {
    title: "Annual Leave",
    detail: "18 days paid annual leave plus public holidays and personal days.",
  },
  {
    title: "Multicultural Team",
    detail: "Work in a friendly multilingual environment across English, Khmer, and Mandarin.",
  },
  {
    title: "Career Progression",
    detail: "Clear seniority pathways with defined criteria for promotion at each level.",
  },
];

export default function CareersPage() {
  const positions = getCareers();
  return (
    <main className="flex flex-col">

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Join Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Build Your Career<br />With Us.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              We're growing — and we're looking for sharp, driven people who
              want to do meaningful work with ambitious clients across Cambodia
              and the region.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Why EP Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">More Than a Job.</h2>
          </div>

          <div className="flex flex-col divide-y divide-[#e5e7eb]">
            {reasons.map(({ number, title, description }) => (
              <div key={number} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[80px_240px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className="text-4xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
                <h3 className="text-xl font-semibold text-[#0f1f3d]">{title}</h3>
                <p className="text-base leading-relaxed text-[#445571]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFITS — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">What You Get</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Benefits &amp;<br />Perks.</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              We take care of our people so our people can take care of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map(({ title, detail }) => (
              <div
                key={title}
                className="bg-white border border-[#e5e7eb] rounded-lg p-6 sm:p-8 flex flex-col gap-4 hover:border-[#c9a84c] hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c9a84c] shrink-0" />
                  <h3 className="text-lg font-semibold text-[#0f1f3d] group-hover:text-[#c9a84c] transition-colors duration-300">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#445571] pl-5">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS — navy */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Open Roles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Current Openings.</h2>
          </div>

          <div className="flex flex-col gap-4">
            {positions.map(({ title, type, location, content, requirements }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/10 rounded-lg px-6 sm:px-8 lg:px-12 py-8 sm:py-10 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 hover:bg-white/[0.08] hover:border-[#c9a84c]/40 transition-all duration-300 group"
              >
                {/* Left: role info */}
                <div className="flex flex-col gap-4 lg:w-64 shrink-0">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#c9a84c] transition-colors duration-300">{title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs tracking-[0.16em] uppercase text-[#0f1f3d] bg-[#c9a84c] rounded px-3 py-1 font-semibold">{type}</span>
                    <span className="text-xs tracking-[0.16em] uppercase text-[#c9a84c]/70 border border-[#c9a84c]/30 rounded px-3 py-1">{location}</span>
                  </div>
                </div>

                {/* Middle: description + requirements */}
                <div className="flex flex-col gap-5 flex-1">
                  <p className="text-sm leading-relaxed text-white/65">{content.split("\n\n")[0].trim()}</p>
                  <ul className="flex flex-col gap-2">
                    {requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c]/60 shrink-0" />
                        <span className="text-sm leading-relaxed text-white/65">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: apply button */}
                <div className="shrink-0">
                  <a
                    href={`mailto:info@eppartnerskh.com?subject=Application: ${title}`}
                    className="inline-block border border-[#c9a84c] !text-[#c9a84c] rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-[#c9a84c] hover:!text-[#0f1f3d] transition-all duration-200 whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">Speculative Applications</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Don't see the<br />right role?</h2>
              <p className="text-base leading-relaxed text-[#445571]">
                Send us your CV and a short note about what you're looking for.
                If there's a fit — now or in the future — we'll be in touch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:info@eppartnerskh.com?subject=Speculative Application"
                className="inline-block bg-[#0f1f3d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0f1f3d] transition-all duration-200 w-full sm:w-auto text-center"
              >
                Send Your CV
              </a>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#445571]">info@eppartnerskh.com</span>
                <p className="text-xs text-[#445571]/50">We read every application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
