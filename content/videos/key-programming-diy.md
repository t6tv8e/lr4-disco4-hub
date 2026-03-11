---
title: "DIY Land Rover Key Programming Guide That Will Save You MONEY!"
slug: /videos/key-programming-diy/
content_type: video
youtube_id: 8KgceoHoNLw
channel: Not That Kind of a Channel
summary: "Programming a spare key to a 2012 Discovery 4 using the GAP IID Tool, including troubleshooting the E5 ECU compatibility error with GAP support."
transcript_status: summarized
confidence: single-owner-report
vehicles:
  - model: Discovery 4
    years: "2012"
    engine: 3.0 TDV6
    market: Europe
tags:
  - key-programming
  - gap-iid-tool
  - bcm-coding
  - ecu-flash
  - diy
guide_mentions:
  - candidate_guide: key-programming-diy
    summary: "Programming an eBay-sourced spare key to a Discovery 4 using the IID Tool's BCM key programming function, including resolving an E5 ECU compatibility error with GAP support."
    parts:
      - name: Replacement key fob
        brand: ""
        part_number: ""
        note: "Purchased on eBay"
    costs:
      - item: Replacement key fob
        amount: "€15-€20"
      - item: Dealer key programming (for reference)
        amount: "~€400"
    notes:
      - "Original working key must be present during the procedure"
      - "IID Tool path: Service Test > BCM Body Control > Add a New Key"
      - "Tool revealed 2 keys were previously programmed but only 1 valid key detected"
      - "First attempt failed with E5 Operation Failed error due to ECU compatibility issue"
      - "Fix: email gapteam@gap-diagnostic.com with ECU info exported from the IID Tool's ECU Info menu"
      - "GAP support responded within about one hour with a custom IID Tool firmware update"
      - "After update: flash the KBM (Key Body Module) ECU via ECU Flash in the app (~20 seconds)"
      - "Re-run key programming routine; when prompted press and hold unlock button on new key"
      - "Process includes ECU initialization (~15 seconds) and fault-clearing cycle"
      - "Final step: start engine, turn off, restart to confirm new key is fully active"
  - candidate_guide: gap-iid-tool-overview
    summary: "GAP IID Tool used for key programming, ECU flashing, and fault clearing, with responsive support from the GAP team to resolve compatibility issues."
    parts: []
    costs: []
    notes:
      - "IID Tool costs ~€550, connects via Bluetooth to iOS/Android app"
      - "Compared to iCarSoft at ~€150 which only handles fault reading/clearing, battery registration, and service resets"
      - "Tool plugs into OBD2 port under the steering wheel"
---

## Summary

Peter programs a spare key (purchased on eBay for 15-20 euros) to his 2012 Discovery 4 using the GAP IID Tool, avoiding the roughly 400 euros a dealer would charge. The process hits an E5 error on the first attempt due to an ECU compatibility issue, which GAP support resolves within an hour by providing a custom firmware update. After flashing the KBM ECU and re-running the routine, the new key successfully locks, unlocks, and starts the car.
