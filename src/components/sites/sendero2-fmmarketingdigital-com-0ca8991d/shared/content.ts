/**
 * Tipos y utilidades para pasar el contenido de WordPress a los componentes
 * de este sitio sin tocar su marcado ni su CSS.
 */

export interface Enlace {
  etiqueta: string;
  url: string;
  externo?: boolean;
  /** Segundo nivel del encabezado. Como mucho hay dos niveles. */
  hijos?: Enlace[];
}

export interface Imagen {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Boton {
  etiqueta: string;
  url: string;
}

/**
 * Los identificadores `brxe-*` heredados del sitio original siguen siendo
 * necesarios porque el CSS extraído los usa como selectores. Esta función
 * mantiene esa lista de identificadores y solo reemplaza texto y enlace por
 * lo que venga del backend.
 */
export function conIds<
  T extends { label: string; href: string; external?: boolean },
>(plantilla: readonly T[], enlaces: Enlace[] | undefined): T[] {
  if (!enlaces?.length) {
    return plantilla as T[];
  }

  const ultima = plantilla[plantilla.length - 1];

  return enlaces.map((enlace, index) => {
    const base = plantilla[index] ?? ultima;

    // Si el backend trae más enlaces que la plantilla, se reutiliza la última
    // fila pero con identificadores propios para no duplicar ids en el DOM.
    const idsPropios = plantilla[index]
      ? {}
      : Object.fromEntries(
          Object.entries(base)
            .filter(
              ([clave, valor]) =>
                clave.toLowerCase().includes("id") && typeof valor === "string",
            )
            .map(([clave, valor]) => [clave, `${valor}-${index}`]),
        );

    return {
      ...base,
      ...idsPropios,
      label: enlace.etiqueta,
      href: enlace.url,
      external: enlace.externo ?? false,
      hijos: enlace.hijos,
    };
  });
}

/** Props de cabecera, pie y widget que comparten todas las páginas. */
export interface Chrome {
  header: {
    logo?: Imagen;
    menuEscritorio?: Enlace[];
    menuDesplegable?: Enlace[];
    botonesCta?: Enlace[];
  };
  footer: {
    logo?: Imagen;
    enlacesPrincipales?: Enlace[];
    enlacesSecundarios?: Enlace[];
    redes?: { red: string; url: string }[];
    tituloRedes?: string;
    copyright?: string;
  };
  whatsapp: {
    phone?: string;
    label?: string;
    message?: string;
    href?: string;
  };
}
