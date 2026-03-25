"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { formatSlug } from "@/lib/format";
import { SEVERITY_CONFIG, type Severity } from "@/lib/severity";

interface IssueData {
  slug: string;
  category: string;
  symptoms: string[];
  fixes: string[];
  latestStatus: string;
  mentionCount: number;
  severity: Severity;
}

export default function IssueList({ issues }: { issues: IssueData[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchText, setSearchText] = useState(searchParams?.get("symptom") ?? "");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    searchParams?.get("category") ?? null
  );

  // Sync state back to URL (shallow)
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchText) params.set("symptom", searchText);
    if (activeCategory) params.set("category", activeCategory);
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `${pathname}?${qs}` : pathname);
  }, [searchText, activeCategory, pathname]);

  // Get categories sorted alphabetically, with counts
  const categoryCounts = new Map<string, number>();
  for (const issue of issues) {
    categoryCounts.set(issue.category, (categoryCounts.get(issue.category) ?? 0) + 1);
  }
  const categories = Array.from(categoryCounts.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  // Filter issues
  const filtered = issues.filter((issue) => {
    if (activeCategory && issue.category !== activeCategory) return false;
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      const matchesSymptom = issue.symptoms.some((s) => s.toLowerCase().includes(q));
      const matchesSlug = issue.slug.toLowerCase().includes(q);
      const matchesFixes = issue.fixes.some((f) => f.toLowerCase().includes(q));
      if (!matchesSymptom && !matchesSlug && !matchesFixes) return false;
    }
    return true;
  });

  // Group filtered issues by category
  const grouped = new Map<string, IssueData[]>();
  for (const issue of filtered) {
    if (!grouped.has(issue.category)) grouped.set(issue.category, []);
    grouped.get(issue.category)!.push(issue);
  }
  const sortedCategories = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b));

  const hasFilters = searchText.trim() !== "" || activeCategory !== null;

  return (
    <>
      {/* Search input */}
      <div className="neu-inset p-3">
        <input
          type="text"
          placeholder="Search symptoms, fixes, or issues..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--foreground-dim)] outline-none"
        />
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`badge cursor-pointer transition-colors ${
            activeCategory === null
              ? "badge-green"
              : "badge-neutral hover:border-[var(--lr-green)] hover:text-[var(--foreground)]"
          }`}
        >
          All ({issues.length})
        </button>
        {categories.map(([cat, count]) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`badge cursor-pointer transition-colors ${
              activeCategory === cat
                ? "badge-green"
                : "badge-neutral hover:border-[var(--lr-green)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat} ({count})
          </button>
        ))}
      </div>

      {/* Active filter status */}
      {hasFilters && (
        <div className="flex items-center gap-3 text-xs text-[var(--foreground-muted)]">
          <span>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
          <button
            onClick={() => {
              setSearchText("");
              setActiveCategory(null);
            }}
            className="text-[var(--lr-green-bright)] hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Issue list */}
      {sortedCategories.map((cat) => {
        const catIssues = grouped.get(cat)!;
        return (
          <section key={cat}>
            <h2 className="text-xs font-semibold mb-3 text-[var(--lr-green-bright)] uppercase tracking-wider">
              {cat}
            </h2>
            <div className="space-y-3">
              {catIssues.map((issue) => (
                <Link
                  key={issue.slug}
                  href={`/known-issues/${issue.slug}`}
                  className="neu-card-sm p-5 block hover:green-glow transition-shadow group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-sm group-hover:text-[var(--lr-green-bright)] transition-colors">
                      {formatSlug(issue.slug)}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <span className={`badge ${SEVERITY_CONFIG[issue.severity].className} text-xs`}>
                        {SEVERITY_CONFIG[issue.severity].label}
                      </span>
                      {issue.latestStatus && (
                        <span className="badge badge-neutral text-xs">{issue.latestStatus}</span>
                      )}
                      <span className="badge badge-green text-xs">
                        {issue.mentionCount} report{issue.mentionCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {issue.symptoms.length > 0 && (
                    <div className="mb-3">
                      <span className="text-xs font-medium text-[var(--foreground-dim)] uppercase tracking-wider">
                        Symptoms
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {issue.symptoms.map((s) => (
                          <span key={s} className="badge badge-neutral text-xs">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {issue.fixes.length > 0 && (
                    <div className="mb-3">
                      <span className="text-xs font-medium text-[var(--foreground-dim)] uppercase tracking-wider">
                        Fixes reported
                      </span>
                      <ul className="mt-1 text-xs text-[var(--foreground-muted)] space-y-0.5">
                        {issue.fixes.map((f) => (
                          <li key={f}>- {f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3 pt-3 border-t border-[var(--border-subtle)]">
                    <span className="text-xs text-[var(--foreground-dim)]">
                      {issue.mentionCount} source video{issue.mentionCount !== 1 ? "s" : ""} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
