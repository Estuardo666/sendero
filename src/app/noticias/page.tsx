import type { Metadata } from "next";

import { NoticiasPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/noticias-d7674103/NoticiasPage";
import { getCabeceraNoticias } from "@/lib/api/paginas";
import { getNoticias } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aArticulos, metadataDesde, texto, urlMedia } from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCabeceraNoticias();

  return metadataDesde(seo, "Noticias – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome, noticias] = await Promise.all([
    getCabeceraNoticias(),
    getChrome(),
    getNoticias(24),
  ]);

  return (
    <NoticiasPage
      chrome={chrome}
      video={urlMedia(contenido.heroVideo)}
      antetitulo={texto(contenido.heroAntetitulo)}
      titulo={texto(contenido.heroTitulo)}
      articulos={aArticulos(noticias)}
    />
  );
}
