import { Suspense } from "react";
import { getAllCandidateIssues } from "@/lib/content";
import { categorizeIssue } from "@/lib/issue-categories";
import { classifySeverity } from "@/lib/severity";
import IssueList from "./issue-list";

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
    const symptomsArr = Array.from(allSymptoms);
    const fixesArr = Array.from(allFixes);
    return {
      slug: issue.slug,
      category: categorizeIssue(issue.slug),
      symptoms: symptomsArr,
      fixes: fixesArr,
      latestStatus,
      mentionCount: issue.mentions.length,
      severity: classifySeverity(issue.slug, symptomsArr, fixesArr),
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

      <Suspense fallback={<div className="text-sm text-[var(--foreground-muted)]">Loading filters...</div>}>
        <IssueList issues={issueData} />
      </Suspense>
    </div>
  );
}
