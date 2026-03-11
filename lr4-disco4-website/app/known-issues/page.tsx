import { getAllCandidateIssues } from "@/lib/content";
import IssueList from "./issue-list";

function categorizeIssue(slug: string): string {
  if (slug.includes("air-suspension") || slug.includes("suspension-drop")) return "Suspension";
  if (slug.includes("engine") || slug.includes("cold-start") || slug.includes("ticking") || slug.includes("whistling")) return "Engine";
  if (slug.includes("battery") || slug.includes("alternator") || slug.includes("gearbox")) return "Electrical";
  if (slug.includes("coolant")) return "Cooling";
  if (slug.includes("brake") || slug.includes("master-brake")) return "Brakes";
  if (slug.includes("windscreen") || slug.includes("cowl") || slug.includes("intake-hose") || slug.includes("sunroof")) return "Body & Water Ingress";
  if (slug.includes("mirror") || slug.includes("armrest") || slug.includes("steering-wheel") || slug.includes("rain-sensor")) return "Interior & Electrical";
  return "Other";
}

export const metadata = {
  title: "Known Issues",
  description: "All known issues with the Land Rover Discovery 4 / LR4, extracted from real owner reports.",
};

export default function KnownIssuesPage() {
  const issues = getAllCandidateIssues();

  const issueData = issues.map((issue) => {
    const allSymptoms = new Set<string>();
    const allFixes = new Set<string>();
    let latestStatus = "";
    for (const m of issue.mentions) {
      for (const s of m.mention.symptoms ?? []) allSymptoms.add(s);
      for (const f of m.mention.fixes ?? []) allFixes.add(f);
      latestStatus = m.mention.report_status;
    }
    return {
      slug: issue.slug,
      category: categorizeIssue(issue.slug),
      symptoms: Array.from(allSymptoms),
      fixes: Array.from(allFixes),
      latestStatus,
      mentionCount: issue.mentions.length,
    };
  });

  const totalReports = issues.reduce((s, i) => s + i.mentions.length, 0);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Known Issues</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          {issues.length} issues identified across {totalReports} video reports.
          All data comes from real owner experience — not speculation.
        </p>
      </div>

      <IssueList issues={issueData} />
    </div>
  );
}
