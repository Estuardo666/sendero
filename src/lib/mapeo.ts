import type { Metadata } from "next";

import type {
  Boton,
  Imagen,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/content";
import type { OfertaLevelItem } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/OfertaLevelCard";
import type { AcademicLevelData } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/AcademicLevelPage";
import type {
  Episode,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/PodcastSection";
import { EPISODES } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/PodcastSection";
import type { NoticiaResumen } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/NoticiasSection";
import type { Article } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/noticias-d7674103/NoticiasPage";
import type { EpisodioPodcast } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/podcast-ffccab66/PodcastPage";
import type {
  Descarga,
  GrupoRequisitos,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/admisiones-02e74418/AdmisionesPage";
import type { AnuncioSocial } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/servicio-social-3f5eb612/ServicioSocialPage";

import type {
  WPAnuncio,
  WPBoton,
  WPEpisodio,
  WPMedia,
  WPNivel,
  WPNoticia,
  WPSeo,
} from "@/types/wp";
import { mediaAlt, mediaUrl, unwrap } from "@/types/wp";

/**
 * Convierte los datos crudos de WordPress en las props que esperan los
 * componentes del sitio. Vive en un módulo aparte porque casi todas las rutas
 * necesitan las mismas conversiones.
 */

/** Devuelve `undefined` en vez de cadena vacía para que el componente use su valor por defecto. */
export function texto(valor: string | null | undefined): string | undefined {
  const limpio = (valor ?? "").trim();
  return limpio === "" ? undefined : limpio;
}

export function urlMedia(media: WPMedia | null | undefined): string | undefined {
  return mediaUrl(media) || undefined;
}

export function aBoton(boton: WPBoton | null | undefined): Boton | undefined {
  if (!boton?.etiqueta && !boton?.url) return undefined;

  return { etiqueta: boton?.etiqueta ?? "", url: boton?.url ?? "" };
}

/** Aplana un repetidor de un solo subcampo de texto. */
export function aLista(
  filas: { texto: string | null }[] | null | undefined,
): string[] {
  return (filas ?? [])
    .map((fila) => fila.texto ?? "")
    .filter((valor) => valor !== "");
}

export function metadataDesde(
  seo: WPSeo | null | undefined,
  tituloPorDefecto: string,
): Metadata {
  const titulo = seo?.tituloSeo?.trim() || tituloPorDefecto;
  const descripcion = seo?.descripcionSeo?.trim() || undefined;
  const imagen = mediaUrl(seo?.imagenOg);

  return {
    title: titulo,
    description: descripcion,
    openGraph: {
      title: titulo,
      description: descripcion,
      images: imagen ? [imagen] : undefined,
    },
  };
}

/* ---------------- Niveles ---------------- */

export function aNivelesCarrusel(
  niveles: WPNivel[],
  imagen: "carrusel" | "tarjeta",
): OfertaLevelItem[] {
  return niveles
    .filter((nivel) => nivel.nivel)
    .map((nivel) => ({
      title: nivel.title,
      image:
        mediaUrl(
          imagen === "carrusel"
            ? nivel.nivel?.imagenCarrusel
            : nivel.nivel?.imagenTarjeta,
        ) || "",
      href: nivel.rutaCompleta ?? "#",
    }));
}

/* ---------------- Noticias ---------------- */

/** Dominio del sitio anterior, del que se migró el contenido. */
const DOMINIO_ANTERIOR = "sendero2.fmmarketingdigital.com";

/**
 * Ruta de la noticia. `enlaceExterno` solo manda cuando apunta de verdad a otro
 * sitio: las entradas migradas lo traen apuntando al sitio anterior y ese
 * enlace se ignora para que la noticia se lea aquí.
 */
export function rutaNoticia(noticia: WPNoticia): string {
  const externo = noticia.noticiaCampos?.enlaceExterno?.trim();

  if (externo && !externo.includes(DOMINIO_ANTERIOR)) {
    return externo;
  }

  return noticia.slug ? `/noticias/${noticia.slug}` : "/noticias/";
}

/** Nombre de la seccion (Noticias, Blog u Orgullo Sendero) a la que pertenece. */
export function categoriaNoticia(noticia: WPNoticia): string | undefined {
  return noticia.categoriasSendero?.nodes?.[0]?.name ?? undefined;
}

export function aNoticiasResumen(noticias: WPNoticia[]): NoticiaResumen[] {
  return noticias.map((noticia) => ({
    title: noticia.title,
    image: mediaUrl(noticia.featuredImage),
    alt: mediaAlt(noticia.featuredImage) || noticia.title,
    href: rutaNoticia(noticia),
  }));
}

/* ---------------- Podcast ---------------- */

/**
 * Los identificadores `brxe-*` de las tres columnas siguen viniendo de la
 * plantilla original porque el CSS extraído los usa como selectores.
 */
export function aEpisodiosHome(episodios: WPEpisodio[]): Episode[] {
  return episodios.map((episodio, indice) => {
    const plantilla = EPISODES[indice] ?? EPISODES[EPISODES.length - 1];

    // Si se destacan más episodios que columnas trae la plantilla, hay que
    // generar identificadores propios para no repetirlos en el DOM.
    const idsPropios = EPISODES[indice]
      ? {}
      : {
          columnId: `sendero-podcast-col-${indice}`,
          cardId: `sendero-podcast-card-${indice}`,
          titleId: `sendero-podcast-title-${indice}`,
          videoBoxId: `sendero-podcast-video-${indice}`,
        };

    return {
      ...plantilla,
      ...idsPropios,
      number: `Episodio #${episodio.episodio?.numero ?? indice + 1}`,
      title: episodio.title,
      videoId: episodio.youtubeId ?? plantilla.videoId,
      href: episodio.urlEmbed ?? plantilla.href,
      thumbnail: episodio.miniaturaUrl ?? undefined,
    };
  });
}

/* ---------------- Galerías ---------------- */

/** Convierte un repetidor de fotos de ACF en imágenes listas para el sitio. */
export function aGaleria(
  filas: { imagen: WPMedia | null; descripcion?: string | null }[] | null | undefined,
): Imagen[] {
  return (filas ?? []).flatMap((fila) => {
    const url = mediaUrl(fila.imagen);
    if (!url) return [];

    const imagen: Imagen = {
      url,
      alt: fila.descripcion?.trim() || mediaAlt(fila.imagen),
      width: fila.imagen?.node?.mediaDetails?.width ?? undefined,
      height: fila.imagen?.node?.mediaDetails?.height ?? undefined,
    };

    return [imagen];
  });
}

/* ---------------- Página de un nivel ---------------- */

/** Arma los datos que espera la plantilla de página de nivel. */
export function aNivelData(nivel: WPNivel): AcademicLevelData {
  const campos = nivel.nivel;
  const ruta = campos?.ruta ?? "";

  return {
    pageClass: `academic-level--${ruta || "nivel"}`,
    assetBase: "",
    title: nivel.title,
    heroKicker: campos?.heroAntetitulo ?? "",
    storyLabel: campos?.relatoEtiqueta ?? nivel.title,
    storyHeading: campos?.relatoTitulo ?? "",
    paragraphs: aLista(campos?.parrafos),
    requirements: aLista(campos?.requisitos),
    images: aGaleria(campos?.galeria).map((imagen) => ({
      src: imagen.url,
      alt: imagen.alt,
    })),
    ctaImage: mediaUrl(campos?.imagenCta) || undefined,
    ctaKicker: texto(campos?.ctaAntetitulo),
    ctaTitle: texto(campos?.ctaTitulo),
    primaryButton: aBoton(campos?.botonPrincipal),
    finalButton: aBoton(campos?.botonFinal),
  };
}

/** Tarjetas de la página de Noticias. */
export function aArticulos(noticias: WPNoticia[]): Article[] {
  return noticias.map((noticia) => ({
    title: noticia.title,
    excerpt: noticia.noticiaCampos?.resumen ?? "",
    image: mediaUrl(noticia.featuredImage),
    alt: mediaAlt(noticia.featuredImage) || noticia.title,
    href: rutaNoticia(noticia),
    featured: Boolean(noticia.noticiaCampos?.destacada),
  }));
}

/** Episodios de la página de podcast. */
export function aEpisodiosPagina(episodios: WPEpisodio[]): EpisodioPodcast[] {
  return episodios.map((episodio, indice) => ({
    number: `Episodio #${episodio.episodio?.numero ?? indice + 1}`,
    title: episodio.title,
    id: episodio.youtubeId ?? "",
    thumbnail: episodio.miniaturaUrl,
  }));
}

/* ---------------- Descargas ---------------- */

/** Convierte un recurso de WordPress en la tarjeta de descarga del sitio. */
export function aDescarga(recurso: {
  title: string;
  recursoCampos: {
    fuente: string | null;
    fechaDocumento: string | null;
    archivo: { node: { mediaItemUrl: string | null } | null } | null;
  } | null;
}): Descarga | null {
  const url = recurso.recursoCampos?.archivo?.node?.mediaItemUrl;
  if (!url) return null;

  const fuente = recurso.recursoCampos?.fuente?.trim() ?? "";
  const fecha = recurso.recursoCampos?.fechaDocumento
    ? new Date(recurso.recursoCampos.fechaDocumento).toLocaleDateString("es-EC", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return {
    titulo: recurso.title,
    detalle: [fuente, fecha].filter(Boolean).join(" | "),
    url,
  };
}

export function aDescargas(
  recursos: Parameters<typeof aDescarga>[0][],
): Descarga[] {
  return recursos.flatMap((recurso) => {
    const descarga = aDescarga(recurso);
    return descarga ? [descarga] : [];
  });
}

/** Bloques de requisitos de la página de Admisiones. */
export function aGruposRequisitos(
  grupos:
    | {
        titulo: string | null;
        requisitos: { texto: string | null }[] | null;
        boton: WPBoton | null;
      }[]
    | null
    | undefined,
): GrupoRequisitos[] {
  return (grupos ?? []).map((grupo) => ({
    titulo: grupo.titulo ?? "",
    requisitos: aLista(grupo.requisitos),
    boton: aBoton(grupo.boton),
  }));
}

/* ---------------- Servicio social ---------------- */

export function aAnuncios(anuncios: WPAnuncio[]): AnuncioSocial[] {
  return anuncios.map((anuncio) => {
    const tipo = unwrap(anuncio.anuncioCampos?.tipo);

    return {
      tipo: tipo === "solicita" ? "solicita" : "ofrece",
      titulo: anuncio.title,
      resumen: anuncio.anuncioCampos?.resumen ?? "",
      detalle: anuncio.anuncioCampos?.detalle ?? undefined,
      telefono: anuncio.anuncioCampos?.telefono ?? "",
      whatsapp: anuncio.whatsappUrl ?? "#",
    };
  });
}
