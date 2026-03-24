---
title: "Land Rover Discovery 3 - How to diagnose the low pressure fuel pump - Diesel filter change"
slug: /videos/diagnose-low-pressure-fuel-pump-diesel-filter-change/
content_type: video
youtube_id: SeIk9dtPJIE
channel: LR TIME
published_at: ""
summary: "Diagnosing a P2290 high-pressure fuel rail fault on a Discovery 3 by testing the low-pressure fuel system, revealing a critically clogged diesel filter that had never been replaced despite full dealer service history, resolving a 4,000 EUR dealer repair quote for 40 EUR."
transcript_status: summarized
confidence: professional-report
duration: ""
vehicles:
  - model: Discovery 3
    years: "2009"
    engine: 2.7 TDV6
    market: Europe
tags:
  - fuel-system
  - fuel-filter
  - fuel-pump
  - diagnostics
  - p2290
  - low-pressure-fuel
  - high-pressure-fuel
  - diy-repair
  - dealer-misdiagnosis
  - diesel
issue_mentions:
  - candidate_issue: p2290-high-pressure-fuel-rail-low
    report_status: resolved
    summary: "P2290 fault code (high pressure fuel rail pressure too low) caused suspension and transmission to drop, requiring full stop and restart. Dealer quoted 4,000 EUR for new high-pressure fuel pump. Root cause was a critically clogged diesel fuel filter that had never been replaced despite full dealer service history. 40 EUR filter replacement resolved the fault."
    symptoms:
      - P2290 fault code (high pressure fuel rail pressure too low)
      - suspension drops during driving
      - transmission drops during driving
      - requires stop and restart to resume driving
    diagnosis:
      - pump voltage normal at 12.5V
      - pump current draw normal at 1.9-2.0 amps
      - static fuel pressure acceptable at 5.8 PSI
      - fuel delivery volume critically low at 400 ml per minute (spec is up to 1.6 litres per minute, only 25 percent of minimum)
      - diesel filter visibly corroded with galvanised housing rusted through
      - review of all dealer invoices showed no diesel filter replacement ever recorded
    fixes:
      - diesel fuel filter replaced
    parts:
      - name: Diesel fuel filter
        note: "40 EUR, 2009 model uses different filter than earlier D3s"
      - name: Oil drain plug
        note: "Replaced, original was stripped and undertightened"
      - name: OEM Mann paper oil filter
        brand: Mann
        note: "Larger filter surface area than reusable aftermarket unit"
    costs:
      - amount: "40"
        currency: EUR
        note: "Diesel fuel filter"
    notes:
      - "High-pressure fuel system faults are most often caused by low-pressure fuel system failures"
      - "Dealer quoted 4,000 EUR for high-pressure fuel pump replacement"
      - "P2290 did not reappear during 50-60 km test drive after filter change"
      - "Dealership maintenance does not guarantee complete maintenance; verify filters and consumables have actually been replaced"
      - "Oil drain plug was stripped and undertightened, also replaced during service"
guide_mentions:
  - candidate_guide: low-pressure-fuel-system-diagnosis
    summary: "Four-point diagnostic checklist for low-pressure fuel system: pump voltage, pump current draw, static fuel pressure, and fuel delivery volume in litres per minute. Credited to Robbie at discovery3.co.uk."
    parts:
      - name: Vacuum gauge
        note: "Connect to Schrader valve in engine compartment"
      - name: Voltmeter or amp meter
        note: "Connect to fuse F1 in engine compartment"
      - name: Measuring container
    costs: []
    notes:
      - "Measure voltage at pump (normal: 12.5V)"
      - "Measure current draw (normal: 1.9-2.0 amps)"
      - "Measure static fuel pressure via Schrader valve"
      - "Run pump for exactly one minute into measuring container to test delivery volume"
      - "Spec: pump should deliver up to 1.6 litres per minute"
      - "400 ml per minute is only 25 percent of spec and indicates restriction"
      - "Jumper the fuel pump to run without ignition for delivery test"
      - "Warm fuel delivers slightly more volume than cold fuel"
      - "Post-filter pressure test at 2000 RPM showed 4.5-5.5 PSI improvement"
      - "Diagnostic procedure credited to Robbie at discovery3.co.uk"
  - candidate_guide: diesel-filter-replacement-2009-d3
    summary: "Diesel filter replacement on 2009 Discovery 3 which uses a different filter design than earlier models. Disconnect water sensor, break loose the filter housing, and swap the water sensor and O-rings to the new filter."
    parts:
      - name: Diesel fuel filter
        note: "40 EUR, includes new O-rings"
    costs:
      - amount: "40"
        currency: EUR
        note: "Diesel fuel filter"
    notes:
      - "Disconnect water sensor before removal"
      - "Two O-rings included with new filter"
      - "Transfer water sensor from old filter to new"
      - "2009 model filter is different from earlier Discovery 3 filters"
      - "Old filter was visibly corroded on underside, clearly older than claimed service records"
---

## Summary

Christian helps Fabian diagnose a P2290 fault code on his 2009 Discovery 3 that a dealer quoted 4,000 EUR to fix by replacing the high-pressure fuel pump. Following a four-point low-pressure fuel system diagnostic procedure (voltage, current, pressure, and flow volume), the fuel delivery test revealed only 400 ml per minute against a specification of 1.6 litres -- just 25 percent of the required flow. A 40 EUR diesel fuel filter replacement resolved the issue, with no fault recurrence over a 50-60 km test drive. The old filter was visibly corroded and had never been replaced despite a complete Land Rover dealer service history, demonstrating that dealer maintenance records cannot be blindly trusted.

## Notes

- Diagnostic procedure credited to Robbie at discovery3.co.uk
- A blocked fuel filter starves the high-pressure pump, triggering fault codes that mimic a failed pump
- The 2009 Discovery 3 uses a different fuel filter design than earlier models
- Oil drain plug was also found stripped and undertightened during the service
- Oil filter upgraded to OEM Mann paper filter with larger surface area
- Always diagnose low-pressure fuel system before condemning a high-pressure fuel pump
