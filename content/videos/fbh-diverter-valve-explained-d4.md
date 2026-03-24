---
title: "Land Rover Discovery 4 - FBH Diverter Valve Explained S6 - EP 16"
slug: /videos/fbh-diverter-valve-explained-d4/
content_type: video
youtube_id: tw6s0ei89-w
channel: LR TIME
published_at: ""
summary: "Demonstrates how the fuel burning heater diverter valve improves cabin heating by ~10 degrees on the Discovery 4, compares Eberspacher vs Webasto heater units, and explains why the OEM 3-line hose assembly is worth the cost."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
tags:
  - fuel-burning-heater
  - diverter-valve
  - cabin-heating
  - coolant-system
  - eberspacher
  - webasto
  - rear-hatch-winch
  - shifter-knob
  - diy
issue_mentions:
  - candidate_issue: fbh-cabin-heating-slow-without-diverter-valve
    report_status: demonstrated
    summary: "Without the diverter valve, the Discovery 4 FBH cycles coolant through the engine block and cabin heat exchanger simultaneously, wasting energy and resulting in ~10 degrees less cabin heat."
    symptoms:
      - cabin reaches only ~28-32 degrees C after FBH cycle
      - cabin heating noticeably slower than expected
    diagnosis:
      - compare cabin temperature with and without diverter valve installed
      - ECU outputs 12V to the diverter valve circuit even when valve is absent, confirming the system expects the valve
    fixes:
      - install OEM diverter valve and 3-line coolant hose assembly (recommended over DIY hose fabrication)
    parts:
      - name: Diverter valve
        brand: Land Rover OEM
        part_number: ""
        note: "Available from Amazon; ECU already wired for it"
      - name: 3-line coolant hose assembly to FBH
        brand: Land Rover OEM
        part_number: ""
        note: "Replaces the 2-hose setup; critical for proper diverter valve routing"
    costs:
      - description: OEM 3-line hose assembly
        amount: "277 EUR"
    notes:
      - "With the valve, cabin reached ~40 degrees C vs ~28-32 degrees C without"
      - "In extreme cold (-15 C or below), the ECU prioritises engine block heating before actuating the diverter valve for the cabin"
      - "FBH cycle lasts ~20 min on Webasto (D4), ~30 min on Eberspacher"
      - "DIY hose fabrication using generic T-fittings and hoses was abandoned as unreliable; OEM assembly is strongly recommended"
  - candidate_issue: rear-hatch-winch-cable-broken
    report_status: fixed
    summary: "Rear hatch winch cable broke; replaced with OEM Land Rover part in under 5 minutes."
    symptoms:
      - rear hatch winch not functioning
    diagnosis:
      - visual inspection of cable
    fixes:
      - replace winch cable with OEM Land Rover part
    parts:
      - name: Rear hatch winch cable
        brand: Land Rover OEM
        part_number: ""
        note: "Buy the correct side (left or right)"
    costs:
      - description: OEM rear hatch winch cable
        amount: "70 EUR"
      - description: Land Rover dealer labour estimate
        amount: "250 EUR"
    notes:
      - "5-minute job; no special tools required"
      - "Access by unclipping two interior trim clips and unbolting the winch"
  - candidate_issue: rear-hatch-latch-false-open-warning
    report_status: fixed
    summary: "Rear hatch latch too tight, triggering false 'open' dashboard warnings and risking actuator arm breakage."
    symptoms:
      - intermittent rear hatch open warning on dashboard while driving
      - rear hatch latch feels too tight and sticky
    diagnosis:
      - test the latch release feel by hand
    fixes:
      - loosen the two bolts under the latch striker plate and shift it forward slightly (~1-2 mm) so the latch releases smoothly
      - lubricate latch and hinges with a permanent thin-grease product (not WD-40)
    parts: []
    costs: []
    notes:
      - "If the latch is chronically too tight, the actuator arm inside the mechanism can snap, locking the hatch permanently"
      - "Lower tailgate can be opened manually without the button; upper tailgate has no manual bypass — if the actuator breaks, you need an angle grinder"
      - "Hinge lubrication is widely neglected on this model"
  - candidate_issue: 8hp-shifter-knob-failure
    report_status: workaround
    summary: "David's shifter module was unreliable; resolved by swapping with a known-good unit from another Discovery 4."
    symptoms:
      - gear selector stuck or unreliable
    diagnosis:
      - GAP tool fault read
    fixes:
      - swap with known-good shifter module from another vehicle for diagnosis
    parts:
      - name: Shifter module (gear selector unit)
        brand: Land Rover OEM
        part_number: ""
        note: ""
    costs: []
    notes:
      - "Centre console removal on D4 is easier than on D3 — requires firm yank on trim pieces"
guide_mentions:
  - title: FBH diverter valve installation (D4)
    summary: "Explains the coolant hose routing needed to install a diverter valve on the FBH system, including the T-fitting topology and why the OEM 3-line hose assembly is the correct approach."
  - title: Rear hatch winch cable replacement (D4)
    summary: "Shows how to replace the rear hatch winch cable in under 5 minutes: unclip two trim clips, unbolt winch, swap cable, reassemble."
  - title: Rear hatch latch adjustment (D4)
    summary: "Demonstrates adjusting the rear hatch striker plate forward to eliminate false open warnings and prevent actuator arm breakage."
  - title: Vacuum coolant fill (D4)
    summary: "Uses a vacuum filler to refill the coolant system after draining, checking the plastic coolant manifold for leaks before refilling."
---

## Summary

Christian attempts to install a fuel burning heater diverter valve on David's Discovery 4, with his own D4 ("Prince Small Crawl") as the reference vehicle. Side-by-side temperature testing shows a clear ~10 degree C cabin improvement with the valve installed: the valve routes hot coolant primarily through the cabin heat exchanger rather than splitting flow with the engine block. The ECU already provides 12V to the diverter valve circuit on all D4s, confirming factory readiness. However, the hose fabrication attempt using generic parts is abandoned as too unreliable, and the recommendation is to buy the OEM 3-line hose assembly for 277 EUR. The video also covers a rear hatch winch cable replacement (70 EUR, 5 minutes), rear hatch latch alignment to prevent false open warnings and actuator arm breakage, hinge lubrication, a shifter module swap, and fresh coolant fill. The Eberspacher heater unit (30-minute cycle) is noted as mechanically superior to the Webasto unit (20-minute cycle). In extreme cold below -15 C, the ECU intentionally prioritises engine block heating before sending warmth to the cabin.

## Notes

- The diverter valve mod is a worthwhile upgrade: measurable ~10 degree C cabin heating improvement and the ECU already supports it from the factory
- Spend the 277 EUR on the OEM 3-line hose assembly rather than attempting generic hose fabrication
- Heater casing reaches only ~32 degrees C and muffler ~90 degrees C, presenting minimal fire risk
- Rodenberger hose cutter (15 EUR) performed as well as more expensive alternatives
- Japanese-made hose pick tool described as essential for removing stuck coolant hoses
- Always test risky modifications on another vehicle first ("guinea pig principle")
