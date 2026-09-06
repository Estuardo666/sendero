# Oferta educativa — behavior bible

## Interaction model

- Hero background video is time-driven: autoplay, loop, muted, plays inline.
- The six-image accordion is hover-driven. Default panels are equal width and 50% grayscale; hovered panel expands to `flex: 2.2`, image scales to `1.1`, grayscale becomes 0%, and the translucent content panel fades in over `.3s`.
- Each panel exposes two links: `Saber más` to its academic slug and `Admisiones` to `/admisiones/`.
- Arrow buttons expand their white arrow wrapper and rotate the arrow on hover over `.6s` with `cubic-bezier(.22,1,.36,1)`.
- Header uses the existing shared behavior: desktop pill nav; mobile off-canvas burger at the source breakpoint (`478px`).
- Footer links and social icons are ordinary anchors with shared hover behavior.

## Responsive sweep

- Desktop (`1440px`): centered title over a six-column, 1366px gallery; gallery images are approximately 999px tall in the source layout and fill the main viewport section.
- Tablet (`768px`): the same horizontal gallery remains the primary composition, with reduced available width.
- Mobile (`390px`): the source preserves a fixed-width horizontal gallery that overflows to the right while the title and footer remain in the narrow content column. The clone preserves this visible overflow behavior rather than inventing a stacked alternate layout.

## Untrusted source artifacts excluded

- WordPress admin bar nodes were present in the connected browser session and were excluded from the public clone.
