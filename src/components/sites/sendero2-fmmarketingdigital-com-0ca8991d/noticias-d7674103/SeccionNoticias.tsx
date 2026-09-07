import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoticiasPage } from "./NoticiasPage";
import { getNoticiasPorCategoria } from "@/lib/api/contenidos";
import { getCabeceraNoticias } from "@/lib/api/paginas";
import { getChrome } from "@/lib/chrome";
import { aArticulos, metadataDesde, texto, urlMedia } from "@/lib/mapeo";

/**
 * Noticias, Blog y Orgullo Sendero son categorías de la misma taxonomía y
 * comparten esta plantilla: solo cambia el término por el que se filtra y el
 * título del encabezado.
 */
export interface Seccion {
  /** Slug del término en WordPress, que además es la ruta del listado. */
  categoria: string;
  /** Título del encabezado. Si se omite, se usa el nombre del término. */
  titulo?: string;
}

export async function metadataSeccion(seccion: Seccion): Promise<Metadata> {
  const [{ seo }, datos] = await Promise.all([
    getCabeceraNoticias(),
    getNoticiasPorCategoria(seccion.categoria, 1),
  ]);

  const nombre = seccion.titulo ?? datos?.nombre ?? "Noticias";

  // El SEO configurado en WordPress describe la página de Noticias; las otras
  // secciones se quedan solo con su propio título.
  return "noticias" === seccion.categoria
    ? metadataDesde(seo, `${nombre} – Escuela Sendero`)
    : { title: `${nombre} – Escuela Sendero` };
}

export async function SeccionNoticias({ categoria, titulo }: Seccion) {
  const [{ contenido }, chrome, datos] = await Promise.all([
    getCabeceraNoticias(),
    getChrome(),
    getNoticiasPorCategoria(categoria, 24),
  ]);

  if (!datos) notFound();

  return (
    <NoticiasPage
      chrome={chrome}
      video={urlMedia(contenido.heroVideo)}
      antetitulo={texto(contenido.heroAntetitulo)}
      titulo={titulo ?? datos.nombre}
      articulos={aArticulos(datos.noticias)}
    />
  );
}
