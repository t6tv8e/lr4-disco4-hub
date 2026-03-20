---
title: "Activating the Headlamp DRL function with IID tool on Land Rover Discovery 4 / LR4"
slug: /videos/enable-drl-daytime-running-lights-iid-d4/
content_type: video
youtube_id: DcSazMGpLuM
channel: powerfulukltd
summary: "Step-by-step guide to enabling the daytime running light (DRL) function on a Discovery 4 using the GAP Diagnostics IID tool, with details on CCF configuration options and the different DRL behaviour on xenon vs halogen headlights."
transcript_status: summarized
confidence: single-source
vehicles:
  - model: Discovery 4
    engine: ""
tags:
  - DRL
  - daytime-running-lights
  - CCF
  - IID-tool
  - headlights
  - xenon
  - configuration
  - LED-signature
guide_mentions:
  - candidate_guide: enable-drl-via-iid-tool-d4
    summary: "How to enable the daytime running light function on a Discovery 4 via CCF configuration using the IID tool."
    parts:
      - name: GAP Diagnostics IID tool
        brand: GAP Diagnostics
        part_number: ""
        note: "Plugs into OBD2 port under the dash"
      - name: Battery charger
        brand: ""
        part_number: ""
        note: "Essential for CCF programming to avoid bricking the ECU"
      - name: Xenon headlight with LED signature strip
        brand: ""
        part_number: ""
        note: "DRL illuminates the LED signature strip on xenon; side light element on halogen"
    costs: []
    notes:
      - "Navigate to Configuration > Complete List on the IID tool; DRL option is approximately a quarter of the way down"
      - "Multiple DRL options: Standard, Scandinavian, and Canadian — select Standard for UK/general use"
      - "After upload: switch ignition off, start engine, stop it, restart for changes to take effect"
      - "With xenon headlights: LED signature strip illuminates automatically when engine starts"
      - "With halogen headlights: side light element illuminates instead"
      - "When side lights are switched on manually, the DRL dims in intensity for proper night-time brightness management"
      - "DRL does not dim when the indicator is activated"
      - "Always connect a battery charger before uploading CCF changes"
      - "Multiple CCF changes can be batched and uploaded simultaneously"
      - "Other configurable options in the same area: headlamp wash, three-flash turn signals, follow-me-home, reverse flash confirm"
      - "This is part 2 of a headlight upgrade series; part 1 covered halogen-to-xenon swap and CCF xenon configuration"
      - "DRL feature works on both halogen and xenon headlights, just with different elements illuminated"
---

## Summary

This video demonstrates how to enable the daytime running light (DRL) function on a Discovery 4 using the GAP Diagnostics IID tool. The process involves connecting the IID tool to the OBD2 port, navigating to the CCF configuration complete list, setting the DRL option to "standard active," and uploading the changes. After an ignition cycle, the DRL function activates automatically when the engine is started, lighting the LED signature strip on xenon headlights or the side light element on halogen headlights.
