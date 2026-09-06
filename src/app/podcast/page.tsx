import type { Metadata } from "next";

import { PodcastPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/podcast-ffccab66/PodcastPage";
import { getCabeceraPodcast } from "@/lib/api/paginas";
import { getEpisodios } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aEpisodiosPagina, metadataDesde, texto } from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCabeceraPodcast();

  return metadataDesde(seo, "Podcast – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome, episodios] = await Promise.all([
    getCabeceraPodcast(),
    getChrome(),
    getEpisodios(30),
  ]);

  return (
    <PodcastPage
      chrome={chrome}
      antetitulo={texto(contenido.heroAntetitulo)}
      titulo={texto(contenido.heroTitulo)}
      descripcion={texto(contenido.descripcion)}
      episodios={aEpisodiosPagina(episodios)}
    />
  );
}
