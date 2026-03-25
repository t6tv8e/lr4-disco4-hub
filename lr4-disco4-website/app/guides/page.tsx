import Link from "next/link";
import { getAllCandidateGuides } from "@/lib/content";
import { formatSlug } from "@/lib/format";

function categorizeGuide(slug: string): string {
  if (slug.includes("suspension") || slug.includes("xlifter") || slug.includes("ko2") || slug.includes("tyre")) return "Suspension & Tyres";
  if (slug.includes("oil") || slug.includes("diesel") || slug.includes("engine") || slug.includes("cera-tec") || slug.includes("additive") || slug.includes("pressure-test")) return "Engine & Fluids";
  if (slug.includes("differential") || slug.includes("transfer-case") || slug.includes("transmission") || slug.includes("power-steering") || slug.includes("brake-fluid") || slug.includes("brake-hose")) return "Drivetrain & Brakes";
  if (slug.includes("led") || slug.includes("headlight") || slug.includes("h7") || slug.includes("high-beam") || slug.includes("corner-light")) return "Lighting";
  if (slug.includes("carplay") || slug.includes("battery") || slug.includes("key-programming") || slug.includes("gap-iid") || slug.includes("mirror")) return "Electrical & Tech";
  if (slug.includes("roof-rack") || slug.includes("snorkel") || slug.includes("rock-slider") || slug.includes("ladder") || slug.includes("drawer") || slug.includes("solar") || slug.includes("headlight-bracket") || slug.includes("auxiliary")) return "Overland & Exterior";
  if (slug.includes("seat") || slug.includes("airbag") || slug.includes("console") || slug.includes("armrest") || slug.includes("grille") || slug.includes("dent") || slug.includes("windscreen") || slug.includes("cowl") || slug.includes("painting")) return "Interior & Body";
  return "Other";
}

export const metadata = {
  title: "Guides & Tips",
  description: "DIY guides, upgrades, and tips for the Land Rover Discovery 4 / LR4.",
};

export default function GuidesPage() {
  const guides = getAllCandidateGuides();

  const grouped = new Map<string, typeof guides>();
  for (const guide of guides) {
    const cat = categorizeGuide(guide.slug);
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(guide);
  }

  const categoryOrder = [
    "Suspension & Tyres",
    "Engine & Fluids",
    "Drivetrain & Brakes",
    "Lighting",
    "Electrical & Tech",
    "Overland & Exterior",
    "Interior & Body",
    "Other",
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Guides &amp; Tips</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          {guides.length} guides covering upgrades, maintenance, and mods. All based on real hands-on experience.
        </p>
      </div>

      {categoryOrder.map((cat) => {
        const catGuides = grouped.get(cat);
        if (!catGuides || catGuides.length === 0) return null;
        return (
          <section key={cat}>
            <h2 className="text-xs font-semibold mb-3 text-[var(--lr-green-bright)] uppercase tracking-wider">
              {cat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catGuides.map((guide) => {
                const bestSummary = guide.mentions.reduce(
                  (best, m) => (m.mention.summary.length > best.length ? m.mention.summary : best),
                  ""
                );
                return (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="neu-card-sm p-4 hover:green-glow transition-shadow group"
                  >
                    <h3 className="font-medium text-sm mb-1.5 group-hover:text-[var(--lr-green-bright)] transition-colors">
                      {formatSlug(guide.slug)}
                    </h3>
                    <p className="text-xs text-[var(--foreground-muted)] line-clamp-2 mb-2">
                      {bestSummary}
                    </p>
                    <span className="badge badge-neutral">
                      {guide.mentions.length} video{guide.mentions.length !== 1 ? "s" : ""}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
