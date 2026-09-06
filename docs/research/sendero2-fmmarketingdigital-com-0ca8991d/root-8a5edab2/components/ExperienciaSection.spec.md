# ExperienciaSection Specification

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/ExperienciaSection.tsx`
- **Source section:** `04-experiencia` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** hover-driven flipbox cards + image-reveal, horizontal card row
- **Screenshots:** `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/`

## Assets (use these local paths; originals already downloaded)
- `493276494_1261988252600529_3837458535512588900_n-1024x1024.webp` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/493276494_1261988252600529_3837458535512588900_n.webp`
- `493277712_1256740899791931_4380273605235822115_n.webp` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/493277712_1256740899791931_4380273605235822115_n.webp`
- `Copia-de-_MG_5893-1024x683.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Copia-de-_MG_5893.jpg`
- `MG_3644-1024x683.jpg` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/MG_3644.jpg`
- `bg1c.mp4` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/bg1c.mp4`

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

# 04-experiencia

## MARKUP
```html
<section id="brxe-hrltlt" class="brxe-section bricks-lazy-hidden has-bg-video"><div class="bricks-background-video-wrapper bricks-lazy-video" data-background-video-url="/wp-content/uploads/2025/01/bg1c.mp4" data-background-video-loop="1"><video autoplay loop playsinline muted ></video></div><h3 id="brxe-qbmxts" data-script-id="qbmxts" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Un camino hacia el futuro</span></h3><h1 id="brxe-fmbuyr" data-script-id="fmbuyr" class="brxe-letter-launcher bc-letter-launcher"><span class="bc-letter-launcher__inner bc-letter-launcher__inner--to-hide" data-start="top bottom" data-end="unset" data-duration="0.3" data-delayvar="0.2" data-staggervar="0.05" data-letterrotation="-30" data-letteraltitude="20" data-trigger="this" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">La experiencia de ser<br>un estudiante Sendero</span></h1><div id="brxe-pncmqn" class="brxe-container bricks-lazy-hidden"><div id="brxe-tvmlce" class="brxe-container bricks-lazy-hidden"><div id="brxe-wsquet" data-script-id="wsquet" class="brxe-imagereveal bc-img-reveal"><div class='bc-img-reveal__element' data-direction="left" data-duration="1.5" data-delay="0" data-ease="sine" data-trigger="this" data-start="top bottom" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0"><img class='bc-img-reveal__img' width='1024' height='1024'  data-lazy-src="/wp-content/uploads/2025/09/493276494_1261988252600529_3837458535512588900_n-1024x1024.webp" ><noscript><img class='bc-img-reveal__img' src='/wp-content/uploads/2025/09/493276494_1261988252600529_3837458535512588900_n-1024x1024.webp' width='1024' height='1024'  ></noscript></div></div></div><div id="brxe-ewenod" class="brxe-container bricks-lazy-hidden"><div id="brxe-gkndoi" data-script-id="gkndoi" class="brxe-flipbox bricks-lazy-hidden bc-flipbox" data-bc-hide data-trigger="hover" data-reset="0" data-reset-after="5s" data-keep-open="0"><div class="bc-flipbox__wrapper" data-x-reverse><div id="brxe-hmbwrz" class="brxe-block bc-flipbox__flip bc-flipbox__flip--front bricks-lazy-hidden" tabindex="0"><h3 id="brxe-qfjwcj" class="brxe-heading">Metodología Centrada en su Potencial Único 🧠</h3></div><div id="brxe-ypnkte" class="brxe-block bc-flipbox__flip bc-flipbox__flip--back bricks-lazy-hidden" tabindex="0"><div id="brxe-jesjzj" class="brxe-text-basic">Fusionamos lo mejor de la filosofía Montessori y las Inteligencias Múltiples. Esto significa que no forzamos un ritmo de aprendizaje, sino que respetamos el de tu hijo, descubriendo y potenciando todos sus talentos, desde el artístico hasta el lógico, para que crezca con confianza e independencia.</div><a  id="brxe-vavwpn" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="https://wa.link/etzumz" data-direction="right"><span class='nb-arrow-button-v2__text'>Contáctanos</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z'/></svg></div></div></a></div></div></div></div><div id="brxe-wctnuv" class="brxe-container bricks-lazy-hidden"><div id="brxe-zywvwj" data-script-id="zywvwj" class="brxe-imagereveal bc-img-reveal"><div class='bc-img-reveal__element' data-direction="left" data-duration="1.5" data-delay="0" data-ease="sine" data-trigger="this" data-start="top bottom" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0"><img class='bc-img-reveal__img' width='1024' height='683'  data-lazy-src="/wp-content/uploads/2025/09/MG_3644-1024x683.jpg" ><noscript><img class='bc-img-reveal__img' src='/wp-content/uploads/2025/09/MG_3644-1024x683.jpg' width='1024' height='683'  ></noscript></div></div></div><div id="brxe-ueseqe" class="brxe-container bricks-lazy-hidden"><div id="brxe-ufyrdx" data-script-id="ufyrdx" class="brxe-flipbox bricks-lazy-hidden bc-flipbox" data-bc-hide data-trigger="hover" data-reset="0" data-reset-after="5s" data-keep-open="0"><div class="bc-flipbox__wrapper" data-x-reverse><div id="brxe-ocjoya" class="brxe-block bc-flipbox__flip bc-flipbox__flip--front bricks-lazy-hidden" tabindex="0"><h3 id="brxe-mrikum" class="brxe-heading">Inmersión Bilingüe desde el Primer Día 🌎</h3></div><div id="brxe-ztjuqi" class="brxe-block bc-flipbox__flip bc-flipbox__flip--back bricks-lazy-hidden" tabindex="0"><div id="brxe-yznhyk" class="brxe-text-basic">El inglés no es solo una materia; es parte de nuestro día a día. A través de juegos, canciones y actividades cotidianas, tu hijo aprende y piensa en inglés de forma natural. Esta inmersión temprana le da una ventaja decisiva, preparándolo para un futuro globalizado sin el estrés de la traducción.</div><a  id="brxe-tbpnny" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="https://wa.link/etzumz" data-direction="right"><span class='nb-arrow-button-v2__text'>Contáctanos</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z'/></svg></div></div></a></div></div></div></div><div id="brxe-qdfbpz" class="brxe-container bricks-lazy-hidden"><div id="brxe-tmfbja" data-script-id="tmfbja" class="brxe-flipbox bricks-lazy-hidden bc-flipbox" data-bc-hide data-trigger="hover" data-reset="0" data-reset-after="5s" data-keep-open="0"><div class="bc-flipbox__wrapper" data-x-reverse><div id="brxe-pxboxz" class="brxe-block bc-flipbox__flip bc-flipbox__flip--front bricks-lazy-hidden" tabindex="0"><h3 id="brxe-hvdcyx" class="brxe-heading">Desarrollo de Habilidades para la Vida 🌱</h3></div><div id="brxe-mzjwei" class="brxe-block bc-flipbox__flip bc-flipbox__flip--back bricks-lazy-hidden" tabindex="0"><div id="brxe-zteqcs" class="brxe-text-basic">Entendemos que las experiencias tempranas son clave. Por eso, nuestro enfoque va más allá de lo académico. Fomentamos la inteligencia emocional, la autonomía y la responsabilidad en cada actividad, sentando las bases firmes para que tu hijo se convierta en un adulto sano, pleno y feliz.</div><a  id="brxe-rylmls" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="https://wa.link/etzumz" data-direction="right"><span class='nb-arrow-button-v2__text'>Contáctanos</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z'/></svg></div></div></a></div></div></div></div><div id="brxe-asjpqr" class="brxe-container bricks-lazy-hidden"><div id="brxe-ncvabz" data-script-id="ncvabz" class="brxe-imagereveal bc-img-reveal"><div class='bc-img-reveal__element' data-direction="left" data-duration="1.5" data-delay="0" data-ease="sine" data-trigger="this" data-start="top bottom" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0"><img class='bc-img-reveal__img' width='1280' height='1280'  data-lazy-src="/wp-content/uploads/2025/09/493277712_1256740899791931_4380273605235822115_n.webp" ><noscript><img class='bc-img-reveal__img' src='/wp-content/uploads/2025/09/493277712_1256740899791931_4380273605235822115_n.webp' width='1280' height='1280'  ></noscript></div></div></div><div id="brxe-nbofcq" class="brxe-container bricks-lazy-hidden"><div id="brxe-nxybto" data-script-id="nxybto" class="brxe-flipbox bricks-lazy-hidden bc-flipbox" data-bc-hide data-trigger="hover" data-reset="0" data-reset-after="5s" data-keep-open="0"><div class="bc-flipbox__wrapper" data-x-reverse><div id="brxe-ncapdw" class="brxe-block bc-flipbox__flip bc-flipbox__flip--front bricks-lazy-hidden" tabindex="0"><h3 id="brxe-hcvtzb" class="brxe-heading">Aprendizaje Activo y Significativo 🖐️</h3></div><div id="brxe-zucpor" class="brxe-block bc-flipbox__flip bc-flipbox__flip--back bricks-lazy-hidden" tabindex="0"><div id="brxe-qdblrz" class="brxe-text-basic">Creamos ambientes preparados donde los niños aprenden haciendo. En lugar de memorizar, ellos tocan, exploran y construyen su propio conocimiento a través de la experiencia. Esto no solo hace que el aprendizaje sea más divertido, sino que asegura que sea profundo y duradero.</div><a  id="brxe-apajfx" class="brxe-next-arrow-button-v2 botonamarillo nb-arrow-button-v2" href="https://wa.link/etzumz" data-direction="right"><span class='nb-arrow-button-v2__text'>Contáctanos</span><div class='nb-arrow-button-v2__arrow-wrapper'><div class='nb-arrow-button-v2__arrow-container'><svg class='nb-arrow-button-v2__arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z'/></svg></div></div></a></div></div></div></div><div id="brxe-aqyodn" class="brxe-container bricks-lazy-hidden"><div id="brxe-mmsowc" data-script-id="mmsowc" class="brxe-imagereveal bc-img-reveal"><div class='bc-img-reveal__element' data-direction="left" data-duration="1.5" data-delay="0" data-ease="sine" data-trigger="this" data-start="top bottom" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0"><img class='bc-img-reveal__img' width='1024' height='683'  data-lazy-src="/wp-content/uploads/2025/09/Copia-de-_MG_5893-1024x683.jpg" ><noscript><img class='bc-img-reveal__img' src='/wp-content/uploads/2025/09/Copia-de-_MG_5893-1024x683.jpg' width='1024' height='683'  ></noscript></div></div></div></div></section>
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
#brxe-qbmxts {
  margin-bottom: 1em;  color: var(--bricks-color-vvsbjv);  font-size: 1.1em;  font-weight: 600;  background-color: rgba(255, 193, 7, 0.28);  border-radius: 1em
}
#brxe-qbmxts:not(:has(> a)), #brxe-qbmxts > a {
  padding-top: 2px;  padding-right: 15px;  padding-bottom: 3px;  padding-left: 15px
}
#brxe-fmbuyr .bc-letter-launcher__inner {
  color: var(--bricks-color-tmzgyd);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-fmbuyr {
  text-align: center;  line-height: 44PX;  letter-spacing: 0px;  margin-bottom: 0.5em
}
#brxe-fmbuyr {
  text-align: center;  font-size: 1.9em;  font-family: "Google Sans Flex"
}
#brxe-wsquet {
  width: 100%;  height: 100%;  border-radius: 2em;  transition: 0.3s
}
#brxe-wsquet:hover {
  transform: scaleX(1.1) scaleY(1.1)
}
#brxe-tvmlce {
  align-self: center !important;  width: 24%;  border-radius: 1.5em;  justify-content: center;  align-items: center;  height: 300px;  overflow: hidden
}
#brxe-tvmlce {
  width: 100%
}
#brxe-qfjwcj {
  color: var(--bricks-color-otnukj);  text-align: center;  font-family: "Google Sans Flex";  font-weight: 700;  font-size: 180%;  line-height: 1;  letter-spacing: -1px
}
#brxe-hmbwrz {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-93a8da);  padding-right: 1em;  padding-left: 1em
}
#brxe-hmbwrz {
  width: 100%
}
#brxe-jesjzj {
  font-weight: 600;  font-size: 0.9em;  line-height: 18px
}
#brxe-jesjzj {
  font-size: 1em;  text-align: center;  width: 100%
}
#brxe-vavwpn {
  --padding-top: 2px;  --padding-right: 2px;  --padding-bottom: 2px;  --padding-left: 25px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  margin-top: 24px;  background: #ffc107;  color: #1c2728
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
#brxe-vavwpn:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-vavwpn:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-ypnkte {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-feb49f);  padding-right: 20px;  padding-left: 20px
}
#brxe-gkndoi {
  align-self: center;  --height: 100%;  width: 100%
}
#brxe-gkndoi {
  width: 100%;  height: 250px
}
#brxe-ewenod {
  align-self: stretch !important;  width: 100%;  width: 24%;  border-radius: 1.5em;  justify-content: center;  align-items: center;  height: 300px
}
#brxe-ewenod {
  width: 100%;  height: 250px
}
#brxe-zywvwj {
  border-radius: 2em;  width: 100%;  height: 100%;  transition: 0.3s
}
#brxe-zywvwj:hover {
  transform: scaleX(1.1) scaleY(1.1)
}
#brxe-wctnuv {
  border-radius: 1.5em;  height: 300px;  width: 24%;  align-self: center !important;  justify-content: center;  align-items: center;  overflow: hidden
}
#brxe-wctnuv {
  width: 100%
}
#brxe-mrikum {
  color: #ffffff;  text-align: center;  font-family: "Google Sans Flex";  font-weight: 700;  font-size: 180%;  line-height: 1;  letter-spacing: -1px
}
#brxe-ocjoya {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-feb49f);  padding-right: 1em;  padding-left: 1em
}
#brxe-yznhyk {
  font-weight: 600;  font-size: 0.9em;  line-height: 18px;  color: #ffffff
}
#brxe-yznhyk {
  font-size: 1em
}
#brxe-tbpnny {
  --padding-top: 2px;  --padding-right: 2px;  --padding-bottom: 2px;  --padding-left: 25px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  margin-top: 24px;  background: var(--bricks-color-feb49f);  color: #1c2728
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
#brxe-tbpnny:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-tbpnny:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-ztjuqi {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-93a8da);  padding-right: 20px;  padding-left: 20px
}
#brxe-ufyrdx {
  align-self: center;  --height: 100%;  width: 100%
}
#brxe-ufyrdx .bc-flipbox__flip {
  background-color: var(--bricks-color-tmzgyd)
}
#brxe-ueseqe {
  align-self: stretch !important;  width: 100%;  width: 24%;  border-radius: 1.5em;  justify-content: center;  align-items: center;  height: 300px
}
#brxe-ueseqe {
  width: 100%;  height: 250px
}
#brxe-hvdcyx {
  color: #ffffff;  text-align: center;  font-family: "Google Sans Flex";  font-weight: 700;  font-size: 180%;  line-height: 1;  letter-spacing: -1px
}
#brxe-pxboxz {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-feb49f);  padding-right: 1em;  padding-left: 1em
}
#brxe-zteqcs {
  font-weight: 600;  font-size: 0.9em;  line-height: 18px;  color: #ffffff
}
#brxe-zteqcs {
  font-size: 1em
}
#brxe-rylmls {
  --padding-top: 2px;  --padding-right: 2px;  --padding-bottom: 2px;  --padding-left: 25px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  margin-top: 24px;  background: var(--bricks-color-feb49f);  color: #1c2728
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
#brxe-rylmls:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-rylmls:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-mzjwei {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-93a8da);  padding-right: 20px;  padding-left: 20px
}
#brxe-tmfbja {
  align-self: center;  --height: 100%;  width: 100%
}
#brxe-tmfbja .bc-flipbox__flip {
  background-color: var(--bricks-color-tmzgyd)
}
#brxe-qdfbpz {
  align-self: stretch !important;  width: 100%;  width: 24%;  border-radius: 1.5em;  justify-content: center;  align-items: center;  height: 300px
}
#brxe-qdfbpz {
  width: 100%;  height: 250px;  flex-direction: column-reverse
}
#brxe-ncvabz {
  border-radius: 2em;  width: 100%;  height: 100%;  transition: 0.3s
}
#brxe-ncvabz:hover {
  transform: scaleX(1.1) scaleY(1.1)
}
#brxe-asjpqr {
  border-radius: 1.5em;  width: 24%;  height: 300px;  align-self: center !important;  justify-content: center;  align-items: center;  overflow: hidden
}
#brxe-asjpqr {
  width: 100%
}
#brxe-hcvtzb {
  color: var(--bricks-color-otnukj);  text-align: center;  font-family: "Google Sans Flex";  font-weight: 700;  font-size: 180%;  line-height: 1;  letter-spacing: -1px
}
#brxe-ncapdw {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-93a8da);  padding-right: 1em;  padding-left: 1em
}
#brxe-qdblrz {
  font-weight: 600;  font-size: 0.9em;  line-height: 18px
}
#brxe-qdblrz {
  font-size: 1em
}
#brxe-apajfx {
  --padding-top: 2px;  --padding-right: 2px;  --padding-bottom: 2px;  --padding-left: 25px;  border-radius: 100px;  --gap: 20px;  --dimensions: 40px;  --arrow-rotation: -45deg;  --duration: 0.6s;  --ease: cubic-bezier(0.22, 1, 0.36, 1);  margin-top: 24px;  background: #ffc107;  color: #1c2728
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
#brxe-apajfx:hover {
  color: var(--bricks-color-vvsbjv)
}
#brxe-apajfx:hover .nb-arrow-button-v2__arrow {
  --stroke: var(--bricks-color-93a8da)
}
#brxe-zucpor {
  align-self: center !important;  justify-content: center;  align-items: center;  background-color: var(--bricks-color-feb49f);  padding-right: 20px;  padding-left: 20px
}
#brxe-nxybto {
  align-self: center;  --height: 100%;  width: 100%
}
#brxe-nbofcq {
  align-self: stretch !important;  width: 100%;  width: 24%;  border-radius: 1.5em;  justify-content: center;  align-items: center;  height: 300px
}
#brxe-nbofcq {
  width: 100%;  height: 250px
}
#brxe-mmsowc {
  width: 100%;  height: 100%;  border-radius: 2em;  transition: 0.3s
}
#brxe-mmsowc:hover {
  transform: scaleX(1.1) scaleY(1.1)
}
#brxe-aqyodn {
  border-radius: 1.5em;  width: 24%;  height: 300px;  align-self: center !important;  justify-content: center;  align-items: center;  overflow: hidden
}
#brxe-aqyodn {
  width: 100%
}
#brxe-pncmqn {
  align-self: stretch !important;  width: 100%;  justify-content: center;  align-items: stretch;  flex-direction: row;  flex-wrap: wrap;  column-gap: 5px;  row-gap: 10px;  padding-top: 20px;  padding-bottom: 20px;  max-width: 1260px
}
#brxe-hrltlt {
  padding-top: 6em;  padding-right: 9em;  padding-bottom: 6em;  padding-left: 9em;  background-color: var(--bricks-color-qwcrwu)
}
#brxe-hrltlt {
  height: auto;  padding-right: 1em;  padding-left: 1em
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
/* bc_flipbox.css */
/*
Flipbox
*/
.bc-flipbox[data-bc-hide] {
  opacity: 0;
}
.bc-flipbox {
  width: 300px;  /*dimensiones*/
    --height: 300px;  /*dimensiones*/
    height: var(--height); 
    
    perspective: 800px;  /*intensidad de la perspectiva*/
}
.bc-flipbox__wrapper {
  position: relative; 
    width: 100%; 
    height: 100%; 
    -webkit-transform-style: preserve-3d; 
    transform-style: preserve-3d; 

    border-radius: 30px;  /*borde común*/
    /*box shadow*/

    --trans-duration: 1.3s; 
    --trans-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    -webkit-transition: -webkit-transform var(--trans-duration) var(--trans-easing);  /*duration*/ /*easing*/
    transition: transform var(--trans-duration) var(--trans-easing);  /*duration*/ /*easing*/
}
.bc-flipbox__flip--front {
  position: relative; 
    perspective: 1000px;
}
.bc-flipbox__flip--back {
  position: absolute; 
    top: 0; 
    left: 0;
}
.bc-flipbox__flip {
  width: 100%; 
    height: 100%; 
    backface-visibility: hidden; 
    -webkit-font-smoothing: antialiased; 

    border-radius: 30px;  /*borde común*/
    background: #fff;  /*background*/
}
.bc-flipbox__wrapper[data-x] .bc-flipbox__flip--back {
  -webkit-transform: rotateY(180deg); 
    transform: rotateY(180deg);
}
.bc-flipbox__wrapper[data-x][data-flipped] {
  -webkit-transform: rotateY(180deg); 
    transform: rotateY(180deg);
}
.bc-flipbox__wrapper[data-x-reverse] .bc-flipbox__flip--back {
  -webkit-transform: rotateY(-180deg); 
    transform: rotateY(-180deg);
}
.bc-flipbox__wrapper[data-x-reverse][data-flipped] {
  -webkit-transform: rotateY(-180deg); 
    transform: rotateY(-180deg);
}
.bc-flipbox__wrapper[data-y] .bc-flipbox__flip--back {
  -webkit-transform: rotateX(180deg); 
    transform: rotateX(180deg);
}
.bc-flipbox__wrapper[data-y][data-flipped] {
  -webkit-transform: rotateX(180deg); 
    transform: rotateX(180deg);
}
.bc-flipbox__wrapper[data-y-reverse] .bc-flipbox__flip--back {
  -webkit-transform: rotateX(-180deg); 
    transform: rotateX(-180deg);
}
.bc-flipbox__wrapper[data-y-reverse][data-flipped] {
  -webkit-transform: rotateX(-180deg); 
    transform: rotateX(-180deg);
}
/* bc_image_reveal.css */
/*
*IMAGE REVEAL*
*/
.bc-img-reveal {
  contain: paint; 

    display: block; 
    width: fit-content;  /*width*/
    height: auto;
}
.bc-img-reveal__element {
  visibility: hidden; 
    overflow: hidden; 

    width: 100%; 
    height: 100%; 

    --scale: 1.3;
}
.bc-img-reveal__element[data-direction='top'] {
  transform: translateY(-100%);
}
.bc-img-reveal__element[data-direction='bottom'] {
  transform: translateY(100%);
}
.bc-img-reveal__element[data-direction='left'] {
  transform: translateX(-100%);
}
.bc-img-reveal__element[data-direction='right'] {
  transform: translateX(100%);
}
.bc-img-reveal__element .bc-img-reveal__img {
  height: 100%; 
    width: 100%; 
    object-fit: cover; 
    transform-origin: left;
}
.bc-img-reveal__element[data-direction='top'] .bc-img-reveal__img {
  transform: translateY(100%) scale(var(--scale));
}
.bc-img-reveal__element[data-direction='bottom'] .bc-img-reveal__img {
  transform: translateY(-100%) scale(var(--scale));
}
.bc-img-reveal__element[data-direction='left'] .bc-img-reveal__img {
  transform: translateX(100%) scale(var(--scale));
}
.bc-img-reveal__element[data-direction='right'] .bc-img-reveal__img {
  transform: translateX(-100%) scale(var(--scale));
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
  #brxe-fmbuyr {text-align: center; font-size: 1.9em; font-family: "Google Sans Flex"}
}
@media (max-width: 478px) {
  #brxe-tvmlce {width: 100%}
}
@media (max-width: 478px) {
  #brxe-hmbwrz {width: 100%}
}
@media (max-width: 478px) {
  #brxe-jesjzj {font-size: 1em; text-align: center; width: 100%}
}
@media (max-width: 478px) {
  #brxe-gkndoi {width: 100%; height: 250px}
}
@media (max-width: 478px) {
  #brxe-ewenod {width: 100%; height: 250px}
}
@media (max-width: 478px) {
  #brxe-wctnuv {width: 100%}
}
@media (max-width: 478px) {
  #brxe-yznhyk {font-size: 1em}
}
@media (max-width: 478px) {
  #brxe-ueseqe {width: 100%; height: 250px}
}
@media (max-width: 478px) {
  #brxe-zteqcs {font-size: 1em}
}
@media (max-width: 478px) {
  #brxe-qdfbpz {width: 100%; height: 250px; flex-direction: column-reverse}
}
@media (max-width: 478px) {
  #brxe-asjpqr {width: 100%}
}
@media (max-width: 478px) {
  #brxe-qdblrz {font-size: 1em}
}
@media (max-width: 478px) {
  #brxe-nbofcq {width: 100%; height: 250px}
}
@media (max-width: 478px) {
  #brxe-aqyodn {width: 100%}
}
@media (max-width: 478px) {
  #brxe-hrltlt {height: auto; padding-right: 1em; padding-left: 1em}
}
```
