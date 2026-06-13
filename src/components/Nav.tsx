"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Updates", href: "/updates" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const languages = ["EN", "KH", "ZH"];

export default function Nav() {
  const [activeLang, setActiveLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-[#0f1f3d]" style={{ borderBottom: "1px solid #e5e7eb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between py-3">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/images/EP_partner_logo.png"
            alt="EP Partners"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative inline-block text-sm font-medium pb-1 group text-[#0f1f3d] hover:text-[#c9a84c] transition-colors duration-200"
              >
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#c9a84c] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: language switcher + CTA + hamburger */}
        <div className="flex items-center gap-5">

          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveLang(lang)}
                  className="transition-colors duration-200"
                  style={{
                    color: activeLang === lang ? "#c9a84c" : "rgba(15,31,61,0.55)",
                    fontWeight: activeLang === lang ? "600" : "400",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span className="text-[#0f1f3d]/20 select-none leading-none">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="max-lg:hidden bg-[#0f1f3d] !text-white rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-[#c9a84c] hover:!text-[#0f1f3d] transition-all duration-200"
          >
            Let's Connect
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
          >
            <span
              className="block h-px bg-[#0f1f3d] origin-center transition-all duration-200"
              style={{ width: "20px", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }}
            />
            <span
              className="block h-px bg-[#0f1f3d] transition-all duration-200"
              style={{ width: menuOpen ? "20px" : "16px", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px bg-[#0f1f3d] origin-center transition-all duration-200"
              style={{ width: "20px", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? "500px" : "0", opacity: menuOpen ? 1 : 0 }}
      >
        <div className="px-6 py-7 flex flex-col gap-5 border-t border-[#e5e7eb] bg-white">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#0f1f3d] hover:text-[#c9a84c] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-3 border-t border-[#e5e7eb] text-[11px]">
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLang(lang)}
                  style={{
                    color: activeLang === lang ? "#c9a84c" : "rgba(15,31,61,0.55)",
                    fontWeight: activeLang === lang ? "600" : "400",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span className="text-[#0f1f3d]/20 select-none">|</span>
                )}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0f1f3d] !text-white rounded-md px-5 py-2.5 text-sm font-semibold text-center hover:bg-[#c9a84c] hover:!text-[#0f1f3d] transition-all duration-200"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}
