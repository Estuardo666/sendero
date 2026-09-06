import type { Metadata } from "next";

import { AdmisionesPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/admisiones-02e74418/AdmisionesPage";
import { getAdmisiones } from "@/lib/api/paginas";
import { getChrome } from "@/lib/chrome";
import {
  aDescargas,
  aGruposRequisitos,
  metadataDesde,
  texto,
} from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAdmisiones();

  return metadataDesde(seo, "Admisiones – Escuela Sendero");
}

export default async function Page() {
  const [{ contenido }, chrome] = await Promise.all([
    getAdmisiones(),
    getChrome(),
  ]);

  return (
    <AdmisionesPage
      chrome={chrome}
      antetitulo={texto(contenido.heroAntetitulo)}
      titulo={texto(contenido.heroTitulo)}
      grupos={aGruposRequisitos(contenido.gruposRequisitos)}
      fichasTitulo={texto(contenido.fichasTitulo)}
      fichas={aDescargas(contenido.fichas?.nodes ?? [])}
    />
  );
}
