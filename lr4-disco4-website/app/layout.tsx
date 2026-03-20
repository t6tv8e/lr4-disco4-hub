import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: {
    default: "Disco4 Hub — Land Rover Discovery 4 Knowledge Base",
    template: "%s | Disco4 Hub",
  },
  description:
    "Community-driven knowledge base for Land Rover Discovery 4 / LR4 owners. Known issues, fixes, guides, and tips.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-lg text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--bg-raised)] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/95 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[var(--lr-green-dim)] border border-[var(--lr-green)] flex items-center justify-center text-[var(--lr-green-bright)] font-bold text-sm group-hover:bg-[var(--lr-green)] group-hover:text-white transition-colors">
                D4
              </div>
              <span className="font-semibold text-[var(--foreground)] text-sm tracking-tight">
                Disco4 Hub
              </span>
            </Link>
            <div className="flex items-center gap-1">
              <NavLink href="/known-issues">Issues</NavLink>
              <NavLink href="/guides">Guides</NavLink>
              <NavLink href="/videos">Videos</NavLink>
              <NavLink href="/channels">Channels</NavLink>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
