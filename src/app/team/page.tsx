import Link from "next/link";

const team = [
  {
    name: "Te, Lyhav",
    role: "Director",
    bio: "Lyhav leads EP Partners with a focus on client-first advisory, bringing extensive experience in corporate structuring, FDI compliance, and cross-border financial strategy across the ASEAN region.",
    languages: ["EN", "KH", "ZH"],
    initials: "TL",
  },
  {
    name: "Team Member",
    role: "Senior Tax Manager",
    bio: "Our Senior Tax Manager oversees all tax compliance engagements, specialising in GDT audit representation, monthly filing management, and tax optimisation for both local and foreign-owned entities.",
    languages: ["EN", "KH"],
    initials: "TM",
  },
  {
    name: "Team Member",
    role: "Audit Manager",
    bio: "Leading statutory and internal audit engagements, our Audit Manager brings deep expertise in CIFRS standards and has represented clients across manufacturing, hospitality, and NGO sectors.",
    languages: ["EN", "KH", "ZH"],
    initials: "TM",
  },
  {
    name: "Team Member",
    role: "Business Advisory",
    bio: "Focused on Chinese-speaking investors and regional expansion clients, our Business Advisory specialist provides end-to-end Mandarin-language support from entity setup through ongoing strategic planning.",
    languages: ["ZH", "EN"],
    initials: "TM",
  },
];

const values = [
  { label: "Founded", value: "2012" },
  { label: "Languages", value: "EN · KH · ZH · CA" },
  { label: "Clients Served", value: "200+" },
  { label: "Industries", value: "8 Verticals" },
];

export default function TeamPage() {
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
              Our Team
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-white">
              The People Behind<br />the Precision.
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.85] text-white/45 max-w-md">
              A multilingual team of accountants, auditors, and advisors
              committed to your financial clarity and long-term growth.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {values.map(({ label, value }) => (
              <div key={label} className="px-0 py-8 pr-8 flex flex-col gap-2 border-r border-white/10 last:border-r-0">
                <span className="font-serif text-2xl lg:text-3xl font-light text-white">
                  {value}
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. TEAM GRID ── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold mb-5">
              Meet the Team
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy leading-[1.1]">
              Expertise Across<br />Every Discipline.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {team.map(({ name, role, bio, languages, initials }) => (
              <div key={name + role} className="flex flex-col gap-6 group">

                {/* Photo placeholder */}
                <div className="relative aspect-[3/4] bg-navy/[0.06] overflow-hidden">
                  <span className="absolute top-4 right-4 w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-300" />
                  <span className="absolute top-4 right-4 h-8 w-px bg-gold/40 group-hover:h-12 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="font-serif text-6xl font-bold text-navy/[0.06] leading-none select-none">
                      {initials}
                    </span>
                  </div>
                  <p className="absolute bottom-4 right-5 font-sans text-[9px] tracking-[0.2em] uppercase text-navy/25">
                    Photo
                  </p>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-xl font-medium text-navy group-hover:text-gold transition-colors duration-300">
                      {name}
                    </h3>
                    <p className="font-sans text-[11px] tracking-[0.14em] uppercase text-navy/45">
                      {role}
                    </p>
                  </div>

                  <p className="font-sans text-[13px] leading-[1.8] text-navy/55">
                    {bio}
                  </p>

                  {/* Language tags */}
                  <div className="flex items-center gap-2 pt-1">
                    {languages.map((lang, i) => (
                      <span key={lang} className="flex items-center gap-2">
                        <span className="font-sans text-[10px] tracking-[0.14em] text-gold font-medium">
                          {lang}
                        </span>
                        {i < languages.length - 1 && (
                          <span className="text-navy/20 text-[10px] select-none">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. JOIN US ── */}
      <section className="bg-[#f7f5f1] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold">
                Careers
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy leading-[1.1]">
                Join Our Team.
              </h2>
              <p className="font-sans text-[15px] leading-[1.85] text-navy/55 max-w-lg">
                We're always looking for talented accountants, tax specialists,
                and advisors who share our commitment to precision and client
                partnership. If that sounds like you, we'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Link
                href="/contact"
                className="inline-block bg-navy text-white font-sans text-[11px] tracking-[0.18em] uppercase px-10 py-[15px] hover:bg-gold transition-colors duration-300 text-center"
              >
                Get In Touch
              </Link>
              <a
                href="mailto:info@eppartnerskh.com"
                className="font-sans text-[11px] tracking-[0.1em] text-navy/45 hover:text-navy transition-colors text-center"
              >
                info@eppartnerskh.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/images/EP_partner_logo.png"
            alt="EP Partners"
            className="h-9 w-auto mix-blend-multiply"
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
