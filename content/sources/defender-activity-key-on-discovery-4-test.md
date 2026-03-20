---
title: "Can we add the new DEFENDER L663 activity Key to our Land Rover Discovery 4 ?"
content_type: video
youtube_id: hBIgp3QQ5zE
channel: powerfulukltd
transcript_status: auto-transcribed
confidence: single-source
vehicles:
  - model: Discovery 4
    engine: ""
tags: [activity-key, key-pairing, IID-tool, Defender-L663, key-fob, OBD2, body-control-module, compatibility]
---

## Summary

This video tests whether the new Land Rover Defender L663 activity key (a watch-format key fob) can be paired to a Discovery 4. The activity key is a second-generation product that shrinks full remote control functionality (lock/unlock) into a wristwatch form factor -- an improvement over the Discovery 5's first-generation activity key which required the main key fob to be placed in the glovebox and used a proximity detector. The presenter uses a GAP IID diagnostic tool connected via OBD2 to attempt the pairing.

The result is negative: the activity key cannot be paired to the Discovery 4 (pre-facelift). The IID tool's "add key" routine in the Body Control Module executes but returns "process successful but key not accepted." The presenter notes that the coding routine on newer cars is likely different from the older Discovery 4's system. A previous attempt also failed because Land Rover's supplier had shipped the wrong frequency key (315 MHz US frequency instead of 434 MHz UK/European frequency), adding to the confusion. The presenter suggests the activity key might work on vehicles that share the same KVM (Key Vehicle Module) as the Defender, such as the Range Rover Sport.

## Key Points

- The Defender L663 activity key does NOT pair with the Discovery 4 (pre-facelift) -- confirmed failed
- The activity key frequency matters: 434 MHz for UK/Europe, 315 MHz for US -- check the part number suffix
- Land Rover had supply issues with these keys and their own supplier sent the wrong frequency, causing initial confusion
- The IID diagnostic tool is used for key pairing: navigate to Service & Test > Body Control Module > Add Key
- The "add key" routine requires one functional key present and the ignition turned on (not started)
- Keep the car on a battery charger during key programming -- if the battery dies during a write operation, you could have problems
- The IID tool returned "process successful but key not accepted" -- the D4's body control module does not recognize the activity key's coding
- The Discovery 5 activity key was first-generation: required main key in glovebox, proximity detection at the boot "D" badge
- The Defender activity key is second-generation: fully standalone watch with lock/unlock functionality
- The activity key charges via a magnetic dock with gold-plated contacts on the back
- The presenter suggests trying on a Range Rover Sport which may share the same KVM as the Defender

## Parts Mentioned

- Land Rover Defender L663 activity key (watch format) -- 434 MHz version for UK/Europe
- GAP IID diagnostic tool (connects via OBD2 port, controlled via phone app)
- Activity key charging dock (magnetic)

## Notes

- This is a viewer-requested experiment -- the presenter was not confident it would work going in
- The failed result is definitive for Discovery 4 pre-facelift models
- The presenter had previously fitted the late-style key fob to the D4 successfully (separate video)
- The IID tool's GAP diagnostics app runs on a phone and communicates with the tool via Bluetooth
- Supply of activity keys from Land Rover has been difficult/intermittent
