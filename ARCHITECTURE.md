# mi-serie-favorita Architecture

## Overview

`mi-serie-favorita` is a standalone Astro web application: a Spanish-language fan tribute site for the Netflix series *Dark*, explicitly presented as unaffiliated with Netflix. It is a self-contained front-end artifact — it renders and ships the whole product on its own, with no backend service of its own, no database, and no runtime API of its own beyond two generated text endpoints.

The repository owns the entire delivered experience: the document shell, the six content views (Inicio, Resumen, Aclaraciones, Familias, Recomendaciones, Galeria), the client-side interaction logic, the typed content that feeds every section, the media assets, and the Vercel deployment configuration.

Primary entry points:

- `src/pages/index.astro` — the only HTML route. It composes all six views into a single document and hosts the hash-based view router that shows and hides them.
- `src/layouts/BaseLayout.astro` — the document shell used by that page: `<head>` metadata, theme bootstrap, the initial loader, the ambient background, the reading-progress bar, the trailer modal, and the on-demand YouTube loader.
- `src/pages/robots.txt.ts` and `src/pages/sitemap.xml.ts` — server-rendered text endpoints that resolve the site origin per request.

The scope of the site is deliberately narrower than its structure suggests: six navigable views, but a single crawlable URL. Sections are not Astro routes; they are containers toggled inside one document.

## Stack & Environment

The repository is a generic Node.js/Web project built with npm. `package.json` at the repository root is the single build file, with `package-lock.json` as the committed lockfile. It is not built on the organization's internal framework; it is a plain Astro application.

Technical context that governs the owned surfaces:

- **Astro 6** with `output: 'server'` and the `@astrojs/vercel` adapter. The site renders on the server but its content is effectively static, so the adapter enables ISR with a 24-hour expiration — the cadence at which the only date-dependent content (the cycle countdown and the quote-of-the-day index) actually changes. Vercel Web Analytics is enabled through the same adapter configuration in `astro.config.mjs`.
- **Tailwind CSS v4** through the Vite plugin `@tailwindcss/vite`, not classic PostCSS. There is no `tailwind.config.js`; theme tokens are declared with `@theme` inside `src/styles/global.css`, and dark mode is class-based through a `@variant dark` rule rather than `prefers-color-scheme`.
- **React 19 with `@astrojs/react`** is installed and the integration is registered, and `tsconfig.json` sets `jsx: react-jsx` with `jsxImportSource: react`. No React component or client island exists in `src/` today; every interactive surface is an `.astro` component with its own script. `lucide-react` is likewise installed but unused — icons in `.astro` files are inline SVG paths.
- **AOS** provides scroll-reveal animations, imported from the npm package (JS in `src/layouts/BaseLayout.astro`, CSS via `@import 'aos/dist/aos.css'` in `src/styles/global.css`) rather than from a CDN.
- **TypeScript** extends `astro/tsconfigs/strict`, and `.astro/types.d.ts` is part of the include set.

Testing and local workflow are expressed entirely as npm scripts:

- `npm run dev` — Astro dev server on port 4321 (also declared in `.claude/launch.json` and `.vscode/launch.json`).
- `npm run build` / `npm run preview` — production build into `dist/` plus `.vercel/output/`, and local preview.
- `npm run test` — Vitest, restricted by `vitest.config.ts` to `src/utils/**/*.test.ts`.
- `npm run test:e2e` — Playwright against `e2e/`, with two viewport projects (`escritorio` 1440x900, `movil` 390x844); its `webServer` block starts `npm run dev` and reuses an already-running server.

`package.json` requires Node `>=22.12.0` through `engines`. No tool-version pin file (such as `.tool-versions` or `.nvmrc`) exists in the repository, so that engine range is the only version constraint recorded locally.

`.env` is gitignored and holds a single `RESEND_API_KEY`. Nothing under `src/` reads it or any other environment variable; the email endpoint that once used it was removed.

## Project Structure

The repository is organized around one page and the component, data, and asset layers that feed it.

- **`src/pages/`** — the whole route surface. `index.astro` is the single HTML page and the home of the view router; `robots.txt.ts` and `sitemap.xml.ts` are `APIRoute` handlers returning plain text and XML. There are no content collections (`src/content` does not exist).
- **`src/layouts/BaseLayout.astro`** — the shared document shell. Beyond markup it owns several cross-cutting behaviors: the pre-paint theme script, the loader lifecycle, the reading-progress bar (native scroll-timeline with a JS fallback), the trailer modal, the AOS bootstrap, and the YouTube player mount policy.
- **`src/components/`** — full-view components, one per navigable view plus the persistent chrome: `Header.astro`, `Footer.astro`, `Resumen.astro`, `Aclaraciones.astro`, `Familias.astro`, `Recomendaciones.astro`, `Galeria.astro`, and the two floating actions `AsistenteWinden.astro` and `Whatsapp.astro`.
- **`src/components/sections/`** — the section blocks that make up the Inicio view only: `Hero`, `Ratings`, `Timeline`, `Countdown`, `Curiosidades`, `Testimonials`, `FraseDelDia`, `Explore`. The split between this folder and `src/components/` is a placement convention, not a technical boundary: page-level views go one level up, section blocks go here.
- **`src/data/`** — typed content modules, the source of truth for everything the components render. `familias.ts` declares the genealogy type set (`RelationshipType`, `FamilyRelationship`, `CharacterGalleryImage`, `CharacterStage`, `FamilyCharacter`, `Family`) plus `familiasData` and `relationshipData`; `recomendaciones.ts` declares `StreamingPlatform`, `Recommendation`, `recommendations` and the platform filters; `bandaSonora.ts` declares `Song`, `songs` and `galleryImages`.
- **`src/utils/familyTree.ts`** — pure kinship logic over the `familias.ts` types (character flattening, relationship deduplication, BFS lineage, relationship validation), with its Vitest suite colocated as `familyTree.test.ts`.
- **`src/scripts/tabs.js`** — the only shared client module, exporting `initTabs` and `initVideoFacades`. It is imported by bundled `<script>` blocks, which is what distinguishes it from the inline scripts elsewhere.
- **`src/styles/global.css`** — the Tailwind entry point, the `@theme` token block, the dark-mode variant, the global focus and scrollbar treatment, and every CSS rule that has to cross component boundaries.
- **`src/assets/`** — two SVGs left from the Astro starter template, referenced nowhere in `src/`.
- **`public/`** — roughly 38 MB of static media, the dominant asset surface: `Familias/Familia1...Familia5/` (character portraits and per-stage stills, about 22 MB), `Aclaraciones/`, `galeria/`, `recomendacion/`, `resumen/temporada1...3/`, `audio/dark-theme.mp3` (3.35 MB), plus favicons, the logo, and the 1200x630 `og.jpg` social image.
- **`e2e/smoke.spec.ts`** — the Playwright smoke battery covering navigation, layout, theme, performance and the assistant.
- **`docs/audit-familias-visual-refresh.md`** — an audit log for a past visual refresh of the Familias view, recording avatar replacements, stage-image brightness review, and complete-tree layout coordinates.
- **`.clauderules`** — the repository's contribution and design contract (see Conventions). `.claude/launch.json` and `.vscode/` hold editor and preview configuration.
- **`dist/`, `.astro/`, `.vercel/`, `node_modules/`** are generated or installed and are gitignored.

The relationships between these surfaces are one-directional: `src/data/` feeds both `src/utils/` and the components; `src/utils/` is consumed at build time by `Familias.astro` and by the Vitest suite; `src/scripts/tabs.js` is consumed by three view components; `src/styles/global.css` and `BaseLayout.astro` provide behavior that individual components depend on but do not own.

## Architecture & Patterns

**Single document, hash-routed views.** The defining architectural decision is that the six sections are not routes. `src/pages/index.astro` renders all six into one document as `#vista-inicio`, `#vista-resumen`, `#vista-aclaraciones`, `#vista-personajes`, `#vista-recomendaciones` and `#vista-galeria`, and an inline script toggles `hidden`/`block` on `hashchange`. The router is table-driven by three parallel constants that must stay aligned: `VISTAS` (the container ids), `VISTA_POR_HASH` (hash to container), and `RESET_POR_VISTA` (container to the name of the global reset function for that view). A view change fades the outgoing container out, swaps, resets the view's tabs, refreshes AOS and scrolls to the top; a same-view hash instead scrolls to the matching in-page anchor. Both paths honor `prefers-reduced-motion`.

**Astro-first, script-in-component.** Interactivity is implemented with `.astro` components carrying their own script rather than client islands. Two script forms are used deliberately: `<script is:inline>` for logic belonging to one view, and a bundled `<script>` with `import` for logic already shared by more than one — currently only the tab controller. Passing server data to the client uses `define:vars`, which implies `is:inline` and therefore forbids imports in that block; this is the reason `Familias.astro` cannot reuse `src/utils/familyTree.ts` at runtime.

**A `window`-level contract between components.** Because components cannot import from each other's scripts, coordination happens through globals installed on `window`, and this is a real interface rather than incidental leakage:

- View reset callbacks the router invokes: `resetResumenTabs`, `resetAclaracionesTabs`, `resetPersonajesTabs`, `resetRecomendacionesTabs`, `resetGaleriaTabs`.
- Shared services from the layout: `cargarYouTubeApi` (used by `Galeria.astro` and `Resumen.astro` to mount their own players) and `AOS` (exposed before initialization so that every `AOS.refresh()` call site keeps working even if init fails).
- The Familias viewer API: `toggleSidebar`, `goToFamiliasOverview`, `openTreeViewer`, `closeTreeViewer`, `openCompleteTreeViewer`, `openCinematicViewer`, `closeCinematicViewer`, `jumpToCharacter`, `zoomIn`, `zoomOut`, `zoomReset`. Fourteen inline `onclick` attributes in that component's markup call them by bare name, so these are load-bearing.

**Body-level state classes as the cross-component channel.** Four classes on `<body>` coordinate behavior that spans components: `scroll-lock` (a modal layer is up), `hero-in-view` (the hero dominates the viewport, so the floating buttons retreat), `hide-global-ui` (an immersive tree or cinematic viewer is open, so header, footer and floating buttons are removed), and `asistente-open`. Two of them are painted server-side and removed by JavaScript, with a `<noscript>` block in the layout undoing them when scripts never run.

**Data-first content with server-side computation.** No component hardcodes domain content; each imports from `src/data/`. Frontmatter is used as the computation layer so the client does not have to: `Countdown.astro` derives the next 33-year window from the in-fiction apocalypse date, `FraseDelDia.astro` derives the day's quote index from the epoch day, `Ratings.astro` derives average and totals from one distribution array, `Recomendaciones.astro` derives the featured (highest-affinity) title and aggregate stats, `AsistenteWinden.astro` derives its quoted counts from the recommendation and song lists, and `Familias.astro` runs `validateRelationships` on the server and logs findings there instead of shipping them to the browser.

**One shared tab controller.** `initTabs` in `src/scripts/tabs.js` implements the full pattern once — sliding pill, `aria-selected`, roving `tabindex`, arrow/Home/End navigation, refont-aware repositioning — and returns the reset function that the router stores as `window.reset*Tabs`. `Resumen`, `Aclaraciones` and `Galeria` all configure it with selectors and an initial panel; `Galeria` also passes an `alCambiar` hook to stop music when leaving its soundtrack tab. `Recomendaciones` is the exception: it uses platform filters rather than tabs and provides its own hand-written reset, which also closes its detail sheet. That view is a static featured banner plus a single 16:9 catalog; each card opens a detail dialog (bottom sheet below `md`, centered modal above, prev/next over the currently filtered list) that is moved to `<body>` and filled from the `define:vars` data. Covers have mixed aspect ratios, so cards show them uncropped (`object-contain`) over a blurred copy; `Recommendation.coverOnLight` marks dark transparent logos that need a light backdrop.

**Documented duplication.** `Familias.astro` reimplements `computeLineage`, relationship deduplication and family lookup inside its `define:vars` script because that script cannot import the TypeScript module. This is an accepted exception recorded in the file and in `.clauderules`: the algorithm exists twice and both copies must move together.

**Styling boundaries.** Astro scopes each component's `<style>` with a `data-astro-cid-*` attribute, so a selector written in one component silently fails to match an element rendered by another. Rules that cross components live in `src/styles/global.css` — the floating-button visibility rules, the fade-in animation, the amber connector line, the numbered case-card counter, the audio equalizer bars, and the mobile-only horizontal carousel (`carrusel-movil`, shared by Curiosidades and Testimonials) are all there for exactly that reason. `BaseLayout.astro` uses a `<style is:global>` block for document-level chrome it declares itself.

**Performance as an architectural rule.** No YouTube iframe appears in the initial HTML. The layout mounts the hero player immediately only when the visitor enters through Inicio and pauses it while the hero is fully off-screen; it mounts the ambient player only once the hero has left the screen or another view is shown, and never below 768 px, with Save-Data, or under `prefers-reduced-motion` (`AMBIENTAL_PERMITIDO` / `pedirAmbiental`); it creates the modal player only when the modal opens, and loads the IFrame API itself lazily behind a queue (`conYouTube`). Both background players are scaled 125 % so the chrome YouTube paints on the iframe edges stays outside the crop. Season videos in `Resumen` are static facades that swap in a `youtube-nocookie.com` iframe on click, and the eighteen soundtrack tracks in `Galeria` share a single reusable player (created with `width`/`height` at 100 %: `YT.Player` otherwise replaces its slot with a fixed 640x360 iframe). The photo lightbox is a native scroll-snap carousel whose slides and desktop thumbnail strip are built on first open; slides load only the visible photo and its neighbours, and zoom enlarges the image inside its own scrollable slide. Elements created by script (lightbox slides, thumbnails) are styled with `:global()` from the component, since they never carry Astro's scoping attribute.

## Contracts & Integrations

The repository publishes no service API and consumes none at runtime from its own server. Its contracts are of three kinds.

**Published to the outside world.** `/robots.txt` and `/sitemap.xml` are generated per request, resolving the origin from `Astro.site` or the request URL because `astro.config.mjs` intentionally does not pin a `site` domain; the sitemap currently lists a single URL, which is the direct consequence of the hash-routing decision. `BaseLayout.astro` publishes the canonical link and the full Open Graph and Twitter card set, with `og:image` built as an absolute URL from the same resolved origin. The deployment contract with Vercel is materialized in the generated `.vercel/output/config.json`, which routes `/`, `/robots.txt`, `/sitemap.xml` and `/404` through the ISR handler and everything else through the server renderer.

**Internal contracts between owned surfaces.** These are unenforced by the type system and are where changes break things:

- *The view registry.* A hash is valid only if it appears in `VISTA_POR_HASH` in `src/pages/index.astro`. `Header.astro` (`navLinks`), `Footer.astro` (`paginasLinks`), `Explore.astro` (`destinos`), the assistant's CTAs and the `VISTAS` constant in `e2e/smoke.spec.ts` all restate the same list and must agree.
- *The router callback contract.* Each tabbed view must expose its `window.reset*` function under the exact name listed in `RESET_POR_VISTA`.
- *The `initTabs` options object.* `{ boton, panel, pastilla, inicial, alCambiar }`, with `data-target` on each button matching a panel id.
- *The genealogy type set.* `src/data/familias.ts` types are consumed by `src/utils/familyTree.ts`, by `Familias.astro` at build time, and by `src/utils/familyTree.test.ts`, which asserts against the real `familiasData`/`relationshipData` rather than only fixtures.

**Third-party integrations, all browser-side.** The YouTube IFrame API and `youtube-nocookie.com` embeds (trailer, ambient background, season videos, soundtrack), Google Fonts for Cinzel and Open Sans (loaded non-blocking with `preload` plus a `media="print"` swap, with a `<noscript>` fallback), Vercel Web Analytics injected by the adapter, and outbound links to Netflix, YouTube and a WhatsApp `wa.me` deep link. There is no analytics, email, CMS or auth integration in application code; the `RESEND_API_KEY` in `.env` is a leftover with no reader.

## Runtime & Data Flow

**Request path.** A request reaches the Vercel ISR layer, which serves a cached document or triggers a server render at most once every 24 hours. The Astro render evaluates every component's frontmatter — pulling content from `src/data/`, computing the date-dependent countdown and quote index, aggregating ratings and recommendation statistics, and validating the relationship graph server-side — and emits one HTML document containing all six views, five of them hidden.

**Client boot sequence.** The head script picks the theme from `localStorage` or the system preference and writes the `dark` class before first paint. The body arrives already carrying `scroll-lock` and `hero-in-view` so the loader covers the screen and the floating buttons stay hidden from the first painted pixel. After that: the loader is removed about 350 ms after `DOMContentLoaded` with a 2.5-second failsafe, and is not painted at all on same-tab repeat visits (a `sessionStorage` flag read in the head adds `sin-cargador` to `<html>`); AOS initializes (disabled entirely under reduced motion, `once: true`); each tabbed view's controller registers its reset function; the router paints the view matching the current hash; the YouTube mount policy decides which player is needed; and an `IntersectionObserver` on the hero — combined with an `offsetParent` check, since the hero can be `display:none` in other views — drives the `hero-in-view` class.

**Navigation flow.** A hash change fades the current container out over 200 ms, swaps `hidden`/`block`, resets that view's tabs to the first one, refreshes AOS, and either scrolls to the top (real view change) or smooth-scrolls to an in-page anchor (same view). In parallel, the layout's own `hashchange` listener pauses the hero player when leaving Inicio and mounts the ambient player if it has not arrived yet.

**Familias flow**, the deepest runtime path the repository owns: `familiasData` and `relationshipData` are serialized into the page through `define:vars`; the inline script builds the family sidebar, then draws either a per-family tree or the complete cross-family tree, computing SVG connector endpoints from live DOM positions rather than from stored coordinates. Hovering a node runs a BFS lineage highlight over the relationship graph; the viewer supports zoom, pan and pinch with a token guard so a stale asynchronous redraw cannot overwrite a newer tree. Selecting a character opens a cinematic per-stage viewer with scroll-driven stage transitions, a ripple background effect, a typewriter highlight, and ambient audio whose muted state persists in `localStorage`.

**Persisted client state** is limited to three `localStorage` keys — the theme, the Familias ambient-audio mute preference, and an assistant nudge flag — plus the `sessionStorage` flag that skips the loader. There is no server-side state, session, or user data anywhere in the repository.

**Build flow.** `astro build` produces `dist/client` plus the Vercel build output under `.vercel/output/`. There is no separate content-generation, codegen, or asset-optimization step; `public/` is served as-is.

## Conventions

**`.clauderules` at the repository root is the authoritative contribution contract**, written in Spanish and organized in ten numbered areas. Its rules are specific and enforced by the code as it stands, so treat it as required reading before modifying any owned surface. Its main axes are:

- *Anti-regression protocol* — minimal intervention: change only what the task requires, do not restructure imports or rewrite existing comments, and search globally before removing a CSS class, a `window` global, or a variable.
- *Stack decisions* — Astro plus scripts by default and React only when real client state demands it; `is:inline` for single-view logic and bundled `<script>` for anything already duplicated; inline SVG icons in `.astro`; strict TypeScript with no `any` and no aggressive assertions; all character data in `src/data/familias.ts`.
- *Design system* — a stone-based dark palette with amber as the single accent (red and green reserved for spoiler warnings and WhatsApp), `border-white/10` default borders, Cinzel for brand typography and Open Sans for body, and reuse of the neighboring component's spacing scale rather than new arbitrary values.
- *Animation* — duration bands by purpose, `transform`/`opacity` only, four states for every interactive element including `focus-visible:ring-amber-400`, state classes rather than `setTimeout` choreography, and mandatory `prefers-reduced-motion` handling for anything that moves.
- *Navigation* — every internal link must point at a hash registered in `index.astro`; adding a view is a four-step checklist (container, hash registry, nav links, reset function).
- *Accessibility and SEO* — `aria-label` on icon-only buttons; every modal or sliding panel closable with `Escape`, moving and restoring focus, with coherent `aria-hidden`/`aria-expanded`; verified contrast in light mode; the full meta and Open Graph set on any new page.
- *Performance and DOM hygiene* — never a bare YouTube iframe, `loading="lazy"` outside the initial viewport, no uncompressed assets, listener cleanup, batched DOM reads before writes, and no new CDN dependencies.
- *Data and components* — respect the exported types, model characters through `generations`/`stages` rather than flat fields, handle empty lists and missing images, place section blocks in `src/components/sections/` and full views in `src/components/`, and delete orphaned components, globals and styles in the same change that obsoletes them.
- *Verification* — Playwright at both viewports before considering any visual or interaction change finished, plus Vitest whenever `familyTree.ts` or `familias.ts` changes.
- *Delivery* — the final response for a task must state test status, responsive verification, hash-link check, and consistency with neighboring components.

Beyond that file, the code follows consistent local habits: identifiers, comments and UI strings are in Spanish (the `familyTree.ts` type layer is the main English exception); comments explain *why*, frequently recording the bug or measurement that motivated the current shape; unit tests live beside the code they cover under `src/utils/` and are only discovered there; end-to-end specs live in `e2e/`; and commit subjects use a loose `feat()` prefix with a Spanish summary.

## Constraints & Gotchas

- **A link to an unregistered hash is a dead button.** Because the router is the only navigation mechanism, `href="#"` is worse than useless: it empties `location.hash` and bounces the visitor back to Inicio from any view. `e2e/smoke.spec.ts` asserts that no anchor points at a hash that is neither a registered view nor a real in-page id — but only for links present in the initial document.
- **Adding a view means touching five places**, not one: the container in `index.astro`, both router tables, `Header.astro` and `Footer.astro`, the view's `window.reset*` function, and the `VISTAS` constant in the e2e spec.
- **`define:vars` blocks cannot import.** This is why the lineage algorithm exists twice. Changing `computeLineage`, the relationship key logic, or the parent-grouping rules in `src/utils/familyTree.ts` requires replicating the change in the inline script of `Familias.astro` and updating both the Vitest suite and the comment that documents the duplication.
- **The `window.*` globals are called from inline `onclick` attributes.** Fourteen of them in `Familias.astro`. Renaming or removing one of these functions without a repository-wide search produces buttons that throw at click time and nothing at build time.
- **Component styles are scoped and fail silently across components.** A rule written in one component that targets an element rendered by another never matches. Cross-component rules belong in `src/styles/global.css`; this is already the case for the floating-button visibility rules, the shared fade-in, the connector line, the case-card counter, and the audio bars.
- **Tailwind utilities depend on `@theme`.** There is no `tailwind.config.js`; `font-cinzel`, `font-sans` and the accent token exist only because `src/styles/global.css` declares them. Dark mode is the class-based `@variant dark` rule — switching to the `media` variant would break the theme toggle, which is a real, tested feature.
- **Scrollbar styling has a Chromium trap.** Declaring `scrollbar-width` on an element makes Chromium ignore that element's `::-webkit-scrollbar` rules entirely; the page-level scrollbar is hidden on purpose using that behavior, while inner scrolling panels keep theirs. Scrollbar width must never be made theme-dependent, or toggling the theme shifts the whole page horizontally.
- **Playwright must stay serial.** `workers: 1` and `fullyParallel: false` are deliberate: the dev server renders a document larger than 1 MB and concurrent tabs exhaust the navigation timeouts. Navigation uses `waitUntil: 'domcontentloaded'` because the ambient YouTube iframe can leave the `load` event pending indefinitely. `reuseExistingServer: true` means a dev server you already started will be used.
- **Vitest only sees `src/utils/` test files.** The include glob in `vitest.config.ts` is `src/utils/**/*.test.ts`; a test placed anywhere else is silently never run.
- **The loader and scroll lock are server-painted and JavaScript-removed.** The `<noscript>` block in `BaseLayout.astro` is the only thing preventing a permanently frozen page when scripts fail; it must survive edits to the layout head.
- **Media weight is the dominant performance risk.** `public/` is about 38 MB, `public/Familias/` alone about 22 MB, and the ambient audio file 3.35 MB (hence `preload="none"`). New assets must be compressed and lazily loaded outside the initial viewport.
- **Generated directories must not be hand-edited**: `dist/`, `.astro/` (including the generated type declarations `tsconfig.json` includes) and `.vercel/output/` are build products.
- **Dormant dependencies can mislead.** `@astrojs/react`, `react`, `react-dom` and `lucide-react` are installed and the React integration is registered, but the codebase contains no `.jsx`/`.tsx` file and no `client:*` directive. Reaching for React in a new component is a departure from the established architecture, not a continuation of it.
- **`src/assets/` and `.env` contain leftovers.** The two starter-template SVGs are unreferenced, and `RESEND_API_KEY` survives from a removed email endpoint. If an endpoint with side effects is reintroduced, the documented pattern is to instantiate the client inside the handler, validate and bound every field, escape anything interpolated into HTML, return an explicit status, and never leak internal errors to the client.
