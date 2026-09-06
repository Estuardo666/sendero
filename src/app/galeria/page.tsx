import type { Metadata } from "next";

import { GaleriaPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/galeria-6d108626/GaleriaPage";
import { getGaleria } from "@/lib/api/paginas";
import { getChrome } from "@/lib/chrome";
import { aBoton, aGaleria, metadataDesde, texto } from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getGaleria();

  return metadataDesde(seo, "Galería – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome] = await Promise.all([getGaleria(), getChrome()]);

  return (
    <GaleriaPage
      chrome={chrome}
      antetitulo={texto(contenido.heroAntetitulo)}
      titulo={texto(contenido.heroTitulo)}
      fotos={aGaleria(contenido.fotos).map((imagen) => ({
        src: imagen.url,
        alt: imagen.alt,
      }))}
      ctaAntetitulo={texto(contenido.ctaAntetitulo)}
      ctaTitulo={texto(contenido.ctaTitulo)}
      ctaBoton={aBoton(contenido.ctaBoton)}
    />
  );
}
