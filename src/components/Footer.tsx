import Link from "next/link";

const serviceLinks = [
  { label: "Business Registration", href: "/services" },
  { label: "Tax Compliance", href: "/services" },
  { label: "Accounting & Bookkeeping", href: "/services" },
  { label: "Audit & Assurance", href: "/services" },
  { label: "Financial Advisory", href: "/services" },
  { label: "M&A & Due Diligence", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technical Updates", href: "/updates" },
  { label: "Careers", href: "/careers" },
];

const contactItems = [
  { label: "info@eppartnerskh.com", href: "mailto:info@eppartnerskh.com" },
  { label: "+855 10 339 494", href: "tel:+85510339494" },
  { label: "Time Square 3, Street 335, BK1\nToulkouk, Phnom Penh, Cambodia", href: "https://maps.google.com/?q=Time+Square+3+Street+335+Toulkouk+Phnom+Penh" },
];

const linkClass = "text-sm !text-[#445571] hover:!text-[#c9a84c] transition-colors duration-200 block";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0f1f3d]" style={{ borderTop: "1px solid #e5e7eb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Brand column */}
          <div className="flex flex-col items-start gap-5 sm:col-span-2 lg:col-span-1 text-left" style={{ marginLeft: 0, paddingLeft: 0 }}>
            <img
              src="/images/EP_partner_logo.png"
              alt="EP Partners"
              style={{ height: '64px', width: 'auto', marginLeft: '0', paddingLeft: '0', display: 'block' }}
            />
            <p className="text-sm text-[#445571] leading-relaxed max-w-xs text-left pl-2">
              EP Partners — Professional Services Cambodia
            </p>
            <p className="text-sm text-[#445571]/70 leading-relaxed max-w-xs text-left pl-2">
              Your trusted accounting, tax, and advisory partner in Cambodia.
              We translate complex numbers into actionable clarity for growing businesses.
            </p>
            <span className="w-10 h-0.5 bg-[#c9a84c] block ml-2" />
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f1f3d]">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f1f3d]">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f1f3d]">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              {contactItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${linkClass} whitespace-pre-line`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-widest text-[#445571]/50">
            © 2012 EP Partners. All rights reserved.
          </p>
          <p className="text-xs text-[#445571]/50">
            Phnom Penh, Cambodia
          </p>
        </div>
      </div>
    </footer>
  );
}
