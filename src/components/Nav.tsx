"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const languages = ["EN", "KH", "ZH"];

export default function Nav() {
  const [activeLang, setActiveLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy border-b border-gold/20 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/images/EP_partner_logo.png"
            alt="EP Partners"
            className="h-11 w-auto [filter:brightness(0)_invert(1)]"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative inline-block text-[11px] font-sans tracking-[0.15em] uppercase text-white/70 pb-1 group"
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
                      : "text-white/40 hover:text-gold"
                  }`}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span className="text-white/20 select-none leading-none">|</span>
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
              className={`block h-px bg-white origin-center transition-all duration-200 ${
                menuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-200 ${
                menuOpen ? "w-5 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-white origin-center transition-all duration-200 ${
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
        <div className="border-t border-white/10 bg-[#0a1628] px-6 py-7 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-sans tracking-[0.15em] uppercase text-white/70 hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-[11px] font-sans tracking-[0.12em] pt-4 border-t border-white/10">
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLang(lang)}
                  className={`transition-colors ${
                    activeLang === lang
                      ? "text-gold font-semibold"
                      : "text-white/40 hover:text-gold"
                  }`}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span className="text-white/20 select-none">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
