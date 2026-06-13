"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const languages = ["EN", "KH", "ZH"];

export default function Nav() {
  const [activeLang, setActiveLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_1px_8px_rgba(15,31,61,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
          <span className="font-serif text-2xl font-semibold tracking-wide text-gold">EP</span>
          <span className="font-serif text-2xl font-semibold tracking-wide text-navy"> Partners</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative inline-block text-[11px] font-sans tracking-[0.15em] uppercase text-navy pb-1 group"
              >
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: language switcher + mobile toggle */}
        <div className="flex items-center gap-5">

          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-sans tracking-[0.12em]">
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveLang(lang)}
                  className={`transition-colors ${
                    activeLang === lang
                      ? "text-gold font-semibold"
                      : "text-navy/50 hover:text-navy"
                  }`}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span className="text-navy/20 select-none leading-none">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
          >
            <span
              className={`block h-px bg-navy origin-center transition-all duration-200 ${
                menuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
              }`}
            />
            <span
              className={`block h-px bg-navy transition-all duration-200 ${
                menuOpen ? "w-5 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-navy origin-center transition-all duration-200 ${
                menuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-6 py-7 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-sans tracking-[0.15em] uppercase text-navy hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-[11px] font-sans tracking-[0.12em] pt-4 border-t border-gray-100">
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLang(lang)}
                  className={`transition-colors ${
                    activeLang === lang
                      ? "text-gold font-semibold"
                      : "text-navy/50 hover:text-navy"
                  }`}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span className="text-navy/20 select-none">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
