# BEHAVIORS — /quienes-somos/

Source: https://sendero2.fmmarketingdigital.com/quienes-somos/ (WordPress + Bricks + NextBricks).
Extraction method: live DOM/computed styles via browser MCP + raw `source.html` / inline CSS / plugin CSS+JS.
Screenshots were NOT captured — the browser pane in this session does not composite frames, so no
image reference exists. All values below come from `getComputedStyle()` and the source stylesheets.

## Global

- Font: `"Google Sans Flex"` (Google Fonts, already linked in `src/app/layout.tsx`), body 15px/25.5px, colour `#363636`.
- Body background `#ffffff`. Document height 2476px at 1425×900 viewport.
- Site breakpoint: **one** media query, `@media (max-width: 478px)`. Bricks also emits `max-width: 767px` for flex-wrap only.
- No smooth-scroll library (no Lenis / Locomotive). GSAP + ScrollTrigger + SplitText are loaded for the reveal elements.
- Custom cursor element (`bc-cursor`, mouse-follower) is present in the hero; the root clone already ignores it.
- Header (`#brx-header.sticky`) and footer are the site-wide ones already ported in `root-8a5edab2/SiteHeader.tsx` / `SiteFooter.tsx`.

## Entrance animations (GSAP, play once on enter)

| Element type | Class | Trigger | Motion |
|---|---|---|---|
| Eyebrow pill | `.next-blur-reveal` | `start: top bottom` (element enters viewport) | per-character blur 10px → 0, opacity 0 → 1, duration 0.6s, stagger 0.05s, delay 0.2s, ease `power1`, `toggleActions: play none none none` |
| Headline | `.bc-letter-launcher` | `start: top bottom` | per-character launch: rotate −30° → 0, y +20px → 0, opacity 0 → 1, duration 0.3s, stagger 0.05s, delay 0.2s |

Both inner spans ship with `opacity: 0` (`--to-hide`) until GSAP runs. The root clone already
implements these as `shared/BlurReveal.tsx` and `shared/LetterLauncher.tsx` — reuse them.

## Infinite slider (`.nb-infinite-slider`) — drag / wheel driven, NOT autoplay

From `next_infinite_slider.min.js`:

- Items are absolutely positioned, laid out by GSAP at `x = i * (itemWidth + gap) + scroll`,
  wrapped with `gsap.utils.wrap(-(itemWidth+gap), wrapWidth + gap*n - (itemWidth+gap), x)`.
- `--items-width: 40vw`, `--items-height: 500px`, `--gap: 5vw` (gap resolved as `parseFloat(--gap) * innerWidth / 100`).
- Input: `mousewheel` → `scrollY -= deltaY * 0.9`; pointer/touch drag → `scrollY += (dx) * 2.5`.
- Every frame: `y = lerp(y, scrollY, 0.1)`, then re-layout; speed = `y - oldY`.
- Speed-reactive distortion: `skewX: -speed * 0.2`, `rotate: speed * 0.01`, `scale: 1 - min(100, |speed|) * 0.003`.
- Cursor `grab` / `grabbing` (`--is-dragging` class). Images `object-fit: cover`, `user-select/pointer-events: none`.
- There is **no** automatic movement; at rest the strip is static.

## Tiles background (`.next-tiles`) — hover driven

From `next_tiles.min.js` + `next_tiles.css`:

- On load, builds a grid of `40px` squares (`data-square-dimensions="40"`) covering 2× the element
  size (`numCols = ceil(w*2/40)`, `numRows = ceil(h*2/40)`), inside `.next-tiles__squares-layout`
  which is offset `top/left: calc(-50% - 20px)`.
- `mousemove` on the tiles container: the square under the pointer gets
  `--mouseenter-color`; the previous one gets `--mouseleave-color` for 100ms, then clears.
- Transition: `background-color 0.2s ease-in-out`.
- Page values: `--mouseenter-color: rgba(255,193,7,0.55)` (amber), `--mouseleave-color: rgba(86,152,164,0.53)` (teal),
  square border `0.5px solid rgba(255,255,255,0.49)`, container border `1px solid #fff`, radius `0 0 0 16px`.
- Content sits above at `z-index: 1`.

## Hover states

- Slider images: `border: 2px none var(--bricks-color-feb49f)` → `2px none var(--bricks-color-93a8da)` on hover.
  `border-style: none` in both states, so **nothing visibly changes** (Bricks emits width/colour without a style).
  Tailwind preflight forces `border-style: solid`, so the clone must set `border-style: none` explicitly.
- Arrow icon (hero): `data-trigger="hover"` — the two stacked arrows slide (the second is offset
  `translateX(-90px)`), producing a marquee-style swap on hover. Rotation `--arrow-rotate: 90deg`.

## Scroll behaviour

- No sticky/scroll-driven layout inside the page content; the only scroll reaction is the sticky
  site header (already implemented in `SiteHeader.tsx`) and the entrance reveals above.
- No scroll-snap, no parallax, no `animation-timeline`.

## Hidden content (important)

`#brxe-awdabo` — the "Fruto de nuestro compromiso / Premios y reconocimiento" tiles block after the
second section — is `display: none` in the page's own inline CSS, at every breakpoint. It never
renders on the live site. Markup and CSS are preserved in `extract/PremiosSection.md`; the clone
deliberately does not mount it.

## Responsive

- Desktop (≥479px): section 1 hero 666px tall; section 2 = two 100%-wide tile rows, each an
  image slider + text column laid out `flex-direction: row` inside a 1260px container (`column-gap: 20px`).
- ≤478px: `#brxe-brunlt { height: 100vh; width: 1260px }`, `#brxe-elynap { padding-top: 370px }`,
  `#brxe-oaskdt / #brxe-rwqtnf { padding-inline: 33px }`, `#brxe-learok / #brxe-aomfsb { width: 1260px|100% }`,
  headings centre (`#brxe-zjkcgs { text-align: center; font-size: 1.9em }`), hero `height: 505px; width: 100vw`.
  Because `.brxe-container` has `flex-wrap: wrap` under 767px and the children keep percentage widths,
  the two columns stack at mobile.
