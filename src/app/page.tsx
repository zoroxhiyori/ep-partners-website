import Link from "next/link";

import Footer from "@/components/Footer";

const services = [
  { number: "01", title: "Business Registration", description: "Timely, compliant, and efficient systems designed to get your business legally established and operationally ready." },
  { number: "02", title: "Tax Compliance", description: "Deep-dive planning to optimize your tax liabilities and ensure full regulatory compliance across all obligations." },
  { number: "03", title: "Accounting & Bookkeeping", description: "Automated, precise, and entirely headache-free management of your daily transactions and financial data flow." },
  { number: "04", title: "Audit & Assurance", description: "Independent verification and assurance services that build stakeholder confidence and ensure financial integrity." },
];

const advantages = [
  { number: "01", title: "Proactive Guidance", description: "We don't just record history; we help you write the future of your ventures with active strategic foresight." },
  { number: "02", title: "Transparent Pricing", description: "Benefit from clear, value-based models. No hidden fees or complex bills—just straightforward investment in your growth." },
  { number: "03", title: "Tech-Driven Efficiency", description: "We leverage cutting-edge cloud tools to streamline your finances, saving you time and reducing friction in each transaction." },
];

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ── 1. HERO — navy ── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center bg-[#0f1f3d]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 sm:py-24 lg:py-0">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">
              We Handle the Numbers
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              You Focus<br />on Growth
            </h1>
            <p className="text-base leading-relaxed text-white/65 max-w-md">
              We translate complex numbers into simple, actionable strategies,
              empowering you to grow your business with confidence.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#b8972a] transition-all duration-200 w-full sm:w-auto text-center">
                Let's Connect
              </Link>
              <Link href="/services" className="inline-block border-2 border-white !text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-white hover:!text-[#0f1f3d] transition-all duration-200 w-full sm:w-auto text-center">
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative hidden sm:block lg:aspect-[5/6] overflow-hidden rounded-lg">
            <img
              src="/images/hero-photo.jpg.jpg"
              alt="EP Partners Professional Services"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. PILLARS — white ── */}
      <section className="bg-white border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
            {["Proactive Guidance", "Transparent Pricing Models", "Precision Accounting"].map((pillar) => (
              <div key={pillar} className="px-6 sm:px-8 py-8 sm:py-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] shrink-0" />
                <p className="text-sm font-semibold tracking-wide text-[#0f1f3d]">{pillar}</p>
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
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">What We Offer</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Your Numbers,<br />Perfected.</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              A suite of services designed to streamline your finances, translating complexity into actionable clarity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map(({ number, title, description }) => (
              <div key={number} className="bg-white border border-[#e5e7eb] rounded-lg p-6 sm:p-8 flex flex-col gap-4 hover:border-[#c9a84c] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-3xl font-bold text-[#c9a84c]/50 leading-none">{number}</span>
                <h3 className="text-xl font-semibold text-[#0f1f3d] group-hover:text-[#c9a84c] transition-colors duration-200">{title}</h3>
                <p className="text-sm leading-relaxed text-[#445571] flex-1">{description}</p>
                <span className="w-8 h-0.5 bg-[#c9a84c]/40 group-hover:w-12 group-hover:bg-[#c9a84c] transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/services" className="inline-block border-2 border-[#0f1f3d] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#0f1f3d] hover:text-white transition-all duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. WHY US — navy ── */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Why EP Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">EP Partners Advantage</h2>
          </div>
          <div className="flex flex-col divide-y divide-white/10">
            {advantages.map(({ number, title, description }) => (
              <div key={number} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[80px_220px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className="text-4xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-base leading-relaxed text-white/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHO WE ARE — white ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] bg-[#f4f5f7] overflow-hidden rounded-lg border border-[#e5e7eb]">
              <span className="absolute top-7 left-7 w-14 h-px bg-[#c9a84c]/50" />
              <span className="absolute top-7 left-7 h-14 w-px bg-[#c9a84c]/50" />
              <span className="absolute bottom-7 right-7 w-14 h-px bg-[#c9a84c]/50" />
              <span className="absolute bottom-7 right-7 h-14 w-px bg-[#c9a84c]/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[11rem] font-bold text-[#0f1f3d]/[0.05] select-none leading-none">EP</span>
              </div>
              <p className="absolute bottom-6 left-6 text-xs tracking-[0.22em] uppercase text-[#445571]/40">Photo</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Beyond the<br />Balance Sheet.</h2>
              <p className="text-base leading-relaxed text-[#445571]">
                We're a team of dedicated experts passionate about helping you succeed,
                translating complex metrics into actionable clarity.
              </p>
              <div className="pt-2">
                <Link href="/about" className="inline-block bg-[#0f1f3d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0f1f3d] transition-all duration-200 w-full sm:w-auto text-center">
                  More About Us
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
