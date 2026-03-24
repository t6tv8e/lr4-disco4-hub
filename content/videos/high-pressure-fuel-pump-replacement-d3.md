---
title: "Maybe I should have bought a Toyota? Land Rover Discovery 3 - High Pressure Fuel Pump replacement"
slug: /videos/high-pressure-fuel-pump-replacement-d3/
content_type: video
youtube_id: Q8Q1vnPbQRw
channel: LR TIME
published_at: ""
summary: "Complete high-pressure fuel pump diagnosis and replacement on a Discovery 3 TDV6, including GAP2 data-logging diagnosis, oil separator removal technique, torque specs, a failed remanufactured pump requiring a second replacement with a new Continental/Siemens unit, and opportunistic glow plug replacement."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
tags:
  - high-pressure-fuel-pump
  - fuel-system
  - gap2-tool
  - data-logging
  - oil-separator
  - glow-plugs
  - remanufactured-parts
  - torque-specs
  - diy
  - diagnosis
issue_mentions:
  - candidate_issue: high-pressure-fuel-pump-failure
    report_status: confirmed
    summary: "High-pressure fuel pump failure diagnosed via GAP2 data-logging. Pressure control valve demand was rising but fuel rail pressure was not following. First remanufactured pump (600 EUR with 150 EUR core deposit) failed — car started poorly when hot and sometimes would not start at all. Second replacement with new Continental/Siemens pump (just over 1,000 EUR) resolved the issue."
    symptoms:
      - poor hot starting
      - intermittent no-start condition
      - fuel rail pressure not following control valve demand
    fault_codes: []
    diagnosis:
      - GAP2 tool data-logging showing pressure control valve (dark blue line) rising but fuel rail pressure (red line) not following
      - critical pre-checks before replacing HP pump — diagnose low-pressure fuel system, change fuel filter, check injector leaks, verify low-pressure fuel delivery
      - reference Robbie's guide on disco3.co.uk
    fixes:
      - replace high-pressure fuel pump
      - first attempt with remanufactured pump failed
      - successful fix with new Continental/Siemens pump
      - air purging procedure — multiple ignition cycles without starting to prime fuel system before cranking
    parts:
      - name: Remanufactured high-pressure fuel pump
        note: "600 EUR with 150 EUR refundable core deposit; failed after installation"
      - name: New Continental/Siemens high-pressure fuel pump
        note: "Just over 1,000 EUR; described as only one available at good price in all of Europe"
      - name: Pressure control valve (individual)
        note: "120-140 EUR each from UK, but combined with taxes approaches 400 EUR"
      - name: Volume control valve (individual)
        note: "120-140 EUR each from UK"
    costs:
      - item: Remanufactured HP pump (failed)
        amount: "600"
        currency: EUR
        note: "Plus 150 EUR refundable core deposit"
      - item: New Continental/Siemens HP pump
        amount: "1000+"
        currency: EUR
      - item: Land Rover dealer quote for same repair
        amount: "4000"
        currency: EUR
    outcome: "GAP2 data confirmed correct behavior after new pump — pressure control valve demand and fuel rail pressure tracked together properly. Car started cleanly and ran well."
    notes:
      - "Remanufactured pumps carry risk of being returned for the same fault"
      - "Individual valve replacement less economical than full pump when taxes are included"
  - candidate_issue: oil-separator-removal-difficulty
    report_status: informational
    summary: "Oil separator removal is the hardest part of the HP fuel pump job, taking 30+ minutes alone. Specific technique: lift it, disconnect connectors once elevated, orient diagonally (one leg down, pushed to one side), then twist out. Anyone claiming a 2-hour total job time is wrong."
    notes:
      - "New seals required on oil separator during reassembly — approximately 30 minutes"
      - "Locating stud removed and reinstalled with crow-foot wrench"
  - candidate_issue: throttle-body-emissions-only
    report_status: informational
    summary: "Discovery 3 diesel throttle body exists solely for emissions — it closes the air intake so the EGR system can draw exhaust fumes into the engine. Functionally redundant otherwise."
guide_mentions:
  - candidate_guide: hp-fuel-pump-replacement-d3-tdv6
    summary: "High-pressure fuel pump replacement on Discovery 3 TDV6. Major components requiring removal before pump access: EGR pipes, crossover pipe, battery, throttle body/butterfly valve, coolant crossover pipe, wiring harnesses, and oil separator. Oil separator removal technique: lift, disconnect connectors once elevated, orient diagonally, twist out. Custom tool may be needed for pump mounting bolt with insufficient wrench clearance. HP pump mounting bolts: 23-25 Nm. High-pressure fuel line: two-stage tightening at 15 Nm then 35 Nm using crow-foot wrench at 90 degrees. Belt tensioner: care required during last few turns to avoid binding thread."
    notes:
      - "Oil separator is the hardest part — 30+ minutes to remove alone"
      - "A custom tool was fabricated from a forge tool for a pump mounting bolt"
      - "Air purging: multiple ignition cycles without starting to prime fuel system"
      - "New seals on oil separator during reassembly"
      - "Glow plug plastic-thread bolts torqued to bottomed out — no Nm limit"
  - candidate_guide: glow-plug-replacement-d3-tdv6
    summary: "Opportunistic glow plug replacement during HP fuel pump work (easier access with pump removed). Arrive with fully hot engine, wait approximately 90 minutes for engine core to retain heat, use compressed air to cool plug and blow debris before cracking loose. Break-loose torque was under 10 Nm attributed to residual heat keeping metal expanded. Testing: connect amp meter to main wiring harness (all 6 cables through it) — healthy plugs draw approximately 10 amps each (approximately 60 amps total), then regulate down as they warm up."
  - candidate_guide: hp-fuel-pump-diagnosis-gap2
    summary: "Diagnosing high-pressure fuel pump failure using GAP2 data-logging. Monitor pressure control valve demand (dark blue line) versus fuel rail pressure (red line). If demand rises but rail pressure does not follow, the HP pump or its integrated valves are faulty. Critical pre-checks before pump replacement: diagnose low-pressure fuel system, change fuel filter, check injector leaks, verify low-pressure fuel delivery per Robbie's guide on disco3.co.uk."
---

## Summary

LR TIME diagnoses and replaces the high-pressure fuel pump on a Discovery 3 TDV6 using GAP2 data-logging that showed the pressure control valve demand rising while fuel rail pressure failed to follow. The job is deceptively complex — the oil separator alone takes 30+ minutes to remove using a specific lift-disconnect-orient-twist technique, and major components including EGR pipes, battery, throttle body, and coolant crossover pipe must come out first. A custom tool was fabricated for one pump mounting bolt with insufficient wrench clearance. The first remanufactured pump (600 EUR) failed after installation with poor hot starting, requiring a second replacement with a new Continental/Siemens unit at just over 1,000 EUR. All six glow plugs were replaced opportunistically while access was available. GAP2 data confirmed correct fuel pressure behavior after the new pump, and the car started cleanly. Land Rover quoted 4,000 EUR for the same repair, making the DIY approach a saving of over 3,000 EUR despite the two-pump ordeal.

## Notes

- GAP2 data-logging is essential for HP fuel pump diagnosis: pressure control valve demand vs fuel rail pressure tracking.
- Critical pre-checks before replacing HP pump: diagnose low-pressure fuel system, change fuel filter, check injector leaks, verify low-pressure delivery (reference Robbie's guide on disco3.co.uk).
- Oil separator removal is the single hardest part of this job — 30+ minutes alone. Lift, disconnect connectors once elevated, orient diagonally, twist out.
- HP pump mounting bolts: 23-25 Nm. High-pressure fuel line: two-stage tightening at 15 Nm then 35 Nm with crow-foot wrench at 90 degrees.
- Belt tensioner: care required during last few turns of removal to avoid binding and destroying the thread.
- Remanufactured pumps carry real risk — the first 600 EUR unit failed and was replaced with a 1,000+ EUR new Continental/Siemens pump.
- Individual pressure/volume control valves cost 120-140 EUR each from UK; combined with taxes this approaches 400 EUR, making full pump replacement more economical.
- Discovery 3 diesel throttle body exists solely for emissions (EGR intake closure) — functionally redundant otherwise.
- Glow plug removal tip: arrive with hot engine, wait 90 minutes, use compressed air to cool plug and blow debris. Break-loose torque was under 10 Nm.
- Glow plug testing: connect amp meter to main harness — healthy plugs draw approximately 10 amps each (approximately 60 amps total).
- Land Rover dealer quote: 4,000 EUR for the same repair; DIY saved over 3,000 EUR.
