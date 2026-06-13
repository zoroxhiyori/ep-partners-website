const team = [
  { name: "Sophea Chan", role: "Founder & Managing Partner" },
  { name: "Dara Pich", role: "Senior Accountant" },
  { name: "Lina Keo", role: "Tax Compliance Specialist" },
  { name: "Virak Meas", role: "Audit & Assurance Associate" },
];

const values = [
  {
    number: "01",
    title: "Radical Precision",
    description:
      "We treat every decimal as a critical detail, ensuring your financial foundation is flawless and future-proof.",
  },
  {
    number: "02",
    title: "Empowering Guidance",
    description:
      "Translating complex numbers into simple, actionable strategies that give you the confidence to scale boldly.",
  },
  {
    number: "03",
    title: "Transparent Pricing",
    description:
      "Clarity starts with communication. We provide flat-rate, value-based solutions with no hidden layers or surprise bills.",
  },
  {
    number: "04",
    title: "Tech-Driven Efficiency",
    description:
      "We leverage cutting-edge cloud tools to streamline your finances, saving you time and reducing friction at every step.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">

      {/* ── 1. HERO ── */}
      <section className="bg-navy relative overflow-hidden">
        <span className="absolute top-12 left-12 w-20 h-px bg-gold/30 hidden lg:block" />
        <span className="absolute top-12 left-12 h-20 w-px bg-gold/30 hidden lg:block" />
        <span className="absolute bottom-12 right-12 w-20 h-px bg-gold/30 hidden lg:block" />
        <span className="absolute bottom-12 right-12 h-20 w-px bg-gold/30 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-0">
          <div className="max-w-3xl mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-6">
              About Us
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-white">
              Meet the Team Committed to Your Financial Wellbeing.
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.85] text-white/45 max-w-md">
              Built on expertise, driven by purpose — we exist to give growing
              businesses the financial clarity they deserve.
            </p>
          </div>

          {/* wide photo placeholder */}
          <div className="relative w-full aspect-[16/7] bg-white/[0.04] border-t border-x border-white/8 overflow-hidden">
            <span className="absolute top-7 right-7 w-12 h-px bg-gold/40" />
            <span className="absolute top-7 right-7 h-12 w-px bg-gold/40" />
            <span className="absolute bottom-7 left-7 w-12 h-px bg-gold/40" />
            <span className="absolute bottom-7 left-7 h-12 w-px bg-gold/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[16rem] font-bold text-white/[0.025] select-none leading-none tracking-tighter">
                EP
              </span>
            </div>
            <p className="absolute bottom-7 right-8 font-sans text-[9px] tracking-[0.22em] uppercase text-white/20">
              Photo
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PHILOSOPHY ── */}
      <section className="bg-navy py-28 lg:py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

            {/* label column */}
            <div className="flex flex-col gap-5">
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
                Our Philosophy
              </p>
              <span className="w-8 h-px bg-gold" />
            </div>

            {/* text column */}
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-3xl lg:text-4xl xl:text-[2.75rem] font-light text-white leading-[1.2]">
                What We Believe In
              </h2>
              <p className="font-sans text-[15px] leading-[1.9] text-white/60 max-w-2xl">
                We believe in making accounting accessible and understandable,
                transforming it from a chore into a powerful business tool. At
                EP Partners, numbers are never just figures on a page — they
                are the story of your ambitions, your progress, and your
                potential.
              </p>
              <p className="font-sans text-[15px] leading-[1.9] text-white/60 max-w-2xl">
                Our approach combines rigorous technical expertise with genuine
                partnership. We invest the time to understand your business,
                your industry, and your goals — so that every piece of guidance
                we offer is grounded in the full picture of who you are and
                where you're headed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TEAM ── */}
      <section className="bg-[#0a1628] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              Our People
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
              The People Behind<br />the Precision.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role }) => (
              <div key={name} className="flex flex-col gap-5 group">

                {/* photo placeholder */}
                <div className="relative aspect-[3/4] bg-[#162444] overflow-hidden">
                  <span className="absolute top-4 right-4 w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-300" />
                  <span className="absolute top-4 right-4 h-8 w-px bg-gold/40 group-hover:h-12 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="font-serif text-6xl font-bold text-white/[0.06] leading-none select-none">
                      {name.split(" ")[0][0]}{name.split(" ")[1][0]}
                    </span>
                  </div>
                  <p className="absolute bottom-4 right-5 font-sans text-[9px] tracking-[0.2em] uppercase text-white/25">
                    Photo
                  </p>
                </div>

                {/* info */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                    {name}
                  </h3>
                  <p className="font-sans text-[11px] tracking-[0.14em] uppercase text-white/50">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VALUES ── */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              The Core Foundation
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-[1.1]">
              Our values drive<br />precision.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {values.map(({ number, title, description }) => (
              <div
                key={number}
                className="bg-[#162444] p-10 lg:p-12 flex flex-col gap-5 group hover:bg-[#1a2d50] transition-colors duration-300"
              >
                <span className="font-serif text-[2.5rem] font-light text-gold/30 leading-none">
                  {number}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-[1.85] text-white/60">
                  {description}
                </p>
                <span className="w-6 h-px bg-gold/30 group-hover:w-10 group-hover:bg-gold transition-all duration-300 mt-auto pt-4" />
              </div>
            ))}
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
