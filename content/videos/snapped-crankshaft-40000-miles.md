---
title: "Snapped Crankshaft After Only 40000 Miles / S4-Ep13"
slug: /videos/snapped-crankshaft-40000-miles/
content_type: video
youtube_id: rpUZoD5_Kjs
channel: LR TIME
published_at: ""
summary: "Teardown of a Discovery 4 SDV6 engine with a snapped crankshaft at only 64,000 km, revealing clean bearings, minimal collateral damage, and a root cause traced to metallurgical inconsistency in the forging and hardening process rather than oil starvation."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 4
    years: ""
    engine: 3.0 SDV6
    market: Europe
tags:
  - engine-failure
  - engine-rebuild
  - engine-rebuild-series
  - crankshaft
  - teardown
  - engine-disassembly
  - metallurgy
  - manufacturing-defect
issue_mentions:
  - candidate_issue: sdv6-snapped-crankshaft
    report_status: diagnosed
    summary: "Crankshaft snapped near the front main journal at only 64,000 km. Bearings were nearly new with no rotation in the block, ruling out oil starvation. One connecting rod destroyed (0.04mm oval). Root cause attributed to metallurgical inconsistency in forging, material composition, or induction hardening, not wear or lubrication failure."
    symptoms:
      - sudden engine seizure
      - engine locked and would not turn
    diagnosis:
      - crankshaft snapped near front main journal
      - broken piece wedged against block and seized rotation
      - no metal chips in sump after overnight drain confirming sudden rather than progressive failure
      - all main and rod bearings showed no rotation and minimal damage
      - one connecting rod measured 0.04mm oval (conical bore) and is condemned
      - all other connecting rods measured 66.004mm bore (tolerance up to 66.013mm) and are within spec
      - pistons show no vertical scratches and negligible wear
      - crankshaft manufactured 16 February 2016 at 18:28:16 (end of shift)
    fixes:
      - new OEM Ford crankshaft sourced (manufactured 2023)
      - damaged connecting rod to be replaced
      - rear crankshaft seal replacement
    parts:
      - name: OEM Ford crankshaft
        note: "Manufactured 2023, sourced in Germany"
      - name: Rear crankshaft seal
        brand: Elring
        note: "45 EUR"
    costs:
      - amount: "45"
        currency: EUR
        note: "Rear crankshaft seal from Elring"
    notes:
      - "Manufacturing timestamp at end of work shift raises informal hypothesis about late-shift quality control"
      - "Crankshaft journal is visibly thin, described as a design weakness"
      - "Many examples of this engine survive 300000-500000 km, so geometry alone does not explain all failures"
      - "Three root causes identified: material composition, forging quality control, induction hardening process"
      - "Machining is ruled out as the variable since dimensional errors would be measurable"
  - candidate_issue: gen-2-engine-identification
    report_status: noted
    summary: "Engine identified as Gen 2 variant by oil pump stamped with Jaguar branding and bolts upsized to M10."
    symptoms: []
    diagnosis:
      - oil pump stamped Jaguar
      - bolts upsized to M10
    fixes: []
    parts: []
    costs: []
    notes:
      - "Gen 2 engine has larger bolt sizes and Jaguar-branded oil pump"
guide_mentions:
  - candidate_guide: sdv6-engine-teardown
    summary: "Complete engine disassembly sequence for the 3.0 SDV6: EGR valve and cooler, belt tensioner, idler pulley, crankshaft pulley, alternator, water pump, power steering pump, AC compressor, engine mounting bracket, two-stage turbocharger assembly, vacuum pump, fuel return lines, glow plug connectors, and cylinder head."
    parts: []
    costs: []
    notes:
      - "Engine removed from top-down and placed on engine stand"
      - "Custom spanner fabricated for recessed bolts; E14 socket ultimately solved the problem"
      - "Two-stage turbocharger system: small and large turbo in series, both water-cooled"
      - "To remove fuel return line connectors, pull the white piece up first then pull the line off"
      - "On Discovery 4 the fuel return line is a straight pull up"
      - "Glow plug connector removal documented"
  - candidate_guide: connecting-rod-measurement
    summary: "Measured all connecting rod bores after crankshaft failure. Impacted rod measured 0.04mm oval and was condemned. All others measured 66.004mm against a tolerance of 66.013mm maximum and are reusable."
    parts: []
    costs: []
    notes:
      - "Conical bore (oval measurement) confirms rod is not reusable"
      - "Standard bore diameter for TDV6/SDV6 connecting rods is approximately 66.004mm"
---

## Summary

Christian tears down a Discovery 4 SDV6 engine that seized at only 64,000 km due to a snapped crankshaft. The teardown reveals surprisingly clean bearings with no signs of oil starvation or progressive wear, confirming this was a sudden metallurgical failure rather than a lubrication problem. The crankshaft snapped near the front main journal, jamming against the block and locking the engine instantly. Only one connecting rod was destroyed (measuring 0.04mm oval), while all other internals including pistons and remaining rods are within specification and reusable. The failure is attributed to inconsistencies in material composition, forging quality control, or induction hardening at the manufacturing stage, with the crankshaft's manufacturing timestamp at the end of a work shift noted as a possible contributing factor.

## Notes

- Gen 2 engine confirmed by Jaguar-stamped oil pump and M10 bolt upsizing
- Two-stage turbocharger system confirmed: small and large turbo in series, both water-cooled
- New OEM Ford crankshaft manufactured in 2023 sourced for the rebuild
- Rear crankshaft seal from Elring costs 45 EUR
- Community contest: Adrian Humpich correctly guessed snapped crankshaft; Tom correctly identified the snap location near number two main journal
- Eliminated theories: oil starvation, timing chain failure, bearing seizure, timing belt failure all ruled out by physical evidence
