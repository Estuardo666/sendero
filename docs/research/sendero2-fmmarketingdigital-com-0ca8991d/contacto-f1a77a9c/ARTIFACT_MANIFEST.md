# Artifact manifest — /contacto/

## Downloaded assets
None — the page has no images, video or icon files of its own. Icons in the source are Ionicons /
Font Awesome webfont glyphs; the clone inlines equivalent SVG paths.

## Deliberate deviation

The source embeds an **Elfsight Google Maps** widget whose configuration blob contains Elfsight's own
Google Maps API key. Reusing a third party's API key in the clone would be improper, so the clone
renders a keyless embed instead:

```
https://www.google.com/maps?q=-3.9614687544471994,-79.22471118700119&z=18&output=embed
```

Same marker coordinates ("Escuela EGB Sendero"), same zoom (18). Differences vs the source: no custom
greyscale map styling, no custom teal marker icon, no info-window card, no directions panel.

## Gaps

- No screenshots (browser pane could not composite frames in this session);
  `docs/design-references/.../contacto-f1a77a9c/` is empty. Specs come from `getComputedStyle()`
  and the source stylesheets.
- The Bricks counters animate 0→100 in the source but their `.count` span is `font-size: 0px`, so the
  clone renders the visible prefix/suffix text statically.
