import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "..", "content");

export type ContentType = "video" | "issue" | "guide" | "page" | "source-note";

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

export interface IssueFrontmatter {
  title: string;
  slug: string;
  content_type: "issue";
  summary: string;
  category: string;
  symptoms: string[];
  evidence_level: string;
  aliases?: string[];
  warning_messages?: string[];
  fault_codes?: string[];
  tags?: string[];
  severity?: string;
  affected_vehicles?: Vehicle[];
  last_reviewed?: string;
  draft?: boolean;
}

export interface GuideFrontmatter {
  title: string;
  slug: string;
  content_type: "guide";
  summary: string;
  category: string;
  difficulty: string;
  aliases?: string[];
  tags?: string[];
  affected_vehicles?: Vehicle[];
  parts?: Part[];
  costs?: Cost[];
  time_estimate?: string;
  tools_needed?: string[];
  last_reviewed?: string;
  draft?: boolean;
}

export interface PageFrontmatter {
  title: string;
  slug: string;
  content_type: "page";
  summary: string;
  [key: string]: unknown;
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

export function getAllIssues(): ContentItem<IssueFrontmatter>[] {
  return readMarkdownFiles<IssueFrontmatter>("issues").filter(
    (i) => !i.frontmatter.draft
  );
}

export function getIssue(slug: string): ContentItem<IssueFrontmatter> | null {
  const all = readMarkdownFiles<IssueFrontmatter>("issues");
  return all.find((i) => i.frontmatter.slug === `/issues/${slug}/`) ?? null;
}

export function getAllGuides(): ContentItem<GuideFrontmatter>[] {
  return readMarkdownFiles<GuideFrontmatter>("guides").filter(
    (g) => !g.frontmatter.draft
  );
}

export function getGuide(slug: string): ContentItem<GuideFrontmatter> | null {
  const all = readMarkdownFiles<GuideFrontmatter>("guides");
  return all.find((g) => g.frontmatter.slug === `/guides/${slug}/`) ?? null;
}

export function getAllPages(): ContentItem<PageFrontmatter>[] {
  return readMarkdownFiles<PageFrontmatter>("pages");
}

export function getPage(slug: string): ContentItem<PageFrontmatter> | null {
  const all = getAllPages();
  return (
    all.find((p) => p.frontmatter.slug === `/${slug}/` || p.frontmatter.slug === slug) ??
    null
  );
}

// --- Cross-referencing ---

/** Find all videos that mention a given candidate_issue or issue_slug */
export function getVideosForIssue(issueSlug: string): ContentItem<VideoFrontmatter>[] {
  return getAllVideos().filter((v) =>
    v.frontmatter.issue_mentions?.some(
      (m) => m.issue_slug === issueSlug || m.candidate_issue === issueSlug
    )
  );
}

/** Find all videos that mention a given candidate_guide or guide_slug */
export function getVideosForGuide(guideSlug: string): ContentItem<VideoFrontmatter>[] {
  return getAllVideos().filter((v) =>
    v.frontmatter.guide_mentions?.some(
      (m) => m.guide_slug === guideSlug || m.candidate_guide === guideSlug
    )
  );
}

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
