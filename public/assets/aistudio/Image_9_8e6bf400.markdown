---
name: Autonomous Intelligence Portfolio
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  code-inline:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style
The design system establishes a focused, high-precision developer aesthetic tailored for artificial intelligence and machine learning engineering showcases. The visual identity merges utilitarian clarity with atmospheric depth: deep obsidian substrates, clean translucent structural layers, and luminous cyan-blue accents that denote computational intelligence and technical rigor.

The target audience comprises tech leads, AI researchers, engineering recruiters, and enterprise collaborators. The interface balances high-density information architecture with effortless scannability, projecting discipline, deep domain knowledge, and modern engineering standards.

## Colors
The palette leverages deep layered foundations punctuated by focused luminous accents:

- **Foundation Backgrounds:** Base canvas sits at `#05070D` (Obsidian), elevating to `#0B0F19` (Dark Navy) for primary section regions and container bases.
- **Brand & Accents:** The primary color `#3B82F6` (Electric Blue) commands primary actions, focal indicators, and interactive states. `#06B6D4` (Neon Cyan) serves as secondary data highlights, live model telemetry, and active states. `#8B5CF6` (Electric Violet) provides tertiary depth for multi-label tagging, gradient edge transitions, and deep learning benchmark tags.
- **Glass & Surface Tinting:** Surfaces utilize `rgba(15, 23, 42, 0.65)` layered with hairline boundaries tinted at `rgba(255, 255, 255, 0.08)` to `rgba(59, 130, 246, 0.20)`.
- **Text & Foreground:** Neutral high-contrast text starts with pure `#F8FAFC` for headlines, `#94A3B8` for secondary copy and metadata, down to `#475569` for subtle structural dividers and disabled states.

## Typography
The system employs `Inter` across all structural tiers to maintain crisp readability and high industrial precision. Letter-spacing contracts slightly on large display headlines for visual cohesion, then opens up on micro-labels and badges for instant legibility in dense telemetry readouts.

For technical code blocks, model parameter counts, loss metrics, and terminal outputs, use tabular numbers (`tnum`, `zero`) to ensure clean vertical alignment across tabular benchmarks.

## Layout & Spacing
The layout uses a 12-column responsive fluid grid with maximum canvas constraint at `1280px` on desktop displays. 

- **Breakpoints:**
  - `Desktop (>= 1024px)`: 12 columns, `1.5rem` gutter, `2rem` outer margin.
  - `Tablet (768px - 1023px)`: 8 columns, `1.25rem` gutter, `1.5rem` outer margin.
  - `Mobile (< 768px)`: 4 columns, `1rem` gutter, `1rem` outer margin.

Component layouts use the 4px baseline rhythm (`0.25rem` intervals). Large section transitions use `space-2xl` for breathing room, while component interiors maintain compact, information-dense spacing via `space-sm` and `space-md`.

## Elevation & Depth
Elevation is achieved using multi-layered frosted glassmorphism rather than physical drop shadows:

- **Level 0 (Canvas Base):** Flat `#05070D` with subtle background radial gradients of `#3B82F6` and `#8B5CF6` at 8% opacity.
- **Level 1 (Structural Cards & Sections):** `rgba(11, 15, 25, 0.70)` surface with `backdrop-filter: blur(16px)` and a crisp outer border of `1px solid rgba(255, 255, 255, 0.08)`.
- **Level 2 (Interactive Cards & Overlays):** `rgba(15, 23, 42, 0.80)` with `backdrop-filter: blur(24px)`, rim border of `1px solid rgba(59, 130, 246, 0.25)`, and a soft ambient glow: `box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 16px -2px rgba(59, 130, 246, 0.15)`.
- **Level 3 (Modals, Popovers & Floating Bars):** `rgba(11, 15, 25, 0.92)` with `backdrop-filter: blur(32px)`, `border: 1px solid rgba(6, 182, 212, 0.40)`, and a focused outer halo: `box-shadow: 0 16px 48px -8px rgba(0, 0, 0, 0.8), 0 0 24px -4px rgba(6, 182, 212, 0.25)`.

## Shapes
Geometry relies on standard balanced curvature (`roundedness: 2`, where base components feature `0.5rem` / `8px` radii). This curvature preserves a disciplined, architectural profile without becoming aggressive or overly playful.

- Standard buttons, inputs, badge tags, and small cards use `0.5rem` (`rounded`).
- Project portfolio feature cards, complex benchmark tables, and code snippets use `1rem` (`rounded-lg`).
- High-level hero callouts, preview modals, and sticky dock navigations use `1.5rem` (`rounded-xl`).
- Dynamic status pills, avatar containers, and pill filters transition into full pill geometry (`9999px`).

## Components

### Buttons
- **Primary Action:** Solid background with linear gradient (`135deg, #3B82F6 0%, #2563EB 100%`), white text, `0.5rem` radius, subtle top-rim inset highlight `inset 0 1px 0 rgba(255, 255, 255, 0.2)`, and hover glow `box-shadow: 0 0 20px rgba(59, 130, 246, 0.45)`.
- **Secondary (Glass):** `rgba(255, 255, 255, 0.04)` fill with `1px solid rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover, border shifts to `rgba(6, 182, 212, 0.4)` with `background: rgba(6, 182, 212, 0.08)`.
- **Ghost/Tertiary:** No border, transparent background, text `#94A3B8`, shifting to `#3B82F6` and faint background tint on hover.

### Badges & Chips
- **Model / Tech Stack Tag:** Inline-flex, height `24px`, padding `0 10px`, radius `9999px` (or `0.375rem`), background `rgba(59, 130, 246, 0.08)`, border `1px solid rgba(59, 130, 246, 0.25)`, typography `label-sm`, text color `#93C5FD`.
- **Status Indicator:** Features an animated live pulse dot (`#06B6D4` or `#10B981`) next to `label-sm` text (e.g., "Training Complete", "Inference Online").

### Cards & Project Showcases
- Frosted glass substrate with `backdrop-filter: blur(16px)`, `background: rgba(11, 15, 25, 0.70)`, and hairline border `rgba(255, 255, 255, 0.08)`.
- Hover triggers smooth border transition to `rgba(59, 130, 246, 0.40)` and a diffused neon drop glow.
- Header holds project title, model parameters badge, and repository links; body accommodates architecture summaries and interactive metric graphs.

### Input Fields & Controls
- **Text Inputs:** Height `44px`, background `rgba(15, 23, 42, 0.60)`, border `1px solid rgba(255, 255, 255, 0.10)`, padding `0 14px`, text `#F8FAFC`. Focus ring utilizes `0 0 0 1px #3B82F6, 0 0 12px rgba(59, 130, 246, 0.30)`.
- **Checkboxes & Radios:** `18px x 18px`, `0.25rem` radius (rounded for radios), border `1px solid rgba(255, 255, 255, 0.20)`. Checked state fills with `#3B82F6` accompanied by an SVG check or radial dot.

### Lists & Benchmark Metrics
- Border-bottom separated with `rgba(255, 255, 255, 0.06)`. Items feature key metric readouts formatted in tabular monospace alignment with secondary color labels (`#06B6D4`).