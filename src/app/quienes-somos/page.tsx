import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";
import { HeroSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/HeroSection";
import { BienvenidaSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/BienvenidaSection";
import { MisionVisionSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/MisionVisionSection";

import { getQuienesSomos } from "@/lib/api/paginas";
import { getChrome } from "@/lib/chrome";
import { aGaleria, metadataDesde, texto, urlMedia } from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getQuienesSomos();

  return metadataDesde(seo, "Quienes Somos – Escuela Sendero");
}

/**
 * Clon de https://sendero2.fmmarketingdigital.com/quienes-somos/
 *
 * El tercer bloque del original (#brxe-awdabo, "Premios y reconocimiento")
 * está oculto en todos los breakpoints, así que no se monta.
 */
export default async function QuienesSomosPage() {
  const [{ contenido }, chrome] = await Promise.all([
    getQuienesSomos(),
    getChrome(),
  ]);

  return (
    <div className="sendero-root sendero-base15 flex min-h-full flex-col">
      <SiteHeader {...chrome.header} />
      {/* #brx-content — flex:1, relative, overflow-x hidden */}
      <main className="relative w-full flex-1 overflow-x-hidden">
        <HeroSection
          video={urlMedia(contenido.heroVideo)}
          antetitulo={texto(contenido.heroAntetitulo)}
          titulo={texto(contenido.heroTitulo)}
        />
        {/* #brxe-sgnwvn — column section, width 100vw, no padding */}
        <section className="brx-section w-full self-stretch justify-center">
          <BienvenidaSection
            antetitulo={texto(contenido.bienvenidaAntetitulo)}
            titulo={texto(contenido.bienvenidaTitulo)}
            contenido={texto(contenido.bienvenidaTexto)}
            fotos={aGaleria(contenido.bienvenidaGaleria)}
          />
          <MisionVisionSection
            misionTitulo={texto(contenido.misionTitulo)}
            misionTexto={texto(contenido.misionTexto)}
            visionTitulo={texto(contenido.visionTitulo)}
            visionTexto={texto(contenido.visionTexto)}
            fotos={aGaleria(contenido.misionGaleria)}
          />
        </section>
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
