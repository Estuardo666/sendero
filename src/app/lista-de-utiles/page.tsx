import type { Metadata } from "next";

import { ListaDeUtilesPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/lista-de-utiles-b70d8828/ListaDeUtilesPage";
import { getCabeceraRecursos } from "@/lib/api/paginas";
import { getRecursos } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aDescargas, metadataDesde, texto, urlMedia } from "@/lib/mapeo";
import { unwrap } from "@/types/wp";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCabeceraRecursos();

  return metadataDesde(seo, "Lista de útiles – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome, recursos] = await Promise.all([
    getCabeceraRecursos(),
    getChrome(),
    getRecursos(),
  ]);

  const utiles = recursos.filter(
    (recurso) => unwrap(recurso.recursoCampos?.categoria) === "lista_utiles",
  );

  return (
    <ListaDeUtilesPage
      chrome={chrome}
      video={urlMedia(contenido.heroVideo)}
      antetitulo={texto(contenido.utilesAntetitulo)}
      titulo={texto(contenido.utilesTitulo)}
      textoDescarga={texto(contenido.textoDescarga)}
      recursos={aDescargas(utiles)}
    />
  );
}
