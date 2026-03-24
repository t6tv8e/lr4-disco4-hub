---
title: "Land Rover basic diagnostic in 5 steps - LR3 - LR4"
slug: /videos/basic-diagnostic-five-steps-d3-d4/
content_type: video
youtube_id: fy_0ym793-8
channel: LR TIME
published_at: ""
summary: "Outlines a practical 5-step diagnostic framework for Discovery 3 and 4 owners: know your car cold, buy a diagnostic tool on day two, learn your fault baseline, research faults correctly online, and track your last working point."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: ""
    engine: 2.7 TDV6
    market: Europe
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
tags:
  - diagnostics
  - fault-codes
  - icarsoft
  - gap-tool
  - obd
  - nuisance-faults
  - troubleshooting
  - owner-education
  - diy
issue_mentions:
  - candidate_issue: nuisance-fault-control-module-communication-bus-off
    report_status: normal-behaviour
    summary: "The fault 'control module communication bus off' appears regularly on healthy Discovery 3 and 4 vehicles and is a normal nuisance fault that can be safely cleared."
    symptoms:
      - fault code stored in ECU even when car runs perfectly
    diagnosis:
      - read and clear fault codes regularly while the car is healthy to establish which faults are recurring nuisance codes
    fixes:
      - clear the fault code; no repair needed
    parts: []
    costs: []
    notes:
      - "Also includes 'lost communication with engine control module', 'lost communication with transfer case', and 'lost communication with audio unit' — all typical nuisance faults"
  - candidate_issue: fuel-sensor-circuit-fault-cold-weather
    report_status: known-intermittent
    summary: "Fuel sensor loses connection in cold weather, causing fuel gauge to drop to zero and fuel warning light to illuminate; resolves on its own when temperature rises."
    symptoms:
      - fuel gauge drops to zero suddenly in cold weather
      - fuel warning light illuminates
      - fault code 'fuel sensor one circuit' stored in instrument cluster
    diagnosis:
      - iCarsoft or GAP tool reads fault in instrument cluster module
      - fault resolves itself when ambient temperature rises
    fixes:
      - no action required unless the fault becomes persistent
    parts: []
    costs: []
    notes:
      - "Common on Discovery 3; not worth repairing unless it becomes a persistent year-round issue"
  - candidate_issue: turbo-boost-hose-blown-off
    report_status: remote-diagnosis
    summary: "Silicone intercooler hose slipped off under high boost load at speed, causing engine to stall; diagnosed remotely from fault codes."
    symptoms:
      - engine quits abruptly at high speed / high load
      - RPM drops to zero
      - turbocharger boost pressure fault code logged
    diagnosis:
      - read fault codes with diagnostic tool
      - compare new fault against known baseline nuisance faults to isolate the real issue
      - inspect hoses between air filter and turbocharger for disconnection
    fixes:
      - reconnect and re-clamp the slipped silicone hose
    parts: []
    costs: []
    notes:
      - "Silicone hoses last longer but slip off more easily than rubber under high boost load"
      - "This real-world example demonstrates why regular fault baseline monitoring enables remote diagnosis"
guide_mentions:
  - title: 5-step diagnostic framework for Discovery 3 and 4
    summary: "Step 1: Know your car details by heart (engine, year, VIN, mileage, emissions spec, service history). Step 2: Buy a diagnostic tool before even test-driving a Discovery. Step 3: Read and clear faults regularly while the car is healthy to learn which are nuisance faults. Step 4: Search disco3.co.uk via Google (site:disco3.co.uk + fault description) for community knowledge. Step 5: Always know the last working point — when and under what conditions the car last worked normally."
  - title: Using the iCarsoft i930 diagnostic tool
    summary: "Covers connecting the iCarsoft i930 (130 EUR used, 160-180 USD new), reading fault codes across all ECUs, clearing codes, and using an OBD extension cable for semi-permanent dashboard mounting. The extension cable does not work with GAP tool or FBH diagnostics."
  - title: Online fault research technique
    summary: "Use Google with 'site:disco3.co.uk' prefix plus your fault description rather than the disco3.co.uk internal search. Extract community terminology from initial results, then search those refined keywords for deeper understanding."
---

## Summary

Christian presents a 5-step diagnostic framework essential for any Discovery 3 or 4 owner. Step 1: know your car's details by heart — engine type, build year, VIN, mileage, EU emissions spec, and service history. Step 2: buy a diagnostic tool (iCarsoft i930 at ~130 EUR or GAP tool) before even test-driving a Discovery. Step 3: regularly read and clear fault codes while the car is healthy to build a baseline of nuisance faults (e.g., "control module communication bus off") so you can isolate real faults when they appear. Step 4: research faults online using Google with "site:disco3.co.uk" prefix rather than the site's own search. Step 5: always know the "last working point" — when and under what conditions the car last worked normally. A real-world example demonstrates the framework: a driver stalled at 160 km/h on the autobahn, read two fault codes, recognised one as a known nuisance crankshaft position sensor fault from regular baseline checks, and correctly identified the new turbocharger boost pressure fault as a blown-off silicone intercooler hose — diagnosed and confirmed remotely. A live scan of a healthy Discovery 3 shows typical nuisance faults (lost communications, fuel sensor circuit from cold weather, battery disconnect from previous work) — all explainable and non-alarming. The video emphasises that dashboard warning lights alone are useless for diagnosis; fault codes from the diagnostic tool are what matter.

## Notes

- A diagnostic tool is the single most important purchase after the car itself
- Check fault codes monthly; annually is not frequent enough
- OBD extension cable (flat type, Amazon) allows semi-permanent dashboard mounting but does not work with GAP tool or FBH diagnostics
- Discovery 3 uses 2.7L V6 twin-turbo diesel; Discovery 4 uses 3.0L with different characteristics — know which applies to you
- Discovery 3 is cheap to buy but expensive to own if dealer-serviced; DIY ownership on a small budget is viable with the right knowledge
- Discovery 4 is even more electronically complex than D3
- Silicone intercooler hoses last longer but are more prone to slipping off under high boost loads
- Avoid the "ever since" syndrome when speaking to technicians — be specific about timing and circumstances
- Stay present when your car is being repaired; you hold context the technician does not have
