"use client";

import Link from "next/link";
import { categoryMeta, type Update } from "@/lib/content-types";
import { labelTracking, useLanguage } from "@/lib/i18n";
import ShareButtons from "./ShareButtons";

type ArticleMeta = Omit<Update, "content">;

// Article text (title, category, date, author, body) comes from the markdown
// and stays in English; only the surrounding UI is translated.
export default function ArticleView({
  update,
  related,
  children,
}: {
  update: ArticleMeta;
  related: ArticleMeta[];
  children: React.ReactNode;
}) {
  const { lang, t } = useLanguage();
  const tracking = labelTracking(lang, "tracking-widest");
  const meta = categoryMeta[update.category];

  return (
    <>
      {/* ── HERO (navy) ── */}
      <section className="bg-[#0f1f3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
              style={{ background: meta.bg, color: meta.text }}
            >
              {update.category}
            </span>
            {update.languages.map((code) => (
              <span
                key={code}
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/10 text-white/70"
              >
                {code}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-5 max-w-4xl">
            {update.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50 mb-7 flex-wrap">
            <span>{update.date}</span>
            <span className="text-white/20">·</span>
            <span>{update.readTime} {t("updates.card.min_read")}</span>
            <span className="text-white/20">·</span>
            <span>{update.author}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold uppercase ${tracking} text-white/40`}>{t("updates.card.share")}</span>
            <ShareButtons title={update.title} size="md" />
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-16">

            <article>
              <div className="article-body">
                {children}
              </div>

              <div
                className="mt-10 pt-6 flex items-center gap-3 flex-wrap"
                style={{ borderTop: "1px solid #e5e7eb" }}
              >
                <span className={`text-xs font-semibold uppercase ${tracking} text-[#0f1f3d]`}>
                  {t("updates.detail.share_inline")}
                </span>
                <ShareButtons title={update.title} size="sm" />
              </div>

              <div className="mt-6">
                <Link
                  href="/updates"
                  className="text-sm font-semibold !text-[#c9a84c] hover:!text-[#0f1f3d] transition-colors duration-200"
                >
                  {t("updates.detail.back")}
                </Link>
              </div>
            </article>

            <aside className="flex flex-col gap-6">
              <div className="bg-[#f4f5f7] rounded-lg p-6">
                <h3 className={`text-xs font-bold uppercase ${tracking} text-[#0f1f3d] mb-4`}>
                  {t("updates.detail.related")}
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map((rel) => {
                    const relMeta = categoryMeta[rel.category];
                    return (
                      <div
                        key={rel.slug}
                        className="pb-4"
                        style={{ borderBottom: "1px solid #e5e7eb" }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 inline-block"
                          style={{ background: relMeta.bg, color: relMeta.text }}
                        >
                          {rel.category}
                        </span>
                        <Link
                          href={`/updates/${rel.slug}`}
                          className="block text-sm font-semibold !text-[#0f1f3d] hover:!text-[#c9a84c] transition-colors duration-200 leading-snug mb-1"
                        >
                          {rel.title}
                        </Link>
                        <p className="text-xs text-[#445571]/60">{rel.date}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#f4f5f7] rounded-lg p-6">
                <h3 className={`text-xs font-bold uppercase ${tracking} text-[#0f1f3d] mb-4`}>
                  {t("updates.detail.share_heading")}
                </h3>
                <ShareButtons title={update.title} size="sm" />
              </div>

              <div className="bg-[#0f1f3d] rounded-lg p-6">
                <p className={`text-xs font-bold uppercase ${tracking} text-[#c9a84c] mb-2`}>
                  {t("updates.detail.sidebar.label")}
                </p>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{t("updates.detail.sidebar.heading")}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {t("updates.detail.contact_cta")}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#c9a84c] !text-[#0f1f3d] font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-white transition-colors duration-200"
                >
                  {t("updates.detail.sidebar.button")}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA (navy) ── */}
      <section className="bg-[#0f1f3d]">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 text-center">
          <p className={`text-xs font-bold uppercase ${tracking} text-[#c9a84c] mb-3`}>
            {t("updates.detail.cta.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            {t("updates.detail.cta.heading")}
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
            {t("updates.detail.cta.desc")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c9a84c] !text-[#0f1f3d] font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-white transition-colors duration-200"
          >
            {t("btn.lets_connect")}
          </Link>
        </div>
      </section>
    </>
  );
}
