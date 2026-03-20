import Link from "next/link";
import { getAllVideos } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ name: string }>;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getChannelVideos() {
  const allVideos = getAllVideos();
  const channelMap = new Map<string, typeof allVideos>();
  for (const video of allVideos) {
    const ch = video.frontmatter.channel;
    if (!channelMap.has(ch)) channelMap.set(ch, []);
    channelMap.get(ch)!.push(video);
  }
  return channelMap;
}

export async function generateStaticParams() {
  const channelMap = getChannelVideos();
  return Array.from(channelMap.keys()).map((name) => ({ name: slugify(name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name: slug } = await params;
  const channelMap = getChannelVideos();
  const channelName = Array.from(channelMap.keys()).find((n) => slugify(n) === slug);
  return {
    title: channelName ?? "Channel",
    description: `Videos from ${channelName ?? slug} in the Discovery 4 knowledge base.`,
  };
}

export default async function ChannelPage({ params }: Props) {
  const { name: slug } = await params;
  const channelMap = getChannelVideos();
  const channelName = Array.from(channelMap.keys()).find((n) => slugify(n) === slug);

  if (!channelName) return notFound();

  const videos = channelMap
    .get(channelName)!
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

  const totalIssues = videos.reduce(
    (sum, v) => sum + (v.frontmatter.issue_mentions?.length ?? 0),
    0
  );
  const totalGuides = videos.reduce(
    (sum, v) => sum + (v.frontmatter.guide_mentions?.length ?? 0),
    0
  );

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/channels"
          className="text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors mb-3 inline-block"
        >
          &larr; All channels
        </Link>
        <h1 className="text-2xl font-bold mb-2">{channelName}</h1>
        <div className="flex gap-3 text-sm text-[var(--foreground-muted)]">
          <span>{videos.length} video{videos.length !== 1 ? "s" : ""}</span>
          {totalIssues > 0 && (
            <span>{totalIssues} issue mention{totalIssues !== 1 ? "s" : ""}</span>
          )}
          {totalGuides > 0 && (
            <span>{totalGuides} guide mention{totalGuides !== 1 ? "s" : ""}</span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {videos.map((video) => {
          const fm = video.frontmatter;
          const issueCount = fm.issue_mentions?.length ?? 0;
          const guideCount = fm.guide_mentions?.length ?? 0;

          return (
            <Link
              key={fm.youtube_id}
              href={`/videos/${video.fileName.replace(".md", "")}`}
              className="neu-card-sm p-4 flex items-start gap-4 hover:green-glow transition-shadow group block"
            >
              <div className="shrink-0 w-32 h-20 rounded-lg overflow-hidden bg-[var(--bg-sunken)] relative">
                <img
                  src={`https://img.youtube.com/vi/${fm.youtube_id}/mqdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1 group-hover:text-[var(--lr-green-bright)] transition-colors line-clamp-1">
                  {fm.title}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] line-clamp-2 mb-2">
                  {fm.summary}
                </p>
                <div className="flex gap-2">
                  {issueCount > 0 && (
                    <span className="badge badge-neutral text-xs">
                      {issueCount} issue{issueCount !== 1 ? "s" : ""}
                    </span>
                  )}
                  {guideCount > 0 && (
                    <span className="badge badge-green text-xs">
                      {guideCount} guide{guideCount !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
