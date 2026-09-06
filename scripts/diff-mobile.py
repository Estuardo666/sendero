import re,os
D='docs/research/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/mobile'
def decls(body):
    d={}
    for part in body.split(';'):
        if ':' not in part: continue
        k,v=part.split(':',1)
        d[k.strip()]=v.strip()          # later wins
    return d

for key in ['header','01-hero','02-filosofia','03-oferta','04-experiencia','05-noticias','06-podcast','07-cta','footer']:
    s=open(os.path.join(D,key+'.md'),encoding='utf-8').read()
    basetxt=s.split('## BASE')[1].split('## MOBILE')[0]
    mobtxt=s.split('## MOBILE')[1]
    base={}
    for sel,body in re.findall(r'([^{}\n]+)\{([^{}]*)\}',basetxt):
        sel=sel.strip()
        if sel.startswith(('@','```')) or not sel: continue
        base.setdefault(sel,{}).update(decls(body))
    mob={}
    for sel,body in re.findall(r'([^{}\n]+)\{([^{}]*)\}',mobtxt):
        sel=sel.strip()
        if sel.startswith(('@','```')) or not sel: continue
        mob.setdefault(sel,{}).update(decls(body))
    diffs=[]
    for sel,d in mob.items():
        b=base.get(sel,{})
        for k,v in d.items():
            if b.get(k)!=v:
                diffs.append((sel,k,b.get(k,'<unset>'),v))
    print('###',key,'— real mobile changes:',len(diffs))
    for sel,k,bv,mv in diffs:
        print('   %-46s %-18s %s  ->  %s'%(sel[:46],k,bv[:34],mv[:44]))
    print()
