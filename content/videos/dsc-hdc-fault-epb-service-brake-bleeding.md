---
title: "Land Rover Discovery DSC and HDC Fault Fixed!!! EPB Service and brake bleeding"
slug: /videos/dsc-hdc-fault-epb-service-brake-bleeding/
content_type: video
youtube_id: Y6yEq9oETh8
channel: LR TIME
published_at: ""
summary: "Comprehensive maintenance session covering ABS/DSC module replacement with a 25 EUR used unit, brake bleeding with GAPT2D tool (including its documentation pitfalls), electric parking brake adjustment procedure, tire swap, and a 776 km validation road trip."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
  - model: Discovery 4
    years: "2010-2016"
    engine: 3.0 SDV6
    market: Europe
tags:
  - dsc
  - hdc
  - abs
  - brake-bleeding
  - electric-parking-brake
  - epb
  - gapt2d
  - tire-swap
  - alignment
  - diy
  - diagnosis
issue_mentions:
  - candidate_issue: dsc-abs-module-failure
    report_status: confirmed
    summary: "DSC fault causing hill descent control failure. Fixed by swapping in a used ABS/DSC module sourced on eBay for 25 EUR with nearly matching manufacturing date. Module is plug-and-play; controls ABS, hill descent, and electric parking brake functions. GAPT tool immediately detected the new module with no ABS fault."
    symptoms:
      - DSC fault warning
      - hill descent control not functioning
    diagnosis:
      - GAPT diagnostic tool to read fault codes
      - actuate individual ABS valves to confirm operational (audible click test)
    fixes:
      - replace ABS/DSC module with used unit (plug-and-play swap)
      - disconnect all brake lines, remove one bolt, pull module from mounting shoe
      - bleed brakes after module swap
    parts:
      - name: Used ABS/DSC module
        note: "Sourced on eBay for 25 EUR; match manufacturing date as closely as possible"
    costs:
      - item: Used ABS/DSC module (eBay)
        amount: "25"
        currency: EUR
    outcome: "Hill descent control restored in both forward and reverse. DSC faults are unpredictable on Discovery 3 — long-term durability unconfirmed."
  - candidate_issue: gapt2d-brake-bleeding-procedure-unclear
    report_status: confirmed
    summary: "GAPT2D brake bleeding tool instructions use the ambiguous phrase 'pump brake pedal' — pumping (repetitive action) versus holding the pedal down produce completely different results, causing repeated failed cycles. Widespread community complaints exist about this exact issue with no decent official FAQ."
    symptoms:
      - repeated failed bleeding cycles with GAPT2D
      - frustration with ambiguous instructions
    diagnosis:
      - internet research confirms widespread complaints about unclear GAPT2D bleeding procedure
    fixes:
      - use pressure bleeding as workaround (pressurized fluid container at 15 PSI)
      - bleed all four corners individually
      - suction excess fluid if pressure method overfills reservoir
    notes:
      - "The ABS motor did cycle during the GAPT2D procedure, likely expelling some air from the hydraulic modulator"
      - "Pressure bleeding eliminates need for second person and prevents running reservoir dry"
  - candidate_issue: epb-actuator-seizure-prevention
    report_status: informational
    summary: "Skipping periodic electric parking brake adjustment is the primary reason EPB actuators seize and fail — an expensive replacement that is largely preventable with maintenance."
    symptoms:
      - EPB actuator seized
      - parking brake not holding
    preventive_actions:
      - perform periodic cable and adjuster maintenance
      - if internals are corroded and seized, drum must be disassembled and freed — adjustment alone will not help
    notes:
      - "Multiple boot brands (OEM, aftermarket, Chinese) have all failed at the same location"
  - candidate_issue: inner-tire-wear-camber-deviation
    report_status: observed
    summary: "Significant camber deviation causing accelerated inner tire wear. One tire nearly worn through on inner edge. Bent washer adjusters from over-torquing identified as a contributing factor."
    symptoms:
      - accelerated inner tire wear
      - one tire nearly worn through on inner edge
    diagnosis:
      - visual tire wear pattern inspection
      - camber measurement
    fixes:
      - alignment correction (future video planned)
      - check washer adjusters for bending from over-torque
guide_mentions:
  - candidate_guide: abs-dsc-module-replacement-d3
    summary: "ABS/DSC module swap on Discovery 3. Disconnect all brake lines. Remove single mounting bolt. Pull module from mounting shoe. Install replacement and seat in shoe. Connect brake lines. Use GAPT diagnostic tool to verify no faults and actuate individual valves. Bleed all four corners afterward."
  - candidate_guide: epb-adjustment-d3
    summary: "Electric parking brake adjustment procedure for Discovery 3. Activate service mode by holding EPB button down while turning ignition off. Rotate drum inspection plug to access internal adjuster wheel. Tighten adjuster until drum cannot rotate by hand, then back off one click until it just slips freely. Mark adjuster wheel tooth position with white ink (Q-tip method) to verify full rotation."
  - candidate_guide: pressure-brake-bleeding
    summary: "Pressure bleeding procedure using pressurized fluid container at 15 PSI. Bleed all four corners individually. Eliminates need for second person pumping pedal. Suction excess fluid if pressure method overfills reservoir."
---

## Summary

LR TIME performs a comprehensive maintenance session on a Discovery 3, starting with an ABS/DSC module replacement using a 25 EUR used unit from eBay that restored hill descent control in both forward and reverse. The brake bleeding process exposed a significant usability flaw in the GAPT2D diagnostic tool — its ambiguous "pump brake pedal" instruction caused repeated failed cycles, a problem confirmed by widespread community complaints. The team resorted to traditional pressure bleeding at 15 PSI as a reliable workaround. The electric parking brake adjustment procedure is documented in detail: activate service mode, access the adjuster wheel through the drum inspection plug, tighten until the drum locks then back off one click. The session also includes a tire swap revealing significant camber-induced inner tire wear, and concludes with a 776 km road trip to the Netherlands that validated all repairs.

## Notes

- ABS/DSC module controls ABS, hill descent, and electric parking brake — all three functions restored with a single 25 EUR used module.
- Match the manufacturing date of the replacement module as closely as possible to the original.
- GAPT2D brake bleeding instructions are widely regarded as unclear — pressure bleeding at 15 PSI is a reliable alternative.
- EPB service mode on Discovery 3: hold EPB button down + turn ignition off.
- Adjuster wheel set point: tighten until drum locks, back off one click until it just slips freely.
- Wheel torque: 140 Nm. Tire pressure: 2.5 bar front / 2.7 bar rear.
- Disable air suspension fuse before jacking — the system will auto-level and destabilize a jacked vehicle.
- Safe jacking point: cross member beneath skid plate, not the weaker central cross member which can bend.
- 776 km validation road trip at max 136 km/h, average 86 km/h confirmed all repairs successful.
