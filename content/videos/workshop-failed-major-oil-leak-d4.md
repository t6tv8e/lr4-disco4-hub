---
title: "Land Rover Workshop Failed - Major Oil Leak - Discovery 4 / LR4"
slug: /videos/workshop-failed-major-oil-leak-d4/
content_type: video
youtube_id: T4k9-_PzFN8
channel: LR TIME
published_at: ""
summary: "Documents diagnosing and attempting to fix a persistent transmission oil leak on a 2015 D4. Land Rover dealer previously charged 3,000 euros and failed to fix it. Teardown reveals incorrectly installed oil pan seal, but the leak persists after repair -- the actual root cause is found in a follow-up video."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 4
    years: "2015"
    engine: 3.0 SDV6
    market: Europe
tags:
  - oil-leak
  - transfer-case-removal
  - zf-8hp
  - dealer-quality
  - transmission
  - troubleshooting
last_reviewed: "2026-03-24"
issue_mentions:
  - candidate_issue: transmission-oil-pan-seal-incorrectly-installed
    report_status: reported
    summary: "Oil pan seal lip was rolled and protruding past the edge of the pan after Land Rover dealer replaced the oil pan. The seal was never properly seated during the 3,000 euro repair."
    timestamps: []
    symptoms:
      - persistent oil dripping from transmission area
      - oil spots in driveway
      - oil visible between gearbox and transfer case
    warning_messages: []
    fault_codes: []
    diagnosis:
      - transfer case removed and found NOT to be leaking
      - oil pan seal lip visibly displaced and protruding past pan edge
      - oil pan date stamp August 2021 confirms dealer replacement
      - seal appears too long for the pan (does not seat flush)
    fixes:
      - replaced oil pan with known-good donor pan
      - drained and refilled ZF 8HP transmission fluid (Lifeguard ZF8)
      - reset ZF 8HP adaptation values
    preventive_actions:
      - verify oil pan seal is fully seated during installation
    parts:
      - name: ZF 8HP transmission oil pan
        brand: ""
        part_number: ""
        note: "Used donor pan from previous vehicle"
      - name: Lifeguard ZF8 transmission fluid
        brand: ZF
        part_number: ""
        note: "Dealer charges ~60 euros per litre"
    costs:
      - amount: 3000
        currency: EUR
        type: repair
        note: "Original Land Rover dealer charge that failed to fix the leak"
      - amount: 900
        currency: EUR
        type: repair
        note: "Unnecessary GKN driveshaft replacement by dealer (misdiagnosed transmission clunk)"
    outcome: "Oil pan replaced but leak persisted the next morning; actual root cause found and fixed weeks later in a follow-up video"
    notes:
      - "The actual root cause was neither the oil pan nor the sealing rings, and was not entirely Land Rover's fault"
      - "Required removing the transfer case a second time to find the real culprit"
  - candidate_issue: dealer-misdiagnosis-driveshaft
    report_status: reported
    summary: "Land Rover dealer misdiagnosed transmission clunking as a driveshaft problem, installing a new GKN driveshaft for 900 euros. The actual fix was resetting ZF 8HP adaptation values."
    timestamps: []
    symptoms:
      - transmission clunking
    warning_messages: []
    fault_codes: []
    diagnosis:
      - dealer incorrectly blamed driveshaft
    fixes:
      - new GKN original driveshaft installed unnecessarily
      - actual fix was free adaptation values reset
    preventive_actions: []
    parts:
      - name: Driveshaft
        brand: GKN
        part_number: ""
        note: "Original equipment; 900 euros installed by dealer"
    costs:
      - amount: 900
        currency: EUR
        type: repair
        note: "Unnecessary replacement"
    outcome: "Driveshaft was not the cause"
    notes: []
guide_mentions:
  - title: "Transfer case removal on Discovery 4"
    summary: "Drop fuel tank slightly with hydraulic jack to access hidden bolt. Sequence: remove heat shields, disconnect O2 sensor, mark and remove rear driveshaft, remove DPF, remove cross member (4 bolts, half-inch wrench needed), remove transfer case mount, disconnect front driveshaft, lower transfer case on transmission jack. Use custom pivoting tool for hard-to-reach upper bolts (45 Nm)."
  - title: "ZF 8HP transmission fluid refill procedure"
    summary: "Fill with Lifeguard ZF8 with engine off until overflow from filler hole. Start engine, wait for 30+ degrees oil temp. Hold 2000 RPM in park for 30 seconds. Cycle through R, N, D, D1, D2 (10 seconds each). Check level -- should have light steady dribble from filler hole. Reset adaptation values after fill."
  - title: "Transfer case reinstallation"
    summary: "Apply Molycote grease to splines on both sides with visible excess. Flush all crevices with brake cleaner before reassembly to prevent false fault diagnoses from residual oil. Torque transfer case mount bolts to 45 Nm. Transmission crossmember bolts to 90 Nm. DPF bolts to 175 Nm."
---

## Summary

LR TIME tackles a persistent transmission oil leak on their 2015 Discovery 4 that the Land Rover dealer had previously charged 3,000 euros to fix (including underbody cleaning) without actually resolving it. The dealer had also misdiagnosed a transmission clunk as a driveshaft problem, installing a new GKN driveshaft for 900 euros when the real fix was a free ZF 8HP adaptation values reset. The video documents the full transfer case removal procedure, revealing that the transfer case itself was not the leak source. Instead, the oil pan seal installed by the dealer was rolled and protruding past the pan edge -- clearly incorrectly installed. They replaced the pan and refilled the ZF 8HP transmission following the proper procedure (fill, start, cycle gears at 30+ degrees, check level). However, the leak returned the very next morning, proving the oil pan seal was not the only cause. The actual root cause was found and fixed weeks later (documented in a follow-up video) -- hints suggest it was not the pan, not the sealing rings, and was not entirely the dealer's fault. The video serves as both a cautionary tale about dealer service quality and a detailed reference for D4 transfer case removal and ZF 8HP fluid service.

## Notes

- The custom pivoting tool for reaching hidden upper bolts reduced a potentially hours-long bolt removal task to under 20 minutes.
- Eight-minute neutral timer: when putting the D4 in neutral with engine off (e.g. to work under the car), it automatically returns to park after 8 minutes.
- The DPF removal is part of the access path and requires persuasion on corroded bolts.
- Cleaning residual oil from the transfer case area with brake cleaner after reassembly is important to prevent false diagnosis of continued leaking.
- Molycote grease should be applied to transfer case splines on both sides with visible excess.
- ZF 8HP fluid: dealer charges approximately 60 euros per litre. Brand new oil had to be drained because the pan had to come off.
