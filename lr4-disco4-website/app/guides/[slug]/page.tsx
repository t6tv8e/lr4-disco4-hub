import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCandidateGuides } from "@/lib/content";
import { formatSlug } from "@/lib/format";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCandidateGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAllCandidateGuides().find((g) => g.slug === slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: `${formatSlug(slug)} — Guide`,
    description: guide.mentions[0]?.mention.summary,
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const allGuides = getAllCandidateGuides();
  const guide = allGuides.find((g) => g.slug === slug);

  if (!guide) notFound();

  // Aggregate data across all mentions
  const allParts = new Map<string, { name: string; brand?: string; part_number?: string; note?: string }>();
  const allCosts: string[] = [];
  const allNotes = new Set<string>();

  for (const m of guide.mentions) {
    for (const p of m.mention.parts ?? []) {
      const part = typeof p === "string" ? { name: p } : p;
      if (!allParts.has(part.name)) allParts.set(part.name, part);
    }
    for (const c of m.mention.costs ?? []) {
      const costStr = typeof c === "string" ? c : `${c.currency} ${c.amount} (${c.type}${c.note ? ` — ${c.note}` : ""})`;
      if (!allCosts.includes(costStr)) allCosts.push(costStr);
    }
    for (const n of m.mention.notes ?? []) allNotes.add(n);
  }

  // Use the longest summary as the main description
  const bestSummary = guide.mentions.reduce(
    (best, m) => (m.mention.summary.length > best.length ? m.mention.summary : best),
    ""
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/guides"
          className="text-xs text-[var(--foreground-dim)] hover:text-[var(--lr-green-bright)] transition-colors"
        >
          ← All Guides
        </Link>
        <h1 className="text-xl font-bold mt-3 mb-2">{formatSlug(slug)}</h1>
        <p className="text-sm text-[var(--foreground-muted)]">{bestSummary}</p>
        <div className="flex gap-2 mt-3">
          <span className="badge badge-green">
            {guide.mentions.length} video{guide.mentions.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

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
          {guide.mentions.map((m) => {
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
                  <span className="badge badge-neutral text-xs">{fm.channel}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
