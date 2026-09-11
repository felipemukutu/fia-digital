# Ship Studio Project

This is a plain HTML/CSS/JS project. You're helping a **non-developer** build a website. Keep explanations simple and jargon-free.

---

## Environment: Ship Studio App

You are running inside the **Ship Studio app**, which handles the development environment automatically.

**Important things to know:**
- A preview server is **already running** - you don't need to start one
- The user sees a live preview of their site in the app
- You don't need to run any server commands
- Changes to files are reflected when the user clicks Refresh in the preview

**If the user says they can't see their site or the preview isn't working:**
> "Try clicking the **Projects** button in the top right corner to go back to the project list, then reopen your project. This restarts the preview."

---

## FIRST: Check for Onboarding

**Before doing anything else**, check if `SITE.md` exists.

- If `SITE.md` **does NOT exist**: Ask the user about their business, goals, and what they want to build. Create `SITE.md` with their answers, including brand personality, colors, fonts, and page plans.
- If `SITE.md` **exists**: Read it to understand the project before making changes.

---

## Your Skills

You have specialized knowledge for building sites. **Use these constantly:**

| Skill | When to Use |
|-------|-------------|
| **brand-identity** | Choosing colors, fonts, visual direction |
| **copywriting** | Writing any text for the site |
| **marketing-site-design** | Planning page layouts, sections |
| **frontend-design** | Creating any visual component or page |
| **documentation-writer** | After EVERY code change - update SITE.md |

### Workflow for Every Build Task

1. Check `SITE.md` for brand personality and preferences
2. Plan section architecture (what sections, what order)
3. Select colors/fonts using brand identity principles (follow design principles below)
4. Write specific, human-sounding text using copywriting principles
5. Build with clean, semantic HTML and organized CSS
6. Update SITE.md after changes

---

## Human-First Design Principles

Great design feels intentional and distinctive. These guidelines help create sites that stand out and feel memorable.

### The Goal

Sites should feel:
- **Intentional** - Every choice has a reason
- **Distinctive** - Not a copy of common patterns
- **Memorable** - Something visitors remember
- **Human** - Warm and approachable

### Typography Guidance

Common fonts like Inter, Roboto, and system fonts work well but are everywhere. For distinction, explore alternatives:

**Modern & Clean:**
- Space Grotesk + DM Sans
- Outfit + Source Sans 3
- Sora + Nunito

**Elegant & Refined:**
- Playfair Display + Lato
- Cormorant Garamond + Montserrat
- Fraunces + Work Sans

**Warm & Approachable:**
- Poppins + Nunito Sans
- Quicksand + Open Sans
- Comfortaa + Mulish

Load fonts via Google Fonts in the `<head>` of every HTML page:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

Then set them in `styles.css`:
```css
:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

These aren't rules—they're starting points. The right font depends on the brand.

### Color Guidance

**Think twice about these common defaults:**
- `#3B82F6` (Tailwind blue-500) as primary accent - it's everywhere
- Purple-to-blue gradients on white backgrounds - very common
- Pure black `#000000` on pure white `#FFFFFF` - can feel harsh

**Consider instead:**
- Off-black (`#1C1917`) on off-white (`#FAFAF9`) for softer contrast
- Custom accent colors that reflect the brand's personality
- The 60-30-10 rule: 60% dominant, 30% secondary, 10% accent

### Layout Guidance

**Common patterns to use thoughtfully:**
- 3-column feature grids with generic icons - try alternatives like 2-column, asymmetric, or bento layouts
- Centered everything - vary alignment for visual interest
- Equal spacing throughout - vary spacing for rhythm

**Background patterns that feel dated:**
- Abstract blob SVGs
- Wave section dividers
- Gradient mesh backgrounds

Alternatives: geometric shapes, grain textures, solid colors with intentional variation, or high-quality photography.

### Writing Guidance

**Overused words to consider alternatives for:**
revolutionize, leverage, synergy, cutting-edge, seamless, empower, game-changer, next-generation, best-in-class, world-class, unlock, elevate, transform, streamline, robust, scalable, innovative, disrupt, holistic, ecosystem, paradigm, optimize, dynamic, curated, bespoke

**Instead:** Be specific. Use numbers. Focus on outcomes. Write like a human talking to another human.

---

## CRITICAL: Maintain Documentation

**You MUST keep documentation updated.** This is essential for non-technical users.

### Files to Maintain

1. **`SITE.md`** - The main documentation file. Update EVERY time you make changes:
   ```markdown
   # [Site Name]

   > [One-sentence tagline]

   ## Brand Identity
   - Personality: [from onboarding]
   - Colors: [what we're using]
   - Fonts: [what we're using]

   ## Pages
   - **Homepage** (`index.html`) - [description of what's on it]
   - **About** (`about.html`) - [description]

   ## Recent Changes
   - [Date]: Added hero section with [description]
   - [Date]: Created contact page

   ## How to Customize
   - To change colors: Edit the CSS variables in styles.css
   - To add a new page: Create a new .html file and add nav links
   ```

2. **Create `SITE.md` immediately** if it doesn't exist (via onboarding).

3. **Update `SITE.md` after EVERY change** - no exceptions.

4. **Use simple language** - Say "the main page" not "index.html". Say "the navigation bar at the top" not "the nav element".

---

## Project Structure

```
index.html       # Homepage
about.html       # About page (example)
styles.css       # All styles (uses CSS variables for theming)
script.js        # All JavaScript
images/          # Images folder (create when needed)
```

---

## Rules for Building

### DO:
- Check SITE.md before every task for brand context
- Use the design principles above for visual decisions
- Edit HTML files directly for content and structure
- Use `styles.css` for all styling via CSS custom properties
- Use `script.js` for all interactivity
- Put images in an `images/` folder
- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, etc.)
- Keep the nav consistent across all pages
- Load custom fonts via Google Fonts in the `<head>` of every page
- Update `SITE.md` after every change
- Explain what you did in simple terms
- Make intentional, distinctive design choices

### DON'T:
- Don't use frameworks (React, Vue, etc.) - this is plain HTML
- Don't create a `package.json` - this project has no dependencies
- Don't use build tools (webpack, vite, etc.)
- Don't use inline styles when CSS classes will work
- Don't leave the user confused about what changed
- Don't use technical jargon without explaining it
- Don't skip updating SITE.md

---

## Adding a New Page

Each `.html` file in the project is a page:
- `index.html` → Homepage (yoursite.com)
- `about.html` → About page (yoursite.com/about)
- `contact.html` → Contact page (yoursite.com/contact)
- `pricing.html` → Pricing page (yoursite.com/pricing)

### Example: Creating a New Page

If the user asks for a "Contact" page:

1. Check `SITE.md` for brand personality
2. Plan what sections the page needs
3. Create `contact.html` following the same structure as `index.html`:
   - Copy the `<head>` section (with stylesheet and font links)
   - Copy the `<nav>` and `<footer>`
   - Add content in `<main>`
4. Add a "Contact" link to the nav in **all** HTML files
5. Add any new styles to `styles.css`
6. Write copy using the copywriting guidelines
7. **Update `SITE.md`** with the new page
8. Tell the user: "I created a Contact page. Click Refresh in the preview and navigate to it from the menu."

---

## After Every Task

1. Make the requested changes (using your skills, following design principles)
2. Update `SITE.md` with what changed
3. Tell the user what you did in plain English
4. Remind them to click Refresh in the preview to see changes

---

## Visual language

Captured from the actual `styles.css` (2112 lines) and the four live pages. Reference the CSS custom property names below in new code — not raw hex values.

**Colours** — defined in `:root` in `styles.css`:
- `--ink: #10110b` — near-black, greenish. Backgrounds for hero/dark bands (`.hero`, `.qs-quote`, `.transition`, `.course-banner`).
- `--aqua: #02ab95` — the brand accent. Buttons, eyebrows, tags, links, icon strokes. `.tile--cta:hover` still uses a hand-picked darker shade `#019a86`; all `.btn` variants now hover to `--lime` fill/border instead (see Buttons below).
- `--deep: #084734` — dark green for headings and body copy on light sections.
- `--text: #333333` — body copy.
- `--mint: #eff5f4` — light section backgrounds (alternates with white between sections).
- `--lime: #c2fa75` — small decorative hits only: quote marks, one end of the dash-line gradients, one dot-grid variant.
- `--white` / `--black-ish` used directly (`#e3e8e7` for hairline borders, `#cdd6d5` and `#092d28` inline in a couple of gradients rather than as tokens — treat those as one-off, not reusable).
- No blue anywhere. No purple. Accent is entirely the aqua/lime/deep green family — a deliberate palette, not the common blue-500 default this skill would otherwise flag.

**Type** — one family for everything, no separate code/mono font:
- `--font: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`, loaded via Google Fonts with only weights **400, 500, 600** (`family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600`).
- Headings are consistently `font-weight: 400` (regular) — the site deliberately never lets a heading look bold; boldness is reserved for small emphasis (`strong`, card labels) at 600.
- `font-weight: 700` appears in two places (`.mvv-card__lead`, `.faculty__intro strong`) but **700 is not in the Google Fonts request** — those currently render as faux-bold/fallback in most browsers. Worth fixing to either load 700 or drop to 600 rather than copying this pattern forward.
- Headings use `clamp()` almost everywhere instead of fixed sizes or breakpoint overrides, e.g. `clamp(34px, 3.9vw, 54px)` for the homepage h1. Follow this pattern for new headings rather than fixed px + media queries.
- Body copy sits at 16–20px depending on section; no single fixed body size.

**Spacing** — no formal scale in use. Values are pixel-precise numbers transcribed straight from the Figma file (e.g. `gap: 17px`, `72px`, `82px`, `117px`, `128px`, `130px`, `237px`, `238px` all appear). Don't invent a 4px/8px grid when adding sections — match whatever the adjacent section already uses, or eyeball it against the Figma-derived neighbors.
- The one real system is the layout edge: `--gutter` (82px desktop → 48px ≤1100px → 24px ≤700px) and `--container` (1276px max width), combined into `--edge` / `--edge-vw` so every section's content aligns to the same 1276px column regardless of viewport. Always use `--edge`/`--container` for new section wrappers rather than a hardcoded padding value — this was a deliberate fix (see SITE.md changelog, 2026-09-10) for drift where some sections used the raw gutter and crept off-alignment on wide screens.

**Radii, borders, shadows** — a closed, intentional set:
- `border-radius: 0` everywhere it's mentioned at all — every corner in the site is square. Two spots even set it explicitly on form inputs/buttons to override a browser default. Do not introduce rounded corners.
- No `box-shadow` anywhere in the stylesheet. Depth is done with flat color blocks, image scrims (`linear-gradient` overlays on photos), and 1px solid borders — never elevation shadows.
- Borders are thin and flat: `1px solid` in the brand colors (`--aqua`, `--deep`, or the neutral hairline `#e3e8e7`) — used for button outlines, card outlines (`.bn-card`), nav-arrow buttons, and the two horizontal dividers in the footer. `.course-card` and `.tile--logo` use a heavier `4px solid var(--white)` as a deliberate framing border, not a normal 1px rule — don't generalize that width elsewhere.

**Decorative motifs (distinctive to this site — reuse, don't reinvent):**
- `.dots` — a pure-CSS dot-grid mesh (mask-based, no image) that fades in from one edge, used to texture dark hero/banner sections. Has a two-tone gradient variant (`.dots--grad`, lime→aqua).
- `.dash-line` — a pure-CSS broken horizontal line with a lime→aqua gradient (three gradient variants: `--grad-dash-a/b/c`), used as a small decorative accent scattered across almost every section. Both motifs are masking tricks, not SVGs or images — keep them that way if extending.
- Conspicuously absent: no blob SVGs, no wave dividers, no gradient-mesh backgrounds — the CLAUDE.md design guidance's "dated patterns to avoid" list is already being followed in practice.

**Buttons**: one `.btn` base + size modifiers (`--sm` 40px / `--md` 70px / `--lg` 88px min-height) + color modifiers (`--aqua`, `--white`, `--stroke-aqua`, `--stroke-dark`, `--stroke-dark-soft`, `--stroke-white`). All uppercase, 500 weight, `letter-spacing: 0.08em` (or `0.03em` on `--sm`/uppercase CTA tiles). Reuse these modifiers rather than writing new one-off button styles.

Every `.btn` variant hovers to a `var(--lime)` background and border, with text switching to `--deep` for contrast (a deliberate, uniform hover rule added 2026-09-10 — don't reintroduce per-variant hover colors). The same lime fill/border hover was extended to the round `.socials a` icons in the footer (previously hovered to solid `--deep`), and to the `.site-nav a` underline in the header (previously `--aqua`, now `--lime`) — except under `.site-header--light` (Quem Somos, Cursos, Contato — pages whose hero has a white background), where the underline hover stays `--aqua`; only the homepage's dark-hero header uses the lime underline. Note `.tile--cta`, a separate CTA-tile component that isn't part of `.btn`, still hovers to a darker aqua (`#019a86`) and wasn't included in this change.

---

## Remember

The user is NOT a developer. They're using Ship Studio to build a website without coding knowledge. Your job is to:

1. **Onboard them properly** (if no SITE.md)
2. **Build what they ask for** (using your skills and design principles)
3. **Make it feel distinctive and intentional** (not generic)
4. **Keep everything documented** so they understand their site
5. **Explain things simply**
6. **Make them feel confident** about their project

**Always follow design principles. Always update SITE.md.**
