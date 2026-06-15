import Link from "next/link";
import Footer from "@/components/Footer";

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
  {
    number: "07",
    title: "Real Estate & Construction",
    tagline: "End-to-end compliance for developers and investors.",
    description:
      "From property developers and construction firms to foreign real estate investors, we provide specialized tax, accounting and legal compliance tailored to Cambodia's dynamic property market.",
    features: [
      "Property transaction tax & stamp duty advisory",
      "Construction company accounting & payroll",
      "Foreign ownership structure & compliance",
      "Revenue recognition for long-term contracts",
      "CDC & MLMUPC registration support",
      "Real estate investment tax planning",
    ],
    accent: "PROPERTY & DEVELOPMENT",
  },
  {
    number: "08",
    title: "Banking & Financial Services",
    tagline: "Specialized compliance for regulated entities.",
    description:
      "NBC-licensed banks, MFIs, insurance companies and fintech firms face unique regulatory requirements. Our team delivers specialized accounting, audit and compliance services for Cambodia's financial sector.",
    features: [
      "NBC regulatory compliance & reporting",
      "MFI accounting & financial statements",
      "Insurance company audit & compliance",
      "Fintech tax structuring & advisory",
      "IFRS 9 implementation for financial institutions",
      "AML/CFT compliance framework",
    ],
    accent: "FINANCIAL INSTITUTIONS",
  },
  {
    number: "09",
    title: "E-Commerce & Technology",
    tagline: "Tax and compliance for the digital economy.",
    description:
      "From online marketplaces and SaaS platforms to mobile apps and digital agencies, we help tech and e-commerce businesses navigate Cambodia's evolving digital tax landscape.",
    features: [
      "Digital services VAT compliance",
      "Cross-border transaction tax advisory",
      "Technology company accounting & audit",
      "Stock option & equity plan advisory",
      "R&D cost capitalization under IFRS",
      "E-commerce platform compliance",
    ],
    accent: "DIGITAL BUSINESS",
  },
  {
    number: "10",
    title: "Healthcare & Clinics",
    tagline: "Professional services for healthcare providers.",
    description:
      "Clinics, hospitals, pharmaceutical distributors and medical device companies trust EP Partners for specialized healthcare accounting, tax compliance and regulatory advisory in Cambodia.",
    features: [
      "Healthcare entity registration & licensing",
      "Medical practice accounting & bookkeeping",
      "Pharmaceutical import duty & VAT advisory",
      "Healthcare-specific payroll & NSSF",
      "Grant accounting for health NGOs",
      "MOH regulatory compliance support",
    ],
    accent: "HEALTHCARE",
  },
  {
    number: "11",
    title: "Education & Schools",
    tagline: "Financial clarity for educators and institutions.",
    description:
      "International schools, universities, training centers and EdTech companies benefit from EP Partners' specialized education sector accounting, tax and compliance services.",
    features: [
      "School registration & MoEYS compliance",
      "Tuition fee revenue recognition (IFRS 15)",
      "Education entity tax structuring",
      "Scholarship & grant fund accounting",
      "International school audit & assurance",
      "EdTech platform tax advisory",
    ],
    accent: "EDUCATION",
  },
  {
    number: "12",
    title: "Agriculture & Agribusiness",
    tagline: "Supporting Cambodia's agricultural sector.",
    description:
      "From rice exporters and plantation companies to agri-processors and food manufacturers, EP Partners delivers specialized accounting, tax incentives advisory and compliance for Cambodia's agriculture sector.",
    features: [
      "Agricultural tax incentives & exemptions",
      "Export documentation & customs compliance",
      "Plantation & farm accounting",
      "Agri-processing company audit",
      "CDC QIP application for agribusiness",
      "Food safety & export certification support",
    ],
    accent: "AGRICULTURE",
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

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Industry Solutions</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Built for Your<br />Industry.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              Twelve tailored solution sets — each designed around the specific
              regulatory, financial, and operational realities of your sector
              in Cambodia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION CARDS — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Who We Serve</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">Twelve Verticals.<br />One Team.</h2>
            </div>
            <p className="text-base text-[#445571] max-w-xs lg:text-right leading-relaxed">
              Deep sector knowledge delivered through a single, coordinated point of contact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map(({ number, title, tagline, description, features, accent }) => (
              <div
                key={number}
                className="bg-[#f4f5f7] border border-[#e5e7eb] rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col gap-5 hover:border-[#c9a84c] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl font-bold text-[#c9a84c]/50 leading-none">{number}</span>
                  <span className="text-[9px] tracking-[0.22em] uppercase text-[#445571]/40 mt-2 text-right">{accent}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-[#0f1f3d] leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">{title}</h3>
                  <p className="text-xs tracking-[0.12em] uppercase text-[#c9a84c]/80 font-semibold">{tagline}</p>
                </div>

                <p className="text-sm leading-relaxed text-[#445571]">{description}</p>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c]/60 shrink-0" />
                      <span className="text-sm leading-relaxed text-[#445571]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <span className="w-8 h-0.5 bg-[#c9a84c]/40 group-hover:w-12 group-hover:bg-[#c9a84c] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIFFERENTIATORS — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Why EP Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">The EP Partners<br />Difference.</h2>
          </div>

          <div className="flex flex-col divide-y divide-[#0f1f3d]/10">
            {differentiators.map(({ number, title, description }) => (
              <div key={number} className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[80px_240px_1fr] gap-3 lg:gap-10 items-baseline">
                <span className="text-4xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
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
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">Let's Talk</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Don't see your<br />industry listed?</h2>
              <p className="text-base leading-relaxed text-white/65">
                We work with businesses across all sectors in Cambodia. Tell us
                about your situation and we'll tailor a solution that fits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#b8972a] transition-all duration-200 w-full sm:w-auto text-center">
                Let's Connect
              </Link>
              <div className="flex flex-col gap-1">
                <Link href="/services" className="text-sm !text-white/45 hover:!text-[#c9a84c] transition-colors">
                  View all services →
                </Link>
                <p className="text-xs text-white/25">Or explore our full service offering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
