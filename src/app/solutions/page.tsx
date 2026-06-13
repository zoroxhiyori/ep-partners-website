import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Chinese Investors",
    tagline: "End-to-end support, fully in Mandarin.",
    description:
      "We bridge the cultural and regulatory gap for Chinese-speaking investors entering Cambodia, providing bilingual documentation and dedicated Mandarin-speaking advisors at every step.",
    features: [
      "Company incorporation & MOC registration in Mandarin",
      "Banking liaison & corporate account opening",
      "Ongoing tax compliance & monthly reporting",
      "Bilingual contracts & legal document review",
      "Investor visa & work permit coordination",
    ],
    accent: "中文服务",
  },
  {
    number: "02",
    title: "Manufacturing & FDI",
    tagline: "Maximize SEZ incentives. Stay fully compliant.",
    description:
      "Foreign direct investors and manufacturers operating in Cambodia's Special Economic Zones benefit from our deep knowledge of QIP tax exemptions, customs regimes, and industrial compliance.",
    features: [
      "QIP application & CDC incentive structuring",
      "SEZ customs & import/export compliance",
      "Factory & entity setup across all provinces",
      "Labor law compliance & payroll management",
      "Transfer pricing & intercompany documentation",
    ],
    accent: "FDI",
  },
  {
    number: "03",
    title: "Hospitality & Tourism",
    tagline: "Purpose-built accounting for hotels and operators.",
    description:
      "From boutique guesthouses to resort chains and tour operators, we understand the seasonal cash flows, licensing requirements, and audit standards specific to Cambodia's hospitality sector.",
    features: [
      "MPTC & ministry licensing support",
      "Revenue audit & occupancy tax compliance",
      "Seasonal cash flow planning & forecasting",
      "Restaurant & F&B bookkeeping packages",
      "Tourism-specific VAT & WHT management",
    ],
    accent: "Tourism",
  },
  {
    number: "04",
    title: "NGOs & Non-Profits",
    tagline: "Compliant, transparent, and donor-ready.",
    description:
      "We support international and local NGOs with MoI registration, INGO compliance, and the rigorous grant accounting standards demanded by bilateral and multilateral donors.",
    features: [
      "MoI & MoFA registration & annual renewals",
      "Donor grant accounting & fund tracking",
      "INGO compliance & government reporting",
      "MoEF financial reporting & audit coordination",
      "Board financial reporting & transparency frameworks",
    ],
    accent: "NGO",
  },
  {
    number: "05",
    title: "SMEs & Startups",
    tagline: "Enterprise-grade support at startup-friendly rates.",
    description:
      "Growing businesses deserve the same financial rigour as large corporations. Our SME packages are structured to scale with you — from first registration through your first audit.",
    features: [
      "Affordable company registration packages",
      "Monthly bookkeeping & tax filing bundles",
      "Startup-friendly financial modelling",
      "Cloud accounting setup & staff training",
      "Growth advisory & investor-readiness support",
    ],
    accent: "SME",
  },
  {
    number: "06",
    title: "Regional Expansion",
    tagline: "Your ASEAN gateway, handled end-to-end.",
    description:
      "For Singapore, Thai, Vietnamese, and other ASEAN businesses entering Cambodia, we provide a seamless local infrastructure — so you can move fast without regulatory risk.",
    features: [
      "Market entry feasibility & entity structuring",
      "Local company registration & nominee services",
      "Cross-border tax planning & treaty analysis",
      "Expat employment & work permit advisory",
      "Ongoing local compliance & statutory filing",
    ],
    accent: "ASEAN",
  },
];

const differentiators = [
  {
    number: "01",
    title: "Industry-Specific Expertise",
    description:
      "Every sector has its own regulatory layer, tax treatment, and operational rhythm. Our teams are assigned by vertical, not just by service.",
  },
  {
    number: "02",
    title: "Multilingual Capability",
    description:
      "We serve clients in English, Khmer, Mandarin, and Cantonese — eliminating translation friction at every stage of your engagement.",
  },
  {
    number: "03",
    title: "Local Authority Relationships",
    description:
      "Years of engagement with the GDT, CDC, MPTC, MoI, and other regulators means faster approvals and fewer surprises for your business.",
  },
];

export default function SolutionsPage() {
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
              Industry Solutions
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-white">
              Built for Your<br />Industry.
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.85] text-white/45 max-w-md">
              Six tailored solution sets — each designed around the specific
              regulatory, financial, and operational realities of your sector
              in Cambodia.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SOLUTION CARDS ── */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                Who We Serve
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
                Six Verticals.<br />One Team.
              </h2>
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-white/60 max-w-xs lg:text-right">
              Deep sector knowledge delivered through a single, coordinated
              point of contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {solutions.map(({ number, title, tagline, description, features, accent }) => (
              <div
                key={number}
                className="relative bg-[#162444] border border-white/10 hover:border-gold p-10 lg:p-12 flex flex-col gap-6 group hover:bg-[#1a2d50] hover:z-10 transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif text-[2.75rem] font-light text-gold/35 leading-none">
                    {number}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-white/25 mt-2 text-right">
                    {accent}
                  </span>
                </div>

                {/* Title & tagline */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[1.35rem] font-medium text-white leading-snug group-hover:text-gold transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-gold/80">
                    {tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-sm leading-[1.85] text-white/50">
                  {description}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-3 flex-1">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[8px] w-[4px] h-[4px] rounded-full bg-gold/60 shrink-0" />
                      <span className="font-sans text-[13px] leading-[1.75] text-white/50">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <span className="w-6 h-px bg-gold/40 group-hover:w-10 group-hover:bg-gold transition-all duration-300 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DIFFERENTIATORS ── */}
      <section className="bg-[#0a1628] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              Why EP Partners
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
              The EP Partners<br />Difference.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {differentiators.map(({ number, title, description }) => (
              <div
                key={number}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[100px_240px_1fr] gap-3 lg:gap-12 items-baseline"
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

      {/* ── 4. CTA ── */}
      <section className="bg-navy py-28 lg:py-36 relative overflow-hidden">
        <span className="absolute top-10 right-10 w-16 h-px bg-gold/20 hidden lg:block" />
        <span className="absolute top-10 right-10 h-16 w-px bg-gold/20 hidden lg:block" />
        <span className="absolute bottom-10 left-10 w-16 h-px bg-gold/20 hidden lg:block" />
        <span className="absolute bottom-10 left-10 h-16 w-px bg-gold/20 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
                Let's Talk
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
                Don't see your<br />industry listed?
              </h2>
              <p className="font-sans text-[15px] leading-[1.85] text-white/45">
                We work with businesses across all sectors in Cambodia. Tell us
                about your situation and we'll tailor a solution that fits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy font-sans text-[11px] tracking-[0.18em] uppercase px-10 py-[15px] hover:bg-[#d4a843] transition-colors duration-300 shrink-0"
              >
                Let's Connect
              </Link>
              <div className="flex flex-col gap-1.5">
                <Link
                  href="/services"
                  className="font-sans text-[11px] tracking-[0.1em] text-white/45 hover:text-gold transition-colors"
                >
                  View all services →
                </Link>
                <p className="font-sans text-[11px] tracking-[0.1em] text-white/25">
                  Or explore our full service offering
                </p>
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
