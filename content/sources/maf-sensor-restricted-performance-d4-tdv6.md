---
title: "Land Rover Discovery 4 3.0 SDV6 / TDV6 MAF Mass Airflow Sensor Restricted Performance Investigated"
content_type: video
youtube_id: yJCVPpZcMPc
channel: powerfulukltd
transcript_status: auto-transcribed
confidence: single-source
vehicles:
  - model: Discovery 4
    engine: "3.0 TDV6"
tags: [maf-sensor, mass-airflow, restricted-performance, diagnostics, fault-codes, tdv6, sdv6, turbo]
---

## Summary

This video investigates and resolves a "Restricted Performance" warning on a Discovery 4 3.0 TDV6/SDV6 caused by a faulty Mass Airflow (MAF) sensor. The presenters use an iCarsoft IID diagnostic tool to read fault codes, which revealed two faults related to "mass airflow B circuit." The D4 has two identical MAF sensors because its 3.0 engine uses a twin-stage (sequential) turbo system -- one sensor feeds the primary turbo and the other feeds the secondary turbo that activates at higher revs.

The video demonstrates a clever diagnostic technique: swapping the two MAF sensors to confirm which one is faulty. After swapping, the fault code changed from "airflow B" to just "airflow" (meaning A), confirming the original B-position sensor was defective. The presenters also attempted to clean the faulty sensor with brake cleaner, contact cleaner, and EGR valve cleaner, but none fixed it. A new genuine Land Rover MAF sensor was fitted and all faults cleared. The vehicle had 318,000 km on the clock.

## Key Points

- "Restricted Performance" message is a common D4 fault -- MAF sensor failure is a frequent cause
- The D4 3.0 TDV6/SDV6 has TWO identical MAF sensors (same part number) -- one for each stage of the sequential twin turbo
- Each sensor has a mass airflow circuit and an air temperature sensor built in
- The rear sensor (B) has 4 wires (mass airflow + temperature both used by ECU); the front sensor (A) has only 3 active wires (temperature circuit is present but not used by ECU)
- Diagnostic swap trick: swap the two sensors to confirm which is faulty -- if the fault letter changes (B to A or vice versa), the sensor you moved is the bad one
- If sensor A's temperature function fails, you can swap A and B since B's temperature circuit isn't monitored
- Fault code "airflow B" = the sensor nearest the front/more accessible; fault code "airflow" (no letter) = the rear sensor
- Sensors are held by two 8mm self-tapping screws into the plastic intake body
- Each sensor has an O-ring seal -- ensure it sits in the groove on the intake tube, not on the sensor itself
- Cleaning attempts with brake cleaner, contact cleaner, and EGR valve cleaner all failed to fix the faulty sensor
- The local Land Rover dealer had the part in stock on the shelf -- it is that common a failure
- The vehicle had 318,000 km at the time of this repair

## Parts Mentioned

- Mass Airflow (MAF) sensor -- genuine Land Rover (both sensors are the same part number)
- Available from Land Rover dealers and eBay
- iCarsoft IID diagnostic tool (OBD2 Bluetooth tool used for fault reading/clearing)
- Halfords brake cleaner (tested, did not fix)
- Contact cleaner (tested, did not fix)
- EGR valve cleaner (tested, did not fix)

## Notes

- Very common fault on high-mileage D4s -- worth checking MAF sensors early when diagnosing restricted performance
- The swap diagnostic technique is an excellent zero-cost way to confirm which sensor is faulty before buying a replacement
- The twin-turbo explanation is useful context: primary turbo at low revs, secondary turbo comes in at higher revs
- At 318,000 km this may have been the original sensor -- impressive longevity despite eventual failure
