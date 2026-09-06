# BienvenidaSection Specification — /quienes-somos/

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/BienvenidaSection.tsx`
- **Screenshot:** none (browser pane could not composite)
- **Source ids:** `#brxe-brunlt` (row) wrapping `#brxe-tvbtug` (tiles) → `#brxe-rgionp` (columns)
- **Interaction model:** hover-driven tiles background + drag/wheel infinite slider; headings use entrance reveals

## DOM Structure
```
div#brxe-brunlt.brxe-container            (row, 100% wide, 513px tall)
└── NextTiles #brxe-tvbtug                 (hover tile grid, radius 0 0 0 16px)
    └── div#brxe-rgionp.brxe-container     (row, 1260px, column-gap 20px, centred)
        ├── div#brxe-oaskdt                (60% width, radius 2em, overflow hidden)
        │   └── InfiniteSlider #brxe-ohbpyr  (4 images)
        └── div#brxe-learok                (40% width, column)
            ├── h3#brxe-nmvcfh  BlurReveal   "Educación de altura"
            ├── h1#brxe-zjkcgs  LetterLauncher "Bienvenidos a Escuela Sendero"
            └── div#brxe-qmpwxc            two <p> paragraphs
```

## Computed Styles (exact)

### `#brxe-brunlt`
- display: flex; flex-direction: row; align-items: center; justify-content: center; align-self: center
- width: 100%; measured 1425×513
- ≤478px: `height: 100vh; width: 1260px`

### tiles `#brxe-tvbtug` (use `shared/NextTiles.tsx`)
- width: 100%; height: auto; flex-direction: row; display: flex; align-items/justify-content: center
- border: 1px solid #ffffff; border-radius: 0 0 0 16px; overflow: hidden; position: relative
- `--mouseenter-color: rgba(255,193,7,0.55)`; `--mouseleave-color: rgba(86,152,164,0.53)`
- squares: `data-square-dimensions="40"`, border `0.5px solid rgba(255,255,255,0.49)`

### `#brxe-rgionp`
- width: 1260px; flex-direction: row; column-gap: 20px; align-items/justify-content: center; align-self: center
- measured 1260×511, margin-inline 81.5px
- ≤478px: `padding-inline: 1em`

### slider column `#brxe-oaskdt`
- width: 60%; overflow: hidden; border-radius: 2em (computed 30px); display: flex; flex-direction: column; align-items: flex-start
- measured 744×500
- ≤478px: `padding-inline: 33px; width: 1260px`

### slider `#brxe-ohbpyr` (use `shared/InfiniteSlider.tsx`)
- width: 100%; `--items-width: 40vw`; `--items-height: 500px`; `--gap: 5vw`; overflow hidden; cursor grab
- items absolute, `object-fit: cover`, radius 2em, `border: 2px none #f5f5f5` (hover → `#ffc107`, style stays `none`)

### text column `#brxe-learok`
- width: 40%; display flex; flex-direction column; align-items: flex-start; measured 496×511
- ≤478px: `align-self: center; justify-content: center; align-items: center; padding-block: 20px; padding-inline: 0; width: 1260px`

### eyebrow `h3#brxe-nmvcfh`
- font-size 1.1em → **16.5px**; line-height 23.1px; font-weight 600; color `#0099a5`
- background-color `#ebebeb`; padding 1px 10px 2px; border-radius 1em (16.5px); margin-bottom 20px
- measured 86×72 (wraps to 2 lines at this column width)

### headline `h1#brxe-zjkcgs`
- h1: text-align left (desktop) / center ≤478px; line-height 44px; letter-spacing 0; computed font-size **36px**; measured 496×104
- inner span: color `#ffc107`; line-height 50px; font-size 1.4em → computed **50.4px**; font-family "Google Sans Flex"; letter-spacing −2px !important
- ≤478px: `text-align: center; font-size: 1.9em`

### paragraphs `#brxe-qmpwxc`
- color `#1c2728`; text-align: justify; font-weight 500; margin-top 16px; font-size 15px; line-height 25.5px; measured 496×299
- `<strong>Sendero</strong>` inside the first paragraph keeps bold weight.

## States & Behaviors

### Tiles hover (NextTiles)
- Trigger: `mousemove` over the tiles container
- Square under pointer: background → `rgba(255,193,7,0.55)`; the square just left → `rgba(86,152,164,0.53)` for 100ms then clears
- Transition: `background-color 0.2s ease-in-out`

### Slider drag / wheel (InfiniteSlider)
- No autoplay. Wheel: `target -= deltaY * 0.9`. Drag: `target += dx * 2.5`. Smoothing `lerp(y, target, 0.1)` per frame.
- Speed distortion: `skewX(-speed*0.2)`, `rotate(speed*0.01)`, `scale(1 - min(100,|speed|)*0.003)`
- Cursor `grab` → `grabbing` while dragging

### Entrance reveals
- `#brxe-nmvcfh` → `shared/BlurReveal.tsx` (0.6s, stagger 0.05s, delay 0.2s, blur 10px, ease power1)
- `#brxe-zjkcgs` → `shared/LetterLauncher.tsx` (rotate −30°, y 20px, 0.3s, stagger 0.05s, delay 0.2s)

### Image hover
- `border-color` #f5f5f5 → #ffc107 but `border-style: none`, so no visible change. Keep `border-style: none`
  so Tailwind preflight does not paint a border.

## Per-State Content
N/A — single state.

## Assets (already downloaded)
Base path `/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images/`
1. `MG_4379-scaled.jpg` (2560×1707)
2. `DSC_0399-1024x681.jpg` (1024×681)
3. `IMG_0231-1024x683.jpg` (1024×683)
4. `Copia-de-IMG_9538-683x1024.jpg` (683×1024)
All `alt=""` in the source.

## Text Content (verbatim)
- Eyebrow: `Educación de altura`
- Headline: `Bienvenidos a Escuela Sendero`
- Paragraph 1: `En el Centro de Educación **Sendero**, creemos en una educación que trascienda las aulas y fomente el desarrollo integral de cada estudiante. Inspirados en la filosofía Montessori y el enfoque de las inteligencias múltiples, reconocemos que las primeras experiencias son esenciales para formar adultos responsables, plenos y emocionalmente equilibrados.` (only the word `Sendero` is `<strong>`)
- Paragraph 2: `En Sendero, la educación va más allá de los libros. Con actividades integrales como la siembra, la cosecha y la preparación de alimentos, enseñamos a los estudiantes a valorar el trabajo y los recursos que la tierra nos brinda, fortaleciendo su conexión con el mundo que los rodea.`

## Responsive Behavior
- **Desktop (≥479px):** two columns, slider 60% left / text 40% right, 20px column gap, 1260px container.
- **Mobile (≤478px):** `.brxe-container` wraps (`flex-wrap: wrap` under 767px), columns stack;
  row becomes `height: 100vh`; slider column gets `padding-inline: 33px`; text column centres with
  `padding-block: 20px`; headline centres at `1.9em`.
- **Breakpoint:** 478px. Emit mobile overrides in a scoped `<style>` block, not inline styles.
