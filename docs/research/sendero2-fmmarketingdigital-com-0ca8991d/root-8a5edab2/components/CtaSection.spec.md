# CtaSection Specification

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/CtaSection.tsx`
- **Source section:** `07-cta` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** static CTA with letter-launcher heading + arrow button
- **Screenshots:** `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/`

## Assets (use these local paths; originals already downloaded)
- None

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

# 07-cta

## MARKUP
```html
<section id="brxe-lwijqv" class="brxe-section startsection bricks-lazy-hidden"><div id="brxe-seattn" class="brxe-container bricks-lazy-hidden"><div id="brxe-vycmyr" class="brxe-container bricks-lazy-hidden"><h2 id="brxe-zoeiwv" data-script-id="zoeiwv" class="brxe-letter-launcher bc-letter-launcher"><span class="bc-letter-launcher__inner bc-letter-launcher__inner--to-hide" data-start="top bottom" data-end="unset" data-duration="0.3" data-delayvar="0.2" data-staggervar="0.05" data-letterrotation="-30" data-letteraltitude="20" data-trigger="this" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Un espacio donde tus hijos crecerán con amor y aprendizaje</span></h2><div id="brxe-sbomrs" class="brxe-text-basic">El mejor comienzo para grandes futuros</div><a  id="brxe-ohdzyw" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="/admisiones/" data-direction="right"><span class='nb-arrow-button-v2__text'>Ir a admisiones</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z'/></svg></div></div></a></div></div></section>
```

## CSS RULES
```css
.brxe-container {
  width: 1260px
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
#brxe-auibpk .bc-letter-launcher__inner {
  color: var(--bricks-color-vvsbjv);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
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
#brxe-vyqinx:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-fehoaj:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-zzjyck:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-tnyarp:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-zkgotu:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-dxkryv:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-znqnli:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-ksqavu:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-nnmmjd:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-jdhxov:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-tvrity:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-fvmwxg:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
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
#brxe-zoeiwv {
  text-align: center;  line-height: 44PX;  letter-spacing: 0px
}
#brxe-zoeiwv .bc-letter-launcher__inner {
  font-family: "Google Sans Flex";  color: #f5f5f5;  line-height: 60px;  font-size: 1.75em
}
#brxe-zoeiwv {
  font-size: 1.9em;  line-height: 4px
}
#brxe-sbomrs {
  margin-top: 29px;  color: #f5f5f5;  text-align: center;  font-weight: 500;  font-size: 1.1em
}
#brxe-ohdzyw {
  --padding-top: 2px;  --padding-right: 2px;  --padding-bottom: 2px;  --padding-left: 25px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  margin-top: 24px;  background: #ffc107;  color: #1c2728
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
#brxe-ohdzyw:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-ohdzyw:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-vycmyr {
  align-self: center !important;  justify-content: center;  align-items: center;  width: 666PX
}
#brxe-vycmyr {
  padding-right: 20px;  padding-left: 20px
}
#brxe-seattn {
  align-self: center !important;  justify-content: center;  align-items: stretch;  flex-direction: row
}
#brxe-lwijqv {
  height: 444px;  background-image: url(https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-_MG_3150-scaled.jpg);  background-size: cover;  background-position: top center;  position: relative;  align-self: stretch !important;  width: 100%;  justify-content: center
}
:where(#brxe-lwijqv > *) {
  position: relative
}
#brxe-lwijqv::before {
  background-image: linear-gradient(217deg, rgba(0, 153, 165, 0.79) 50%, rgba(0, 153, 165, 0.77) 70%);  position: absolute;  content: "";  top: 0;  right: 0;  bottom: 0;  left: 0;  pointer-events: none
}
#brx-header.sticky.scrolling:not(.slide-up) > .brxe-section,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-container,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-block,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-div {
  box-shadow: var(--bricks-color-93a8da)
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
  #brxe-zoeiwv {font-size: 1.9em; line-height: 4px}
}
@media (max-width: 478px) {
  #brxe-vycmyr {padding-right: 20px; padding-left: 20px}
}
```
