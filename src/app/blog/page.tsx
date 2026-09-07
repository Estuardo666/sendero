import type { Metadata } from "next";

import {
  SeccionNoticias,
  metadataSeccion,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/noticias-d7674103/SeccionNoticias";

const SECCION = { categoria: "blog" };

export async function generateMetadata(): Promise<Metadata> {
  return metadataSeccion(SECCION);
}

export default async function Page() {
  return <SeccionNoticias {...SECCION} />;
}
