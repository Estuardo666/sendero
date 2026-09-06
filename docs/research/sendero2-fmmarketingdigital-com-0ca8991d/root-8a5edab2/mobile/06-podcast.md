# 06-podcast — clean base vs mobile CSS

## BASE (desktop, media queries stripped) — 43 rules
```css
.brxe-container {width: 1260px}
.brxe-video .bricks-video-overlay-icon {color: var(--bricks-color-93a8da); font-size: 2em}
#brxe-wajdtr .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: #f5f5f5; line-height: 60px; font-size: 1.95em}
#brxe-yyoygv .bc-letter-launcher__inner {color: var(--bricks-color-vvsbjv); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-auibpk .bc-letter-launcher__inner {color: var(--bricks-color-vvsbjv); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-fmbuyr .bc-letter-launcher__inner {color: var(--bricks-color-tmzgyd); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-fpilzg .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: var(--bricks-color-vvsbjv); line-height: 60px; font-size: 1.75em}
#brxe-uikgac {font-weight: 600; color: var(--bricks-color-otnukj); font-size: 1.1em; margin-bottom: 1em; background-color: var(--bricks-color-93a8da); border-radius: 1em}
#brxe-uikgac:not(:has(> a)), #brxe-uikgac > a {padding-top: 1px; padding-right: 10px; padding-bottom: 2px; padding-left: 10px}
#brxe-savney .bc-letter-launcher__inner {letter-spacing: -1px; color: var(--bricks-color-feb49f); font-weight: 800; line-height: 50px; font-size: 1.4em}
#brxe-savney {text-align: left; font-family: "Google Sans Flex"; font-weight: 400; letter-spacing: 5px; color: var(--bricks-color-feb49f)}
#brxe-skyjvh {padding-bottom: 20px; align-self: center !important; justify-content: center; align-items: center}
#brxe-hailpb {color: var(--bricks-color-vvsbjv); font-size: 1em; font-weight: 600; margin-bottom: 1em; background-color: rgba(255, 193, 7, 0.28); border-radius: 1em}
#brxe-hailpb:not(:has(> a)), #brxe-hailpb > a {padding-top: 2px; padding-right: 15px; padding-bottom: 3px; padding-left: 15px}
#brxe-hailpb {backdrop-filter: blur(20px);}
#brxe-juvszu {text-align: left; letter-spacing: 0px; color: var(--bricks-color-otnukj); font-size: 1.5em; margin-top: 0; margin-bottom: 10px}
#brxe-jdanqx {border-radius: 1em}
#brxe-zprqzk {padding-top: 0.5em; padding-right: 0.5em; padding-bottom: 0.5em; padding-left: 0.5em; background-color: var(--bricks-color-feb49f); border-radius: 1.3em; flex-wrap: wrap}
#brxe-ynvwto {flex-wrap: wrap; flex-direction: row; width: 32%; align-items: stretch; align-self: center !important}
#brxe-feaspm {color: var(--bricks-color-vvsbjv); font-size: 1em; font-weight: 600; margin-bottom: 1em; background-color: rgba(255, 193, 7, 0.28); border-radius: 1em}
#brxe-feaspm:not(:has(> a)), #brxe-feaspm > a {padding-top: 2px; padding-right: 15px; padding-bottom: 3px; padding-left: 15px}
#brxe-feaspm {backdrop-filter: blur(20px);}
#brxe-xgyuor {text-align: left; letter-spacing: 0px; color: var(--bricks-color-otnukj); font-size: 1.5em; margin-top: 0; margin-bottom: 10px}
#brxe-ouikee {border-radius: 1em}
#brxe-wuvyhy {padding-top: 0.5em; padding-right: 0.5em; padding-bottom: 0.5em; padding-left: 0.5em; background-color: var(--bricks-color-feb49f); border-radius: 1.3em; flex-wrap: wrap}
#brxe-udxxyr {align-items: stretch; align-self: center !important; flex-direction: row; flex-wrap: wrap; width: 32%}
#brxe-witetv {color: var(--bricks-color-vvsbjv); font-size: 1em; font-weight: 600; margin-bottom: 1em; background-color: rgba(255, 193, 7, 0.28); border-radius: 1em}
#brxe-witetv:not(:has(> a)), #brxe-witetv > a {padding-top: 2px; padding-right: 15px; padding-bottom: 3px; padding-left: 15px}
#brxe-witetv {backdrop-filter: blur(20px);}
#brxe-skdkdg {text-align: left; letter-spacing: 0px; color: var(--bricks-color-otnukj); font-size: 1.5em; margin-top: 0; margin-bottom: 10px}
#brxe-xszphp {border-radius: 1em}
#brxe-wwxwtf {padding-top: 0.5em; padding-right: 0.5em; padding-bottom: 0.5em; padding-left: 0.5em; background-color: var(--bricks-color-feb49f); border-radius: 1.3em; flex-wrap: wrap}
#brxe-csknpl {flex-wrap: wrap; flex-direction: row; width: 32%; align-items: stretch; align-self: center !important}
#brxe-nyuxfm {flex-direction: row; flex-wrap: wrap; width: 1360px; align-items: center; column-gap: 1em; row-gap: 2em}
#brxe-usebez {align-items: center; flex-direction: column}
#brxe-fanklf {background-color: var(--bricks-color-tmzgyd); padding-top: 4em; padding-bottom: 4em}
#brxe-zoeiwv .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: #f5f5f5; line-height: 60px; font-size: 1.75em}
#brx-header.sticky.scrolling:not(.slide-up) > .brxe-section,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-container,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-block,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-div {box-shadow: var(--bricks-color-93a8da)}
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
.bc-letter-launcher__inner {letter-spacing: -2px !important;}
```

## MOBILE @media (max-width: 478px) — the ONLY breakpoint
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
