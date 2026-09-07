/**
 * Tipos crudos tal como los devuelve WPGraphQL.
 * Los tipos de props de los componentes viven en `sendero.ts`.
 */

export interface WPMediaNode {
  sourceUrl: string;
  altText: string;
  mediaItemUrl?: string | null;
  mediaDetails?: { width: number | null; height: number | null } | null;
}

export interface WPMedia {
  node: WPMediaNode | null;
}

export interface WPBoton {
  etiqueta: string | null;
  url: string | null;
}

export interface WPEnlace {
  etiqueta: string | null;
  url: string | null;
  externo: boolean | null;
  /** Segundo nivel. Solo lo traen los dos menús del encabezado. */
  submenu?: WPEnlace[] | null;
}

export interface WPSeo {
  tituloSeo: string | null;
  descripcionSeo: string | null;
  imagenOg: WPMedia | null;
}

export interface WPFoto {
  imagen: WPMedia | null;
  descripcion?: string | null;
}

export interface WPTexto {
  texto: string | null;
}

/* ---------------- Ajustes globales ---------------- */

export interface WPGlobales {
  nombreSitio: string | null;
  logoCabecera: WPMedia | null;
  logoPie: WPMedia | null;
  telefonoPrincipal: string | null;
  correos: { email: string | null; etiqueta: string | null }[] | null;
  whatsapp: {
    numero: string | null;
    mensaje: string | null;
    etiquetaWidget: string | null;
    enlaceCorto: string | null;
  } | null;
  tituloRedes: string | null;
  redesSociales: { red: string | string[] | null; url: string | null }[] | null;
  menuEscritorio: WPEnlace[] | null;
  menuDesplegable: WPEnlace[] | null;
  botonesCta: WPEnlace[] | null;
  enlacesPiePrincipales: WPEnlace[] | null;
  enlacesPieSecundarios: WPEnlace[] | null;
  copyright: string | null;
}

/* ---------------- Inicio ---------------- */

export interface WPInicio {
  heroVideo: WPMedia | null;
  heroTitulo: string | null;
  heroTexto: string | null;
  heroBoton: WPBoton | null;

  filosofiaVideo: WPMedia | null;
  filosofiaAntetitulo: string | null;
  filosofiaTitulo: string | null;
  filosofiaTexto: string | null;
  filosofiaBoton: WPBoton | null;

  ofertaAntetitulo: string | null;
  ofertaTitulo: string | null;
  ofertaVideo: WPMedia | null;

  experienciaAntetitulo: string | null;
  experienciaTitulo: string | null;
  experienciaBoton: WPBoton | null;
  experienciaTarjetas: { titulo: string | null; texto: string | null }[] | null;
  experienciaFotos: { imagen: WPMedia | null }[] | null;

  noticiasAntetitulo: string | null;
  noticiasTitulo: string | null;
  noticiasCta: string | null;
  noticiasCantidad: number | null;

  podcastAntetitulo: string | null;
  podcastTitulo: string | null;
  podcastCantidad: number | null;

  ctaAntetitulo: string | null;
  ctaTitulo: string | null;
  ctaBoton: WPBoton | null;
}

/* ---------------- Quiénes somos ---------------- */

export interface WPQuienesSomos {
  heroVideo: WPMedia | null;
  heroAntetitulo: string | null;
  heroTitulo: string | null;
  bienvenidaAntetitulo: string | null;
  bienvenidaTitulo: string | null;
  bienvenidaTexto: string | null;
  bienvenidaGaleria: WPFoto[] | null;
  misionTitulo: string | null;
  misionTexto: string | null;
  visionTitulo: string | null;
  visionTexto: string | null;
  misionGaleria: WPFoto[] | null;
}

/* ---------------- Niveles académicos ---------------- */

export interface WPNivel {
  title: string;
  rutaCompleta: string | null;
  nivel: {
    ruta: string | null;
    orden: number | null;
    imagenCarrusel: WPMedia | null;
    imagenTarjeta: WPMedia | null;
    heroAntetitulo: string | null;
    relatoEtiqueta: string | null;
    relatoTitulo: string | null;
    parrafos: WPTexto[] | null;
    requisitos: WPTexto[] | null;
    galeria: WPFoto[] | null;
    imagenCta: WPMedia | null;
    ctaAntetitulo: string | null;
    ctaTitulo: string | null;
    botonPrincipal: WPBoton | null;
    botonFinal: WPBoton | null;
  } | null;
  seo: WPSeo | null;
}

/* ---------------- Noticias ---------------- */

export interface WPNoticia {
  title: string;
  slug: string;
  date: string;
  content: string | null;
  featuredImage: WPMedia | null;
  noticiaCampos: {
    resumen: string | null;
    destacada: boolean | null;
    enlaceExterno: string | null;
  } | null;
  categoriasSendero?: {
    nodes: { name: string | null; slug: string | null }[];
  } | null;
  seo?: WPSeo | null;
}

/* ---------------- Podcast ---------------- */

export interface WPEpisodio {
  title: string;
  youtubeId: string | null;
  urlEmbed: string | null;
  miniaturaUrl: string | null;
  episodio: { numero: number | null; destacado: boolean | null } | null;
}

/* ---------------- Recursos ---------------- */

export interface WPRecurso {
  title: string;
  recursoCampos: {
    categoria: string | string[] | null;
    fuente: string | null;
    fechaDocumento: string | null;
    archivo: { node: { mediaItemUrl: string | null } | null } | null;
  } | null;
}

/* ---------------- Servicio social ---------------- */

export interface WPAnuncio {
  title: string;
  whatsappUrl: string | null;
  anuncioCampos: {
    tipo: string | string[] | null;
    resumen: string | null;
    detalle: string | null;
    telefono: string | null;
  } | null;
}

/* ---------------- Utilidades ---------------- */

/** Los campos select de ACF pueden llegar como array. */
export function unwrap(value: string | string[] | null | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export function mediaUrl(media: WPMedia | null | undefined): string {
  return media?.node?.sourceUrl ?? media?.node?.mediaItemUrl ?? "";
}

export function mediaAlt(media: WPMedia | null | undefined): string {
  return media?.node?.altText ?? "";
}
