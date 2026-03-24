---
title: "No more 5W-30 ever again - Land Rover Discovery 4 - Transfer Case and Diff oil change"
slug: /videos/transfer-case-diff-oil-change-5w40-conversion/
content_type: video
youtube_id: Q4NeJrbor4s
channel: LR TIME
published_at: ""
summary: "Three fluid changes on a D4: engine oil conversion from 5W-30 to 5W-40 C3, transfer case fluid change with Ravenol ATF TF0753, and rear differential oil change with 75W-140. Includes detailed specs, torque values, and the rationale for switching to 5W-40."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
tags:
  - oil-change
  - transfer-case
  - differential
  - 5w40
  - maintenance
  - fluid-specs
last_reviewed: "2026-03-24"
issue_mentions:
  - candidate_issue: 5w30-too-thin-for-sdv6
    report_status: reported
    summary: "5W-30 engine oil drains with water-like consistency; channel argues it provides insufficient protection for the 3.0 SDV6/TDV6 engine and converts to 5W-40 C3 instead."
    timestamps: []
    symptoms:
      - 5W-30 oil extremely thin at operating temperature
    warning_messages: []
    fault_codes: []
    diagnosis:
      - South African Castrol oil finder lists 5W-40 A3/B3 for Discovery 3 with same engine family
      - 5W-30 C1/C2 oils have reduced HTHS values that may not protect adequately
    fixes:
      - convert to 5W-40 C3 (low SAPS, suitable for DPF vehicles)
    preventive_actions:
      - use C3 spec oil on DPF-equipped vehicles (not C1 or C2)
    parts:
      - name: Engine oil
        brand: Castrol Magnatec
        part_number: ""
        note: "5W-40 C3 low SAPS; 5 litres required"
    costs:
      - amount: 48
        currency: EUR
        type: part
        note: "5W-40 C3 oil and filter"
    outcome: "Converted to 5W-40 C3 successfully"
    notes:
      - "This violates the official LR4 specification which lists only 5W-30; the D3 with same engine family is listed with 5W-40 in South Africa"
  - candidate_issue: oil-filter-smaller-on-d4
    report_status: reported
    summary: "The Discovery 4 oil filter is noticeably smaller than the Discovery 3 filter despite the D4 having a more powerful engine. LR TIME considers this a design regression."
    timestamps: []
    symptoms: []
    warning_messages: []
    fault_codes: []
    diagnosis:
      - D4 filter visually smaller than D3 filter
    fixes: []
    preventive_actions: []
    parts: []
    costs: []
    outcome: "Observation only; no fix available"
    notes:
      - "D4 has an improved automatic drain valve in the filter housing vs D3's manual orientation closure plug"
  - candidate_issue: low-oil-pressure-aftermarket-pump
    report_status: reported
    summary: "Discovery 3 with aftermarket Fire oil pump showing severely low oil pressure even after switching to 5W-40. Suspects the aftermarket pump is defective; planning engine-out repair to install OEM pump."
    timestamps: []
    symptoms:
      - low oil pressure readings
      - slow oil pressure build on startup
    warning_messages: []
    fault_codes: []
    diagnosis:
      - oil filter housing check valve confirmed working (oil does not drain away)
      - problem appeared immediately after aftermarket oil pump installation
    fixes:
      - planned OEM oil pump replacement (350 euros, engine-out repair)
    preventive_actions:
      - use OEM oil pumps, not aftermarket
    parts:
      - name: Oil pump (OEM)
        brand: Land Rover
        part_number: ""
        note: "350 euros; aftermarket Fire pump suspected defective"
    costs:
      - amount: 350
        currency: EUR
        type: part
        note: "OEM oil pump"
    outcome: "Repair planned for autumn; 5W-40 partially masks the issue but does not cure it"
    notes:
      - "This issue is on the Discovery 3, not the D4, but discussed in context of both vehicles"
guide_mentions:
  - title: "Engine oil change on Discovery 4 (5W-40 C3 conversion)"
    summary: "Drain via sump plug (not suction through dipstick tube). D4 uses Torx Plus bolts. Oil filter housing has automatic drain valve (loosen filter 6 turns, wait 2 minutes for oil to drain from housing). Install filter into cap first, then screw assembly into housing. Fill 5 litres. Check level via service menu (allow time for oil to settle). Reset service interval via IPC service test menu."
  - title: "Transfer case fluid change on Discovery 4"
    summary: "Specification: Shell TF0753. Used Ravenol ATF TF0753. Fill to filler plug level. Drain plug torque: 28 Nm. Capacity approximately 1.5 litres."
  - title: "Rear differential fluid change on Discovery 4"
    summary: "Used Liqui Moly 75W-140 hypoid gear oil (75W-90 also acceptable). Fixed quantity: 1.25 litres. Do NOT fill to filler plug level -- the plug is only for filling access. Drain plug has built-in magnet for metal particle capture. Drain plug torque: 29 Nm."
---

## Summary

LR TIME performs three fluid changes on the Discovery 4: engine oil (converting from 5W-30 to 5W-40 C3), transfer case fluid, and rear differential oil. The engine oil conversion is the most discussed topic -- the rationale being that 5W-30 drains like water, the South African Castrol oil finder already specifies 5W-40 for the D3 with the same engine family, and C3 low-SAPS spec is essential for DPF-equipped vehicles (avoiding C1/C2 which have reduced HTHS values). The transfer case uses Ravenol ATF TF0753 filled to the filler plug level, while the rear differential takes exactly 1.25 litres of 75W-140 hypoid gear oil as a fixed quantity (critically, NOT filled to the plug level). The video also notes that D4 uses Torx Plus bolts instead of standard 13mm, has a smaller oil filter than the D3 despite more power, and features adaptive engine mounts with hoses that change stiffness based on driving conditions. A side discussion covers their D3's low oil pressure after an aftermarket oil pump installation, with plans for an OEM pump replacement.

## Notes

- D4 oil filter housing has an improved automatic drain valve mechanism compared to D3 (no need to orient a closure plug).
- Transfer case fluid: most oil manufacturers do not list a specific product for the D4 transfer case; Ravenol is one of the few that does.
- Rear differential drain plug has a built-in magnet -- found minimal metallic debris (almost nothing), indicating healthy differential.
- Total oil cost for all three changes: approximately 70 euros (vs likely 40+ euros per litre at a Land Rover dealer).
- D4 has adaptive engine mounts connected via hoses to valves that adjust stiffness based on RPM and driving conditions -- an additional failure point compared to conventional mounts.
- Service interval reset path: service test > IPC instrument pack > service interval reset.
- Oil level display path: service menu > oil level display (allow settling time for accurate reading on level ground).
