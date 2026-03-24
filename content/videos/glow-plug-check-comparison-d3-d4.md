---
title: "How to Check Glow Plugs - Glow Plug Compare - Land Rover Discovery 3/4 TDV6"
slug: /videos/glow-plug-check-comparison-d3-d4/
content_type: video
youtube_id: vbBscBFpH_s
channel: LR TIME
published_at: ""
summary: "Comprehensive guide to diesel glow plug testing on Discovery 3 and 4 TDV6/SDV6 engines. Covers cold-weather starting procedure, clamp meter diagnostics without dismantling, OBD live data analysis, and a live burn test comparing OEM, Bosch, and budget glow plugs."
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
  - glow-plugs
  - cold-start
  - diagnosis
  - clamp-meter
  - battery
  - crankshaft-bearings
  - preventive-maintenance
  - diy
issue_mentions:
  - candidate_issue: glow-plug-failure
    report_status: reported
    summary: "Failed glow plugs cause rough cold starts, prolonged cranking, and engine rattle. Testing with a DC clamp meter revealed 2 of 3 plugs dead on one bank of the D3. Prolonged cranking from bad plugs contributes to oil starvation and crankshaft bearing failure."
    symptoms:
      - Engine rattle/shaking on cold startup
      - Prolonged cranking before firing
      - Rough idle in cold weather
    warning_messages: []
    fault_codes: []
    diagnosis:
      - DC clamp meter around 3-wire plug feeding each cylinder bank during ignition cycle
      - Each healthy glow plug draws approx. 15 amps initially
      - D3 test showed one bank at only 12A total (3 plugs at 4A each) vs expected 45A — 2 of 3 plugs dead
      - D4 test showed both banks at 24-31A indicating all 6 plugs functional
      - Balanced readings across both banks suggest all plugs working
    fixes:
      - Replace failed glow plugs — extract proactively before they seize in the cylinder head
      - Live burn test showed OEM Land Rover plugs (approx. 25 EUR each) maintained highest sustained current at 10A
      - Bosch plugs (approx. 15 EUR each) acceptable with 6A sustained current
      - Budget plugs (approx. 8 EUR each) slowest to heat, dimmest glow — not recommended
    preventive_actions:
      - Replace glow plugs proactively before they seize
      - Maintain healthy battery for maximum cranking speed
      - Turn off all auxiliary devices before cold starting
    parts:
      - name: Glow Plug (OEM)
        brand: Land Rover
        part_number: ""
        note: "Best performer — fastest heat-up, 10A sustained current. Approx. 25 EUR each"
      - name: Glow Plug (Bosch)
        brand: Bosch
        part_number: ""
        note: "Decent performer, 6A sustained current. Approx. 15 EUR each"
      - name: DC Clamp Meter
        brand: ""
        part_number: ""
        note: "Cheap Chinese DC clamp meter sufficient for non-contact glow plug testing"
    costs:
      - item: OEM Glow Plug
        amount: "25"
        currency: EUR
      - item: Bosch Glow Plug
        amount: "15"
        currency: EUR
    outcome: "Diagnostic method validated on both D3 and D4; glow plug quality hierarchy established through live burn test"
    notes:
      - "Reference: Robbie's Guide to Glow Plugs at disco3.uk"
  - candidate_issue: prolonged-cranking-bearing-damage
    report_status: reported
    summary: "Prolonged cold cranking causes oil starvation at crankshaft main bearings. Oil pump cannot build sufficient pressure until engine reaches approx. 800 RPM. A weak battery reduces cranking speed, extending the no-oil-pressure window and accelerating TDV6 crankshaft bearing failure."
    symptoms:
      - Prolonged cranking before engine fires
      - Weak battery during cranking
    warning_messages: []
    fault_codes: []
    diagnosis:
      - Monitor cranking RPM and fuel rail pressure via OBD diagnostic tool
      - Slow fuel pressure buildup during cranking indicates worn high-pressure fuel pump
      - Battery voltage drop during cranking indicates battery weakness
    fixes:
      - Replace failing glow plugs to minimize crank time
      - Replace weak battery to maximize cranking speed
      - Address slow fuel pressure buildup (worn high-pressure fuel pump)
    preventive_actions:
      - Maintain healthy battery — direct preventative measure against crankshaft bearing failure
      - Replace glow plugs proactively
    parts: []
    costs: []
    outcome: "D4 battery replaced as preventative maintenance; noticeably better starting immediately"
    notes:
      - "TDV6/SDV6 failure chain: bad glow plugs -> rough cold starts -> prolonged cranking -> weak battery compounds it -> oil starvation -> crankshaft bearing failure"
      - "Window auto-up/down functions need manual reset after battery swap (hold up, repeat cycle)"
guide_mentions:
  - candidate_guide: glow-plug-testing-clamp-meter
    summary: "Non-contact glow plug testing using a DC clamp meter around the wiring loom. Expected 15A per plug initially; compare readings across both cylinder banks."
  - candidate_guide: cold-weather-starting-procedure-diesel
    summary: "Turn off all auxiliary devices, wait for glow plug indicator, ensure healthy battery for maximum cranking speed."
  - candidate_guide: obd-cranking-analysis
    summary: "Monitor engine RPM, fuel rail pressure, glow plug relay status, and battery voltage simultaneously during cranking using GAP Tool to diagnose starting issues."
---

## Summary

LR TIME provides a thorough investigation into diesel glow plug function, testing, and quality comparison across both the Discovery 3 (2.7 TDV6) and Discovery 4 (3.0 SDV6). The video demonstrates three diagnostic methods: a simple DC clamp meter test that reads current through the wiring loom without disconnecting anything (each healthy plug should draw about 15 amps initially), OBD live data analysis showing cranking RPM, fuel rail pressure, and battery voltage simultaneously, and a dramatic live burn test comparing extracted plugs.

The burn test revealed 5 of 6 removed plugs from a TDV6 were completely dead, and established a clear quality hierarchy: OEM Land Rover plugs maintain the highest sustained current (10A) and heat fastest, Bosch plugs are acceptable at 6A sustained, and budget plugs are not recommended due to weak performance.

Critically, the video connects glow plug health directly to the well-known TDV6 crankshaft bearing failure chain: bad glow plugs lead to prolonged cranking, which means the oil pump cannot build sufficient pressure, starving the main bearings. A weak battery compounds this by reducing cranking speed. Maintaining both glow plugs and battery health is positioned as direct preventative maintenance against catastrophic engine failure.

## Notes

- DC clamp meter test is non-destructive and takes seconds — no need to remove anything
- Glow plugs continue assisting combustion for several seconds after startup, not just pre-heating
- Snowflake warning light on D3 activates below 4 degrees C — road ice warning, not just frost
- Glow plug indicator duration does correspond to actual actuation time per the workshop manual
- D4 fuel-burning heater with timed climate control (activatable via GAP Tool) can pre-warm the vehicle before departure, eliminating cold-start stress
- Reference methodology sourced from Robbie's Guide to Glow Plugs at disco3.uk
