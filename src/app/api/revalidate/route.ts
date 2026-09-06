import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/** Comprobación rápida desde el navegador. */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    secretConfigured: Boolean(process.env.WP_REVALIDATE_SECRET),
  });
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.WP_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Token inválido" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    tag?: string;
    path?: string;
  };

  if (body.path) {
    revalidatePath(body.path);
    return NextResponse.json({ revalidated: true, path: body.path });
  }

  // `expire: 0` caduca la caché de inmediato, así el editor ve su cambio en el
  // primer refresco. Con el perfil "max" la primera visita todavía sirve la
  // copia antigua y refresca por detrás, lo que confunde a quien acaba de
  // guardar. La forma de un solo argumento está obsoleta en Next 16.
  revalidateTag(body.tag ?? "wp-content", { expire: 0 });

  return NextResponse.json({ revalidated: true, tag: body.tag ?? "wp-content" });
}
