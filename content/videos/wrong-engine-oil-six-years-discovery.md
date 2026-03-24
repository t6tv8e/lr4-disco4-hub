---
title: "Wrong engine oil over 6 Years in our Land Rover - OMG"
slug: /videos/wrong-engine-oil-six-years-discovery/
content_type: video
youtube_id: YGvQAbM_YQY
channel: LR TIME
published_at: ""
summary: "Discovers that online oil finders have been recommending the wrong oil spec (A5/B5 instead of A3/B3) for the TDV6 2.7L for five years, finds metal particles during an oil change, and switches to 5W-40 to address dangerously low oil pressure readings."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: "2006"
    engine: 2.7 TDV6
    market: Europe
tags:
  - engine-oil
  - oil-specification
  - oil-pressure
  - HTHS-viscosity
  - metal-particles
  - TDV6
  - maintenance
issue_mentions:
  - candidate_issue: wrong-oil-specification-tdv6
    report_status: confirmed-fix
    summary: "Online oil finders (Castrol, Liqui-Moly, Mobil1, Valvoline, Total) recommend 5W-30 A5/B5 for the 2006 TDV6, but the correct original spec is 5W-30 A3/B3 with HTHS viscosity >= 3.5 mPa*s. A5/B5 has lower HTHS (2.9-3.5 mPa*s), inadequate for an engine designed before that spec existed."
    symptoms:
      - new ticking/rattling noise from passenger side of engine
      - oil pressure dropping below manufacturer critical minimum of 0.7 bar
      - oil pressure at idle reading approximately 0.6 bar (previous baseline was 0.8-0.85 bar)
    diagnosis:
      - external oil pressure gauge installed at distributor port revealed pressure regression
      - magnetic sweep of drained oil revealed ferrous metal particles indicating internal engine wear
      - 2-3 metal particles found in oil filter
    fixes:
      - switched from 5W-30 A5/B5 to 5W-40 C3 mid-SAPS oil (Total Quartz 9000) with HTHS >= 3.5 mPa*s
      - oil pressure at idle immediately improved to above 1.0-1.2 bar after switch
      - at full operating temperature (86C) and 3500 RPM pressure read 1.9 bar (at manufacturer spec)
      - ticking/rattling noise disappeared after oil change
    parts:
      - name: Engine oil 5W-40 C3 mid-SAPS
        brand: Total Quartz 9000
        part_number: ""
        note: "HTHS >= 3.5 mPa*s, matches original A3/B3 high-shear requirement in heavier viscosity grade"
    costs: []
    notes:
      - "B1/B3 oils are discontinued; A3/B3 is being phased out"
      - "Metal particles in filter indicate bearings, cam, or other ferrous components shedding material"
      - "The 5W-40 switch is a pragmatic short-term intervention, not a cure"
      - "Pre-2008 TDV6 owners should verify their oil HTHS rating against the original manual"
  - candidate_issue: low-oil-pressure-tdv6
    report_status: active-investigation
    summary: "Oil pressure at idle dropped to 0.6 bar, below the manufacturer critical minimum of 0.7 bar, despite a recent new oil pump installation two months prior."
    symptoms:
      - oil pressure at idle approximately 0.6 bar at operating temperature
      - ticking/rattling noise on passenger side of engine
    diagnosis:
      - external oil pressure gauge confirmed low readings
      - magnetic sweep of drained oil found ferrous metal particles
      - new oil pump installed 2 months prior ruled out pump failure
    fixes:
      - switching to 5W-40 raised idle pressure above 1.0 bar (temporary measure)
    parts: []
    costs: []
    notes:
      - "Manufacturer minimum idle pressure is 0.7 bar"
      - "At 3500 RPM minimum specification is 1.9 bar"
      - "Metal particles indicate ongoing internal wear requiring monitoring"
guide_mentions:
  - candidate_guide: oil-change-with-metal-particle-inspection
    summary: "Drain oil into an open pan for visual inspection. Use a strong rare-earth magnet dragged through drained oil to detect ferrous wear particles. Loosen oil filter housing drain plug before removing filter to prevent spillage. Pre-filling the oil filter is not possible on this engine."
---

## Summary

Christian and Vera discover they have been running the wrong oil specification in their Discovery 3 TDV6 2.7L for over five years. Online oil finder tools from major brands all recommended 5W-30 A5/B5, but the correct original Land Rover manual specification is 5W-30 A3/B3, which has a higher HTHS (High Temperature High Shear) viscosity rating of at least 3.5 mPa*s versus the 2.9-3.5 mPa*s of A5/B5. With an external oil pressure gauge showing dangerously low readings (0.6 bar at idle versus the 0.7 bar minimum), and ferrous metal particles found during the oil change via magnetic sweep, they switch to 5W-40 C3 oil which matches the original HTHS requirement. The thicker oil immediately restores pressure above 1.0 bar at idle and eliminates the ticking noise, but the metal particles signal ongoing internal wear that requires monitoring.

## Notes

- Online oil finder websites prioritize current products over original manufacturer specifications -- always verify against the vehicle owner's manual
- The HTHS viscosity difference between A3/B3 and A5/B5 matters most at cylinder bores and camshafts which reach 150C operating temperatures
- For high-mileage TDV6 engines, the lower-viscosity A5/B5 modern oil is a poor choice as these engines were not designed for that spec
- Carry an extra liter of oil in the vehicle at all times, especially critical for TDV6 owners
- The oil pan has an internal hump that retains some particles; draining into an open pan allows better inspection
