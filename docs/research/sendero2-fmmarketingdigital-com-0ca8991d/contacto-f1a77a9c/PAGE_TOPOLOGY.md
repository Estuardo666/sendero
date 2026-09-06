# PAGE TOPOLOGY — /contacto/ → route `/contacto`

Body: `<header#brx-header.sticky>` → `<main#brx-content>` (one section) → `<footer#brx-footer>` →
WhatsApp widget. Chrome reused from `root-8a5edab2`.

| # | Source id | Working name | Size @1425 | Flow | Interaction model |
|---|---|---|---|---|---|
| 1 | `#brxe-movtox` | ContactoSection | 1425×900 (`height: 100vh`) | flex row, `::before` white gradient overlay | static + entrance reveals; hover-driven interactive dividers |
| 1a | `#brxe-dkmzer` → `#brxe-yxukjo` | MapPanel | 659×900 | flex child | third-party map embed (replaced by keyless Google Maps iframe) |
| 1b | `#brxe-frnrlj` | ContactInfo | 766×567 | flex child, `padding: 0 150px 0 75px` | reveals + dividers + static contact data |

Component plan (`src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/contacto-f1a77a9c/`):

- `ContactoSection.tsx` — section wrapper, map panel, contact column

Shared primitives used: `BlurReveal.tsx`, `LetterLauncher.tsx`, new `InteractiveDivider.tsx`.
Icons: WhatsApp / mail / TikTok / Facebook / Instagram inline SVGs (source uses Ionicons +
Font Awesome webfonts, which the clone replaces with inline paths).

Assets: none downloaded — the page has no images or video of its own.
