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

const QUERY_NOTICIAS = `
  query Noticias($cantidad: Int!) {
    noticias(first: $cantidad, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        date
        featuredImage { ${MEDIA} }
        noticiaCampos { resumen destacada enlaceExterno }
      }
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
