import { Suspense } from "react";
import { getAllCandidateIssues, getAllCandidateGuides, getAllVideos } from "@/lib/content";
import { categorizeIssue } from "@/lib/issue-categories";
import { formatSlug } from "@/lib/format";
import { classifySeverity } from "@/lib/severity";
import SearchClient from "./search-client";

export const metadata = {
  title: "Search",
  description: "Search across all Discovery 4 / LR4 known issues, guides, and videos.",
};

export interface SearchEntry {
  type: "issue" | "guide" | "video";
  slug: string;
  title: string;
  category?: string;
  symptoms?: string[];
  faultCodes?: string[];
  fixes?: string[];
  summary?: string;
  channel?: string;
  mentionCount: number;
  severity?: string;
}

function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // Issues
  for (const issue of getAllCandidateIssues()) {
    const allSymptoms = new Set<string>();
    const allFixes = new Set<string>();
    const allFaultCodes = new Set<string>();
    let bestSummary = "";

    for (const m of issue.mentions) {
      for (const s of m.mention.symptoms ?? []) allSymptoms.add(s);
      for (const f of m.mention.fixes ?? []) allFixes.add(f);
      for (const fc of m.mention.fault_codes ?? []) allFaultCodes.add(fc);
      if (m.mention.summary.length > bestSummary.length) bestSummary = m.mention.summary;
    }

    const symptomsArr = Array.from(allSymptoms);
    const fixesArr = Array.from(allFixes);

    entries.push({
      type: "issue",
      slug: issue.slug,
      title: formatSlug(issue.slug),
      category: categorizeIssue(issue.slug),
      symptoms: symptomsArr,
      faultCodes: Array.from(allFaultCodes),
      fixes: fixesArr,
      summary: bestSummary,
      mentionCount: issue.mentions.length,
      severity: classifySeverity(issue.slug, symptomsArr, fixesArr),
    });
  }

  // Guides
  for (const guide of getAllCandidateGuides()) {
    const bestSummary = guide.mentions.reduce(
      (best, m) => (m.mention.summary.length > best.length ? m.mention.summary : best),
      ""
    );

    entries.push({
      type: "guide",
      slug: guide.slug,
      title: formatSlug(guide.slug),
      summary: bestSummary,
      mentionCount: guide.mentions.length,
    });
  }

  // Videos
  for (const video of getAllVideos()) {
    entries.push({
      type: "video",
      slug: video.fileName.replace(".md", ""),
      title: video.frontmatter.title,
      summary: video.frontmatter.summary,
      channel: video.frontmatter.channel,
      mentionCount: (video.frontmatter.issue_mentions?.length ?? 0) + (video.frontmatter.guide_mentions?.length ?? 0),
    });
  }

  return entries;
}

export default function SearchPage() {
  const index = buildSearchIndex();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Search</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          Search across {index.length} issues, guides, and videos.
        </p>
      </div>

      <Suspense fallback={<div className="text-sm text-[var(--foreground-muted)]">Loading search...</div>}>
        <SearchClient index={index} />
      </Suspense>
    </div>
  );
}
