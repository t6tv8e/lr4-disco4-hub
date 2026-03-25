import type { MetadataRoute } from "next";
import { getAllVideos, getAllCandidateIssues, getAllCandidateGuides } from "@/lib/content";
import { SITE_URL } from "@/lib/constants";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseDate(value?: string): Date | undefined {
  if (!value || value === "") return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const videos = getAllVideos();
  const issues = getAllCandidateIssues();
  const guides = getAllCandidateGuides();

  // Unique channels
  const channelNames = new Set<string>();
  for (const v of videos) channelNames.add(v.frontmatter.channel);

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  entries.push(
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/known-issues`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/videos`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/channels`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/fault-codes`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/pre-purchase-checklist`, changeFrequency: "monthly", priority: 0.9 },
  );

  // Issue pages
  for (const issue of issues) {
    const latestReview = issue.mentions.reduce<Date | undefined>((best, m) => {
      const d = parseDate(m.video.frontmatter.last_reviewed);
      if (!d) return best;
      return !best || d > best ? d : best;
    }, undefined);

    entries.push({
      url: `${SITE_URL}/known-issues/${issue.slug}`,
      lastModified: latestReview,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Guide pages
  for (const guide of guides) {
    entries.push({
      url: `${SITE_URL}/guides/${guide.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Video pages
  for (const video of videos) {
    const slug = video.fileName.replace(".md", "");
    const lastMod = parseDate(video.frontmatter.last_reviewed) ?? parseDate(video.frontmatter.published_at);

    entries.push({
      url: `${SITE_URL}/videos/${slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  // Channel pages
  for (const name of channelNames) {
    entries.push({
      url: `${SITE_URL}/channels/${slugify(name)}`,
      changeFrequency: "monthly",
      priority: 0.4,
    });
  }

  return entries;
}
