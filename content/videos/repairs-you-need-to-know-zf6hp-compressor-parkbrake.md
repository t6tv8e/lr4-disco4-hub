---
title: "Land Rover Repairs You Need to Know — ZF 6HP, Air Compressor, Park Brake"
slug: /videos/repairs-you-need-to-know-zf6hp-compressor-parkbrake/
content_type: video
youtube_id: n7qtB6vF7Gg
channel: LR TIME
published_at: ""
summary: "Comprehensive multi-system overhaul on a 240,000 km Discovery 3 covering brake caliper replacement, electric parking brake repair, Hitachi air compressor housing fabrication, ZF 6HP mechatronic seal replacement for transmission shudder, coolant leak repair, diesel heater pump replacement, oil filter chip analysis, and transmission adaptation reset."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    years: "2009"
    engine: 2.7 TDV6
    market: Europe
tags:
  - brakes
  - parking-brake
  - air-compressor
  - hitachi
  - zf-6hp
  - mechatronic
  - transmission-shudder
  - coolant-leak
  - diesel-heater
  - oil-analysis
  - diy
  - professional
issue_mentions:
  - candidate_issue: seized-brake-caliper-guide-pin
    report_status: reported
    summary: "Seized caliper guide pin prevented the brake caliper from moving freely, causing severely uneven brake pad wear on one side. Result of deferred maintenance."
    symptoms:
      - uneven brake pad wear
      - one pad worn to metal, other pad still has material
      - stuck/dragging caliper
    diagnosis:
      - guide pin seized due to lack of lubrication/maintenance
      - caliper cannot slide freely on seized pin
    fixes:
      - replace all four brake calipers
      - clean and lubricate guide pins
      - replace brake discs and pads
    preventive_actions:
      - regularly lubricate caliper guide pins during brake service
      - clean ABS sensors of metal debris as preventive maintenance
    parts:
      - name: Brake calipers (x4)
        brand: ""
        part_number: ""
        note: "All four replaced due to extent of neglect"
    costs: []
    outcome: "Four new calipers, discs, and pads installed"
    notes:
      - "Brake pads were worn down to bare metal — driven well past safe limits"
      - "Discovery brake system described as 'unbeatable' when properly maintained"
  - candidate_issue: electric-parking-brake-module-failure
    report_status: reported
    summary: "Electric parking brake module was jammed — the internal gears wound to the end and the breakaway clutch couldn't provide enough power to unjam. Required manual unjamming of the gear mechanism."
    symptoms:
      - electric parking brake non-functional
      - warning light on dashboard
    diagnosis:
      - handbrake module jammed internally
      - gear mechanism wound to end position
      - breakaway clutch insufficient to unjam
    fixes:
      - remove handbrake module (extremely difficult access)
      - manually unjam gear mechanism
      - install new brake shoes
    parts:
      - name: Parking brake shoes (set)
        brand: ""
        part_number: ""
        note: ""
    costs: []
    outcome: "Module unjammed and reinstalled with new brake shoes"
    notes:
      - "Access described as 'painting your house through the mailbox opening'"
      - "2009 Discovery 3 spare wheel bracket is different — must extract through the side, requiring removal of air suspension evaporative container"
      - "Brake shoe bedding-in procedure: start engine, pump brake 3x, hold 3rd, pull handbrake 4x, pump brake 3x, then 10 stops from 30 km/h using electric parking brake with cooling between runs"
  - candidate_issue: hitachi-air-compressor-housing-crack
    report_status: reported
    summary: "Hitachi air compressor rear housing cracked, causing air leak visible when sprayed with leak detector. Fault code C1A20-64. Christian fabricated a replacement aluminum cover on a milling machine rather than replacing the entire compressor."
    symptoms:
      - air suspension fault
      - suspension not maintaining height
    warning_messages: []
    fault_codes:
      - C1A20-64
    diagnosis:
      - spray leak detector on compressor — visible bubbling at rear cover crack
      - fault code C1A20-64 corresponds to compressor fault per disco3.co.uk
    fixes:
      - fabricate replacement rear cover from aluminum stock on milling machine
      - replace compressor piston/ring from eBay repair kit (adapted to fit)
      - replace degraded valve material
      - JB Weld repair on broken low-pressure fitting
    preventive_actions:
      - inspect compressor housing for cracks during any suspension work
    parts:
      - name: Hitachi compressor repair kit
        brand: Aftermarket
        part_number: ""
        note: "eBay kit; did not fit directly — required adaptation of parts"
      - name: Custom aluminum rear cover
        brand: DIY fabricated
        part_number: ""
        note: "Machined from aluminum stock using DRO-guided milling machine"
    costs: []
    outcome: "Compressor repaired with fabricated cover and adapted repair kit parts"
    notes:
      - "Hitachi compressor internals (piston and cylinder) showed zero gouging — only the housing was the problem"
      - "disco3.co.uk is essential reference for D3/D4 fault code diagnosis"
      - "When valve packing material gets powdery it can clog the valves — must be replaced"
  - candidate_issue: zf-6hp-mechatronic-seal-failure
    report_status: reported
    summary: "ZF 6HP transmission shuddering at 2,000 RPM caused by hardened, collapsed mechatronic seals. First oil change at 240,000 km revealed black fluid. Seals replaced with EUR 32 OEM kit, magnetic sensors cleaned, and transmission adaptation values reset."
    symptoms:
      - transmission shudder at 2,000 RPM
      - harsh or erratic gear shifts
    diagnosis:
      - mechatronic seal hardened and pushed inward, leaking between hydraulic circuits
      - original seals were flat versus new seals that protrude visibly
      - magnetic gear selector sensor contaminated with metal dust
    fixes:
      - replace mechatronic seals with OEM seal kit (4 tubes + connector sleeve)
      - clean magnetic gear selector sensor
      - clean secondary magnetic sensor
      - replace connector sleeve
      - replace transmission fluid (5L total)
      - clear adaptation values with GAP diagnostic tool
    parts:
      - name: ZF 6HP Mechatronic Seal Kit
        brand: ZF OEM
        part_number: ""
        note: "EUR 32; contains seals, connector sleeve"
    costs:
      - amount: 32
        currency: EUR
        type: parts
        note: "ZF 6HP mechatronic seal kit"
    outcome: "Transmission shudder eliminated; adaptation values cleared for relearning"
    notes:
      - "First oil change at 240,000 km — oil was 'black water'"
      - "ALWAYS open fill plug before drain plug"
      - "HP6 oil pan stuck with internal tube — required scissors to cut free"
      - "Mechatronic unit torque: 10 Nm"
      - "Transmission fluid fill: 5L total, check level between 30-50 degrees C"
      - "Adaptation values cleared with GAP tool — transmission will behave erratically for up to 50 km while relearning"
      - "New seals protrude visibly from casting; old seals were flat and hard"
  - candidate_issue: coolant-leak-plastic-manifold
    report_status: reported
    summary: "Coolant visibly evaporating from a cracked/leaking plastic coolant manifold — a known weak point on the TDV6. Manifold replaced along with O-rings."
    symptoms:
      - coolant loss
      - visible steam/evaporation from engine area
    diagnosis:
      - coolant visibly evaporating from plastic manifold area
    fixes:
      - replace plastic coolant manifold
      - replace O-rings with silicone grease
    parts:
      - name: Plastic coolant manifold
        brand: OEM
        part_number: ""
        note: "Known weak point on TDV6"
      - name: Diesel cooler O-ring
        brand: OEM
        part_number: ""
        note: "Replace while coolant is drained"
    costs: []
    outcome: "Manifold replaced; coolant system leak-free"
    notes: []
  - candidate_issue: engine-bearing-chips-in-oil
    report_status: reported
    summary: "Three metal chips found in the engine oil filter at 240,000 km, indicating one bearing has begun to fail. Engine runs smoothly on 5W-40 oil but a future engine issue is likely."
    symptoms:
      - metal chips in oil filter
      - no audible or performance symptoms yet
    diagnosis:
      - three chips found in oil filter — one bearing has begun to fail
      - unknown which bearing
      - engine still runs smoothly
    fixes:
      - continue running on 5W-40 oil
      - monitor oil filter for increasing debris
    preventive_actions:
      - use 5W-40 oil
      - check oil filter for debris at every service
    parts: []
    costs: []
    outcome: "Monitored; engine cleared for continued use with awareness of developing issue"
    notes:
      - "Only the first filter opened had chips — all others were clean"
      - "Running 5W-40 is described as 'doing all you can do'"
  - candidate_issue: diesel-heater-coolant-pump-leak
    report_status: reported
    summary: "Auxiliary coolant pump for the diesel-fired heater was leaking. Replaced with an OEM-brand pump using a different connector to save cost."
    symptoms:
      - coolant leak from auxiliary pump area
    diagnosis:
      - coolant pump for diesel heater leaking
    fixes:
      - replace coolant pump
      - reuse original connector by cutting and splicing
    parts:
      - name: Auxiliary coolant pump (diesel heater)
        brand: OEM (different connector variant)
        part_number: ""
        note: "Using a version with a different connector saved significant cost"
    costs: []
    outcome: "New pump installed with adapted connector"
    notes: []
  - candidate_issue: center-console-circuit-board-failure
    report_status: reported
    summary: "Ride height lower switch on the center console stopped working. Circuit board repair performed; corroded contacts cleaned with electronic cleaner."
    symptoms:
      - ride height lower switch non-functional
    diagnosis:
      - circuit board corrosion from water ingress (sunroof left open with rooftop tent)
    fixes:
      - circuit board repair and contact cleaning with electronic cleaner
    parts: []
    costs: []
    outcome: "Switch function restored"
    notes:
      - "Water ingress from sunroof left open caused the circuit board corrosion"
guide_mentions:
  - candidate_guide: zf-6hp-mechatronic-seal-replacement
    summary: "ZF 6HP mechatronic seal replacement procedure including fluid change, sensor cleaning, and transmission adaptation reset."
    parts:
      - name: ZF 6HP Mechatronic Seal Kit
        brand: ZF OEM
        part_number: ""
        note: "EUR 32"
    costs:
      - amount: 32
        currency: EUR
        type: parts
        note: "Seal kit"
    notes:
      - "Open fill plug BEFORE drain plug"
      - "HP6 pan may be stuck with internal tube — use scissors to cut free"
      - "Remove mechatronic unit carefully"
      - "Note seal lengths: short, short, longer, longest — must go back in correct positions"
      - "New seals protrude from casting; old seals are flat"
      - "Clean magnetic gear selector sensor of metal dust"
      - "Clean secondary magnetic sensor"
      - "Mechatronic unit torque: 10 Nm"
      - "Install new connector sleeve"
      - "Refill with ~5L transmission fluid; check level between 30-50 degrees C"
      - "Clear adaptation values with GAP diagnostic tool post-service"
      - "Adaptation relearning takes up to 50 km of driving through all gears"
  - candidate_guide: electric-parking-brake-shoe-bedding
    summary: "Electric parking brake shoe bedding-in procedure for Discovery 3/4."
    parts: []
    costs: []
    notes:
      - "Start engine"
      - "Push brake pedal 3 times"
      - "Hold on the 3rd push"
      - "Pull handbrake switch 4 times"
      - "Push brake pedal down 3 times"
      - "Brake light should flash indicating bedding-in mode"
      - "Drive at 30 km/h, coast, then stop using electric parking brake"
      - "Repeat approximately 10 times"
      - "Allow brakes to cool between each run"
  - candidate_guide: hitachi-compressor-cover-fabrication
    summary: "Fabricating a replacement rear cover for a Hitachi air compressor from aluminum stock using a milling machine."
    parts:
      - name: Aluminum stock
        brand: ""
        part_number: ""
        note: "From scrap/stock"
      - name: Hitachi compressor repair kit (eBay)
        brand: Aftermarket
        part_number: ""
        note: "Parts require adaptation to fit specific compressor"
    costs: []
    notes:
      - "Machine front side first, then back side"
      - "Leave extra thickness where threads are needed"
      - "Use DRO-guided drill program for hole pattern"
      - "Inspect compressor internals (piston/cylinder) for gouging before reassembly"
      - "Replace degraded powdery valve packing material — it can clog valves"
      - "Low-pressure fittings can be repaired with JB Weld if broken"
      - "Install helicoil if compressor bracket threads are damaged"
---

## Summary

LR TIME performs an extensive multi-system overhaul on Fabian's 240,000 km Discovery 3, tackling virtually every major system in the vehicle over a multi-day session. The brake system gets four new calipers after a seized guide pin caused catastrophic uneven pad wear (driven to bare metal). The electric parking brake module, which had jammed internally, is removed (described as "painting your house through the mailbox opening"), manually unjammed, and reinstalled with new shoes — complete with the specific bedding-in procedure. The Hitachi air compressor's cracked rear housing (fault code C1A20-64) is solved not by replacement but by fabricating a new aluminum cover on a milling machine, with compressor internals confirmed as having zero gouging. The ZF 6HP transmission, shuddering at 2,000 RPM after its first-ever oil change at 240,000 km revealed "black water," gets a EUR 32 mechatronic seal kit — hardened seals had collapsed inward causing hydraulic cross-leak. Magnetic sensors are cleaned of metal dust and adaptation values reset with a GAP tool. A leaking plastic coolant manifold is replaced, the diesel heater's coolant pump is swapped (using a different-connector OEM variant to save cost), and the engine oil filter reveals three metal chips indicating an early bearing failure. The video closes with K&N air filter service and a cabin pollen filter replacement.

## Notes

- This is Fabian's Discovery 3, also featured in LR TIME's TDV6 teardown and line boring videos
- disco3.co.uk is highlighted as the essential reference for D3/D4 fault code lookup
- The center console ride height switch failed due to water ingress from a sunroof left open
- Engine oil filter chip analysis: only the first filter had chips, all others clean — indicates one bearing beginning to fail but engine still serviceable
- K&N air filter cleaning: blow out debris, apply K&N cleaner, then oil both sides
- Vacuum brake bleeder kit donated by a viewer (James Ray) was used for the first time
- Temperature check on brake discs showed remarkably even wear "to the tenths of a millimeter" — Discovery brake engineering praised
- The vehicle exceeds the workshop lift weight capacity by approximately 200 kg
