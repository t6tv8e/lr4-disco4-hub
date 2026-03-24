---
title: "Land Rover 8HP Shifter Knob Failure - Fuel Burning Heater Upgrade - Discovery 4 / S6 - EP 05"
slug: /videos/8hp-shifter-knob-failure-fbh-upgrade-d4/
content_type: video
youtube_id: isAemA88d7A
channel: LR TIME
published_at: ""
summary: "Covers four practical jobs: diagnosing and fixing a stuck D4 gear selector (often just WD-40), exposing dealership misdiagnosis on a Freelander, windshield replacement prep for TUV inspection, and installing a remote start for the fuel burning heater via GAP tool coding."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
tags:
  - 8hp-transmission
  - shifter-knob
  - gear-selector
  - fuel-burning-heater
  - remote-start
  - telestart
  - gap-tool
  - coding
  - windshield
  - tuv-inspection
  - diy
issue_mentions:
  - candidate_issue: 8hp-gear-selector-stuck-in-park
    report_status: fixed
    summary: "Discovery 4 gear selector stuck in closed/park position due to dirt or cold-stiffened grease; cleared with GAP tool fault clear and WD-40."
    symptoms:
      - gear selector stuck in closed/park position and will not raise
      - dashboard fault for transmission range selector mechanical failure
    diagnosis:
      - GAP tool reads fault 'transmission range selector up and down position control — mechanical failure, actuator stuck'
      - bench test motor and solenoid independently using 9V battery and crocodile clamp leads
      - reverse polarity to reverse motor direction and confirm motor function
    fixes:
      - clear fault code with GAP tool (temporary fix)
      - spray WD-40 into the shift mechanism to free the release mechanism stiffened by cold weather or dried grease
      - swap with a known-good shifter module for definitive diagnosis if fault is intermittent
    parts:
      - name: Shifter module (gear selector unit)
        brand: Land Rover OEM
        part_number: ""
        note: "New unit costs 688 EUR from Land Rover; avoid replacing until DIY diagnosis confirms it is faulty"
    costs:
      - description: New shifter module from Land Rover
        amount: "688 EUR"
      - description: WD-40 fix
        amount: "0 EUR"
    notes:
      - "Common cause is dirt from food debris, pet hair, or water ingress from open sunroof"
      - "The red manual release tab is accessible without removing the water shedder, useful for emergency towing"
      - "Disassembly: remove cup holder insert, water shedder, red security tab, bezel (6 screws), shift module (4 bolts), unplug harness"
      - "9V battery bench test is a standout diagnostic method before purchasing the 688 EUR module"
  - candidate_issue: freelander-turbo-misdiagnosis
    report_status: fixed
    summary: "A dealership installed a 2000 EUR turbocharger unnecessarily on a Freelander; the actual problem was a loose air pipe above the turbo, fixed for zero parts cost."
    symptoms:
      - loss of boost/turbo performance
    diagnosis:
      - visual inspection of air pipes around turbo found a disconnected/loose pipe
    fixes:
      - reconnect and clamp the loose air pipe above the turbo
    parts: []
    costs:
      - description: Unnecessary turbo replacement by dealer
        amount: "2000 EUR"
      - description: Actual fix (reconnect loose pipe)
        amount: "0 EUR"
    notes:
      - "Same workshop also incorrectly installed rear shock absorber upper mounts (causing clunk) and missed four corroded wheel speed sensors (causing ABS activation while driving)"
      - "Independent verification of workshop repairs is essential"
  - candidate_issue: d4-a-pillar-water-leak
    report_status: preventive-advice
    summary: "Water ingress through A-pillar clip holes is a known issue addressed by a Land Rover service bulletin."
    symptoms:
      - water leaks through A-pillar area after windshield replacement
    diagnosis:
      - inspect A-pillar clip mounting holes for missing seals
    fixes:
      - break off the locating post that goes into the A-pillar body hole, then cover the hole with tape to prevent water ingress
      - install correct clips with seals (available from UK suppliers)
    parts:
      - name: A-pillar clips with seals
        brand: ""
        part_number: ""
        note: "Available from UK suppliers; referenced in a Land Rover service bulletin"
    costs: []
    notes:
      - "Remove snorkel and A-pillar trim yourself before handing the car to a glass shop to prevent broken clips"
  - candidate_issue: fbh-remote-start-not-fitted
    report_status: fixed
    summary: "Remote start for the fuel burning heater requires three hardware components and GAP tool CFF coding changes to enable parking heat mode."
    symptoms:
      - no remote start capability for fuel burning heater
    diagnosis:
      - check CFF configuration in GAP tool for FBH settings
    fixes:
      - install antenna, Telestart T91-R receiver (model-specific), and compatible remote (Ford Mondeo remote works)
      - code CFF via GAP tool to enable timed climate, parking heat, and radio call-on-start
    parts:
      - name: Antenna/aerial (generic)
        brand: Generic
        part_number: ""
        note: "~1 EUR from Amazon"
      - name: Telestart T91-R receiver
        brand: Webasto
        part_number: ""
        note: "Must match exact vehicle model; 2016 D4 has specific part number"
      - name: Remote control
        brand: Ford Mondeo compatible
        part_number: ""
        note: "~80 EUR on eBay; Ford Mondeo remote works on Discovery 4"
    costs:
      - description: Generic antenna
        amount: "1 EUR"
      - description: Remote control (eBay)
        amount: "80 EUR"
      - description: GAP Diagnostics licence
        amount: "95 EUR"
    notes:
      - "GAP tool CFF changes: timed climate disabled to enabled; FBH fitted standard to fitted parking heat; FBH call on start to fitted radio"
      - "Pairing: plug in receiver, press and hold remote 'on' button within 5 seconds of powering the receiver"
      - "FBH will not activate if coolant temperature is above 45 degrees C"
      - "Receiver clips into an existing factory mounting point in the chassis; antenna adhesively mounts to rear glass"
guide_mentions:
  - title: Gear selector removal and bench testing (D4)
    summary: "Step-by-step removal of the centre console and shift module, followed by 9V battery bench testing of the motor and solenoid to diagnose failure without buying parts."
  - title: FBH remote start installation and GAP tool coding (D4)
    summary: "Install antenna, Telestart T91-R receiver, and remote, then code three CFF parameters via GAP tool to enable parking heater remote start."
  - title: Windshield replacement prep for TUV (D4)
    summary: "Remove snorkel and A-pillar trim yourself before the glass shop visit; apply the service bulletin fix for A-pillar water leak prevention."
---

## Summary

This multi-topic episode covers four practical jobs on the Discovery 4. First, David's gear selector is stuck in park — the GAP tool reveals a mechanical failure fault from dirt or cold-stiffened grease. Clearing the fault and applying WD-40 fixes it at zero cost, saving the 688 EUR replacement module price. A 9V battery bench test technique is demonstrated for independently verifying the motor and solenoid before committing to parts. Second, a Freelander project car reveals how a dealership installed a 2000 EUR turbo unnecessarily when the real problem was a loose air pipe (0 EUR fix), plus incorrectly fitted shock absorber mounts and missed corroded ABS sensors. Third, windshield replacement prep includes removing the snorkel and A-pillar trim to protect clips, with reference to a Land Rover service bulletin for A-pillar water leak prevention. The TUV inspection cost 160 EUR (every 2 years in Germany). Fourth and most detailed, a fuel burning heater remote start is installed using a generic antenna (~1 EUR), model-specific Telestart T91-R receiver, and a Ford Mondeo compatible remote (~80 EUR), with three CFF parameter changes via GAP tool to enable parking heat mode. The FBH will not activate if coolant is already above 45 degrees C.

## Notes

- Gear selector stuck faults on the D4 often cost 0 EUR to fix (WD-40 or fault clear) vs 688 EUR for a new module
- 9V battery bench test of motor and solenoid is a standout diagnostic technique for any actuator-based fault
- Always independently verify dealership repairs — one workshop caused or missed multiple issues on a single Freelander
- FBH remote start requires GAP tool coding (~95 EUR licence) plus ~81 EUR in hardware
- FBH will not fire if coolant temperature is already above 45 degrees C
- TUV inspection in Germany: 160 EUR every 2 years
- Ford Mondeo remote is compatible with Discovery 4 Telestart system
