# Content Schema

This document defines the Markdown contract for the first version of the Discovery 4 knowledge base.

The model is intentionally narrow:

- `videos` are the ingestion layer
- `issues` are the canonical public answer pages
- `guides` are tips, upgrades, mods, and how-to content
- `pages` are optional browse or editorial pages

## Directory Model

- `content/videos/`
  - One file per YouTube video
  - Each file may contain many `issue_mentions`
- `content/issues/`
  - One file per canonical issue
  - These should be the primary search results
- `content/guides/`
  - One file per tip, upgrade, mod, or how-to
  - Not problem-fixing — value-adding content
- `content/pages/`
  - Landing pages, browse pages, and editorial summaries
- `content/_templates/`
  - Starter Markdown files

## Design Rules

1. A video can mention many issues.
2. An issue can be supported by many videos.
3. `issue_slug` is the relationship key between `videos` and `issues`.
4. If an issue has not been promoted yet, use `candidate_issue` in the video file.
5. Issue pages do not need to manually list supporting videos; the site can derive that by scanning `content/videos/`.
6. Public users should land on issue pages first, not transcript-derived pages.
7. Unknown values should be omitted or left empty, never guessed.
8. A video can mention both issues and guides.
9. Guide pages are standalone — they don't require issue evidence to exist.

## Shared Conventions

- Filenames: kebab-case, matching the last path segment of the slug
- Slugs:
  - issue files: `/issues/<file-name>/`
  - guide files: `/guides/<file-name>/`
  - video files: `/videos/<file-name>/`
  - page files: route-specific
- Dates: `YYYY-MM-DD`
- Timestamps: `MM:SS` or `HH:MM:SS`
- Currency: ISO code such as `AUD`, `GBP`, `USD`, `EUR`
- Arrays:
  - Use arrays for repeatable fields even if there is only one item
  - Keep text normalized and concise so search is clean

## Issue Schema

Issue pages are the canonical pages for search and browsing.

### Required Frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Public page title |
| `slug` | string | Must live under `/issues/` |
| `content_type` | string | Always `issue` |
| `summary` | string | One-paragraph public summary |
| `category` | string | Example: `suspension`, `electrical`, `engine`, `hvac` |
| `symptoms` | string[] | Main user-facing symptom phrases |
| `evidence_level` | string | One of `single-report`, `repeated-reports`, `strong-pattern` |

### Optional Frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `aliases` | string[] | Alternate names and search phrases |
| `warning_messages` | string[] | Dashboard or diagnostic wording |
| `fault_codes` | string[] | OBD or manufacturer codes |
| `tags` | string[] | Free-form labels |
| `severity` | string | Suggested values: `low`, `medium`, `high`, `critical` |
| `affected_vehicles` | object[] | Vehicle applicability |
| `last_reviewed` | string | `YYYY-MM-DD` |
| `draft` | boolean | Hide incomplete issue pages if needed |

### `affected_vehicles` Object

| Field | Type | Notes |
| --- | --- | --- |
| `model` | string | Example: `Discovery 4` |
| `years` | string | Example: `2010-2013` |
| `engine` | string | Example: `3.0 TDV6` |
| `market` | string | Example: `UK`, `Australia`, `global` |
| `trim` | string | Optional |

### Recommended Body Sections

- `## Overview`
- `## Symptoms`
- `## Likely Causes`
- `## Diagnosis`
- `## Fixes`
- `## Costs`
- `## Prevention`
- `## Notes`

### Example

```md
---
title: "Air Suspension Compressor Failure"
slug: /issues/air-suspension-compressor-failure/
content_type: issue
summary: "The vehicle becomes slow to rise or fails to raise because the suspension compressor can no longer maintain pressure."
category: suspension
symptoms:
  - vehicle will not raise
  - suspension is slow to lift
  - suspension inactive warning
aliases:
  - air suspension pump failure
  - suspension compressor failure
warning_messages:
  - Suspension fault
fault_codes: []
tags:
  - air-suspension
severity: high
evidence_level: single-report
affected_vehicles:
  - model: Discovery 4
    years: "2010-2016"
    engine: 3.0 TDV6
    market: global
last_reviewed: "2026-03-11"
---

## Overview

Editorial summary.
```

## Guide Schema

Guide pages cover tips, upgrades, mods, and how-tos — anything that adds value rather than fixing a problem.

### Required Frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Public page title |
| `slug` | string | Must live under `/guides/` |
| `content_type` | string | Always `guide` |
| `summary` | string | One-paragraph public summary |
| `category` | string | Example: `interior`, `audio`, `suspension`, `electrical`, `exterior`, `performance` |
| `difficulty` | string | One of `easy`, `moderate`, `hard` |

### Optional Frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `aliases` | string[] | Alternate names and search phrases |
| `tags` | string[] | Free-form labels |
| `affected_vehicles` | object[] | Vehicle applicability (same shape as issues) |
| `parts` | object[] | Key parts needed (same shape as video parts) |
| `costs` | object[] | Cost range (same shape as video costs) |
| `time_estimate` | string | Rough time needed, e.g. `1-2 hours` |
| `tools_needed` | string[] | Tools required |
| `last_reviewed` | string | `YYYY-MM-DD` |
| `draft` | boolean | Hide incomplete guides if needed |

### Recommended Body Sections

- `## Overview`
- `## What You Need`
- `## Steps`
- `## Options` (if multiple approaches exist)
- `## Costs`
- `## Tips`
- `## Notes`

### Example

```md
---
title: "Add Apple CarPlay via Screen Replacement"
slug: /guides/carplay-screen-replacement/
content_type: guide
summary: "Replace the factory head unit screen with an aftermarket Android Auto / Apple CarPlay unit. More involved than an external module but gives a cleaner result."
category: audio
difficulty: moderate
aliases:
  - carplay retrofit
  - android auto disco 4
tags:
  - carplay
  - head-unit
affected_vehicles:
  - model: Discovery 4
    years: "2010-2016"
    engine: 3.0 TDV6
    market: global
parts:
  - name: Carpuride W901
    note: "Android Auto / Apple CarPlay unit"
time_estimate: "2-4 hours"
tools_needed:
  - trim removal tools
  - Phillips screwdriver
last_reviewed: "2026-03-11"
---

## Overview

Editorial summary.
```

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

## Search Projection

Build the search index from normalized content rather than raw transcript text.

### Primary Search Records

Create one search record per issue page using:

- `title`
- `summary`
- `aliases`
- `symptoms`
- `warning_messages`
- `fault_codes`
- `category`
- `tags`
- `affected_vehicles`

### Secondary Search Records

Create one search record per `issue_mentions` object using:

- `summary`
- `symptoms`
- `warning_messages`
- `fault_codes`
- `diagnosis`
- `fixes`
- `parts.name`
- `notes`
- video title
- video channel
- vehicle metadata

If an `issue_slug` exists, the search result should resolve to the matching issue page. If only `candidate_issue` exists, the search result can resolve to the video page until the issue is promoted.

## Transcriber Output Rules

1. Emit one video Markdown file per YouTube video.
2. Emit one `issue_mentions` object per distinct problem.
3. Use concise editorial summaries, not raw transcript blocks.
4. Keep costs structured as numbers plus currency, not free-form strings.
5. Put uncertainty in `report_status`, `diagnosis`, or `notes`, not in the canonical issue title.
6. If the same issue appears multiple times in the video, merge it into one mention and keep multiple timestamps.
7. If there is not enough confidence to map to an existing issue, use `candidate_issue`.

## Promotion Workflow

1. New evidence lands in `content/videos/`.
2. Repeated or high-value patterns get promoted into `content/issues/`.
3. Once an issue page exists, replace matching `candidate_issue` values with `issue_slug`.
4. Overview pages under `content/pages/` can then aggregate issue pages for browsing.
