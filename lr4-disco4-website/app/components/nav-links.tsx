"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/known-issues", label: "Issues" },
  { href: "/guides", label: "Guides" },
  { href: "/videos", label: "Videos" },
  { href: "/channels", label: "Channels" },
  { href: "/fault-codes", label: "Fault Codes" },
  { href: "/search", label: "Search" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {NAV_ITEMS.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              isActive
                ? "text-[var(--foreground)] bg-[var(--bg-raised)]"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--bg-raised)]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
