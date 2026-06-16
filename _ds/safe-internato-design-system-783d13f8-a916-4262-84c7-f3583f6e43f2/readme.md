# Safe Internato — Design System

> Medicina de alta performance — prática, humana e tecnológica.
> *Tudo em um só lugar para o interno.*

This is the design system for **Safe Internato**, a high-performance medical-education
platform for students during the *internato* (clinical clerkship). It bundles the brand's
visual + verbal identity, design tokens, reusable React components, and product UI kits so
any agent can produce on-brand interfaces, decks, and assets.

---

## 1 · Company & product context

**Safe Internato** reúne conteúdos práticos, organização de estudos e suporte à tomada de
decisão clínica para estudantes durante o internato. It connects theory and bedside
practice — with scientific rigor and accessible language.

- **Purpose (propósito):** make the *internato* safer, more human and more technological —
  preparing the student for the reality of clinical practice.
- **Mission:** gather reliable, practical, applicable content that supports the intern's
  day-to-day clinical decisions.
- **Vision:** be the leading national reference in practical medical education for the
  clerkship phase.
- **Positioning:** *Medicina de alta performance* — safe, human, technological clinical
  practice, all in one place.
- **Values:** segurança clínica · praticidade · rigor científico · humanização · inovação ·
  confiança.

**Primary audience:** medical students in the *internato* (5th/6th year) and recent
graduates transitioning to clinical practice and residency. 22–28, mobile-first, heavy
study load plus on-call shifts, little free time, focused on residency exams.

**Context of use:** on the phone between shifts, before bedside rounds, in nighttime study,
in pre-exam review. Content must load fast, get to the point, and convey immediate safety.

**Brand personality:** acts like a *trusted mentor* — masters the subject, speaks the
intern's language, present at decision moments — without arrogance or alarmism.
*Somos:* especialista próximo · didático · seguro · objetivo · atualizado.
*Não somos:* academicista distante · informal demais · sensacionalista · paternalista.

### Products represented
1. **App / plataforma** (mobile-first) — practical content feed, study organization,
   clinical decision support. See `ui_kits/app/`.
2. **Marketing site** — institutional, confiável, conversion-focused. See `ui_kits/site/`.
3. **Social / carousel + slides** — didactic, scannable posts. See `slides/`.

### Sources
- `uploads/Brandbook_Safe_Internato.pdf` — *Manual da Marca, Edição 2026 · v1.0* (14 pages).
  All foundations below are derived from it. Page renders for reference live in `uploads/`.
- Domain referenced in brandbook: **medsafebrasil.com.br/education**.
- No codebase or Figma was provided — UI kits are faithful realizations of the brandbook's
  application examples (social profile, post/carrossel, business card, e-mail signature,
  site/app buttons & header), not recreations of an existing build.

---

## 2 · Content fundamentals (verbal identity)

**Tone:** claro, direto, seguro e encorajador. Technical terms used with precision but
always explained. **Address the reader as "você."** Portuguese (pt-BR) is the primary
language.

**Casing:** display headlines and overlines are frequently **UPPERCASE** (Archivo Black).
Body is sentence case. Section labels are tracked all-caps (e.g. `07 · PALETA DE CORES`).

**Use:**
- "conduta à beira do leito", "na prática", "passo a passo"
- "baseado em evidências", "interno", "salve este post"

**Avoid:**
- "milagroso", "nunca mais erre", "segredo que ninguém conta"
- jargão sem explicar, tom paternalista

**Example sentences (verbatim brand voice):**
- *"ICFEp: a forma mais comum de insuficiência cardíaca em idosos — e uma das mais difíceis de diagnosticar."*
- *"Antes do próximo plantão, revise esses 7 sinais. Salve para consultar depois."*
- *"Conduta segura começa com a pergunta certa. Vamos ao passo a passo."*

**Voice by channel:**
- **Site:** institucional e confiável; full sentences, clarity + conversion.
- **Social:** didático e visual; scannable text, próximo, CTA + light good humor.
- **Atendimento:** cordial, ágil, resolutivo; empático e direto, sem formalidade rígida.

**Emoji:** not part of the brand. Iconography is line icons, not emoji. The ❤ / ＋ seen in
the brandbook are *line icons inside medallions*, not emoji — do not substitute emoji.

**One-liner that captures the voice:** *"O conhecimento sério da faculdade, com a
praticidade de quem entende a rotina do plantão."*

---

## 3 · Visual foundations

**Color.** Bordô and vermelho are the identity base — energy, urgency, clinical care.
Light tones (pergaminho, rosé) give breathing room; grafite anchors dark surfaces.
Proportion of use: **≈60% bordô · 18% vermelho · 12% claro · 6% rosé · 4% grafite.**
- Bordô Profundo `#5A1012` · Vermelho Safe `#8C0F14` · Grafite `#0C0F14`
- Vermelho Vivo `#B11722` (highlight) · Rosé Suave `#EAC9CB` (lines/rings) · Pergaminho `#FBF7F2` (card bg)
- **Accessibility:** white text on bordô/vermelho passes AA. On light tones always use grafite
  or bordô — never vermelho on rosé for running text.

**Type.** Display = **Archivo** (Black/ExtraBold, often UPPERCASE) for titles/manchetes.
Text = **Inter** (Regular–SemiBold) for body, captions, UI. Office/system fallback = Arial
Black / Arial. Hierarchy: H1 Archivo Black 40–64; H2 Archivo ExtraBold 18–28; body Inter
Regular; rótulo Inter Medium 8–10 with tracking.

**Spacing & layout.** 4px base scale. Generous breathing room around the logo (clear space =
½ the symbol height on all sides). Cards group related content; content is scannable, with
numbered steps for procedures.

**Backgrounds.** Three families: (1) solid **bordô** brand surfaces; (2) light **pergaminho**
page/card surfaces; (3) **grafite** dark surfaces. Hero imagery uses a **bordô protection
gradient** at the base with clean space reserved at top for text. No bluish-purple gradients,
no busy textures. Subtle **concentric arc** corner motifs (derived from the symbol) and the
**ECG monitoring line** add rhythm.

**Imagery.** Realistic, clinically plausible, warm natural light; real people in plausible
situations; clean area for text; light bordô color integration (overlay / warm duotone over
dark, natural over light). Avoid stocky forced smiles, oversaturation, artificial AI looks,
graphic/violent scenes, identifiable real patients.

**Corner radii.** Cards 12–18px (`--radius-md` 14 / `--radius-lg` 18). Buttons, chips and
medallions are fully rounded (pill / circle).

**Cards.** Pergaminho or white fill, 12–18px corners, **soft warm low-contrast shadow**
(`--shadow-sm`/`--shadow-md`, tinted with bordô), hairline border `--border` on light.
No colored-left-border accent cards.

**Borders.** Hairlines `#E7DCD3` on light; rosé `#EAC9CB` for decorative rings/lines;
`--grafite-600` on dark.

**Shadows.** Warm, bordô-tinted, soft and diffuse — never hard black drop shadows on light.
Dark surfaces use a deeper neutral shadow.

**Motion.** Calm and confident. Short eases (`--ease-out`, 120–320ms), gentle fades and
rises. **No bounce, no playful overshoot.** Decorative loops are avoided on content.

**Hover states.** Primary actions lighten from bordô → vermelho (`--action-hover`); ghost/
secondary gain a faint rosé tint fill. **Press states** deepen to `--vermelho-700` and may
shrink subtly (~0.98 scale). 

**Transparency & blur.** Used sparingly: image protection gradients, and occasional frosted
overlays on dark media. Not a primary motif.

---

## 4 · Iconography

- **Style:** outline / line icons, **uniform stroke weight, rounded corners/caps.** White on
  dark surfaces; bordô on light surfaces. **Never mix filled and outline icons in the same
  piece**, and avoid heavy filled glyphs.
- **System used:** the project ships **[Lucide](https://lucide.dev)** (rounded, uniform
  1.5–2px stroke) as the icon set — it matches the brandbook's outline spec exactly. Loaded
  from CDN in components/kits (`https://unpkg.com/lucide@latest`). *Substitution flag:* the
  brandbook did not provide a proprietary icon font, so Lucide is the closest-matching
  open set; swap for the brand's own outline set if one is later supplied.
- **Medallions:** line icon inside a circle with a **rosé ring** (`--border-rose`) anchors the
  theme of a piece. See `MedalIcon` component.
- **Emoji:** not used. **Unicode chars** are not used as icons — use Lucide SVGs.
- **Logo symbol:** three open books in a radial pinwheel (teoria · prática · segurança).
  See `assets/logo/` — recreated as clean SVG (`symbol-white/bordo/deep/grafite.svg`) since
  the brandbook PDF did not include extractable vector source. *Flag: logo is a faithful
  reconstruction; replace with the official vector if available.*

---

## 5 · Index / manifest

**Root**
- `styles.css` — global entry (import this one file).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `logo/` (symbol SVGs), `fonts/` (Archivo + Inter woff2).
- `readme.md` — this guide. `SKILL.md` — Agent-Skill wrapper.

**Foundation cards** (`guidelines/`) — Design System tab specimens: colors, type, spacing,
radii, shadows, brand motifs (ECG line, medallion, logo).

**Components** (`components/`)
- `core/` — `Button`, `IconButton`, `Tag`, `Badge`, `MedalIcon`, `Logo`
- `forms/` — `Input`, `Textarea`, `Switch`, `Checkbox`
- `layout/` — `Card`, `Tabs`, `Avatar`, `ProgressDots`

**UI kits** (`ui_kits/`)
- `app/` — Safe Internato mobile app (feed, conteúdo, decisão clínica, salvos).
- `site/` — marketing site (hero, recursos, conversão).

**Slides** (`slides/`) — social/deck templates (title, conceito, passo-a-passo, quote).

See each directory's `README.md` / `.prompt.md` for usage.
