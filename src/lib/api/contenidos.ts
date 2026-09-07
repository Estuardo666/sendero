import { fetchGraphQL } from "@/lib/graphql";
import type {
  WPAnuncio,
  WPEpisodio,
  WPNivel,
  WPNoticia,
  WPRecurso,
} from "@/types/wp";
import {
  BOTON,
  FOTO,
  MEDIA,
  REVALIDATE_CORTO,
  REVALIDATE_LARGO,
  SEO,
} from "./fragments";

/* ---------------- Niveles académicos ---------------- */

const CAMPOS_NIVEL = `
  title
  rutaCompleta
  nivel {
    ruta
    orden
    imagenCarrusel { ${MEDIA} }
    imagenTarjeta { ${MEDIA} }
    heroAntetitulo
    relatoEtiqueta
    relatoTitulo
    parrafos { texto }
    requisitos { texto }
    galeria { ${FOTO} }
    imagenCta { ${MEDIA} }
    ctaAntetitulo
    ctaTitulo
    botonPrincipal { ${BOTON} }
    botonFinal { ${BOTON} }
  }
  ${SEO}
`;

const QUERY_NIVELES = `
  query Niveles {
    nivelesAcademicos(first: 20, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes { ${CAMPOS_NIVEL} }
    }
  }
`;

export async function getNiveles(): Promise<WPNivel[]> {
  const data = await fetchGraphQL<{
    nivelesAcademicos: { nodes: WPNivel[] };
  }>(QUERY_NIVELES, {}, REVALIDATE_LARGO);

  return data.nivelesAcademicos.nodes;
}

const QUERY_NIVEL = `
  query Nivel($ruta: String!) {
    nivelPorRuta(ruta: $ruta) { ${CAMPOS_NIVEL} }
  }
`;

export async function getNivel(ruta: string): Promise<WPNivel | null> {
  const data = await fetchGraphQL<{ nivelPorRuta: WPNivel | null }>(
    QUERY_NIVEL,
    { ruta },
    REVALIDATE_LARGO,
  );

  return data.nivelPorRuta;
}

/* ---------------- Noticias ---------------- */

const CAMPOS_NOTICIA = `
  title
  slug
  date
  featuredImage { ${MEDIA} }
  noticiaCampos { resumen destacada enlaceExterno }
  categoriasSendero { nodes { name slug } }
`;

const QUERY_NOTICIAS = `
  query Noticias($cantidad: Int!) {
    noticias(first: $cantidad, where: { orderby: { field: DATE, order: DESC } }) {
      nodes { ${CAMPOS_NOTICIA} }
    }
  }
`;

export async function getNoticias(cantidad = 12): Promise<WPNoticia[]> {
  const data = await fetchGraphQL<{ noticias: { nodes: WPNoticia[] } }>(
    QUERY_NOTICIAS,
    { cantidad },
    REVALIDATE_CORTO,
  );

  return data.noticias.nodes;
}

const QUERY_NOTICIAS_CATEGORIA = `
  query NoticiasPorCategoria($categoria: ID!, $cantidad: Int!) {
    categoriaSendero(id: $categoria, idType: SLUG) {
      name
      slug
      noticias(first: $cantidad, where: { orderby: { field: DATE, order: DESC } }) {
        nodes { ${CAMPOS_NOTICIA} }
      }
    }
  }
`;

/**
 * Las tres secciones (Noticias, Blog y Orgullo Sendero) son terminos de la
 * misma taxonomia y comparten plantilla, asi que el listado se pide por slug
 * de categoria en lugar de tener una consulta por seccion.
 */
export async function getNoticiasPorCategoria(
  categoria: string,
  cantidad = 24,
): Promise<{ nombre: string; noticias: WPNoticia[] } | null> {
  const data = await fetchGraphQL<{
    categoriaSendero: {
      name: string | null;
      noticias: { nodes: WPNoticia[] } | null;
    } | null;
  }>(QUERY_NOTICIAS_CATEGORIA, { categoria, cantidad }, REVALIDATE_CORTO);

  if (!data.categoriaSendero) return null;

  return {
    nombre: data.categoriaSendero.name ?? categoria,
    noticias: data.categoriaSendero.noticias?.nodes ?? [],
  };
}

const QUERY_NOTICIA = `
  query Noticia($slug: ID!) {
    noticia(id: $slug, idType: SLUG) {
      ${CAMPOS_NOTICIA}
      content
      ${SEO}
    }
  }
`;

/** Una noticia por su slug, para la ruta de detalle. */
export async function getNoticia(slug: string): Promise<WPNoticia | null> {
  const data = await fetchGraphQL<{ noticia: WPNoticia | null }>(
    QUERY_NOTICIA,
    { slug },
    REVALIDATE_CORTO,
  );

  return data.noticia;
}

/* ---------------- Podcast ---------------- */

const QUERY_EPISODIOS = `
  query Episodios($cantidad: Int!) {
    episodiosPodcast(first: $cantidad, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        title
        youtubeId
        urlEmbed
        miniaturaUrl
        episodio { numero destacado }
      }
    }
  }
`;

export async function getEpisodios(cantidad = 20): Promise<WPEpisodio[]> {
  const data = await fetchGraphQL<{
    episodiosPodcast: { nodes: WPEpisodio[] };
  }>(QUERY_EPISODIOS, { cantidad }, REVALIDATE_LARGO);

  return data.episodiosPodcast.nodes;
}

/* ---------------- Recursos descargables ---------------- */

const QUERY_RECURSOS = `
  query Recursos {
    recursos(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        title
        recursoCampos {
          categoria
          fuente
          fechaDocumento
          archivo { node { mediaItemUrl } }
        }
      }
    }
  }
`;

export async function getRecursos(): Promise<WPRecurso[]> {
  const data = await fetchGraphQL<{ recursos: { nodes: WPRecurso[] } }>(
    QUERY_RECURSOS,
    {},
    REVALIDATE_LARGO,
  );

  return data.recursos.nodes;
}

/* ---------------- Anuncios de servicio social ---------------- */

const QUERY_ANUNCIOS = `
  query Anuncios {
    anunciosSociales(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        title
        whatsappUrl
        anuncioCampos { tipo resumen detalle telefono }
      }
    }
  }
`;

export async function getAnuncios(): Promise<WPAnuncio[]> {
  const data = await fetchGraphQL<{ anunciosSociales: { nodes: WPAnuncio[] } }>(
    QUERY_ANUNCIOS,
    {},
    REVALIDATE_CORTO,
  );

  return data.anunciosSociales.nodes;
}
