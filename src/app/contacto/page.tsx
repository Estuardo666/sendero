import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";
import { ContactoSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/contacto-f1a77a9c/ContactoSection";

import { getContacto } from "@/lib/api/paginas";
import { getGlobales } from "@/lib/api/globales";
import { getChrome } from "@/lib/chrome";
import { metadataDesde, texto } from "@/lib/mapeo";
import { unwrap } from "@/types/wp";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContacto();

  return metadataDesde(seo, "Contacto – Escuela Sendero");
}

/** Clon de https://sendero2.fmmarketingdigital.com/contacto/ */
export default async function ContactoPage() {
  const [{ contenido }, chrome, globales] = await Promise.all([
    getContacto(),
    getChrome(),
    getGlobales(),
  ]);

  return (
    <div className="sendero-root sendero-base15 flex min-h-full flex-col">
      <SiteHeader {...chrome.header} />
      {/* #brx-content — flex:1, relative, overflow-x hidden */}
      <main className="relative w-full flex-1 overflow-x-hidden">
        <ContactoSection
          antetitulo={texto(contenido.antetitulo)}
          titulo={texto(contenido.titulo)}
          telefono={texto(globales.telefonoPrincipal)}
          email={texto(globales.email)}
          tituloDirectorio={texto(contenido.tituloDirectorio)}
          directorio={(contenido.directorio ?? []).map((entrada) => ({
            area: entrada.area ?? "",
            telefono: entrada.telefono ?? "",
          }))}
          tituloRedes={texto(globales.tituloRedes)}
          redes={(globales.redesSociales ?? [])
            .filter((red) => red.url)
            .map((red) => ({ red: unwrap(red.red), url: red.url ?? "" }))}
          mapaTitulo={texto(contenido.mapaTitulo)}
          mapaLatitud={texto(contenido.mapaLatitud)}
          mapaLongitud={texto(contenido.mapaLongitud)}
        />
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
