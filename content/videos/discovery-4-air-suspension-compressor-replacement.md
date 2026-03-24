---
title: "Land Rover Discovery Air Suspension Fixed"
slug: /videos/discovery-4-air-suspension-compressor-replacement/
content_type: video
youtube_id: 6LnbbbWW_A4
channel: LR TIME
published_at: ""
summary: "Systematic diagnosis and replacement of the AMK air suspension compressor on a Discovery 4, with emphasis on ruling out bushings and mechanical faults before condemning the compressor, plus secondary repairs on a water pump and worn steering knuckles."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
  - model: Discovery 3
    years: ""
    engine: 2.7 TDV6
    market: Europe
tags:
  - air-suspension
  - compressor
  - amk
  - diagnosis
  - plausibility-fault
  - water-pump
  - steering-knuckle
  - diy
issue_mentions:
  - candidate_issue: air-suspension-compressor-failure
    report_status: confirmed
    summary: "Discovery 4 air suspension compressor replaced after systematic diagnosis ruled out bushings, leaks, and relay. Three fault codes pointed to the compressor: Air Supply component failure, pressure increase too slow when filling reservoir, and airspring air supply mechanical failure."
    symptoms:
      - vehicle would not enter extended mode
      - suspension plausibility faults
      - compressor audibly weak compared to replacement
      - fault code Air Supply component failure performance incorrect operation
      - fault code pressure increase too slow when filling reservoir
      - fault code airspring air supply mechanical failure
    diagnosis:
      - first rule out worn suspension bushings causing plausibility faults (height sensor sees no movement)
      - check air filter in fender and line to silencer near spare wheel for blockage
      - swap compressor relay with rear screen heater relay to rule out relay fault
      - verify air lines are not blocked by blowing through them
      - only condemn compressor after all mechanical and electrical causes eliminated
    fixes:
      - replace AMK OEM air compressor
      - replace compressor relay
      - apply anti-seize to all mounting bolts
      - lubricate O-rings with silicone grease
      - leak check all connections with detection spray after pressurizing to 18 bar
    preventive_actions:
      - do not replace compressor on first sign of suspension fault
      - fix worn bushings and suspension components first
      - keep air filter and intake line clean
    parts:
      - name: AMK OEM air compressor
        price: "495 EUR"
        source: German aftermarket supplier
      - name: M8 cage nuts (backup)
      - name: compressor relay
    costs:
      - description: OEM AMK compressor (non-dealer)
        amount: "495 EUR"
      - description: workshop repair estimate (dealer)
        amount: "25000 USD"
  - candidate_issue: air-suspension-pressure-switch-design-flaw
    report_status: observed
    summary: "The pressure switch is mounted on the compressor side of the shutoff valve, so it cannot read reservoir pressure after the valve closes. Christian argues it should be on the reservoir side for accurate monitoring."
    symptoms:
      - pressure reading drops to zero when compressor shuts off despite full reservoir
    diagnosis:
      - pressure switch loses signal when valve closes between compressor and reservoir
  - candidate_issue: water-pump-failure
    report_status: confirmed
    summary: "Water pump failed on the LR TIME Discovery 4 despite a full 2023 rebuild -- it was one of the components deliberately not replaced prematurely. Hepu brand pump with bronze impeller recommended over SKF stamped metal impeller."
    symptoms:
      - coolant leak from water pump weeping hole
    diagnosis:
      - weeping hole on pump housing indicates internal seal failure
    fixes:
      - replace water pump with Hepu brand (bronze impeller)
    preventive_actions:
      - avoid SKF pumps with stamped sheet metal impeller which can separate and clog the cooling system
    parts:
      - name: Hepu water pump (bronze impeller)
  - candidate_issue: worn-steering-knuckle-ball-joint
    report_status: confirmed
    summary: "Steering knuckle ball joint worn out, causing clunking noise when steering. Diagnosed by deflating all four air springs first (removes tension), then physically wiggling each joint. A good joint cannot be moved by hand; the worn one could."
    symptoms:
      - clunking noise when steering
      - excessive play in ball joint when checked by hand
    diagnosis:
      - deflate all four air springs to remove tension before checking
      - compare movement of suspect joint vs known-good joint by hand
    fixes:
      - replace steering knuckle ball joint (sent to Land Rover dealer)
  - candidate_issue: components-failing-after-rebuild
    report_status: observed
    summary: "Every component that was not replaced during the 2023 rebuild subsequently failed: AC condenser, power steering pump, drive shaft center bearing, and water pump. Illustrates the challenge of preventive vs reactive replacement philosophy at high mileage (270,000 km)."
    symptoms:
      - sequential failures of unreplaced components post-rebuild
    preventive_actions:
      - at high mileage consider replacing wear items even if not yet failed
      - budget for ongoing repairs on 270,000+ km vehicles
guide_mentions:
  - title: "Air suspension compressor replacement procedure"
    summary: "Pull air suspension fuse (yellow, from bottom). No deflate needed as compressor connects via single line to closed valves. Remove three mounting bolts (may snap -- have M8 cage nuts ready). Use open box wrenches on airline fittings. Lubricate O-rings. Apply anti-seize to all bolts. Torque: plastic fittings 2 Nm, aluminum fittings 4 Nm. Reinstall fuse and verify reservoir reaches 18 bar. Leak check all connections."
  - title: "Air suspension diagnostic sequence"
    summary: "1) Fix worn bushings and suspension components first. 2) Check air filter in fender and line to silencer. 3) Swap compressor relay to rule out electrical. 4) Only then condemn compressor based on fault codes pointing to slow pressure build."
  - title: "Steering knuckle play diagnosis"
    summary: "Deflate all four air springs using GAP tool to remove suspension tension. Physically wiggle each ball joint by hand. A worn joint moves freely; a good joint cannot be moved. No gauge required."
---

## Summary

David's Discovery 4 had persistent air suspension faults even after front and rear suspension bushings were previously repaired. Christian methodically works through the diagnostic sequence: ruling out bushings (already fixed), checking the air intake filter line, swapping the relay, and confirming air lines are clear before finally condemning the compressor. An AMK OEM compressor is installed for 495 EUR (vs an estimated 25,000 USD at a dealer workshop). After installation, reservoir pressure reaches 18 bar, all faults clear, and the compressor does not cycle during a test drive. The video also covers a water pump failure on the LR TIME car (Hepu bronze impeller recommended over SKF), and diagnosis of worn steering knuckle ball joints using the deflate-and-wiggle method.

## Notes

- Never replace the air suspension compressor as the first diagnostic step. Rule out worn bushings, clogged air filter, blocked lines, and faulty relay first.
- Plausibility faults occur when the ECU commands a height change but the height sensor sees no movement, often due to worn suspension bushings rather than compressor failure.
- Pull the yellow air suspension fuse before working on the compressor. No system deflate is needed for this job.
- The three compressor mounting bolts can snap off from corrosion. Keep M8 cage nuts on hand.
- Torque values are very low: plastic airline fittings ~2 Nm, aluminum fittings ~4 Nm.
- Reservoir target pressure is ~18 bar.
- The pressure switch is on the compressor side of the shutoff valve, meaning it cannot confirm reservoir pressure after the valve closes -- a design limitation.
- Hepu water pump with bronze impeller is preferred over SKF (stamped metal impeller can separate and clog the system).
- At 270,000 km, expect something to fail every week. A home lift (~2,000 EUR) is recommended for cost-effective ownership.
- To check steering knuckle play: deflate all four air springs first, then wiggle each joint by hand.
