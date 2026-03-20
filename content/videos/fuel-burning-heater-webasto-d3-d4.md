---
title: "Land Rover Discovery 3 & 4 / Range Rover FBH heater Webasto Thermo Top V (Fuel Burning Heater)"
slug: /videos/fuel-burning-heater-webasto-d3-d4/
content_type: video
youtube_id: mIs5s7JMsTg
channel: powerfulukltd
summary: "In-depth guide to the Webasto Thermo Top V fuel burning heater on Discovery 3 and 4, covering how it works, the full start-up sequence, using the IID tool for diagnostics and live values, and enabling timed climate via CCF programming."
transcript_status: summarized
confidence: single-source
vehicles:
  - model: Discovery 3
    engine: ""
  - model: Discovery 4
    engine: ""
tags:
  - FBH
  - webasto
  - fuel-burning-heater
  - park-heater
  - timed-climate
  - auxiliary-heater
  - CCF
  - IID-tool
  - diagnostics
  - heating
guide_mentions:
  - candidate_guide: fuel-burning-heater-operation-and-diagnostics
    summary: "How the Webasto Thermo Top V fuel burning heater works, its start-up sequence, and how to use the IID tool for diagnostics, live values, and fault codes."
    parts:
      - name: Webasto Thermo Top V
        brand: Webasto
        part_number: ""
        note: "Available in diesel and petrol versions; draws fuel from main tank"
      - name: GAP Diagnostics IID tool
        brand: GAP Diagnostics
        part_number: ""
        note: "Used for live values, check operation, fuel priming, and fault code reading"
      - name: Fuse 28
        brand: ""
        part_number: ""
        note: "Large purple wire/fuse providing main power to the FBH; pull for quick fault reset"
    costs: []
    notes:
      - "Start-up sequence: glow plug heats up, diesel atomised and injected, combustion begins (initial smoke normal), water pump activates, hot water circulates to cabin"
      - "FBH activates automatically when external temperature is below approximately 5 degrees Celsius (snowflake symbol on dash)"
      - "Takes roughly 10-12 minutes before the cabin starts to feel warm; initially only windscreen vents blow"
      - "Significant smoke is normal on first start-up or after long periods of non-use"
      - "IID live values: fuel pump status, glow plug status, in-car temperature, operating voltage, water pump on/off, external temperature"
      - "IID can perform check operation to run the heater and fuel priming routine"
      - "Fuel priming can cause excessive smoke on next start-up"
      - "Webasto communicates via W-bus (single-wire pseudo-LIN protocol) and CAN bus"
      - "Early D3s have a red W-bus wire; later D3s may not; D4s reportedly do"
  - candidate_guide: timed-climate-ccf-enable-disable
    summary: "How to enable or disable the timed climate feature via CCF programming using the IID tool."
    parts:
      - name: GAP Diagnostics IID tool
        brand: GAP Diagnostics
        part_number: ""
        note: ""
      - name: Battery charger
        brand: ""
        part_number: ""
        note: "Always connect before reflashing any ECU"
    costs: []
    notes:
      - "Navigate to Car Configuration > HVAC > Timed Climate on the IID tool"
      - "Always connect a battery charger before reflashing any ECU"
      - "An ignition cycle (on/off/on) may be needed after CCF changes take effect"
      - "Timed climate allows two preset on-times; heater runs for exactly 30 minutes per cycle"
      - "Same menu also shows options for heater call start (remote start, requires additional hardware)"
      - "Be cautious if parking in a garage due to exhaust fumes and smoke"
issue_mentions:
  - candidate_issue: fbh-smoke-on-startup
    report_status: preventive-advice
    summary: "The fuel burning heater produces significant smoke on first start-up or after long idle periods, which is normal behaviour but can be alarming."
    symptoms:
      - significant smoke from under the car on FBH start-up
      - smoke especially heavy after long periods of non-use or after fuel priming
    diagnosis:
      - normal combustion behaviour during initial start-up phase
      - fuel priming routine purges fuel through the system causing extra smoke
    fixes: []
    parts: []
    costs: []
    notes:
      - "Pull fuse 28 to perform a quick power reset if the FBH is misbehaving"
      - "Activating timed climate when not needed will still produce smoke from under the car"
      - "Range Rover Sport uses the same timed climate menu system"
---

## Summary

An in-depth introduction to the Webasto Thermo Top V fuel burning heater (FBH) fitted to Discovery 3 and Discovery 4 models. The presenter explains how the unit works, demonstrates it starting up and heating the cabin via the timed climate feature, uses the GAP Diagnostics IID tool to read live values and fault codes, and shows how to enable or disable the timed climate option via CCF programming. The video covers the full start-up sequence including the initial smoke output that is normal especially on first winter start-up, and demonstrates the complete 30-minute heating cycle.
