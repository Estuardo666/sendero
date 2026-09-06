# MisionVisionSection Specification — /quienes-somos/

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/MisionVisionSection.tsx`
- **Screenshot:** none (browser pane could not composite)
- **Source ids:** `#brxe-elynap` (row) → `#brxe-zwomdi` (tiles) → `#brxe-nzbebo` (columns)
- **Interaction model:** identical to BienvenidaSection (hover tiles + drag/wheel slider), columns mirrored (text left, slider right)

## DOM Structure
```
div#brxe-elynap.brxe-container              (row, 100% wide, padding-block 99px, 700px tall)
└── NextTiles #brxe-zwomdi
    └── div#brxe-nzbebo.brxe-container       (row, 1260px, column-gap 20px, centred)
        ├── div#brxe-aomfsb                  (40% width, column, text)
        │   ├── h3#brxe-lmnrex BlurReveal      "Misión"
        │   ├── div#brxe-pgfjas               paragraph (centred text)
        │   ├── h3#brxe-jthdpg BlurReveal      "Visión"
        │   └── div#brxe-oewlls               paragraph (centred text)
        └── div#brxe-rwqtnf                  (60% width, radius 2em, overflow hidden)
            └── InfiniteSlider #brxe-bqymud    (4 images)
```

## Computed Styles (exact)

### `#brxe-elynap`
- display: flex; flex-direction: row; align-items/justify-content: center; align-self: center
- width: 100%; padding: 99px 0; measured 1425×700
- ≤478px: `height: auto; padding-top: 370px; padding-inline: 1em; margin-top: 0`

### tiles `#brxe-zwomdi` (`shared/NextTiles.tsx`)
- width: 100%; height: auto; flex-direction: row; border: 1px solid #ffffff; border-radius: 0 0 0 16px
- overflow: hidden; position: relative; measured 1425×502
- `--mouseenter-color: rgba(255,193,7,0.55)`; `--mouseleave-color: rgba(86,152,164,0.53)`; squares 40px, border `0.5px solid rgba(255,255,255,0.49)`

### `#brxe-nzbebo`
- width: 1260px; flex-direction: row; column-gap: 20px; align-items/justify-content: center; align-self: center
- measured 1260×500, margin-inline 81.5px
- ≤478px: `padding-inline: 0`

### text column `#brxe-aomfsb`
- width: 40%; display flex; flex-direction column; align-items: flex-start; measured 496×339
- ≤478px: `align-self: center; justify-content: center; align-items: center; padding-block: 20px; padding-inline: 0; width: 100%`

### eyebrows `h3#brxe-lmnrex` ("Misión") and `h3#brxe-jthdpg` ("Visión")
- font-size 1.1em → **16.5px**; line-height 23.1px; font-weight 600; color `#0099a5`
- background-color `#ebebeb`; padding 1px 10px 2px; border-radius 1em (16.5px); margin-bottom 0
- `#brxe-jthdpg` additionally `margin-top: 25px`
- measured: Misión 61×26, Visión 57×26

### paragraphs `#brxe-pgfjas` (Misión) and `#brxe-oewlls` (Visión)
- color `#1c2728`; font-weight 500; margin-top 16px; font-size 15px; line-height 25.5px
- element rule is `text-align: justify`, but each inner `<p>` carries `style="text-align: center;"` — the paragraphs render **centred**
- `#brxe-pgfjas` also `width: 100%`; measured 496×102 and 496×153

### slider column `#brxe-rwqtnf`
- width: 60%; overflow: hidden; border-radius: 2em (30px); measured 744×500
- ≤478px: `padding-inline: 33px; width: 100%`

### slider `#brxe-bqymud` (`shared/InfiniteSlider.tsx`)
- width: 100%; `--items-width: 40vw`; `--items-height: 500px`; `--gap: 5vw`
- images radius 2em, `border: 2px none #f5f5f5` (hover `#ffc107`, style stays `none`), `object-fit: cover`

## States & Behaviors
Same three behaviours as BienvenidaSection:
1. **Tiles hover** — square under pointer `rgba(255,193,7,0.55)`; previous square `rgba(86,152,164,0.53)` for 100ms; transition `background-color 0.2s ease-in-out`.
2. **Slider** — wheel `target -= deltaY*0.9`, drag `target += dx*2.5`, `lerp(...,0.1)`, `skewX(-speed*0.2)`, `rotate(speed*0.01)`, `scale(1 - min(100,|speed|)*0.003)`; no autoplay; cursor grab/grabbing.
3. **Entrance reveals** — both eyebrows via `shared/BlurReveal.tsx` (0.6s, stagger 0.05s, delay 0.2s, blur 10px). This section has **no** letter-launcher headline.

## Per-State Content
N/A — single state.

## Assets (already downloaded)
Base path `/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images/`
1. `MG_4254-scaled.jpg` (2560×1707)
2. `MG_3848-1024x683.jpg` (1024×683)
3. `MG_1612-1024x683.jpg` (1024×683)
4. `Copia-de-IMG_2714-1024x683.jpg` (1024×683)
All `alt=""`.

## Text Content (verbatim)
- Eyebrow 1: `Misión`
- Paragraph 1: `Nuestra misión es preparar a cada niño y niña para enfrentar los desafíos del futuro con confianza, empatía y un profundo sentido de comunidad. En Sendero, el aprendizaje es una experiencia enriquecedora que deja huellas para toda la vida.`
- Eyebrow 2: `Visión`
- Paragraph 2: `Nuestra institución nació de una visión clara: crear un espacio donde los niños y niñas puedan aprender, explorar y crecer en un entorno diseñado específicamente para sus necesidades. Desde el año 2015, hemos trabajado constantemente para ofrecer una educación que combina lo académico, lo emocional y lo práctico, promoviendo el respeto por uno mismo, por los demás y por el entorno natural.`

## Responsive Behavior
- **Desktop (≥479px):** text 40% left, slider 60% right, 20px gap, section padding-block 99px.
- **Mobile (≤478px):** columns stack (container `flex-wrap: wrap` under 767px); section
  `padding-top: 370px; padding-inline: 1em; height: auto`; text column centres; slider column
  `padding-inline: 33px; width: 100%`.
- **Breakpoint:** 478px — scoped `<style>` block for the overrides.
