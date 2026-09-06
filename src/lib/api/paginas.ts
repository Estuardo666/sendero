import { fetchGraphQL } from "@/lib/graphql";
import type { WPInicio, WPMedia, WPQuienesSomos, WPSeo } from "@/types/wp";
import { BOTON, FOTO, MEDIA, REVALIDATE_LARGO, SEO } from "./fragments";

/* ---------------- Inicio ---------------- */

const QUERY_INICIO = `
  query Inicio {
    opcionesInicio {
      ${SEO}
      contenidoInicio {
        heroVideo { ${MEDIA} }
        heroTitulo
        heroTexto
        heroBoton { ${BOTON} }
        filosofiaVideo { ${MEDIA} }
        filosofiaAntetitulo
        filosofiaTitulo
        filosofiaTexto
        filosofiaBoton { ${BOTON} }
        ofertaAntetitulo
        ofertaTitulo
        ofertaVideo { ${MEDIA} }
        experienciaAntetitulo
        experienciaTitulo
        experienciaBoton { ${BOTON} }
        experienciaTarjetas { titulo texto }
        experienciaFotos { imagen { ${MEDIA} } }
        noticiasAntetitulo
        noticiasTitulo
        noticiasCta
        noticiasCantidad
        podcastAntetitulo
        podcastTitulo
        podcastCantidad
        ctaAntetitulo
        ctaTitulo
        ctaBoton { ${BOTON} }
      }
    }
  }
`;

export async function getInicio(): Promise<{
  contenido: WPInicio;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesInicio: { contenidoInicio: WPInicio; seo: WPSeo | null };
  }>(QUERY_INICIO, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesInicio.contenidoInicio,
    seo: data.opcionesInicio.seo,
  };
}

/* ---------------- Quiénes somos ---------------- */

const QUERY_QUIENES = `
  query QuienesSomos {
    opcionesQuienesSomos {
      ${SEO}
      contenidoQuienesSomos {
        heroVideo { ${MEDIA} }
        heroAntetitulo
        heroTitulo
        bienvenidaAntetitulo
        bienvenidaTitulo
        bienvenidaTexto
        bienvenidaGaleria { ${FOTO} }
        misionTitulo
        misionTexto
        visionTitulo
        visionTexto
        misionGaleria { ${FOTO} }
      }
    }
  }
`;

export async function getQuienesSomos(): Promise<{
  contenido: WPQuienesSomos;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesQuienesSomos: {
      contenidoQuienesSomos: WPQuienesSomos;
      seo: WPSeo | null;
    };
  }>(QUERY_QUIENES, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesQuienesSomos.contenidoQuienesSomos,
    seo: data.opcionesQuienesSomos.seo,
  };
}

/* ---------------- Oferta educativa ---------------- */

export interface OfertaEducativaContenido {
  antetitulo: string | null;
  titulo: string | null;
  textoBotonTarjeta: string | null;
  urlBotonTarjeta: string | null;
}

const QUERY_OFERTA = `
  query OfertaEducativa {
    opcionesOfertaEducativa {
      ${SEO}
      contenidoOfertaEducativa {
        antetitulo
        titulo
        textoBotonTarjeta
        urlBotonTarjeta
      }
    }
  }
`;

export async function getOfertaEducativa(): Promise<{
  contenido: OfertaEducativaContenido;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesOfertaEducativa: {
      contenidoOfertaEducativa: OfertaEducativaContenido;
      seo: WPSeo | null;
    };
  }>(QUERY_OFERTA, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesOfertaEducativa.contenidoOfertaEducativa,
    seo: data.opcionesOfertaEducativa.seo,
  };
}

/* ---------------- Admisiones ---------------- */

export interface AdmisionesContenido {
  heroAntetitulo: string | null;
  heroTitulo: string | null;
  fichasTitulo: string | null;
  gruposRequisitos:
    | {
        titulo: string | null;
        requisitos: { texto: string | null }[] | null;
        boton: { etiqueta: string | null; url: string | null } | null;
      }[]
    | null;
  fichas: {
    nodes: {
      title: string;
      recursoCampos: {
        fuente: string | null;
        fechaDocumento: string | null;
        archivo: { node: { mediaItemUrl: string | null } | null } | null;
      } | null;
    }[];
  } | null;
}

const QUERY_ADMISIONES = `
  query Admisiones {
    opcionesAdmisiones {
      ${SEO}
      contenidoAdmisiones {
        heroAntetitulo
        heroTitulo
        fichasTitulo
        gruposRequisitos {
          titulo
          requisitos { texto }
          boton { ${BOTON} }
        }
        fichas {
          nodes {
            ... on Recurso {
              title
              recursoCampos {
                fuente
                fechaDocumento
                archivo { node { mediaItemUrl } }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getAdmisiones(): Promise<{
  contenido: AdmisionesContenido;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesAdmisiones: {
      contenidoAdmisiones: AdmisionesContenido;
      seo: WPSeo | null;
    };
  }>(QUERY_ADMISIONES, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesAdmisiones.contenidoAdmisiones,
    seo: data.opcionesAdmisiones.seo,
  };
}

/* ---------------- Galería ---------------- */

export interface GaleriaContenido {
  heroVideo: WPMedia | null;
  heroAntetitulo: string | null;
  heroTitulo: string | null;
  fotos: { imagen: WPMedia | null; descripcion: string | null }[] | null;
  ctaAntetitulo: string | null;
  ctaTitulo: string | null;
  ctaBoton: { etiqueta: string | null; url: string | null } | null;
}

const QUERY_GALERIA = `
  query Galeria {
    opcionesGaleria {
      ${SEO}
      contenidoGaleria {
        heroVideo { ${MEDIA} }
        heroAntetitulo
        heroTitulo
        fotos { ${FOTO} }
        ctaAntetitulo
        ctaTitulo
        ctaBoton { ${BOTON} }
      }
    }
  }
`;

export async function getGaleria(): Promise<{
  contenido: GaleriaContenido;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesGaleria: { contenidoGaleria: GaleriaContenido; seo: WPSeo | null };
  }>(QUERY_GALERIA, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesGaleria.contenidoGaleria,
    seo: data.opcionesGaleria.seo,
  };
}

/* ---------------- Cabeceras simples ---------------- */

export interface CabeceraNoticias {
  heroVideo: WPMedia | null;
  heroAntetitulo: string | null;
  heroTitulo: string | null;
  textoEnlace: string | null;
}

const QUERY_CAB_NOTICIAS = `
  query CabeceraNoticias {
    opcionesNoticias {
      ${SEO}
      contenidoNoticias { heroVideo { ${MEDIA} } heroAntetitulo heroTitulo textoEnlace }
    }
  }
`;

export async function getCabeceraNoticias(): Promise<{
  contenido: CabeceraNoticias;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesNoticias: { contenidoNoticias: CabeceraNoticias; seo: WPSeo | null };
  }>(QUERY_CAB_NOTICIAS, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesNoticias.contenidoNoticias,
    seo: data.opcionesNoticias.seo,
  };
}

export interface CabeceraPodcast {
  heroAntetitulo: string | null;
  heroTitulo: string | null;
  descripcion: string | null;
}

const QUERY_CAB_PODCAST = `
  query CabeceraPodcast {
    opcionesPodcast {
      ${SEO}
      contenidoPodcast { heroAntetitulo heroTitulo descripcion }
    }
  }
`;

export async function getCabeceraPodcast(): Promise<{
  contenido: CabeceraPodcast;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesPodcast: { contenidoPodcast: CabeceraPodcast; seo: WPSeo | null };
  }>(QUERY_CAB_PODCAST, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesPodcast.contenidoPodcast,
    seo: data.opcionesPodcast.seo,
  };
}

export interface CabeceraRecursos {
  heroVideo: WPMedia | null;
  fichasAntetitulo: string | null;
  fichasTitulo: string | null;
  utilesAntetitulo: string | null;
  utilesTitulo: string | null;
  textoDescarga: string | null;
}

const QUERY_CAB_RECURSOS = `
  query CabeceraRecursos {
    opcionesRecursos {
      ${SEO}
      contenidoRecursos {
        heroVideo { ${MEDIA} }
        fichasAntetitulo
        fichasTitulo
        utilesAntetitulo
        utilesTitulo
        textoDescarga
      }
    }
  }
`;

export async function getCabeceraRecursos(): Promise<{
  contenido: CabeceraRecursos;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesRecursos: { contenidoRecursos: CabeceraRecursos; seo: WPSeo | null };
  }>(QUERY_CAB_RECURSOS, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesRecursos.contenidoRecursos,
    seo: data.opcionesRecursos.seo,
  };
}

/* ---------------- Servicio social ---------------- */

export interface ServicioSocialContenido {
  heroVideo: WPMedia | null;
  heroAntetitulo: string | null;
  heroTitulo: string | null;
  formAntetitulo: string | null;
  formTitulo: string | null;
  formIntro: string | null;
  formBoton: string | null;
  formConfirmacion: string | null;
  formOpcionesTipo: { etiqueta: string | null }[] | null;
  anunciosTitulo: string | null;
}

const QUERY_SERVICIO = `
  query ServicioSocial {
    opcionesServicioSocial {
      ${SEO}
      contenidoServicioSocial {
        heroVideo { ${MEDIA} }
        heroAntetitulo
        heroTitulo
        formAntetitulo
        formTitulo
        formIntro
        formBoton
        formConfirmacion
        formOpcionesTipo { etiqueta }
        anunciosTitulo
      }
    }
    etapasEducativas(first: 20) { nodes { name } }
  }
`;

export async function getServicioSocial(): Promise<{
  contenido: ServicioSocialContenido;
  etapas: string[];
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesServicioSocial: {
      contenidoServicioSocial: ServicioSocialContenido;
      seo: WPSeo | null;
    };
    etapasEducativas: { nodes: { name: string }[] };
  }>(QUERY_SERVICIO, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesServicioSocial.contenidoServicioSocial,
    etapas: data.etapasEducativas.nodes.map((n) => n.name),
    seo: data.opcionesServicioSocial.seo,
  };
}

/* ---------------- Contacto ---------------- */

export interface ContactoContenido {
  antetitulo: string | null;
  titulo: string | null;
  tituloDirectorio: string | null;
  mapaTitulo: string | null;
  mapaLatitud: string | null;
  mapaLongitud: string | null;
  direccion: string | null;
  directorio: { area: string | null; telefono: string | null }[] | null;
}

const QUERY_CONTACTO = `
  query Contacto {
    opcionesContacto {
      ${SEO}
      contenidoContacto {
        antetitulo
        titulo
        tituloDirectorio
        mapaTitulo
        mapaLatitud
        mapaLongitud
        direccion
        directorio { area telefono }
      }
    }
  }
`;

export async function getContacto(): Promise<{
  contenido: ContactoContenido;
  seo: WPSeo | null;
}> {
  const data = await fetchGraphQL<{
    opcionesContacto: {
      contenidoContacto: ContactoContenido;
      seo: WPSeo | null;
    };
  }>(QUERY_CONTACTO, {}, REVALIDATE_LARGO);

  return {
    contenido: data.opcionesContacto.contenidoContacto,
    seo: data.opcionesContacto.seo,
  };
}
