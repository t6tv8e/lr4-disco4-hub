import Link from "next/link";
import { getAllVideos } from "@/lib/content";

export const metadata = {
  title: "Channels",
  description: "YouTube channels sourced for the Discovery 4 knowledge base.",
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ChannelsPage() {
  const videos = getAllVideos();

  const channelMap = new Map<
    string,
    { videoCount: number; issueCount: number; guideCount: number; youtubeIds: string[] }
  >();

  for (const video of videos) {
    const ch = video.frontmatter.channel;
    if (!channelMap.has(ch)) {
      channelMap.set(ch, { videoCount: 0, issueCount: 0, guideCount: 0, youtubeIds: [] });
    }
    const entry = channelMap.get(ch)!;
    entry.videoCount++;
    entry.issueCount += video.frontmatter.issue_mentions?.length ?? 0;
    entry.guideCount += video.frontmatter.guide_mentions?.length ?? 0;
    entry.youtubeIds.push(video.frontmatter.youtube_id);
  }

  const channels = Array.from(channelMap.entries())
    .map(([name, stats]) => ({ name, slug: slugify(name), ...stats }))
    .sort((a, b) => b.videoCount - a.videoCount);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Channels</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          {channels.length} YouTube channels contributing {videos.length} videos to the knowledge base.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((ch) => (
          <Link
            key={ch.name}
            href={`/channels/${ch.slug}`}
            className="neu-card-sm p-5 hover:green-glow transition-shadow group block"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-[var(--bg-sunken)]">
                <img
                  src={`https://img.youtube.com/vi/${ch.youtubeIds[0]}/mqdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="font-medium text-sm group-hover:text-[var(--lr-green-bright)] transition-colors leading-tight pt-0.5">
                {ch.name}
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="badge badge-neutral text-xs">
                {ch.videoCount} video{ch.videoCount !== 1 ? "s" : ""}
              </span>
              {ch.issueCount > 0 && (
                <span className="badge badge-neutral text-xs">
                  {ch.issueCount} issue{ch.issueCount !== 1 ? "s" : ""}
                </span>
              )}
              {ch.guideCount > 0 && (
                <span className="badge badge-green text-xs">
                  {ch.guideCount} guide{ch.guideCount !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
