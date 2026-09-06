# BEHAVIORS — /contacto/

Source: https://sendero2.fmmarketingdigital.com/contacto/. Same Bricks/NextBricks stack, same
global font/tokens/breakpoint as /quienes-somos/ (see that page's BEHAVIORS.md for the shared
global section). Screenshots were not captured (browser pane does not composite in this session);
every value below is from `getComputedStyle()` or the source CSS.

## Page shape

- One section `#brxe-movtox`: `display: flex; flex-direction: row; height: 100vh; position: relative`,
  `::before` overlay `linear-gradient(rgba(255,255,255,0.56), #ffffff)`, `pointer-events: none`.
- Left column `#brxe-dkmzer` (measured 659×900, i.e. it flexes to ~46%) holds the map widget.
- Right column `#brxe-frnrlj` (766×567 at 1425px, `padding: 0 150px 0 75px`, `align-items: flex-start`)
  holds the copy, phone/e-mail list, dividers, directory counters and social pills.
- Document height 1413px.

## Entrance animations

Identical mechanics to /quienes-somos/: `.next-blur-reveal` eyebrows (per-char blur 10px→0, 0.6s,
stagger 0.05s, delay 0.2s, ease power1) and `.bc-letter-launcher` headline (per-char rotate −30°→0,
y 20px→0, 0.3s, stagger 0.05s). Both fire once when the element enters the viewport.

## Interactive divider (`.next-interactive-divider`) — hover/pointer driven

`next_interactive_divider.css` + the NextBricks JS:

- Structure: `.next-interactive-divider__line` (height `--divider-height: 2px`) containing an
  invisible hit `__box` (`--drag-height: 40px`, centred on the line) and an SVG whose `<path>`
  (`--drop-height: 500px` tall, `top: calc(-1 * 500px / 2)`, `overflow: visible`) draws the line.
- `data-bend-intensity="100"`: as the pointer moves inside the hit box the path bends toward the
  cursor by up to 100px and springs back on leave.
- On `:hover` the hit box grows from 40px to 500px tall so the bend stays grabbable.
- `stroke: rgba(255,193,7,0.63)`, `stroke-width: var(--divider-height)`, `fill: none`.
- Widths: `#brxe-igdbhn` and `#brxe-mbtgqi` are `width: 66%` at desktop, `50%` ≤478px
  (`#brxe-mbtgqi` also `margin: 10px 0`).

## Counters (`.brxe-counter`) — no visible animation

`#brxe-mgyfiz` / `#brxe-rkigza` are Bricks counters set to count 0→100 over 1000ms, but the count
span is `font-size: 0px`, so only `prefix` ("Secretaría :", "Inspección:") and `suffix`
(the phone numbers) are visible. Render them as static text; no counting animation is perceivable.

## Map widget

Third-party Elfsight Google Maps embed (`elfsight-google-maps-1`, version 2.4.2), configured with a
single marker at `-3.9614687544471994, -79.22471118700119` ("Escuela EGB Sendero"), zoom 18,
`scrollwheel: false`, custom greyscale-ish map style, main colour `rgb(0,153,165)`, height 700
(it stretches to the 900px column at desktop), marker click → `https://g.co/kgs/o5iKHcD`.
The page markup embeds Elfsight's own Google Maps API key. **The clone must not reuse that key** —
render a keyless `https://www.google.com/maps?q=<lat>,<lng>&z=18&output=embed` iframe filling the
column instead. This is the one intentional deviation from the source.

## Hover states

- Social pills `#brxe-fmarrc li`: teal `#0099a5` circles, 40px wide, radius 31px, white 16px icons,
  gap 8px, `margin-bottom: 26px`; links open in a new tab. No hover styling is declared in the source.
- Phone/e-mail list `#brxe-vipung`: `flex-direction: column; gap: 0`, items `padding: 0 15px 15px`,
  19.5px/25.35px text `#1c2728`, icons `#0099a5` at 1.4em. Items are `no-link` — not clickable.

## Responsive

- Single breakpoint `@media (max-width: 478px)`: section becomes `height: 100%`,
  `margin: 2em 0`, `padding: 100px 1em 40px`; the right column loses its 150px/75px padding and
  centres (`justify-content/align-items: center`); the headline centres (`text-align: center; font-size: 1.9em`);
  dividers drop to `width: 50%`; eyebrows and counters centre.
- `.brxe-section` wraps under 767px, so the map column and the text column stack.
