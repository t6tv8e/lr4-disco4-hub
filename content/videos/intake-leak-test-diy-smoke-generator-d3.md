---
title: "Intake Leak Test - DIY Smoke Generator - Land Rover Discovery 3 - LR3 - LR4"
slug: /videos/intake-leak-test-diy-smoke-generator-d3/
content_type: video
youtube_id: ZDzb3RGxOPo
channel: LR TIME
published_at: ""
summary: "Building and using a homemade smoke generator with an inflatable intake plug to diagnose air leaks on a Discovery 3 TDV6 2.7L, revealing a failed MAF sensor tube gasket and oil separator leak that cause power loss by fooling the mass airflow sensor."
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
  - intake-leak
  - smoke-test
  - diy
  - maf-sensor
  - oil-separator
  - power-loss
  - snorkel
  - air-box
  - diagnosis
issue_mentions:
  - candidate_issue: maf-sensor-tube-gasket-failure
    report_status: confirmed
    summary: "The rubber grommet connecting the upper and lower sections of the main air intake tube (between air box and MAF sensor) had failed after approximately 15 years. Despite looking visually intact, it had lost its interference fit. Even a 5-10% air bypass past the MAF sensor causes incorrect airflow readings and measurable power loss."
    symptoms:
      - power loss
      - incorrect MAF sensor readings
      - smoke visibly escaping from intake tube connection during smoke test
    diagnosis:
      - inject smoke into intake via inflatable plug
      - observe smoke escaping between upper and lower air intake tube connection
      - gasket looks visually intact but has no interference fit remaining
    fixes:
      - replace rubber grommet/gasket between upper and lower intake tube
    preventive_actions:
      - this gasket is almost never replaced but degrades over 15 years
      - even 5-10% air leakage past MAF causes noticeable power loss
  - candidate_issue: oil-separator-leak
    report_status: confirmed
    summary: "Smoke emerged from the oil separator area, indicating a gasket or grommet failure. To be addressed when glow plugs are replaced, as the oil separator must be removed for glow plug access."
    symptoms:
      - smoke escaping from oil separator region during intake smoke test
    diagnosis:
      - inject smoke directly into intake manifold (after removing oil separator) to pinpoint
    fixes:
      - replace oil separator gaskets and grommet (planned with glow plug replacement)
  - candidate_issue: air-box-not-watertight
    report_status: observed
    summary: "Smoke testing the snorkel system revealed the air box is not fully watertight -- smoke escaped from underneath and around the box. The air filter must be installed as it provides a sealing gasket function."
    symptoms:
      - smoke leaking from underneath air box
    diagnosis:
      - smoke test with air filter removed shows significant leakage
      - smoke test with air filter installed shows reduced leakage
    preventive_actions:
      - always ensure air filter is properly installed as it contributes to air box sealing
  - candidate_issue: snorkel-increased-fuel-consumption
    report_status: observed
    summary: "Since fitting the snorkel, diesel consumption increased by approximately 0.8-1.0 L/100km. Root cause unknown. A bypass valve to switch between snorkel and standard intake is being considered to isolate the cause."
    symptoms:
      - 0.8-1.0 L/100km increase in diesel consumption after snorkel installation
  - candidate_issue: snorkel-diaphragm-broken
    report_status: confirmed
    summary: "The snorkel diaphragm (rain drain) was found broken/open during smoke testing."
    symptoms:
      - diaphragm open/broken
    fixes:
      - temporarily sealed with acetone-cleaned plastic patch
guide_mentions:
  - title: "DIY smoke generator build"
    summary: "Materials: canoe/storage container (~10 EUR), oil lamp wick, resistance wire (calibrated length for 12V car battery), baby oil, clothes hanger wire support structure, air inlet and outlet in lid, 0.1 bar pressure regulator, quick-connect fitting. The resistance wire heats the wick which vaporizes baby oil into smoke. Connect to car battery for power. Regulate pressure to minimum (~0.1 bar) to avoid damage."
  - title: "Air intake smoke leak test procedure"
    summary: "1) Remove engine air box and disconnect intake tube. 2) Inflate expandable plug (part number X01C100MV, ~32 EUR) into intake opening to seal it. 3) Connect smoke generator via airline to plug inlet port. 4) Regulate pressure to minimum. 5) Open oil filler cap -- smoke should travel through intake, past open exhaust valves, through sump breather, and exit at oil fill. 6) Watch for smoke escaping at unexpected locations. 7) For deeper intake manifold inspection, inject smoke directly after removing oil separator."
  - title: "MAF sensor cleaning"
    summary: "Use a dedicated MAF sensor cleaner spray (available in every country). Rinse the sensor element to maintain accurate airflow readings. Part of routine intake system maintenance."
  - title: "Snorkel watertightness test"
    summary: "Use the same inflatable plug in the snorkel inlet. Connect smoke generator and observe where smoke escapes. The air box is not fully watertight by design -- the air filter helps seal it. Test with the air filter installed for accurate results."
---

## Summary

Christian builds a DIY smoke generator from a repurposed canoe container, baby oil, an oil lamp wick, and resistance wire powered by a 12V car battery. Combined with an inflatable intake plug (32 EUR, part number X01C100MV), he performs an air intake leak test on the Discovery 3 TDV6 2.7L. The test reveals two significant leaks: a failed rubber grommet between the upper and lower air intake tube sections (causing the MAF sensor to read incorrectly and produce power loss), and a leak in the oil separator area. The intake tube gasket looks visually perfect but has lost its interference fit after 15 years. Even 5-10% air leakage past the MAF sensor is enough to cause measurable power loss on this engine. A secondary snorkel watertightness test shows the air box leaks from underneath (the air filter is needed for proper sealing), and a broken snorkel diaphragm is found and temporarily patched.

## Notes

- The inflatable plug (part X01C100MV, ~32 EUR on Amazon) is far superior to the rubber glove method -- it creates actual pressure, and the Discovery 4 workshop manual uses the same type of plug.
- DIY smoke generator total cost: approximately 40 EUR (container + plug + baby oil + resistance wire).
- The intake tube rubber grommet between upper and lower sections is almost never replaced but degrades over 15 years, losing interference fit while looking visually intact.
- Even 5-10% air bypass past the MAF sensor causes measurable power loss on the TDV6.
- Smoke should travel through the entire intake, past open exhaust valves, through the sump breather, and exit at the oil filler cap if the system is intact.
- The oil separator leak will be addressed during glow plug replacement (requires oil separator removal).
- Snorkel installation increased fuel consumption by 0.8-1.0 L/100km; root cause unknown.
- The air box is not watertight by design -- the air filter must be installed as it provides sealing function.
- Always use a dedicated MAF sensor cleaner spray to maintain accurate readings.
- Resistance wire length must be calibrated so that 12V current generates enough heat to vaporize baby oil without burning the wick.
- Regulate air pressure to minimum (~0.1 bar) to avoid blowing anything up in the intake system.
