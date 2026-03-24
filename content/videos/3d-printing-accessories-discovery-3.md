---
title: "3D printing accessories for our Land Rover Discovery 3 / LR3"
slug: /videos/3d-printing-accessories-discovery-3/
content_type: video
youtube_id: 76LCD-4DvEs
channel: LR TIME
summary: "Using an Anycubic Mega S 3D printer (209 EUR) and SolidWorks to design and print custom Discovery 3 accessories: glove box camera mounts, airline rail end caps, a 32-hour centre console tray, and a replica LR TIME logo."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    engine: 2.7 TDV6
    market: Europe
tags:
  - 3d-printing
  - diy
  - accessories
  - interior
  - storage
last_reviewed: "2026-03-24"
guide_mentions:
  - candidate_guide: 3d-printed-camera-mount-glove-box
    summary: "A 3D-printed camera mount shaped to the glove compartment lid profile, attached with 3M double-sided tape, providing a stable storage position for camera bodies and zoom lenses during driving."
    parts:
      - name: 3M double-sided tape (permanent)
        brand: 3M
        note: "Use removable tape first for test fit, then switch to permanent; adhesion weaker in cold weather"
    notes:
      - "Template cut from cardboard, shape transferred to CAD, then printed"
      - "Tripod thread interface shape used for camera retention"
      - "Two mounts side by side can hold a camera body and zoom lens without interference"
  - candidate_guide: 3d-printed-airline-rail-end-caps
    summary: "Custom end caps for cargo airline rails, scanned from a cut rail section and duplicated in 3D CAD, replacing 7 EUR per piece OEM plastic caps."
    notes:
      - "Cut a piece of airline rail, scanned the cross-section profile, duplicated in SolidWorks"
      - "Slide-fit design; no adhesive needed"
  - candidate_guide: 3d-printed-centre-console-tray
    summary: "A custom tray for the Discovery 3 centre console, designed with 1:1 paper templates to validate complex curved geometry before committing to a 32-hour print job."
    parts:
      - name: Anycubic Mega S 3D printer
        brand: Anycubic
        note: "209 EUR from European warehouse; heated print bed; supports filament runout detection and resume"
    notes:
      - "Print duration: 28 hours 44 minutes for the tray"
      - "Paper templates printed 1:1 to test side-to-side width, front-to-back depth, and bottom radii before printing"
      - "Commercial equivalent tray available for 36 EUR"
      - "Functions as armrest with lid closed; provisions for a printed divider"
      - "Logo printed upside down intentionally — not visible when installed"
  - candidate_guide: 3d-printed-oem-part-replication
    summary: "Replicating a 29 EUR aluminium accessory bracket in 3D-printed plastic, including a printed O-ring groove fitted with a real rubber O-ring to match OEM sealing."
    notes:
      - "First-layer bridging over holes failed — solved by adding a 0.2 mm solid first layer"
      - "Custom version allows non-standard bolt sizes versus the OEM quarter-inch-only design"
issue_mentions:
  - candidate_issue: 3d-printer-bed-temperature-sensor-failure
    report_status: reported
    summary: "The Anycubic Mega S printer failed after 4 days because the bed temperature sensor cable, tie-wrapped to an articulating part, broke from repeated flexing. Repaired with heat shrink tubing."
    timestamps: []
    symptoms:
      - printer stalls mid-print
      - bed temperature not reading
    warning_messages: []
    fault_codes: []
    diagnosis:
      - cable tie-wrapped to articulating joint broke from repeated flex cycling
    fixes:
      - repaired broken wire with heat shrink tubing
    preventive_actions: []
    parts: []
    costs: []
    outcome: "Printer fully functional after repair"
    notes:
      - "Without ability to self-repair, the printer would need to be returned to the manufacturer"
---

## Summary

Christian and Vera demonstrate four 3D printing projects for their Discovery 3 using an Anycubic Mega S printer (209 EUR) and SolidWorks CAD software. Projects include a glove box camera mount attached with 3M tape, airline rail end caps scanned and replicated from the original rail profile, a centre console tray requiring a 32-hour print (commercial equivalent: 36 EUR), and a multi-colour LR TIME logo. A practical highlight is replicating a 29 EUR OEM aluminium bracket with a printed version including a real O-ring in a printed groove. The printer's bed temperature sensor cable broke after 4 days from flex cycling but was repaired with heat shrink.

## Notes

- Anycubic Mega S: 209 EUR, heated bed, filament runout detection, resume capability
- SolidWorks used for CAD design (less than 25% of capability used)
- Slicer software needed to convert CAD to printable layers (brim, wall thickness, infill, supports)
- First-layer hole bridging fails — add 0.2 mm solid base layer as workaround
- 3M permanent tape: test with removable tape first; poor adhesion in cold weather
- Centre console tray: validate geometry with 1:1 paper templates before long prints
- All designs planned for upload to a public 3D printing repository under "lr time" account
