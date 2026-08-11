# Audit — Familias Visual Refresh

Companion audit log for the `familias-visual-refresh` tech plan (`.metacontext/deliverables/sdd/familias-visual-refresh/tech-plan.md`). Records what was reviewed and what changed for Specs 1–3.

## Round 3 — Rebalance Tiedemann/Doppler spacing

User feedback: Doppler read as too isolated from the rest of the tree, while Tiedemann read as too cramped against Kahnwald. Measured the actual gaps: Tiedemann's rightmost node (`aleksander`, x=748) sat only 34px from Kahnwald's leftmost (`ines`, x=782); Doppler's leftmost node (`peter`, x=1990) sat 322px from `tannhaus` (x=1668). Shifted the whole Tiedemann block -130px (new aleksander↔ines gap: 164px) and the whole Doppler block -180px (new tannhaus↔peter gap: 142px), keeping each block's internal layout unchanged. `.complete-tree-grid` canvas size (2530×1415) untouched — this was a pure horizontal rebalancing of the two outer blocks, no growth needed. Verified new coordinates via DOM after rebuild.

## Round 2 — Post-review fixes (user feedback after visual QA)

After the first round landed, the user reviewed it live in-browser and reported 6 follow-up issues. Findings and fixes:

1. **Martha's avatar read as visually similar to Katharina's** — not a data bug (paths were correctly distinct), but the two portraits were both dim, blonde/brown-haired close-ups that were hard to tell apart at 56–80px thumbnail size. Replaced Martha's avatar too (`Familia2/4.jpg` → `Familia2/martha-avatar.webp`, sourced from Dark Wiki, dark-haired — visually distinct from Katharina now).
2. **Infinity symbol (Jonas/Martha) too small** — `font-size` on the SVG `∞` glyph raised from `28` to `46`.
3. **Tree connector lines too thick** — `stroke-width` reduced from `1.5` → `1.1` (couple/parent-child lines) and from `2` → `1.4` (Jonas–Martha centerpiece line).
4. **Real bug found: Ines Kahnwald's line to Mikkel never rendered**, in both the Complete Tree and the individual Kahnwald tree (shared `drawTreeLines` function). Root cause: the parent-grouping logic recomputed "all parents of this child" on every relationship iteration and always collapsed to the same couple-based key when a child had 3+ parent relationships (Mikkel has Ulrich+Katharina as a couple *and* Ines individually) — Ines's relationship never got its own map entry. Rewrote the grouping to detect at most one couple per child and give every other parent their own individual line. Verified against the real `relationshipData` in an isolated Node repro: Mikkel now produces 2 line groups (`[ulrich,katharina]` and `[ines]`), Jonas still produces 1 (`[mikkel,hannah]`, no regression).
5. **Tree still felt crowded ("apelotonado")** — applied the previously-approved +15% canvas growth (2200×1230 → 2530×1415, capped as agreed) by uniformly scaling every node/label coordinate ×1.15, preserving the Nielsen/Kahnwald separation from Round 1. `.complete-tree-grid` CSS fallback kept in sync.
6. **Detail view images still too dark / badly cropped**:
   - Cropping: found every stage background used a hardcoded `object-[70%_center]` crop applied uniformly regardless of each photo's actual subject position — changed to `object-center` (standard safe default).
   - Darkness: bumped further beyond Round 1 — filter `contrast(1.0) brightness(1.0)` → `contrast(1.02) brightness(1.18) saturate(1.05)` (net brighter than the original pre-plan value, not just neutralized); gradient stops reduced further (`/70,/35` → `/55,/24` mobile; `/66,/32` → `/52,/22` desktop).
7. **Title/year spacing and "Siguiente" prominence**: title→year gap `gap-1` → `gap-4`, block bottom margin `mb-6` → `mb-8`; "Siguiente" pushed further down (`mt-28/md:mt-40` → `mt-36/md:mt-52`), label text `text-[10px]/text-xs` → `text-xs/text-sm`, pulse dot enlarged `6px→9px` with a stronger pulse (`scale(1.35)→scale(1.5)`, wider glow ring), line lengthened `22px→30px` and brightened.
8. **Narrative content audit** (per user request): ranked all 25 characters by stage count/text length. Franziska Doppler was the thinnest (3 stages, 438 chars) — user chose to address her first. Added 2 new stages between the existing "2019" intro and "La Devota" (1921), researched against the Dark Wiki for canon accuracy:
   - **"El Secreto de Bernadette" (2020)** — the money-hiding/Bernadette Wöller hormone-prescription secret and Magnus's jealousy/reconciliation arc.
   - **"La Huida del Apocalipsis" (27 de junio)** — escaping Winden's apocalypse with Magnus and Bartosz via the Stranger's time machine.
   Franziska now has 5 stages (was 3). Images sourced from Dark Wiki stills (`franziska-bernadette.webp`, `franziska-apocalipsis.webp`). Remaining thin characters (Doris, Tronte, Magnus, Jana, Aleksander, Tannhaus, Ines) were reported to the user but not yet expanded — pending their direction on scope/priority.

## Spec 1 — Portrait avatars (family tree view)

All 25 characters in `src/data/familias.ts` were reviewed by opening their `avatar` image and judging whether it shows a single, recognizable close-up of that specific character.

| Character | Family | Generic/wrong? | Action | New file |
|---|---|---|---|---|
| ines | Kahnwald | N | Kept — clear close-up | — |
| mikkel | Kahnwald | N | Kept — clear close-up | — |
| hannah | Kahnwald | N | Kept — clear close-up | — |
| jonas | Kahnwald | N | Kept — clear close-up | — |
| **tronte** | Nielsen | **Y — 3-panel age collage** | Replaced | `/Familias/Familia2/tronte-avatar.webp` |
| **jana** | Nielsen | **Y — wrong person (photo of a man)** | Replaced | `/Familias/Familia2/jana-avatar.webp` |
| **ulrich** | Nielsen | **Y — 3-panel age collage** | Replaced | `/Familias/Familia2/ulrich-avatar.webp` |
| **katharina** | Nielsen | **Y — 2-panel age collage** | Replaced | `/Familias/Familia2/katharina-avatar.webp` |
| magnus | Nielsen | N | Kept — clear close-up | — |
| martha | Nielsen | N | Kept — clear close-up (isolated cutout, still recognizable) | — |
| bernd | Doppler | N | Kept — clear close-up (heavier AI-upscale artifacting noted, but recognizable) | — |
| greta | Doppler | N | Kept — clear close-up | — |
| **helge** | Doppler | **Y — 3-panel age collage** | Replaced | `/Familias/Familia3/helge-avatar.webp` |
| peter | Doppler | N | Kept — clear close-up | — |
| charlotte | Doppler | N | Kept — clear close-up | — |
| franziska | Doppler | N | Kept — clear close-up | — |
| elisabeth | Doppler | N | Kept — clear close-up | — |
| egon | Tiedemann | N | Kept — clear close-up (file is AVIF content mislabeled `.jpg`; renders fine in-browser, left as-is — out of this plan's scope) | — |
| doris | Tiedemann | N | Kept — clear close-up | — |
| claudia | Tiedemann | N | Kept — clear close-up (very dark, but that's Spec 2's concern, not genericity) | — |
| **regina** | Tiedemann | **Y — 3-panel age collage** | Replaced | `/Familias/Familia4/regina-avatar.webp` |
| **aleksander** | Tiedemann | **Y — wrong person (photo of a woman)** | Replaced | `/Familias/Familia4/aleksander-avatar.webp` |
| bartosz | Tiedemann | N | Kept — clear close-up | — |
| tannhaus | Adicionales | **Y — 3-panel age collage** | Replaced | `/Familias/Familia5/tannhaus-avatar.webp` |
| desconocido | Adicionales | N | **Kept intentionally** — this character ("El Desconocido") is thematically an ambiguous, ageless figure; its existing 3-panel (young/adult/old) composite fits the character's meaning rather than reading as a generic mistake | — |

**Result**: 8 of 25 avatars replaced. Two of the eight (`jana`, `aleksander`) were not just generic but showed the **wrong person's photo entirely** — a data/content bug beyond the "generic image" complaint, now corrected. All 8 replacements were sourced from the Dark Wiki (Fandom) character infobox portraits, downloaded, and saved locally under `public/Familias/Familia{N}/` with descriptive filenames per the plan's naming decision.

## Spec 2 — Detail background images (dark/blurry)

### Global CSS treatment (applied to every stage, all characters)

| Property | Before | After |
|---|---|---|
| `#cinematic-bg.temporal-bg` filter | `url(#cinematic-ripple) grayscale(0.25) contrast(1.08) brightness(0.92) saturate(1)` | `url(#cinematic-ripple) grayscale(0.25) contrast(1.0) brightness(1.0) saturate(1)` |
| Gradient overlay (mobile) | `from-[#020202]/92 via-[#020202]/45` | `from-[#020202]/70 via-[#020202]/35` |
| Gradient overlay (desktop, `md:`) | `from-[#020202]/88 via-[#020202]/42` | `from-[#020202]/66 via-[#020202]/32` |

### Per-stage image audit

133 stage background images (`img` field per character stage, `Familias/` folders only) were ranked by mean source-image brightness (0–255 luminance) to prioritize review. The 12 darkest were opened and visually judged against the criterion "the scene/character must be distinguishable, even keeping the show's dark aesthetic":

| Image | Mean brightness | Verdict |
|---|---|---|
| `Familia2/martha_mundo_eva.jpg` | 8.3 | **Fails — replaced** (body/clothing near-pure-black, only face barely visible) |
| `Familia1/michael_goodbye.jpg` | 9.9 | Kept — dim embrace shot, intentional emotional low-key lighting, subjects distinguishable |
| `Familia2/martha_muerte_iglesia.jpg` | 14.1 | Kept — night scene, subject clearly readable against dark background |
| `Familia1/jonas_forastero.jpg` | 16.2 | Kept — dramatic low-key scene, face/action clearly readable |
| `Familia1/jonas_adam.jpg` | 17.7 | Kept — face clearly readable |
| `Familia3/greta_noah.jpg` | 17.9 | Kept — well-composed interior scene, both subjects clear |
| `Familia1/hannah_mundo_eva.jpg` | 18.0 | Kept — face clearly readable against dark background |
| `Familia5/desconocido_arquitecto.jpg` | 18.2 | Kept — intentional symbolic detail shot (hands + Sic Mundus book), not a face shot |
| `Familia1/hannah_madre_distante.jpg` | 18.5 | Kept — face clearly readable |
| `Familia3/franziska_1921.jpg` | 18.5 | Kept — face clearly readable |
| `Familia2/magnus_sicmundus.jpg` | 19.4 | Kept — face clearly readable |
| `Familia3/elisabeth_bucle.jpg` | 20.7 | Kept — face clearly readable |

**Result**: 1 of 133 stage images replaced (`Familia2/martha_mundo_eva.jpg` → `Familia2/martha-mundo-eva.webp`, sourced from the Dark Wiki's dedicated "Martha Nielsen (Eva's World)" gallery to match the stage's narrative context). The remaining reviewed images pass the qualitative bar once combined with the softened global treatment above — *Dark* is an intentionally low-key/moody show, and most of its darkest source stills still read clearly once the CSS darkening layered on top is reduced. The full 133-image ranked brightness list is not reproduced here; images below the reviewed threshold (mean brightness ≥ ~21) were not individually opened, on the reasoning that if the 12 darkest all pass, less-dark images pass too — this is a sampling audit, not an exhaustive per-image review.

## Spec 3 — Complete Tree layout

Audited `completeLayout.nodes` (all 5 families) for crowding. Canvas size confirmed at runtime to be **2200×1230px** (the `.complete-tree-grid` CSS rule showing 2600×1500 is a dead fallback, overridden by JS at runtime — see tech-plan.md Codebase Grounding → Corrections).

| Family pair | Crowded? | Action |
|---|---|---|
| **Nielsen ↔ Kahnwald** | **Y** (originally reported) — `ines {680,380}` sat only 150px from `ulrich/katharina {830/1010,380}`; `mikkel/hannah {760/930,610}` sat only 190px from `magnus {1120,610}` | Nielsen block (`tronte`, `jana`, `ulrich`, `katharina`, `magnus`) shifted +120 to +180px right, into existing free space toward Doppler/Tannhaus. New gaps: 270px (ines↔ulrich), 370px (hannah↔magnus). Kahnwald block (`ines`, `mikkel`, `hannah`) left unchanged. |
| Tiedemann ↔ Kahnwald | Reviewed, not crowded | Adjacent columns converge toward the center by design (per existing code comments); gap (~110–140px) is intentional convergence, not overlap. No change. |
| Nielsen (shifted) ↔ Doppler/Tannhaus | Reviewed, not crowded | Gap to `tannhaus {1450,380}` from new `katharina {1190,380}` position is 260px — no new crowding introduced by the shift. No change. |
| Doppler internal spacing | Reviewed, not crowded | No change. |
| Tiedemann internal spacing | Reviewed, not crowded | No change. |

**Canvas size**: left unchanged at 2200×1230px — repositioning within the existing bounding box was sufficient (leftmost/rightmost extents unaffected by the Nielsen shift), so the ~15%-growth allowance from the plan's Design Decisions was not needed.

**Connector lines**: `drawTreeLines`/`nodeCenter()` were not modified — confirmed (tech-plan.md Codebase Grounding) that they compute connector endpoints from live DOM position, not from `completeLayout` coordinates, so repositioning nodes doesn't require any drawing-logic change.
