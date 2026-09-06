# HeroSection Specification — /quienes-somos/

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/HeroSection.tsx`
- **Screenshot:** none (browser pane could not composite; use the computed values below as the reference)
- **Source id:** `#brxe-ezitwk`
- **Interaction model:** static layout + GSAP entrance reveals + hover on the arrow icon

## DOM Structure
```
section#brxe-ezitwk.brxe-section.seccion1.has-bg-video
├── div.bricks-background-video-wrapper        (absolute, inset 0, z-index -1, overflow hidden)
│   └── video[autoplay loop muted playsinline] (object-fit cover, centred by transform)
├── ::before                                    gradient overlay, pointer-events none
└── div#brxe-iyjeor.brxe-container
    ├── h3#brxe-fujqiq.next-blur-reveal        eyebrow pill
    ├── h1#brxe-cypnlb.bc-letter-launcher      headline
    └── div#brxe-mxyqma.next-arrow-icon        round arrow badge (2 stacked svgs)
```
The `bc-cursor` element in the source is the custom mouse-follower; the root clone already ignores
it — do not port it.

## Computed Styles (exact)

### section `#brxe-ezitwk`
- display: flex; flex-direction: column; align-items: center; justify-content: center
- width: 100% (`100vw` ≤478px); height: **666px** desktop, **505px** ≤478px
- position: relative; z-index: 1; margin-inline: auto
- `::before`: `background-image: linear-gradient(rgba(255,255,255,0), #ffffff); position: absolute; inset: 0; content: ""; pointer-events: none`
- children get `position: relative` (`:where(#brxe-ezitwk > *)`)

### background video wrapper
- position: absolute; inset: 0; width/height 100%; overflow: hidden; z-index: -1
- video: position absolute; top 50%; left 50%; transform translate(-50%,-50%); width/height 100%; object-fit: cover
- src: `/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images/bg1c.mp4`
- attributes: autoPlay, loop, muted, playsInline
- Use the existing `shared/LazyVideo.tsx` + `.brx-bg-video` class from globals.css (same as root HeroSection).

### container `#brxe-iyjeor`
- width: 666px; align-self: center; justify-content: center; align-items: center; display: flex; flex-direction: column
- measured box 666×436
- ≤478px: `width: 1260px; padding-inline: 20px` (the shared `.brx-container` rule clamps it to 100%)

### eyebrow `h3#brxe-fujqiq` (BlurReveal)
- font-size: 1.1em → computed **16.5px**; line-height 23.1px; font-weight 600; letter-spacing −2px (from `.bc-letter-launcher__inner` global? no — h3 itself computes −2px)
- color: `var(--sendero-teal)` #0099a5
- background-color: `rgba(255, 193, 7, 0.28)`
- padding: 2px 15px 3px; border-radius: 1em (computed 16.5px)
- margin-bottom: 1em (computed 16.5px)
- `.next-blur-reveal { display: block; width: fit-content }`
- text: `Una educación integral para un futuro pleno`

### headline `h1#brxe-cypnlb` (LetterLauncher)
- h1: text-align: center; line-height: 44px; letter-spacing: 0; margin-top: 15px; color: #ffc107; font-size computed **36px**
- ≤478px: `font-size: 1.9em; line-height: 4px`
- inner span `.bc-letter-launcher__inner`: font-family "Google Sans Flex"; color `#0099a5`; line-height **60px**; font-size 1.75em → computed **63px**; letter-spacing −2px (`!important` global rule)
- text: `Sendero: cultivando el potencial único de cada niño y niña`

### arrow badge `div#brxe-mxyqma`
- 40×40; display flex; align-items/justify-content center; border-radius: 2em (computed 30px)
- background-color: `var(--sendero-offwhite)` #f5f5f5; margin-top: 15px; overflow: hidden; position: relative
- contains two identical 24×24-viewBox arrow SVGs, each absolutely positioned at 40×40 with 10px inset
  (computed 20×20 visual), fill `#0099a5`; the second is offset `translateX(-90px)`
- `--arrow-rotate: 90deg`; on hover the pair slides so the second arrow replaces the first
  (`transform: translateX(0)` for the second, `translateX(90px)` for the first), transition ~0.4s ease
- arrow path: `M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z`

## States & Behaviors

### Eyebrow reveal (BlurReveal)
- Trigger: element enters viewport (`start: top bottom`), plays once
- State A: opacity 0, per-char blur 10px; State B: opacity 1, blur 0
- duration 0.6s, stagger 0.05s, delay 0.2s, ease power1
- Implementation: existing `shared/BlurReveal.tsx`

### Headline reveal (LetterLauncher)
- Trigger: `start: top bottom`, plays once
- Per character: rotate −30° → 0, y +20px → 0, opacity 0 → 1; duration 0.3s, stagger 0.05s, delay 0.2s
- Implementation: existing `shared/LetterLauncher.tsx`

### Arrow badge hover
- Trigger: hover on `#brxe-mxyqma`
- Both arrows translate by +90px; transition on `transform`; no colour change

## Per-State Content
N/A — single state.

## Assets
- Video: `public/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images/bg1c.mp4` (already downloaded)
- No images, no icons beyond the inline arrow path above.

## Text Content (verbatim)
- Eyebrow: `Una educación integral para un futuro pleno`
- Headline: `Sendero: cultivando el potencial único de cada niño y niña`

## Responsive Behavior
- **Desktop (≥479px):** section 666px tall, container 666px wide, headline 63px/60px centred.
- **Mobile (≤478px):** section `height: 505px; width: 100vw`; container `width: 1260px; padding-inline: 20px`
  (clamped to viewport by `.brx-container`); headline `font-size: 1.9em; line-height: 4px`.
- **Breakpoint:** 478px (the site's only breakpoint). Put the mobile overrides in a scoped
  `<style>` block inside the component, exactly like `root-8a5edab2/HeroSection.tsx` does.
