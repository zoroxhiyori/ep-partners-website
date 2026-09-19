import type { Metadata } from "next";
import { Inter, Noto_Sans_Khmer } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LANG_COOKIE, htmlLang, parseLang } from "@/lib/i18n-config";
import Nav from "@/components/Nav";
import Providers from "@/components/Providers";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khmer",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eppartnerskh.com"),
  title: {
    default: "EP Partners Co., Ltd — Professional Services Cambodia",
    template: "%s | EP Partners",
  },
  description:
    "Accounting, tax, audit and advisory services in Phnom Penh, Cambodia. Serving local and international clients in English, Khmer and Chinese.",
  openGraph: {
    title: "EP Partners Co., Ltd",
    description:
      "Professional accounting, tax and advisory services in Cambodia.",
    url: "https://eppartnerskh.com",
    siteName: "EP Partners",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EP Partners Co., Ltd",
    description:
      "Professional accounting, tax and advisory services in Cambodia.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = parseLang((await cookies()).get(LANG_COOKIE)?.value);

  return (
    <html lang={htmlLang[lang]} className={`${inter.variable} ${notoKhmer.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0f1f3d]">
        <Providers initialLang={lang}>
          <Nav />
          {children}
          <ScrollReveal />
        </Providers>
      </body>
    </html>
  );
}
