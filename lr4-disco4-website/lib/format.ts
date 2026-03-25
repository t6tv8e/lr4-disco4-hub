const ACRONYMS = new Set([
  "sdv6", "tdv6", "d3", "d4", "lr4", "v8", "5l", "3l",
  "zf", "6hp", "8hp", "8hp70", "cv",
  "dpf", "maf", "egr", "pcv", "fbh", "ecu",
  "epb", "dsc", "abs",
  "hvac", "ac",
  "led", "h7", "tuv", "iid", "tpms",
  "eu3", "eu4",
  "diy", "usb", "3d", "oem",
  "5w30",
]);

const PROPER_NOUNS: Record<string, string> = {
  fomoco: "FoMoCo",
  britpart: "Britpart",
  hitachi: "Hitachi",
  engel: "Engel",
  bfgoodrich: "BFGoodrich",
  ko2: "KO2",
};

// Fault code pattern: letter followed by 3+ digits (e.g., p2290, b0091, c1a1864)
const FAULT_CODE_RE = /^[a-z]\d{3,}/;

const TITLE_OVERRIDES: Record<string, string> = {
  "5w30-too-thin-for-sdv6": "5W-30 Too Thin for SDV6",
  "gapt2d-brake-bleeding-procedure-unclear": "GAPt2d Brake Bleeding Procedure Unclear",
};

export function formatSlug(slug: string): string {
  if (TITLE_OVERRIDES[slug]) return TITLE_OVERRIDES[slug];

  return slug
    .split("-")
    .map((word) => {
      const lower = word.toLowerCase();
      if (ACRONYMS.has(lower)) return word.toUpperCase();
      if (PROPER_NOUNS[lower]) return PROPER_NOUNS[lower];
      if (FAULT_CODE_RE.test(lower)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
