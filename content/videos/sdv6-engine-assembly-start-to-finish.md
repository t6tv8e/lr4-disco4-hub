---
title: "Assembly of a Ford JLR 3.0L SDV6 Diesel Engine — Start to Finish"
slug: /videos/sdv6-engine-assembly-start-to-finish/
content_type: video
youtube_id: qFfLJRCSgcc
channel: LR TIME
published_at: ""
summary: "Complete assembly walkthrough of a Ford/JLR 3.0L SDV6 diesel engine from short block to fully dressed unit, covering cylinder head installation with torque specs, valve stem seal replacement procedure for all 24 valves, flywheel timing alignment, trigger wheel installation, oil pump and crankshaft seal, timing belt routing, and injector rail installation."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 4
    years: "2010-2016"
    engine: 3.0 SDV6
    market: Europe
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
tags:
  - engine-rebuild
  - sdv6
  - cylinder-head
  - valve-seals
  - flywheel
  - trigger-wheel
  - timing-belt
  - oil-pump
  - injectors
  - torque-specs
  - diy
  - professional
issue_mentions:
  - candidate_issue: valve-stem-seal-failure
    report_status: reported
    summary: "Vacuum test on cylinder heads from a 145,000 km replacement engine revealed 3-4 valves could not hold full vacuum. All 24 valve stem seals replaced as part of engine assembly."
    symptoms:
      - oil consumption
      - blue smoke on startup (if seals are severely worn)
    diagnosis:
      - vacuum test on intake ports — inability to reach/hold 20 units of vacuum indicates seal failure
    fixes:
      - replace all 24 valve stem seals
    parts:
      - name: Valve stem seal set (24 pcs)
        brand: OEM
        part_number: ""
        note: "Use protective sleeve over valve stem during seal installation to prevent lip damage"
    costs: []
    outcome: "All 24 seals replaced; re-vacuum tested to confirm no leaks introduced"
    notes:
      - "Process per valve: compress spring, remove keeper wedges, extract valve, clean seat with ScotchBrite, install new seal with protective sleeve, reassemble"
      - "Must tap wedges with hammer after reassembly to verify seating"
      - "Lapping compound (fire-making method) used on valves that still showed vacuum leak after seal replacement"
  - candidate_issue: trigger-wheel-installation-error
    report_status: reported
    summary: "Trigger wheel installation is a critical procedure where cheap Chinese tools can cause incorrect depth and angle, leading to crankshaft position sensor faults requiring engine removal. LR TIME has had to remove the engine twice due to aftermarket trigger wheel failures."
    symptoms:
      - crankshaft position sensor fault code
      - engine no-start
    diagnosis:
      - trigger wheel installed at incorrect depth or angle
      - aftermarket trigger wheel quality failure (disintegration)
    fixes:
      - use custom gauge tool for precise 110.5 degree alignment (drawing on LR TIME Patreon)
      - install in stages — first align, then seat to correct depth (3.66mm +/-0.4mm)
      - use OEM trigger wheel only
    preventive_actions:
      - never use cheap Chinese trigger wheel installation tools (incorrect diameter, too much play)
      - always use OEM trigger wheel — aftermarket ones have failed by disintegrating
    parts:
      - name: OEM Trigger Wheel
        brand: Land Rover OEM
        part_number: ""
        note: "Aftermarket trigger wheels have caused two engine removals for LR TIME"
      - name: Flywheel bolts (UV rated)
        brand: Land Rover OEM
        part_number: LR035564
        note: "Latest part number; EUR 156 in Germany"
    costs:
      - amount: 156
        currency: EUR
        type: parts
        note: "OEM flywheel bolts in Germany"
    outcome: "Trigger wheel installed successfully with custom gauge tool"
    notes:
      - "The arrow on the trigger wheel does NOT mean align hole-to-hole — it's actually offset from the locating hole"
      - "Gap between trigger wheel and crankshaft position sensor: 0.5-1.5mm (theirs measured just above 0.5mm)"
      - "Most people align the locating hole to the dowel hole directly, which is wrong — it's at an offset"
  - candidate_issue: water-connection-housing-crack
    report_status: preventive-advice
    summary: "Water connection housing above the timing belt should be replaced during engine work. Christian advises against expensive aluminum aftermarket replacements — just keep the OEM plastic one and carry a spare."
    symptoms:
      - coolant leak from timing area
    diagnosis:
      - plastic housing cracks from heat cycling over time
    fixes:
      - replace with new OEM or aftermarket plastic housing
    preventive_actions:
      - keep a spare in the vehicle — easy to replace even in the Simpson Desert
    parts:
      - name: Water connection housing
        brand: OEM
        part_number: ""
        note: "Do NOT buy expensive aluminum aftermarket unit — just get a new plastic OEM and keep a spare"
    costs: []
    outcome: "New housing installed with new O-rings and silicone grease"
    notes:
      - "Uses silicone grease on O-rings for water connections"
  - candidate_issue: frame-corrosion-sdv6
    report_status: reported
    summary: "Frame inspection during engine-out state revealed corrosion in several areas that still appeared manageable but required attention before reassembly."
    symptoms:
      - visible rust on frame rails and corners
    diagnosis:
      - corrosion developing at stress points and exposed areas
    fixes:
      - treat corrosion before engine reinstallation
    parts: []
    costs: []
    outcome: "Identified; repair planned before engine drop-in"
    notes:
      - "Easier to address frame corrosion while engine is out — multiple nasty spots found on corners and rail sections"
guide_mentions:
  - candidate_guide: sdv6-cylinder-head-installation
    summary: "Complete cylinder head installation procedure for 3.0L SDV6 including gasket, torque sequence, and glow plug installation."
    parts:
      - name: Head gasket (pre-lubricated)
        brand: OEM/Elring
        part_number: ""
        note: "Comes pre-lubricated from package; no additional sealant needed; dated 2023"
      - name: Glow plugs (reused)
        brand: Bosch
        part_number: ""
        note: "New Bosch glow plugs for SDV6 are expensive; reuse if serviceable"
    costs: []
    notes:
      - "Torque sequence (matches Elring and Ford specs): 20 Nm, 40 Nm, 80 Nm, then 2x 90-degree angle turns"
      - "Torque wrench set to not-to-exceed 250 Nm during angle turns"
      - "Check cylinder head flatness with 0.05mm feeler gauge and straight edge before installation"
      - "Inspect small oil channel filter in corner of block before head goes on"
      - "Blow through all oil channels as final step before assembly"
      - "Glow plug torque: 9-12 Nm; use 10 Nm with Metaflux anti-seize (Swiss-made)"
      - "Run glow plugs down by hand only — never use power tools"
  - candidate_guide: sdv6-flywheel-timing-alignment
    summary: "Flywheel installation and timing alignment procedure for Ford/JLR 3.0L SDV6 — critical steps that are commonly done incorrectly."
    parts:
      - name: Flywheel bolts (UV rated, OEM)
        brand: Land Rover
        part_number: LR035564
        note: "EUR 156 in Germany; always use new bolts"
    costs:
      - amount: 156
        currency: EUR
        type: parts
        note: "OEM flywheel bolts"
    notes:
      - "Flywheel only fits in one position — hole pattern looks even but is not"
      - "CRITICAL: insert timing pin into engine block and rotate crankshaft against it before mounting flywheel"
      - "Flywheel hole must line up with the aperture — can be in correct bolt position but wrong rotational position"
      - "Torque: 50 Nm first stage (cross pattern), then 45-degree, then another 45-degree (total 90-degree), max 160 Nm"
      - "If torque wrench clicks before reaching 90 degrees, stop — indicates used bolts are yielding"
      - "Mark all bolts for correct angle tracking"
  - candidate_guide: sdv6-engine-timing-belt-install
    summary: "Timing belt installation on SDV6 including routing, tensioner setup, and verification procedure."
    parts:
      - name: Timing belt (Dayco OEM)
        brand: Dayco
        part_number: ""
        note: "Gen 2 belt is 1mm wider than Gen 1 — not interchangeable"
      - name: Hydraulic lifters (x24)
        brand: ENA
        part_number: ""
        note: "On sale for $2.99 each"
    costs: []
    notes:
      - "Set engine to 30 degrees past TDC with timing pins installed"
      - "Set belt on lower pulley wheel, jam with bottle cork to prevent slipping"
      - "Route clockwise on first pulley, slip below idler, rotate second pulley clockwise"
      - "Tensioner: rotate until embossed piece is in window; 45 Nm with Loctite"
      - "Pulley wheel bolts: 25 Nm"
      - "Verify by rotating two full revolutions, then confirm all timing pins re-enter"
      - "Gen 2 has M10 tensioner bolt vs Gen 1 M8"
      - "Cam shaft end float check: 0.1mm go-gauge should enter, 0.15mm should not"
      - "Cam shaft cap torque: 5 Nm then 11 Nm"
      - "Loctite 518 specified by Ford for cam shaft cap sealant (2-3mm bead next to groove)"
  - candidate_guide: sdv6-oil-pump-and-sump-install
    summary: "Oil pump and sump installation procedure for SDV6 including seal installation and sump sealant application."
    parts:
      - name: Oil pump with installation sleeve
        brand: LRing
        part_number: ""
        note: "Gen 2 has additional hole; LRing is OEM quality; includes crankshaft seal in package"
      - name: Sump gasket
        brand: LRing
        part_number: ""
        note: "New seal; set in dowel pins"
      - name: Deco HT sealant
        brand: Deco
        part_number: ""
        note: "Applied on four corners and around oil pump opening"
    costs: []
    notes:
      - "Align oil pump within 0.2mm per spec"
      - "Run two side bolts lightly first, then align, then run remaining bolts at 11 Nm"
      - "Crankshaft seal: install completely dry; use installation tool to set 1mm under flush"
      - "Crankshaft pulley torque: 100 Nm first stage, 300 Nm second stage, then 90-degree with max 600 Nm (400 Nm was sufficient)"
      - "Oil level sensor: Land Rover makes a special clamp (available as upgrade) to prevent connector pop-off under heat"
  - candidate_guide: sdv6-injector-installation
    summary: "Fuel injector and rail installation procedure for SDV6."
    parts:
      - name: Bosch ceiling rings
        brand: Bosch
        part_number: ""
        note: "Must have four little tabs; 1.5mm size"
    costs: []
    notes:
      - "Apply anti-seize on injector upper section where they seize"
      - "Verify bores are completely clean before inserting injectors"
      - "Fuel injector rail torque: 35 Nm at 90-degree angle"
      - "Injector leak-off line: new LRing seal"
      - "Injector pre-torque: 20 Nm, final torque: 28 Nm"
      - "EGR coolant pipes installed after injectors"
---

## Summary

LR TIME presents a comprehensive start-to-finish assembly of a Ford/JLR 3.0L SDV6 diesel engine, continuing from a previous short block assembly episode. The video covers every major step: cylinder heads from a 145,000 km replacement engine get all 24 valve stem seals replaced after vacuum testing revealed 3-4 leaking valves. Head gasket torque follows a 20/40/80 Nm + 2x 90-degree sequence matching both Elring and Ford specs. The oil pump is installed with LRing components (Gen 2 variant with additional hole), crankshaft seal is installed completely dry using a depth tool, and the sump gets Deco HT sealant at corners. Timing belt installation uses a Dayco OEM belt (Gen 2 is 1mm wider than Gen 1 -- not interchangeable), with the tensioner set until the embossed piece sits in the window at 45 Nm. All 24 hydraulic lifters are renewed with ENA units at $2.99 each. The flywheel installation procedure is highlighted as a common source of errors -- the timing pin must be inserted and crankshaft rotated against it before mounting, or the engine will not start. Trigger wheel installation is another critical step where cheap Chinese tools have caused LR TIME to remove engines twice; they now use a custom gauge tool for precise 110.5-degree alignment. The video also covers injector installation (Bosch ceiling rings with four tabs, rail at 35 Nm), EGR pipes, alternator bracket, and wiring harness. Frame corrosion is noted as needing attention before the engine can be dropped in.

## Notes

- This is part of a multi-episode Discovery 4 SDV6 engine rebuild series (Season 5, Episode 22)
- Cylinder heads were sourced from a replacement engine with 145,000 km
- New Bosch glow plugs for this engine are expensive enough to justify reusing old ones when serviceable
- The oil test (filling engine with used oil and spinning oil pump) confirmed excellent oil delivery to all channels, lifters, and chains
- Christian notes that timing belt direction arrows are debated but confirmed safe to install either way
- Valve cover cleaning: sodium hydroxide + laundry detergent + pump agitation until completely clean
- Manifold absolute pressure sensor: clean with mass airflow sensor cleaner only — spray cleaner will destroy the internal membrane
- LR TIME Patreon has downloadable drawings for the timing pin and trigger wheel gauge tool
