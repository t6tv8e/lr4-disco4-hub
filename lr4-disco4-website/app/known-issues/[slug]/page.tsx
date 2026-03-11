import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCandidateIssues } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatSlug(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateStaticParams() {
  return getAllCandidateIssues().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getAllCandidateIssues().find((i) => i.slug === slug);
  if (!issue) return { title: "Issue Not Found" };
  const allSymptoms = new Set<string>();
  for (const m of issue.mentions) {
    for (const s of m.mention.symptoms ?? []) allSymptoms.add(s);
  }
  return {
    title: `${formatSlug(slug)} — Known Issue`,
    description: Array.from(allSymptoms).slice(0, 3).join(", ") || issue.mentions[0]?.mention.summary,
  };
}

export default async function IssueDetailPage({ params }: Props) {
  const { slug } = await params;
  const allIssues = getAllCandidateIssues();
  const issue = allIssues.find((i) => i.slug === slug);

  if (!issue) notFound();

  // Aggregate across all mentions
  const allSymptoms = new Set<string>();
  const allFixes = new Set<string>();
  const allDiagnosis = new Set<string>();
  const allPreventive = new Set<string>();
  const allFaultCodes = new Set<string>();
  const allWarnings = new Set<string>();
  const allNotes = new Set<string>();
  const allParts = new Map<string, { name: string; brand?: string; part_number?: string; note?: string }>();
  const allCosts: string[] = [];
  let latestStatus = "";

  for (const m of issue.mentions) {
    for (const s of m.mention.symptoms ?? []) allSymptoms.add(s);
    for (const f of m.mention.fixes ?? []) allFixes.add(f);
    for (const d of m.mention.diagnosis ?? []) allDiagnosis.add(d);
    for (const p of m.mention.preventive_actions ?? []) allPreventive.add(p);
    for (const fc of m.mention.fault_codes ?? []) allFaultCodes.add(fc);
    for (const w of m.mention.warning_messages ?? []) allWarnings.add(w);
    for (const n of m.mention.notes ?? []) allNotes.add(n);
    for (const p of m.mention.parts ?? []) {
      const part = typeof p === "string" ? { name: p } : p;
      if (!allParts.has(part.name)) allParts.set(part.name, part);
    }
    for (const c of m.mention.costs ?? []) {
      const costStr = typeof c === "string" ? c : `${c.currency} ${c.amount} (${c.type}${c.note ? ` — ${c.note}` : ""})`;
      if (!allCosts.includes(costStr)) allCosts.push(costStr);
    }
    latestStatus = m.mention.report_status;
  }

  // Best summary = longest across mentions
  const bestSummary = issue.mentions.reduce(
    (best, m) => (m.mention.summary.length > best.length ? m.mention.summary : best),
    ""
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/known-issues"
          className="text-xs text-[var(--foreground-dim)] hover:text-[var(--lr-green-bright)] transition-colors"
        >
          ← All Known Issues
        </Link>
        <h1 className="text-xl font-bold mt-3 mb-2">{formatSlug(slug)}</h1>
        <p className="text-sm text-[var(--foreground-muted)]">{bestSummary}</p>
        <div className="flex gap-2 mt-3">
          {latestStatus && <span className="badge badge-neutral">{latestStatus}</span>}
          <span className="badge badge-green">
            {issue.mentions.length} report{issue.mentions.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Symptoms */}
      {allSymptoms.size > 0 && (
        <section className="neu-card p-5">
          <h2 className="text-xs font-semibold text-[var(--lr-green-bright)] uppercase tracking-wider mb-3">
            Symptoms
          </h2>
          <div className="flex flex-wrap gap-2">
            {Array.from(allSymptoms).map((s) => (
              <span key={s} className="badge badge-neutral">{s}</span>
            ))}
          </div>
        </section>
      )}

      {/* Warning messages & fault codes */}
      {(allWarnings.size > 0 || allFaultCodes.size > 0) && (
        <section className="neu-card p-5 space-y-4">
          {allWarnings.size > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-2">
                Warning Messages
              </h2>
              <div className="flex flex-wrap gap-2">
                {Array.from(allWarnings).map((w) => (
                  <span key={w} className="badge badge-high text-xs">{w}</span>
                ))}
              </div>
            </div>
          )}
          {allFaultCodes.size > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-2">
                Fault Codes
              </h2>
              <div className="flex flex-wrap gap-2">
                {Array.from(allFaultCodes).map((fc) => (
                  <span key={fc} className="badge badge-neutral font-mono text-xs">{fc}</span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Diagnosis */}
      {allDiagnosis.size > 0 && (
        <section className="neu-inset p-4">
          <h2 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-2">
            Diagnosis Steps
          </h2>
          <ol className="text-sm text-[var(--foreground-muted)] space-y-1 list-decimal list-inside">
            {Array.from(allDiagnosis).map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Fixes */}
      {allFixes.size > 0 && (
        <section className="neu-card p-5">
          <h2 className="text-xs font-semibold text-[var(--lr-green-bright)] uppercase tracking-wider mb-3">
            Reported Fixes
          </h2>
          <ul className="text-sm text-[var(--foreground-muted)] space-y-1.5">
            {Array.from(allFixes).map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-[var(--lr-green-bright)] shrink-0">→</span>
                {f}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Parts & costs */}
      {(allParts.size > 0 || allCosts.length > 0) && (
        <section className="neu-card p-5 space-y-4">
          {allParts.size > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-[var(--lr-green-bright)] uppercase tracking-wider mb-2">
                Parts
              </h2>
              <ul className="text-sm text-[var(--foreground-muted)] space-y-1">
                {Array.from(allParts.values()).map((p) => (
                  <li key={p.name}>
                    <span className="text-[var(--foreground)]">{p.name}</span>
                    {p.brand && <span className="text-xs ml-2">({p.brand})</span>}
                    {p.part_number && (
                      <span className="text-xs text-[var(--foreground-dim)] ml-2">#{p.part_number}</span>
                    )}
                    {p.note && <span className="text-xs text-[var(--foreground-dim)] ml-2">— {p.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {allCosts.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-[var(--lr-green-bright)] uppercase tracking-wider mb-2">
                Costs
              </h2>
              <ul className="text-sm text-[var(--foreground-muted)] space-y-1">
                {allCosts.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Preventive actions */}
      {allPreventive.size > 0 && (
        <section className="neu-inset p-4">
          <h2 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-2">
            Preventive Actions
          </h2>
          <ul className="text-sm text-[var(--foreground-muted)] space-y-1">
            {Array.from(allPreventive).map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Notes */}
      {allNotes.size > 0 && (
        <section className="neu-inset p-4">
          <h2 className="text-xs font-semibold text-[var(--foreground-dim)] uppercase tracking-wider mb-2">
            Notes
          </h2>
          <ul className="text-sm text-[var(--foreground-muted)] space-y-1">
            {Array.from(allNotes).map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Source videos */}
      <section>
        <h2 className="text-xs font-semibold text-[var(--lr-green-bright)] uppercase tracking-wider mb-3">
          Source Videos
        </h2>
        <div className="space-y-3">
          {issue.mentions.map((m) => {
            const fm = m.video.frontmatter;
            const videoSlug = m.video.fileName.replace(".md", "");
            return (
              <Link
                key={fm.youtube_id}
                href={`/videos/${videoSlug}`}
                className="neu-card-sm p-4 flex gap-4 hover:green-glow transition-shadow group"
              >
                <img
                  src={`https://img.youtube.com/vi/${fm.youtube_id}/mqdefault.jpg`}
                  alt={fm.title}
                  className="w-40 h-[90px] object-cover rounded-lg shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-medium text-sm mb-1 group-hover:text-[var(--lr-green-bright)] transition-colors">
                    {fm.title}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)] line-clamp-2 mb-2">
                    {m.mention.summary}
                  </p>
                  <div className="flex gap-2">
                    <span className="badge badge-neutral text-xs">{fm.channel}</span>
                    <span className="badge badge-neutral text-xs">{m.mention.report_status}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
