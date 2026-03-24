---
title: "Land Rover Discovery 3 / LR3 - Is the diesel heater (FBH) any good?"
slug: /videos/discovery-3-diesel-heater-fbh-review/
content_type: video
youtube_id: y4R7oWn7aaM
channel: LR TIME
published_at: ""
summary: "Testing the Discovery 3's fuel-burning heater at -11 degrees C reveals it works for preheating the engine and cabin but is rendered practically useless by complex scheduling requirements and a CAN bus software fault that blocks automatic heater operation after remote activation."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: ""
    engine: 2.7 TDV6
    market: Europe
tags:
  - fuel-burning-heater
  - fbh
  - cold-start
  - cold-weather
  - webasto
  - can-bus
  - heating
  - winter
issue_mentions:
  - candidate_issue: fbh-flame-detected-fault
    report_status: diagnosed
    summary: "After using the Webasto remote timer to preheat the Discovery 3, the engine management detects residual heat and throws a 'Flame Detected Before Normal Use' fault that blocks automatic heater operation during driving. The fault does not clear automatically and requires manual OBD2 clearing."
    symptoms:
      - diesel heater does not start automatically during driving after remote preheat session
      - temperature gauge never reaches mid-range during normal driving
    diagnosis:
      - fault code 'Flame Detected Before Normal Use' triggered by CAN bus signal confusion
      - external remote controllers (Webasto timer) confuse signals on the vehicle CAN bus
      - fault does not self-clear
    fixes:
      - manual OBD2 fault code clear using Land Rover diagnostics
    parts: []
    costs: []
    notes:
      - "Most aftermarket remote heater controllers use the same signal method making this fault likely common"
      - "After manual fault clear the hardware works correctly: glow plug activates, combustion air blower and fuel pump operate"
      - "The Discovery 3 CAN bus architecture was never designed for external heater controllers"
  - candidate_issue: fbh-scheduling-impracticality
    report_status: documented
    summary: "The Discovery 3 fuel-burning heater requires the vehicle to be in sleep mode (2+ minutes after locking) before remote activation, runs for a maximum of 30 minutes, and has no ability to run interior blowers. Even pulling the door handle wakes the car and kills the heater."
    symptoms:
      - heater cannot be started unless car is in sleep mode
      - cabin fan does not run during remote heating
    diagnosis:
      - sleep mode requires 2+ minutes after locking (indicated by flashing red dash light)
      - pulling door handle wakes car and immediately stops heater
      - no programmed ability to run interior blowers via diesel heater on D3
      - maximum remote run time is 30 minutes
    fixes: []
    parts: []
    costs: []
    notes:
      - "Car effectively dictates your schedule rather than the other way around"
      - "Timer must be programmed the evening before"
      - "Arrive too early and you wait in the cold; arrive too late and the car cools down again"
guide_mentions:
  - candidate_guide: fbh-cold-start-comparison
    summary: "Side-by-side comparison of Discovery 3 cold starts at -11 degrees C with and without diesel heater preheating. Without preheating: loud rattling and shaking. With 30-minute preheat: completely smooth and quiet startup with warm cabin air."
    parts:
      - name: Webasto remote timer
    costs: []
    notes:
      - "Cabin heating is passive only on D3 since interior fans do not run"
      - "When engine starts, cold coolant mixes with pre-warmed coolant and drops gauge to cold but recovers much faster than standard cold start"
      - "The heater circulates coolant around the engine block and heat exchanger but not through the radiator"
      - "Cannot be used for overnight cabin heating while sleeping in the vehicle"
      - "For roof tent camping in freezing temperatures a Chinese aftermarket diesel heater mounted to roof rack is a better solution"
      - "Discovery 4 handles diesel heater differently; see Powerful UK channel for D4-specific videos"
---

## Summary

Christian and Vera test the Discovery 3's fuel-burning heater (FBH) at -11 degrees C, comparing cold starts with and without the 30-minute Webasto remote preheat. The preheated start was dramatically smoother and quieter with warm cabin air already present, proving the hardware works. However, the system is rendered practically useless by three problems: the vehicle must be in sleep mode for 2+ minutes before remote activation, there is no programmed ability to run cabin blowers during heating, and most critically, using the remote timer causes a CAN bus fault ("Flame Detected Before Normal Use") that blocks automatic heater operation during subsequent driving and requires manual OBD2 clearing. The fundamental issue is that the Discovery 3's CAN bus was never designed for external heater controllers.

## Notes

- Sleep mode is indicated by a flashing red dash light; even pulling the door handle wakes the car and kills the heater
- The coolant pump circulates through the engine block and heat exchanger but not the radiator
- The heater cannot be used for overnight cabin heating while sleeping in the vehicle
- The Discovery 4 handles the diesel heater differently
- For camping in freezing temperatures, a standalone Chinese aftermarket diesel heater is recommended over the factory FBH
