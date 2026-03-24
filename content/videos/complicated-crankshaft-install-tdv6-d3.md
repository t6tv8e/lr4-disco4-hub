---
title: "Land Rover - Complicated Crankshaft Install - Discovery TDV6"
slug: /videos/complicated-crankshaft-install-tdv6-d3/
content_type: video
youtube_id: pD9_d4uJPq8
channel: LR TIME
published_at: ""
summary: "Detailed crankshaft installation in a Discovery 3 2.7L TDV6 engine block, revealing that King Bearings (USA) do not fit early TDV6 blocks (74.98 mm housing bore vs King's 75.009-75.029 mm requirement) while FAI bearings (UK) fit correctly. Covers crankshaft inspection and polishing, cylinder honing, oil gallery flushing, plastigauge testing, and multiple torque procedure sources compared."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
tags:
  - engine-rebuild
  - engine-rebuild-series
  - tdv6
  - crankshaft
  - main-bearings
  - king-bearings
  - fai-bearings
  - bearing-selection
  - plastigauge
  - cylinder-honing
  - oil-gallery-cleaning
  - torque-procedure
  - diy
  - professional
issue_mentions:
  - candidate_issue: king-bearing-incompatibility-early-tdv6
    report_status: reported
    summary: "King Engine Bearings (USA) standard bearings do not fit the 2006-2009 TDV6 engine block. The block's housing bore is 74.98 mm, but King's catalog lists standard bearings for a 75.009-75.029 mm bore — 0.3-0.5 mm oversized. This creates excessive crush, making the bearings go out-of-round and too tight. King's catalog incorrectly lists these as the correct standard bearings for the 2.7L 2006-2007 engine."
    symptoms:
      - bearings too tight during assembly
      - excessive crush causing out-of-round bearing fit
    diagnosis:
      - King standard bearings designed for 75.009-75.029 mm housing bore
      - early TDV6 blocks (2006-2009) have 74.98 mm housing bore
      - bearings can only be used if block is line-honed to larger bore
    fixes:
      - use FAI bearings (UK) instead — designed for 74.98 mm bore
      - alternatively line-hone engine block to match King bearing specs (undesirable)
    parts:
      - name: King Engine Bearings (main, standard)
        brand: King
        part_number: ""
        note: "DO NOT USE on 2006-2009 TDV6 without line-honing — housing bore mismatch"
      - name: FAI bearings (main, standard)
        brand: FAI
        part_number: ""
        note: "Correct fit for 74.98 mm bore; significantly cheaper than King; oil holes are original size"
    costs: []
    outcome: "FAI bearings used successfully with plastigauge clearances of 0.038-0.05 mm (within spec of 0.03-0.054 mm)"
    notes:
      - "Island 4x4 (UK retailer) sells King bearings with no bore compatibility warning"
      - "Ford manual shows main bearing housing diameter as 75.00-75.02 mm — King uses this to justify their spec"
      - "Later models (3.0L) have 75 mm+ bore and may be compatible with King bearings"
      - "Running clearance on the looser end is preferable — UK rebuilders also target upper tolerance"
  - candidate_issue: crankshaft-runout-rejection
    report_status: reported
    summary: "Original crankshaft rejected due to 0.25 mm runout on the mains — too much to grind out without leaving a permanently distorted shaft. A used replacement sourced with undisclosed nick near the seal."
    symptoms:
      - excessive runout preventing grinding
    diagnosis:
      - 0.25 mm runout on mains — out of specification
    fixes:
      - sourced used replacement crankshaft (2007 Discovery 3, ~140,000 km)
      - polished out undisclosed nick near rear seal
    parts:
      - name: Used crankshaft
        note: "Sourced online; undisclosed nick near seal surface — seller did not mention it"
    costs: []
    outcome: "Replacement crankshaft measured within spec after polishing; runout under 0.09 mm"
    notes:
      - "Maximum runout spec: 0.05 mm running on A to B"
      - "Main journal nominal: 69.98 mm +/- 0.01 mm with letter coding (A-F) for micron-level factory dimensions"
      - "Rod journal nominal: 62.968 mm +/- 0.01 mm with same letter coding"
      - "Nick near seal surface must be polished out carefully — could cause oil leak if left"
      - "Undisclosed defects when selling crankshafts online are common — always inspect before installation"
guide_mentions:
  - candidate_guide: tdv6-crankshaft-inspection-and-polishing
    summary: "Crankshaft inspection, measurement, and polishing procedure for 2.7L TDV6 before installation."
    parts: []
    costs: []
    notes:
      - "Measure runout on V-blocks; max spec 0.05 mm"
      - "Main journal nominal: 69.98 mm +/- 0.01 mm; letter codes stamped on crank for factory dimensions"
      - "Rod journal nominal: 62.968 mm +/- 0.01 mm; same letter coding"
      - "Polish journals using rope-and-paste technique on rotating crankshaft — never wrap rope around hands"
      - "Clean oil passages with pipe cleaners pulled THROUGH (not back out)"
      - "Polish nicks near seal surfaces carefully — avoid touching sealed contact area"
  - candidate_guide: tdv6-cylinder-honing-glaze-breaking
    summary: "Cleanup honing to break cylinder bore glaze for piston ring bedding on TDV6."
    parts: []
    costs: []
    notes:
      - "Goal: break glaze for new piston ring bedding, NOT material removal"
      - "Use fine oil (not motor oil) for honing"
      - "Target crosshatch angle: 35-45 degrees; achieved 30-45 degrees"
      - "Lower RPM with more up-and-down motion to achieve steeper angle"
      - "Material removal approximately 1 micron or less"
      - "Wipe bore with WD-40 after honing (not engine oil)"
  - candidate_guide: tdv6-oil-gallery-flushing
    summary: "Oil gallery flushing procedure using oil-based lacquer thinner and transfer pump."
    parts: []
    costs: []
    notes:
      - "Use oil-based lacquer thinner (NOT paint-dissolving type) — approximately 25 EUR"
      - "Pump through all galleries using oil change pump powered by battery"
      - "Flush until runoff runs clean"
      - "Verify with rare-earth magnet on a stick inserted into galleries"
      - "Install squirters first (piston cooling jets): 8-11 Nm with Loctite"
  - candidate_guide: tdv6-main-bearing-bolt-torque-comparison
    summary: "Comparison of three torque procedure sources for TDV6 main bearing bolts and the chosen approach."
    parts: []
    costs:
      - amount: 406
        currency: USD
        type: parts
        note: "Main bearing bolts including FedEx overnight shipping and German customs duties"
    notes:
      - "Citroen manual: 60 Nm (+/- 6 Nm), 145 Nm, 90 degrees yield"
      - "Outback Engineering manual: 60 Nm, 145 Nm, 90 degrees yield"
      - "Ford manual: four stages with 60 Nm then 70-110 degrees yield — more detailed, specifies bolt oiling and thrust bearing seating sequence"
      - "Chosen approach (Outback/Ford hybrid): 30 Nm seat, 60 Nm, 145 Nm, ~75-80 degrees yield (intentionally short of 90)"
      - "Side bolts: 47 degrees +/- 20 degrees"
      - "Tightening order written directly on engine block"
      - "Crankshaft pushed forward with pry bar to seat thrust bearing before final torque"
      - "Crankshaft should NOT be rotated during assembly per Ford manual — rotate only after all caps torqued"
      - "Assembly lube: Liqui Moly SAE 75W-80 GL3+ gear oil (same as transfer case fluid) — thicker than engine oil, stays in place"
      - "Crankshaft end float measured: 0.30 mm; spec 0.21-0.43 mm (both Ford and Land Rover manuals agree)"
---

## Summary

Christian and Vera install a replacement crankshaft into a Discovery 3 2.7L TDV6 engine block, discovering a critical bearing selection issue: King Engine Bearings from the USA do not fit the 2006-2009 TDV6 block due to a housing bore mismatch (74.98 mm block vs King's 75.009-75.029 mm requirement). FAI bearings from the UK fit correctly and are used instead.

The original crankshaft was rejected for 0.25 mm runout on the mains. The used replacement had an undisclosed nick near the rear seal that was polished out. Cylinder bores were honed to break the glaze for new piston ring bedding, targeting 35-45 degree crosshatch angles. Oil galleries were flushed with oil-based lacquer thinner pumped through with a transfer pump. Plastigauge clearances with FAI bearings ranged 0.038-0.05 mm (within the 0.03-0.054 mm Ford spec). Three different torque procedure sources were compared (Citroen, Outback Engineering, Ford manuals), with a hybrid approach chosen. Crankshaft end float measured 0.30 mm (spec 0.21-0.43 mm).

## Notes

- Part of the LR TIME engine rebuild series for Fabian's Discovery 3
- Critical warning: King Bearings standard catalog is misleading for early TDV6 — verify block housing bore before ordering
- Main bearing bolts cost 406 USD total including FedEx overnight and German customs duties — a cautionary international sourcing tale
- Assembly lube: Liqui Moly SAE 75W-80 GL3+ gear oil (transfer case fluid) applied with a toothbrush
- FAI bearing oil holes are smaller than King's but match original OEM size — preferred for conservative rebuild
- Ford manual specifies crankshaft should not be rotated during assembly until all caps are torqued
