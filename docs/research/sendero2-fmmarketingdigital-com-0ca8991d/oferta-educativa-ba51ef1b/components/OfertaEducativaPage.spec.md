# OfertaEducativaPage Specification

## Overview

- Target file: `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-educativa-ba51ef1b/OfertaEducativaPage.tsx`
- Screenshot: `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/oferta-educativa-ba51ef1b/oferta-educativa-desktop.png`
- Interaction model: time-driven video plus hover-driven accordion/buttons.

## DOM structure

`SiteHeader` → `main` → `.oferta-hero` → absolute background video and overlay → centered eyebrow/title → `.oferta-gallery` → six `.oferta-gallery-item` panels → shared `SiteFooter` → fixed `WhatsAppWidget`.

## Extracted values

- Hero: `display:flex`, column, centered, white base, source section height approximately `1002px`, top padding `52.5px`.
- Background video: absolute full section, `object-fit: contain` in the source; the visual is covered by a white-to-teal translucent overlay.
- Eyebrow: `16.5px`, weight `600`, line-height `23.1px`, color `rgb(0,153,165)`, background `rgb(235,235,235)`, radius `16.5px`, padding `1px 10px 2px`.
- Main title: `75px`, weight `800`, line-height `105px`, color `#0099a5`, letter-spacing `-2px`, padding `10px`; white and `#FDB92E` multi-layer text shadow.
- Gallery: centered, source width `1366px`, rounded `2em`, hidden overflow; six equal flex items with `0.5s ease` transitions and `0.5em` gap.
- Images: full panel size, `object-fit: cover`, default `grayscale(50%)`; hover `scale(1.1)` and grayscale `0%`.
- Hover content: absolute bottom panel, `rgba(0,153,165,.23)`, `backdrop-filter: blur(15px)`, padding `20px 20px 60px`, opacity `0` → `1` over `.3s ease-out`.
- Panel heading: `45px`, weight `800`, line-height `44px`, color `#0099a5`, letter-spacing `-2px`, amber/white outline shadow.
- Buttons: 100px radius, 40px arrow dimension, amber `#ffc107` for level link and teal `#0099a5` for admissions.

## Assets

- `public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-educativa-ba51ef1b/images/604642_80s_90s_1920x1080.mp4`
- `MG_4271-1024x683.jpg`, `Copia-de-_MG_5918-1024x683.jpg`, `Copia-de-IMG_8616-683x1024.jpg`, `MG_4558-1024x683.jpg`, `Copia-de-IMG_9701-1024x683.jpg`, `MG_8269-1-scaled.jpg` in the same directory.

## Verbatim content

`Nuestra Propuesta`, `Oferta educativa`, `Inicial 1`, `Inicial 2`, `Básica Preparatoria`, `Básica Elemental`, `Básica Media`, `Básica Superior`, `Saber más`, `Admisiones`.
