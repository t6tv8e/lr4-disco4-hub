import Link from "next/link";
import { getAllCandidateIssues, getAllCandidateGuides, getAllVideos } from "@/lib/content";

const CATEGORY_MAP: Record<string, { label: string; description: string }> = {
  "air-suspension": { label: "Air Suspension", description: "Drops, leaks, compressor, valve blocks" },
  engine: { label: "Engine", description: "Ticking, rattling, oil pressure, cold start" },
  electrical: { label: "Electrical", description: "Battery, alternator, gearbox errors" },
  cooling: { label: "Cooling", description: "Coolant warnings, expansion tank" },
  brakes: { label: "Brakes", description: "Hoses, pedal feel, fluid" },
  body: { label: "Body & Interior", description: "Leaks, trim, armrest, mirrors" },
};

function categorizeIssue(slug: string): string {
  if (slug.includes("air-suspension") || slug.includes("suspension-drop")) return "air-suspension";
  if (slug.includes("engine") || slug.includes("cold-start") || slug.includes("ticking") || slug.includes("whistling")) return "engine";
  if (slug.includes("battery") || slug.includes("alternator") || slug.includes("gearbox")) return "electrical";
  if (slug.includes("coolant")) return "cooling";
  if (slug.includes("brake") || slug.includes("master-brake")) return "brakes";
  return "body";
}

export default function Home() {
  const issues = getAllCandidateIssues();
  const guides = getAllCandidateGuides();
  const videos = getAllVideos();

  // Group issues by category
  const grouped = new Map<string, typeof issues>();
  for (const issue of issues) {
    const cat = categorizeIssue(issue.slug);
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(issue);
  }

  // Collect all unique symptoms for the "common symptoms" section
  const symptomMap = new Map<string, string[]>();
  for (const issue of issues) {
    for (const m of issue.mentions) {
      for (const s of m.mention.symptoms ?? []) {
        const normalized = s.toLowerCase();
        if (!symptomMap.has(normalized)) symptomMap.set(normalized, []);
        if (!symptomMap.get(normalized)!.includes(issue.slug)) {
          symptomMap.get(normalized)!.push(issue.slug);
        }
      }
    }
  }
  const topSymptoms = Array.from(symptomMap.entries())
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 12);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Discovery 4 <span className="text-[var(--lr-green-bright)]">Knowledge Base</span>
        </h1>
        <p className="text-[var(--foreground-muted)] text-lg max-w-xl mx-auto">
          Community-driven fixes, guides, and tips for the Land Rover Discovery 4 / LR4.
          Built from real owner experience.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <Link href="/known-issues" className="neu-btn px-5 py-2.5 text-sm font-medium text-[var(--foreground)]">
            Browse Issues
          </Link>
          <Link href="/guides" className="neu-btn px-5 py-2.5 text-sm font-medium text-[var(--lr-green-bright)]">
            Guides &amp; Tips
          </Link>
        </div>
      </section>

      {/* Common Symptoms - the search entry point */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-[var(--foreground-muted)]">
          What&apos;s your Disco doing?
        </h2>
        <div className="neu-inset p-5">
          <div className="flex flex-wrap gap-2">
            {topSymptoms.map(([symptom]) => (
              <Link
                key={symptom}
                href="/known-issues"
                className="badge badge-neutral hover:border-[var(--lr-green)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
              >
                {symptom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">Known Issues</h2>
          <Link href="/known-issues" className="text-sm text-[var(--lr-green-bright)] hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(CATEGORY_MAP).map(([key, { label, description }]) => {
            const catIssues = grouped.get(key) ?? [];
            const totalMentions = catIssues.reduce((sum, i) => sum + i.mentions.length, 0);
            return (
              <Link key={key} href="/known-issues" className="neu-card-sm p-5 hover:green-glow transition-shadow group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm group-hover:text-[var(--lr-green-bright)] transition-colors">
                    {label}
                  </h3>
                  <span className="badge badge-green">{catIssues.length}</span>
                </div>
                <p className="text-xs text-[var(--foreground-muted)]">{description}</p>
                <p className="text-xs text-[var(--foreground-dim)] mt-2">
                  {totalMentions} report{totalMentions !== 1 ? "s" : ""} across videos
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Guides preview */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">Guides &amp; Tips</h2>
          <Link href="/guides" className="text-sm text-[var(--lr-green-bright)] hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides.slice(0, 6).map((guide) => {
            const bestSummary = guide.mentions.reduce(
              (best, m) => (m.mention.summary.length > best.length ? m.mention.summary : best),
              ""
            );
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="neu-card-sm p-4 hover:green-glow transition-shadow group"
              >
                <h3 className="font-medium text-sm mb-1 group-hover:text-[var(--lr-green-bright)] transition-colors">
                  {guide.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] line-clamp-2">
                  {bestSummary}
                </p>
                <span className="badge badge-neutral mt-2">
                  {guide.mentions.length} video{guide.mentions.length !== 1 ? "s" : ""}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats bar */}
      <section className="neu-inset p-6 flex justify-around text-center">
        <div>
          <div className="text-2xl font-bold text-[var(--lr-green-bright)]">{issues.length}</div>
          <div className="text-xs text-[var(--foreground-muted)]">Known Issues</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[var(--lr-green-bright)]">{guides.length}</div>
          <div className="text-xs text-[var(--foreground-muted)]">Guides &amp; Tips</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[var(--lr-green-bright)]">{videos.length}</div>
          <div className="text-xs text-[var(--foreground-muted)]">Video Sources</div>
        </div>
      </section>
    </div>
  );
}
