import type { Metadata } from "next";

import { ServicioSocialPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/servicio-social-3f5eb612/ServicioSocialPage";
import { getServicioSocial } from "@/lib/api/paginas";
import { getAnuncios } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aAnuncios, metadataDesde, texto } from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getServicioSocial();

  return metadataDesde(seo, "Servicio social – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido, etapas }, chrome, anuncios] = await Promise.all([
    getServicioSocial(),
    getChrome(),
    getAnuncios(),
  ]);

  return (
    <ServicioSocialPage
      chrome={chrome}
      antetitulo={texto(contenido.heroAntetitulo)}
      titulo={texto(contenido.heroTitulo)}
      formAntetitulo={texto(contenido.formAntetitulo)}
      formTitulo={texto(contenido.formTitulo)}
      formIntro={texto(contenido.formIntro)}
      formBoton={texto(contenido.formBoton)}
      formConfirmacion={texto(contenido.formConfirmacion)}
      opcionesTipo={(contenido.formOpcionesTipo ?? [])
        .map((opcion) => opcion.etiqueta ?? "")
        .filter(Boolean)}
      etapas={etapas}
      anuncios={aAnuncios(anuncios)}
    />
  );
}
