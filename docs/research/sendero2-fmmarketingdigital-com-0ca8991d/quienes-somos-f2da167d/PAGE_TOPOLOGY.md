# PAGE TOPOLOGY — /quienes-somos/ → route `/quienes-somos`

Body layout: `<header#brx-header.sticky>` (85px) → `<main#brx-content>` (1879px) → `<footer#brx-footer>` (597px)
→ WhatsApp widget. Header/footer/widget are the shared site chrome already built in
`root-8a5edab2/SiteHeader.tsx`, `root-8a5edab2/SiteFooter.tsx`, `shared/WhatsAppWidget.tsx`.

| # | Source id | Working name | Height @1425 | Flow | Interaction model |
|---|---|---|---|---|---|
| 1 | `#brxe-ezitwk` | HeroSection | 666px | flow, `position: relative`, `::before` white gradient overlay | static + entrance reveals + hover on arrow icon |
| 2a | `#brxe-brunlt` (in `#brxe-sgnwvn`) | BienvenidaSection | 513px | flow row inside tiles wrapper `#brxe-tvbtug` | hover-driven tiles background, drag/wheel slider |
| 2b | `#brxe-elynap` (in `#brxe-sgnwvn`) | MisionVisionSection | 700px (99px vertical padding) | flow row inside tiles wrapper `#brxe-zwomdi` | same as 2a, columns swapped (text left, slider right) |
| — | `#brxe-awdabo` | PremiosSection | 0 | **`display: none` on the live site** | not mounted (see BEHAVIORS.md) |

Z-index layers: hero background video wrapper `z-index: -1` behind the section; hero `::before`
gradient overlay `rgba(255,255,255,0) → #ffffff` covers the video, `pointer-events: none`;
tiles squares layer sits behind `.next-tiles__content` (`z-index: 1`).

Component plan (`src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/`):

- `HeroSection.tsx`
- `BienvenidaSection.tsx`
- `MisionVisionSection.tsx`

Shared primitives (`.../shared/`), built once for both new pages:

- `NextTiles.tsx` — hover tile grid wrapper
- `InfiniteSlider.tsx` — drag/wheel infinite image strip
- `InteractiveDivider.tsx` — used by /contacto only
- existing: `BlurReveal.tsx`, `LetterLauncher.tsx`, `LazyVideo.tsx`

Assets: `public/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images/`
(`bg1c.mp4` + 8 photos).
