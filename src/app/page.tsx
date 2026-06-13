import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Business Registration",
    description:
      "Timely, compliant, and efficient systems designed to get your business legally established and operationally ready.",
  },
  {
    number: "02",
    title: "Tax Compliance",
    description:
      "Deep-dive planning to optimize your tax liabilities and ensure full regulatory compliance across all obligations.",
  },
  {
    number: "03",
    title: "Accounting & Bookkeeping",
    description:
      "Automated, precise, and entirely headache-free management of your daily transactions and financial data flow.",
  },
  {
    number: "04",
    title: "Audit & Assurance",
    description:
      "Independent verification and assurance services that build stakeholder confidence and ensure financial integrity.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Proactive Guidance",
    description:
      "We don't just record history; we help you write the future of your ventures with active strategic foresight.",
  },
  {
    number: "02",
    title: "Transparent Pricing",
    description:
      "Benefit from clear, value-based models. No hidden fees or complex bills—just straightforward investment in your growth.",
  },
  {
    number: "03",
    title: "Tech-Driven Efficiency",
    description:
      "We leverage cutting-edge cloud tools to streamline your finances, saving you time and reducing friction in each transaction.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 lg:py-0">

          {/* copy */}
          <div className="flex flex-col gap-7 lg:gap-8">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
              We Handle the Numbers
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light text-white leading-[1.05] tracking-tight">
              You Focus<br />on Growth
            </h1>
            <p className="font-sans text-[15px] leading-[1.85] text-white/60 max-w-[400px]">
              We translate complex numbers into simple, actionable strategies,
              empowering you to grow your business with confidence.
            </p>
            <div className="pt-2 flex items-center gap-8">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy font-sans text-[11px] tracking-[0.18em] uppercase px-9 py-[14px] hover:bg-[#d4a843] transition-colors duration-300"
              >
                Let's Connect
              </Link>
              <span className="hidden sm:block w-12 h-px bg-white/15" />
            </div>
          </div>

          {/* photo placeholder */}
          <div className="relative aspect-[5/6] bg-[#162444] overflow-hidden hidden lg:block">
            <span className="absolute top-7 right-7 w-14 h-px bg-gold/50" />
            <span className="absolute top-7 right-7 h-14 w-px bg-gold/50" />
            <span className="absolute bottom-7 left-7 w-14 h-px bg-gold/50" />
            <span className="absolute bottom-7 left-7 h-14 w-px bg-gold/50" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white/[0.02]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[13rem] font-bold text-white/[0.035] select-none leading-none">
                EP
              </span>
            </div>
            <p className="absolute bottom-8 right-8 font-sans text-[9px] tracking-[0.22em] uppercase text-white/25">
              Photo
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
      </section>

      {/* ── 2. PILLARS STRIP ── */}
      <section className="bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              "Proactive Guidance",
              "Transparent Pricing Models",
              "Precision Accounting",
            ].map((pillar) => (
              <div key={pillar} className="px-8 py-10 flex items-center gap-4">
                <span className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" />
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/75">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES OVERVIEW ── */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                What We Offer
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
                Your Numbers,<br />Perfected.
              </h2>
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-white/60 max-w-xs lg:text-right">
              We offer a suite of services designed to streamline your finances,
              translating complexity into actionable clarity.
            </p>
          </div>

          {/* cards — gap-px on a colored parent creates hairline dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {services.map(({ number, title, description }) => (
              <div
                key={number}
                className="relative bg-[#162444] border border-white/10 hover:border-gold p-9 lg:p-10 flex flex-col gap-5 group hover:bg-[#1a2d50] hover:z-10 transition-colors duration-300"
              >
                <span className="font-serif text-[2.75rem] font-light text-gold/35 leading-none">
                  {number}
                </span>
                <h3 className="font-serif text-[1.2rem] font-medium text-white leading-snug group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-[1.8] text-white/50 flex-1">
                  {description}
                </p>
                <span className="w-6 h-px bg-gold/40 group-hover:w-10 group-hover:bg-gold transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="inline-block border border-gold text-gold font-sans text-[11px] tracking-[0.18em] uppercase px-9 py-[14px] hover:bg-gold hover:text-navy transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. WHY US ── */}
      <section className="bg-[#0a1628] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              Why EP Partners
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white">
              EP Partners Advantage
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {advantages.map(({ number, title, description }) => (
              <div
                key={number}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[100px_220px_1fr] gap-3 lg:gap-12 items-baseline"
              >
                <span className="font-serif text-[3.5rem] font-light text-gold/25 leading-none">
                  {number}
                </span>
                <h3 className="font-serif text-xl font-medium text-white">
                  {title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.85] text-white/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHO WE ARE ── */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* photo placeholder */}
            <div className="relative aspect-[4/3] bg-[#162444] overflow-hidden">
              <span className="absolute top-7 left-7 w-14 h-px bg-gold/50" />
              <span className="absolute top-7 left-7 h-14 w-px bg-gold/50" />
              <span className="absolute bottom-7 right-7 w-14 h-px bg-gold/50" />
              <span className="absolute bottom-7 right-7 h-14 w-px bg-gold/50" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[11rem] font-bold text-white/[0.04] select-none leading-none">
                  EP
                </span>
              </div>
              <p className="absolute bottom-8 left-8 font-sans text-[9px] tracking-[0.22em] uppercase text-white/25">
                Photo
              </p>
            </div>

            {/* text */}
            <div className="flex flex-col gap-7 lg:gap-8">
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
                Who We Are
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.4rem] font-light text-white leading-[1.1]">
                Beyond the<br />Balance Sheet.
              </h2>
              <p className="font-sans text-[15px] leading-[1.85] text-white/60">
                We're a team of dedicated experts passionate about helping you
                succeed, translating complex metrics into actionable clarity.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-block border border-gold text-gold font-sans text-[11px] tracking-[0.18em] uppercase px-9 py-[14px] hover:bg-gold hover:text-navy transition-colors duration-300"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a1628] py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/images/EP_partner_logo.png"
            alt="EP Partners"
            className="w-auto"
            style={{ mixBlendMode: 'screen', height: '36px', opacity: 0.85 }}
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
