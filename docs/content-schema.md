# Content Schema

This document defines the Markdown contract for the Discovery 4 knowledge base.

Everything derives from `content/videos/`. Issues and guides are extracted automatically from `issue_mentions` and `guide_mentions` within video files.

## Directory Model

- `content/videos/` — One file per YouTube video. The single source of truth.
- `content/sources/` — Raw intake notes and transcripts. Not read by the website.
- `content/pages/` — Optional editorial pages.
- `content/_templates/` — Starter Markdown files.

## Design Rules

1. A video can mention many issues and guides.
2. Issues and guides are derived by scanning `issue_mentions` and `guide_mentions` across all video files.
3. `candidate_issue` / `candidate_guide` slugs are the relationship keys.
4. Unknown values should be omitted or left empty, never guessed.

## Shared Conventions

- Filenames: kebab-case, matching the last path segment of the slug
- Slugs: video files use `/videos/<file-name>/`
- Dates: `YYYY-MM-DD`
- Timestamps: `MM:SS` or `HH:MM:SS`
- Currency: ISO code such as `AUD`, `GBP`, `USD`, `EUR`
- Arrays: use arrays for repeatable fields even if there is only one item

## Video Schema

Video pages are ingestion files from your transcriber and summarizer. They can support many issues and reference guides.

### Required Frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Public-facing video title |
| `slug` | string | Must live under `/videos/` |
| `content_type` | string | Always `video` |
| `youtube_id` | string | Preferred stable identifier |
| `channel` | string | Channel name |
| `summary` | string | Short editorial summary of the video |
| `transcript_status` | string | One of `raw`, `summarized`, `reviewed` |
| `confidence` | string | Example: `single-owner-report`, `workshop-guide`, `commentary` |
| `issue_mentions` | object[] | One object per distinct issue mentioned |
| `guide_mentions` | object[] | Optional; one object per tip, mod, or upgrade mentioned |

### Optional Frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `published_at` | string | `YYYY-MM-DD` |
| `youtube_url` | string | Optional if the app can derive it from `youtube_id` |
| `duration` | string | `HH:MM:SS` recommended |
| `vehicles` | object[] | Vehicles discussed in the video |
| `tags` | string[] | Optional labels |
| `last_reviewed` | string | `YYYY-MM-DD` |

### `vehicles` Object

Use the same fields as `affected_vehicles`.

### `issue_mentions` Object

Each object represents one distinct problem, not one sentence from the transcript.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `issue_slug` | string | no | Use when the issue already has a canonical page |
| `candidate_issue` | string | no | Use when no canonical issue exists yet |
| `report_status` | string | yes | One of `reported`, `suspected`, `diagnosed`, `planned-fix`, `fixed`, `preventive-advice` |
| `summary` | string | yes | One-sentence summary of this mention |
| `timestamps` | object[] | no | One or more time ranges |
| `symptoms` | string[] | no | Searchable symptom phrases |
| `warning_messages` | string[] | no | Dashboard wording if present |
| `fault_codes` | string[] | no | Diagnostic codes if mentioned |
| `diagnosis` | string[] | no | Claimed causes or tests used |
| `fixes` | string[] | no | Repair actions taken or planned |
| `preventive_actions` | string[] | no | Maintenance actions intended to reduce risk |
| `parts` | object[] | no | Parts, brands, or part numbers |
| `costs` | object[] | no | Costs or price ranges |
| `outcome` | string | no | Result after the fix |
| `notes` | string[] | no | Extra details worth retaining |

### `timestamps` Object

| Field | Type | Notes |
| --- | --- | --- |
| `start` | string | `MM:SS` or `HH:MM:SS` |
| `end` | string | Optional |
| `label` | string | Optional note such as `diagnosis`, `repair`, `cost` |

### `parts` Object

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Part or assembly name |
| `brand` | string | Optional |
| `part_number` | string | Optional |
| `note` | string | Optional |

### `costs` Object

| Field | Type | Notes |
| --- | --- | --- |
| `amount` | number | Numeric value only |
| `currency` | string | ISO code |
| `type` | string | Example: `part`, `labour`, `total`, `estimate` |
| `note` | string | Optional context |

### Relationship Rule

Exactly one of `issue_slug` or `candidate_issue` should be present for each `issue_mentions` entry.

### `guide_mentions` Object

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `guide_slug` | string | no | Use when the guide already has a page |
| `candidate_guide` | string | no | Use when no guide page exists yet |
| `summary` | string | yes | One-sentence summary of the tip or mod |
| `timestamps` | object[] | no | Time ranges in the video |
| `parts` | object[] | no | Parts mentioned |
| `costs` | object[] | no | Costs mentioned |
| `notes` | string[] | no | Extra details |

Exactly one of `guide_slug` or `candidate_guide` should be present for each entry.

### Example

```md
---
title: "Living With a Discovery 4 After 4.5 Years"
slug: /videos/living-with-a-discovery-4-after-4-5-years/
content_type: video
youtube_id: abc123
channel: Example Channel
published_at: "2025-01-10"
summary: "Single-owner report covering repairs, pending faults, maintenance habits, and ownership costs on a 2010 Discovery 4 3.0 TDV6."
transcript_status: reviewed
confidence: single-owner-report
vehicles:
  - model: Discovery 4
    years: "2010"
    engine: 3.0 TDV6
    market: Australia
issue_mentions:
  - issue_slug: air-suspension-compressor-failure
    report_status: fixed
    summary: "The vehicle would not raise because the suspension compressor could not generate enough pressure."
    timestamps:
      - start: "03:12"
        end: "04:05"
        label: diagnosis
    symptoms:
      - vehicle would not raise
    diagnosis:
      - low pressure confirmed with GAP tool
    fixes:
      - replaced compressor
    costs: []

  - candidate_issue: front-air-shock-leak
    report_status: fixed
    summary: "A front air spring leak was only visible at full suspension height."
    timestamps:
      - start: "04:10"
        end: "05:08"
    symptoms:
      - front suspension leak only at full height
    fixes:
      - replaced both front air shocks
    notes:
      - airline reconnection was awkward due to limited spare hose length
---

## Summary

Editorial summary of the full video.
```

## Transcriber Output Rules

1. Emit one video Markdown file per YouTube video.
2. Emit one `issue_mentions` object per distinct problem.
3. Use concise editorial summaries, not raw transcript blocks.
4. Keep costs structured as numbers plus currency, not free-form strings.
5. Put uncertainty in `report_status`, `diagnosis`, or `notes`, not in the canonical issue title.
6. If the same issue appears multiple times in the video, merge it into one mention and keep multiple timestamps.
7. If there is not enough confidence to map to an existing issue, use `candidate_issue`.
