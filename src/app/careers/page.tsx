import Link from "next/link";

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

const positions = [
  {
    title: "Tax Associate",
    type: "Full-time",
    location: "Phnom Penh",
    description:
      "Support monthly and annual tax filings, assist with GDT audit preparation, and work directly with clients on VAT, ToP, and WHT compliance.",
    requirements: [
      "Degree in Accounting, Finance, or related field",
      "0–2 years of experience (fresh graduates welcome)",
      "Proficiency in English and Khmer",
      "Detail-oriented with strong numerical accuracy",
    ],
  },
  {
    title: "Accounting Officer",
    type: "Full-time",
    location: "Phnom Penh",
    description:
      "Manage bookkeeping, bank reconciliation, payroll processing, and monthly financial reporting for a portfolio of SME and corporate clients.",
    requirements: [
      "Degree in Accounting or related field",
      "1–3 years of bookkeeping or accounting experience",
      "Experience with QuickBooks or Xero preferred",
      "Strong Excel and data organisation skills",
    ],
  },
  {
    title: "Audit Junior",
    type: "Full-time",
    location: "Phnom Penh",
    description:
      "Assist in statutory audit engagements, support senior auditors in fieldwork, and serve as a key point of contact for Mandarin-speaking audit clients.",
    requirements: [
      "Degree in Accounting or Finance",
      "Mandarin proficiency (spoken and written) required",
      "Exposure to audit or assurance work preferred",
      "Methodical, curious, and client-facing confidence",
    ],
  },
  {
    title: "Business Development Officer",
    type: "Full-time",
    location: "Phnom Penh",
    description:
      "Drive client acquisition through networking, referrals, and outreach to the Chinese-speaking investor community. Support proposal writing and partnership development.",
    requirements: [
      "Background in business, marketing, or professional services",
      "Fluent Mandarin and English required",
      "Strong interpersonal and presentation skills",
      "Existing network in the Cambodia business community is a plus",
    ],
  },
];

export default function CareersPage() {
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
              Join Us
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-white">
              Build Your Career<br />With Us.
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.85] text-white/45 max-w-md">
              We're growing — and we're looking for sharp, driven people who
              want to do meaningful work with ambitious clients across Cambodia
              and the region.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. WHY JOIN ── */}
      <section className="bg-white py-28 lg:py-36 border-b border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              Why EP Partners
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy leading-[1.1]">
              More Than a Job.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-navy/10">
            {reasons.map(({ number, title, description }) => (
              <div
                key={number}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[100px_240px_1fr] gap-3 lg:gap-12 items-baseline"
              >
                <span className="font-serif text-[3.5rem] font-light text-gold/25 leading-none">
                  {number}
                </span>
                <h3 className="font-serif text-xl font-medium text-navy">
                  {title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.85] text-navy/55">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS ── */}
      <section className="bg-[#f7f5f1] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
                What You Get
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy leading-[1.1]">
                Benefits &amp;<br />Perks.
              </h2>
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-navy/55 max-w-xs lg:text-right">
              We take care of our people so our people can take care of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10">
            {benefits.map(({ title, detail }) => (
              <div
                key={title}
                className="bg-[#f7f5f1] p-9 lg:p-10 flex flex-col gap-4 group hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" />
                  <h3 className="font-serif text-[1.15rem] font-medium text-navy group-hover:text-gold transition-colors duration-300">
                    {title}
                  </h3>
                </div>
                <p className="font-sans text-sm leading-[1.8] text-navy/55 pl-[17px]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OPEN POSITIONS ── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              Open Roles
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy leading-[1.1]">
              Current Openings.
            </h2>
          </div>

          <div className="flex flex-col gap-px bg-navy/10">
            {positions.map(({ title, type, location, description, requirements }) => (
              <div
                key={title}
                className="bg-white px-10 lg:px-12 py-10 lg:py-12 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 group hover:bg-[#faf8f5] transition-colors duration-300"
              >
                {/* Left: role info */}
                <div className="flex flex-col gap-4 lg:w-64 shrink-0">
                  <h3 className="font-serif text-2xl font-medium text-navy group-hover:text-gold transition-colors duration-300">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-white bg-navy px-3 py-1">
                      {type}
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-navy/50 border border-navy/20 px-3 py-1">
                      {location}
                    </span>
                  </div>
                </div>

                {/* Middle: description + requirements */}
                <div className="flex flex-col gap-5 flex-1">
                  <p className="font-sans text-[14px] leading-[1.85] text-navy/60">
                    {description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-[8px] w-[4px] h-[4px] rounded-full bg-gold/60 shrink-0" />
                        <span className="font-sans text-[13px] leading-[1.75] text-navy/55">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: apply button */}
                <div className="shrink-0">
                  <a
                    href={`mailto:info@eppartnerskh.com?subject=Application: ${title}`}
                    className="inline-block border border-navy text-navy font-sans text-[11px] tracking-[0.18em] uppercase px-8 py-[13px] hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM CTA ── */}
      <section className="bg-navy py-28 lg:py-36 relative overflow-hidden">
        <span className="absolute top-10 right-10 w-16 h-px bg-gold/20 hidden lg:block" />
        <span className="absolute top-10 right-10 h-16 w-px bg-gold/20 hidden lg:block" />
        <span className="absolute bottom-10 left-10 w-16 h-px bg-gold/20 hidden lg:block" />
        <span className="absolute bottom-10 left-10 h-16 w-px bg-gold/20 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
                Speculative Applications
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
                Don't see the<br />right role?
              </h2>
              <p className="font-sans text-[15px] leading-[1.85] text-white/45">
                Send us your CV and a short note about what you're looking for.
                If there's a fit — now or in the future — we'll be in touch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="mailto:info@eppartnerskh.com?subject=Speculative Application"
                className="inline-block bg-white text-navy font-sans text-[11px] tracking-[0.18em] uppercase px-10 py-[15px] hover:bg-gold hover:text-white transition-colors duration-300 shrink-0"
              >
                Send Your CV
              </a>
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[11px] tracking-[0.1em] text-white/45">
                  info@eppartnerskh.com
                </span>
                <p className="font-sans text-[11px] tracking-[0.1em] text-white/25">
                  We read every application
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
