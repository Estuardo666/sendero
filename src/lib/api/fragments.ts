/** Trozos de consulta que se repiten en casi todas las peticiones. */

export const MEDIA = `node { sourceUrl altText mediaItemUrl mediaDetails { width height } }`;

export const BOTON = `etiqueta url`;

export const ENLACE = `etiqueta url externo`;

export const SEO = `seo { tituloSeo descripcionSeo imagenOg { ${MEDIA} } }`;

export const FOTO = `imagen { ${MEDIA} } descripcion`;

/** Un día: el contenido institucional cambia poco y la revalidación es on-demand. */
export const REVALIDATE_LARGO = 86400;

/** Una hora: noticias y anuncios. */
export const REVALIDATE_CORTO = 3600;
