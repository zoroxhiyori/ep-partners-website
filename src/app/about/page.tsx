import Footer from "@/components/Footer";

const values = [
  { number: "01", title: "Radical Precision", description: "We treat every decimal as a critical detail, ensuring your financial foundation is flawless and future-proof." },
  { number: "02", title: "Empowering Guidance", description: "Translating complex numbers into simple, actionable strategies that give you the confidence to scale boldly." },
  { number: "03", title: "Transparent Pricing", description: "Clarity starts with communication. We provide flat-rate, value-based solutions with no hidden layers or surprise bills." },
  { number: "04", title: "Tech-Driven Efficiency", description: "We leverage cutting-edge cloud tools to streamline your finances, saving you time and reducing friction at every step." },
];

export default function AboutPage() {
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
          <div className="relative w-full overflow-hidden rounded-xl" style={{ height: '500px' }}>
            <img
              src="/images/about-hero.jpg.png?v=2"
              alt="EP Partners Team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
            />
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

      {/* 3. VALUES — navy */}
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
