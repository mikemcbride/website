# Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle this Astro personal site with a grid-paper background, monospace headlines, a blue accent, a manual dark-mode toggle, and a left-aligned static nav bar with a mobile flyout.

**Architecture:** Pure Tailwind v4 + vanilla `<script is:inline>`. Theme values live as CSS custom properties in `src/styles/global.css`, overridden under a `.dark` class on `<html>`; Tailwind's dark variant is switched from media-query-based to class-based so a button can drive it. No new npm dependencies, no framework islands, no icon library (inline SVG).

**Tech Stack:** Astro 5, Tailwind CSS 4 (`@tailwindcss/vite`), `@tailwindcss/typography`, JetBrains Mono + Inter (already loaded from Google Fonts in `Layout.astro`).

**Spec:** `docs/superpowers/specs/2026-08-14-site-redesign-design.md`

## Global Constraints

- **No new npm dependencies.** Nothing added to `package.json`.
- **No new Astro integrations or framework islands.** Vanilla `<script is:inline>` only.
- **Accent color:** Tailwind `blue-600` in light mode, `blue-400` in dark mode. All existing `violet-*` usages are replaced.
- **Border radius:** keep existing rounded corners. Do not switch anything to square.
- **Fonts:** headings `font-mono` (JetBrains Mono), body `font-sans` (Inter). Both are already in the Google Fonts `<link>` — do not add font loading.
- **Out of scope:** card layouts, stat grids, badge/tag systems from the reference screenshots. Do not build them.
- **No logo or site name in the nav** — none exists.
- **No automated test suite exists in this repo.** It is a static Astro site with no test runner, and adding one is out of scope. The verification cycle for every task is: `npm run build` must exit 0, plus the specific visual assertions listed in that task, checked in a browser against `npm run dev`. Never claim a task passes without having actually run the build and looked at the page.

## Verification Setup (do this once, before Task 1)

- [ ] **Step A: Install dependencies**

```bash
npm install
```

- [ ] **Step B: Confirm a clean baseline build**

Run: `npm run build`
Expected: exits 0. If it fails before any changes, stop and report — the baseline is broken and that is not this plan's problem to fix silently.

- [ ] **Step C: Start the dev server and leave it running**

```bash
npm run dev
```

Expected: serves on `http://localhost:4321`. Pages to check throughout:
`/`, `/projects`, `/writing`, `/writing/<any-post>`, `/extras`, `/uses`.

To check dark mode before the toggle exists (Tasks 1–3), open devtools and
add the `dark` class to the `<html>` element manually.

---

### Task 1: Theme foundation — class-based dark mode, accent token, grid background

Switches Tailwind's `dark:` variant from media-query to class-based, defines
the accent and grid custom properties, paints the grid background on `body`,
and adds the no-flash init script.

**Files:**
- Modify: `src/styles/global.css` (whole file, currently 7 lines)
- Modify: `src/layouts/Layout.astro` (add init script in `<head>`; remove `bg-white dark:bg-zinc-900` from `<body>`)

**Interfaces:**
- Consumes: nothing.
- Produces:
  - CSS custom property `--color-accent`, consumed via Tailwind utilities `text-accent`, `bg-accent`, `border-accent`, `ring-accent` in Tasks 2, 4, 5, 6.
  - `.dark` class on `<html>` as the dark-mode switch, driven by Task 5's toggle.
  - `localStorage` key `theme` with values `"dark"` or `"light"`, written by Task 5.

- [ ] **Step 1: Rewrite `src/styles/global.css`**

Replace the entire file with:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

/* Class-based dark mode instead of Tailwind v4's default prefers-color-scheme.
   Required so the header toggle can drive the theme. */
@custom-variant dark (&:where(.dark, .dark *));

@theme {
    --font-sans: 'Inter', 'system-ui', '-apple-system', 'Roboto', 'Arial', sans-serif;
    --font-mono: 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;

    /* Utilities generated: text-accent, bg-accent, border-accent, ring-accent.
       The value is swapped under .dark below. */
    --color-accent: var(--color-blue-600);
}

:root {
    --grid-size: 24px;
    --grid-bg: #f1f4f9;
    --grid-line: rgb(30 41 59 / 0.07);
}

.dark {
    --color-accent: var(--color-blue-400);
    --grid-bg: #0f1729;
    --grid-line: rgb(255 255 255 / 0.055);
}

body {
    background-color: var(--grid-bg);
    background-image:
        repeating-linear-gradient(
            to right,
            var(--grid-line) 0 1px,
            transparent 1px var(--grid-size)
        ),
        repeating-linear-gradient(
            to bottom,
            var(--grid-line) 0 1px,
            transparent 1px var(--grid-size)
        );
}
```

- [ ] **Step 2: Add the no-flash init script to `src/layouts/Layout.astro`**

Insert as the **first** child of `<head>`, before the `<meta charset>` line.
`is:inline` is required — without it Astro bundles and defers the script, which
reintroduces the flash of wrong theme.

```astro
<script is:inline>
    // Runs before first paint so the correct theme is applied with no flash.
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle(
        "dark",
        stored ? stored === "dark" : prefersDark,
    );
</script>
```

- [ ] **Step 3: Remove the hardcoded body background in `src/layouts/Layout.astro`**

The grid background now comes from `global.css`. Change the `<body>` class
from:

```
class="font-sans text-zinc-900 bg-white dark:bg-zinc-900 dark:text-zinc-200 w-full text-lg min-h-screen flex flex-col"
```

to:

```
class="font-sans text-zinc-900 dark:text-zinc-200 w-full text-lg min-h-screen flex flex-col"
```

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 5: Verify the accent variable actually swaps**

This step exists because Tailwind v4 must emit `var(--color-accent)` (not an
inlined literal) for the `.dark` override to work.

In the browser at `/`, open devtools console and run:

```js
getComputedStyle(document.documentElement).getPropertyValue('--color-accent')
```

Then add `class="dark"` to `<html>` in the elements panel and run it again.

Expected: two different values (a blue-600 oklch value, then a blue-400 one).

If the values are identical, the `@theme` + `.dark` override approach failed.
Fallback: delete `--color-accent` from `@theme` and from `.dark`, and in
Tasks 2/4/5/6 use explicit paired utilities everywhere instead —
`text-blue-600 dark:text-blue-400`, `bg-blue-600 dark:bg-blue-400`,
`border-blue-600 dark:border-blue-400`, `ring-blue-600 dark:ring-blue-400`.
Note in the commit message that the fallback was used.

- [ ] **Step 6: Verify the grid background visually**

At `http://localhost:4321/`:
- Light mode: page background is light gray-blue (`#f1f4f9`) with a faint 24px grid.
- Add `dark` to `<html>`: background is near-black navy (`#0f1729`) with faint light grid lines.
- Grid lines are visible but subtle — they should not compete with body text.
- Reload with `dark` set in localStorage (`localStorage.setItem('theme','dark')` then reload): no white flash before dark paints.

- [ ] **Step 7: Commit**

```bash
git add src/styles/global.css src/layouts/Layout.astro
git commit -m "Add class-based dark mode, accent token, and grid background"
```

---

### Task 2: Accent sweep — replace every violet with the blue accent

Six occurrences across five files. Doing this before the nav rewrite means the
new nav inherits correct colors.

**Files:**
- Modify: `src/components/NavItem.astro:7`
- Modify: `src/components/Prose.astro:7`
- Modify: `src/components/Testimonial.astro:11`
- Modify: `src/pages/projects.astro:30`
- Modify: `src/pages/writing/index.astro:18,38,39,40,45,46,76`

**Interfaces:**
- Consumes: `--color-accent` / `text-accent` etc. from Task 1.
- Produces: no violet remains anywhere in `src/`. Task 4 relies on `NavItem.astro` already using the accent.

- [ ] **Step 1: `src/components/NavItem.astro`**

Replace `hover:text-violet-600 dark:hover:text-violet-400` with
`hover:text-accent`, and the active-state
`bg-violet-100 text-violet-800 dark:bg-violet-700 dark:text-violet-200` with
`bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`.

Resulting line 7:

```astro
    <a class={`relative block px-3 rounded-full py-2 transition hover:text-accent ${isActive ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}`} href={Astro.props.href}><slot /></a>
```

(The active pill keeps explicit shades rather than `bg-accent` — a filled
blue-600 pill behind dark text would fail contrast. `dark:bg-violet-700`
becomes `dark:bg-blue-900` because the grid background is darker than the old
`zinc-900`, and 700 is too loud against it.)

- [ ] **Step 2: `src/components/Prose.astro`**

Replace `prose-a:hover:text-violet-600 dark:prose-a:hover:text-violet-400`
with `prose-a:hover:text-accent`.

- [ ] **Step 3: `src/components/Testimonial.astro`**

Replace `stroke-violet-500/30` with `stroke-accent/30`.

- [ ] **Step 4: `src/pages/projects.astro`**

Replace `text-violet-500 dark:text-violet-400` with `text-accent`.

- [ ] **Step 5: `src/pages/writing/index.astro`**

Six replacements:

| Line | From | To |
|------|------|----|
| 18 | `focus-within:text-violet-500! dark:focus-within:text-violet-500!` | `focus-within:text-accent!` |
| 38 | `focus:border-violet-500` | `focus:border-accent` |
| 39 | `focus:bg-violet-500/5` | `focus:bg-accent/5` |
| 40 | `dark:focus:bg-violet-600/10` | `dark:focus:bg-accent/10` |
| 45 | `focus:ring-violet-500` | `focus:ring-accent` |
| 46 | `focus-visible:ring-violet-500` | `focus-visible:ring-accent` |
| 76 | `text-violet-600 dark:text-violet-400` | `text-accent` |

- [ ] **Step 6: Verify no violet remains**

Run: `grep -rn "violet" src/`
Expected: no output.

- [ ] **Step 7: Verify the build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 8: Verify visually in both themes**

- `/writing`: search input — focus it; border, ring, and icon turn blue, not violet. Post "Read more" affordance is blue.
- `/projects`: project meta text is blue.
- `/`: testimonial quote-mark SVG stroke is blue-tinted; body links turn blue on hover.
- Repeat with `dark` on `<html>`: blues are the lighter blue-400 and legible against the navy grid.

- [ ] **Step 9: Commit**

```bash
git add src/components/NavItem.astro src/components/Prose.astro src/components/Testimonial.astro src/pages/projects.astro src/pages/writing/index.astro
git commit -m "Replace violet accent with blue accent token"
```

---

### Task 3: Monospace headlines and mono eyebrow labels

**Files:**
- Modify: `src/components/Prose.astro` (add `prose-headings:` modifiers)
- Modify: `src/layouts/Post.astro` (post date becomes a mono eyebrow label)
- Modify: `src/pages/writing/index.astro:56` (post-list `<h2>` — it sits outside `Prose`, so it needs `font-mono` explicitly)

**Interfaces:**
- Consumes: `--font-mono` from `@theme` (Task 1 kept it unchanged).
- Produces: nothing consumed by later tasks.

Every other heading on the site (`Landing.astro`, `List.astro`, `Post.astro`,
`index.astro`, `projects.astro`, `extras.astro`) renders inside `<Prose>`, so
`prose-headings:font-mono` covers them — no per-page edits needed beyond the
one in `writing/index.astro`.

- [ ] **Step 1: Add heading modifiers to `src/components/Prose.astro`**

Full file after this step (this also carries the Task 2 accent change):

```astro
---
---
<div
    class="prose prose-zinc dark:prose-invert 
    sm:prose-lg md:prose-xl lg:prose-2xl
    prose-headings:font-mono prose-headings:tracking-tight
    prose-img:rounded-lg dark:prose-img:rounded-lg
    prose-a:hover:text-accent">
  <slot />
</div>
```

- [ ] **Step 2: Style the post date as a mono eyebrow label in `src/layouts/Post.astro`**

Replace the date paragraph:

```astro
			{
				formattedDate && (
					<p class="-mt-8 text-zinc-500">{formattedDate}</p>
				)
			}
```

with:

```astro
			{
				formattedDate && (
					<p class="-mt-8 font-mono text-sm tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
						{formattedDate}
					</p>
				)
			}
```

- [ ] **Step 3: Add `font-mono` to the post-list heading in `src/pages/writing/index.astro:56`**

This `<h2>` is outside `Prose` (the `Landing.astro` slot renders after the
`Prose` block closes), so it does not inherit `prose-headings:font-mono`.

From:

```astro
                                class="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100"
```

To:

```astro
                                class="font-mono text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100"
```

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 5: Verify visually**

- `/`: `h1` and the `h3`s render in JetBrains Mono, bold, tight.
- `/writing`: page title mono; each post title in the list mono.
- `/writing/<any-post>`: title mono; the date under it is small uppercase mono with wide letter-spacing; **body copy is still Inter, not mono** — this is the most likely thing to get wrong.
- `/projects`, `/extras`, `/uses`: headings mono, body Inter.
- Long headings still wrap sanely at mobile width (375px) — mono is wider than Inter, so check that the home page `h1` does not overflow.

- [ ] **Step 6: Commit**

```bash
git add src/components/Prose.astro src/layouts/Post.astro src/pages/writing/index.astro
git commit -m "Set headings in JetBrains Mono and style post date as mono eyebrow"
```

---

### Task 4: Desktop nav — static left-aligned bar

Replaces the centered floating pill with a static full-width bar whose links
are flush left, aligned to the same `max-w-4xl` edge as page content. Mobile
handling and the theme toggle come in Tasks 5 and 6; at the end of this task
the nav is desktop-correct and simply shows the same left-aligned links at all
widths.

**Files:**
- Modify: `src/components/SiteNav.astro` (full rewrite)
- Modify: `src/layouts/Layout.astro` (reduce the now-excessive top margin on the content wrapper)

**Interfaces:**
- Consumes: `NavItem.astro` (unchanged API — `href` prop plus slot), accent utilities from Task 1.
- Produces: `<header>` element with an inner `div.mx-auto.max-w-4xl` flex row. Task 5 adds a toggle button as the row's last child; Task 6 adds a hamburger button plus a sibling flyout panel.

- [ ] **Step 1: Rewrite `src/components/SiteNav.astro`**

```astro
---
import NavItem from './NavItem.astro'
---
<header class="w-full border-b border-zinc-200 dark:border-zinc-800">
    <nav class="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 lg:px-0">
        <ul class="flex items-center gap-1 font-mono text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/writing">Writing</NavItem>
            <NavItem href="/extras">Extras</NavItem>
            <NavItem href="/uses">Uses</NavItem>
        </ul>
    </nav>
</header>
```

Notes on what changed and why:
- Dropped `pointer-events-auto`, `rounded-full`, `bg-white/90`, `ring-1`,
  `shadow-lg`, `backdrop-blur-sm` — the bar is no longer a floating pill, so
  the elevation treatment goes with it.
- Dropped `mx-auto px-4 mt-4 md:mt-8` on the outer element: the header is now
  full-bleed with a bottom border, and the inner `nav` handles centering.
- `max-w-4xl` and `px-4 lg:px-0` mirror the content wrapper in `Layout.astro`
  and the footer, so the first link's left edge lines up with body text.
- `font-mono` on the list matches the new headline treatment.
- The `<li>` wrappers and pill-shaped active state live in `NavItem.astro` and
  are unchanged — the active pill keeps its `rounded-full`.

- [ ] **Step 2: Reduce the content top margin in `src/layouts/Layout.astro`**

The old floating nav needed `mt-16 lg:mt-20` of clearance. A static 4rem bar
does not. Change:

```astro
		<div
			class="mt-16 lg:mt-20 mx-auto w-full px-4 lg:px-0 max-w-4xl flex-grow"
		>
```

to:

```astro
		<div
			class="mt-12 lg:mt-16 mx-auto w-full px-4 lg:px-0 max-w-4xl flex-grow"
		>
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Verify visually at desktop width (≥1024px)**

- Nav is a full-width bar at the very top with a hairline bottom border; it is
  not centered, not pill-shaped, and does not float over content.
- "Home" is the leftmost item and its left edge aligns with the page `h1`'s
  left edge and with the footer's copyright text.
- Links are in JetBrains Mono.
- Visit each of `/`, `/projects`, `/writing`, `/extras`, `/uses`: exactly one
  link shows the blue active pill, and it is the right one. On
  `/writing/<a-post>` the "Writing" link is active (`NavItem` matches by
  route prefix).
- Hovering a non-active link turns it blue.
- Check dark mode: the bar's border is visible against the navy grid but not
  harsh.

- [ ] **Step 5: Verify visually at mobile width (375px)**

At this point the five links are still all rendered in the bar and will look
cramped or overflow. That is expected and is fixed in Task 6. Confirm only
that nothing is broken *above* the fold-independent layout — the bar exists,
the border renders, content below it is not overlapped.

- [ ] **Step 6: Commit**

```bash
git add src/components/SiteNav.astro src/layouts/Layout.astro
git commit -m "Replace floating pill nav with static left-aligned nav bar"
```

---

### Task 5: Theme toggle button

Adds the sun/moon button at the far right of the nav bar and the click handler
that flips `.dark` and persists the choice. The handler uses
`querySelectorAll('[data-theme-toggle]')` so the second copy of the button
added inside Task 6's flyout is wired up automatically with no further JS.

**Files:**
- Modify: `src/components/SiteNav.astro`

**Interfaces:**
- Consumes: `.dark` class convention and the `theme` `localStorage` key established by Task 1's init script.
- Produces:
  - `data-theme-toggle` attribute as the hook for any theme-toggle button. Task 6 adds a second button carrying this attribute and must not add its own listener.
  - Icon-visibility convention: sun icon `dark:hidden`, moon icon `hidden dark:block`.

- [ ] **Step 1: Add the toggle button to `src/components/SiteNav.astro`**

Insert as the last child of `<nav>`, after the `</ul>`:

```astro
        <button
            type="button"
            data-theme-toggle
            aria-label="Toggle dark mode"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition hover:bg-zinc-200/60 hover:text-accent dark:text-zinc-400 dark:hover:bg-zinc-800/60"
        >
            <svg
                class="h-5 w-5 dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="4"></circle>
                <path
                    d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                ></path>
            </svg>
            <svg
                class="hidden h-5 w-5 dark:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                aria-hidden="true"
            >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
            </svg>
        </button>
```

The sun shows in light mode (click it to go dark); the moon shows in dark mode.

- [ ] **Step 2: Add the click handler at the bottom of `src/components/SiteNav.astro`**

Append after the closing `</header>`:

```astro
<script is:inline>
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            const isDark =
                document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    });
</script>
```

`is:inline` keeps the script in place on every page rather than letting Astro
hoist and bundle it; this site does full-page navigations, so per-page inline
wiring is correct and there is no view-transition lifecycle to handle.

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Verify the toggle behavior**

At `http://localhost:4321/`:
- The button sits at the far right of the nav bar, vertically centered, on the
  same baseline row as the links.
- In light mode a sun icon shows. Click it: the whole page flips to the dark
  navy grid, and the icon becomes a moon. Click again: back to light.
- After choosing dark, reload: the page loads dark with **no white flash**.
- After choosing dark, navigate to `/projects` via the nav link: still dark, no
  flash.
- Run `localStorage.getItem('theme')` in the console: returns `"dark"` or
  `"light"` matching the current state.
- Clear it (`localStorage.removeItem('theme')`) and reload: the theme now
  follows the OS setting. Flip the OS appearance to confirm.
- Keyboard: `Tab` to the button, press `Enter` and `Space` — both toggle it
  (it is a real `<button>`, so this should work without extra code).

- [ ] **Step 5: Commit**

```bash
git add src/components/SiteNav.astro
git commit -m "Add persisted dark mode toggle to nav bar"
```

---

### Task 6: Mobile hamburger and flyout menu

Below `md`, the link list is replaced by a hamburger button; tapping it opens a
panel with the links stacked vertically plus a second theme toggle.

**Files:**
- Modify: `src/components/SiteNav.astro`

**Interfaces:**
- Consumes: `data-theme-toggle` hook and the icon-visibility convention from Task 5; `NavItem.astro` unchanged.
- Produces: final `SiteNav.astro`. Nothing downstream.

- [ ] **Step 1: Make the desktop link list and toggle hidden on mobile**

On the `<ul>`, change `class="flex items-center gap-1 ..."` to
`class="hidden items-center gap-1 md:flex ..."` (keep every other class).

On the toggle `<button>` from Task 5, change `class="inline-flex h-9 w-9 ..."`
to `class="hidden h-9 w-9 md:inline-flex ..."` (keep every other class).

- [ ] **Step 2: Add the hamburger button as the first child of `<nav>`, before the `<ul>`**

```astro
        <button
            type="button"
            id="menu-button"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition hover:bg-zinc-200/60 hover:text-accent md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800/60"
        >
            <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                aria-hidden="true"
            >
                <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg>
        </button>
```

- [ ] **Step 3: Add the flyout panel as the last child of `<header>`, after `</nav>`**

```astro
    <div
        id="mobile-menu"
        hidden
        class="border-t border-zinc-200 bg-[var(--grid-bg)] px-4 py-3 md:hidden dark:border-zinc-800"
    >
        <ul class="flex flex-col gap-1 font-mono text-base font-medium text-zinc-700 dark:text-zinc-300">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/writing">Writing</NavItem>
            <NavItem href="/extras">Extras</NavItem>
            <NavItem href="/uses">Uses</NavItem>
        </ul>
        <div class="mt-3 border-t border-zinc-200 pt-3 dark:border-zinc-800">
            <button
                type="button"
                data-theme-toggle
                aria-label="Toggle dark mode"
                class="inline-flex h-9 items-center gap-2 rounded-md px-2 font-mono text-sm text-zinc-600 transition hover:bg-zinc-200/60 hover:text-accent dark:text-zinc-400 dark:hover:bg-zinc-800/60"
            >
                <svg
                    class="h-5 w-5 dark:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path
                        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                    ></path>
                </svg>
                <svg
                    class="hidden h-5 w-5 dark:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    aria-hidden="true"
                >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
                    ></path>
                </svg>
                <span class="dark:hidden">Dark mode</span>
                <span class="hidden dark:inline">Light mode</span>
            </button>
        </div>
    </div>
```

`bg-[var(--grid-bg)]` gives the open panel an opaque background in both themes
using the custom property from Task 1, so page content does not show through
the gaps between stacked links.

The panel deliberately carries a second `data-theme-toggle` button — Task 5's
`querySelectorAll` listener already covers it. Do **not** add another listener.

- [ ] **Step 4: Extend the existing `<script is:inline>` block with the menu logic**

Append inside the same script block from Task 5 (one script, not two):

```js
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    function setMenuOpen(open) {
        mobileMenu.hidden = !open;
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute(
            "aria-label",
            open ? "Close menu" : "Open menu",
        );
    }

    menuButton.addEventListener("click", () => {
        setMenuOpen(mobileMenu.hidden);
    });

    // Tapping a link navigates away, but close anyway so the panel is not
    // mid-open if the browser restores the page from cache.
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !mobileMenu.hidden) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
```

No focus trap — five links and a button behind a plain disclosure button does
not warrant one, and adding it is out of scope.

- [ ] **Step 5: Verify the build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 6: Verify visually at mobile width (375px)**

- The nav bar shows only a hamburger icon on the left. The five links and the
  standalone toggle button are gone.
- Tap the hamburger: a panel drops below the bar with the five links stacked
  vertically in mono, then a divider, then a "Dark mode"/"Light mode" button
  with icon.
- The panel background is opaque — the grid and page text behind it do not
  bleed through.
- The correct link shows the blue active pill for the current page.
- Tap the theme button inside the panel: the page flips theme, the panel's own
  background and label update, and the panel stays open.
- Tap the hamburger again: the panel closes.
- Open it, then press `Escape`: it closes and focus returns to the hamburger.
- Open it and tap a link: it navigates, and the new page loads with the panel
  closed.
- Reload with the panel never having been opened: the panel is not visible (the
  `hidden` attribute holds before JS runs).

- [ ] **Step 7: Verify visually at desktop width (≥768px)**

- The hamburger is gone; the five links and the right-aligned toggle are back.
- Resize from 375px to 1280px **with the panel open**: the panel disappears at
  the `md` breakpoint (it is `md:hidden`) and the desktop links appear. No
  duplicated nav, no leftover gap.

- [ ] **Step 8: Verify accessibility basics**

- With the panel closed, `Tab` reaches the hamburger; `aria-expanded="false"`.
- Press `Enter`: `aria-expanded="true"`, `aria-label` becomes "Close menu".
- `Tab` from the hamburger walks into the panel's links and its theme button.

- [ ] **Step 9: Commit**

```bash
git add src/components/SiteNav.astro
git commit -m "Add mobile hamburger menu with flyout nav and theme toggle"
```

---

### Task 7: Final full-site pass

A dedicated sweep because the preceding tasks each verified only their own
surface, and this redesign touches every page.

**Files:** none — verification only, plus any small fixes the pass turns up.

- [ ] **Step 1: Build and preview the production output**

```bash
npm run build && npm run preview
```

Expected: build exits 0; preview serves the built site.

- [ ] **Step 2: Walk every page in both themes at both widths**

Pages: `/`, `/projects`, `/writing`, a post under `/writing/`, `/extras`,
`/uses`, `/audiobooks`, `/gumbo`, `/rice-dressing`, and a page under `/lists`.

For each, in light **and** dark, at 375px **and** 1280px, confirm:
- Grid background renders; no leftover white or `zinc-900` block that ignores it.
- Headings mono; body Inter.
- Links and focus states are blue, never violet.
- Text contrast is adequate against the grid background — dark mode body text
  (`zinc-200`) and muted text (`zinc-400`/`zinc-500`) on `#0f1729` is the most
  likely weak spot. If any muted text is hard to read, lighten it one step and
  note the change.
- Code blocks (Shiki `github-dark` theme) still look intentional on both
  backgrounds — this theme is dark in both modes; if it clashes badly in light
  mode, report it rather than fixing it here (theme choice is out of scope).
- Footer border and links look right against the grid.

- [ ] **Step 3: Fix anything found, then re-verify**

Make the minimal fix, re-run `npm run build`, re-check the affected page.

- [ ] **Step 4: Commit any fixes**

```bash
git add <only the files you changed>
git commit -m "Fix contrast and spacing issues found in full-site redesign pass"
```

If nothing needed fixing, skip this step and say so explicitly rather than
inventing a commit.

---

## Self-Review Notes

Spec coverage check against
`docs/superpowers/specs/2026-08-14-site-redesign-design.md`:

| Spec item | Task |
|-----------|------|
| Grid background, light + dark | 1 |
| Mono headlines | 3 |
| Blue accent replacing violet | 1 (token), 2 (sweep) |
| Class-based dark mode, no flash | 1 |
| Dark mode toggle button | 5 |
| Static left-aligned nav bar | 4 |
| Mobile hamburger + flyout, toggle inside | 6 |
| Keep border radius | Global Constraints |
| No new dependencies | Global Constraints |

Two deviations from the spec's own "Files touched" list, both intentional:

1. The spec listed the accent swap as `NavItem.astro` only, but its goal #3
   says the blue accent replaces violet site-wide. There are six more violet
   sites (`Prose.astro`, `Testimonial.astro`, `projects.astro`,
   `writing/index.astro`). Task 2 covers all of them.
2. The spec listed heading changes across `Prose.astro`, `Post.astro`,
   `Landing.astro`, `List.astro`. In practice every heading in those layouts
   renders inside `<Prose>`, so `prose-headings:font-mono` on `Prose.astro`
   covers them; only `writing/index.astro`'s post-list `<h2>` sits outside
   `Prose` and needs an explicit class. Task 3 reflects the actual code.

The mono eyebrow-label treatment for the post date was in the approved chat
design but was dropped from the written spec; Task 3 Step 2 implements it.
