---
title: "How to program new style key remote on Land Rover Discovery 4 LR4 using IID"
slug: /videos/program-new-key-remote-d4-iid/
content_type: video
youtube_id: CtxUaD8nMOQ
channel: powerfulukltd
summary: "Documents an attempt to program a cheaper aftermarket Evoque-style key fob to a Discovery 4 using the IID diagnostic tool, including troubleshooting repeated failures before ultimately succeeding."
transcript_status: summarized
confidence: single-source
vehicles:
  - model: Discovery 4
tags:
  - key-programming
  - iid-tool
  - key-fob
  - remote
  - keyless-start
  - spare-key
  - diagnostics
guide_mentions:
  - candidate_guide: d4-program-spare-key-iid
    summary: "Step-by-step process for adding an aftermarket Evoque-style key fob to a Discovery 4 using the IID diagnostic tool's add key function."
    parts:
      - name: Aftermarket Evoque-style key fob
        brand: ""
        part_number: ""
        note: "Approx 14 GBP on eBay; not genuine but functional"
      - name: IID diagnostic tool
        brand: GAP Diagnostics
        part_number: ""
        note: ""
      - name: Mechanical key blank
        brand: ""
        part_number: ""
        note: "May need separate purchase; must be cut to match existing key"
    costs:
      - amount: 14
        currency: GBP
        type: purchase
        note: "Aftermarket Evoque-style key fob from eBay"
    notes:
      - "IID tool path: Service and Test > Body Control > Add Key"
      - "Check how many keys are programmed via Body Control > Check How Many Keys"
      - "The add key routine automatically shuts off the engine during programming, then restarts"
      - "When prompted, press and hold the unlock button on the new key"
      - "Initial attempts may fail repeatedly -- persistence and multiple retries are important"
      - "Always run the IID tool with the engine running outdoors (carbon monoxide risk)"
      - "Ensure battery is well charged before attempting key programming"
      - "D4 uses keyless start so key only needs to be sensed, not physically inserted"
      - "Every D4 key contains both an electronic transponder and a hidden mechanical key blade for emergency door entry"
      - "Aftermarket key blade must be cut to match your existing key"
---

## Summary

This video documents an attempt to program a cheaper, newer-style (Evoque-style) key fob to work with a Discovery 4 using the IID diagnostic tool. The presenters purchased an aftermarket key from eBay for around 14 GBP and attempted to add it as a third key using the IID tool's "add key" function found under Service > Body Control.

The process did not go smoothly -- the initial programming attempts repeatedly failed with "operation failed" and "key not accepted" errors. However, after multiple retries and stepping away briefly, the key ultimately started working for both locking/unlocking and starting the engine. The IID tool confirmed three keys were then programmed to the vehicle.
