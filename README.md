# Sendero — Sitio web

Frontend en Next.js del sitio de la Unidad Educativa Sendero. Reconstrucción
del sitio original en un código limpio y moderno, con WordPress headless
(WPGraphQL) como fuente de contenido.

## Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Estilos:** Tailwind CSS v4 con tokens oklch
- **UI:** shadcn/ui (Base UI) + `cn()`
- **Animación:** GSAP y Motion
- **Contenido:** WordPress headless vía WPGraphQL, con revalidación por tags
- **Deploy:** Vercel

## Inicio rápido

```bash
npm install
cp .env.example .env.local
npm run dev
```

Variables de entorno (`.env.local`):

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_WP_GRAPHQL_URL` | Endpoint de WPGraphQL |
| `NEXT_PUBLIC_WP_URL` | URL base de WordPress |
| `WP_REVALIDATE_SECRET` | Secreto compartido para `/api/revalidate` |

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run check` | lint + typecheck + build |

## Páginas

`/` · `/quienes-somos` · `/oferta-educativa` · `/oferta_academica/[nivel]`
(inicial 1 y 2, preparatoria, elemental, media, superior) · `/admisiones` ·
`/fichas` · `/lista-de-utiles` · `/galeria` · `/noticias` · `/podcast` ·
`/servicio-social` · `/contacto`

## Estructura

```
src/
  app/                 # Rutas del App Router y /api/revalidate
  components/sites/    # Secciones y componentes de cada página
  lib/                 # graphql.ts, api/, mapeo.ts, chrome.ts, utils.ts
  types/               # Tipos de WordPress y del dominio Sendero
public/
  sites/               # Imágenes, video y assets del sitio
  fonts/               # Tipografías autohospedadas
docs/
  research/            # Especificaciones extraídas del sitio original
  design-references/   # Capturas de referencia
scripts/               # Descarga de assets y extracción de páginas
```

## Contenido

Todo el contenido se obtiene de WordPress a través de `src/lib/graphql.ts`.
WordPress puede invalidar la caché llamando a `POST /api/revalidate` con
`WP_REVALIDATE_SECRET`.

## Licencia

MIT — ver [LICENSE](LICENSE).
