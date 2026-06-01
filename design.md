# 2TAM Services — Bifold Brochure Design Brief

**Format**: Bifold (half-fold) — single sheet folded once = 4 panels.
**Audience**: Pharmacies, bureaux, hôtels, commerces, villas à Casablanca.
**Tone**: Sérieux, rassurant, professionnel — pas tape-à-l'œil. "Service serein."
**Copy**: Already handed off separately. This doc is the **visual system** only.

---

## 1. Format & Production Specs

### Recommended size
- **A4 folded → A5 closed** (210×297mm flat → 148×210mm closed). Standard, économique au Maroc.
- Alternative: US Letter folded to half-letter if printing cross-border.

### Fold & panel layout
Bifold = 4 panels. Reading order matters.

```
┌─────────────┬─────────────┐    ┌─────────────┬─────────────┐
│             │             │    │             │             │
│   Panel 4   │   Panel 1   │    │   Panel 2   │   Panel 3   │
│  (back      │  (front     │    │  (inside    │  (inside    │
│   cover)    │   cover)    │    │   left)     │   right)    │
│             │             │    │             │             │
└─────────────┴─────────────┘    └─────────────┴─────────────┘
        OUTSIDE (closed)                   INSIDE (open spread)
```

- **Panel 1 (front cover)**: hero — logo, headline, hero image/visual.
- **Panel 4 (back cover)**: contact block, QR to landing page, address, social.
- **Panels 2 + 3 (inside spread)**: services + process + price highlights + testimonial. Treat as ONE continuous canvas — design across the fold, don't silo each panel.

### Print specifications
- **Bleed**: 3mm on all outside edges.
- **Safe area**: 5mm minimum from trim, 8mm from fold.
- **Resolution**: 300dpi for raster, vectors preferred.
- **Color mode**: CMYK for print. Convert brand hex → CMYK below.
- **Paper**: 170–250 gsm matte coated. Avoid gloss — clashes with the calm/serene tone.
- **Finishing**: optional soft-touch lamination on cover for premium feel.
- **Export**: PDF/X-1a or PDF/X-4 with crop marks + bleed.

---

## 2. Brand Tokens

### Color palette

| Role | Name | HEX | CMYK (approx) | Use |
|---|---|---|---|---|
| Primary surface | Cream | `#FFF9E8` | C0 M2 Y15 K0 | Hero panel, warm accents, callout backgrounds |
| Primary brand | Green | `#145C50` | C82 M40 Y65 K35 | Logo, primary buttons, eyebrows, headings accent |
| Deep brand | Green-900 | `#0A332C` | C90 M60 Y70 K65 | Hover/dark variants of green |
| Accent | Yellow | `#FFE640` | C0 M5 Y85 K0 | Underline accents, sparkles, highlight chips, "serein" underline |
| Ink (text) | Ink | `#0E1A14` | C75 M55 Y65 K70 | Body text, dark cards, primary CTAs |
| Mint | Mint | `#E6EFD9` | C12 M2 Y20 K0 | Soft surfaces, icon backgrounds |
| Butter | Butter | `#FFF5C2` | C0 M2 Y30 K0 | Gradient blends with mint for testimonial cards |
| Paper | Paper | `#F7F7F4` | C2 M2 Y4 K0 | Subtle off-white for input/section bg |

**Usage rule**: White is the page base. Cream is an *accent surface*, never the canvas. Green for trust signals + primary actions. Yellow used sparingly — it's the "spark."

### Typography

| Family | Weights | Use |
|---|---|---|
| **Bricolage Grotesque** | 600, 700 | Display headlines, big numbers, eyebrows on dark surfaces |
| **Rethink Sans** | 400, 500, 600 | Body copy, captions, button labels, small UI text |
| **Noto Sans Arabic** | 400, 500 | Arabic taglines (RTL — keep direction correct) |

Type details:
- Display headlines: tight letter-spacing (`-0.025em`), line-height 1.02–1.05, weight 700.
- Body: line-height 1.55–1.6, 14–17px equivalent (≈10–12pt print).
- Eyebrow style: `— Nos services` (em-dash prefix), uppercase optional, muted gray (`rgba(14,26,20,.6)`), 11–13px.
- Big numbers ("6+", "+120", "800 MAD"): Bricolage Grotesque, very tight tracking (`-0.03em`), large scale.
- Use Bricolage italic for emphasis inside testimonials (e.g. *vraiment au niveau*) — green color, italic.

### Spacing & radii

| Token | Value | Use |
|---|---|---|
| Panel radius | 32px (≈8mm print) | Hero panel, big surface blocks |
| Card radius | 24px (≈6mm) | Service cards, testimonial cards, CTA cards |
| Button/pill radius | full pill | All buttons, chips, status pills |
| Inner radius | 14–18px | Photos inside cards, icon tiles |
| Section padding | 32–96px | Generous breathing room — the brand reads calm |

---

## 3. Visual Components & Patterns

### Pill buttons (signature element)
Every CTA is a horizontal pill with a circular icon on the right end.

```
[ Demander un devis  (→) ]
```

- Pill body: `padding: 6px 8px 6px 24px`, full-pill radius.
- Icon ball: 36–42px circle, contrasting fill, contains a stroke icon (arrow, WhatsApp, phone, mail, etc.).
- Variants for the brochure:
  - **Dark**: ink body, cream text, cream icon ball with ink arrow. *Primary action.*
  - **Cream**: cream body, ink text, green icon ball with cream arrow. *Secondary action.*
  - **Green**: green body, cream text, yellow icon ball with green arrow. *Brand accent.*

### Eyebrows
Small section labels prefixed with em-dash:
```
— Nos services        — Pourquoi nous       — Tarifs       — Contact
```
Muted gray, 11–13px, lowercase, sits above section headlines.

### Status pill (used on cover)
Live-availability indicator with pulsing green dot:
```
●  Disponible cette semaine — réponse en moins d'1 h
```
White-translucent bg, soft border, ink text, green dot (8mm pulse halo).

### "serein" underline
Hand-drawn yellow underline under the word **serein** in the headline. Subtle, slightly wavy stroke (5px equivalent), bottom-aligned with descender. Uses brand yellow `#FFE640`.

### Sector chips (inline)
Small pill chips with mint icon ball + label, used to list sectors:
```
( 🏥 Pharmacies )  ( 🏢 Bureaux )  ( 🏨 Hôtels )  ( 🛍 Commerces )  ( 🏡 Villas )
```
White bg, soft border, mint icon circle (28px), green stroke icon inside.

### Stat blocks (numerical proof)
Large number + small label.
```
 6+              120+
 Années          Espaces entretenus
 d'expérience    chaque mois, en récurrent
```
- "Cream" variant: cream bg, ink number, muted label. Soft border.
- "Dark" variant: ink bg, cream number, cream label (60% opacity).

### Testimonial card
Mint-to-butter diagonal gradient background, large quote-mark in green at top, italic text inline emphasis in green, author block at bottom with green circular avatar (yellow initials).

### Process steps (dark-green block)
On the inside spread, use a rounded **dark green panel** with cream text inside. Each step:
- Yellow "Étape 0X" label
- Yellow icon in soft yellow-tinted circle
- Cream headline (Bricolage)
- Muted cream body

This is the strongest visual moment in the inside spread — anchors the layout.

### Pricing
Either:
- **Table format** with ink-dark header row (cream text), zebra-striped body in subtle green tint (`rgba(20,92,80,.025)`), Bricolage prices in `#0E1A14`.
- Or **stacked cards** if space is tight.

---

## 4. Imagery Guidelines

- **Subject**: real cleaning interventions — encadré, professional uniforms, calm spaces.
- **Mood**: documentary, natural light, no overly staged. "Invisible service" — show the result, not just the action.
- **Treatment**: full-bleed photo blocks with rounded corners (24px equivalent). Optional very subtle diagonal stripe overlay (cream at 6% opacity) for texture continuity with the brand.
- **Tags on photos**: small monospace labels in cream pills (`PHARMACIE`, `BUREAU`, `HÔTEL`) — bottom-left, with a thin yellow left border.
- **Avoid**: stock-photo cleaners with feather dusters, harsh chemical/spray bottles, generic smiling faces.

### Logo usage
- `assets/logo.svg` for light backgrounds (cream/white/paper).
- `assets/logo-cream.svg` for dark backgrounds (ink/green).
- Min size: 24mm wide on print. Clearspace: 1× the logo height on all sides.
- Never recolor, never on busy photos without a solid backplate.

---

## 5. Layout Recommendations Per Panel

### Panel 1 — Front cover
- Logo top-left, generous margin.
- Status pill upper area.
- Big Bricolage headline with **serein** + yellow underline.
- Hero photo full-bleed bottom 50–60%.
- Floating dark "+120 espaces entretenus" pill overlapping bottom-left of photo.
- Arabic tagline subtly placed — small, muted.
- One CTA pill (dark) — keep cover focused.

### Panel 2–3 — Inside spread (treat as one canvas)
Suggested rhythm top → bottom:
1. Eyebrow + headline ("Une propreté à vos doigts").
2. **4 service cards** in a 2×2 or 4×1 grid: image on top, title + 1-line description below.
3. **Process strip** in the dark green panel (the brochure's anchor element).
4. **Stat row**: cream "6+" + dark "120+" stat blocks side-by-side.
5. **Pricing**: 3-row table or 3 mini cards.
6. **Pull quote** from the testimonial in the gradient mint→butter card.

Design *across the fold* — let one element bridge the seam (e.g., the dark green process panel can span both panels).

### Panel 4 — Back cover
- Eyebrow "— Contact" + headline "Parlons de votre espace."
- 3 contact blocks (icon + label + value):
  - WhatsApp pill button
  - Téléphone (with hours line)
  - Email + URL
- **QR code** linking to the landing page (top-right, 25–30mm square, ink on cream backplate).
- Address line.
- Social icons row (Instagram, Facebook, WhatsApp) in cream-circle outlines.
- Small Arabic tagline.
- Footer line: `© 2026 2TAM Services · Casablanca · Made in Morocco`.

---

## 6. Don'ts

- ❌ Don't use the cream as the page base on every panel — it loses its accent role. White is the canvas; cream is the accent.
- ❌ Don't overuse yellow. It's a *spark*, not a fill. One or two moments per panel max.
- ❌ Don't mix the two display weights — Bricolage 700 for headlines, period. 600 only for sub-heads.
- ❌ Don't introduce new fonts. Three families is already the ceiling.
- ❌ Don't stack ink-on-green or green-on-ink without testing contrast — we need WCAG AA legibility for the older clientele segment.
- ❌ Don't render the Arabic in a Latin font. Always Noto Sans Arabic, RTL.

---

## 7. Reference Files

- Landing page (live visual reference): `site/index.html`
- Logo (light bg): `site/assets/logo.svg`
- Logo (dark bg): `site/assets/logo-cream.svg`
- Existing brand mockup: `Logo.ai`, `SVG/`
- PRD context: `2TAM_Services_PRD_Brochure_Landing_Page.md`

The landing page is the source of truth for the visual system. Open it in a browser, scroll through, and treat it as a living style guide.

---

## 8. Deliverables Expected

- Print-ready PDF (PDF/X-1a or PDF/X-4) with bleed + crop marks.
- Editable source file (Affinity Publisher, InDesign, or Figma with print export).
- Outlined fonts in the print PDF.
- Web-quality preview JPG/PNG (front + inside spread + back) for client review.

Questions on copy → client. Questions on visual system → reference the landing page or this doc.
