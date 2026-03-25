"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { SEVERITY_CONFIG, type Severity } from "@/lib/severity";
import type { SearchEntry } from "./page";

const TYPE_CONFIG = {
  issue: { label: "Issue", href: (slug: string) => `/known-issues/${slug}`, badgeClass: "badge-high" },
  guide: { label: "Guide", href: (slug: string) => `/guides/${slug}`, badgeClass: "badge-green" },
  video: { label: "Video", href: (slug: string) => `/videos/${slug}`, badgeClass: "badge-neutral" },
} as const;

export default function SearchClient({ index }: { index: SearchEntry[] }) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(index, {
        keys: [
          { name: "title", weight: 1.0 },
          { name: "faultCodes", weight: 0.9 },
          { name: "symptoms", weight: 0.8 },
          { name: "fixes", weight: 0.6 },
          { name: "summary", weight: 0.5 },
          { name: "category", weight: 0.4 },
          { name: "channel", weight: 0.3 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [index]
  );

  const results = query.trim().length >= 2 ? fuse.search(query, { limit: 30 }) : [];

  // Group results by type
  const grouped = {
    issue: results.filter((r) => r.item.type === "issue"),
    guide: results.filter((r) => r.item.type === "guide"),
    video: results.filter((r) => r.item.type === "video"),
  };

  return (
    <>
      <div className="neu-inset p-4">
        <input
          type="text"
          placeholder="Search issues, fault codes, symptoms, guides, videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-base text-[var(--foreground)] placeholder-[var(--foreground-dim)] outline-none"
          autoFocus
        />
      </div>

      {query.trim().length >= 2 && (
        <p className="text-xs text-[var(--foreground-muted)]">
          {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
        </p>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <div className="neu-inset p-8 text-center">
          <p className="text-sm text-[var(--foreground-muted)]">
            No results for &quot;{query}&quot;.
          </p>
          <p className="text-xs text-[var(--foreground-dim)] mt-1">
            Try a different term, a fault code, or a symptom.
          </p>
        </div>
      )}

      {(["issue", "guide", "video"] as const).map((type) => {
        const items = grouped[type];
        if (items.length === 0) return null;
        const config = TYPE_CONFIG[type];
        return (
          <section key={type}>
            <h2 className="text-xs font-semibold mb-3 text-[var(--lr-green-bright)] uppercase tracking-wider">
              {config.label}s ({items.length})
            </h2>
            <div className="space-y-2">
              {items.map((result) => {
                const entry = result.item;
                return (
                  <Link
                    key={`${entry.type}-${entry.slug}`}
                    href={config.href(entry.slug)}
                    className="neu-card-sm p-4 block hover:green-glow transition-shadow group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-medium text-sm group-hover:text-[var(--lr-green-bright)] transition-colors">
                        {entry.title}
                      </h3>
                      <div className="flex gap-2 shrink-0">
                        {entry.severity && (
                          <span className={`badge ${SEVERITY_CONFIG[entry.severity as Severity].className} text-xs`}>
                            {SEVERITY_CONFIG[entry.severity as Severity].label}
                          </span>
                        )}
                        {entry.category && (
                          <span className="badge badge-neutral text-xs">{entry.category}</span>
                        )}
                        {entry.channel && (
                          <span className="badge badge-neutral text-xs">{entry.channel}</span>
                        )}
                      </div>
                    </div>
                    {entry.summary && (
                      <p className="text-xs text-[var(--foreground-muted)] line-clamp-2">
                        {entry.summary}
                      </p>
                    )}
                    {entry.symptoms && entry.symptoms.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {entry.symptoms.slice(0, 4).map((s) => (
                          <span key={s} className="badge badge-neutral text-xs">{s}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
