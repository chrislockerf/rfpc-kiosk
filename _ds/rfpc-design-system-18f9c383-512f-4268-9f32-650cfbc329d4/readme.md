# RFPC — River Forest Pinball Club · Design System

A signage design system for the **River Forest Pinball Club (RFPC)**, a home pinball
club of 8 machines housed in a room called **The Lockedown**. Content is displayed on a
TV through an Amazon Signage Stick and must read cleanly **from 10+ feet away**: every
page is a fixed **1920×1080** canvas — no scrolling, no small type, no clutter.

The mood is a **premium basement arcade**: a warm **velvet-black** stage, cream marquee
light, brass club gold, and one swappable **accent color per machine** so all 8 games
feel like one family while each keeps its own identity. Motion is slow and classy —
gentle rises and soft glows, nothing distracting.

## Sources provided
- `uploads/IMG_0211.png` → `assets/rfpc-logo.png` — the **official RFPC mark**: a cream
  pinball-player silhouette + "RFPC" in a near-black roundel. Provided by the client as the
  real logo (replaces the earlier draft, which was discarded).
- `uploads/Lockedown_logo1-cf6e54c7.jpg` → `assets/lockedown-logo.png` — the **official
  The Lockedown** venue mark: a cream padlock + "THE LOCKEDOWN" wordmark on forest green.
- **On-system recolors** were generated from these (transparent knockouts + forest/velvet
  fills) so the marks drop cleanly onto the dark signage — see `assets/` below and the
  Brand → Logos card.
- No brand font files or color spec were provided. Palette was sampled
  directly from the two logos (forest-green `#193622` / cream `#e3dfcb`). The base was later
  moved off green to a warm **velvet-black** ramp so the 8 vivid per-game accents pop; brass
  `#cda744` and cream carry the family. Fonts are Google-Fonts
  substitutions (see Visual Foundations → Type).

---

## CONTENT FUNDAMENTALS — how RFPC signage is written

The voice is a **confident arcade operator briefing a player at the machine** — terse,
instructional, a little reverent about the game. It is *rules distilled to what you do
with your hands*, never marketing.

- **Casing:** Section titles and shot names are **UPPERCASE marquee** ("KEY MULTIBALLS",
  "VILLAINS"). Body is sentence case. Pro tips are the one place we go lowercase-serif-italic.
- **Voice / person:** Mostly **imperative** — "Hold left flipper during plunge", "Spell
  SPECTRE at the rocket". No "you" spelled out; the player is implied. Never "we".
- **Shot language:** Name the mechanic, then the **physical target** as a mono chip:
  `VILLAINS → Right Ramp`. A player should be able to look up, find the shot, and flip.
- **Numbers:** Spare and meaningful — "6 films", "4 mode types", "3 of 8". No decorative
  stats. One fact per line.
- **Pro tips** (footer, right): a single italic serif sentence of hard-won advice, e.g.
  *"Master the Action Button before you chase films — it's the machine's #1 scoring tool."*
- **Emoji:** none. The only glyphs used are a diamond bullet (◆) and a small tick rule.
- **Vibe examples:** "Complete all four mode types to finish a film." · "Repeats only
  score points — vary your shots." · "The mode ends in MI6 Multiball — the ultimate goal."

---

## VISUAL FOUNDATIONS

**Color.** A warm **velvet-black** ramp (`--forest-900…300`, `#0d0b0a` stage → `#211c19`
panels — named `--forest-*` for compatibility, but near-neutral with a whisper of brown) is
the velvet
backdrop; cream (`--cream-100 #e3dfcb`) is text and marks; brass (`--brass-300 #cda744`)
is the constant RFPC family warmth on rules, eyebrows, and the club mark. Each machine sets a single
`--accent` via `data-game="…"` on the page shell — e.g. Stranger Things = Upside Down red,
Godzilla = atomic green, Bond = smart-missile blue, Deadpool = merc red, Foo Fighters =
stage amber, Jurassic Park = jungle gold, Monster Bash = spooky purple, John Wick =
Continental blue. The velvet-black + brass + cream family never
changes; only the accent swaps. Author against **semantic aliases** (`--surface-panel`,
`--text-strong`, `--border-panel`, `--accent`), not raw ramp steps.

**Type.** Fixed-px scale (this is a fixed 1920 canvas, not a fluid web page; nothing below
~18px is ever used). Families are Google-Fonts substitutions for the marquee/speakeasy voice:
- `--font-marquee` **Oswald** — condensed uppercase headers, eyebrows, shot names.
- `--font-serif` **Playfair Display** — high-contrast serif; italic pro-tips & flourishes.
- `--font-body` **Barlow Semi Condensed** — humanist body, legible at distance.
- `--font-mono` **Space Mono** — shot targets, counts, section numbers.
  *Substitution flagged — swap for licensed brand faces if provided.*

**Backgrounds.** A cinematic **stage vignette** (`--stage-vignette`): a warm brass glow
pooled at top, darkness sinking at the bottom, over the velvet-black gradient, plus a multiply
edge-vignette for depth. No photographic imagery, no busy patterns — the darkness is the set.

**Panels / cards.** Radius `--r-lg` (14px, crisp/cabinet-like, not pill-soft). Subtle
gradient fill from `--surface-raised` to `--surface-panel`, a 1px cream-tinted border
(`--border-panel`), a soft deep drop shadow (`--shadow-panel`), and a 2px **top rim light**.
The one hero panel per page gets `emphasis`: a glowing left **accent spine** + lift shadow.

**Motion.** Easing `--ease-cinema` (a slow settle, no bounce). Content **rises** in
(`rfpc-rise`, 22px + fade, ~900ms) staggered by `--reveal-delay`, gated on
`prefers-reduced-motion` so print/PDF/reduced-motion show the end state. Glows may
**breathe** gently. Nothing loops fast or flashes.

**Glow / shadow.** Two systems: deep neutral **elevation** shadows for panels, and colored
**accent glows** (`--glow-accent-sm/md`, `--glow-text`) used sparingly on the accent spine,
eyebrow tick, chips, and marker diamonds — the "neon marquee" hint.

**Layout.** Fixed 1920×1080 with a TV **safe area** (`--safe-x 88px`, top 56 / bottom 48).
A header band (marquee title + rule), a flexible main, a persistent footer. Content is laid
on a CSS grid — **not** six equal columns: the game-summary page uses a full-width film band
over a 6-col / 2-row grid with a tall emphasis panel. Generous `gap` (`--sp-4`+) throughout.

**Iconography.** See below — deliberately near-zero.

---

## ICONOGRAPHY

RFPC signage is **almost icon-free by design** — at 10 feet, labeled marquee type and
color beat tiny glyphs. There is no icon font and no icon set in the brand. The only marks:
- A **diamond bullet** (◆ / a rotated 8px accent square) before shot names.
- A short **accent tick** rule beside eyebrows and under the header.
- Small **color swatches** where a mechanic is literally color-coded (e.g. the Action
  Button's blue/pink), rendered as CSS squares — not icons.
- **Emoji: never.** **Unicode:** only the ◆ diamond.

The two brand **logos** (`assets/rfpc-logo.png`, `assets/lockedown-logo.png`) plus their
cream/forest/velvet recolors (`rfpc-mark-cream.png`, `rfpc-badge-forest.png`,
`rfpc-badge-velvet.png`, `lockedown-mark-cream.png`) are the raster art; the cream knockouts
drop straight onto the dark stage. No SVG illustrations were drawn or generated.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports the token + font closure).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `assets/` — `rfpc-logo.png`, `lockedown-logo.png`, and cream/forest/velvet recolors.
- `SKILL.md` — Agent-Skills-compatible entry for using this system elsewhere.

**Components** (`components/signage/`) — reusable primitives, namespace `window.RFPCDesignSystem_18f9c3`:
- `StageFrame` — the fixed 1920×1080 canvas: per-game accent, stage vignette, safe area, header/main/footer. *(starting point)*
- `KioskShow` — auto-advancing "spotlight" engine: overview of section titles, each expands full-stage for ~10s, collapses, next — loops with no interaction. The foundation for any unattended page. *(starting point)*
- `ShowReel` — the top-level unattended **kiosk show-runner** (attract loop): sequences full-stage scenes (machine overview, feature cards, funny recap, tips, glossary, quips) with persistent RFPC header/footer chrome and a per-scene-kind transition (cinematic rise for machines, lateral palate-cleanser slide for general), auto-advancing and looping forever. *(starting point)*
- `MarqueeHeader` — page header: marquee eyebrow + title, right meta, accent rule.
- `SignageFooter` — persistent footer: RFPC mark left, game center, italic pro-tip right.
- `SectionPanel` — numbered content panel; the repeatable building block (+ `emphasis`). *(starting point)*
- `ShotRow` — one shot/rule line: name + accent target chip + description.
- `FilmTile` — compact marquee "poster" cell (ordinal + title + year).
- `Chip` — small marquee-caps pill (accent / brass / ghost tones).

**UI kit** (`ui_kits/signage/`)
- `index.html` + `JamesBond.jsx` — the **pilot page**: James Bond 007 game summary (6 sections),
  the reference implementation of the reusable game-summary template.
- `kiosk.html` + `Kiosk.jsx` + `KioskScenes.jsx` — the **running kiosk demo**: the full attract
  loop (overview → Bond detailed cards → funny recap → tips → glossary → quip), with a Tweaks
  panel for pacing, overview layout, and recap treatment. The worked example of the template below.

**Templates** (`templates/`) — copy-and-fill starting points for a consuming project.
- `rfpc-kiosk/` — the **RFPC Kiosk attract loop** (`RfpcKiosk.dc.html`). One `ShowReel` driven by a
  `scenes` array; fill in real content for your 8 machines. Loads the system via `ds-base.js`.

---

## BUILDING THE KIOSK — the show-runner recipe

The kiosk is one **`ShowReel`** fed an ordered `scenes` array; it renders each scene full-stage
between a persistent RFPC header/footer, auto-advances, and loops forever with no interaction.
Everything below is authored per scene — you don't touch the engine.

**A scene object:**
```js
{
  id: "bond-mission",          // stable id (keeps transitions clean)
  kind: "machine",             // "overview" | "machine" | "general"  ← sets the transition
  game: "james-bond",          // per-machine accent; OMIT on general scenes for brass/cream
  eyebrow: "Stern Premium · 2022",
  title: "James Bond 007",     // keep short — one marquee line reads best at 10 ft
  meta: ["The Mission", "1 of 8"],   // right-aligned header lines (first is emphasised)
  proTip: "Master the Action Button first.",  // footer italic
  gameName: "James Bond 007",  // footer center label
  holdMs: 11000,               // optional per-scene hold override (else ShowReel's holdMs)
  render: () => <BondMission />,     // the full stage content
}
```

**`kind` picks the transition character** — this is how machines and general content *feel*
different on the loop:
- `overview` → gentle scale-fade (the lineup screen).
- `machine` → slow **cinematic rise + accent bloom**. Set `game` for the machine's color.
- `general` → quick **lateral palate-cleanser slide**. Omit `game` → neutral brass/cream.

**A typical loop:** overview → machine A (detailed feature cards) → machine A funny recap →
*general palate-cleanser* → machine B … → tips → glossary → quip → repeat. Interleave the
general scenes (tips / glossary / quips) between machines as breathers.

**To add a machine:** append its scenes to the array with `kind: "machine"` and its
`game` accent (see the per-game accent tokens); build the `render()` bodies from the signage
primitives (`SectionPanel`, `ShotRow`, `FilmTile`, `Chip`) so they inherit the cabinet card +
accent-top-rim look automatically. Play the features straight, then land one funny recap scene
as the punchline. `KioskScenes.jsx` in the UI kit is the worked reference for all of this.

---

**Foundation cards** (`guidelines/*.card.html`) — specimen cards feeding the Design System tab
(Colors, Type, Spacing, Brand).

### Intentional additions
Built from brand guidelines only (no source component library), so the inventory is authored
to the signage need rather than mirroring an existing kit. Every primitive above exists to
compose the game-summary page; no generic form/feedback primitives were added.

### Open / caveats
- **Fonts** are Google substitutions — confirm or replace with licensed faces.
- Palette is not locked; reskin via `tokens/colors.css`. The real marks confirm the
  velvet-black + cream family, with forest green as the venue (Lockedown) color.
