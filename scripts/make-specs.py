import re,os,glob
D='docs/research/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2'
SPEC=os.path.join(D,'components'); os.makedirs(SPEC,exist_ok=True)
IMG='/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images'
CDIR='src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2'
have={f for f in os.listdir('public'+IMG)}

META={
 'header':('SiteHeader','sticky overlay, hover-driven (gooey nav, swap-title) + click-driven off-canvas menu on mobile'),
 '01-hero':('HeroSection','static layout + background video + scroll-in letter-launcher heading'),
 '02-filosofia':('FilosofiaSection','scroll-driven letter-launcher + blur-reveal, autoplay video panel'),
 '03-oferta':('OfertaSection','HOVER-driven image accordion (6 items, flex-grow on hover) + background video'),
 '04-experiencia':('ExperienciaSection','hover-driven flipbox cards + image-reveal, horizontal card row'),
 '05-noticias':('NoticiasSection','static news card grid on amber background, scroll-in reveals'),
 '06-podcast':('PodcastSection','static episode list on teal background, scroll-in reveals'),
 '07-cta':('CtaSection','static CTA with letter-launcher heading + arrow button'),
 'footer':('SiteFooter','static footer, link hover states'),
}

def resolve(name):
    if name in have: return name
    b=re.sub(r'-\d+x\d+(?=\.)','',name)
    if b in have: return b
    stem,ext=os.path.splitext(b)
    for cand in (stem+'-scaled'+ext, stem.replace('-scaled','')+ext):
        if cand in have: return cand
    return None

for f in sorted(glob.glob(os.path.join(D,'extract','*.md'))):
    key=os.path.basename(f)[:-3]
    comp,model=META[key]
    s=open(f,encoding='utf-8').read()
    mk=re.search(r'## MARKUP\n```html\n(.*?)\n```',s,re.S).group(1)
    assets=sorted({x.split('/')[-1] for x in re.findall(r'/wp-content/uploads/[^"\' >]+',mk)})
    lines=[]
    for a in assets:
        r=resolve(a)
        lines.append('- `%s` -> `%s/%s`%s'%(a, IMG, r, '' if r else '  **MISSING**'))
    hdr = f"""# {comp} Specification

## Overview
- **Target file:** `{CDIR}/{comp}.tsx`
- **Source section:** `{key}` of https://sendero2.fmmarketingdigital.com/
- **Interaction model:** {model}
- **Screenshots:** `docs/design-references/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/`

## Assets (use these local paths; originals already downloaded)
{chr(10).join(lines) if lines else '- None'}

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

"""
    open(os.path.join(SPEC,comp+'.spec.md'),'w',encoding='utf-8').write(hdr+s)
    print(comp,'assets_ok=',all(resolve(a) for a in assets))
