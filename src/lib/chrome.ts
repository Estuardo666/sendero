import { getGlobales } from "@/lib/api/globales";
import type {
  Chrome,
  Enlace,
  Imagen,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/content";
import type { WPEnlace, WPMedia } from "@/types/wp";
import { mediaAlt, mediaUrl, unwrap } from "@/types/wp";

function imagen(media: WPMedia | null | undefined): Imagen | undefined {
  const url = mediaUrl(media);
  if (!url) return undefined;

  return {
    url,
    alt: mediaAlt(media),
    width: media?.node?.mediaDetails?.width ?? undefined,
    height: media?.node?.mediaDetails?.height ?? undefined,
  };
}

function enlaces(lista: WPEnlace[] | null | undefined): Enlace[] | undefined {
  if (!lista?.length) return undefined;

  return lista
    .filter((item) => item.etiqueta && item.url !== null)
    .map((item) => ({
      etiqueta: item.etiqueta ?? "",
      url: item.url ?? "",
      externo: item.externo ?? false,
    }));
}

/**
 * Cabecera, pie y widget de WhatsApp para cualquier página.
 * Todas las rutas la llaman, así que la caché de fetch la resuelve una sola vez.
 */
export async function getChrome(): Promise<Chrome> {
  const g = await getGlobales();

  return {
    header: {
      logo: imagen(g.logoCabecera),
      menuEscritorio: enlaces(g.menuEscritorio),
      menuDesplegable: enlaces(g.menuDesplegable),
      botonesCta: enlaces(g.botonesCta),
    },
    footer: {
      logo: imagen(g.logoPie),
      enlacesPrincipales: enlaces(g.enlacesPiePrincipales),
      enlacesSecundarios: enlaces(g.enlacesPieSecundarios),
      redes: (g.redesSociales ?? [])
        .filter((r) => r.url)
        .map((r) => ({ red: unwrap(r.red), url: r.url ?? "" })),
      tituloRedes: g.tituloRedes ?? undefined,
      copyright: g.copyright ?? undefined,
    },
    whatsapp: {
      phone: g.whatsapp?.numero ?? undefined,
      label: g.whatsapp?.etiquetaWidget ?? undefined,
      message: g.whatsapp?.mensaje ?? undefined,
      href: g.whatsapp?.enlaceCorto ?? undefined,
    },
  };
}
