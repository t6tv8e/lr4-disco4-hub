import Link from "next/link";
import { getAllCandidateIssues } from "@/lib/content";
import { formatSlug } from "@/lib/format";
import { SEVERITY_CONFIG, type Severity } from "@/lib/severity";

export const metadata = {
  title: "Pre-Purchase Checklist",
  description: "Essential checks before buying a Land Rover Discovery 4 / LR4. Covers engine, suspension, drivetrain, electrics, and more.",
};

interface ChecklistItem {
  issueSlug: string;
  title: string;
  what_to_check: string;
  severity: Severity;
}

interface ChecklistSection {
  heading: string;
  items: ChecklistItem[];
}

const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    heading: "Under the Bonnet",
    items: [
      { issueSlug: "oil-pump-failure-tdv6", title: "Oil Pump (TDV6)", what_to_check: "Check oil pressure with GAP IID tool at idle. Listen for ticking/rattling on cold start. Ask for oil change history — 5W-30 is too thin for the SDV6.", severity: "critical" },
      { issueSlug: "timing-belt-failure", title: "Timing Belt", what_to_check: "Ask when the timing belt was last changed. Replacement is due every 120,000 km / 7 years. Failure is catastrophic.", severity: "critical" },
      { issueSlug: "crankshaft-bearing-failure-lifecycle", title: "Crankshaft Bearings", what_to_check: "Listen for deep knocking at warm idle. Check oil for metallic glitter (drain a sample). Especially critical on SDV6.", severity: "critical" },
      { issueSlug: "engine-cold-start-rattle", title: "Cold Start Rattle", what_to_check: "Start from cold — brief rattle is normal, prolonged rattle (>5 seconds) indicates oil drain-back or bearing wear.", severity: "high" },
      { issueSlug: "inlet-manifold-crack", title: "Intake Manifold (3.0L)", what_to_check: "Inspect the plastic intake manifold for hairline cracks. Known weak point on the 3.0L. Listen for hissing/boost leaks.", severity: "high" },
      { issueSlug: "water-pump-failure", title: "Water Pump", what_to_check: "Check for coolant weeping below the water pump. Look for staining, crusty residue around the pump housing.", severity: "high" },
      { issueSlug: "turbocharger-seizure-oil-contamination", title: "Turbochargers", what_to_check: "Revving should produce smooth boost with no smoke. Excessive blue/white smoke under load indicates turbo seal issues.", severity: "high" },
      { issueSlug: "intercooler-leak", title: "Intercooler", what_to_check: "Check for oil residue on intercooler pipes. Corroded intercoolers leak boost pressure.", severity: "medium" },
    ],
  },
  {
    heading: "Exhaust & Emissions",
    items: [
      { issueSlug: "dpf-blocked", title: "DPF (Diesel Particulate Filter)", what_to_check: "Check DPF soot loading via diagnostics. High soot % means regeneration issues. Ask about driving patterns — short trips kill DPFs.", severity: "high" },
      { issueSlug: "egr-valve-seizure", title: "EGR Valve", what_to_check: "Check for EGR fault codes. A seized EGR causes rough idle and reduced power. Common on all diesel variants.", severity: "high" },
      { issueSlug: "turbo-actuator-sticking", title: "Turbo Actuator", what_to_check: "Check for limp mode history. Sticking actuators cause intermittent power loss and dash warnings.", severity: "medium" },
    ],
  },
  {
    heading: "Transmission & Drivetrain",
    items: [
      { issueSlug: "zf-8hp-transmission-shudder", title: "ZF Transmission (8HP/6HP)", what_to_check: "Drive through all gears — shifts should be smooth. Shudder or harsh shifts indicate overdue fluid change or worse.", severity: "high" },
      { issueSlug: "driveshaft-center-bearing-failure", title: "Propshaft Centre Bearing", what_to_check: "Listen for clunking or vibration at 60-80 km/h. Rubber mounting deteriorates and causes a noticeable drone.", severity: "high" },
      { issueSlug: "dual-mass-flywheel-wear", title: "Dual Mass Flywheel (Manual)", what_to_check: "Manuals only: listen for rattling at idle in neutral that disappears when clutch is pressed.", severity: "high" },
      { issueSlug: "front-differential-pinion-seal-leak", title: "Differential Seals", what_to_check: "Look under the front and rear diffs for oil seepage. Pinion seal leaks are common.", severity: "medium" },
      { issueSlug: "cv-boot-torn", title: "CV Boots", what_to_check: "Inspect inner and outer CV boots for splits. Torn boots lead to rapid joint failure.", severity: "medium" },
    ],
  },
  {
    heading: "Underneath",
    items: [
      { issueSlug: "underbody-corrosion-structural", title: "Chassis / Frame Rust", what_to_check: "Get underneath and check chassis rails, especially around rear suspension mounts and tow bar attachment points. Structural rust is a MOT/TUV killer.", severity: "critical" },
      { issueSlug: "brake-line-corrosion-failure", title: "Brake Lines", what_to_check: "Inspect all brake hard lines for corrosion. Corroded brake lines can fail without warning. Common in salt-belt vehicles.", severity: "critical" },
      { issueSlug: "d4-tow-bar-chassis-wear-recall", title: "Tow Bar Chassis Points", what_to_check: "Check tow bar mounting area for wear and cracking. Subject to a recall.", severity: "high" },
    ],
  },
  {
    heading: "Suspension",
    items: [
      { issueSlug: "air-suspension-compressor-failure", title: "Air Compressor", what_to_check: "Start the car and listen for the compressor cycling excessively. It should settle within a minute. Continuous running = leak somewhere.", severity: "high" },
      { issueSlug: "air-suspension-airbag-leak", title: "Air Bags / Struts", what_to_check: "Park overnight and check if the car has dropped at one corner. Use diagnostics to check air bag pressures and ride height sensors.", severity: "high" },
      { issueSlug: "air-suspension-valve-block-o-ring-failure", title: "Valve Block O-Rings", what_to_check: "Hissing sound from the valve block area indicates O-ring failure. Cheap fix but needs diagnosis.", severity: "medium" },
      { issueSlug: "front-suspension-bushing-wear", title: "Front Suspension Bushings", what_to_check: "Grab the front wheel and check for play. Worn lower arm bushings cause clonking over bumps and vague steering.", severity: "medium" },
    ],
  },
  {
    heading: "Inside the Cabin",
    items: [
      { issueSlug: "sunroof-seal-water-ingress", title: "Sunroof / Water Ingress", what_to_check: "Check the headliner, A-pillar trim, and footwells for dampness. Sunroof drain blockages cause major water ingress.", severity: "high" },
      { issueSlug: "a-pillar-water-leak-factory-defect", title: "A-Pillar Leak", what_to_check: "Known factory defect. Lift the A-pillar trim and check for water stains or mould. Especially after rain.", severity: "high" },
      { issueSlug: "heater-blend-door-motor", title: "Heater Blend Door", what_to_check: "Test climate control — both sides should blow hot and cold independently. Clicking sounds from the dash indicate a worn motor.", severity: "medium" },
      { issueSlug: "sticky-buttons-soft-touch-coating", title: "Sticky Buttons", what_to_check: "Check console buttons and controls for degraded soft-touch coating. Cosmetic only but indicates age/UV exposure.", severity: "low" },
    ],
  },
  {
    heading: "Electrics",
    items: [
      { issueSlug: "battery-voltage-gearbox-errors", title: "Battery Health", what_to_check: "Low battery voltage causes cascading electrical faults including phantom gearbox errors. Test battery voltage — should be >12.4V with engine off.", severity: "high" },
      { issueSlug: "dsc-abs-module-failure", title: "DSC / ABS Module", what_to_check: "Check for DSC/ABS warning lights. Module failure is expensive. Run a diagnostic scan for stored fault codes.", severity: "high" },
      { issueSlug: "auxiliary-battery-failure", title: "Auxiliary Battery", what_to_check: "The auxiliary battery under the passenger seat fails silently. Test it — a dead aux battery causes intermittent electrical gremlins.", severity: "medium" },
      { issueSlug: "electric-parking-brake-failure", title: "Electronic Parking Brake", what_to_check: "Apply and release the EPB several times. It should engage/disengage cleanly without warning lights. Actuator and motor issues are common.", severity: "medium" },
    ],
  },
  {
    heading: "Test Drive",
    items: [
      { issueSlug: "air-suspension-side-to-side-height-imbalance", title: "Suspension Level", what_to_check: "Park on flat ground and eyeball the ride height. Any visible lean or corner drop points to air suspension issues.", severity: "high" },
      { issueSlug: "gearbox-harsh-shifting", title: "Gear Changes", what_to_check: "Drive gently and firmly — all shifts should be smooth. Harsh or delayed shifts indicate transmission fluid neglect.", severity: "high" },
      { issueSlug: "brake-wobble-warped-discs", title: "Brake Feel", what_to_check: "Brake from 80 km/h — any pulsation through the pedal means warped discs. Check pedal feel is firm with no sponginess.", severity: "medium" },
      { issueSlug: "power-steering-pump-whine", title: "Power Steering", what_to_check: "Turn the wheel lock-to-lock slowly. Whining noise indicates low fluid or pump wear. Check fluid level and colour.", severity: "medium" },
      { issueSlug: "engine-ticking-warm", title: "Warm Engine Noise", what_to_check: "After the test drive, listen to the engine at idle. Ticking that persists when warm can indicate injector issues or worse.", severity: "medium" },
    ],
  },
];

export default function PrePurchaseChecklistPage() {
  const issues = getAllCandidateIssues();
  const mentionCounts = new Map<string, number>();
  for (const issue of issues) {
    mentionCounts.set(issue.slug, issue.mentions.length);
  }

  const totalItems = CHECKLIST_SECTIONS.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Hero */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Pre-Purchase Checklist</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          {totalItems} critical checks before buying a Discovery 4 / LR4. Each item links to
          detailed issue pages with symptoms, diagnosis, and fixes from real owner experience.
        </p>
      </div>

      {/* Sections */}
      {CHECKLIST_SECTIONS.map((section) => (
        <section key={section.heading}>
          <h2 className="text-xs font-semibold mb-4 text-[var(--lr-green-bright)] uppercase tracking-wider">
            {section.heading}
          </h2>
          <div className="space-y-3">
            {section.items.map((item) => {
              const reports = mentionCounts.get(item.issueSlug) ?? 0;
              const sevConfig = SEVERITY_CONFIG[item.severity];
              return (
                <Link
                  key={item.issueSlug}
                  href={`/known-issues/${item.issueSlug}`}
                  className="neu-card-sm p-5 block hover:green-glow transition-shadow group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm group-hover:text-[var(--lr-green-bright)] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <span className={`badge ${sevConfig.className} text-xs`}>
                        {sevConfig.label}
                      </span>
                      {reports > 0 && (
                        <span className="badge badge-green text-xs">
                          {reports} report{reports !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                    {item.what_to_check}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="neu-inset p-6 text-center">
        <p className="text-sm text-[var(--foreground-muted)] mb-3">
          Want more detail? Browse the full list of {issues.length} known issues.
        </p>
        <Link href="/known-issues" className="neu-btn px-5 py-2.5 text-sm font-medium text-[var(--lr-green-bright)]">
          View All Known Issues
        </Link>
      </div>
    </div>
  );
}
