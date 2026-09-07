import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";
import type { OfertaLevelItem } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/OfertaLevelCard";
import { OfertaGrid } from "./OfertaGrid";

import type { Chrome } from "../shared/content";
const BASE = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-educativa-ba51ef1b/images";
const TEAL = "#0099a5";

const ITEMS: readonly OfertaLevelItem[] = [
  { title: "Inicial 1", image: `${BASE}/MG_4271-1024x683.jpg`, href: "/oferta_academica/inicial-1/" },
  { title: "Inicial 2", image: `${BASE}/Copia-de-_MG_5918-1024x683.jpg`, href: "/oferta_academica/inicial-2/" },
  { title: "Básica Preparatoria", image: `${BASE}/Copia-de-IMG_8616-683x1024.jpg`, href: "/oferta_academica/basica-preparatoria/" },
  { title: "Básica Elemental", image: `${BASE}/MG_4558-1024x683.jpg`, href: "/oferta_academica/basica-elemental/" },
  { title: "Básica Media", image: `${BASE}/Copia-de-IMG_9701-1024x683.jpg`, href: "/oferta_academica/basica-media/" },
  { title: "Básica Superior", image: `${BASE}/MG_8269-1-scaled.jpg`, href: "/oferta_academica/basica-superior/" },
];

const PAGE_CSS = `
.oferta-educativa-page { overflow-x: hidden; background: #fff; }
.oferta-educativa-page .oferta-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  /* Sube bajo la cabecera flotante y recupera el hueco con el padding. */
  margin-top: -85px;
  padding: 137px 24px 96px;
  /* Flat teal-to-white wash. The source used a looping background video here;
     a static gradient keeps the same colour arc without the download. */
  background: linear-gradient(180deg, #ffffff 0%, #f2fbfc 34%, #d6f0f3 72%, #b6e6ea 100%);
}
.oferta-educativa-page .oferta-hero > * { position: relative; z-index: 1; }
.oferta-educativa-page .oferta-intro { display: flex; width: 100%; max-width: 1260px; flex-direction: column; align-items: center; justify-content: flex-start; padding-bottom: 24px; }
.oferta-educativa-page .oferta-eyebrow { margin: 0 0 8px; border-radius: 16px; padding: 1px 10px 2px; background: #ebebeb; color: ${TEAL}; font-size: 16.5px; font-weight: 600; line-height: 23px; }
.oferta-educativa-page .oferta-title { margin: 20px 0; padding: 10px; color: ${TEAL}; font-size: clamp(48px, 5.2vw, 75px); font-weight: 800; line-height: 1.05; letter-spacing: -2px; text-align: center; text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1.5px 1.5px #fff, -1.5px -1.5px #fff, 1.5px -1.5px #fff, -1.5px 1.5px #fff, 6px 0 #fdb92e, -6px 0 #fdb92e, 0 6px #fdb92e, 0 -6px #fdb92e, 4px 4px #fdb92e, -4px -4px #fdb92e, 4px -4px #fdb92e, -4px 4px #fdb92e; }
@media (max-width: 767px) {
  .oferta-educativa-page .oferta-hero { padding: 137px 16px 64px; }
  .oferta-educativa-page .oferta-eyebrow { display: none; }
  .oferta-educativa-page .oferta-title { width: 360px; max-width: 100%; font-size: 64px; line-height: 1.1; }
}
`;

export interface OfertaEducativaPageProps {
  chrome: Chrome;
  antetitulo?: string;
  titulo?: string;
  items?: readonly OfertaLevelItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function OfertaEducativaPage({
  chrome,
  antetitulo,
  titulo,
  items,
  ctaLabel,
  ctaHref,
}: OfertaEducativaPageProps) {
  const niveles = items?.length ? items : ITEMS;

  return (
    <div className="sendero-root sendero-base15 oferta-educativa-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="oferta-hero">
          <div className="oferta-intro">
            <BlurReveal as="h3" className="oferta-eyebrow">
              {antetitulo ?? "Nuestra Propuesta"}
            </BlurReveal>
            <LetterLauncher as="h1" className="oferta-title">
              {titulo ?? "Oferta académica"}
            </LetterLauncher>
          </div>
          <OfertaGrid items={niveles} ctaLabel={ctaLabel} ctaHref={ctaHref} />
        </section>
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
