# OfertaSection Specification

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/OfertaSection.tsx`
- **Source section:** `03-oferta` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** HOVER-driven image accordion (6 items, flex-grow on hover) + background video
- **Screenshots:** `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/`

## Assets (use these local paths; originals already downloaded)
- `604642_80s_90s_1920x1080.mp4` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/604642_80s_90s_1920x1080.mp4`
- `Copia-de-IMG_4456-683x1024.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Copia-de-IMG_4456.jpg`
- `Copia-de-IMG_9746-scaled-e1757601651844-683x1024.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Copia-de-IMG_9746-scaled-e1757601651844.jpg`
- `Copia-de-_DSC3240-683x1024.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Copia-de-_DSC3240.jpg`
- `IMG_1228-1024x683.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/IMG_1228.jpg`
- `MG_4214-1024x683.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/MG_4214.jpg`
- `MG_8269-1-scaled.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/MG_8269-1-scaled.jpg`

## Shared components to import
- `ArrowButton` from `@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton` — the `nb-arrow-button-v2` pill (hover expands the arrow circle, arrow rotates -45deg).
- `LetterLauncher` from `.../shared/LetterLauncher` — for every `bc-letter-launcher` element. Pass the element's `data-*` values as props (duration, delay, stagger, letterRotation, letterAltitude, start).
- `BlurReveal` from `.../shared/BlurReveal` — for every `next-blur-reveal` element. Pass its `data-type` as `type`, plus blurFrom/translateFrom/skewFrom/duration/stagger/ease from the `data-*` attributes.
- `cn` from `@/lib/utils`.

## Design tokens (CSS vars already in globals.css)
`--sendero-teal #0099a5` · `--sendero-teal-deep #366068` · `--sendero-dark #1c2728` · `--sendero-amber #ffc107` · `--sendero-offwhite #f5f5f5` · `--sendero-gray #808080` · body text `#363636`.
Bricks var aliases seen in the CSS below: `--bricks-color-vvsbjv`/`--bricks-color-tmzgyd` = `#0099a5`, `--bricks-color-otnukj` = `#1c2728`, `--bricks-color-93a8da` = `#ffc107`, `--bricks-color-qwcrwu` = `#ffffff`, `--bricks-color-feb49f` = `#f5f5f5`, `--bricks-color-rbqqqv` = `#808080`.

## Layout primitives (already in globals.css)
- `.brx-section` — flex column, centered, full width.
- `.brx-container` — flex column, `width: var(--sendero-container)` (1260px), centered, `max-width:100%`.
- `.brx-bg-video` — absolutely positioned, `inset:0`, `z-index:-1`, inner `<video>` object-fit cover, autoPlay loop muted playsInline.

## Responsive
- Desktop 1440px: as specified by the base CSS rules below.
- The ONLY breakpoint the source declares for this section is `max-width: 478px` (see MEDIA QUERIES). Between 479px and 1300px the container simply fluid-fills (`.brx-container` drops to 100% width with 20px inline padding below 1300px).
- Below 478px apply the media-query overrides verbatim.

## IMPORTANT — how to read the CSS below
Bricks emits rules in cascade order and the SAME selector can appear more than once. **Later rules win.** Merge duplicates in source order before converting to inline styles / Tailwind.
Convert to inline `style` objects or Tailwind arbitrary values — exact px/em values, do not round or approximate.

---

# 03-oferta

## MARKUP
```html
<section id="brxe-cghplz" class="brxe-section bricks-lazy-hidden has-bg-video"><div class="bricks-background-video-wrapper bricks-lazy-video" data-background-video-url="/wp-content/uploads/2025/01/604642_80s_90s_1920x1080.mp4" data-background-video-loop="1"><video autoplay loop playsinline muted ></video></div><div id="brxe-lmorob" class="brxe-container bricks-lazy-hidden"><div id="brxe-cvxnxj" class="brxe-container bricks-lazy-hidden"><h3 id="brxe-lrappr" data-script-id="lrappr" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Nuestra Propuesta

</span></h3><h1 id="brxe-auibpk" data-script-id="auibpk" class="brxe-letter-launcher bc-letter-launcher"><span class="bc-letter-launcher__inner bc-letter-launcher__inner--to-hide" data-start="top bottom" data-end="unset" data-duration="0.3" data-delayvar="0.2" data-staggervar="0.05" data-letterrotation="-30" data-letteraltitude="20" data-trigger="this" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">🏫 Oferta educativa</span></h1></div></div><div id="brxe-ubgffq" class="brxe-container bricks-lazy-hidden"><div id="brxe-lmvaxg" class="brxe-container bricks-lazy-hidden"><div id="brxe-axagmd" class="brxe-next_image_accordion bricks-lazy-hidden next-image-accordion"><div id="brxe-lwfvvc" class="brxe-block next-image-accordion__item bricks-lazy-hidden"><img width="1024" height="683" class="brxe-image css-filter size-large bricks-lazy-hidden" alt="" id="brxe-fvnxgo" decoding="async" data-src="/wp-content/uploads/2025/09/IMG_1228-1024x683.jpg" data-type="string" /><div id="brxe-eyhsuq" class="brxe-block next-image-accordion__content bricks-lazy-hidden"><h3 id="brxe-iipjuc" class="brxe-heading titulooferta"><a href="/oferta_academica/inicial-1/">Inicial 1</a></h3><div id="brxe-mfasco" class="brxe-block bricks-lazy-hidden"><a  id="brxe-vyqinx" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/oferta_academica/inicial-1/" data-direction="right"><span class='nb-arrow-button-v2__text'>Saber más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a><a  id="brxe-fehoaj" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a></div></div></div><div id="brxe-ffeadr" class="brxe-block next-image-accordion__item bricks-lazy-hidden"><img width="683" height="1024" class="brxe-image css-filter size-large bricks-lazy-hidden" alt="" id="brxe-ujzruk" decoding="async" data-src="/wp-content/uploads/2025/09/Copia-de-IMG_4456-683x1024.jpg" data-type="string" /><div id="brxe-juglpu" class="brxe-block next-image-accordion__content bricks-lazy-hidden"><h3 id="brxe-mqpyqy" class="brxe-heading titulooferta"><a href="/oferta_academica/inicial-2/">Inicial 2</a></h3><div id="brxe-padvyl" class="brxe-block bricks-lazy-hidden"><a  id="brxe-zzjyck" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/oferta_academica/inicial-2/" data-direction="right"><span class='nb-arrow-button-v2__text'>Saber más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a><a  id="brxe-tnyarp" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a></div></div></div><div id="brxe-jymgcu" class="brxe-block next-image-accordion__item bricks-lazy-hidden"><img width="1024" height="683" class="brxe-image css-filter size-large bricks-lazy-hidden" alt="" id="brxe-rcaetk" decoding="async" data-src="/wp-content/uploads/2025/09/MG_4214-1024x683.jpg" data-type="string" /><div id="brxe-rwtyiy" class="brxe-block next-image-accordion__content bricks-lazy-hidden"><h3 id="brxe-elolyz" class="brxe-heading titulooferta"><a href="/oferta_academica/basica-preparatoria/">Básica<br>&nbsp;Preparatoria</a></h3><div id="brxe-xbltag" class="brxe-block bricks-lazy-hidden"><a  id="brxe-zkgotu" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/oferta_academica/basica-preparatoria/" data-direction="right"><span class='nb-arrow-button-v2__text'>Saber más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a><a  id="brxe-dxkryv" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a></div></div></div><div id="brxe-diyyhz" class="brxe-block next-image-accordion__item bricks-lazy-hidden"><img width="683" height="1024" class="brxe-image css-filter size-large bricks-lazy-hidden" alt="" id="brxe-vbctft" decoding="async" data-src="/wp-content/uploads/2025/09/Copia-de-_DSC3240-683x1024.jpg" data-type="string" /><div id="brxe-vnylcu" class="brxe-block next-image-accordion__content bricks-lazy-hidden"><h3 id="brxe-ygniry" class="brxe-heading titulooferta"><a href="/oferta_academica/basica-elemental/">Básica<br>Elemental</a></h3><div id="brxe-iygoam" class="brxe-block bricks-lazy-hidden"><a  id="brxe-znqnli" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/oferta_academica/basica-elemental/" data-direction="right"><span class='nb-arrow-button-v2__text'>Saber más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a><a  id="brxe-ksqavu" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a></div></div></div><div id="brxe-ajxwjh" class="brxe-block next-image-accordion__item bricks-lazy-hidden"><img width="683" height="1024" class="brxe-image css-filter size-large bricks-lazy-hidden" alt="" id="brxe-yuqxks" decoding="async" data-src="/wp-content/uploads/2025/09/Copia-de-IMG_9746-scaled-e1757601651844-683x1024.jpg" data-type="string" /><div id="brxe-cdgzbi" class="brxe-block next-image-accordion__content bricks-lazy-hidden"><h3 id="brxe-yadxiq" class="brxe-heading titulooferta"><a href="/oferta_academica/basica-media/">Básica<br>Media</a></h3><div id="brxe-danquv" class="brxe-block bricks-lazy-hidden"><a  id="brxe-nnmmjd" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/oferta_academica/basica-media/" data-direction="right"><span class='nb-arrow-button-v2__text'>Saber más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a><a  id="brxe-jdhxov" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a></div></div></div><div id="brxe-cackwy" class="brxe-block next-image-accordion__item bricks-lazy-hidden"><img width="2560" height="1707" class="brxe-image css-filter size-full bricks-lazy-hidden" alt="" id="brxe-wsflqg" decoding="async" data-src="/wp-content/uploads/2025/09/MG_8269-1-scaled.jpg" data-type="string" /><div id="brxe-zlsvss" class="brxe-block next-image-accordion__content bricks-lazy-hidden"><h3 id="brxe-rnkral" class="brxe-heading titulooferta"><a href="/oferta_academica/basica-superior/">Básica<br>Superior</a></h3><div id="brxe-ugmthr" class="brxe-block bricks-lazy-hidden"><a  id="brxe-tvrity" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/oferta_academica/basica-superior/" data-direction="right"><span class='nb-arrow-button-v2__text'>Saber más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a><a  id="brxe-fvmwxg" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg></div></div></a></div></div></div></div></div></div></section>
```

## CSS RULES
```css
.brxe-container {
  width: 1260px
}
#brxe-axagmd .next-image-accordion__content {
  backdrop-filter: blur(15px);
}
#brxe-wajdtr .bc-letter-launcher__inner {
  font-family: "Google Sans Flex";  color: #f5f5f5;  line-height: 60px;  font-size: 1.95em
}
#brxe-rxkiae .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-rxkiae .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-rxkiae .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-rxkiae:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-rxkiae:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-yyoygv .bc-letter-launcher__inner {
  color: var(--bricks-color-vvsbjv);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-iaohib .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-iaohib .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-iaohib .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-iaohib:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-iaohib:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-lrappr {
  margin-bottom: 1em;  color: var(--bricks-color-vvsbjv);  font-size: 1.1em;  font-weight: 600;  background-color: rgba(255, 193, 7, 0.28);  border-radius: 1em
}
#brxe-lrappr:not(:has(> a)), #brxe-lrappr > a {
  padding-top: 2px;  padding-right: 15px;  padding-bottom: 3px;  padding-left: 15px
}
#brxe-auibpk .bc-letter-launcher__inner {
  color: var(--bricks-color-vvsbjv);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-auibpk {
  text-align: left;  line-height: 44PX;  letter-spacing: 0px
}
#brxe-auibpk {
  text-align: center;  font-size: 1.9em;  font-family: "Google Sans Flex"
}
#brxe-cvxnxj {
  align-self: center !important;  justify-content: center;  align-items: center;  padding-bottom: 20px
}
#brxe-lmorob {
  flex-direction: row
}
#brxe-iipjuc {
  line-height: 44PX;  letter-spacing: 0px;  text-align: center;  font-size: 3em;  color: var(--bricks-color-tmzgyd);  font-family: "Google Sans Flex";  margin-top: 50px;  margin-bottom: 20px
}
#brxe-iipjuc {
  text-align: center;  font-size: 3em;  font-family: "Google Sans Flex";  margin-top: 0
}
#brxe-vyqinx {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 10px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-93a8da);  color: #1c2728;  margin-top: 0;  margin-bottom: 1em;  padding-right: 60px
}
#brxe-vyqinx .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-98a79f);  text-align: center
}
#brxe-vyqinx .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-vyqinx .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-vyqinx:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-vyqinx:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-vyqinx:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-fehoaj {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-vvsbjv);  color: #1c2728;  margin-right: 3px;  margin-bottom: 1em;  margin-left: 20px
}
#brxe-fehoaj .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-qwcrwu);  text-align: center
}
#brxe-fehoaj .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-fehoaj .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-fehoaj:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-fehoaj:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-fehoaj:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-mfasco {
  flex-direction: row
}
#brxe-mfasco {
  justify-content: center;  align-items: center;  align-self: center !important
}
#brxe-eyhsuq {
  border-radius: 2em;  align-items: center
}
#brxe-eyhsuq {
  flex-direction: column;  align-items: center;  align-self: center !important;  height: 265px
}
#brxe-lwfvvc {
  border-radius: 2em;  overflow: hidden
}
#brxe-lwfvvc {
  align-self: center !important;  justify-content: center;  align-items: center;  flex-direction: column
}
#brxe-mqpyqy {
  line-height: 44PX;  letter-spacing: 0px;  text-align: center;  font-size: 3em;  color: var(--bricks-color-tmzgyd);  font-family: "Google Sans Flex";  margin-top: 50px;  margin-bottom: 20px
}
#brxe-mqpyqy {
  text-align: center;  font-size: 3em;  font-family: "Google Sans Flex";  margin-top: 0
}
#brxe-zzjyck {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-93a8da);  color: #1c2728;  margin-top: 0em;  margin-bottom: 1em
}
#brxe-zzjyck .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-zzjyck .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-zzjyck .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-zzjyck:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-zzjyck:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-zzjyck:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-tnyarp {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-vvsbjv);  color: #1c2728;  margin-bottom: 1em;  margin-left: 20px
}
#brxe-tnyarp .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-qwcrwu);  text-align: center
}
#brxe-tnyarp .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-tnyarp .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-tnyarp:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-tnyarp:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-tnyarp:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-padvyl {
  flex-direction: row
}
#brxe-padvyl {
  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-juglpu {
  border-radius: 2em;  align-items: center
}
#brxe-juglpu {
  height: 265px;  align-items: center;  justify-content: center;  align-self: center !important;  flex-direction: column
}
#brxe-ffeadr {
  border-radius: 2em;  overflow: hidden
}
#brxe-ffeadr {
  height: 300px;  flex-direction: column;  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-elolyz {
  line-height: 44PX;  letter-spacing: 0px;  text-align: center;  font-size: 3em;  color: var(--bricks-color-tmzgyd);  font-family: "Google Sans Flex";  margin-top: 50px;  margin-bottom: 20px
}
#brxe-elolyz {
  text-align: center;  font-size: 3em;  font-family: "Google Sans Flex";  align-self: center;  margin-top: 0
}
#brxe-zkgotu {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-93a8da);  color: #1c2728;  margin-top: 0em;  margin-bottom: 1em
}
#brxe-zkgotu .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-zkgotu .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-zkgotu .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-zkgotu:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-zkgotu:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-zkgotu:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-dxkryv {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-vvsbjv);  color: #1c2728;  margin-bottom: 1em;  margin-left: 20px
}
#brxe-dxkryv .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-qwcrwu);  text-align: center
}
#brxe-dxkryv .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-dxkryv .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-dxkryv:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-dxkryv:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-dxkryv:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-xbltag {
  flex-direction: row
}
#brxe-xbltag {
  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-rwtyiy {
  border-radius: 2em;  align-items: center
}
#brxe-rwtyiy {
  height: 265px;  flex-direction: column
}
#brxe-jymgcu {
  border-radius: 2em;  overflow: hidden
}
#brxe-jymgcu {
  height: 300px
}
#brxe-ygniry {
  line-height: 44PX;  letter-spacing: 0px;  text-align: center;  font-size: 3em;  color: var(--bricks-color-tmzgyd);  font-family: "Google Sans Flex";  margin-top: 50px;  margin-bottom: 20px
}
#brxe-ygniry {
  text-align: center;  font-size: 3em;  font-family: "Google Sans Flex";  align-self: center;  margin-top: 0
}
#brxe-znqnli {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-93a8da);  color: #1c2728;  margin-top: 0em;  margin-bottom: 1em
}
#brxe-znqnli .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-znqnli .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-znqnli .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-znqnli:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-znqnli:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-znqnli:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-ksqavu {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-vvsbjv);  color: #1c2728;  margin-bottom: 1em;  margin-left: 20px
}
#brxe-ksqavu .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-qwcrwu);  text-align: center
}
#brxe-ksqavu .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-ksqavu .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-ksqavu:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-ksqavu:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-ksqavu:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-iygoam {
  flex-direction: row
}
#brxe-iygoam {
  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-vnylcu {
  border-radius: 2em;  align-items: center
}
#brxe-vnylcu {
  height: 265px
}
#brxe-diyyhz {
  border-radius: 2em;  overflow: hidden
}
#brxe-diyyhz {
  height: 300px
}
#brxe-yadxiq {
  line-height: 44PX;  letter-spacing: 0px;  text-align: center;  font-size: 3em;  color: var(--bricks-color-tmzgyd);  font-family: "Google Sans Flex";  margin-top: 50px;  margin-bottom: 20px
}
#brxe-yadxiq {
  text-align: center;  font-size: 3em;  font-family: "Google Sans Flex";  align-self: center;  margin-top: 0
}
#brxe-nnmmjd {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-93a8da);  color: #1c2728;  margin-top: 0em;  margin-bottom: 1em
}
#brxe-nnmmjd .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-nnmmjd .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-nnmmjd .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-nnmmjd:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-nnmmjd:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-nnmmjd:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-jdhxov {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-vvsbjv);  color: #1c2728;  margin-bottom: 1em;  margin-left: 20px
}
#brxe-jdhxov .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-qwcrwu);  text-align: center
}
#brxe-jdhxov .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-jdhxov .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-jdhxov:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-jdhxov:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-jdhxov:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-danquv {
  flex-direction: row
}
#brxe-danquv {
  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-cdgzbi {
  border-radius: 2em;  align-items: center
}
#brxe-cdgzbi {
  align-self: center !important;  justify-content: center;  align-items: center;  height: 265px
}
#brxe-ajxwjh {
  border-radius: 2em;  overflow: hidden
}
#brxe-ajxwjh {
  height: 300px
}
#brxe-rnkral {
  line-height: 44PX;  letter-spacing: 0px;  text-align: center;  font-size: 3em;  color: var(--bricks-color-tmzgyd);  font-family: "Google Sans Flex";  margin-top: 50px;  margin-bottom: 20px
}
#brxe-rnkral {
  text-align: center;  font-size: 3em;  font-family: "Google Sans Flex";  align-self: center;  margin-top: 0
}
#brxe-tvrity {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-93a8da);  color: #1c2728;  margin-top: 0em;  margin-bottom: 1em
}
#brxe-tvrity .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-tvrity .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-tvrity .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-tvrity:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-tvrity:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-tvrity:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-fvmwxg {
  --padding-top: 1px;  --padding-right: 2px;  --padding-bottom: 1px;  --padding-left: 20px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  background: var(--bricks-color-vvsbjv);  color: #1c2728;  margin-bottom: 1em;  margin-left: 20px
}
#brxe-fvmwxg .nb-arrow-button-v2__text {
  font-size: 0.9em;  font-weight: 500;  color: var(--bricks-color-qwcrwu);  text-align: center
}
#brxe-fvmwxg .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-fvmwxg .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-fvmwxg:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-fvmwxg:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-fvmwxg:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-ugmthr {
  flex-direction: row
}
#brxe-ugmthr {
  justify-content: center;  align-items: center;  align-self: center !important
}
#brxe-zlsvss {
  border-radius: 2em;  align-items: center
}
#brxe-zlsvss {
  height: 265px
}
#brxe-cackwy {
  border-radius: 2em;  overflow: hidden
}
#brxe-cackwy {
  height: 300px
}
#brxe-axagmd {
  width: 100%;  height: 700px;  border-radius: 2em;  overflow: hidden;  gap: 0.5em
}
#brxe-axagmd .next-image-accordion__item {
  --scale: 1.1;  --gray: 50%;  --expanding-duration: 0.5s;  --expanding-ease: ease
}
#brxe-axagmd .next-image-accordion__content {
  padding-top: 20px;  padding-right: 20px;  padding-bottom: 60px;  padding-left: 20px;  left: 0px;  bottom: 0px;  background-color: rgba(0, 153, 165, 0.23);  color: #fff;  --fade-duration: 0.3s;  --fade-ease: ease-out
}
#brxe-axagmd .next-image-accordion__item:hover {
  flex: 2.2
}
#brxe-axagmd {
  width: 100%;  width: 1366px;  flex-direction: column;  height: 900px
}
#brxe-lmvaxg {
  align-self: center !important;  justify-content: center;  align-items: center;  width: 100%;  flex-direction: row
}
#brxe-lmvaxg {
  height: auto;  width: 100%
}
#brxe-ubgffq {
  flex-direction: row;  border-radius: 2em;  overflow: hidden;  width: 90vw
}
#brxe-ubgffq {
  flex-direction: column;  width: 100%
}
#brxe-cghplz {
  height: 100vh;  background-color: #ffffff;  position: relative;  padding-top: 3em;  padding-bottom: 3em;  width: 100vw
}
:where(#brxe-cghplz > *) {
  position: relative
}
#brxe-cghplz::before {
  background-image: linear-gradient(rgba(255, 255, 255, 0.74), #0099a5);  position: absolute;  content: "";  top: 0;  right: 0;  bottom: 0;  left: 0;  pointer-events: none
}
#brxe-cghplz {
  flex-direction: column;  height: auto;  padding-top: 90px;  padding-right: 1em;  padding-bottom: 90px;  padding-left: 1em
}
#brxe-fmbuyr .bc-letter-launcher__inner {
  color: var(--bricks-color-tmzgyd);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-vavwpn .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-vavwpn .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-vavwpn .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-vavwpn:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-vavwpn:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-tbpnny .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-tbpnny .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-tbpnny .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-tbpnny:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-tbpnny:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-rylmls .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-rylmls .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-rylmls .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-rylmls:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-rylmls:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-apajfx .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-apajfx .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-apajfx .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-apajfx:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-apajfx:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-fpilzg .bc-letter-launcher__inner {
  font-family: "Google Sans Flex";  color: var(--bricks-color-vvsbjv);  line-height: 60px;  font-size: 1.75em
}
#brxe-savney .bc-letter-launcher__inner {
  letter-spacing: -1px;  color: var(--bricks-color-feb49f);  font-weight: 800;  line-height: 50px;  font-size: 1.4em
}
#brxe-eixxls .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-eixxls .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-eixxls .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-eixxls:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-eixxls:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-zoeiwv .bc-letter-launcher__inner {
  font-family: "Google Sans Flex";  color: #f5f5f5;  line-height: 60px;  font-size: 1.75em
}
#brxe-ohdzyw .nb-arrow-button-v2__text {
  font-size: 16px;  font-weight: 500;  color: var(--bricks-color-otnukj)
}
#brxe-ohdzyw .nb-arrow-button-v2__arrow {
  padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px;  --arrow-default-rotation: 0deg;  --stroke: #000
}
#brxe-ohdzyw .nb-arrow-button-v2__arrow-wrapper {
  background: #fff;  border-radius: 100px
}
#brxe-ohdzyw:hover .nb-arrow-button-v2__text {
  color: var(--bricks-color-vvsbjv)
}
#brxe-ohdzyw:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brx-header.sticky.scrolling:not(.slide-up) > .brxe-section,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-container,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-block,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-div {
  box-shadow: var(--bricks-color-93a8da)
}
/* next_image_accordion.css */
.next-image-accordion {
  display: flex; 
    position: relative; 
    overflow: hidden;
}
.next-image-accordion__item {
  position: relative; 
    flex: 1; 
    transition: all var(--expanding-duration) var(--expanding-ease); 
    overflow: hidden;
}
.next-image-accordion__item:first-child {
  margin-left: 0;
}
.next-image-accordion__item:last-child {
  margin-right: 0;
}
.next-image-accordion__item img {
  width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: all var(--expanding-duration) var(--expanding-ease); 
    filter: grayscale(var(--gray));
}
.next-image-accordion__item:hover img {
  transform: scale(var(--scale)); 
    filter: grayscale(0%);
}
.next-image-accordion__content {
  position: absolute; 

    opacity: 0; 
    transition: opacity var(--fade-duration) var(--fade-ease); 
    z-index: 1;
}
.next-image-accordion__item:hover .next-image-accordion__content {
  opacity: 1;
}
/* bc_blur_reveal.css */
/*
* Blur reveal
*/
.next-blur-reveal__anchor {
  display: block; 
    width: fit-content; 
    height: fit-content;
}
.next-blur-reveal {
  display: block; 
    width: fit-content;
}
.next-blur-reveal__inner {
  display: block;
}
.next-blur-reveal__inner--to-hide {
  opacity: 0;
}
/* next_arrow_button_v2.css */
/*
* Arrow Button v2
*/
.nb-arrow-button-v2 {
  --height: calc(var(--dimensions) + var(--padding-top) + var(--padding-bottom)); 

    padding-left: var(--padding-left); 
    padding-right: calc(var(--gap) + var(--dimensions)); 

    height: var(--height); 

    display: flex; 
    align-items: center; 
    width: fit-content; 

    cursor: pointer; 
    position: relative; 
    z-index: 0;
}
.nb-arrow-button-v2 svg {
  min-width: unset; 
    min-height: unset; 

    width: var(--dimensions); 
    height: var(--dimensions);
}
.nb-arrow-button-v2[data-direction="left"] {
  padding-right: var(--padding-right); 
    padding-left: calc(var(--gap) + var(--dimensions));
}
.nb-arrow-button-v2__arrow-wrapper {
  width: var(--dimensions); 
    height: var(--dimensions); 
    transition: width var(--duration) var(--ease); 

    display: flex; 
    align-items: center; 

    position: absolute; 
    z-index: -1; 
    right: var(--padding-right);
}
.nb-arrow-button-v2[data-direction="left"] .nb-arrow-button-v2__arrow-wrapper {
  left: var(--padding-left); 
    right: auto;
}
.nb-arrow-button-v2__arrow-container {
  position: absolute; 
    right: 0; 

    width: var(--dimensions); 
    height: var(--dimensions);
}
.nb-arrow-button-v2[data-direction="left"] .nb-arrow-button-v2__arrow-container {
  left: 0; 
    right: auto;
}
.nb-arrow-button-v2__arrow {
  transform: rotate(var(--arrow-default-rotation)); 
    transition: transform var(--duration) var(--ease); 

    stroke: var(--stroke); 
    fill: var(--stroke);
}
.nb-arrow-button-v2:hover .nb-arrow-button-v2__arrow-wrapper {
  width: calc(100% - var(--padding-right) * 2);
}
.nb-arrow-button-v2[data-direction="left"]:hover .nb-arrow-button-v2__arrow-wrapper {
  width: calc(100% - var(--padding-left) * 2);
}
.nb-arrow-button-v2:hover .nb-arrow-button-v2__arrow {
  transform: rotate(var(--arrow-rotation));
}
.bc-letter-launcher__inner {
  letter-spacing: -2px !important;
}
```

## MEDIA QUERIES
```css
@media (max-width: 478px) {
  #brxe-auibpk {text-align: center; font-size: 1.9em; font-family: "Google Sans Flex"}
}
@media (max-width: 478px) {
  #brxe-iipjuc {text-align: center; font-size: 3em; font-family: "Google Sans Flex"; margin-top: 0}
}
@media (max-width: 478px) {
  #brxe-mfasco {justify-content: center; align-items: center; align-self: center !important}
}
@media (max-width: 478px) {
  #brxe-eyhsuq {flex-direction: column; align-items: center; align-self: center !important; height: 265px}
}
@media (max-width: 478px) {
  #brxe-lwfvvc {align-self: center !important; justify-content: center; align-items: center; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-mqpyqy {text-align: center; font-size: 3em; font-family: "Google Sans Flex"; margin-top: 0}
}
@media (max-width: 478px) {
  #brxe-padvyl {align-self: center !important; justify-content: center; align-items: center}
}
@media (max-width: 478px) {
  #brxe-juglpu {height: 265px; align-items: center; justify-content: center; align-self: center !important; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-ffeadr {height: 300px; flex-direction: column; align-self: center !important; justify-content: center; align-items: center}
}
@media (max-width: 478px) {
  #brxe-elolyz {text-align: center; font-size: 3em; font-family: "Google Sans Flex"; align-self: center; margin-top: 0}
}
@media (max-width: 478px) {
  #brxe-xbltag {align-self: center !important; justify-content: center; align-items: center}
}
@media (max-width: 478px) {
  #brxe-rwtyiy {height: 265px; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-jymgcu {height: 300px}
}
@media (max-width: 478px) {
  #brxe-ygniry {text-align: center; font-size: 3em; font-family: "Google Sans Flex"; align-self: center; margin-top: 0}
}
@media (max-width: 478px) {
  #brxe-iygoam {align-self: center !important; justify-content: center; align-items: center}
}
@media (max-width: 478px) {
  #brxe-vnylcu {height: 265px}
}
@media (max-width: 478px) {
  #brxe-diyyhz {height: 300px}
}
@media (max-width: 478px) {
  #brxe-yadxiq {text-align: center; font-size: 3em; font-family: "Google Sans Flex"; align-self: center; margin-top: 0}
}
@media (max-width: 478px) {
  #brxe-danquv {align-self: center !important; justify-content: center; align-items: center}
}
@media (max-width: 478px) {
  #brxe-cdgzbi {align-self: center !important; justify-content: center; align-items: center; height: 265px}
}
@media (max-width: 478px) {
  #brxe-ajxwjh {height: 300px}
}
@media (max-width: 478px) {
  #brxe-rnkral {text-align: center; font-size: 3em; font-family: "Google Sans Flex"; align-self: center; margin-top: 0}
}
@media (max-width: 478px) {
  #brxe-ugmthr {justify-content: center; align-items: center; align-self: center !important}
}
@media (max-width: 478px) {
  #brxe-zlsvss {height: 265px}
}
@media (max-width: 478px) {
  #brxe-cackwy {height: 300px}
}
@media (max-width: 478px) {
  #brxe-axagmd {width: 100%; width: 1366px; flex-direction: column; height: 900px}
}
@media (max-width: 478px) {
  #brxe-lmvaxg {height: auto; width: 100%}
}
@media (max-width: 478px) {
  #brxe-ubgffq {flex-direction: column; width: 100%}
}
@media (max-width: 478px) {
  #brxe-cghplz {flex-direction: column; height: auto; padding-top: 90px; padding-right: 1em; padding-bottom: 90px; padding-left: 1em}
}
```
