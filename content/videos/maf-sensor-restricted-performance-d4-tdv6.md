---
title: "Land Rover Discovery 4 3.0 SDV6 / TDV6 MAF Mass Airflow Sensor Restricted Performance Investigated"
slug: /videos/maf-sensor-restricted-performance-d4-tdv6/
content_type: video
youtube_id: yJCVPpZcMPc
channel: powerfulukltd
summary: "Diagnoses and resolves a 'Restricted Performance' warning caused by a faulty MAF sensor on the D4 3.0 TDV6, demonstrating the sensor-swap diagnostic trick unique to the twin-turbo engine's dual MAF setup."
transcript_status: summarized
confidence: single-source
vehicles:
  - model: Discovery 4
    engine: "3.0 TDV6"
tags:
  - maf-sensor
  - mass-airflow
  - restricted-performance
  - diagnostics
  - fault-codes
  - tdv6
  - sdv6
  - turbo
issue_mentions:
  - candidate_issue: maf-sensor-failure-restricted-performance
    report_status: fixed
    summary: "A faulty MAF sensor caused a 'Restricted Performance' warning, diagnosed by swapping the twin MAF sensors and confirmed with OBD fault codes."
    symptoms:
      - "Restricted Performance warning message on dashboard"
      - "fault codes for mass airflow B circuit"
    diagnosis:
      - read fault codes with OBD diagnostic tool (iCarsoft IID used)
      - swap the two identical MAF sensors to confirm which is faulty -- if fault letter changes (B to A), the moved sensor is bad
      - cleaning with brake cleaner, contact cleaner, and EGR cleaner did not fix the faulty sensor
    fixes:
      - replace the faulty MAF sensor with a new genuine Land Rover unit
    parts:
      - name: Mass Airflow (MAF) sensor
        brand: "Genuine Land Rover"
        part_number: ""
        note: "Both sensors use the same part number; common enough that dealers stock it on the shelf"
      - name: iCarsoft IID diagnostic tool
        brand: iCarsoft
        part_number: ""
        note: "OBD2 Bluetooth tool used for fault reading and clearing"
    costs: []
    notes:
      - "The D4 3.0 TDV6/SDV6 has two identical MAF sensors -- one for each stage of the sequential twin turbo"
      - "Rear sensor (B) has 4 wires; front sensor (A) has 3 active wires (temperature circuit present but unused by ECU)"
      - "If sensor A temperature function fails, you can swap A and B since B temperature circuit is not monitored"
      - "Sensors are held by two 8mm self-tapping screws; ensure O-ring sits in groove on intake tube, not on sensor"
      - "Very common fault on high-mileage D4s"
      - "Vehicle had 318,000 km at time of repair"
guide_mentions: []
---

## Summary

This video investigates and resolves a "Restricted Performance" warning on a Discovery 4 3.0 TDV6/SDV6 caused by a faulty Mass Airflow (MAF) sensor. The presenters use an iCarsoft IID diagnostic tool to read fault codes, which revealed two faults related to "mass airflow B circuit." The D4 has two identical MAF sensors because its 3.0 engine uses a twin-stage (sequential) turbo system -- one sensor feeds the primary turbo and the other feeds the secondary turbo that activates at higher revs.

The video demonstrates a clever diagnostic technique: swapping the two MAF sensors to confirm which one is faulty. After swapping, the fault code changed from "airflow B" to just "airflow" (meaning A), confirming the original B-position sensor was defective. The presenters also attempted to clean the faulty sensor with brake cleaner, contact cleaner, and EGR valve cleaner, but none fixed it. A new genuine Land Rover MAF sensor was fitted and all faults cleared.
