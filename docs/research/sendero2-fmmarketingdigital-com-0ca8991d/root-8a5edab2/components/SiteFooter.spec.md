# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter.tsx`
- **Source section:** `footer` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** static footer, link hover states
- **Screenshots:** `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/`

## Assets (use these local paths; originals already downloaded)
- `Recurso-22@2x.png` -> `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Recurso-22@2x.png`

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

# footer

## MARKUP
```html
<footer id="brx-footer"><section id="brxe-ohnarn" class="brxe-section bricks-lazy-hidden"><div id="brxe-ydoymy" class="brxe-container bricks-lazy-hidden"><img width="318" height="288" class="brxe-image css-filter size-full bricks-lazy-hidden" alt="" id="brxe-btgyiy" decoding="async" data-src="/wp-content/uploads/2025/09/Recurso-22@2x.png" data-type="string" /><h3 id="brxe-telkff" data-script-id="telkff" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Síguenos en nuestras redes sociales</span></h3><ul id="brxe-wqtwjz" class="brxe-social-icons"><li class="repeater-item has-link"><a href="https://www.tiktok.com/@senderoeducacion" target="_blank"><i class="fab fa-tiktok icon"></i></a></li><li class="repeater-item has-link"><a href="https://www.facebook.com/SenderoEducacion/" target="_blank"><i class="fab fa-facebook-square icon"></i></a></li><li class="repeater-item has-link"><a href="https://www.instagram.com/senderoeducacion/?hl=es" target="_blank"><i class="fab fa-instagram icon"></i></a></li></ul><nav id="brxe-vvjqty" class="brxe-next-gooey-nav bricks-lazy-hidden nb-gooey-nav nb-gooey-nav--horizontal"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="nb-gooey-nav__filter"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" /><feComposite in="SourceGraphic" in2="goo" operator="atop" /></filter></defs></svg><div id="brxe-mdxqnf" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-wveqlc" class="brxe-heading"><a href="/quienes-somos/">Quienes somos</a></span></div><div id="brxe-srlson" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-fctvvn" class="brxe-heading"><a href="/oferta-educativa/">Oferta educativa</a></span></div><div id="brxe-bkwxlg" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-ecocui" class="brxe-heading"><a href="/noticias/">Noticias</a></span></div><div id="brxe-suzumf" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-cdtaqp" class="brxe-heading"><a href="/galeria/">Galería</a></span></div><div id="brxe-tbfwxs" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-mebnhe" class="brxe-heading"><a href="/servicio-social/">Servicio social</a></span></div><div id="brxe-xpdhpp" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-gelmsf" class="brxe-heading"><a href="/contacto/">Contacto</a></span></div></nav><style>@media (max-width: 478px) {.nb-gooey-nav--horizontal { flex-direction: column;}.nb-gooey-nav--horizontal .nb-gooey-nav__item:hover { margin-top: calc(-1 * var(--gooey-merge-distance)); margin-bottom: calc(-1 * var(--gooey-merge-distance));}.nb-gooey-nav--vertical { flex-direction: row;}.nb-gooey-nav--vertical .nb-gooey-nav__item:hover { margin-left: calc(-1 * var(--gooey-merge-distance)); margin-right: calc(-1 * var(--gooey-merge-distance));}}</style><nav id="brxe-oapqzl" class="brxe-next-gooey-nav bricks-lazy-hidden nb-gooey-nav nb-gooey-nav--horizontal"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="nb-gooey-nav__filter"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" /><feComposite in="SourceGraphic" in2="goo" operator="atop" /></filter></defs></svg><div id="brxe-mwpngf" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-bimkof" class="brxe-heading"><a href="/admisiones/">Admisiones</a></span></div><div id="brxe-hcolam" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-kuates" class="brxe-heading"><a href="/lista-de-utiles/">Lista de útiles</a></span></div><div id="brxe-fyofzy" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-hguucb" class="brxe-heading"><a href="/fichas/">Fichas</a></span></div><div id="brxe-woivpj" class="brxe-block nb-gooey-nav__item bricks-lazy-hidden"><span id="brxe-qwdtvr" class="brxe-heading"><a href="/podcast/">Podcast</a></span></div></nav></div></section><section id="brxe-dhaxsw" class="brxe-section bricks-lazy-hidden"><h6 id="brxe-uflrab" class="brxe-heading">Unidad Educativa Particular Sendero © Todos los derechos reservados</h6></section></footer>
```

## CSS RULES
```css
.brxe-container {
  width: 1260px
}
#brxe-vvjqty {
  place-items: center!important;
}
#brxe-mzqpmk .nb-gooey-nav__item {
  padding-top: 7px;  padding-right: 14px;  padding-bottom: 7px;  padding-left: 14px;  border-radius: 12px;  font-size: 0.9em;  font-weight: 600;  color: var(--bricks-color-qwcrwu)
}
#brxe-mzqpmk .nb-gooey-nav__item {
  font-size: 1.1em;  padding-right: 14px;  padding-left: 14px
}
#brxe-qxzqgo .nb-gooey-nav__item {
  padding-top: 5px;  padding-right: 14px;  padding-bottom: 5px;  padding-left: 14px;  background: var(--bricks-color-tmzgyd);  border-radius: 12px;  font-size: 0.9em;  font-weight: 600;  color: #ffffff
}
#brxe-qxzqgo .nb-gooey-nav__item:hover {
  background: #00707a
}
#brxe-pbdegl .nb-gooey-nav__item {
  padding-top: 7px;  padding-right: 14px;  padding-bottom: 7px;  padding-left: 14px;  border-radius: 12px;  font-size: 0.9em;  font-weight: 600;  color: var(--bricks-color-qwcrwu)
}
#brxe-btgyiy:not(.tag), #brxe-btgyiy img {
  object-fit: contain
}
#brxe-btgyiy {
  margin-bottom: 29px;  width: 170px
}
#brxe-btgyiy {
  align-self: center;  flex-grow: 0;  flex-shrink: 1
}
#brxe-telkff {
  margin-bottom: 1em;  color: var(--bricks-color-vvsbjv);  font-size: 1em;  font-weight: 600;  background-color: #007a85;  border-radius: 1em;  color: var(--bricks-color-feb49f)
}
#brxe-telkff:not(:has(> a)), #brxe-telkff > a {
  padding-top: 4px;  padding-right: 20px;  padding-bottom: 4px;  padding-left: 20px
}
#brxe-wqtwjz li.has-link a, #brxe-wqtwjz li.no-link {
  padding-top: 6px;  padding-right: 0;  padding-bottom: 6px;  padding-left: 0;  color: #ffffff;  align-items: center;  justify-content: center;  width: 42px
}
#brxe-wqtwjz .icon {
  color: var(--bricks-color-tmzgyd);  font-size: 18px
}
#brxe-wqtwjz svg {
  height: 18px;  width: auto
}
#brxe-wqtwjz li {
  border-radius: 31px;  margin-bottom: 26px;  background-color: var(--bricks-color-feb49f)
}
#brxe-wqtwjz {
  gap: 8px;  flex-direction: row
}
#brxe-wveqlc {
  font-size: 1.1em
}
#brxe-fctvvn {
  font-size: 1.1em
}
#brxe-ecocui {
  font-size: 1.1em
}
#brxe-cdtaqp {
  font-size: 1.1em
}
#brxe-mebnhe {
  font-size: 1.1em
}
#brxe-gelmsf {
  font-size: 1.1em
}
#brxe-vvjqty {
  padding-right: 20px;  padding-left: 20px;  gap: 12px;  --gooey-merge-distance: 20px;  --gooey-duration: 0.5s;  --gooey-ease: ease;  flex-shrink: 1;  z-index: 333;  align-self: center;  justify-content: center;  align-items: center;  text-align: center
}
#brxe-vvjqty .nb-gooey-nav__item {
  padding-top: 5px;  padding-right: 14px;  padding-bottom: 5px;  padding-left: 14px;  background: var(--bricks-color-93a8da);  border-radius: 12px;  font-size: 0.8em;  font-weight: 600;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-vvjqty {
  align-items: flex-start;  gap: 12px;  flex-direction: column
}
#brxe-bimkof {
  font-size: 0.9em
}
#brxe-kuates {
  font-size: 0.9em
}
#brxe-hguucb {
  font-size: 0.9em
}
#brxe-qwdtvr {
  font-size: 0.9em
}
#brxe-oapqzl {
  padding-right: 20px;  padding-left: 20px;  gap: 12px;  --gooey-merge-distance: 20px;  --gooey-duration: 0.5s;  --gooey-ease: ease;  flex-shrink: 1;  z-index: 333;  align-self: center;  justify-content: center;  align-items: center;  text-align: center;  margin-top: 1em
}
#brxe-oapqzl .nb-gooey-nav__item {
  padding-top: 5px;  padding-right: 14px;  padding-bottom: 5px;  padding-left: 14px;  background: var(--bricks-color-feb49f);  border-radius: 12px;  font-size: 1em;  font-weight: 600;  color: var(--bricks-color-otnukj);  text-align: center
}
#brxe-oapqzl {
  align-items: center;  flex-direction: column
}
#brxe-ydoymy {
  align-self: center !important;  justify-content: center;  align-items: center;  padding-top: 62px;  flex-wrap: wrap
}
#brxe-ydoymy {
  align-self: flex-start !important;  justify-content: flex-start;  align-items: center
}
#brxe-ohnarn {
  padding-bottom: 3em;  background-image: url(https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/01/Artboard-9-100-1-scaled.jpg);  background-position: center center;  background-size: contain
}
#brxe-ohnarn {
  height: auto
}
#brxe-uflrab {
  color: var(--bricks-color-feb49f);  font-weight: 500;  font-size: 0.9em
}
#brxe-dhaxsw {
  width: 100vw;  height: 30px;  flex-direction: column;  padding-top: 0;  padding-bottom: 0;  max-height: 30px;  background-color: #007580;  justify-content: center;  align-self: center !important;  align-items: center
}
#brx-header.sticky.scrolling:not(.slide-up) > .brxe-section,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-container,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-block,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-div {
  box-shadow: var(--bricks-color-93a8da)
}
.nb-gooey-nav--horizontal {
  flex-direction: column;
}
.nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {
  margin-top: calc(-1 * var(--gooey-merge-distance));  margin-bottom: calc(-1 * var(--gooey-merge-distance));
}
.nb-gooey-nav--vertical {
  flex-direction: row;
}
.nb-gooey-nav--vertical .nb-gooey-nav__item:hover {
  margin-left: calc(-1 * var(--gooey-merge-distance));  margin-right: calc(-1 * var(--gooey-merge-distance));
}
/* next_gooey_nav.css */
/*
* Gooey Nav
*/
.nb-gooey-nav {
  filter: url("#nb-gooey-nav__filter"); 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: center;
}
.nb-gooey-nav svg {
  display: none;
}
.nb-gooey-nav__item {
  position: relative; 

    white-space: nowrap; 
    width: fit-content; 
    height: fit-content; 

    display: flex; 
    align-items: center; 
    justify-content: center; 

    border: none; 
    outline: none; 
    cursor: pointer; 
    
    transition: margin var(--gooey-duration) var(--gooey-ease);
}
.nb-gooey-nav--horizontal {
  flex-direction: row;
}
.nb-gooey-nav--vertical {
  flex-direction: column;
}
.nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {
  margin-left: calc(-1 * var(--gooey-merge-distance)); 
    margin-right: calc(-1 * var(--gooey-merge-distance));
}
.nb-gooey-nav--vertical .nb-gooey-nav__item:hover {
  margin-top: calc(-1 * var(--gooey-merge-distance)); 
    margin-bottom: calc(-1 * var(--gooey-merge-distance));
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
```

## MEDIA QUERIES
```css
@media (max-width: 478px) {
  #brxe-mzqpmk .nb-gooey-nav__item {font-size: 1.1em; padding-right: 14px; padding-left: 14px}
}
@media (max-width: 478px) {
  #brxe-btgyiy {align-self: center; flex-grow: 0; flex-shrink: 1}
}
@media (max-width: 478px) {
  #brxe-wveqlc {font-size: 1.1em}
}
@media (max-width: 478px) {
  #brxe-fctvvn {font-size: 1.1em}
}
@media (max-width: 478px) {
  #brxe-ecocui {font-size: 1.1em}
}
@media (max-width: 478px) {
  #brxe-cdtaqp {font-size: 1.1em}
}
@media (max-width: 478px) {
  #brxe-mebnhe {font-size: 1.1em}
}
@media (max-width: 478px) {
  #brxe-gelmsf {font-size: 1.1em}
}
@media (max-width: 478px) {
  #brxe-vvjqty {align-items: flex-start; gap: 12px; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-bimkof {font-size: 0.9em}
}
@media (max-width: 478px) {
  #brxe-kuates {font-size: 0.9em}
}
@media (max-width: 478px) {
  #brxe-hguucb {font-size: 0.9em}
}
@media (max-width: 478px) {
  #brxe-qwdtvr {font-size: 0.9em}
}
@media (max-width: 478px) {
  #brxe-oapqzl {align-items: center; flex-direction: column}
}
@media (max-width: 478px) {
  #brxe-ydoymy {align-self: flex-start !important; justify-content: flex-start; align-items: center}
}
@media (max-width: 478px) {
  #brxe-ohnarn {height: auto}
}
@media (max-width: 478px) {
  .nb-gooey-nav--horizontal {flex-direction: column;}
  .nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {margin-top: calc(-1 * var(--gooey-merge-distance)); margin-bottom: calc(-1 * var(--gooey-merge-distance));}
  .nb-gooey-nav--vertical {flex-direction: row;}
  .nb-gooey-nav--vertical .nb-gooey-nav__item:hover {margin-left: calc(-1 * var(--gooey-merge-distance)); margin-right: calc(-1 * var(--gooey-merge-distance));}
}
```
