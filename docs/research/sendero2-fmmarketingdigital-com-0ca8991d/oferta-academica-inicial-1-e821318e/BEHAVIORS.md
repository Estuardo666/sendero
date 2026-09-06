# Inicial 1 — behavior bible

## Interaction model

- Hero/story headings use the source's scroll-entry animation vocabulary (`BlurReveal` and `LetterLauncher`); the shared local ports render the final state immediately.
- `Requisitos para matriculación` is click-driven. It is collapsed initially and expands to reveal six numbered requirements.
- `Ir a admisiones` and `¡Inscribe a tus hijos hoy!` are ordinary admissions links with the shared arrow-button hover expansion/rotation.
- CTA background is static image plus teal overlay; WhatsApp remains fixed.
- Header/footer interactions are inherited from the shared imported components.

## Responsive sweep

- Desktop (`1440px`): centered hero, then a `40% / 60%` copy/photo layout with a 606px rounded photo; CTA is 444px tall.
- Tablet (`768px`): layout remains two-column but contracts with the site container.
- Mobile (`390px`): story stacks, copy is centered, the image moves above the copy, and CTA keeps its 444px vertical composition.

## Source notes

- The connected browser showed a WordPress admin bar; it is not public content and is omitted.
- Source section background asset for the CTA is `MG_1996-scaled.jpg`.
