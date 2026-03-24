---
title: "Drive Line Vibrations - ZF 6HP26 Repair - Land Rover Discovery 3"
slug: /videos/driveline-vibrations-zf-6hp26-repair/
content_type: video
youtube_id: QrwjnvmYXcM
channel: LR TIME
published_at: ""
summary: "Diagnosing and repairing driveline vibration on a Discovery 3 caused by a bouncing prop shaft center bearing and failed ZF 6HP mechatronic unit seals, with high-speed camera diagnosis, seal replacement, and transmission adaptation reset procedure."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: ""
    engine: 2.7 TDV6
    market: Europe
tags:
  - driveline-vibration
  - ZF-6HP26
  - mechatronic-seals
  - prop-shaft
  - center-bearing
  - transmission
  - torque-converter
issue_mentions:
  - candidate_issue: prop-shaft-center-bearing-bounce
    report_status: confirmed-fix
    summary: "Prop shaft center bearing was loose and bouncing, confirmed by 200fps high-speed camera footage correlating directly with cabin vibration."
    symptoms:
      - driveline vibration felt in cabin
      - center bearing visibly bouncing on high-speed camera footage
    diagnosis:
      - high-speed camera mounted in driveline tunnel filming at 200fps confirmed center bearing physically bouncing
    fixes:
      - two holes drilled into center bearing housing and steel zip tie used to secure the bearing
      - vibration eliminated on test drive after fix
    parts: []
    costs: []
    notes:
      - "Described as an interim solution but likely permanent"
  - candidate_issue: zf-6hp-mechatronic-seal-failure
    report_status: confirmed-fix
    summary: "Degraded rubber lip seals on the ZF 6HP mechatronic unit caused torque converter to remain in regulated/slipping mode instead of locking up, resulting in RPM hunting and shuddering."
    symptoms:
      - torque converter clutch never fully locking (remained in regulated/slipping mode per OBD data)
      - RPM hunting
      - shuddering during driving
      - jerky shifting
    diagnosis:
      - OBD data showed torque converter clutch in regulated mode when it should have been locked
      - multiple rubber lip seals on mechatronic unit visibly degraded with lips rolled inward
      - transmission magnet showed no metallic chips (no internal gear damage)
    fixes:
      - replaced degraded mechatronic unit lip seals with new seals
      - cleared ZF 6HP transmission adaptation values via diagnostic tool
      - refilled transmission fluid (approximately 6 bottles) to overflow specification
      - shuddering completely eliminated after repair
    parts:
      - name: ZF 6HP mechatronic unit seal kit
        brand: ""
        part_number: ""
        note: "Multiple rubber lip seals; new seals should sit properly proud of the housing"
      - name: ZF transmission fluid
        brand: ""
        part_number: ""
        note: "Approximately 6 bottles used to refill sealed system"
    costs: []
    notes:
      - "Mechatronic unit bolts torqued to 9-10 Nm"
      - "Oil pan removed together with mechatronic unit as combined assembly (non-standard but effective approach)"
      - "One bolt hole was stripped and required drilling out and re-tapping"
      - "Oil temperature must reach 30C (not exceed 50C) before opening fill plug to verify correct level"
      - "All gear positions must be engaged during fill procedure for proper distribution"
      - "Transmission adaptation relearning can take up to one full fuel tank of driving"
      - "Steel oil pan recommended for future 6HP work -- easier to remove than plastic pan"
      - "Slight residual clunking into first gear on uphill attributed to adaptation values still relearning"
guide_mentions:
  - candidate_guide: zf-6hp-mechatronic-seal-replacement
    summary: "Clear adaptation values via diagnostic tool first. Remove oil pan together with mechatronic unit as combined assembly. Inspect seals for rolled lips and degradation. Replace seals, torque mechatronic bolts to 9-10 Nm. Refill closed system until oil drips from overflow plug at 30-50C oil temperature. Cycle through all gear positions during fill. Allow up to one fuel tank of driving for adaptation relearning."
  - candidate_guide: prop-shaft-center-bearing-stabilization
    summary: "Use 200fps high-speed camera to confirm center bearing bounce. Drill two holes in center bearing housing and secure with steel zip tie to eliminate bounce."
---

## Summary

Three mechanics diagnose and repair driveline vibration on a Discovery 3 using two complementary approaches. First, a 200fps high-speed camera mounted in the driveline tunnel confirms the prop shaft center bearing is physically bouncing, which is fixed with a steel zip tie through drilled holes in the bearing housing. Second, OBD data reveals the ZF 6HP torque converter clutch is never fully locking (remaining in regulated/slipping mode), traced to degraded rubber lip seals on the mechatronic unit with lips rolled inward. The oil pan is removed together with the mechatronic unit as a combined assembly, seals are replaced (bolts torqued to 9-10 Nm), and the sealed transmission is refilled until oil drips from the overflow plug at the correct temperature. After clearing adaptation values, shuddering is completely eliminated, with all 6 forward gears plus reverse confirmed functional.

## Notes

- The ZF 6HP transmission is used across many premium vehicles (Land Rover, BMW, Audi, Jaguar) and mechatronic seal failure is a well-known failure mode
- Clearing adaptation values without an oil change is normally inadvisable but was done for diagnostic purposes
- The plastic oil pan common to the 6HP makes removal extremely difficult due to a rear extension tab
- A steel oil pan is recommended for future work despite being more expensive and having reportedly inferior heat dissipation
- The transmission can take up to one full fuel tank of driving to fully rebuild shift adaptation maps after values are cleared
- Turbo actuator rod ball joint was lubricated as a bonus fix using a repurposed AC cleaner bottle spray rig
