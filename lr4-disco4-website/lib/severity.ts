export type Severity = "critical" | "high" | "medium" | "low";

const CRITICAL_KEYWORDS = [
  "failure", "seizure", "snapped", "cracking", "cracked", "melt",
  "starvation", "structural", "dangerous", "recall", "fire",
  "disintegration", "blown",
];

const HIGH_KEYWORDS = [
  "leak", "corrosion", "blocked", "degradation", "limp",
  "restricted", "broken", "damage", "fault", "defect",
];

const MEDIUM_KEYWORDS = [
  "noise", "rattle", "shudder", "intermittent", "wear", "loose",
  "wobble", "slow", "stuck", "seized", "sticking",
];

const SEVERITY_OVERRIDES: Record<string, Severity> = {
  // Critical — safety or catastrophic engine failure
  "brake-line-corrosion-failure": "critical",
  "sdv6-snapped-crankshaft": "critical",
  "main-bearing-seizure-tdv6": "critical",
  "sdv6-oil-starvation-piston-melt": "critical",
  "engine-bearing-failure": "critical",
  "crankshaft-failure-exchange-engine": "critical",
  "spontaneous-crankshaft-cracking": "critical",
  "spun-main-bearings": "critical",
  "tdv6-spun-main-bearings": "critical",
  "dangerous-wiring-from-workshop": "critical",
  "underbody-corrosion-structural": "critical",
  "chassis-rust-cracking": "critical",
  "oil-pump-failure-tdv6": "critical",
  "oil-pump-housing-failure": "critical",
  "timing-belt-failure": "critical",
  // Low — cosmetic or informational
  "headlight-yellowing": "low",
  "sticky-buttons-soft-touch-coating": "low",
  "clear-coat-failure": "low",
  "paint-oxidation-clearcoat": "low",
  "door-handle-emblem-fading": "low",
  "start-stop-button-lettering-worn": "low",
  "phone-not-fitted-message": "low",
  "insurance-difficulty": "low",
  "key-replacement-cost": "low",
  "start-stop-anxiety": "low",
  "reliability-expectations": "low",
};

export function classifySeverity(
  slug: string,
  symptoms: string[] = [],
  fixes: string[] = [],
): Severity {
  if (SEVERITY_OVERRIDES[slug]) return SEVERITY_OVERRIDES[slug];

  const text = [slug, ...symptoms, ...fixes].join(" ").toLowerCase();

  let score = 0;
  for (const kw of CRITICAL_KEYWORDS) {
    if (text.includes(kw)) score += 3;
  }
  for (const kw of HIGH_KEYWORDS) {
    if (text.includes(kw)) score += 1;
  }
  for (const kw of MEDIUM_KEYWORDS) {
    if (text.includes(kw)) score += 0.5;
  }

  if (score >= 6) return "critical";
  if (score >= 3) return "high";
  if (score >= 1) return "medium";
  return "low";
}

export const SEVERITY_CONFIG: Record<Severity, { label: string; className: string }> = {
  critical: { label: "Critical", className: "badge-critical" },
  high: { label: "High", className: "badge-high" },
  medium: { label: "Medium", className: "badge-medium" },
  low: { label: "Low", className: "badge-low" },
};
