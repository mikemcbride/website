# Site redesign — grid background, mono headlines, dark mode toggle, nav overhaul

## Context

Reference: screenshots of an internal engineering "dossier" page (content
itself irrelevant — pure style reference). Elements adopted: light grid/graph-paper
background, bold monospace display headlines, color-coded accents. Applies
site-wide (Astro + Tailwind v4, small site: home, projects, writing, extras,
uses, post/list pages).

## Goals

1. Grid-paper background texture, light + dark variants.
2. Headlines set in JetBrains Mono (already loaded, currently unused on headings).
3. Blue accent (Tailwind `blue-600` light / `blue-400` dark), replacing current violet.
4. Dark mode: switch from `prefers-color-scheme`-only to a manual toggle,
   persisted, no flash on load.
5. Nav: replace centered floating pill with a static full-width left-aligned
   link bar, theme toggle far right, hamburger + flyout on mobile.

## Non-goals

- No card-layout system, no stat-grid components, no badge/tag system from
  the reference — explicitly out of scope per user.
- No new npm dependencies.
- No logo/site name in nav (none exists).

## Design

### Typography

- Headings get `font-mono` + tight tracking. Applied via
  `prose-headings:font-mono` on `Prose.astro` — every heading in
  `Landing.astro`, `List.astro`, `Post.astro`, `index.astro`,
  `projects.astro`, and `extras.astro` renders inside `<Prose>`, so that one
  change covers them. The post-list `<h2>` in `writing/index.astro` sits
  outside `Prose` and needs an explicit `font-mono`.
- Eyebrow/label text gets small-caps mono with wide letter-spacing, matching
  the reference's `CORE WEB MONOREPO · ...` treatment. Applied to the post
  date in `Post.astro`.
- Body text stays `font-sans` (Inter) — no change.

### Background grid

- Pure CSS, no image assets: `repeating-linear-gradient` on `body` in
  `global.css`, ~24px squares, 1px lines.
- Light: faint navy-gray lines on white.
- Dark: faint white lines on near-black navy.

### Color

- Add `--color-accent` theme token: `blue-600` light, `blue-400` dark. The
  value is swapped by overriding the custom property under `.dark`, so a
  single `text-accent` utility resolves correctly in both themes.
- Replace every `violet-*` usage site-wide with the accent. Eleven lines
  across five files: `NavItem.astro` (hover + active pill), `Prose.astro`
  (link hover), `Testimonial.astro` (quote-mark stroke), `projects.astro`
  (meta text), `writing/index.astro` (search field focus states + "read more"
  link). The active nav pill keeps explicit `blue-100`/`blue-800` shades
  rather than the accent, since a filled blue-600 pill behind dark text would
  fail contrast.
- Existing zinc grays for text/surfaces are unchanged.

### Border radius

- Unchanged — keep rounded corners (nav, images, any card-like elements).
  Grid texture is a background layer, doesn't conflict with radius.

### Dark mode toggle

- Switch Tailwind v4 dark variant from default media-based to class-based:
  add `@custom-variant dark (&:where(.dark, .dark *));` to `global.css`.
- Inline script in `Layout.astro` `<head>` (before body render) reads
  `localStorage.theme` (`"light" | "dark"`), falls back to
  `prefers-color-scheme`, sets `.dark` class on `<html>` synchronously to
  avoid flash-of-wrong-theme.
- Toggle button (sun/moon icon, inline SVG, no icon library) in nav; click
  handler flips `.dark` class on `<html>` and writes choice to
  `localStorage.theme`. Plain `<script>`, no framework.

### Nav (`SiteNav.astro`, `NavItem.astro`)

- Desktop (`md:` and up): static (not floating/fixed) full-width bar at
  top of page. Links rendered as a horizontal list, flush left, aligned to
  the same `max-w-4xl` edge as page content. Theme toggle button sits at
  the far right of the same bar.
- Mobile (below `md:`): link list replaced by a single hamburger icon
  button. Tapping it opens a flyout panel containing the nav links stacked
  vertically plus the theme toggle. Closing: tap hamburger again, tap a
  link, or `Escape` key. `aria-expanded` on the button reflects state; no
  focus trap (out of scope for a 5-link menu).
- Implementation: vanilla `<script>` toggling a `hidden`/visibility class
  on the flyout panel — consistent with the no-new-dependency approach
  used for the theme toggle.
- Active-link styling uses the new blue accent instead of violet.

## Files touched

- `src/styles/global.css` — theme tokens, grid background, custom dark
  variant.
- `src/layouts/Layout.astro` — inline dark-mode init script, grid bg
  applied at body/page-shell level.
- `src/components/SiteNav.astro` — full rewrite: static bar layout,
  hamburger/flyout, toggle button.
- `src/components/NavItem.astro` — accent color swap (violet → blue).
- `src/components/Prose.astro` — `prose-headings:font-mono`, accent link
  hover.
- `src/layouts/Post.astro` — post date as mono eyebrow label.
- `src/components/Testimonial.astro`, `src/pages/projects.astro`,
  `src/pages/writing/index.astro` — accent color swap, plus explicit
  `font-mono` on the post-list heading in `writing/index.astro`.

## Testing

- Manual verification in browser (dev server): light/dark toggle, no
  flash on reload, mobile flyout open/close, keyboard `Escape` close,
  nav active-state highlighting per route, grid background rendering in
  both themes, headline font applied across home/post/list/projects/
  writing/extras/uses pages.
- No existing automated test suite for styling/markup in this repo
  (static Astro site) — visual/manual check is the verification method.
