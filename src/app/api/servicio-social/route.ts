import { NextRequest, NextResponse } from "next/server";

/**
 * Recibe el formulario de anuncios de servicio social y lo reenvía a
 * WordPress con el secreto compartido. El secreto vive solo en el servidor,
 * así el endpoint de WordPress no queda abierto a internet.
 */

interface Cuerpo {
  tipo?: unknown;
  titulo?: unknown;
  niveles?: unknown;
  descripcion?: unknown;
  telefono?: unknown;
  email?: unknown;
  website?: unknown;
}

const texto = (valor: unknown): string =>
  typeof valor === "string" ? valor.trim() : "";

const lista = (valor: unknown): string[] =>
  Array.isArray(valor) ? valor.map(texto).filter(Boolean) : [];

/**
 * Se usa la forma `?rest_route=`, que funciona tanto si WordPress tiene los
 * enlaces permanentes bonitos como si no. Con `/wp-json/` y los enlaces
 * simples, WordPress devuelve la portada con HTTP 200 y el envío parecería
 * correcto sin haberse guardado nada.
 */
function endpointWordPress(): string | null {
  const base = process.env.NEXT_PUBLIC_WP_URL;

  return base
    ? `${base.replace(/\/$/, "")}/index.php?rest_route=/sendero/v1/anuncios`
    : null;
}

export async function POST(request: NextRequest) {
  const secreto = process.env.WP_FORM_SECRET;
  const endpoint = endpointWordPress();

  if (!secreto || !endpoint) {
    return NextResponse.json(
      { message: "El formulario no está configurado. Avisa al colegio." },
      { status: 503 },
    );
  }

  const cuerpo = (await request.json().catch(() => ({}))) as Cuerpo;

  const datos = {
    tipo: texto(cuerpo.tipo),
    titulo: texto(cuerpo.titulo),
    niveles: lista(cuerpo.niveles),
    descripcion: texto(cuerpo.descripcion),
    telefono: texto(cuerpo.telefono),
    email: texto(cuerpo.email),
    website: texto(cuerpo.website),
  };

  // Se valida también aquí para no molestar a WordPress con envíos vacíos.
  if (
    !datos.titulo ||
    !datos.tipo ||
    datos.niveles.length === 0 ||
    datos.descripcion.length < 20 ||
    !datos.telefono ||
    !datos.email
  ) {
    return NextResponse.json(
      { message: "Faltan datos por completar en el formulario." },
      { status: 422 },
    );
  }

  let respuesta: Response;

  try {
    respuesta = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-sendero-form-secret": secreto,
      },
      body: JSON.stringify(datos),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { message: "No se pudo enviar el anuncio. Inténtalo de nuevo." },
      { status: 502 },
    );
  }

  const detalle = (await respuesta.json().catch(() => null)) as {
    ok?: boolean;
    message?: string;
  } | null;

  // Un 200 con cuerpo que no es el nuestro significa que la petición no llegó
  // al endpoint: no se puede dar el envío por bueno.
  if (!respuesta.ok || !detalle?.ok) {
    return NextResponse.json(
      {
        message:
          detalle?.message ??
          "No se pudo guardar el anuncio. Inténtalo de nuevo.",
      },
      { status: respuesta.status === 429 ? 429 : 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
