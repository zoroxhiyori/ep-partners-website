import Link from "next/link";
import Footer from "@/components/Footer";
import { getServices } from "@/lib/content";
import ServicesClient from "./ServicesClient";

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
  const raw = getServices();
  const services = raw.map((s) => ({
    number: s.number,
    title: s.title,
    description: s.tagline,
    subServices: s.sub_services,
    icon_bg: s.icon_bg,
    icon_color: s.icon_color,
  }));

  return (
    <main className="flex flex-col">

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">What We Do</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Everything Your<br />Business Needs.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              Eight integrated service categories — from registration to M&amp;A —
              designed to support every stage of your business journey.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICE CARDS — white (client component handles interactive accordion) */}
      <ServicesClient services={services} />

      {/* 3. METHODOLOGY — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Our Methodology.</h2>
          </div>
          <div className="flex flex-col divide-y divide-[#0f1f3d]/10">
            {methodology.map(({ phase, title, description }) => (
              <div key={phase} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[140px_240px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#c9a84c]">{phase}</span>
                <h3 className="text-xl font-semibold text-[#0f1f3d]">{title}</h3>
                <p className="text-base leading-relaxed text-[#445571]">{description}</p>
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
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">Get Started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Not sure which service<br className="hidden lg:block" /> you need?</h2>
              <p className="text-base leading-relaxed text-white/65">Our advisors will assess your situation and recommend the right combination of services — no commitment required.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#b8972a] transition-all duration-200 w-full sm:w-auto text-center">
                Let&apos;s Connect
              </Link>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@eppartnerskh.com" className="text-sm !text-white/50 hover:!text-white transition-colors">info@eppartnerskh.com</a>
                <p className="text-xs text-white/30">Response within one business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
