import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "..", "content");

export type ContentType = "video" | "source-note";

export interface VideoFrontmatter {
  title: string;
  slug: string;
  content_type: "video";
  youtube_id: string;
  channel: string;
  summary: string;
  transcript_status: string;
  confidence: string;
  published_at?: string;
  duration?: string;
  vehicles?: Vehicle[];
  tags?: string[];
  issue_mentions?: IssueMention[];
  guide_mentions?: GuideMention[];
  last_reviewed?: string;
}

export interface Vehicle {
  model: string;
  years?: string;
  engine?: string;
  market?: string;
  trim?: string;
}

export interface IssueMention {
  issue_slug?: string;
  candidate_issue?: string;
  report_status: string;
  summary: string;
  symptoms?: string[];
  warning_messages?: string[];
  fault_codes?: string[];
  diagnosis?: string[];
  fixes?: string[];
  preventive_actions?: string[];
  parts?: (Part | string)[];
  costs?: (Cost | string)[];
  outcome?: string;
  notes?: string[];
}

export interface GuideMention {
  guide_slug?: string;
  candidate_guide?: string;
  summary: string;
  parts?: (Part | string)[];
  costs?: (Cost | string)[];
  notes?: string[];
}

export interface Part {
  name: string;
  brand?: string;
  part_number?: string;
  note?: string;
}

export interface Cost {
  amount: number;
  currency: string;
  type: string;
  note?: string;
}

export interface ContentItem<T = Record<string, unknown>> {
  frontmatter: T;
  content: string;
  htmlContent: string;
  fileName: string;
}

function getContentDir(subdir: string): string {
  return path.join(contentDir, subdir);
}

function readMarkdownFiles<T>(subdir: string): ContentItem<T>[] {
  const dir = getContentDir(subdir);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((fileName) => {
    const filePath = path.join(dir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      frontmatter: data as T,
      content,
      htmlContent: "", // populated lazily via renderContent
      fileName,
    };
  });
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// --- Public API ---

export function getAllVideos(): ContentItem<VideoFrontmatter>[] {
  return readMarkdownFiles<VideoFrontmatter>("videos");
}

export function getVideo(slug: string): ContentItem<VideoFrontmatter> | null {
  const all = getAllVideos();
  return all.find((v) => v.frontmatter.slug === `/videos/${slug}/`) ?? null;
}

// --- Cross-referencing ---

/** Collect all unique candidate issues across all videos */
export function getAllCandidateIssues(): {
  slug: string;
  mentions: { video: ContentItem<VideoFrontmatter>; mention: IssueMention }[];
}[] {
  const map = new Map<
    string,
    { video: ContentItem<VideoFrontmatter>; mention: IssueMention }[]
  >();

  for (const video of getAllVideos()) {
    for (const mention of video.frontmatter.issue_mentions ?? []) {
      const key = mention.issue_slug ?? mention.candidate_issue;
      if (!key) continue;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push({ video, mention });
    }
  }

  return Array.from(map.entries())
    .map(([slug, mentions]) => ({ slug, mentions }))
    .sort((a, b) => b.mentions.length - a.mentions.length);
}

/** Collect all unique candidate guides across all videos */
export function getAllCandidateGuides(): {
  slug: string;
  mentions: { video: ContentItem<VideoFrontmatter>; mention: GuideMention }[];
}[] {
  const map = new Map<
    string,
    { video: ContentItem<VideoFrontmatter>; mention: GuideMention }[]
  >();

  for (const video of getAllVideos()) {
    for (const mention of video.frontmatter.guide_mentions ?? []) {
      const key = mention.guide_slug ?? mention.candidate_guide;
      if (!key) continue;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push({ video, mention });
    }
  }

  return Array.from(map.entries())
    .map(([slug, mentions]) => ({ slug, mentions }))
    .sort((a, b) => b.mentions.length - a.mentions.length);
}

// --- Fault codes ---

export interface FaultCodeEntry {
  code: string;
  issues: { slug: string; symptoms: string[]; summary: string }[];
}

/** Collect all fault codes across all videos, mapped to their issues */
export function getAllFaultCodes(): FaultCodeEntry[] {
  const map = new Map<string, Map<string, { symptoms: string[]; summary: string }>>();

  for (const video of getAllVideos()) {
    for (const mention of video.frontmatter.issue_mentions ?? []) {
      const issueSlug = mention.issue_slug ?? mention.candidate_issue;
      if (!issueSlug) continue;
      for (const fc of mention.fault_codes ?? []) {
        const normalized = fc.toUpperCase().trim();
        if (!map.has(normalized)) map.set(normalized, new Map());
        const issueMap = map.get(normalized)!;
        if (!issueMap.has(issueSlug)) {
          issueMap.set(issueSlug, {
            symptoms: mention.symptoms ?? [],
            summary: mention.summary,
          });
        }
      }
    }
  }

  return Array.from(map.entries())
    .map(([code, issueMap]) => ({
      code,
      issues: Array.from(issueMap.entries()).map(([slug, data]) => ({ slug, ...data })),
    }))
    .sort((a, b) => a.code.localeCompare(b.code));
}
