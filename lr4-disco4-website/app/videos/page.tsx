import Link from "next/link";
import { getAllVideos } from "@/lib/content";

export const metadata = {
  title: "Videos",
  description: "All video sources for the Discovery 4 knowledge base.",
};

export default function VideosPage() {
  const videos = getAllVideos().sort((a, b) =>
    a.frontmatter.title.localeCompare(b.frontmatter.title)
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Video Sources</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          {videos.length} videos from the Land Rover Discovery 4 community. Each one has been summarized and cross-referenced.
        </p>
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
              {/* YouTube thumbnail */}
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
                  <span className="badge badge-neutral text-xs">{fm.channel}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
