import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllVideos, renderMarkdown } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllVideos().map((v) => ({
    slug: v.fileName.replace(".md", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const videos = getAllVideos();
  const video = videos.find((v) => v.fileName.replace(".md", "") === slug);
  if (!video) return { title: "Video Not Found" };
  return {
    title: video.frontmatter.title,
    description: video.frontmatter.summary,
  };
}

export default async function VideoPage({ params }: Props) {
  const { slug } = await params;
  const videos = getAllVideos();
  const video = videos.find((v) => v.fileName.replace(".md", "") === slug);

  if (!video) notFound();

  const fm = video.frontmatter;
  const htmlContent = await renderMarkdown(video.content);
  const youtubeUrl = `https://www.youtube.com/watch?v=${fm.youtube_id}`;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Video embed */}
      <div className="neu-card overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${fm.youtube_id}`}
            title={fm.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Title & meta */}
      <div>
        <h1 className="text-xl font-bold mb-2">{fm.title}</h1>
        <p className="text-sm text-[var(--foreground-muted)] mb-3">{fm.summary}</p>
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-neutral">{fm.channel}</span>
          <span className="badge badge-neutral">{fm.confidence}</span>
          {fm.vehicles?.map((v, i) => (
            <span key={i} className="badge badge-neutral">
              {v.model} {v.years ? `(${v.years})` : ""} {v.engine ?? ""}
            </span>
          ))}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-green hover:bg-[var(--lr-green)] hover:text-white transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Issue mentions */}
      {fm.issue_mentions && fm.issue_mentions.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold mb-3 text-[var(--lr-green-bright)] uppercase tracking-wider">
            Issues Covered
          </h2>
          <div className="space-y-3">
            {fm.issue_mentions.map((mention, i) => {
              const issueSlug = mention.issue_slug ?? mention.candidate_issue ?? "";
              return (
                <Link key={i} href={`/known-issues/${issueSlug}`} className="neu-card-sm p-4 block hover:green-glow transition-shadow group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-medium text-sm group-hover:text-[var(--lr-green-bright)] transition-colors">
                      {issueSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h3>
                    <span className="badge badge-neutral text-xs shrink-0">{mention.report_status}</span>
                  </div>
                  <p className="text-xs text-[var(--foreground-muted)] mb-2">{mention.summary}</p>

                  {mention.symptoms && mention.symptoms.length > 0 && (
                    <div className="mb-2">
                      <span className="text-xs font-medium text-[var(--foreground-dim)]">Symptoms: </span>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        {mention.symptoms.join(" / ")}
                      </span>
                    </div>
                  )}

                  {mention.fixes && mention.fixes.length > 0 && (
                    <div className="mb-2">
                      <span className="text-xs font-medium text-[var(--foreground-dim)]">Fixes: </span>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        {mention.fixes.join(" / ")}
                      </span>
                    </div>
                  )}

                  {mention.notes && mention.notes.length > 0 && (
                    <div>
                      <span className="text-xs font-medium text-[var(--foreground-dim)]">Notes: </span>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        {mention.notes.join(" / ")}
                      </span>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Guide mentions */}
      {fm.guide_mentions && fm.guide_mentions.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold mb-3 text-[var(--lr-green-bright)] uppercase tracking-wider">
            Guides &amp; Tips
          </h2>
          <div className="space-y-3">
            {fm.guide_mentions.map((mention, i) => {
              const guideSlug = mention.guide_slug ?? mention.candidate_guide ?? "";
              return (
                <Link key={i} href={`/guides/${guideSlug}`} className="neu-card-sm p-4 block hover:green-glow transition-shadow group">
                  <h3 className="font-medium text-sm mb-1 group-hover:text-[var(--lr-green-bright)] transition-colors">
                    {guideSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)]">{mention.summary}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Rendered markdown body */}
      {htmlContent && (
        <section className="neu-card p-6 prose">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </section>
      )}
    </div>
  );
}
