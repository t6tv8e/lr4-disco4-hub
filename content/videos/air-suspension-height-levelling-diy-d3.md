---
title: "Land Rover Discovery 3 - How to level the suspension height"
slug: /videos/air-suspension-height-levelling-diy-d3/
content_type: video
youtube_id: f8SB7aa8jAM
channel: LR TIME
published_at: ""
summary: "A zero-cost, no-scan-tool method to correct air suspension ride height imbalance using modified connecting rods and the F26 fuse trick."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: ""
    engine: 2.7 TDV6
    market: Europe
tags:
  - air-suspension
  - ride-height
  - height-sensor
  - fuse-trick
  - diy
issue_mentions:
  - candidate_issue: air-suspension-side-to-side-height-imbalance
    report_status: confirmed-fix
    summary: "Rear suspension measured 46.8 cm on one side and 47.8 cm on the other -- a 1 cm difference visible when following the vehicle."
    symptoms:
      - visible lean to one side when viewed from behind
      - 1 cm difference in wheel arch height side to side
    diagnosis:
      - measure wheel arch height on both sides at the rear
    fixes:
      - replace one connecting rod per axle with a custom adjustable version made from M5 threaded rod and aluminium pieces
      - adjust rod length to mechanically offset the height sensor reading
      - cycle suspension and re-measure, typically 2-3 attempts to dial in
    parts:
      - M5 threaded rod
      - custom-cut aluminium pieces
      - Loctite
    costs:
      - essentially zero -- built from workshop scraps
    notes:
      - "The system has 3-5 mm repeatability tolerance, so averaging multiple measurements is recommended"
      - "Adjusting on uneven ground reduces consistency"
  - candidate_issue: air-suspension-leak-diagnosis-using-fuse
    report_status: preventive-advice
    summary: "Pulling the F26 fuse at night after raising to full height, then checking in the morning, isolates which side or axle has an air leak."
    symptoms:
      - car sags on one side overnight
    diagnosis:
      - pull F26 fuse after raising suspension to full height
      - if sagging on one side in the morning, confirms air leak on that strut or axle
    fixes: []
    parts: []
    costs: []
    notes:
      - "Gives a mechanic a precise starting point without guesswork"
guide_mentions:
  - candidate_guide: air-suspension-height-levelling-modified-connecting-rod
    summary: "Custom adjustable connecting rod replaces the standard height sensor rod to allow manual ride height correction without a scan tool."
    steps:
      - measure wheel arch height on both sides
      - fabricate adjustable rod using M5 threaded rod inserted into the original rod with aluminium end pieces
      - secure with crimping plus Loctite
      - install modified rod on the side that needs correction
      - pull F26 fuse to prevent auto-levelling during work
      - cycle suspension and re-measure
      - repeat adjustment 2-3 times until level
    torque_specs: []
  - candidate_guide: f26-fuse-for-suspension-disable
    summary: "Removing fuse F26 (3rd yellow fuse from the bottom in the underhood fuse box) disables automatic height control. Reinserting restores it immediately with no key reset or scan tool needed."
    steps:
      - open underhood fuse box
      - locate F26 -- 3rd yellow fuse from the bottom
      - pull fuse to freeze suspension at current height
      - reinsert to restore normal operation
    torque_specs: []
---

## Summary

This video demonstrates a zero-cost method to correct air suspension ride height imbalance on a Discovery 3 without any scan tool or diagnostic equipment. The rear suspension showed a 1 cm difference side to side (46.8 cm versus 47.8 cm), which is visible from behind the vehicle. The fix involves replacing the height sensor connecting rod on one axle with a custom-made adjustable version built from an M5 threaded rod and aluminium pieces, secured with crimping and Loctite. By adjusting the rod length, the height sensor is mechanically offset to a new target height, forcing the system to re-level. The process typically takes 2-3 attempts to dial in, with a system repeatability tolerance of 3-5 mm.

The video also covers the F26 fuse trick: pulling this fuse (3rd yellow fuse from the bottom in the underhood fuse box) disables automatic height control, making it safe to work with hands in the wheel well. Reinserting the fuse immediately restores height control with no key reset or scan tool needed. As a diagnostic bonus, pulling the fuse overnight after raising the car to full height reveals which side has an air leak if the car sags by morning.

A compact air compressor installed in the empty engine bay compartment (left-hand-drive only) is also shown, useful for airing up tyres by about 1 bar without occupying cargo space.

## Notes

- Front-to-back imbalance can also be corrected with this method, though 1 cm front-to-back is considered less critical than left-to-right
- The modified connecting rod costs essentially nothing -- built from workshop scraps
- Adjusting on uneven ground reduces measurement consistency
- The onboard air compressor compartment is only available on left-hand-drive models (right-hand-drive uses that space for the battery)
- Compressor is suitable for topping up about 1 bar but would overheat if filling four flat tyres from scratch
