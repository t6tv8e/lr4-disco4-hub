# Disco4 Hub Content Agent

## Mission

Build the most comprehensive Discovery 4 / LR4 knowledge base on the internet. Every video processed should make the hub more useful to D4 owners — whether they're buying, maintaining, repairing, modifying, or overlanding.

## Source Strategy

### How to find videos
Use the EasyTranscriber MCP server at `https://mcp.easytranscriber.com/mcp` with:
- `search_youtube` — targeted queries
- `get_channel_videos` — mine known-good channels
- `get_channel_latest` — check for new uploads (free, no credit cost)
- `resolve_channel` — verify channel details (free)

### Search queries to rotate through
**Maintenance & repairs:**
- "discovery 4 service", "LR4 maintenance tips"
- "discovery 4 timing belt", "LR4 timing chain"
- "discovery 4 oil change", "LR4 oil service"
- "discovery 4 air suspension fix/repair/rebuild"
- "discovery 4 gearbox service", "LR4 transfer case"
- "discovery 4 EGR clean", "LR4 DPF problems"
- "discovery 4 turbo actuator", "LR4 turbo replacement"
- "discovery 4 coolant leak", "LR4 head gasket"
- "discovery 4 electrical problems", "LR4 battery drain"
- "discovery 4 brake service", "LR4 brake hose"

**Buying & ownership:**
- "discovery 4 buying guide", "LR4 what to look for"
- "discovery 4 common problems", "LR4 reliability"
- "discovery 4 ownership cost", "LR4 maintenance cost"
- "discovery 4 long term review", "LR4 100k miles"
- "discovery 4 vs [competitor]" (Prado, GX460, Pajero, etc.)

**Modifications & overlanding:**
- "discovery 4 off road mods", "LR4 overlanding build"
- "discovery 4 lift kit", "LR4 suspension upgrade"
- "discovery 4 camping setup", "LR4 drawer system"
- "discovery 4 snorkel", "LR4 dual battery"
- "discovery 4 roof rack", "LR4 rock sliders"
- "discovery 4 towing", "LR4 caravan"

**Specific systems:**
- "discovery 4 Terrain Response explained"
- "discovery 4 wading", "LR4 water crossing"
- "discovery 4 diff lock", "LR4 centre differential"

### Known-good channels to mine
Channels focused on Land Rover / D4 / overlanding / self-repair:
- LR TIME
- Torr Overland
- DiagnoseDan
- Far Reach Engineering
- powerfulukltd
- PlasmaDave
- Barrett's Reviews
- Cars.co.za (South Africa)
- ReDriven (Australia)
- Haynes Manuals
- G4 outdoor
- Lost Cause Ranch

Look for NEW channels in search results — channels dedicated to Land Rover content are goldmines.

### What to SKIP
- "Not That Kind of a Channel" — already fully sourced (52 videos)
- Videos already in `content/sources/processed-videos.json`
- Non-English videos
- Shorts under 60 seconds
- Music/visual-only content (no spoken information)
- Generic "Land Rover" content not relevant to D4/LR4
- Clickbait with no substance
- Defender, Freelander, Evoque, Velar content (different vehicles)

## Quality Filters

A video is worth processing if it meets ALL of:
1. **D4/LR4 specific** — or directly applicable (shared 3.0 SDV6/TDV6 engine, shared air suspension)
2. **Duration > 60 seconds**
3. **Contains practical information** — fixes, guides, reviews, costs, tips, diagnostics
4. **English language**

Prioritise by:
- **High view counts** (>10K = strong signal of demand)
- **Positive engagement** (comments asking questions = topic people care about)
- **Channel credibility** (Land Rover specialists, mechanics, long-term owners > random reviewers)
- **Unique content** (topics not yet covered in the hub)

## Process

For each batch:

1. **Search** — Run 3-5 search queries via MCP `search_youtube`
2. **Filter** — Check results against `processed-videos.json`, apply quality filters
3. **Transcribe** — Use MCP `get_transcript` for qualifying videos
4. **Summarise** — Use MCP `summarize_video` OR process transcript with AI
5. **Create content file** — Follow template at `content/_templates/video.md` exactly
6. **Update tracking** — Add to `content/sources/processed-videos.json` AND update `video-candidates.md`
7. **Commit & push** — With descriptive commit message listing channels and topics added

## Content File Standards

### Template
Always follow `content/_templates/video.md` structure exactly.

### Slugs
Use descriptive kebab-case: `timing-belt-big-service-sdv6`, `buying-guide-common-problems`, etc.
Check existing slugs in `content/videos/` to avoid duplicates or conflicts.

### Frontmatter
- `content_type`: always `video`
- `transcript_status`: `summarized` (AI processed) or `reviewed` (human verified)
- `confidence`: 
  - `professional-report` — from a mechanic, specialist, or workshop
  - `single-owner-report` — from an individual owner's experience
  - `multi-source-confirmed` — issue confirmed across multiple videos
- `vehicles`: note the market (UK, Australia, South Africa, USA, Europe)
  - In America: "LR4". Rest of world: "Discovery 4"
  - 3.0 SDV6/TDV6 = diesel, 5.0 V8 = petrol/gas

### Issue mentions
- Extract ALL issues discussed: symptoms, diagnosis, fixes, parts, costs
- Use existing `candidate_issue` slugs where they match (check existing files)
- Create new descriptive slugs for new issues
- Include specific part numbers, brands, and costs when mentioned

### Guide mentions
- Extract ALL how-to procedures, tips, and techniques
- Include tools needed, time estimates, difficulty level when available
- Note DIY vs professional-only procedures

## Constraints

- **Credit budget:** Maximum 2,500 credits per day
- **Check credits** before starting with MCP `check_credits` (free call)
- **Do not re-transcribe** videos already in `processed-videos.json`
- **Do not modify** existing content files — only create new ones
- **Commit frequently** — don't lose work
- **Stop if credits drop below 500** — leave buffer for EasyTranscriber use

## Repository Structure

```
~/src/landroverdisco4/
├── content/
│   ├── _templates/video.md          ← content template
│   ├── videos/*.md                  ← video content files
│   ├── issues/*.md                  ← issue pages (future)
│   ├── sources/
│   │   ├── processed-videos.json    ← tracking file (CHECK BEFORE TRANSCRIBING)
│   │   └── video-candidates.md      ← curated list with status
│   └── pages/
├── data/transcripts/*.json          ← raw transcript JSON backups
├── lr4-disco4-website/              ← Next.js website
└── scripts/
```

## MCP Connection Details

- **Server:** `https://mcp.easytranscriber.com/mcp`
- **Auth header:** `Authorization: Bearer et_mMSJJiKcBsmQdvjXypA5MB351s8psAeYAQPVMbO7`
- **Protocol:** MCP over HTTP with SSE responses
- **Free calls:** `check_credits`, `resolve_channel`, `get_channel_latest`
- **1 credit:** `search_youtube`, `get_transcript` (cached = free), `summarize_video`, `search_channel`, `get_channel_videos`, `get_playlist_videos`
- **2 credits:** `get_transcript` when Deepgram fallback needed

## Git Config

```bash
git -c user.name="t6tv8e" -c user.email="100683882+t6tv8e@users.noreply.github.com" commit -m "message"
```
