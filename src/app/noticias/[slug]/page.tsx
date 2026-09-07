import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoticiaPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/noticia-detalle/NoticiaPage";
import { getNoticia, getNoticias } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { categoriaNoticia, metadataDesde, rutaNoticia } from "@/lib/mapeo";
import { mediaAlt, mediaUrl } from "@/types/wp";
import type { WPNoticia } from "@/types/wp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Cuerpo tal como se escribió en el editor de WordPress. */
function cuerpoDe(noticia: WPNoticia): string {
  return noticia.content?.trim() ?? "";
}

function fechaLarga(fecha: string): string | undefined {
  const valor = new Date(fecha);
  if (Number.isNaN(valor.getTime())) return undefined;

  return valor.toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Mismo dato que mostraba el sitio anterior: ~200 palabras por minuto. */
function tiempoLectura(html: string): string | undefined {
  const palabras = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  if (!palabras) return undefined;

  const minutos = Math.max(1, Math.round(palabras / 200));

  return `Tiempo de lectura: ${minutos} ${minutos === 1 ? "minuto" : "minutos"}`;
}

export async function generateStaticParams() {
  const noticias = await getNoticias(50);

  return noticias
    .filter((noticia) => noticia.slug)
    .map((noticia) => ({ slug: noticia.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await getNoticia(slug);

  if (!noticia) return { title: "Noticia no encontrada – Escuela Sendero" };

  const metadata = metadataDesde(
    noticia.seo,
    `${noticia.title} – Escuela Sendero`,
  );

  return {
    ...metadata,
    description:
      metadata.description ?? noticia.noticiaCampos?.resumen ?? undefined,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const [noticia, chrome, noticias] = await Promise.all([
    getNoticia(slug),
    getChrome(),
    getNoticias(12),
  ]);

  if (!noticia) notFound();

  const cuerpo = cuerpoDe(noticia);

  const seccion = categoriaNoticia(noticia);

  // Se ofrecen otras entradas de la misma sección; si no hay suficientes, se
  // completa con las demás.
  const mismaSeccion = noticias.filter(
    (otra) => categoriaNoticia(otra) === seccion,
  );

  const candidatas = mismaSeccion.length > 1 ? mismaSeccion : noticias;

  const relacionadas = candidatas
    .filter((otra) => otra.slug && otra.slug !== noticia.slug)
    .slice(0, 3)
    .map((otra) => ({
      title: otra.title,
      image: mediaUrl(otra.featuredImage),
      alt: mediaAlt(otra.featuredImage) || otra.title,
      href: rutaNoticia(otra),
    }));

  return (
    <NoticiaPage
      chrome={chrome}
      categoria={seccion}
      fecha={fechaLarga(noticia.date)}
      titulo={noticia.title}
      imagen={mediaUrl(noticia.featuredImage) || undefined}
      imagenAlt={mediaAlt(noticia.featuredImage) || noticia.title}
      cuerpo={cuerpo}
      tiempoLectura={tiempoLectura(cuerpo)}
      relacionadas={relacionadas}
    />
  );
}
