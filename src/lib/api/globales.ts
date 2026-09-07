import { fetchGraphQL } from "@/lib/graphql";
import type { WPGlobales } from "@/types/wp";
import { ENLACE, ENLACE_CON_SUBMENU, MEDIA, REVALIDATE_LARGO } from "./fragments";

const QUERY = `
  query Globales {
    opcionesGlobales {
      ajustesGlobales {
        nombreSitio
        logoCabecera { ${MEDIA} }
        logoPie { ${MEDIA} }
        telefonoPrincipal
        correos { email etiqueta }
        whatsapp { numero mensaje etiquetaWidget enlaceCorto }
        tituloRedes
        redesSociales { red url }
        menuEscritorio { ${ENLACE_CON_SUBMENU} }
        menuDesplegable { ${ENLACE_CON_SUBMENU} }
        botonesCta { ${ENLACE} }
        enlacesPiePrincipales { ${ENLACE} }
        enlacesPieSecundarios { ${ENLACE} }
        copyright
      }
    }
  }
`;

export async function getGlobales(): Promise<WPGlobales> {
  const data = await fetchGraphQL<{
    opcionesGlobales: { ajustesGlobales: WPGlobales };
  }>(QUERY, {}, REVALIDATE_LARGO);

  return data.opcionesGlobales.ajustesGlobales;
}
