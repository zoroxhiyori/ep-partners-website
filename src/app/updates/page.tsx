import { getUpdates } from "@/lib/content";
import UpdatesContent from "./UpdatesContent";

export default function UpdatesPage() {
  const updates = getUpdates();

  return (
    <main className="flex flex-col">
      {/* ── HERO (navy) ── */}
      <section className="bg-[#0f1f3d]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-4">
            Technical Updates
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl">
            Latest Insights &amp; Updates
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Expert analysis on tax, legal, accounting and business matters in Cambodia — available in English, Khmer and Chinese.
          </p>
        </div>
      </section>

      <UpdatesContent updates={updates} />
    </main>
  );
}
