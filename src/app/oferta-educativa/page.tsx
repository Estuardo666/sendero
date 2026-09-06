import type { Metadata } from "next";

import { OfertaEducativaPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-educativa-ba51ef1b/OfertaEducativaPage";
import { getOfertaEducativa } from "@/lib/api/paginas";
import { getNiveles } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aNivelesCarrusel, metadataDesde, texto } from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getOfertaEducativa();

  return metadataDesde(seo, "Oferta educativa – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome, niveles] = await Promise.all([
    getOfertaEducativa(),
    getChrome(),
    getNiveles(),
  ]);

  return (
    <OfertaEducativaPage
      chrome={chrome}
      antetitulo={texto(contenido.antetitulo)}
      titulo={texto(contenido.titulo)}
      items={aNivelesCarrusel(niveles, "tarjeta")}
      ctaLabel={texto(contenido.textoBotonTarjeta)}
      ctaHref={texto(contenido.urlBotonTarjeta)}
    />
  );
}
