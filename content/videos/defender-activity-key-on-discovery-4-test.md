---
title: "Can we add the new DEFENDER L663 activity Key to our Land Rover Discovery 4 ?"
slug: /videos/defender-activity-key-on-discovery-4-test/
content_type: video
youtube_id: hBIgp3QQ5zE
channel: powerfulukltd
summary: "Tests whether the Defender L663 activity key (watch-format fob) can be paired to a Discovery 4, with a definitive negative result — the D4's body control module does not accept the activity key's coding."
transcript_status: summarized
confidence: single-source
vehicles:
  - model: Discovery 4
tags:
  - activity-key
  - key-pairing
  - IID-tool
  - Defender-L663
  - key-fob
  - OBD2
  - body-control-module
  - compatibility
guide_mentions:
  - candidate_guide: defender-activity-key-on-discovery-4
    summary: "Attempted pairing of the Defender L663 activity key to a Discovery 4 via IID diagnostic tool — confirmed incompatible on pre-facelift D4."
    parts:
      - name: Land Rover Defender L663 activity key (watch format)
        brand: Land Rover
        part_number: ""
        note: "434 MHz version for UK/Europe; 315 MHz for US — check part number suffix"
      - name: GAP IID diagnostic tool
        brand: GAP
        part_number: ""
        note: "Connects via OBD2 port, controlled via phone app over Bluetooth"
      - name: Activity key charging dock
        brand: Land Rover
        part_number: ""
        note: "Magnetic dock with gold-plated contacts"
    costs: []
    notes:
      - "Result: activity key does NOT pair with Discovery 4 (pre-facelift) — confirmed failed"
      - "IID tool path: Service & Test > Body Control Module > Add Key"
      - "The add key routine requires one functional key present and ignition on (not started)"
      - "Keep car on battery charger during key programming — battery dying during a write operation could cause problems"
      - "IID tool returned 'process successful but key not accepted'"
      - "The activity key frequency matters: 434 MHz for UK/Europe, 315 MHz for US"
      - "Land Rover had supply issues; their own supplier sent wrong frequency keys causing initial confusion"
      - "Discovery 5 activity key was first-generation (required main key in glovebox, proximity detection)"
      - "Defender activity key is second-generation: fully standalone watch with lock/unlock"
      - "May work on Range Rover Sport which shares the same KVM as the Defender"
---

## Summary

This video tests whether the new Land Rover Defender L663 activity key (a watch-format key fob) can be paired to a Discovery 4. The activity key is a second-generation product that shrinks full remote control functionality into a wristwatch form factor. Using a GAP IID diagnostic tool connected via OBD2, the presenter attempts the pairing. The result is negative: the activity key cannot be paired to the Discovery 4 (pre-facelift). The IID tool's "add key" routine executes but returns "process successful but key not accepted," indicating the D4's body control module does not recognize the activity key's coding.
