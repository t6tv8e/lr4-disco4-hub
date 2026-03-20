---
title: "Land Rover Discovery 3 & 4 / Range Rover FBH heater Webasto Thermo Top V (Fuel Burning Heater)"
content_type: video
youtube_id: mIs5s7JMsTg
channel: powerfulukltd
transcript_status: auto-transcribed
confidence: single-source
vehicles:
  - model: Discovery 3
    engine: ""
  - model: Discovery 4
    engine: ""
tags: [FBH, webasto, fuel-burning-heater, park-heater, timed-climate, auxiliary-heater, CCF, IID-tool, diagnostics, heating]
---

## Summary

An in-depth introduction to the Webasto Thermo Top V fuel burning heater (FBH) fitted to Discovery 3 and Discovery 4 models. The presenter explains how the unit works, demonstrates it starting up and heating the cabin via the timed climate feature, uses the GAP Diagnostics IID tool to read live values and fault codes, and shows how to enable or disable the timed climate option via CCF (Car Configuration File) programming.

The video covers the full start-up sequence of the FBH, from glow plug heating through diesel atomisation to steady-state combustion, including the initial smoke output that is normal especially on first winter start-up. The presenter demonstrates the complete 30-minute heating cycle on a Discovery 4, noting that it takes approximately 10-12 minutes before warm air reaches the cabin.

## Key Points

- The FBH is also known as: fuel burning heater, park heater, Webasto heater, auxiliary heater
- Available in diesel and petrol versions; draws fuel from the main fuel tank
- The unit contains a water jacket, glow plug, water pump, and fuel pump
- Start-up sequence: glow plug heats up, diesel is atomised and injected, combustion begins (with initial smoke), water pump activates once jacket is hot, hot water circulates to cabin
- The FBH activates automatically when external temperature is below approximately 5 degrees Celsius (a snowflake symbol appears on the dash)
- Timed climate allows two preset on-times; the heater runs for exactly 30 minutes per cycle
- It takes roughly 10-12 minutes before the cabin starts to feel warm; initially only windscreen vents blow
- Significant smoke is normal on first start-up or after long periods of non-use
- Be cautious if parking in a garage due to exhaust fumes and smoke

**IID Tool Diagnostics:**
- Live values available: fuel pump status, glow plug status, in-car temperature, operating voltage, water pump on/off, external temperature
- Can perform "check operation" to run the heater
- Can perform fuel priming routine (useful if the heater has been standing idle)
- Can read and clear fault codes for the auxiliary heater control module (AHCM)

**CCF Configuration:**
- Timed climate can be enabled/disabled via the IID tool under Car Configuration > HVAC > Timed Climate
- Always connect a battery charger before reflashing any ECU
- An ignition cycle (on/off/on) may be needed after CCF changes take effect
- The same menu also shows options for "heater call start" (remote start, requires additional hardware)

**Communication:**
- The Webasto communicates via W-bus (Webasto bus) — a single-wire pseudo-LIN protocol
- Early Discovery 3s have a red W-bus wire; later D3s may not; D4s reportedly do
- The unit also communicates via CAN bus

**Quick Fault Reset:**
- Pull fuse 28 (the large purple wire/fuse providing main power to the FBH) to perform a power reset

## Parts Mentioned

- Webasto Thermo Top V (the FBH unit itself)
- GAP Diagnostics IID tool (for diagnostics and CCF programming)
- Fuse 28 (main power supply to the FBH)
- W-bus diagnostic connector/pin

## Notes

- The presenter bought a spare FBH unit off eBay for teardown in a future video
- Range Rover Sport uses the same timed climate menu system
- The presenter plans follow-up videos covering W-bus analysis, deeper diagnostics, and FBH strip-down
- The fuel priming routine can cause excessive smoke on next start-up as it purges fuel through the system
- The presenter notes that activating timed climate on a Sunday when you do not need it will still produce smoke from under the car
