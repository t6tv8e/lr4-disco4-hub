---
title: "Land Rover Discovery — Epic Oil Pump Test and Compare TDV6"
slug: /videos/oil-pump-test-compare-tdv6/
content_type: video
youtube_id: z6sRSSltG8I
channel: LR TIME
published_at: ""
summary: "Comprehensive teardown, measurement, and bench-testing of multiple TDV6 oil pumps comparing OEM Ford, aftermarket FAI (15mm rotor), and original 13.5mm pumps — including a custom-built flow test rig and overnight drain-down time-lapse."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
  - model: Discovery 4
    years: "2010-2016"
    engine: 3.0 TDV6
    market: Europe
tags:
  - oil-pump
  - engine-oil-pressure
  - tdv6
  - oem-vs-aftermarket
  - timing-belt
  - bench-testing
  - oil-filter
  - oil-cooler
issue_mentions:
  - candidate_issue: oil-pump-tensioner-lug-failure
    report_status: reported
    summary: "Pre-2008/2009 TDV6 oil pumps lack a critical reinforcement rib around the timing belt tensioner mounting point; vibration or incorrect tensioning causes the lug to snap off, destroying the timing belt and wrecking the engine."
    symptoms:
      - catastrophic timing belt failure
      - severe engine damage
    diagnosis:
      - inspect oil pump for presence of reinforcement rib around tensioner mounting point
      - pre-2008/2009 pumps are missing this reinforcement
    fixes:
      - replace oil pump with a reinforced version (2009+ OEM or quality aftermarket)
    preventive_actions:
      - inspect pump for reinforcement at every timing belt service
      - replace pump proactively if unreinforced
    parts:
      - name: Oil pump (reinforced version)
        brand: ""
        part_number: ""
        note: "Must have reinforcement rib around tensioner mounting point"
    costs: []
    notes:
      - "This is the single most important inspection point for early Discovery 3 TDV6 owners"
      - "Reference: Outback Discovery channel documented catastrophic failure from this exact issue"
  - candidate_issue: oil-pump-wear-reduced-pressure
    report_status: reported
    summary: "Oil pump rotor-to-housing clearances increase over time, reducing pump efficiency especially with hot (thinner) oil — pump replacement recommended at every timing belt change interval."
    symptoms:
      - gradual reduction in oil pressure over time
      - longer cold-start pressure build-up
    diagnosis:
      - measure rotor-to-backplate clearance with feeler gauges (0.05mm is good, 0.1mm is marginal)
      - measure rotor-to-housing gap (should not exceed 0.15-0.2mm)
      - inspect pump cover for wear marks
    fixes:
      - replace oil pump at timing belt service intervals
    parts: []
    costs: []
    notes:
      - "Even at 115,000 km, measurable clearance increases were documented"
      - "Oil contamination from engine damage accelerates wear significantly"
guide_mentions:
  - candidate_guide: oil-pump-inspection-and-measurement
    summary: "Detailed feeler-gauge measurement procedures for assessing TDV6 oil pump condition: rotor height, rotor-to-backplate clearance, rotor-to-housing gap, impeller clearances, and visual wear inspection of the pump cover."
    parts:
      - name: Feeler gauge set
        brand: ""
        part_number: ""
        note: "Need 0.05mm, 0.1mm, 0.15mm, and 0.2mm gauges"
    costs: []
    notes:
      - "Rotor-to-backplate: 0.05mm pass / 0.1mm fail = good condition"
      - "Rotor-to-housing: 0.1mm pass / 0.15mm fail = acceptable on new pump"
      - "2006 OEM pump (13.5mm rotor): 0.05mm pass, 0.1mm fail after 115,000 km"
      - "FAI aftermarket felt noticeably looser than OEM during rotor-to-backplate test"
      - "19mm Russian aftermarket pump: reportedly accepts 0.1mm at rotor-to-backplate — too loose"
      - "Check pump cover for wear marks — fingernail should not catch on wear surface"
  - candidate_guide: tdv6-oil-system-explained
    summary: "Explains the complete oil flow path through the TDV6 engine: pump to cooler (dirty oil), through hidden check valve into filter housing (outside-in filtration), then clean oil to gallery and bearings. Includes the undocumented check valve and the filter drain plug mechanism."
    parts: []
    costs: []
    notes:
      - "Oil flows through the cooler before the filter — cooler sees dirty oil"
      - "A check valve between cooler and filter housing prevents drain-back when engine is off — not documented in Land Rover manual"
      - "Filter drain plug on the cap seals a passage inside the housing; loosening the cap 2-3 turns opens the drain to the sump"
      - "Magnetic inspection: run magnets through the vanes before the filter to collect metallic debris"
---

## Summary

Chris and Vera from LR TIME present an exhaustive comparison of TDV6 oil pumps, covering three pump generations: a 2006 OEM Ford pump (13.5mm rotor, no reinforcement), a 2009 OEM pump (13.5mm rotor, with reinforcement), and a new FAI aftermarket pump (15mm rotor, with reinforcement). The video begins with a detailed explanation of the TDV6 oil system flow path, including an undocumented check valve between the oil cooler and filter housing.

Key findings from precision measurements: OEM Ford pumps have tighter rotor-to-backplate clearances than the FAI aftermarket, but the FAI pump's larger 15mm rotor delivers measurably more oil at idle RPM in bench testing. The 19mm Russian aftermarket pump is not recommended due to excessive side clearances that negate its larger displacement. A custom-built test rig with strobe-light RPM verification, precision flow control valve, and pressure gauge confirmed the 15mm pump produces more flow at equivalent conditions. An overnight drain-down time-lapse showed the tighter OEM pump retains oil significantly longer — directly relevant to cold-start pressure build-up time.

The video also documents the critical pre-2008/2009 reinforcement rib issue: early pumps lack a structural reinforcement around the timing belt tensioner mount, and failure of this lug causes catastrophic engine damage.

## Notes

- The oil pump pressure relief valve limits system pressure to 4 bar maximum
- FAI pump gasket protrusion was superior to other aftermarket pumps tested — gaskets sitting too deep in the groove cause oil leaks at the pump face
- Pump replacement adds only modest extra labor beyond a standard timing belt change
- Land Rover recommends removing the upper sump for pump replacement, but this is not strictly necessary
- The FAI pump lacks locator bushings (dowel pin holes not drilled) unlike OEM pumps
