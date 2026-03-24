---
title: "Land Rover Suspension Clonk & Steering Shake — FIXED! S6-EP43"
slug: /videos/suspension-clonk-steering-shake-fix/
content_type: video
youtube_id: sGZLjeNgB1I
channel: LR TIME
published_at: ""
summary: "Multi-topic episode covering front suspension bushing replacement to fix clonking and steering shake on a Discovery 3, Discovery 4 front brake pad service with critical orientation details, and a detailed SDV6 Gen 2 oil change with oil dilution lecture and filter chip analysis."
transcript_status: summarized
confidence: professional-report
vehicles:
  - model: Discovery 3
    years: "2004-2009"
    engine: 2.7 TDV6
    market: Europe
  - model: Discovery 4
    years: "2010-2016"
    engine: 3.0 SDV6
    market: Europe
tags:
  - suspension-bushings
  - steering-shake
  - clonking
  - brake-pads
  - brake-discs
  - oil-change
  - oil-dilution
  - sdv6-gen2
  - oil-filter-analysis
  - diy
issue_mentions:
  - candidate_issue: front-suspension-bushing-clonk
    report_status: resolved
    summary: "Worn front suspension bushings caused a clonking noise and steering wheel shake/vibration during braking — diagnosed via undercar camera footage and repaired by pressing in new bushings using a Chinese bushing press kit."
    symptoms:
      - clonking noise from front suspension
      - steering wheel shaking/flopping when braking
      - bouncing and jumping visible on camera mounted under the vehicle
    diagnosis:
      - camera mounted underneath vehicle during test drive showed loose bushing area bouncing and vibrating
    fixes:
      - mark all bolt positions before disassembly to preserve alignment
      - press out old bushings and press in new ZF replacement bushings using AliExpress bushing press kit (75 EUR)
      - replace only worn bushings, not entire arms, to avoid needing wheel alignment
    parts:
      - name: Suspension bushings (standard)
        brand: "ZF"
        part_number: ""
        note: "Standard bushings for normal use; armored Meyle bushings available for vehicles over 3 tons"
      - name: Bushing press kit
        brand: "AliExpress"
        part_number: ""
        note: "Approximately 75 EUR; recommended by a contact in France; outperformed homemade tools"
    costs:
      - amount: 75
        currency: EUR
        type: tools
        note: "Bushing press kit from AliExpress"
    outcome: "Clonking eliminated; steering straight after reinstallation with only minor toe adjustment needed"
    notes:
      - "OEM bushings outlast aftermarket — even ZF, Meyle, and Lemfoerder are considered inferior to original"
      - "Mark all bolt positions front and back before removal to preserve alignment"
      - "Leave 4mm gap when pressing bushings in — do not press too deep"
      - "Armored bushings from Meyle reserved for vehicles above 3 tons or with rooftop tent"
      - "Front ride height set to 470mm using GAP tool deflate-corners procedure"
  - candidate_issue: discovery-4-brake-rattle
    report_status: resolved
    summary: "Front brake rattle and high-speed vibration on a Discovery 4 caused by worn discs and potentially incorrectly oriented brake pads from a previous service — resolved with new Bosch discs, Brembo pads, and correct pad orientation."
    symptoms:
      - brake rattle from front
      - vibration at high speed (160+ km/h) under braking
    diagnosis:
      - brake rattle that becomes permanent once ignored due to wear pattern development
      - previous brake service may have installed pads in incorrect orientation
    fixes:
      - replace front discs (Bosch) and pads (Brembo)
      - ensure correct pad orientation with chamfer matching and resonator weight placement
      - bushed slide pin must go on the bottom of the caliper
    parts:
      - name: Front brake discs
        brand: "Bosch"
        part_number: ""
        note: "Preferred over Brembo discs; worst experience was Brembo discs + Brembo pads combination"
      - name: Front brake pads
        brand: "Brembo"
        part_number: ""
        note: "Pads appear identical but are mirror images — large vs small chamfer determines which side"
    costs: []
    outcome: "Brake rattle eliminated"
    notes:
      - "Brake pads are mirror images despite identical part numbers — match large/small chamfers"
      - "Resonator weight on pad must face outward and upward"
      - "Bushed slide pin must be on the bottom; solid pin on top — braking torque pushes into solid pin"
      - "Wheel nut torque sequence: 4 Nm, then 70 Nm (with wheel off ground), then 140 Nm — cross pattern"
      - "No anti-seize on caliper mounting bolts — pre-coated with locking compound"
      - "Once brake rattle is ignored, it becomes permanent — fix early"
  - candidate_issue: sdv6-gen2-oil-dilution
    report_status: reported
    summary: "SDV6 Gen 2 engines suffer from significant oil dilution caused by DPF regeneration diesel injection — especially during short trips and cold temperatures. Oil level rises and viscosity drops from 5W30 to 5W20 or lower, leading to accelerated engine wear."
    symptoms:
      - rising oil level over time
      - oil viscosity degradation
      - metallic chips in oil filter at standard service intervals
    diagnosis:
      - oil filter chip inspection across multiple service intervals shows progressive improvement after switching to 5W40 and 10,000 km intervals
      - Land Rover dealer servicing at 25,000 km intervals with 5W30 leads to engine failure at approximately 150,000 km
    fixes:
      - use 5W40 oil instead of manufacturer-recommended 5W30
      - change oil every 10,000 km (Land Rover's own "arduous use" recommendation) instead of standard 25,000 km intervals
    preventive_actions:
      - use 5W40 oil in all diesel Land Rovers
      - follow arduous use oil change intervals (10,000 km / 6,000 miles)
      - inspect oil filter for metallic chips at every oil change
      - keep used oil filters for comparison across changes
    parts:
      - name: Engine oil (5W40)
        brand: ""
        part_number: ""
        note: "5W40 instead of 5W30 to compensate for dilution-induced viscosity loss"
      - name: Oil filter
        brand: "Mann"
        part_number: ""
        note: "Inspect for chips at every change; keep for comparison"
    costs: []
    notes:
      - "Gen 2 SDV6 (258 HP) produced 2015-2016 and used in production vehicles through approximately 2023"
      - "Oil dilution of 1.2-1.3 L per interval for short-trip drivers; under 0.5 L for primarily highway drivers"
      - "Filter chip analysis across 3 successive oil changes on one vehicle showed dramatic improvement after switching protocol"
      - "Gen 2 engines typically fail at approximately 150,000 km under standard Land Rover dealer servicing"
      - "Suction pump extraction is cleaner than drain plug method on Discovery 4 (oil hits frame during drain)"
      - "Fill 5.8 L to target center of dipstick — oil level rises as it drains back through galleries"
      - "This will not prevent crankshaft snapping — that can still happen at any time"
guide_mentions:
  - candidate_guide: front-suspension-bushing-replacement
    summary: "Pressing out and replacing front upper suspension arm bushings using an AliExpress bushing press kit, with emphasis on marking bolt positions to preserve alignment and leaving a 4mm gap when pressing in."
    parts:
      - name: Suspension bushings
        brand: "ZF"
        part_number: ""
        note: "Standard for normal use; Meyle armored for heavy vehicles"
      - name: Bushing press kit
        brand: "AliExpress"
        part_number: ""
        note: "Approximately 75 EUR"
    costs: []
    notes:
      - "Mark all bolt positions before removal"
      - "Replace only worn bushings to avoid alignment"
      - "Front ride height: 470mm; use GAP tool deflate-corners before adjusting on lift"
  - candidate_guide: discovery-4-front-brake-pad-service
    summary: "Correct orientation procedure for Discovery 4 front brake pads: match large/small chamfers between inner and outer pads, position resonator weight outward and upward, and ensure bushed slide pin goes on the bottom of the caliper."
    parts:
      - name: Front brake discs
        brand: "Bosch"
        part_number: ""
        note: ""
      - name: Front brake pads
        brand: "Brembo"
        part_number: ""
        note: ""
    costs: []
    notes:
      - "Pads are mirror images despite identical part numbers"
      - "Resonator weight must face outward and upward"
      - "Bushed slide pin on bottom; solid pin on top"
      - "No anti-seize on caliper mounting bolts"
      - "Caliper bracket bolts: 275 Nm (front)"
      - "Wheel nut sequence: 4 Nm, 70 Nm (wheel off ground), 140 Nm"
  - candidate_guide: sdv6-gen2-oil-change-protocol
    summary: "Oil change procedure for SDV6 Gen 2 using 5W40 oil at 10,000 km intervals, including suction pump extraction method, oil filter chip inspection technique, and service interval reset via GAP tool."
    parts:
      - name: Engine oil (5W40)
        brand: ""
        part_number: ""
        note: "5.8 L fill quantity targets center of dipstick"
      - name: Oil filter (Mann)
        brand: "Mann"
        part_number: ""
        note: ""
      - name: Oil suction pump
        brand: ""
        part_number: ""
        note: "Approximately 60 EUR from Amazon; clean but lacks readable scale"
    costs: []
    notes:
      - "Loosen oil filter cap 2 turns to drain filter housing before removal"
      - "Inspect filter under light for metallic chips — compare across successive changes"
      - "Fill 5.8 L; oil level rises on dipstick as oil drains back through galleries"
      - "Service interval reset: GAP tool > Instrument Pack > Service Interval Reset"
---

## Summary

This multi-topic episode from LR TIME covers three major jobs. First, Christian diagnoses and repairs a front suspension clonking and steering shake on a Discovery 3 by replacing worn upper arm bushings — confirmed via undercar camera footage during a test drive. Using a 75 EUR AliExpress bushing press kit (recommended by a contact in France), the job was completed in about four hours with only minor toe adjustment needed afterward, because replacing only the bushings preserves OEM alignment.

Second, front brakes on a Discovery 4 being prepared for sale are serviced with Bosch discs and Brembo pads, with the video documenting critical pad orientation details that are easy to get wrong: the pads are mirror images despite identical part numbers, the resonator weight must face outward and upward, and the bushed slide pin must go on the bottom of the caliper.

Third, an oil change on the Discovery 4's SDV6 Gen 2 engine includes a detailed lecture on oil dilution from DPF regeneration. Filter chip analysis across three successive services on a friend's Discovery 4 provides direct visual evidence that switching from 5W30 at 25,000 km intervals to 5W40 at 10,000 km intervals dramatically reduced engine wear. The Gen 2 engine's typical failure at 150,000 km under standard dealer servicing is attributed directly to inadequate oil change intervals and viscosity grade.

## Notes

- OEM bushings consistently outlast even premium aftermarket brands (ZF, Meyle, Lemfoerder) — replace only what is actually worn
- Brake rattle left unfixed becomes permanent due to wear pattern development — address immediately
- Best brake combination per experience: Bosch discs + Brembo pads; worst: Brembo discs + Brembo pads
- Oil dilution varies significantly by driving pattern: 1.2-1.3 L for short-trip drivers vs under 0.5 L for highway drivers
- 5W40 and 10,000 km intervals will not prevent crankshaft snapping but will significantly reduce bearing and surface wear
- Dash cam wiring adapter from Powerful UK (Simon) enables clean plug-in installation without hardwiring
