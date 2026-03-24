---
title: "Diesel Heater For Our Rooftop Tent - German Precision ???"
slug: /videos/diesel-heater-rooftop-tent-build/
content_type: video
youtube_id: j0y5AEhYOMo
channel: LR TIME
summary: "Building a 2 kW Chinese diesel heater into a custom rooftop storage box for cold-weather tent camping, replacing all low-quality included components with custom-fabricated fuel tank, heat shields, stainless fittings, and industrial Harting connectors."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    engine: 2.7 TDV6
    market: Europe
tags:
  - diesel-heater
  - rooftop-tent
  - camping
  - overlanding
  - diy
  - fabrication
last_reviewed: "2026-03-24"
issue_mentions:
  - candidate_issue: diesel-heater-trips-goal-zero-12v-fuse
    report_status: reported
    summary: "The 2 kW diesel heater draws 145 watts at startup due to the glow plug, which trips the Goal Zero battery station's 12V electronic fuse. Workaround is to use a 220V-to-12V power supply instead of running directly from the Goal Zero on 12V."
    timestamps: []
    symptoms:
      - Goal Zero 12V electronic fuse shuts off during diesel heater startup
    warning_messages: []
    fault_codes: []
    diagnosis:
      - glow plug inrush current of 145 watts exceeds Goal Zero 12V fuse threshold
    fixes:
      - use a 220V-to-12V power supply (draws 9W idle)
    preventive_actions:
      - never run diesel heater startup directly from Goal Zero on 12V
    parts: []
    costs: []
    outcome: "Heater starts reliably via 220V-to-12V power supply"
    notes:
      - "220V-to-12V power supply draws 9W at idle even when heater is off"
  - candidate_issue: diesel-heater-danger-power-loss
    report_status: reported
    summary: "If electrical power is lost while the diesel heater is running (Goal Zero shuts off, cable disconnected), the heater develops dangerous excess heat in the mounting location. The cool-down fan cycle must complete fully before disconnecting."
    timestamps: []
    symptoms:
      - excess heat buildup in mounting box or cabin
    warning_messages:
      - fan symbol continues running on display during cool-down
    fault_codes: []
    diagnosis:
      - loss of electrical power prevents the cool-down fan cycle from completing
    fixes:
      - never disconnect power until display goes completely blank
      - wait for full cool-down cycle before disconnecting controller
    preventive_actions:
      - ensure power source has sufficient capacity for full operating cycle plus cool-down
    parts: []
    costs: []
    outcome: "Safety awareness — no incident reported"
    notes:
      - "Running out of fuel causes air ingestion, requiring a bleed cycle that floods the combustion chamber, produces heavy smoke, and builds up carbon"
  - candidate_issue: chinese-diesel-heater-tank-leak
    report_status: reported
    summary: "The fuel tank included with cheap Chinese diesel heaters leaks diesel through the vent connection when fuel sloshes during cornering."
    timestamps: []
    symptoms:
      - diesel leaks from vent hole during vehicle movement
    warning_messages: []
    fault_codes: []
    diagnosis:
      - vent connection allows diesel to escape when tank is tilted
    fixes:
      - install a one-way check valve on vent line (allows air in, blocks diesel out)
      - replace included tank with a high-quality canister with proper vent and suction connections
    preventive_actions: []
    parts:
      - name: One-way check valve
        note: "Allows air in only one direction; prevents diesel sloshing out through vent"
    costs: []
    outcome: "Custom tank with check valve eliminates leak"
    notes: []
guide_mentions:
  - candidate_guide: diesel-heater-rooftop-box-installation
    summary: "Complete installation of a 2 kW Chinese diesel heater into a custom rooftop storage box, including fuel system, exhaust, electrical, and remote control routing to the tent interior."
    parts:
      - name: 2 kW Chinese diesel heater
        note: "Base unit 140 EUR; included accessories (tank, fittings, hoses) are poor quality and must be replaced"
      - name: Heat-resistant external exhaust hose
        note: "Approximately 20 EUR; replaces cheap Chinese aluminium flex hose that kinks outdoors"
      - name: Stainless steel fuel fittings
        note: "High-quality replacements for included plastic fittings"
      - name: Secondary silencer/muffler
        note: "Makes a significant noise reduction; mounted with 3D-printed bracket using captive nuts"
      - name: Harting industrial waterproof plug
        note: "Routes remote control display cable from box into tent interior; fully waterproof"
      - name: Tractor-style 12V power connector
        note: "Heavy-duty waterproof power input"
      - name: Custom aluminium fuel tank
        note: "Built from high-quality German canister with weighted pickup hose, filter, and vent hole; pressure tested"
      - name: One-way check valve for tank vent
        note: "Prevents diesel sloshing out through vent during vehicle movement"
      - name: Aluminium air outlet flange
        note: "Fabricated from sheet metal, welded into pipe, turned on lathe"
      - name: Rubber-mounted fuel pump bracket
        note: "Dampens pump ticking noise; pump must be oriented to pump upward"
      - name: Nylock nuts
        note: "Used throughout to prevent rattling loose from vibration"
    costs:
      - amount: 250
        currency: EUR
        type: purchase
        note: "Total cost including base heater (140 EUR) and all replacement components and accessories"
    notes:
      - "Never install a diesel heater inside the vehicle cabin — mount externally in a box for fire safety"
      - "Sheet metal fabrication for brackets and heat shields: approximately 6 hours"
      - "Fuel pump must be mounted pumping upward; secondary fuel line should not drop in elevation"
      - "Heat shields required around exhaust hose and muffler"
      - "Rivet nuts used for mounting heater unit to box"
      - "Hot air distribution in tent needs improvement — hose may need to be longer to reach lower sleeping area"
      - "Heater level 2-4 sufficient for overnight use at temperatures around -3 to +1 degrees C"
      - "45 minutes of heating was enough to warm tent before sleep; woke freezing at 5:30 AM without heater running"
      - "Key benefit: tent interior stays dry with heater — normally heavy condensation forms overnight"
      - "Upcoming addition: aluminium control panel for tent interior with volt meter, USB charger, LED dimmer, and display — components cost 19 EUR total"
---

## Summary

Christian installs a 2 kW Chinese diesel heater (140 EUR base) into a custom rooftop storage box for cold-weather camping in the Discovery 3's rooftop tent. The included components are all replaced: the leaking fuel tank gets a custom German canister with a one-way vent check valve, cheap fittings are swapped for stainless steel, and a secondary silencer is added for noise reduction. A Harting industrial waterproof connector routes the remote control into the tent. The heater draws 145 watts at startup, tripping the Goal Zero's 12V fuse — solved with a 220V-to-12V power supply. Critical safety note: never cut power while the heater is running, as it must complete a cool-down fan cycle. First overnight test at -3 degrees C confirmed the system works, keeping the tent dry and warm on level 2-4, though hot air distribution to the lower sleeping area needs improvement.

## Notes

- Total cost approximately 250 EUR after replacing all cheap included components
- 145W startup draw trips Goal Zero 12V fuse — use 220V-to-12V supply instead
- Never disconnect power during operation — wait for cool-down cycle (fan symbol on display)
- Running out of fuel causes bleed cycle: excess diesel in combustion chamber, heavy smoke, carbon buildup
- Tank vent check valve: allows air in, prevents diesel sloshing out
- Fuel pump must pump upward; secondary line should not drop in elevation
- Sheet metal fabrication: approximately 6 hours for brackets and heat shields
- Heater keeps tent completely dry — eliminates condensation problem
- Level 2-4 sufficient for overnight use down to -3 degrees C
- 3D-printed silencer bracket with captive nuts and nylock fasteners
