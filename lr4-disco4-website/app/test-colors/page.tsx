const PALETTES = [
  {
    name: "Current — Forest",
    dim: "#1a4a1a",
    mid: "#2a6e2a",
    bright: "#3a9a3a",
    glow: "rgba(42, 110, 42, 0.15)",
  },
  {
    name: "Coniston — Classic Land Rover",
    dim: "#1b3a20",
    mid: "#2c5a35",
    bright: "#3d7a4a",
    glow: "rgba(44, 90, 53, 0.15)",
  },
  {
    name: "British Racing Green",
    dim: "#0d2e1a",
    mid: "#004225",
    bright: "#1a7a45",
    glow: "rgba(0, 66, 37, 0.2)",
  },
  {
    name: "Emerald — Vivid",
    dim: "#0a3d24",
    mid: "#0f7a42",
    bright: "#10b461",
    glow: "rgba(15, 122, 66, 0.15)",
  },
  {
    name: "Military — Olive Drab",
    dim: "#2a2e1a",
    mid: "#4a5a2a",
    bright: "#7a8a3a",
    glow: "rgba(74, 90, 42, 0.15)",
  },
  {
    name: "Teal — Blue-Green",
    dim: "#0e2e2e",
    mid: "#1a5a5a",
    bright: "#2a9a8a",
    glow: "rgba(26, 90, 90, 0.15)",
  },
  {
    name: "Acid Green — Aggressive",
    dim: "#1a3a0a",
    mid: "#2a6a0a",
    bright: "#4aaa10",
    glow: "rgba(42, 106, 10, 0.15)",
  },
  {
    name: "Jade — Muted Luxury",
    dim: "#15332a",
    mid: "#1f5c4a",
    bright: "#30916e",
    glow: "rgba(31, 92, 74, 0.15)",
  },
];

export default function TestColorsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Green Palette Comparison</h1>
        <p className="text-sm text-[var(--foreground-muted)]">
          Each card shows how a green palette looks against the dark neumorphic background.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PALETTES.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl p-6 space-y-5"
            style={{
              background: "var(--bg-surface)",
              boxShadow: `0 0 20px ${p.glow}, 6px 6px 14px var(--shadow-dark), -6px -6px 14px var(--shadow-light)`,
              border: `1px solid ${p.dim}`,
            }}
          >
            {/* Title */}
            <h2 className="text-base font-bold" style={{ color: p.bright }}>
              {p.name}
            </h2>

            {/* Color swatches */}
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg" style={{ background: p.dim }} />
                <span className="text-[10px] text-[var(--foreground-dim)] font-mono">{p.dim}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg" style={{ background: p.mid }} />
                <span className="text-[10px] text-[var(--foreground-dim)] font-mono">{p.mid}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg" style={{ background: p.bright }} />
                <span className="text-[10px] text-[var(--foreground-dim)] font-mono">{p.bright}</span>
              </div>
            </div>

            {/* Simulated nav badge */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: p.dim, border: `1px solid ${p.mid}`, color: p.bright }}
              >
                D4
              </div>
              <span className="font-semibold text-sm text-[var(--foreground)]">Disco4 Hub</span>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
                style={{ background: p.dim, color: p.bright, border: `1px solid ${p.mid}` }}
              >
                3 reports
              </span>
              <span className="badge badge-neutral">fixed</span>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer"
                style={{ background: p.dim, color: p.bright, border: `1px solid ${p.mid}` }}
              >
                Watch on YouTube
              </span>
            </div>

            {/* Symptoms in context */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "var(--bg-sunken)",
                boxShadow: "inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)",
                border: "1px solid #181818",
              }}
            >
              <p className="text-xs text-[var(--foreground-dim)] mb-2">What&apos;s your Disco doing?</p>
              <div className="flex flex-wrap gap-1.5">
                {["car drops overnight", "suspension warning", "engine ticking after warmup"].map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs"
                    style={{
                      background: "var(--bg-raised)",
                      color: "var(--foreground-muted)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Link text */}
            <div className="text-sm">
              <a href="#" style={{ color: p.bright, textDecorationColor: p.dim, textDecoration: "underline", textUnderlineOffset: "2px" }}>
                View all known issues →
              </a>
            </div>

            {/* Stat numbers */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: p.bright }}>17</div>
                <div className="text-[10px] text-[var(--foreground-muted)]">Issues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: p.bright }}>35</div>
                <div className="text-[10px] text-[var(--foreground-muted)]">Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: p.bright }}>52</div>
                <div className="text-[10px] text-[var(--foreground-muted)]">Videos</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
