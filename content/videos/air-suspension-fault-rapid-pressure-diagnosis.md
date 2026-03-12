---
title: "Air Suspension Fault Explained Fixed"
slug: /videos/air-suspension-fault-rapid-pressure-diagnosis/
content_type: video
youtube_id: 4cObPBU7jzk
channel: DiagnoseDan
published_at: ""
summary: "Professional diagnostic walkthrough of a 2013 Discovery air suspension fault where pressure rises too rapidly due to a stuck reservoir solenoid valve, despite a recently replaced compressor."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 4
    years: "2013"
    engine: ""
    market: Europe
tags:
  - air-suspension
  - diagnostics
  - valve-block
  - solenoid
  - fault-codes
  - professional
issue_mentions:
  - candidate_issue: air-suspension-reservoir-solenoid-failure
    report_status: fixed
    summary: "Air suspension fault caused by a stuck-closed reservoir solenoid in the valve block — pressure rises too rapidly in the gallery because compressed air has nowhere to go."
    symptoms:
      - air suspension malfunction message on every startup
      - compressor kicks in briefly then shuts off
      - air suspension raises and lowers but rising is very slow
    fault_codes:
      - "C1A1864 — Pressure increases too rapid when filling the reservoir"
    diagnosis:
      - fault code indicates reservoir filling too rapidly (opposite of weak compressor)
      - gallery pressure starts at ~4 bar and rapidly rises to 16+ bar when compressor runs
      - control unit shuts down compressor at 16 bar as a safety measure
      - reservoir solenoid stuck closed — air cannot flow to reservoir tank
      - front and rear axle valve blocks are normally closed unless actively raising — so air has no escape path
      - previous compressor replacement (only 3 years old, date code 28/6/22) was likely unnecessary
    fixes:
      - replace or repair the reservoir solenoid valve in the main valve block
    parts:
      - name: AMK Air Suspension Compressor
        brand: AMK
        part_number: ""
        note: "OEM supplier; previously replaced unnecessarily — only 3 years old"
      - name: Valve block with reservoir solenoid
        brand: ""
        part_number: ""
        note: "Located under plastic cover behind left front wheel; contains pressure sensor and solenoid"
      - name: Pressure sensor (in valve block gallery)
        brand: ""
        part_number: ""
        note: "Reads gallery pressure; data PID used for diagnosis"
    costs: []
    outcome: "Root cause identified as stuck reservoir solenoid; previous compressor replacement was unnecessary"
    notes:
      - "Key diagnostic insight: 'pressure rises too rapid' means air has nowhere to go — it's a valve problem, not a compressor problem"
      - "The valve block has 4 air connections: compressor input, rear axle output, front axle output, and reservoir output"
      - "Front and rear valve blocks are normally closed — only open when the control unit commands raising"
      - "When reservoir solenoid doesn't open, compressed air is trapped in the small gallery, causing rapid pressure spike"
      - "The compressor was replaced unnecessarily — always diagnose before replacing parts"
      - "DiagnoseDan emphasises reading fault codes and using data PIDs (pressure graph) for proper diagnosis"
guide_mentions:
  - candidate_guide: air-suspension-diagnostic-approach
    summary: "Systematic diagnostic approach for air suspension faults using fault codes, data PIDs, and understanding the pneumatic circuit."
    parts: []
    costs: []
    notes:
      - "Step 1: Confirm customer complaint — start vehicle, observe messages and compressor behaviour"
      - "Step 2: Read fault codes in RLM (Ride Level Control Module)"
      - "Step 3: Monitor pressure data PID while compressor runs — graph the pressure curve"
      - "Step 4: Understand the pneumatic circuit: compressor → valve block gallery → reservoir/front axle/rear axle"
      - "Step 5: Interpret fault codes in context — 'too rapid' filling means blocked path, not over-performing compressor"
      - "Step 6: Check valve block solenoid operation — stuck closed means air trapped in gallery"
      - "Always connect battery charger before extended diagnosis to avoid voltage-related false faults"
---

## Summary

DiagnoseDan investigates a 2013 Discovery with a persistent air suspension fault message that appears on every startup, despite having the compressor replaced just 3 years prior. Using a scan tool, he finds fault code C1A1864 — "pressure increases too rapid when filling the reservoir." By monitoring the pressure data PID, he observes gallery pressure spiking from 4 bar to 16+ bar in seconds, at which point the control unit shuts down the compressor.

He then explains the pneumatic circuit: compressed air enters a small gallery in the valve block where a pressure sensor reads it. From there, it can go three directions — rear axle valve block, front axle valve block, or reservoir — but both axle valve blocks are normally closed (only opening when raising the vehicle), so the air must flow to the reservoir via a solenoid. When that solenoid is stuck closed, the air has nowhere to go, and the pressure in the tiny gallery skyrockets instantly.

The key takeaway: the previous compressor replacement was almost certainly unnecessary. The fault was always in the valve block solenoid. DiagnoseDan emphasises proper diagnosis using fault codes and data before replacing parts.

## Notes

- This is a professional diagnostic channel — the approach shown (fault codes → data PIDs → circuit understanding) is the gold standard for air suspension troubleshooting
- The AMK compressor is the OEM supplier for Discovery air suspension
- Battery charger should always be connected during air suspension diagnosis to prevent voltage drop from causing additional false faults
- DiagnoseDan notes he doesn't work on many Land Rovers — this fault code was a first for him, showing that even generalist technicians can diagnose these systems with proper methodology
