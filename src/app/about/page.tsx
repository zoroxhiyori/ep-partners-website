import Footer from "@/components/Footer";
import Link from "next/link";
import { getTeamMembers } from "@/lib/content";

const values = [
  { number: "01", title: "Radical Precision", description: "We treat every decimal as a critical detail, ensuring your financial foundation is flawless and future-proof." },
  { number: "02", title: "Empowering Guidance", description: "Translating complex numbers into simple, actionable strategies that give you the confidence to scale boldly." },
  { number: "03", title: "Transparent Pricing", description: "Clarity starts with communication. We provide flat-rate, value-based solutions with no hidden layers or surprise bills." },
  { number: "04", title: "Tech-Driven Efficiency", description: "We leverage cutting-edge cloud tools to streamline your finances, saving you time and reducing friction at every step." },
];

export default function AboutPage() {
  const team = getTeamMembers();
  return (
    <main className="flex flex-col">

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-0">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Meet the Team Committed to Your Financial Wellbeing.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              Built on expertise, driven by purpose — we exist to give growing
              businesses the financial clarity they deserve.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7] bg-white/[0.04] border-t border-x border-white/10 overflow-hidden rounded-t-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10rem] lg:text-[16rem] font-bold text-white/[0.025] select-none leading-none tracking-tighter">EP</span>
            </div>
            <p className="absolute bottom-5 right-6 text-xs tracking-[0.22em] uppercase text-white/20">Photo</p>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#e5e7eb]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 items-start">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">Our Philosophy</p>
              <span className="w-8 h-0.5 bg-[#c9a84c]" />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">What We Believe In</h2>
              <p className="text-base leading-relaxed text-[#445571] max-w-2xl">
                We believe in making accounting accessible and understandable, transforming it from a chore into a powerful business tool.
                At EP Partners, numbers are never just figures on a page — they are the story of your ambitions, your progress, and your potential.
              </p>
              <p className="text-base leading-relaxed text-[#445571] max-w-2xl">
                Our approach combines rigorous technical expertise with genuine partnership. We invest the time to understand your business,
                your industry, and your goals — so that every piece of guidance we offer is grounded in the full picture of who you are and where you're headed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEAM — light gray */}
      <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Our People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight">The People Behind<br />the Precision.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map(({ name, role }) => (
              <div key={name} className="flex flex-col gap-4 group">
                <div className="relative aspect-[3/4] bg-white border border-[#e5e7eb] rounded-lg overflow-hidden hover:border-[#c9a84c] hover:shadow-md transition-all duration-300">
                  <span className="absolute top-4 right-4 w-8 h-px bg-[#c9a84c]/40 group-hover:w-12 transition-all duration-300" />
                  <span className="absolute top-4 right-4 h-8 w-px bg-[#c9a84c]/40 group-hover:h-12 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="text-6xl font-bold text-[#0f1f3d]/[0.06] leading-none select-none">
                      {name.split(" ")[0][0]}{name.split(" ")[1][0]}
                    </span>
                  </div>
                  <p className="absolute bottom-4 right-5 text-[9px] tracking-[0.2em] uppercase text-[#445571]/30">Photo</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-[#0f1f3d] group-hover:text-[#c9a84c] transition-colors duration-300">{name}</h3>
                  <p className="text-xs tracking-wide uppercase text-[#445571]">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUES — navy */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">The Core Foundation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Our values drive<br />precision.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map(({ number, title, description }) => (
              <div key={number} className="bg-white/[0.05] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col gap-4 hover:bg-white/[0.08] hover:border-[#c9a84c]/40 transition-all duration-300 group">
                <span className="text-3xl font-bold text-[#c9a84c]/40 leading-none">{number}</span>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#c9a84c] transition-colors duration-300">{title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
