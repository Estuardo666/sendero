import re,os,glob
D='docs/research/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2'
H=open(os.path.join(D,'source.html'),encoding='utf-8').read()
CSS=open(os.path.join(D,'inline.css'),encoding='utf-8').read()
for f in ['next_gooey_nav.css','next_image_accordion.css','bc_swap_title.css','bc_flipbox.css',
          'bc_image_reveal.css','bc_blur_reveal.css','next_arrow_button_v2.css','bc_offcanvas_menu.css','style.css']:
    p=os.path.join(D,'css',f)
    if os.path.exists(p): CSS+='\n/* '+f+' */\n'+open(p,encoding='utf-8').read()

MEDIA_RE=r'@media[^{]+\{(?:[^{}]|\{[^{}]*\})*\}'
BASE=re.sub(MEDIA_RE,'',CSS)
MEDIA=re.findall(r'(@media[^{]+)\{((?:[^{}]|\{[^{}]*\})*)\}',CSS)

SECTIONS={'header':('header','id','brx-header'),'footer':('footer','id','brx-footer'),
 '01-hero':('section','id','brxe-ywfgdp'),'02-filosofia':('section','id','brxe-icgmlu'),
 '03-oferta':('section','id','brxe-cghplz'),'04-experiencia':('section','id','brxe-hrltlt'),
 '05-noticias':('section','id','brxe-rvrhil'),'06-podcast':('section','id','brxe-fanklf'),
 '07-cta':('section','id','brxe-lwijqv')}

out=os.path.join(D,'mobile'); os.makedirs(out,exist_ok=True)
for key,(tag,attr,val) in SECTIONS.items():
    m=re.search(r'<%s[^>]*%s=[\'"]%s[\'"].*?</%s>'%(tag,attr,val,tag),H,re.S)
    mk=m.group(0)
    ids=set(re.findall(r'id="(brxe-[a-z0-9]+)"',mk))
    cls=set(c for a in re.findall(r'class="([^"]*)"',mk) for c in a.split() if c.startswith(('bc-','nb-','next-','brxe-')))
    keys=ids|cls
    def sel_match(sel): return any(k in sel for k in keys)

    base=[s.strip()+' {'+b.strip()+'}' for s,b in re.findall(r'([^{}]+)\{([^{}]*)\}',BASE) if sel_match(s)]
    mob=[]
    for q,body in MEDIA:
        inner=[s.strip()+' {'+b.strip()+'}' for s,b in re.findall(r'([^{}]+)\{([^{}]*)\}',body) if sel_match(s)]
        if inner: mob.append((q.strip(),inner))

    # flag: mobile declarations that DIFFER from the winning base value
    with open(os.path.join(out,key+'.md'),'w',encoding='utf-8') as f:
        f.write('# %s — clean base vs mobile CSS\n\n'%key)
        f.write('## BASE (desktop, media queries stripped) — %d rules\n```css\n%s\n```\n\n'%(len(base),'\n'.join(base)))
        f.write('## MOBILE @media (max-width: 478px) — the ONLY breakpoint\n```css\n')
        for q,inner in mob: f.write('%s {\n  %s\n}\n'%(q,'\n  '.join(inner)))
        f.write('```\n')
    print(key,'base=',len(base),'mobileblocks=',len(mob))
