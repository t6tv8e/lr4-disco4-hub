"use client";

import { useState } from "react";
import Link from "next/link";
import { formatSlug } from "@/lib/format";
import type { FaultCodeEntry } from "@/lib/content";

export default function FaultCodeList({ codes }: { codes: FaultCodeEntry[] }) {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? codes.filter((fc) => {
        const q = search.toUpperCase();
        return (
          fc.code.includes(q) ||
          fc.issues.some((i) => i.slug.toLowerCase().includes(search.toLowerCase()))
        );
      })
    : codes;

  return (
    <>
      <div className="neu-inset p-3">
        <input
          type="text"
          placeholder="Type a fault code (e.g. P2290, B0091, C1A1864)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--foreground-dim)] outline-none font-mono"
        />
      </div>

      {search.trim() && (
        <p className="text-xs text-[var(--foreground-muted)]">
          {filtered.length} code{filtered.length !== 1 ? "s" : ""} matching &quot;{search}&quot;
        </p>
      )}

      <div className="space-y-4">
        {filtered.map((fc) => (
          <div key={fc.code} className="neu-card-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge badge-neutral font-mono text-sm font-semibold">
                {fc.code}
              </span>
              <span className="text-xs text-[var(--foreground-dim)]">
                {fc.issues.length} related issue{fc.issues.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="space-y-2">
              {fc.issues.map((issue) => (
                <Link
                  key={issue.slug}
                  href={`/known-issues/${issue.slug}`}
                  className="block p-3 rounded-lg bg-[var(--bg-base)] hover:bg-[var(--bg-raised)] transition-colors group"
                >
                  <h3 className="font-medium text-sm mb-1 group-hover:text-[var(--lr-green-bright)] transition-colors">
                    {formatSlug(issue.slug)}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)] line-clamp-2">
                    {issue.summary}
                  </p>
                  {issue.symptoms.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {issue.symptoms.slice(0, 4).map((s) => (
                        <span key={s} className="badge badge-neutral text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && search.trim() && (
        <div className="neu-inset p-8 text-center">
          <p className="text-sm text-[var(--foreground-muted)]">
            No fault codes matching &quot;{search}&quot;.
          </p>
          <p className="text-xs text-[var(--foreground-dim)] mt-1">
            Try a shorter code prefix, or browse <Link href="/known-issues" className="text-[var(--lr-green-bright)] hover:underline">all known issues</Link>.
          </p>
        </div>
      )}
    </>
  );
}
