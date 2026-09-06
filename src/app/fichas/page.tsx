import type { Metadata } from "next";

import { FichasPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/fichas-bfb659e2/FichasPage";
import { getCabeceraRecursos } from "@/lib/api/paginas";
import { getRecursos } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aDescargas, metadataDesde, texto, urlMedia } from "@/lib/mapeo";
import { unwrap } from "@/types/wp";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCabeceraRecursos();

  return metadataDesde(seo, "Fichas – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome, recursos] = await Promise.all([
    getCabeceraRecursos(),
    getChrome(),
    getRecursos(),
  ]);

  const fichas = recursos.filter(
    (recurso) => unwrap(recurso.recursoCampos?.categoria) === "ficha",
  );

  return (
    <FichasPage
      chrome={chrome}
      video={urlMedia(contenido.heroVideo)}
      antetitulo={texto(contenido.fichasAntetitulo)}
      titulo={texto(contenido.fichasTitulo)}
      textoDescarga={texto(contenido.textoDescarga)}
      recursos={aDescargas(fichas)}
    />
  );
}
