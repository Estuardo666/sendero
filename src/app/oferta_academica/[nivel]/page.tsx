import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AcademicLevelPage } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/AcademicLevelPage";
import { getNivel, getNiveles } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import { aNivelData, metadataDesde } from "@/lib/mapeo";

interface Props {
  params: Promise<{ nivel: string }>;
}

/**
 * Una página por cada nivel publicado en WordPress. Si el colegio añade un
 * nivel nuevo, su página aparece sola: no hay que tocar código.
 */
export async function generateStaticParams() {
  const niveles = await getNiveles();

  return niveles
    .map((nivel) => nivel.nivel?.ruta)
    .filter((ruta): ruta is string => Boolean(ruta))
    .map((ruta) => ({ nivel: ruta }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nivel: ruta } = await params;
  const nivel = await getNivel(ruta);

  return metadataDesde(
    nivel?.seo,
    `${nivel?.title ?? "Oferta académica"} – Escuela Sendero`,
  );
}

export default async function Page({ params }: Props) {
  const { nivel: ruta } = await params;
  const [nivel, chrome] = await Promise.all([getNivel(ruta), getChrome()]);

  if (!nivel) {
    notFound();
  }

  return <AcademicLevelPage data={aNivelData(nivel)} chrome={chrome} />;
}
