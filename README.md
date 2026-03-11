# Discovery 4 Knowledge Base

This repo is structured so raw owner evidence can be turned into public website pages without losing the original source material.

## Structure

- `content/videos/`: normalized YouTube notes emitted by your transcriber and summarizer
- `content/issues/`: canonical issue pages that should rank first in site search
- `content/guides/`: tips, upgrades, mods, and how-to content
- `content/pages/`: overview or editorial pages, such as a known-issues landing page
- `content/sources/`: optional catch-all for non-video source material if needed later
- `content/_templates/`: starter Markdown templates
- `docs/`: schema and workflow notes

## Working pattern

1. Transcribe and summarize a YouTube video into `content/videos/`.
2. Extract `issue_mentions` and `guide_mentions` from that video file.
3. Promote repeated or high-value findings into `content/issues/` or `content/guides/`.
4. Use `content/pages/` for browse pages and site landing pages.
5. Label anecdotal evidence clearly and do not invent missing costs, steps, or part numbers.

## Next useful additions

- A Next.js site layer that turns `content/issues/`, `content/guides/`, `content/videos/`, and `content/pages/` into routes
- A build-time search index that ranks `issues` above `videos`
- More issue pages promoted from video evidence
- Support for non-YouTube sources once the basic pipeline is stable
