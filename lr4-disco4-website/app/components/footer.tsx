import Link from "next/link";

const QUICK_LINKS = [
  { href: "/known-issues", label: "Known Issues" },
  { href: "/guides", label: "Guides & Tips" },
  { href: "/videos", label: "Videos" },
  { href: "/channels", label: "Channels" },
  { href: "/fault-codes", label: "Fault Codes" },
  { href: "/pre-purchase-checklist", label: "Pre-Purchase Checklist" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)] mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--lr-green-dim)] border border-[var(--lr-green)] flex items-center justify-center text-[var(--lr-green-bright)] font-bold text-sm">
                D4
              </div>
              <span className="font-semibold text-[var(--foreground)] text-sm tracking-tight">
                Disco4 Hub
              </span>
            </div>
            <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
              Community-driven knowledge base for the Land Rover Discovery 4 / LR4.
              Built from real owner experience on YouTube, with AI-assisted content extraction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--lr-green-bright)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-3">
              About This Project
            </h3>
            <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-3">
              All content is extracted from YouTube videos using AI-assisted analysis.
              This is an independent community project, not affiliated with Jaguar Land Rover.
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href="https://github.com/t6t/landroverdisco4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--lr-green-bright)] transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/t6t/landroverdisco4/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--lr-green-bright)] transition-colors"
              >
                Suggest a Correction
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border-subtle)] mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[var(--foreground-dim)]">
          <span>&copy; {new Date().getFullYear()} Disco4 Hub</span>
          <span>Not affiliated with Jaguar Land Rover</span>
        </div>
      </div>
    </footer>
  );
}
