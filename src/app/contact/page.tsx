import { getAllFAQItems } from "@/lib/content";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  const faqs = getAllFAQItems();

  return (
    <main className="flex flex-col">
      {/* 1. HERO — navy */}
      <section className="bg-[#0f1f3d] relative overflow-hidden">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Let&apos;s Work<br />Together.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-md">
              Whether you&apos;re starting a business, navigating a tax audit, or
              planning a regional expansion — we&apos;re ready to help.
            </p>
          </div>
        </div>
      </section>

      <ContactClient faqs={faqs} />
    </main>
  );
}
