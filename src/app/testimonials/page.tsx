import Footer from "@/components/Footer";
import Link from "next/link";
import { getTestimonials } from "@/lib/content";

export const metadata = {
  title: "Client Testimonials | EP Partners",
  description: "See what our clients say about EP Partners — accounting, tax, and business advisory services in Cambodia.",
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <main className="flex flex-col">

      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Client Stories</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              What Our Clients<br />Say.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              We measure success by the outcomes our clients achieve — in compliance, growth, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TESTIMONIALS GRID — white */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {testimonials.length === 0 ? (
            <p className="text-center text-[#445571] py-20">No testimonials found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.slug}
                  className="bg-[#f4f5f7] rounded-lg p-6 sm:p-8 flex flex-col gap-5 border border-transparent hover:border-[#c9a84c]/30 hover:shadow-md transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        fill={i < t.rating ? "#c9a84c" : "#e5e7eb"}
                        width="16"
                        height="16"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-[#445571] flex-1 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid #e5e7eb" }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: "#0f1f3d" }}
                    >
                      {t.avatar_initials}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold text-[#0f1f3d]">{t.name}</p>
                      <p className="text-xs text-[#445571]/70">{t.role}, {t.company}</p>
                    </div>
                    <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-[#e5e7eb] text-[#445571]/60">
                      {t.language}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA — navy */}
      <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Ready to Start?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5 max-w-xl mx-auto">
            Join Our Growing<br />Client Base.
          </h2>
          <p className="text-base leading-relaxed text-white/65 max-w-md mx-auto mb-8">
            Get the same quality of advice and service that our clients have come to rely on.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c9a84c] text-[#0f1f3d] rounded-md px-8 py-3.5 text-sm font-semibold hover:bg-white transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
