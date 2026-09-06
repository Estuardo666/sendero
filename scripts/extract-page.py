"""Generalised markup+CSS extractor for any cloned page namespace.

Usage: python scripts/extract-page.py <page-key> <tag,attr,value> <out-name>
Example: python scripts/extract-page.py quienes-somos-f2da167d section,id,brxe-ezitwk HeroSection
"""
import re, sys, os

SITE = 'docs/research/sendero2-fmmarketingdigital-com-0ca8991d'
SHARED_CSS_DIR = os.path.join(SITE, 'root-8a5edab2', 'css')


def load(page_key):
    d = os.path.join(SITE, page_key)
    html = open(os.path.join(d, 'source.html'), encoding='utf-8').read()
    css = open(os.path.join(d, 'inline.css'), encoding='utf-8').read()
    for folder in (SHARED_CSS_DIR, os.path.join(d, 'css')):
        if not os.path.isdir(folder):
            continue
        for f in sorted(os.listdir(folder)):
            if f.endswith('.css') and 'font-awesome' not in f:
                css += '\n/* %s */\n' % f + open(os.path.join(folder, f), encoding='utf-8').read()
    return d, html, css


VOID = {'img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'path', 'use'}


def markup(html, tag, attr, val):
    """Return the balanced outerHTML of the first <tag attr="val"> element."""
    m = re.search(r'<%s[^>]*%s=[\'"]%s[\'"][^>]*>' % (tag, attr, val), html)
    if not m:
        return None
    start = m.start()
    depth = 0
    for t in re.finditer(r'<(/?)([a-zA-Z0-9_-]+)([^>]*?)(/?)>', html[start:]):
        closing, name, attrs, selfclose = t.group(1), t.group(2).lower(), t.group(3), t.group(4)
        if name in VOID or selfclose == '/':
            continue
        if closing:
            depth -= 1
            if depth == 0:
                return html[start:start + t.end()]
        else:
            depth += 1
    return None


def clean(s):
    s = re.sub(r'\sdata-rocket-location-hash="[^"]*"', '', s)
    s = re.sub(r'\ssrc="data:image[^"]*"', '', s)
    s = re.sub(r'\sdata-(srcset|sizes|lazy-srcset|lazy-sizes)="[^"]*"', '', s)
    s = re.sub(r'https://sendero2\.fmmarketingdigital\.com', '', s)
    s = re.sub(r'>\s+<', '><', s)
    return s


def rules_for(css, ids):
    out = []
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', css):
        sel, body = m.group(1).strip(), m.group(2).strip()
        if any(i in sel for i in ids):
            out.append(sel + ' {\n  ' + body.replace(';', '; ').strip() + '\n}')
    return out


def media_rules(css, ids):
    out = []
    for m in re.finditer(r'(@media[^{]+)\{((?:[^{}]|\{[^{}]*\})*)\}', css):
        q, body = m.group(1).strip(), m.group(2)
        inner = [s.strip() + ' {' + b.strip() + '}'
                 for s, b in re.findall(r'([^{}]+)\{([^{}]*)\}', body) if any(i in s for i in ids)]
        if inner:
            out.append(q + ' {\n  ' + '\n  '.join(inner) + '\n}')
    return out


if __name__ == '__main__':
    page_key, sel, name = sys.argv[1], sys.argv[2], sys.argv[3]
    tag, attr, val = sel.split(',')
    d, html, css = load(page_key)
    mk = markup(html, tag, attr, val)
    if not mk:
        print('MARKUP NOT FOUND')
        sys.exit(1)
    mk = clean(mk)
    ids = set(re.findall(r'id="(brxe-[a-z0-9]+)"', mk))
    cls = set(c for chunk in re.findall(r'class="([^"]*)"', mk) for c in chunk.split()
              if c.startswith(('bc-', 'nb-', 'next-', 'brxe-')))
    o = os.path.join(d, 'extract', name + '.md')
    os.makedirs(os.path.dirname(o), exist_ok=True)
    with open(o, 'w', encoding='utf-8') as f:
        f.write('# %s\n\n## MARKUP\n```html\n%s\n```\n\n## CSS RULES\n```css\n%s\n```\n\n## MEDIA QUERIES\n```css\n%s\n```\n' % (
            name, mk, '\n'.join(rules_for(css, ids | cls)), '\n'.join(media_rules(css, ids | cls))))
    print(o, 'ids=', len(ids), 'chars=', os.path.getsize(o))
