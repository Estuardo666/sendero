# Clone plan — academic offer completion

## Source inventory

The original homepage links to six academic-level routes:

- `https://sendero2.fmmarketingdigital.com/oferta_academica/inicial-1/` — already implemented locally; preserve it.
- `https://sendero2.fmmarketingdigital.com/oferta_academica/inicial-2/` — missing.
- `https://sendero2.fmmarketingdigital.com/oferta_academica/basica-preparatoria/` — missing.
- `https://sendero2.fmmarketingdigital.com/oferta_academica/basica-elemental/` — missing.
- `https://sendero2.fmmarketingdigital.com/oferta_academica/basica-media/` — missing.
- `https://sendero2.fmmarketingdigital.com/oferta_academica/basica-superior/` — missing.

## Reuse strategy

- Keep the existing Sendero `SiteHeader`, `SiteFooter`, `WhatsAppWidget`, `ArrowButton`, `BlurReveal`, `LetterLauncher`, and `MotionAccordion`.
- Add one shared academic-level renderer for the identical three-section topology, with page-specific data and isolated image roots.
- Keep each route and page wrapper isolated under its pathname/page key.
- Implement the source's central image rail as an automatic, keyboard-accessible motion slider. The requirements expander remains mounted during its open/close transition.

## Page keys and references

| Route | Page key | Component |
|---|---|---|
| `/oferta_academica/inicial-2/` | `oferta-academica-inicial-2-e7ff05cb` | `InicialDosPage` |
| `/oferta_academica/basica-preparatoria/` | `oferta-academica-basica-preparatoria-2162143c` | `BasicaPreparatoriaPage` |
| `/oferta_academica/basica-elemental/` | `oferta-academica-basica-elemental-c406a2cf` | `BasicaElementalPage` |
| `/oferta_academica/basica-media/` | `oferta-academica-basica-media-875e6cdf` | `BasicaMediaPage` |
| `/oferta_academica/basica-superior/` | `oferta-academica-basica-superior-c6828e93` | `BasicaSuperiorPage` |

## Shared source topology

1. Tall white hero (`606px` desktop, `600px` mobile), centered kicker, outlined teal title, and down-arrow marker.
2. Central story section with a `45%` copy column and a sticky `55%` image rail. The original rail uses 40vw image items, 5vw gap, 666px desktop height, and 300px mobile height.
3. Requirements expander, admissions arrow button, and the original four/five paragraphs.
4. Teal-over-photo CTA (`444px` desktop; `600px` mobile) with the shared admissions CTA.
5. Existing site footer and WhatsApp widget.

## Validation gates

- Confirm every original image URL is downloaded into the page-specific `public/sites/.../<page-key>/images/` directory.
- `npm run check` must pass.
- Verify every new route at desktop and mobile widths, including slider motion and requirements accordion state.
