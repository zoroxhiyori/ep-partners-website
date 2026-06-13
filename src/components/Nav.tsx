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
    <nav
      className="sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
      style={{ backgroundColor: '#0f1f3d', borderBottom: '1px solid rgba(201,168,76,0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="shrink-0 px-1">
          <div style={{ backgroundColor: 'transparent' }}>
            <img
              src="/images/EP_partner_logo.png"
              alt="EP Partners"
              style={{ mixBlendMode: 'screen', height: '44px', width: 'auto' }}
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative inline-block font-sans tracking-[0.15em] uppercase pb-1 group nav-link"
                style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
              >
                {label}
                <span
                  className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 ease-out group-hover:w-full"
                  style={{ backgroundColor: '#c9a84c' }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: language switcher + mobile toggle */}
        <div className="flex items-center gap-5">

          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1.5 font-sans tracking-[0.12em]" style={{ fontSize: '11px' }}>
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveLang(lang)}
                  className="transition-colors duration-200"
                  style={{
                    color: activeLang === lang ? '#c9a84c' : 'rgba(255,255,255,0.6)',
                    fontWeight: activeLang === lang ? '600' : '400',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)' }} className="select-none leading-none">|</span>
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
              className="block h-px origin-center transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)', width: '20px',
                transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
            />
            <span
              className="block h-px transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)', width: menuOpen ? '20px' : '16px',
                opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px origin-center transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)', width: '20px',
                transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? '384px' : '0', opacity: menuOpen ? 1 : 0 }}
      >
        <div
          className="px-6 py-7 flex flex-col gap-6"
          style={{ backgroundColor: '#0a1628', borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans tracking-[0.15em] uppercase transition-colors hover:text-gold"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
            >
              {label}
            </Link>
          ))}
          <div
            className="flex items-center gap-2 font-sans tracking-[0.12em] pt-4"
            style={{ fontSize: '11px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {languages.map((lang, i) => (
              <span key={lang} className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLang(lang)}
                  style={{
                    color: activeLang === lang ? '#c9a84c' : 'rgba(255,255,255,0.6)',
                    fontWeight: activeLang === lang ? '600' : '400',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {lang}
                </button>
                {i < languages.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)' }} className="select-none">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
