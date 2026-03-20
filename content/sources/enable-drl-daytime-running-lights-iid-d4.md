---
title: "Activating the Headlamp DRL function with IID tool on Land Rover Discovery 4 / LR4"
content_type: video
youtube_id: DcSazMGpLuM
channel: powerfulukltd
transcript_status: auto-transcribed
confidence: single-source
vehicles:
  - model: Discovery 4
    engine: ""
tags: [DRL, daytime-running-lights, CCF, IID-tool, headlights, xenon, configuration, LED-signature]
---

## Summary

This video demonstrates how to enable the daytime running light (DRL) function on a Discovery 4 using the GAP Diagnostics IID tool. The car is a pre-facelift D4 that has been upgraded with a facelift bumper and one xenon headlight (the other side retains halogen). The CCF had already been updated to tell the car it has xenon headlights (covered in a previous video), and this video focuses specifically on activating the DRL feature.

The process involves connecting the IID tool to the OBD2 port, navigating to the CCF configuration complete list, finding the DRL option (about a quarter of the way down), setting it to "standard active," and uploading the changes. After an ignition cycle, the DRL function activates automatically when the engine is started, lighting the LED signature strip on xenon headlights or the side light element on halogen headlights.

## Key Points

- The DRL option is found in the IID tool under Configuration > Complete List, approximately a quarter of the way down
- Multiple DRL options exist: Standard, Scandinavian, and Canadian — select "Standard" for UK/general use
- Other configurable options visible in the same area: headlamp wash, three-flash turn signals, follow-me-home, reverse flash confirm (lock/unlock flash)
- Always connect a battery charger before uploading CCF changes to avoid bricking the ECU
- After upload: switch ignition off, start engine, stop it, restart it for changes to take effect
- With DRL enabled and xenon headlights fitted: the LED signature strip illuminates automatically when the engine starts
- With DRL enabled and halogen headlights: the side light element illuminates instead
- When side lights are switched on manually, the DRL dims in intensity (proper brightness management to avoid dazzle at night)
- The DRL does not dim when the indicator is activated
- Multiple CCF changes can be batched and uploaded simultaneously if you know what you are doing

## Parts Mentioned

- GAP Diagnostics IID tool (plugs into OBD2 port under the dash)
- Xenon headlight with LED signature strip
- Battery charger (essential for CCF programming)

## Notes

- This is part 2 of a headlight upgrade series; part 1 covered the halogen-to-xenon swap and CCF xenon configuration
- The IID tool briefly takes control of the car's systems during the upload process (radio, heater controls cycle) which the presenter describes as "nerve-wracking" but normal
- The presenter keeps the tailgate open during the process as a safety precaution against carbon monoxide if the engine were to start
- The DRL feature works on both halogen and xenon headlights, just with different elements illuminated
