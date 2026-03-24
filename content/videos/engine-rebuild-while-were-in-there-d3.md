---
title: "Land Rover Engine Rebuild — While We're In There (2.7L Discovery 3)"
slug: /videos/engine-rebuild-while-were-in-there-d3/
content_type: video
youtube_id: i1ic4tAQpu4
channel: LR TIME
published_at: ""
summary: "Christian and Vera rebuild a 2005 Discovery 3 2.7L diesel engine from the bottom up, covering oil pump upgrade, cam seal installation, timing belt and tensioner setup, crankshaft seal technique, glow plug torque, and every major assembly step with specific torque specs and part selection tips."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    years: "2005"
    engine: 2.7 TDV6
    market: Europe
tags:
  - engine-rebuild
  - tdv6
  - oil-pump
  - cam-seals
  - crankshaft-seal
  - timing-belt
  - glow-plugs
  - water-pump
  - coolant-manifold
  - diy
  - professional
issue_mentions:
  - candidate_issue: oil-pump-failure-tdv6
    report_status: preventive
    summary: "Original oil pump lacked a gusset at the timing belt pulley interface and had a 13.5mm rotor vs the stronger OEM Ford replacement's 15mm rotor. The gusset snapping off causes major internal damage; surviving 20 years without failure described as exceptional luck."
    symptoms:
      - catastrophic engine damage if gusset snaps
    diagnosis:
      - original pump design has weak gusset at timing belt pulley interface
      - original rotor is 13.5mm vs 15mm on upgraded Ford replacement
    fixes:
      - replace with upgraded OEM Ford oil pump (15mm rotor, reinforced gusset)
    preventive_actions:
      - replace oil pump during any major engine work
    parts:
      - name: OEM Ford Oil Pump (upgraded)
        brand: Ford/OEM
        part_number: ""
        note: "15mm rotor, reinforced gusset — the correct upgrade for TDV6/SDV6"
    costs: []
    outcome: "Upgraded oil pump installed during rebuild"
    notes:
      - "Install with opposing bolts first to keep pump centered before running down the rest"
      - "Gen 1 and Gen 2 pumps are different — must match to engine variant"
  - candidate_issue: cam-seal-leak-tdv6
    report_status: preventive
    summary: "Camshaft seals replaced as preventive measure during engine rebuild despite no visible leaks after 20 years. Installation requires electrical tape wrap on shaft to protect seal lip, Loctite 518 on outer diameter, and a dedicated tool to seat seals 1mm under flush."
    symptoms:
      - oil leak at camshaft seals (if failed)
    diagnosis:
      - seals can harden and leak over time
    fixes:
      - replace camshaft seals during engine rebuild
    preventive_actions:
      - replace cam seals during any major engine work that exposes them
    parts:
      - name: Camshaft seal set
        brand: OEM
        part_number: ""
        note: "Wrap shaft with electrical tape during install to protect seal lip"
    costs: []
    outcome: "Seals replaced preventively; installation tool drawing available on LR TIME Patreon"
    notes:
      - "Apply Loctite 518 to outer diameter, especially at casting gaps"
      - "Use dedicated install tool to seat seals exactly 1mm under flush in one clean sweep"
      - "Always confirm replacement seals have the correct holes — accidentally installing a blank seal requires full teardown"
  - candidate_issue: crankshaft-seal-install-tdv6
    report_status: preventive
    summary: "Crankshaft rear seal is Teflon type and must be installed completely dry with no sealant on the lip. Uses a separate dedicated depth tool. Requires approximately 4 hours cure time before adding oil."
    symptoms: []
    diagnosis: []
    fixes:
      - install crankshaft seal completely dry using dedicated depth tool
    preventive_actions: []
    parts:
      - name: Crankshaft seal (Teflon)
        brand: LRing/OEM
        part_number: ""
        note: "Install completely dry; comes with installation sleeve; ~4 hours cure time before adding oil"
    costs: []
    outcome: "Seal installed correctly with proper depth tool"
    notes:
      - "Do NOT apply sealant to the Teflon lip"
      - "Scoop slowly over shaft so the Teflon has a chance to open up and widen"
  - candidate_issue: oil-cooler-age-failure
    report_status: preventive-advice
    summary: "Oil cooler dated October 2004 (over 20 years old) was replaced as cheap preventive maintenance regardless of apparent condition."
    symptoms: []
    diagnosis:
      - age-related degradation risk on 20-year-old component
    fixes:
      - replace oil cooler preventively during engine rebuild
    parts:
      - name: Oil cooler
        brand: OEM
        part_number: ""
        note: "Replace preventively if over 15-20 years old"
    costs: []
    outcome: "Replaced preventively"
    notes: []
guide_mentions:
  - candidate_guide: 27l-tdv6-engine-assembly
    summary: "Complete engine assembly procedure for the 2.7L TDV6 from bare block to dressed engine, with all torque specs and component installation order."
    parts:
      - name: Beru (BorgWarner) Glow Plugs x6
        brand: Beru/BorgWarner
        part_number: ""
        note: "New Bosch glow plugs for this engine are expensive; used plugs retained when serviceable"
      - name: Metaflux 70-81 anti-seize
        brand: Metaflux
        part_number: "70-81"
        note: "Swiss-made; described as the best anti-seize available"
      - name: ENA/Schaeffler water pump
        brand: ENA/Schaeffler
        part_number: ""
        note: "Cast aluminum; three different part numbers exist for 2.7L, 3.0L Gen 1, and Gen 2 — must use correct variant"
      - name: Dayco timing belt tensioner
        brand: Dayco
        part_number: ""
        note: "Gen 1 uses M8 mounting hole, Gen 2 uses M10 — not interchangeable"
    costs:
      - amount: 1000
        currency: EUR
        type: estimate
        note: "Vehicle purchased for rebuild at this price"
    notes:
      - "Glow plugs torque: 9-12 Nm; use 9 Nm with anti-seize to compensate for reduced friction"
      - "Head gasket torque: 20 Nm, 40 Nm, 80 Nm, then 2x 90-degree angle turns"
      - "Crankshaft sprocket bolt: 100 Nm + 90-degree angle turn (new M14 bolt, do not lubricate)"
      - "Critical: set crankshaft 30 degrees past TDC before tightening sprocket bolt — tightening at 0 degrees TDC with cams installed risks bending valves"
      - "Cam sprocket bolts: 80 Nm + 90 degrees — tighten only AFTER removing timing pins"
      - "Timing belt: 2.7L and 3.0L Gen 1 share the same belt; Gen 2 belt is 1mm wider — wrong belt will destroy engine"
      - "Tensioner: set until embossed edge aligns in the window, lock at 26 Nm"
      - "Verification: rotate engine two full revolutions, reinsert all timing pins, confirm cams and crank align"
      - "High-pressure fuel pump belt: on 2.7L it is NOT timed (just install); on 3.0L Gen 1 it IS timed for injection pulse alignment"
      - "Oil pump bolts: install opposing bolts first to keep pump centered"
      - "Water pump torque: 11 Nm"
      - "Coolant manifold bolts: 25 Nm, torqued rear-to-front per Land Rover spec"
      - "Main gallery sealed with anaerob sealant plus steel gasket; Loctite 518 on cover, torqued to 12 Nm"
      - "High-pressure fuel pump: 28 Nm"
      - "Knock sensors must be installed before intake manifold goes on"
---

## Summary

Christian and Vera from LR TIME perform a comprehensive engine assembly on a 2005 Discovery 3 2.7L TDV6 diesel, bought for EUR 1,000 from an owner whose workshops refused to work on it. The video covers every major step from bare block to fully dressed engine: oil pump upgrade (replacing the weak original with a reinforced Ford OEM unit featuring a 15mm rotor), camshaft seal installation with Loctite 518 and dedicated depth tools, crankshaft Teflon seal installation (completely dry, no sealant), cylinder head gasket torque sequence (20/40/80 Nm + 2x 90-degree turns), glow plug installation with Metaflux anti-seize at 9 Nm, timing belt routing and tensioner setup, water pump selection (three variants for different engine generations), and coolant manifold installation. Critical warnings include: never tighten the crankshaft sprocket bolt at 0-degree TDC with cams installed (risk of bent valves), the Gen 1 and Gen 2 timing belts are different widths and not interchangeable, and the high-pressure fuel pump belt is timed on the 3.0L but NOT on the 2.7L. The 2005 German-market example has an open DPF and factory 17-inch rims.

## Notes

- The bottom end was left untouched based on endoscope inspection showing perfect cross-hatching on pistons
- This is the same Discovery 3 whose engine block was line-bored by Christian in a separate video (Fabian's car)
- Robin (Christian and Vera's son, a professional blacksmith) won first place in a German craft skills competition — featured briefly in the video
- Chinese aluminum coolant manifold available but LR TIME won't install on customer cars until validated on their own vehicle first
- Vehicle had factory 17-inch rims — a rare German-market spec
