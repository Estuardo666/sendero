# 01-hero — clean base vs mobile CSS

## BASE (desktop, media queries stripped) — 130 rules
```css
.brxe-container {width: 1260px}
#brxe-wajdtr .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: #f5f5f5; line-height: 60px; font-size: 1.95em}
#brxe-wajdtr {text-align: center; line-height: 44PX; letter-spacing: 0px; text-shadow: 0 0 30px var(--bricks-color-otnukj)}
#brxe-wprjcn {color: #f5f5f5; text-align: center; font-weight: 600; font-size: 1.2em; line-height: 26px; margin-top: 16px}
#brxe-rxkiae {--padding-top: 2px; --padding-right: 2px; --padding-bottom: 2px; --padding-left: 25px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: #ffc107; color: #1c2728; margin-top: 25px; margin-bottom: 100px}
#brxe-rxkiae .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-rxkiae .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-rxkiae .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-rxkiae:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-rxkiae:hover {color: var(--bricks-color-vvsbjv)}
#brxe-rxkiae:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-yuirpz {align-self: center !important; justify-content: center; align-items: center; width: 666PX; padding-top: 445px}
#brxe-quotpt {flex-direction: row; justify-content: center; align-items: stretch; align-self: center !important}
#brxe-ywfgdp {height: 110vh; background-size: cover; background-position: center center; position: relative; align-self: stretch !important; width: 100%; justify-content: center; margin-top: -100px}
:where(#brxe-ywfgdp > *) {position: relative}
#brxe-ywfgdp::before {background-image: linear-gradient(217deg, rgba(28, 39, 40, 0), rgba(28, 39, 40, 0.44)); position: absolute; content: ""; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none}
#brxe-yyoygv .bc-letter-launcher__inner {color: var(--bricks-color-vvsbjv); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-iaohib .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-iaohib .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-iaohib .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-iaohib:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-iaohib:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-auibpk .bc-letter-launcher__inner {color: var(--bricks-color-vvsbjv); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-vyqinx .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-98a79f); text-align: center}
#brxe-vyqinx .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-vyqinx .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-vyqinx:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-vyqinx:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-fehoaj .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-fehoaj .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-fehoaj .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-fehoaj:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-fehoaj:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-zzjyck .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-zzjyck .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-zzjyck .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-zzjyck:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-zzjyck:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-tnyarp .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-tnyarp .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-tnyarp .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-tnyarp:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-tnyarp:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-zkgotu .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-zkgotu .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-zkgotu .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-zkgotu:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-zkgotu:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-dxkryv .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-dxkryv .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-dxkryv .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-dxkryv:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-dxkryv:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-znqnli .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-znqnli .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-znqnli .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-znqnli:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-znqnli:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-ksqavu .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-ksqavu .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-ksqavu .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-ksqavu:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-ksqavu:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-nnmmjd .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-nnmmjd .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-nnmmjd .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-nnmmjd:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-nnmmjd:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-jdhxov .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-jdhxov .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-jdhxov .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-jdhxov:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-jdhxov:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-tvrity .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-tvrity .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-tvrity .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-tvrity:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-tvrity:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-fvmwxg .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-fvmwxg .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-fvmwxg .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-fvmwxg:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-fvmwxg:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-fmbuyr .bc-letter-launcher__inner {color: var(--bricks-color-tmzgyd); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-vavwpn .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-vavwpn .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-vavwpn .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-vavwpn:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-vavwpn:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-tbpnny .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-tbpnny .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-tbpnny .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-tbpnny:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-tbpnny:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-rylmls .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-rylmls .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-rylmls .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-rylmls:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-rylmls:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-apajfx .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-apajfx .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-apajfx .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-apajfx:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-apajfx:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-fpilzg .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: var(--bricks-color-vvsbjv); line-height: 60px; font-size: 1.75em}
#brxe-savney .bc-letter-launcher__inner {letter-spacing: -1px; color: var(--bricks-color-feb49f); font-weight: 800; line-height: 50px; font-size: 1.4em}
#brxe-eixxls .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-eixxls .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-eixxls .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-eixxls:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-eixxls:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-zoeiwv .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: #f5f5f5; line-height: 60px; font-size: 1.75em}
#brxe-ohdzyw .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-ohdzyw .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-ohdzyw .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-ohdzyw:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-ohdzyw:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brx-header.sticky.scrolling:not(.slide-up) > .brxe-section,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-container,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-block,#brx-header.sticky.scrolling:not(.slide-up) > .brxe-div {box-shadow: var(--bricks-color-93a8da)}
/* next_arrow_button_v2.css */
/*
* Arrow Button v2
*/
.nb-arrow-button-v2 {--height: calc(var(--dimensions) + var(--padding-top) + var(--padding-bottom));

    padding-left: var(--padding-left);
    padding-right: calc(var(--gap) + var(--dimensions));

    height: var(--height);

    display: flex;
    align-items: center;
    width: fit-content;

    cursor: pointer;
    position: relative;
    z-index: 0;}
.nb-arrow-button-v2 svg {min-width: unset;
    min-height: unset;

    width: var(--dimensions);
    height: var(--dimensions);}
.nb-arrow-button-v2[data-direction="left"] {padding-right: var(--padding-right);
    padding-left: calc(var(--gap) + var(--dimensions));}
.nb-arrow-button-v2__arrow-wrapper {width: var(--dimensions);
    height: var(--dimensions);
    transition: width var(--duration) var(--ease);

    display: flex;
    align-items: center;

    position: absolute;
    z-index: -1;
    right: var(--padding-right);}
.nb-arrow-button-v2[data-direction="left"] .nb-arrow-button-v2__arrow-wrapper {left: var(--padding-left);
    right: auto;}
.nb-arrow-button-v2__arrow-container {position: absolute;
    right: 0;

    width: var(--dimensions);
    height: var(--dimensions);}
.nb-arrow-button-v2[data-direction="left"] .nb-arrow-button-v2__arrow-container {left: 0;
    right: auto;}
.nb-arrow-button-v2__arrow {transform: rotate(var(--arrow-default-rotation));
    transition: transform var(--duration) var(--ease);

    stroke: var(--stroke);
    fill: var(--stroke);}
.nb-arrow-button-v2:hover .nb-arrow-button-v2__arrow-wrapper {width: calc(100% - var(--padding-right) * 2);}
.nb-arrow-button-v2[data-direction="left"]:hover .nb-arrow-button-v2__arrow-wrapper {width: calc(100% - var(--padding-left) * 2);}
.nb-arrow-button-v2:hover .nb-arrow-button-v2__arrow {transform: rotate(var(--arrow-rotation));}
.bc-letter-launcher__inner {letter-spacing: -2px !important;}
```

## MOBILE @media (max-width: 478px) — the ONLY breakpoint
```css
@media (max-width: 478px) {
  #brxe-wajdtr {font-size: 1.5em; line-height: 0.8em; font-weight: 900; letter-spacing: -1px; text-shadow: 0 0 0 var(--bricks-color-otnukj); border-width: 2px; border-color: #ffffff; margin-top: 150px}
}
@media (max-width: 478px) {
  #brxe-wprjcn {font-size: 1em; text-shadow: 0 0 17px var(--bricks-color-otnukj)}
}
@media (max-width: 478px) {
  #brxe-rxkiae {margin-bottom: 0}
}
@media (max-width: 478px) {
  #brxe-yuirpz {padding-top: 0; width: 100%}
}
@media (max-width: 478px) {
  #brxe-quotpt {padding-right: 1em; padding-left: 1em}
}
@media (max-width: 478px) {
  #brxe-ywfgdp {padding-top: 18em; padding-bottom: 3em; height: 95vh}
}
```
