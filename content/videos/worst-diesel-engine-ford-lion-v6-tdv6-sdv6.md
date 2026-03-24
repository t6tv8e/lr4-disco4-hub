---
title: "Worst Diesel Engine on the Planet? Ford Lion V6 - Land Rover TDV6 SDV6 / S4-Ep6"
slug: /videos/worst-diesel-engine-ford-lion-v6-tdv6-sdv6/
content_type: video
youtube_id: v3moekbW6z8
channel: LR TIME
published_at: ""
summary: "In-depth engineering analysis of why the Ford/Land Rover TDV6 and SDV6 diesel engine fails, covering oil pump housing failure, bearing design compromises, crankshaft cracking, oil viscosity specifications, cold-start oil drain-back, and the low-RPM high-torque danger zone."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: "2005-2009"
    engine: 2.7 TDV6
    market: Europe
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
tags:
  - engine-failure
  - crankshaft
  - bearing-failure
  - oil-pump
  - oil-viscosity
  - oil-starvation
  - engine-design
  - cold-start
  - oil-pressure
  - engineering-analysis
issue_mentions:
  - candidate_issue: oil-pump-housing-failure-discovery-3
    report_status: documented
    summary: "First-generation Discovery 3 oil pumps (code AC) have a weak casting where the idler pulley ear snaps off, causing timing loss and total engine destruction. Check with endoscope camera: AC is dangerous, AE is improved casting but weak rotor, codes ending in B have reinforced casting and correct rotor."
    symptoms:
      - sudden complete engine failure
      - engine loses timing
      - pistons collide with valves
    diagnosis:
      - endoscope camera inspection of oil pump code through access port
      - AC code pump is dangerous
      - AE code has improved casting but original thin rotor (13.5mm)
      - B suffix code has reinforced casting and thicker 15mm rotor
    fixes:
      - replace with reinforced oil pump (B suffix)
    parts:
      - name: Endoscope camera
        brand: Deep Stash
        note: "Available on Amazon for checking oil pump code"
    costs: []
    notes:
      - "2005-2006 Discovery 3 with no service history proving pump replacement should be assumed dangerous"
      - "A Russian aftermarket pump with 19mm rotor is poor quality and not recommended"
  - candidate_issue: tdv6-bearing-failure-design-compromise
    report_status: documented
    summary: "The TDV6 uses only 4 main bearings with 83mm total bearing width versus 154mm on comparable engines like the Toyota inline-6. Management demanded a short engine for transverse installation, halving bearing surface area. The two inner main bearings each supply oil to two connecting rod bearings creating double the pressure drop, making them the most failure-prone."
    symptoms:
      - engine failure at inner main bearings
      - bearing seizure under high load at low RPM
    diagnosis:
      - 4 main bearings vs 7 on comparable engines
      - inner main bearings supply two con-rod bearings each creating longest pressure drop per revolution
      - inner mains have highest load and lowest oil pressure
    fixes: []
    parts: []
    costs: []
    notes:
      - "Toyota inline-6 has 7 bearings x 22.1mm = 154mm total bearing width"
      - "TDV6 has 3 x 20mm + 1 x 23mm = 83mm, roughly half the bearing surface"
      - "Design compromise was forced by management for transverse installation in smaller Jaguar and Peugeot vehicles"
  - candidate_issue: spontaneous-crankshaft-cracking
    report_status: documented
    summary: "Some TDV6 crankshafts snap cleanly with no bearing wear, attributed to manufacturing inconsistencies in heat treatment or fillet rolling. FEA simulations were run with ideal inputs and did not account for real-world production variations."
    symptoms:
      - sudden engine seizure with no preceding warning
      - clean crankshaft fracture with no bearing damage
    diagnosis:
      - metallurgical inconsistency in forging or induction hardening
      - no known prevention through maintenance
    fixes: []
    parts: []
    costs: []
    notes:
      - "FEA was misused: simulations assumed ideal production tolerances"
      - "Some engines survive 300000-500000 km while others snap early"
      - "Described as a 'Monday morning crankshaft' problem"
  - candidate_issue: cold-start-oil-drain-back
    report_status: documented
    summary: "The oil filter mounted on top of the engine causes the entire oil gallery to drain back into the sump overnight. On cold starts the engine runs dry for 1.5-6 seconds while the gallery refills, with the crankshaft running metal-on-metal."
    symptoms:
      - rattling noise on cold start lasting 1.5-6 seconds
    diagnosis:
      - oil gallery drains from top-mounted filter to sump overnight
      - normal rattle duration is approximately 1.5 seconds
      - rattle lasting 4-6 seconds indicates significant wear occurring at each startup
    fixes: []
    parts: []
    costs: []
    notes:
      - "This is a design characteristic, not fixable by maintenance alone"
  - candidate_issue: oil-pressure-specs-degraded-on-sdv6
    report_status: documented
    summary: "Discovery 4 SDV6 oil pressure specs were lowered compared to the Discovery 3 TDV6 despite the newer engine producing more torque. D3 spec: 0.7 bar idle, 1.9 bar at 3500 RPM. D4 spec: 0.5 bar idle, 1.0 bar at 2500 RPM with vague language."
    symptoms: []
    diagnosis:
      - oil pressure specifications reduced on the higher-torque engine variant
    fixes: []
    parts: []
    costs: []
    notes:
      - "Higher torque engine with more crankshaft stress given lower acceptable oil pressure"
guide_mentions:
  - candidate_guide: oil-viscosity-5w40-upgrade
    summary: "Land Rover specifies 5W-30 chosen for fuel economy and emissions, not engine longevity. The test lab validated 5W-30 when 9/10 engines survived 140000 km and management accepted the 1 failure as out of warranty. South Africa and Australia factory-fill with 5W-40 A3/B4; Citroen C6 with same engine allows 5W-40 and 10W-40."
    parts:
      - name: 5W-40 A3/B4 engine oil
    costs: []
    notes:
      - "5W-30 was validated by test lab on instruction, not determined as optimal"
      - "South Africa specifies 5W-40 A3/B4 from factory"
      - "Australia specifies 5W-40 or 0W-40 A3/B4"
      - "Citroen C6 with same engine allows 5W-40 and 10W-40 semi-synthetic"
      - "Recommendation: run 5W-40 A3/B4 instead of 5W-30"
  - candidate_guide: oil-pump-inspection-endoscope
    summary: "Use an endoscope camera to check the oil pump code through an access port in the engine. Code AC is the original dangerous pump, AE is improved casting, B suffix is fully reinforced with correct rotor."
    parts:
      - name: Deep Stash endoscope camera
        note: "Available on Amazon"
    costs: []
    notes:
      - "If you see AC code, do not start the engine"
      - "2008 models are not guaranteed to have the refurbished pump"
  - candidate_guide: low-rpm-driving-precautions
    summary: "The 3.0L SDV6 produces 600 Nm of torque from as low as 1500 RPM but oil pressure is minimal at low RPM. Flooring the engine below 2000 RPM crushes the oil film in the already-weak inner main bearings, accelerating wear."
    parts: []
    costs: []
    notes:
      - "Never floor the engine below 2000 RPM, especially when cold"
      - "This is the single biggest driver behaviour risk for bearing failure"
      - "600 Nm exceeds a Dodge Challenger 5.7 Hemi"
      - "Shorten oil change intervals; ignore the Land Rover 24000 km recommendation"
---

## Summary

Christian provides a comprehensive engineering analysis of why the Ford/Land Rover TDV6 and SDV6 diesel engine fails, drawing on 32 years of automotive industry experience. The engine's failures trace to a management decision to make it physically short for transverse installation in Jaguar and Peugeot models, which halved bearing surface area compared to comparable engines like the Toyota inline-6. Three distinct fatal failure modes are covered: oil pump housing failure (Discovery 3 specific, checkable with endoscope), bearing failure from insufficient oil film at low RPM under high torque, and spontaneous crankshaft cracking from manufacturing inconsistencies. The video also exposes how Land Rover's 5W-30 oil specification was chosen for emissions compliance rather than engine protection, with other markets (South Africa, Australia) and other vehicles using the same engine (Citroen C6) all specifying thicker 5W-40 oil.

## Notes

- The TDV6 engine is used across Jaguar S-Type, XF, XJ, Land Rover Discovery 3 and 4, Peugeot 407/607, and Citroen C5/C6 with the same core engine
- Oil pressure specs were reduced on the more powerful Discovery 4 SDV6 variant, which is engineering backwards
- Cold-start oil drain-back from the top-mounted filter leaves the engine running dry for 1.5-6 seconds each morning
- The two inner main bearings are the most failure-prone because they each supply two connecting rod bearings, creating the longest pressure drop per revolution
- No maintenance can protect against a metallurgically defective crankshaft from inconsistent forging or hardening
- Christian's ranked recommendations: use 5W-40 A3/B4 oil, shorten oil change intervals, never floor below 2000 RPM, know your service history, check oil pump code on D3
