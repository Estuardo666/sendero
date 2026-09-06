# ContactoSection Specification — /contacto/

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/contacto-f1a77a9c/ContactoSection.tsx`
- **Screenshot:** none (browser pane could not composite)
- **Source id:** `#brxe-movtox`
- **Interaction model:** static two-column layout + entrance reveals + hover-driven interactive dividers

## DOM Structure
```
section#brxe-movtox.brxe-section          (flex row, height 100vh, ::before white gradient)
├── div#brxe-dkmzer.brxe-container        (left, width 100% → flexes to 659px, full height)
│   └── div#brxe-yxukjo.brxe-shortcode    (Elfsight Google Maps widget → keyless iframe in the clone)
└── div#brxe-frnrlj.brxe-container        (right, 766×567, padding 0 150px 0 75px)
    ├── h3#brxe-xchcnw  BlurReveal        "Estamos aquí para ayudarte"
    ├── h1#brxe-gzizku  LetterLauncher    "Hablemos y construyamos juntos el futuro de tus hijos"
    ├── ul#brxe-vipung                    phone + e-mail (icons, no links)
    ├── InteractiveDivider #brxe-igdbhn
    ├── h3#brxe-izzxjz  BlurReveal        "Directorio:"
    ├── div#brxe-mgyfiz                   counter → "Secretaría :" + "0991200556"
    ├── div#brxe-rkigza                   counter → "Inspección:" + "0969225363"
    ├── InteractiveDivider #brxe-mbtgqi
    ├── h3#brxe-jrikfd  BlurReveal        "Síguenos en nuestras redes sociales"
    └── ul#brxe-fmarrc                    TikTok / Facebook / Instagram pills
```

## Computed Styles (exact)

### section `#brxe-movtox`
- display: flex; flex-direction: row; align-items: center; height: 100vh; position: relative; margin-top: 0
- `::before`: `background-image: linear-gradient(rgba(255,255,255,0.56), #ffffff); position: absolute; inset: 0; content: ""; pointer-events: none`
- children `position: relative`
- measured 1425×900
- ≤478px: `margin-block: 2em; height: 100%; padding: 100px 1em 40px`

### map column `#brxe-dkmzer`
- width: 100%; display: flex; flex-direction: column; align-items: flex-start; measured **659×900**
- The map fills the column (source widget height config 700, stretched by the column).
- **Clone deviation:** the source embeds Elfsight with its own Google Maps API key. Do NOT copy that key.
  Render instead a full-size iframe:
  `https://www.google.com/maps?q=-3.9614687544471994,-79.22471118700119&z=18&output=embed`
  with `width/height: 100%`, `border: 0`, `loading="lazy"`,
  `referrerPolicy="no-referrer-when-downgrade"`, `title="Escuela EGB Sendero"`, and
  `style={{ pointerEvents: "auto" }}`. Keep the column at 100% width / 100% height so the ratio matches.

### contact column `#brxe-frnrlj`
- display: flex; flex-direction: column; align-items: flex-start; padding: 0 150px 0 75px; measured 766×567 at x=659
- ≤478px: `width: 1260px; padding-inline: 0; align-self: center; justify-content: center; align-items: center`

### eyebrow `h3#brxe-xchcnw`
- font-size 1.1em → **16.5px**; line-height 23.1px; font-weight 600; color `#0099a5`
- background-color `#ebebeb`; padding 1px 10px 2px; border-radius 1em (16.5px); margin-bottom 0.5em (8.25px)
- measured 193×26

### headline `h1#brxe-gzizku`
- text-align: left (centre ≤478px); line-height 44px; letter-spacing 0; margin-top 20px; padding-bottom 20px; computed font-size **36px**; measured 541×176
- inner span: color `#ffc107`; line-height 50px; font-size 1.4em → **50.4px**; font-family "Google Sans Flex"; letter-spacing −2px !important
- ≤478px: `text-align: center; font-size: 1.9em; width: 100%`

### contact list `ul#brxe-vipung`
- flex-direction: column; gap: 0; measured 271×81
- items (`li.no-link`): display flex; align-items: center; justify-content: flex-start; gap 5px;
  padding 0 15px 15px; font-size 1.3em → **19.5px**; line-height 25.35px; font-weight 500; color `#1c2728`
- icons: color `#0099a5`, font-size 1.4em (≈27px). Source uses Ionicons webfont (`ion-logo-whatsapp`,
  `ion-ios-mail`); the clone must inline equivalent SVG paths sized ~27px.
- items are plain text, not links

### dividers `#brxe-igdbhn`, `#brxe-mbtgqi` (`shared/InteractiveDivider.tsx`)
- `--divider-height: 2px`; width 66% desktop / 50% ≤478px; `#brxe-mbtgqi` also `margin-block: 10px`
- path stroke `rgba(255, 193, 7, 0.63)`; `data-bend-intensity="100"`
- measured `#brxe-igdbhn` 357×2

### directory eyebrows `#brxe-izzxjz` ("Directorio:") and `#brxe-jrikfd` ("Síguenos…")
- font-size 1.1em → 16.5px; font-weight 600 (`#brxe-jrikfd`: 500); color `#0099a5`
- background-color `rgba(255, 193, 7, 0.13)`; padding 1px 10px 2px; border-radius 16.5px
- margin: 1em top (16.5px), 0.5em bottom (8.25px); text-align center; align-self center
- measured 84×26 and 231×26

### counters `#brxe-mgyfiz`, `#brxe-rkigza`
- padding: 0 15px; font-size 1.3em → **19.5px**; line-height 25.35px; font-weight 500; color `#1c2728`; text-align center; measured 251×33
- `.prefix`: font-weight 600; color `#0099a5`; font-size 0.9em
- `.count`: `font-size: 0px` — render nothing visible (do not animate)
- `.suffix`: font-size 1.1em; font-weight 600; color `#1c2728`

### social pills `ul#brxe-fmarrc`
- flex-direction: row; gap: 8px; measured 136×65
- `li`: background `#0099a5`; border-radius 31px; margin-bottom 26px; 40×39
- `a`: display flex; align-items/justify-content center; width 40px; padding-block 6px; color `#ffffff`
- icons: white, 16px (`svg { height: 16px; width: auto }`) — inline SVG for TikTok, Facebook, Instagram
- links open in a new tab (`target="_blank"`, add `rel="noopener noreferrer"`)

## States & Behaviors

### Entrance reveals
- `#brxe-xchcnw`, `#brxe-izzxjz`, `#brxe-jrikfd` → `shared/BlurReveal.tsx` (per-char blur 10px→0, 0.6s, stagger 0.05s, delay 0.2s, ease power1, once)
- `#brxe-gzizku` → `shared/LetterLauncher.tsx` (rotate −30°→0, y 20px→0, 0.3s, stagger 0.05s, delay 0.2s, once)

### Interactive divider hover
- Trigger: pointer inside the divider hit box (`--drag-height: 40px`, expanding to `--drop-height: 500px` on hover)
- The SVG path bends toward the pointer by up to 100px and springs back on leave (spring/lerp)
- Stroke stays `rgba(255,193,7,0.63)`, `stroke-width: var(--divider-height)`

### Counters
- Source counts 0→100 over 1000ms but `.count` is `font-size: 0px`, so nothing visible animates. Render static text.

### Hover states
- No hover styling is declared for the contact list or the social pills in the source — do not invent any.

## Per-State Content
N/A — single state.

## Assets
None. All icons are inline SVG; the map is an iframe.

## Text Content (verbatim)
- Eyebrow: `Estamos aquí para ayudarte`
- Headline: `Hablemos y construyamos juntos el futuro de tus hijos`
- Contact list: `0985970887` (WhatsApp icon), `senderocdi@gmail.com` (mail icon)
- Eyebrow: `Directorio:`
- Counter 1 prefix `Secretaría :`, suffix `0991200556`
- Counter 2 prefix `Inspección:`, suffix `0969225363`
- Eyebrow: `Síguenos en nuestras redes sociales`
- Social links: TikTok `https://www.tiktok.com/@senderoeducacion`, Facebook `https://www.facebook.com/SenderoEducacion/`, Instagram `https://www.instagram.com/senderoeducacion/?hl=es`

## Responsive Behavior
- **Desktop (≥479px):** map left (~46% of the section, full height), contact column right with `padding: 0 150px 0 75px`, everything left-aligned; section `height: 100vh`.
- **Mobile (≤478px):** `.brxe-section` wraps under 767px so the map stacks above the contact column;
  section `height: 100%; margin-block: 2em; padding: 100px 1em 40px`; contact column loses its side
  padding and centres; headline centres at `1.9em`; dividers become `width: 50%`; eyebrows and counters centre.
  Give the map column an explicit mobile height (~400px) so the iframe stays visible when stacked.
- **Breakpoint:** 478px — put overrides in a scoped `<style>` block.
