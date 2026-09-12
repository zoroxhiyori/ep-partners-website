import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0f1f3d]">
        <Nav />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
