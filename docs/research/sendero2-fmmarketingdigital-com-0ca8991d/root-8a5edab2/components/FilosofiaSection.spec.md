# FilosofiaSection Specification

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/FilosofiaSection.tsx`
- **Source section:** `02-filosofia` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** scroll-driven letter-launcher + blur-reveal, autoplay video panel
- **Screenshots:** `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/`

## Assets (use these local paths; originals already downloaded)
- `SenderoMatriculateYa.mp4` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/SenderoMatriculateYa.mp4`

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

# 02-filosofia

## MARKUP
```html
<section id="brxe-icgmlu" class="brxe-section bricks-lazy-hidden"><div id="brxe-bajnwe" class="brxe-container bricks-lazy-hidden"><div id="brxe-jcpyhf" class="brxe-container bricks-lazy-hidden"><div id="brxe-mzonlv" class="brxe-container bricks-lazy-hidden"><div id="brxe-jetnzg" class="brxe-container bricks-lazy-hidden"><h3 id="brxe-dlghqc" data-script-id="dlghqc" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Así educamos</span></h3><h1 id="brxe-yyoygv" data-script-id="yyoygv" class="brxe-letter-launcher bc-letter-launcher"><span class="bc-letter-launcher__inner bc-letter-launcher__inner--to-hide" data-start="top bottom" data-end="unset" data-duration="0.3" data-delayvar="0.2" data-staggervar="0.05" data-letterrotation="-30" data-letteraltitude="20" data-trigger="this" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">🏫 Nuestra filosofía educativa</span></h1><div id="brxe-xdfcei" class="brxe-text-basic">Desde nuestro inicio, hemos trabajado para construir un espacio donde la educación sea integral, combinando el aprendizaje académico con el desarrollo emocional, social y práctico. Nuestro enfoque no solo busca formar estudiantes exitosos, sino también personas conscientes del mundo que los rodea.</div><a  id="brxe-iaohib" class="brxe-next-arrow-button-v2 botonazul nb-arrow-button-v2" href="/quienes-somos/" data-direction="right"><span class='nb-arrow-button-v2__text'>Conoce más</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z'/></svg></div></div></a></div><div id="brxe-dbwfpj" class="brxe-container bricks-lazy-hidden"><div id="brxe-nkfexj" data-script-id="nkfexj" class="brxe-video"><video data-src="/wp-content/uploads/2025/08/SenderoMatriculateYa.mp4" class="bricks-lazy-hidden" autoplay playsinline onclick="this.paused ? this.play() : this.pause()" loop muted tabindex="-1"><p>Your browser does not support the video tag.</p></video><div class="bricks-lazy-hidden bricks-video-overlay" ></div><i class="fas fa-circle-play bricks-video-overlay-icon" tabindex="0"></i></div></div></div></div></div></section>
```

## CSS RULES
```css
.brxe-container {
  width: 1260px
}
.brxe-video .bricks-video-overlay-icon {
  color: var(--bricks-color-93a8da);  font-size: 2em
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
#brxe-dlghqc {
  margin-bottom: 1em;  color: var(--bricks-color-vvsbjv);  font-size: 1.1em;  font-weight: 600;  background-color: #ebebeb;  border-radius: 1em
}
#brxe-dlghqc:not(:has(> a)), #brxe-dlghqc > a {
  padding-top: 1px;  padding-right: 10px;  padding-bottom: 2px;  padding-left: 10px
}
#brxe-dlghqc {
  align-self: center;  text-align: center;  margin-top: 25px
}
#brxe-yyoygv .bc-letter-launcher__inner {
  color: var(--bricks-color-vvsbjv);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-yyoygv {
  text-align: left;  line-height: 44PX;  letter-spacing: 0px
}
#brxe-yyoygv {
  text-align: center;  font-size: 1.9em;  font-family: "Google Sans Flex"
}
#brxe-xdfcei {
  color: var(--bricks-color-otnukj);  text-align: justify;  font-weight: 500;  margin-top: 16px
}
#brxe-xdfcei {
  width: 100%;  align-self: center;  text-align: center
}
#brxe-iaohib {
  --padding-top: 2px;  --padding-right: 2px;  --padding-bottom: 2px;  --padding-left: 25px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  margin-top: 24px;  background: var(--bricks-color-93a8da);  color: #1c2728
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
#brxe-iaohib:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-iaohib:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-jetnzg {
  width: 40%
}
#brxe-jetnzg {
  align-self: center !important;  align-items: center;  padding-top: 20px;  padding-right: 0;  padding-bottom: 20px;  padding-left: 0;  width: 100%;  justify-content: center;  flex-direction: column
}
#brxe-nkfexj {
  height: 606px;  overflow: hidden;  border-radius: 2em
}
#brxe-nkfexj {
  align-self: center;  justify-content: center;  align-items: center;  margin-top: 33px
}
#brxe-dbwfpj {
  width: 60%
}
#brxe-dbwfpj {
  width: 100%;  padding-right: 0;  padding-left: 0;  flex-direction: column
}
#brxe-mzonlv {
  width: 1260px;  flex-direction: row;  column-gap: 3em;  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-mzonlv {
  align-self: center !important;  justify-content: center;  align-items: center;  padding-right: 1em;  padding-left: 01em;  flex-direction: column;  width: 1260px
}
#brxe-bajnwe {
  width: 100%;  flex-direction: row;  align-self: center !important;  justify-content: center;  align-items: center;  height: 777px
}
#brxe-bajnwe {
  height: 100%;  width: 1260px;  flex-direction: column;  padding-right: 0;  padding-left: 0
}
#brxe-icgmlu {
  height: 777px;  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-icgmlu {
  height: 100%;  width: 100%;  flex-direction: column
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
  #brxe-dlghqc {align-self: center; text-align: center; margin-top: 25px}
}
@media (max-width: 478px) {
  #brxe-yyoygv {text-align: center; font-size: 1.9em; font-family: "Google Sans Flex"}
}
@media (max-width: 478px) {
  #brxe-xdfcei {width: 100%; align-self: center; text-align: center}
}
@media (max-width: 478px) {
  #brxe-jetnzg {align-self: center !important; align-items: center; padding-top: 20px; padding-right: 0; padding-bottom: 20px; padding-left: 0; width: 100%; justify-content: center; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-nkfexj {align-self: center; justify-content: center; align-items: center; margin-top: 33px}
}
@media (max-width: 478px) {
  #brxe-dbwfpj {width: 100%; padding-right: 0; padding-left: 0; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-mzonlv {align-self: center !important; justify-content: center; align-items: center; padding-right: 1em; padding-left: 01em; flex-direction: column; width: 1260px}
}
@media (max-width: 478px) {
  #brxe-bajnwe {height: 100%; width: 1260px; flex-direction: column; padding-right: 0; padding-left: 0}
}
@media (max-width: 478px) {
  #brxe-icgmlu {height: 100%; width: 100%; flex-direction: column}
}
```
