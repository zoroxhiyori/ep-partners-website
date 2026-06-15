"use client";

import Link from "next/link";
import { useState } from "react";
import { categoryMeta, type Category, type Language, type Update } from "@/lib/content-types";

const categories: ["All", ...Category[]] = [
  "All",
  "Tax & Accounting",
  "Legal & Compliance",
  "Business & Investment",
];
const languages: Language[] = ["EN", "KH", "CH"];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function shareUrl(slug: string): string {
  if (typeof window === "undefined") return `/updates/${slug}`;
  return `${window.location.origin}/updates/${slug}`;
}

function openShare(href: string) {
  window.open(href, "_blank", "width=620,height=440,noopener,noreferrer");
}

export default function UpdatesContent({ updates }: { updates: Update[] }) {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [activeLang, setActiveLang] = useState<Language | "">();

  const filtered = updates.filter((u) => {
    const catMatch = activeCategory === "All" || u.category === activeCategory;
    const langMatch = !activeLang || u.languages.includes(activeLang);
    return catMatch && langMatch;
  });

  return (
    <>
      {/* ── FILTER BAR (white) ── */}
      <section className="bg-white" style={{ borderBottom: "1px solid #e5e7eb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 relative"
                  style={{
                    color: active ? "#0f1f3d" : "#445571",
                    background: active ? "rgba(201,168,76,0.12)" : "transparent",
                  }}
                >
                  {cat}
                  {active && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-px block"
                      style={{ background: "#c9a84c" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold">
            <button
              onClick={() => setActiveLang("")}
              className="px-2.5 py-1 rounded transition-colors duration-150"
              style={{ color: !activeLang ? "#c9a84c" : "#445571", fontWeight: !activeLang ? 700 : 400 }}
            >
              All
            </button>
            {languages.map((lang) => (
              <span key={lang} className="flex items-center gap-1">
                <span className="text-[#0f1f3d]/15 select-none">|</span>
                <button
                  onClick={() => setActiveLang(activeLang === lang ? "" : lang)}
                  className="px-2.5 py-1 rounded transition-colors duration-150"
                  style={{
                    color: activeLang === lang ? "#c9a84c" : "#445571",
                    fontWeight: activeLang === lang ? 700 : 400,
                  }}
                >
                  {lang}
                </button>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID (light gray) ── */}
      <section className="bg-[#f4f5f7] flex-1">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
          {filtered.length === 0 ? (
            <p className="text-center text-[#445571] py-20">
              No articles match the selected filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((update) => {
                const meta = categoryMeta[update.category];
                return (
                  <article
                    key={update.slug}
                    className="bg-white rounded-lg border border-[#e5e7eb] flex flex-col transition-all duration-200 hover:border-[#c9a84c] hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="p-6 sm:p-7 flex flex-col gap-3 flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                          style={{ background: meta.bg, color: meta.text }}
                        >
                          {update.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {update.languages.map((lang) => (
                            <span
                              key={lang}
                              className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#f4f5f7] text-[#445571]"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-[#445571]/60">{update.date}</p>

                      <h2 className="text-base font-bold text-[#0f1f3d] leading-snug">
                        <Link
                          href={`/updates/${update.slug}`}
                          className="!text-[#0f1f3d] hover:!text-[#c9a84c] transition-colors duration-200"
                        >
                          {update.title}
                        </Link>
                      </h2>

                      <p className="text-sm text-[#445571] leading-relaxed line-clamp-3 flex-1">
                        {update.excerpt}
                      </p>
                    </div>

                    <div
                      className="px-6 sm:px-7 pb-5 pt-3 flex items-center justify-between gap-3"
                      style={{ borderTop: "1px solid #e5e7eb" }}
                    >
                      <Link
                        href={`/updates/${update.slug}`}
                        className="text-sm font-semibold !text-[#c9a84c] hover:!text-[#0f1f3d] transition-colors duration-200"
                      >
                        Read More →
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            openShare(
                              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl(update.slug))}`
                            )
                          }
                          aria-label="Share on Facebook"
                          className="text-[#445571]/40 hover:text-[#4267B2] transition-colors duration-150"
                        >
                          <FacebookIcon />
                        </button>
                        <button
                          onClick={() =>
                            openShare(
                              `https://t.me/share/url?url=${encodeURIComponent(shareUrl(update.slug))}&text=${encodeURIComponent(update.title)}`
                            )
                          }
                          aria-label="Share on Telegram"
                          className="text-[#445571]/40 hover:text-[#26A5E4] transition-colors duration-150"
                        >
                          <TelegramIcon />
                        </button>
                        <button
                          onClick={() =>
                            openShare(
                              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl(update.slug))}`
                            )
                          }
                          aria-label="Share on LinkedIn"
                          className="text-[#445571]/40 hover:text-[#0077B5] transition-colors duration-150"
                        >
                          <LinkedInIcon />
                        </button>
                        <button
                          onClick={() =>
                            openShare(
                              `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl(update.slug))}&text=${encodeURIComponent(update.title)}`
                            )
                          }
                          aria-label="Share on X"
                          className="text-[#445571]/40 hover:text-[#000000] transition-colors duration-150"
                        >
                          <TwitterIcon />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

    </>
  );
}
