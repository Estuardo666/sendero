import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { HeroSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/HeroSection";
import { FilosofiaSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/FilosofiaSection";
import { OfertaSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/OfertaSection";
import { ExperienciaSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/ExperienciaSection";
import { NoticiasSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/NoticiasSection";
import { PodcastSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/PodcastSection";
import { CtaSection } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/CtaSection";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import { getInicio } from "@/lib/api/paginas";
import { getEpisodios, getNiveles, getNoticias } from "@/lib/api/contenidos";
import { getChrome } from "@/lib/chrome";
import {
  aBoton,
  aEpisodiosHome,
  aNivelesCarrusel,
  aNoticiasResumen,
  metadataDesde,
  texto,
  urlMedia,
} from "@/lib/mapeo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getInicio();

  return {
    ...metadataDesde(seo, "Unidad Educativa Particular Sendero"),
    title: "Unidad Educativa Particular Sendero",
  };
}

export default async function Home() {
  const [{ contenido }, chrome, niveles] = await Promise.all([
    getInicio(),
    getChrome(),
    getNiveles(),
  ]);

  const [noticias, episodios] = await Promise.all([
    getNoticias(contenido.noticiasCantidad ?? 4),
    getEpisodios(20),
  ]);

  const destacados = episodios
    .filter((episodio) => episodio.episodio?.destacado)
    .slice(-(contenido.podcastCantidad ?? 3))
    .reverse();

  return (
    <div className="sendero-root sendero-root--hero flex min-h-full flex-col">
      <SiteHeader {...chrome.header} />
      {/* #brx-content — flex:1, relative, overflow-x hidden */}
      <main className="relative w-full flex-1 overflow-x-hidden">
        <HeroSection
          video={urlMedia(contenido.heroVideo)}
          titulo={texto(contenido.heroTitulo)}
          texto={texto(contenido.heroTexto)}
          boton={aBoton(contenido.heroBoton)}
        />
        <FilosofiaSection
          video={urlMedia(contenido.filosofiaVideo)}
          antetitulo={texto(contenido.filosofiaAntetitulo)}
          titulo={texto(contenido.filosofiaTitulo)}
          texto={texto(contenido.filosofiaTexto)}
          boton={aBoton(contenido.filosofiaBoton)}
        />
        <OfertaSection
          video={urlMedia(contenido.ofertaVideo)}
          antetitulo={texto(contenido.ofertaAntetitulo)}
          titulo={texto(contenido.ofertaTitulo)}
          items={aNivelesCarrusel(niveles, "carrusel")}
        />
        <ExperienciaSection
          antetitulo={texto(contenido.experienciaAntetitulo)}
          titulo={texto(contenido.experienciaTitulo)}
          boton={aBoton(contenido.experienciaBoton)}
          tarjetas={(contenido.experienciaTarjetas ?? []).map((tarjeta) => ({
            titulo: tarjeta.titulo ?? "",
            texto: tarjeta.texto ?? "",
          }))}
          fotos={(contenido.experienciaFotos ?? [])
            .map((foto) => urlMedia(foto.imagen))
            .filter((url): url is string => Boolean(url))}
        />
        <NoticiasSection
          antetitulo={texto(contenido.noticiasAntetitulo)}
          titulo={texto(contenido.noticiasTitulo)}
          textoEnlace={texto(contenido.noticiasCta)}
          noticias={aNoticiasResumen(noticias)}
        />
        <PodcastSection
          antetitulo={texto(contenido.podcastAntetitulo)}
          titulo={texto(contenido.podcastTitulo)}
          episodios={aEpisodiosHome(destacados)}
        />
        <CtaSection
          antetitulo={texto(contenido.ctaAntetitulo)}
          titulo={texto(contenido.ctaTitulo)}
          boton={aBoton(contenido.ctaBoton)}
        />
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
