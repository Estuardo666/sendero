# PodcastSection Specification

## Overview
- **Target file:** `src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/PodcastSection.tsx`
- **Source section:** `06-podcast` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** static episode list on teal background, scroll-in reveals
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

# 06-podcast

## MARKUP
```html
<section id="brxe-fanklf" class="brxe-section bricks-lazy-hidden"><div id="brxe-usebez" class="brxe-container bricks-lazy-hidden"><div id="brxe-skyjvh" class="brxe-container bricks-lazy-hidden"><h3 id="brxe-uikgac" data-script-id="uikgac" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Podcast</span></h3><h2 id="brxe-savney" data-script-id="savney" class="brxe-letter-launcher bc-letter-launcher"><span class="bc-letter-launcher__inner bc-letter-launcher__inner--to-hide" data-start="top bottom" data-end="unset" data-duration="0.3" data-delayvar="0.2" data-staggervar="0.05" data-letterrotation="-30" data-letteraltitude="20" data-trigger="this" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Sendero al Aire 🎙️</span></h2></div><div id="brxe-kbdlws" class="brxe-container bricks-lazy-hidden"><section id="brxe-nyuxfm" class="brxe-section bricks-lazy-hidden"><div id="brxe-ynvwto" class="brxe-container bricks-lazy-hidden"><div id="brxe-zprqzk" class="brxe-block bricks-lazy-hidden"><h3 id="brxe-hailpb" data-script-id="hailpb" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Episodio #5</span></h3><h3 id="brxe-juvszu" class="brxe-heading">Educación sin barreras</h3><div id="brxe-jdanqx" data-script-id="jdanqx" class="brxe-video"><div allowfullscreen allow="autoplay" tabindex="-1" data-iframe-src="https://www.youtube.com/embed/x84eyL2eaNU?wmode=opaque&#038;rel=0&#038;enablejsapi=1" class="bricks-video-preview-image bricks-lazy-hidden" data-style="background-image: url(https://img.youtube.com/vi/x84eyL2eaNU/hqdefault.jpg);"></div><div class="bricks-lazy-hidden bricks-video-overlay" ></div><i class="fas fa-circle-play bricks-video-overlay-icon" tabindex="0"></i></div></div></div><div id="brxe-udxxyr" class="brxe-container bricks-lazy-hidden"><div id="brxe-wuvyhy" class="brxe-block bricks-lazy-hidden"><h3 id="brxe-feaspm" data-script-id="feaspm" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Episodio #4</span></h3><h3 id="brxe-xgyuor" class="brxe-heading">Sowing and caring with love</h3><div id="brxe-ouikee" data-script-id="ouikee" class="brxe-video"><div allowfullscreen allow="autoplay" tabindex="-1" data-iframe-src="https://www.youtube.com/embed/obxX5Ru6qIg?wmode=opaque&#038;rel=0&#038;enablejsapi=1" class="bricks-video-preview-image bricks-lazy-hidden" data-style="background-image: url(https://img.youtube.com/vi/obxX5Ru6qIg/hqdefault.jpg);"></div><div class="bricks-lazy-hidden bricks-video-overlay" ></div><i class="fas fa-circle-play bricks-video-overlay-icon" tabindex="0"></i></div></div></div><div id="brxe-csknpl" class="brxe-container bricks-lazy-hidden"><div id="brxe-wwxwtf" class="brxe-block bricks-lazy-hidden"><h3 id="brxe-witetv" data-script-id="witetv" class="brxe-next_blur_reveal next-blur-reveal"><span class="next-blur-reveal__inner next-blur-reveal__inner--to-hide" data-blur-from="10px" data-translate-from="0px" data-skew-from="0deg" data-start="top bottom" data-end="unset" data-duration="0.6" data-delay="0.2" data-trigger="this" data-ease="power1" data-type="chars" data-stagger="0.05" data-scrub="false" data-toggleActions="play none none none" data-disable-builder="0" data-animationType data-remove-scroll="0" data-classTriggerClick="0" data-classTriggerHover="0">Episodio #3</span></h3><h3 id="brxe-skdkdg" class="brxe-heading">El desafío de confiar</h3><div id="brxe-xszphp" data-script-id="xszphp" class="brxe-video"><div allowfullscreen allow="autoplay" tabindex="-1" data-iframe-src="https://www.youtube.com/embed/yuWAZM_hBow?wmode=opaque&#038;rel=0&#038;enablejsapi=1" class="bricks-video-preview-image bricks-lazy-hidden" data-style="background-image: url(https://img.youtube.com/vi/yuWAZM_hBow/hqdefault.jpg);"></div><div class="bricks-lazy-hidden bricks-video-overlay" ></div><i class="fas fa-circle-play bricks-video-overlay-icon" tabindex="0"></i></div></div></div></section>
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
#brxe-yyoygv .bc-letter-launcher__inner {
  color: var(--bricks-color-vvsbjv);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-auibpk .bc-letter-launcher__inner {
  color: var(--bricks-color-vvsbjv);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-fmbuyr .bc-letter-launcher__inner {
  color: var(--bricks-color-tmzgyd);  line-height: 50px;  font-size: 1.4em;  font-family: "Google Sans Flex"
}
#brxe-fpilzg .bc-letter-launcher__inner {
  font-family: "Google Sans Flex";  color: var(--bricks-color-vvsbjv);  line-height: 60px;  font-size: 1.75em
}
#brxe-uikgac {
  font-weight: 600;  color: var(--bricks-color-otnukj);  font-size: 1.1em;  margin-bottom: 1em;  background-color: var(--bricks-color-93a8da);  border-radius: 1em
}
#brxe-uikgac:not(:has(> a)), #brxe-uikgac > a {
  padding-top: 1px;  padding-right: 10px;  padding-bottom: 2px;  padding-left: 10px
}
#brxe-savney .bc-letter-launcher__inner {
  letter-spacing: -1px;  color: var(--bricks-color-feb49f);  font-weight: 800;  line-height: 50px;  font-size: 1.4em
}
#brxe-savney {
  text-align: left;  font-family: "Google Sans Flex";  font-weight: 400;  letter-spacing: 5px;  color: var(--bricks-color-feb49f)
}
#brxe-savney {
  text-align: center;  font-size: 1.9em;  font-family: "Google Sans Flex"
}
#brxe-skyjvh {
  padding-bottom: 20px;  align-self: center !important;  justify-content: center;  align-items: center
}
#brxe-hailpb {
  color: var(--bricks-color-vvsbjv);  font-size: 1em;  font-weight: 600;  margin-bottom: 1em;  background-color: rgba(255, 193, 7, 0.28);  border-radius: 1em
}
#brxe-hailpb:not(:has(> a)), #brxe-hailpb > a {
  padding-top: 2px;  padding-right: 15px;  padding-bottom: 3px;  padding-left: 15px
}
#brxe-hailpb {
  backdrop-filter: blur(20px);
}
#brxe-juvszu {
  text-align: left;  letter-spacing: 0px;  color: var(--bricks-color-otnukj);  font-size: 1.5em;  margin-top: 0;  margin-bottom: 10px
}
#brxe-juvszu {
  text-align: center;  font-size: 1.6em;  font-family: "Google Sans Flex";  line-height: 1em
}
#brxe-jdanqx {
  border-radius: 1em
}
#brxe-jdanqx {
  height: 222px
}
#brxe-zprqzk {
  padding-top: 0.5em;  padding-right: 0.5em;  padding-bottom: 0.5em;  padding-left: 0.5em;  background-color: var(--bricks-color-feb49f);  border-radius: 1.3em;  flex-wrap: wrap
}
#brxe-ynvwto {
  flex-wrap: wrap;  flex-direction: row;  width: 32%;  align-items: stretch;  align-self: center !important
}
#brxe-ynvwto {
  width: 45%;  justify-content: space-around;  align-items: stretch;  align-self: stretch !important;  width: 100%
}
#brxe-feaspm {
  color: var(--bricks-color-vvsbjv);  font-size: 1em;  font-weight: 600;  margin-bottom: 1em;  background-color: rgba(255, 193, 7, 0.28);  border-radius: 1em
}
#brxe-feaspm:not(:has(> a)), #brxe-feaspm > a {
  padding-top: 2px;  padding-right: 15px;  padding-bottom: 3px;  padding-left: 15px
}
#brxe-feaspm {
  backdrop-filter: blur(20px);
}
#brxe-xgyuor {
  text-align: left;  letter-spacing: 0px;  color: var(--bricks-color-otnukj);  font-size: 1.5em;  margin-top: 0;  margin-bottom: 10px
}
#brxe-xgyuor {
  text-align: center;  font-size: 1.6em;  font-family: "Google Sans Flex";  line-height: 1em
}
#brxe-ouikee {
  border-radius: 1em
}
#brxe-ouikee {
  height: 222px
}
#brxe-wuvyhy {
  padding-top: 0.5em;  padding-right: 0.5em;  padding-bottom: 0.5em;  padding-left: 0.5em;  background-color: var(--bricks-color-feb49f);  border-radius: 1.3em;  flex-wrap: wrap
}
#brxe-udxxyr {
  align-items: stretch;  align-self: center !important;  flex-direction: row;  flex-wrap: wrap;  width: 32%
}
#brxe-udxxyr {
  width: 45%;  justify-content: space-around;  align-items: stretch;  align-self: stretch !important;  width: 100%
}
#brxe-witetv {
  color: var(--bricks-color-vvsbjv);  font-size: 1em;  font-weight: 600;  margin-bottom: 1em;  background-color: rgba(255, 193, 7, 0.28);  border-radius: 1em
}
#brxe-witetv:not(:has(> a)), #brxe-witetv > a {
  padding-top: 2px;  padding-right: 15px;  padding-bottom: 3px;  padding-left: 15px
}
#brxe-witetv {
  backdrop-filter: blur(20px);
}
#brxe-skdkdg {
  text-align: left;  letter-spacing: 0px;  color: var(--bricks-color-otnukj);  font-size: 1.5em;  margin-top: 0;  margin-bottom: 10px
}
#brxe-skdkdg {
  text-align: center;  font-size: 1.6em;  font-family: "Google Sans Flex";  line-height: 1em
}
#brxe-xszphp {
  border-radius: 1em
}
#brxe-xszphp {
  height: 222px
}
#brxe-wwxwtf {
  padding-top: 0.5em;  padding-right: 0.5em;  padding-bottom: 0.5em;  padding-left: 0.5em;  background-color: var(--bricks-color-feb49f);  border-radius: 1.3em;  flex-wrap: wrap
}
#brxe-wwxwtf {
  line-height: 1em
}
#brxe-csknpl {
  flex-wrap: wrap;  flex-direction: row;  width: 32%;  align-items: stretch;  align-self: center !important
}
#brxe-csknpl {
  width: 45%;  justify-content: space-around;  align-items: stretch;  align-self: stretch !important;  width: 100%
}
#brxe-nyuxfm {
  flex-direction: row;  flex-wrap: wrap;  width: 1360px;  align-items: center;  column-gap: 1em;  row-gap: 2em
}
#brxe-nyuxfm {
  align-items: center;  justify-content: center;  align-self: center !important
}
#brxe-usebez {
  align-items: center;  flex-direction: column
}
#brxe-fanklf {
  background-color: var(--bricks-color-tmzgyd);  padding-top: 4em;  padding-bottom: 4em
}
#brxe-fanklf {
  flex-direction: column;  height: auto;  padding-top: 90px;  padding-right: 1em;  padding-bottom: 90px;  padding-left: 1em
}
#brxe-zoeiwv .bc-letter-launcher__inner {
  font-family: "Google Sans Flex";  color: #f5f5f5;  line-height: 60px;  font-size: 1.75em
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
.bc-letter-launcher__inner {
  letter-spacing: -2px !important;
}
```

## MEDIA QUERIES
```css
@media (max-width: 478px) {
  #brxe-savney {text-align: center; font-size: 1.9em; font-family: "Google Sans Flex"}
}
@media (max-width: 478px) {
  #brxe-juvszu {text-align: center; font-size: 1.6em; font-family: "Google Sans Flex"; line-height: 1em}
}
@media (max-width: 478px) {
  #brxe-jdanqx {height: 222px}
}
@media (max-width: 478px) {
  #brxe-ynvwto {width: 45%; justify-content: space-around; align-items: stretch; align-self: stretch !important; width: 100%}
}
@media (max-width: 478px) {
  #brxe-xgyuor {text-align: center; font-size: 1.6em; font-family: "Google Sans Flex"; line-height: 1em}
}
@media (max-width: 478px) {
  #brxe-ouikee {height: 222px}
}
@media (max-width: 478px) {
  #brxe-udxxyr {width: 45%; justify-content: space-around; align-items: stretch; align-self: stretch !important; width: 100%}
}
@media (max-width: 478px) {
  #brxe-skdkdg {text-align: center; font-size: 1.6em; font-family: "Google Sans Flex"; line-height: 1em}
}
@media (max-width: 478px) {
  #brxe-xszphp {height: 222px}
}
@media (max-width: 478px) {
  #brxe-wwxwtf {line-height: 1em}
}
@media (max-width: 478px) {
  #brxe-csknpl {width: 45%; justify-content: space-around; align-items: stretch; align-self: stretch !important; width: 100%}
}
@media (max-width: 478px) {
  #brxe-nyuxfm {align-items: center; justify-content: center; align-self: center !important}
}
@media (max-width: 478px) {
  #brxe-fanklf {flex-direction: column; height: auto; padding-top: 90px; padding-right: 1em; padding-bottom: 90px; padding-left: 1em}
}
```
