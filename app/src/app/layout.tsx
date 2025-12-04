// app/src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "量子情報基盤技術研究室 – Shibaura Institute of Technology",
  description:
    "芝浦工業大学 量子情報基盤技術研究室の公式サイト。量子コンピュータ・ハードウェアと基盤技術を紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-50 antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
            <div className="quantum-gradient absolute inset-0 opacity-90" />
            <div className="quantum-grid absolute inset-0 opacity-35" />
          </div>

          <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-4">
              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300">
                  Shibaura Institute of Technology
                </p>
                <p className="text-sm font-semibold leading-tight text-slate-100 sm:text-base">
                  Quantum Computer Basic Technology Lab
                </p>
              </div>
              <nav className="flex items-center gap-4 text-sm font-medium text-slate-200">
                {[
                  { href: "/", label: "Home" },
                  { href: "/research", label: "Research" },
                  { href: "/members", label: "Members" },
                  { href: "/access", label: "Access" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-1 text-slate-200 transition hover:text-white hover:underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-4 pb-16 pt-28">{children}</main>
        </div>
      </body>
    </html>
  );
}
