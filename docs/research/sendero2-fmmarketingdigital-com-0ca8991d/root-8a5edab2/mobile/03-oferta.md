# 03-oferta — clean base vs mobile CSS

## BASE (desktop, media queries stripped) — 196 rules
```css
.brxe-container {width: 1260px}
#brxe-axagmd .next-image-accordion__content {backdrop-filter: blur(15px);}
#brxe-wajdtr .bc-letter-launcher__inner {font-family: "Google Sans Flex"; color: #f5f5f5; line-height: 60px; font-size: 1.95em}
#brxe-rxkiae .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-rxkiae .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-rxkiae .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-rxkiae:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-rxkiae:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-yyoygv .bc-letter-launcher__inner {color: var(--bricks-color-vvsbjv); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-iaohib .nb-arrow-button-v2__text {font-size: 16px; font-weight: 500; color: var(--bricks-color-otnukj)}
#brxe-iaohib .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-iaohib .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-iaohib:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-iaohib:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-lrappr {margin-bottom: 1em; color: var(--bricks-color-vvsbjv); font-size: 1.1em; font-weight: 600; background-color: rgba(255, 193, 7, 0.28); border-radius: 1em}
#brxe-lrappr:not(:has(> a)), #brxe-lrappr > a {padding-top: 2px; padding-right: 15px; padding-bottom: 3px; padding-left: 15px}
#brxe-auibpk .bc-letter-launcher__inner {color: var(--bricks-color-vvsbjv); line-height: 50px; font-size: 1.4em; font-family: "Google Sans Flex"}
#brxe-auibpk {text-align: left; line-height: 44PX; letter-spacing: 0px}
#brxe-cvxnxj {align-self: center !important; justify-content: center; align-items: center; padding-bottom: 20px}
#brxe-lmorob {flex-direction: row}
#brxe-iipjuc {line-height: 44PX; letter-spacing: 0px; text-align: center; font-size: 3em; color: var(--bricks-color-tmzgyd); font-family: "Google Sans Flex"; margin-top: 50px; margin-bottom: 20px}
#brxe-vyqinx {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 10px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-93a8da); color: #1c2728; margin-top: 0; margin-bottom: 1em; padding-right: 60px}
#brxe-vyqinx .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-98a79f); text-align: center}
#brxe-vyqinx .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-vyqinx .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-vyqinx:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-vyqinx:hover {color: var(--bricks-color-vvsbjv)}
#brxe-vyqinx:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-fehoaj {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-vvsbjv); color: #1c2728; margin-right: 3px; margin-bottom: 1em; margin-left: 20px}
#brxe-fehoaj .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-fehoaj .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-fehoaj .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-fehoaj:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-fehoaj:hover {color: var(--bricks-color-vvsbjv)}
#brxe-fehoaj:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-mfasco {flex-direction: row}
#brxe-eyhsuq {border-radius: 2em; align-items: center}
#brxe-lwfvvc {border-radius: 2em; overflow: hidden}
#brxe-mqpyqy {line-height: 44PX; letter-spacing: 0px; text-align: center; font-size: 3em; color: var(--bricks-color-tmzgyd); font-family: "Google Sans Flex"; margin-top: 50px; margin-bottom: 20px}
#brxe-zzjyck {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-93a8da); color: #1c2728; margin-top: 0em; margin-bottom: 1em}
#brxe-zzjyck .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-zzjyck .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-zzjyck .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-zzjyck:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-zzjyck:hover {color: var(--bricks-color-vvsbjv)}
#brxe-zzjyck:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-tnyarp {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-vvsbjv); color: #1c2728; margin-bottom: 1em; margin-left: 20px}
#brxe-tnyarp .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-tnyarp .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-tnyarp .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-tnyarp:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-tnyarp:hover {color: var(--bricks-color-vvsbjv)}
#brxe-tnyarp:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-padvyl {flex-direction: row}
#brxe-juglpu {border-radius: 2em; align-items: center}
#brxe-ffeadr {border-radius: 2em; overflow: hidden}
#brxe-elolyz {line-height: 44PX; letter-spacing: 0px; text-align: center; font-size: 3em; color: var(--bricks-color-tmzgyd); font-family: "Google Sans Flex"; margin-top: 50px; margin-bottom: 20px}
#brxe-zkgotu {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-93a8da); color: #1c2728; margin-top: 0em; margin-bottom: 1em}
#brxe-zkgotu .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-zkgotu .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-zkgotu .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-zkgotu:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-zkgotu:hover {color: var(--bricks-color-vvsbjv)}
#brxe-zkgotu:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-dxkryv {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-vvsbjv); color: #1c2728; margin-bottom: 1em; margin-left: 20px}
#brxe-dxkryv .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-dxkryv .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-dxkryv .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-dxkryv:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-dxkryv:hover {color: var(--bricks-color-vvsbjv)}
#brxe-dxkryv:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-xbltag {flex-direction: row}
#brxe-rwtyiy {border-radius: 2em; align-items: center}
#brxe-jymgcu {border-radius: 2em; overflow: hidden}
#brxe-ygniry {line-height: 44PX; letter-spacing: 0px; text-align: center; font-size: 3em; color: var(--bricks-color-tmzgyd); font-family: "Google Sans Flex"; margin-top: 50px; margin-bottom: 20px}
#brxe-znqnli {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-93a8da); color: #1c2728; margin-top: 0em; margin-bottom: 1em}
#brxe-znqnli .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-znqnli .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-znqnli .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-znqnli:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-znqnli:hover {color: var(--bricks-color-vvsbjv)}
#brxe-znqnli:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-ksqavu {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-vvsbjv); color: #1c2728; margin-bottom: 1em; margin-left: 20px}
#brxe-ksqavu .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-ksqavu .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-ksqavu .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-ksqavu:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-ksqavu:hover {color: var(--bricks-color-vvsbjv)}
#brxe-ksqavu:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-iygoam {flex-direction: row}
#brxe-vnylcu {border-radius: 2em; align-items: center}
#brxe-diyyhz {border-radius: 2em; overflow: hidden}
#brxe-yadxiq {line-height: 44PX; letter-spacing: 0px; text-align: center; font-size: 3em; color: var(--bricks-color-tmzgyd); font-family: "Google Sans Flex"; margin-top: 50px; margin-bottom: 20px}
#brxe-nnmmjd {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-93a8da); color: #1c2728; margin-top: 0em; margin-bottom: 1em}
#brxe-nnmmjd .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-nnmmjd .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-nnmmjd .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-nnmmjd:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-nnmmjd:hover {color: var(--bricks-color-vvsbjv)}
#brxe-nnmmjd:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-jdhxov {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-vvsbjv); color: #1c2728; margin-bottom: 1em; margin-left: 20px}
#brxe-jdhxov .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-jdhxov .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-jdhxov .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-jdhxov:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-jdhxov:hover {color: var(--bricks-color-vvsbjv)}
#brxe-jdhxov:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-danquv {flex-direction: row}
#brxe-cdgzbi {border-radius: 2em; align-items: center}
#brxe-ajxwjh {border-radius: 2em; overflow: hidden}
#brxe-rnkral {line-height: 44PX; letter-spacing: 0px; text-align: center; font-size: 3em; color: var(--bricks-color-tmzgyd); font-family: "Google Sans Flex"; margin-top: 50px; margin-bottom: 20px}
#brxe-tvrity {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-93a8da); color: #1c2728; margin-top: 0em; margin-bottom: 1em}
#brxe-tvrity .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-otnukj); text-align: center}
#brxe-tvrity .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-tvrity .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-tvrity:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-tvrity:hover {color: var(--bricks-color-vvsbjv)}
#brxe-tvrity:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-fvmwxg {--padding-top: 1px; --padding-right: 2px; --padding-bottom: 1px; --padding-left: 20px; border-radius: 100px; --gap: 20px; --dimensions: 40px; --arrow-rotation: -45deg; --duration: 0.6s; --ease: cubic-bezier(0.22, 1, 0.36, 1); background: var(--bricks-color-vvsbjv); color: #1c2728; margin-bottom: 1em; margin-left: 20px}
#brxe-fvmwxg .nb-arrow-button-v2__text {font-size: 0.9em; font-weight: 500; color: var(--bricks-color-qwcrwu); text-align: center}
#brxe-fvmwxg .nb-arrow-button-v2__arrow {padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; --arrow-default-rotation: 0deg; --stroke: #000}
#brxe-fvmwxg .nb-arrow-button-v2__arrow-wrapper {background: #fff; border-radius: 100px}
#brxe-fvmwxg:hover .nb-arrow-button-v2__text {color: var(--bricks-color-vvsbjv)}
#brxe-fvmwxg:hover {color: var(--bricks-color-vvsbjv)}
#brxe-fvmwxg:hover .nb-arrow-button-v2__arrow {--stroke: var(--bricks-color-93a8da)}
#brxe-ugmthr {flex-direction: row}
#brxe-zlsvss {border-radius: 2em; align-items: center}
#brxe-cackwy {border-radius: 2em; overflow: hidden}
#brxe-axagmd {width: 100%; height: 700px; border-radius: 2em; overflow: hidden; gap: 0.5em}
#brxe-axagmd .next-image-accordion__item {--scale: 1.1; --gray: 50%; --expanding-duration: 0.5s; --expanding-ease: ease}
#brxe-axagmd .next-image-accordion__content {padding-top: 20px; padding-right: 20px; padding-bottom: 60px; padding-left: 20px; left: 0px; bottom: 0px; background-color: rgba(0, 153, 165, 0.23); color: #fff; --fade-duration: 0.3s; --fade-ease: ease-out}
#brxe-axagmd .next-image-accordion__item:hover {flex: 2.2}
#brxe-lmvaxg {align-self: center !important; justify-content: center; align-items: center; width: 100%; flex-direction: row}
#brxe-ubgffq {flex-direction: row; border-radius: 2em; overflow: hidden; width: 90vw}
#brxe-cghplz {height: 100vh; background-color: #ffffff; position: relative; padding-top: 3em; padding-bottom: 3em; width: 100vw}
:where(#brxe-cghplz > *) {position: relative}
#brxe-cghplz::before {background-image: linear-gradient(rgba(255, 255, 255, 0.74), #0099a5); position: absolute; content: ""; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none}
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
/* next_image_accordion.css */
.next-image-accordion {display: flex;
    position: relative;
    overflow: hidden;}
.next-image-accordion__item {position: relative;
    flex: 1;
    transition: all var(--expanding-duration) var(--expanding-ease);
    overflow: hidden;}
.next-image-accordion__item:first-child {margin-left: 0;}
.next-image-accordion__item:last-child {margin-right: 0;}
.next-image-accordion__item img {width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all var(--expanding-duration) var(--expanding-ease);
    filter: grayscale(var(--gray));}
.next-image-accordion__item:hover img {transform: scale(var(--scale));
    filter: grayscale(0%);}
.next-image-accordion__content {position: absolute;

    opacity: 0;
    transition: opacity var(--fade-duration) var(--fade-ease);
    z-index: 1;}
.next-image-accordion__item:hover .next-image-accordion__content {opacity: 1;}
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
