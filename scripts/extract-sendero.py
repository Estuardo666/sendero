import re,sys,os
D='docs/research/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2'
H=open(os.path.join(D,'source.html'),encoding='utf-8').read()
CSS=open(os.path.join(D,'inline.css'),encoding='utf-8').read()
for f in ['next_gooey_nav.css','next_image_accordion.css','bc_swap_title.css','bc_flipbox.css','bc_image_reveal.css','bc_blur_reveal.css','next_arrow_button_v2.css','bc_offcanvas_menu.css','style.css']:
    p=os.path.join(D,'css',f)
    if os.path.exists(p): CSS+='\n/* '+f+' */\n'+open(p,encoding='utf-8').read()

def markup(tag,attr,val):
    m=re.search(r'<%s[^>]*%s=[\'"]%s[\'"].*?</%s>'%(tag,attr,val,tag),H,re.S)
    return m.group(0) if m else None

def clean(s):
    s=re.sub(r'\sdata-rocket-location-hash="[^"]*"','',s)
    s=re.sub(r'\ssrc="data:image[^"]*"','',s)
    s=re.sub(r'\sdata-(srcset|sizes)="[^"]*"','',s)
    s=re.sub(r'https://sendero2\.fmmarketingdigital\.com','',s)
    s=re.sub(r'>\s+<','><',s)
    return s

def rules_for(ids):
    out=[]
    # split css into rules
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}',CSS):
        sel,body=m.group(1).strip(),m.group(2).strip()
        if any(i in sel for i in ids): out.append(sel+' {\n  '+body.replace(';','; ').strip()+'\n}')
    return out

def media_rules(ids):
    out=[]
    for m in re.finditer(r'(@media[^{]+)\{((?:[^{}]|\{[^{}]*\})*)\}',CSS):
        q,body=m.group(1).strip(),m.group(2)
        inner=[s.strip()+' {'+b.strip()+'}' for s,b in re.findall(r'([^{}]+)\{([^{}]*)\}',body) if any(i in s for i in ids)]
        if inner: out.append(q+' {\n  '+'\n  '.join(inner)+'\n}')
    return out

if __name__=='__main__':
    sel=sys.argv[1]; name=sys.argv[2]
    tag,attr,val=sel.split(',')
    mk=markup(tag,attr,val)
    if not mk: print('MARKUP NOT FOUND'); sys.exit(1)
    mk=clean(mk)
    ids=set(re.findall(r'id="(brxe-[a-z0-9]+)"',mk))
    cls=set(c for c in re.findall(r'class="([^"]*)"',mk) for c in c.split() if c.startswith(('bc-','nb-','next-','brxe-')))
    o=os.path.join(D,'extract',name+'.md')
    os.makedirs(os.path.dirname(o),exist_ok=True)
    with open(o,'w',encoding='utf-8') as f:
        f.write('# %s\n\n## MARKUP\n```html\n%s\n```\n\n## CSS RULES\n```css\n%s\n```\n\n## MEDIA QUERIES\n```css\n%s\n```\n'%(
            name,mk,'\n'.join(rules_for(ids|cls)),'\n'.join(media_rules(ids|cls))))
    print(o,'ids=',len(ids),'chars=',os.path.getsize(o))
