---
title: "Crankshaft Sensor and Trigger Wheel — Fault P0336 / S4-Ep50"
slug: /videos/crankshaft-sensor-trigger-wheel-p0336/
content_type: video
youtube_id: NQLyuuLigfQ
channel: LR TIME
published_at: ""
summary: "Diagnosing and repairing a P0336 crankshaft position sensor fault on a Discovery 3 TDV6 using oscilloscope analysis, revealing a broken aftermarket trigger wheel as the root cause — requiring full transmission removal to replace."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
tags:
  - crankshaft-sensor
  - trigger-wheel
  - p0336
  - limp-mode
  - oscilloscope
  - diagnostics
  - transmission-removal
  - oem-vs-aftermarket
  - tdv6
issue_mentions:
  - candidate_issue: crankshaft-trigger-wheel-failure
    report_status: resolved
    summary: "Aftermarket (Chinese) trigger wheel developed a physical break causing a crippled extra pulse at approximately 34 peaks into the 58-pulse revolution, triggering P0336 and permanent limp mode."
    symptoms:
      - vehicle in limp mode (reduced power, limited speed)
      - fault code P0336-66 (crankshaft position sensor circuit range/performance — too many transitions/pulses)
      - engine still running but severely limited
    warning_messages:
      - "Engine limp mode"
    fault_codes:
      - "P0336-66"
    diagnosis:
      - oscilloscope waveform analysis showed a crippled extra pulse at ~34 peaks into the 58-pulse revolution
      - healthy zero pulse (missing tooth gap) was present and correctly twice the width of normal pulses
      - crankshaft position sensor signal was otherwise correct — sensor itself was not faulty
      - physical inspection of trigger wheel revealed a piece had broken off
      - aftermarket trigger wheel installed during budget engine rebuild in 2021 (COVID-era parts shortage)
    fixes:
      - remove automatic transmission and transfer case to access flywheel area
      - replace aftermarket trigger wheel with quality part using precision tooling
      - install new Bosch crankshaft position sensor
      - verify repair with oscilloscope waveform check
    parts:
      - name: Trigger wheel
        brand: ""
        part_number: ""
        note: "Avoid cheap aftermarket; the original Chinese part became brittle and broke"
      - name: Crankshaft position sensor
        brand: "Bosch"
        part_number: ""
        note: "Pre-tested on a lathe before installation; requires 4.7k ohm pull-up resistor to 5V for bench testing"
    costs: []
    outcome: "Clean 58-pulse waveform with proper zero pulse confirmed on oscilloscope; P0336 fault cleared; vehicle running normally"
    notes:
      - "Many Discovery 3s may be stranded or misdiagnosed due to failed cheap aftermarket trigger wheels"
      - "Do not replace the sensor without oscilloscope diagnosis first — the sensor is often fine"
      - "This is the second failed aftermarket trigger wheel the presenter has encountered"
      - "Automatic transmission vehicles require the neutral switch signal to crank — discovered when test start failed with transmission disconnected"
  - candidate_issue: prop-shaft-center-bearing-failure
    report_status: reported
    summary: "Center bearing on the prop shaft found completely disintegrated during transmission removal — discovered as incidental finding."
    symptoms:
      - center bearing disintegrated
    diagnosis:
      - found during transmission removal for trigger wheel replacement
    fixes:
      - replace center bearing (noted as easy to get fixed in Africa where the vehicle was heading)
    parts: []
    costs: []
    notes: []
guide_mentions:
  - candidate_guide: crankshaft-sensor-oscilloscope-diagnosis
    summary: "How to diagnose crankshaft position sensor faults using an oscilloscope: tap into the wiring harness at the sensor connector with puncture probes on signal and ground for both crankshaft and camshaft sensors, then read the waveform to verify 58 clean transitions per revolution and a proper zero pulse."
    parts:
      - name: Oscilloscope with puncture probes
        brand: ""
        part_number: ""
        note: "4 probes total: signal + ground on crankshaft sensor, signal + ground on camshaft sensor"
    costs: []
    notes:
      - "Zero pulse must be exactly twice the width of regular pulses"
      - "Count 58 transitions between zero pulses — any extra or missing pulse indicates trigger wheel damage"
      - "Wiring colors documented in the video for crankshaft and camshaft sensor connections"
      - "This diagnosis must be done before replacing any parts to avoid unnecessary work"
  - candidate_guide: trigger-wheel-replacement
    summary: "Precision trigger wheel installation using custom-machined tools: a high-precision angular gauge (plus/minus 0.1 degree), a seating tool with a 3.6mm depth step to prevent over-insertion, installed within the factory tolerance of plus/minus 0.3mm axially."
    parts:
      - name: Trigger wheel
        brand: ""
        part_number: ""
        note: "Avoid cheap aftermarket parts — they become brittle"
      - name: Crankshaft position sensor (Bosch)
        brand: "Bosch"
        part_number: ""
        note: "Gap must be 0.5-1.2mm from trigger wheel; torqued to 4 Nm"
    costs: []
    notes:
      - "Standard Chinese installation tool has too much angular slop and dowel pin play"
      - "Custom seating tool prevents trigger wheel from being installed too deep"
      - "Sensor requires 4.7k ohm pull-up resistor to 5V for bench testing — without it output reads only ~1V"
      - "Flywheel bolt torque: 50 Nm with locking pin, then 2 x 45 degrees with minimum torque of 80 Nm (set to 100 Nm)"
      - "Torque converter bolts: 2 x 45 Nm"
      - "6HP transmission fluid level check: fill until light dribble at filler plug, temperature must be above 30 degrees C"
---

## Summary

Fabian's Discovery 3 arrives on a tow truck in limp mode with fault code P0336-66 (crankshaft position sensor circuit range/performance). Rather than blindly replacing the sensor — a common and often fruitless approach — Christian performs a proper oscilloscope diagnosis by tapping into the crankshaft and camshaft sensor wiring harnesses with puncture probes.

The waveform analysis reveals the crankshaft sensor signal is mostly correct, with a proper zero pulse, but a crippled extra pulse appears at approximately 34 peaks into what should be a clean 58-pulse revolution. This points directly to a damaged trigger wheel rather than a faulty sensor. Physical inspection after removing the automatic transmission confirms the aftermarket (Chinese) trigger wheel, installed during a budget engine rebuild in 2021, has a piece physically broken off — the material had become brittle.

The replacement uses custom precision tooling: a high-accuracy angular gauge (plus/minus 0.1 degree) and a depth-limited seating tool (3.6mm step) to install the new trigger wheel within factory tolerances. A new Bosch crankshaft position sensor is installed with a 0.5-1.2mm gap at 4 Nm. Post-repair oscilloscope verification confirms a clean 58-pulse waveform with no spurious pulses.

## Notes

- This is the second failed aftermarket trigger wheel the presenter has encountered in a small sample of engines
- The transmission must be fully removed to access the trigger wheel — a major job involving prop shafts, crossmember, fuel tank lowering, and bell housing separation
- Automatic transmission vehicles will not crank without the neutral switch signal connected
- The prop shaft center bearing was found completely disintegrated during the teardown — an incidental discovery
- Test drive confirmed normal operation with no leaks at 67 degrees C oil temperature
