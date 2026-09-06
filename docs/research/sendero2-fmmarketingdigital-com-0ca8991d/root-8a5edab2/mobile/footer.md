# footer — clean base vs mobile CSS

## BASE (desktop, media queries stripped) — 35 rules
```css
.brxe-container {width: 1260px}
#brxe-vvjqty {place-items: center!important;}
#brxe-mzqpmk .nb-gooey-nav__item {padding-top: 7px; padding-right: 14px; padding-bottom: 7px; padding-left: 14px; border-radius: 12px; font-size: 0.9em; font-weight: 600; color: var(--bricks-color-qwcrwu)}
#brxe-qxzqgo .nb-gooey-nav__item {padding-top: 5px; padding-right: 14px; padding-bottom: 5px; padding-left: 14px; background: var(--bricks-color-tmzgyd); border-radius: 12px; font-size: 0.9em; font-weight: 600; color: #ffffff}
#brxe-qxzqgo .nb-gooey-nav__item:hover {background: #00707a}
#brxe-pbdegl .nb-gooey-nav__item {padding-top: 7px; padding-right: 14px; padding-bottom: 7px; padding-left: 14px; border-radius: 12px; font-size: 0.9em; font-weight: 600; color: var(--bricks-color-qwcrwu)}
#brxe-btgyiy:not(.tag), #brxe-btgyiy img {object-fit: contain}
#brxe-btgyiy {margin-bottom: 29px; width: 170px}
#brxe-telkff {margin-bottom: 1em; color: var(--bricks-color-vvsbjv); font-size: 1em; font-weight: 600; background-color: #007a85; border-radius: 1em; color: var(--bricks-color-feb49f)}
#brxe-telkff:not(:has(> a)), #brxe-telkff > a {padding-top: 4px; padding-right: 20px; padding-bottom: 4px; padding-left: 20px}
#brxe-wqtwjz li.has-link a, #brxe-wqtwjz li.no-link {padding-top: 6px; padding-right: 0; padding-bottom: 6px; padding-left: 0; color: #ffffff; align-items: center; justify-content: center; width: 42px}
#brxe-wqtwjz .icon {color: var(--bricks-color-tmzgyd); font-size: 18px}
#brxe-wqtwjz svg {height: 18px; width: auto}
#brxe-wqtwjz li {border-radius: 31px; margin-bottom: 26px; background-color: var(--bricks-color-feb49f)}
#brxe-wqtwjz {gap: 8px; flex-direction: row}
#brxe-vvjqty {padding-right: 20px; padding-left: 20px; gap: 12px; --gooey-merge-distance: 20px; --gooey-duration: 0.5s; --gooey-ease: ease; flex-shrink: 1; z-index: 333; align-self: center; justify-content: center; align-items: center; text-align: center}
#brxe-vvjqty .nb-gooey-nav__item {padding-top: 5px; padding-right: 14px; padding-bottom: 5px; padding-left: 14px; background: var(--bricks-color-93a8da); border-radius: 12px; font-size: 0.8em; font-weight: 600; color: var(--bricks-color-otnukj); text-align: center}
#brxe-oapqzl {padding-right: 20px; padding-left: 20px; gap: 12px; --gooey-merge-distance: 20px; --gooey-duration: 0.5s; --gooey-ease: ease; flex-shrink: 1; z-index: 333; align-self: center; justify-content: center; align-items: center; text-align: center; margin-top: 1em}
#brxe-oapqzl .nb-gooey-nav__item {padding-top: 5px; padding-right: 14px; padding-bottom: 5px; padding-left: 14px; background: var(--bricks-color-feb49f); border-radius: 12px; font-size: 1em; font-weight: 600; color: var(--bricks-color-otnukj); text-align: center}
#brxe-ydoymy {align-self: center !important; justify-content: center; align-items: center; padding-top: 62px; flex-wrap: wrap}
#brxe-ohnarn {padding-bottom: 3em; background-image: url(https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/01/Artboard-9-100-1-scaled.jpg); background-position: center center; background-size: contain}
#brxe-uflrab {color: var(--bricks-color-feb49f); font-weight: 500; font-size: 0.9em}
#brxe-dhaxsw {width: 100vw; height: 30px; flex-direction: column; padding-top: 0; padding-bottom: 0; max-height: 30px; background-color: #007580; justify-content: center; align-self: center !important; align-items: center}
#brx-header.sticky.scrolling:not(.slide-up) > .brxe-section,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-container,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-block,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-div {box-shadow: var(--bricks-color-93a8da)}
/* ==== */


/* next_gooey_nav.css */
/*
* Gooey Nav
*/
.nb-gooey-nav {filter: url("#nb-gooey-nav__filter");
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;}
.nb-gooey-nav svg {display: none;}
.nb-gooey-nav__item {position: relative;

    white-space: nowrap;
    width: fit-content;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    cursor: pointer;
    
    transition: margin var(--gooey-duration) var(--gooey-ease);}
.nb-gooey-nav--horizontal {flex-direction: row;}
.nb-gooey-nav--vertical {flex-direction: column;}
.nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {margin-left: calc(-1 * var(--gooey-merge-distance));
    margin-right: calc(-1 * var(--gooey-merge-distance));}
.nb-gooey-nav--vertical .nb-gooey-nav__item:hover {margin-top: calc(-1 * var(--gooey-merge-distance));
    margin-bottom: calc(-1 * var(--gooey-merge-distance));}
/* bc_blur_reveal.css */
/*
* Blur reveal
*/
.next-blur-reveal__anchor {display: block;
    width: fit-content;
    height: fit-content;}
.next-blur-reveal {display: block;
    width: fit-content;}
.next-blur-reveal__inner {display: block;}
.next-blur-reveal__inner--to-hide {opacity: 0;}
```

## MOBILE @media (max-width: 478px) — the ONLY breakpoint
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
