"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
const ASSETS = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/galeria-6d108626/images";
const PHOTOS = [
  "MG_4051-scaled.jpg", "IMG_1247-scaled.jpg", "Copia-de-_MG_3295-scaled.jpg", "MG_8030-scaled.jpg",
  "MG_7681-scaled.jpg", "MG_8077-scaled.jpg", "Copia-de-IMG_3782-scaled.jpg", "Copia-de-IMG_3759-scaled.jpg",
  "Copia-de-IMG_9594-scaled.jpg", "Copia-de-IMG_4456-scaled.jpg", "IMG_0077-scaled.jpg", "MG_7748-scaled.jpg",
  "MG_7712-scaled.jpg", "MG_3409-scaled.jpg", "510960123_18387759118186145_7593259977311163963_n.jpg", "IMG_0026-scaled.jpg",
  "DSC_0399-scaled.jpg", "MG_8309-scaled.jpg", "MG_8230-scaled.jpg", "MG_8212-scaled.jpg",
] as const;

/**
 * El mosaico repite el mismo patrón de seis posiciones, así que el orden en
 * que se suben las fotos en WordPress basta para armarlo.
 */
const TILE_PLACEMENTS = [
  "large left", "small c3", "small c4", "large right", "small c1", "small c2",
] as const;

const PAGE_CSS = `
.galeria-page { overflow-x: hidden; background: #fff; }
.galeria-page .gallery-hero { position: relative; display: flex; min-height: 606px; margin-top: -153px; flex-direction: column; align-items: center; justify-content: center; padding: 150px 20px 0; }
.galeria-page .gallery-hero > * { position: relative; z-index: 1; }
.galeria-page .gallery-eyebrow { margin: 0 0 16px; border-radius: 16px; background: rgba(255,193,7,.2); padding: 1px 10px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.galeria-page .gallery-title { max-width: 666px; margin: 0; color: #0099a5; font-size: clamp(54px,5.1vw,75px); font-weight: 800; line-height: 1.05; text-align: center; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,6px 0 #fdb92e,-6px 0 #fdb92e,0 6px #fdb92e,0 -6px #fdb92e,4px 4px #fdb92e,-4px -4px #fdb92e; }
.galeria-page .gallery-down { display: grid; width: 40px; height: 40px; margin-top: 42px; place-items: center; border-radius: 50%; background: #f5f5f5; color: #0099a5; font-size: 25px; }
.galeria-page .gallery-wall-section { min-height: 3581px; padding: 45px 0; }
.galeria-page .gallery-wall { display: grid; width: min(1260px,100%); grid-template-columns: repeat(4,minmax(0,1fr)); grid-auto-rows: calc((min(1260px,100vw) - 45px) / 4); gap: 15px; }
.galeria-page .gallery-tile { position: relative; min-width: 0; overflow: hidden; border: 0; border-radius: 24px; background: #f5f5f5; cursor: zoom-in; opacity: 0; animation: gallery-tile-in 420ms cubic-bezier(0.23,1,0.32,1) forwards; }
.galeria-page .gallery-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform 320ms cubic-bezier(0.23,1,0.32,1), filter 220ms ease-out; }
@keyframes gallery-tile-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@media (hover: hover) and (pointer: fine) {
  .galeria-page .gallery-tile:hover img { transform: scale(1.06); filter: saturate(1.08); }
  .galeria-page .gallery-tile:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(28,39,40,.12); }
}
.galeria-page .gallery-tile.large-left, .galeria-page .gallery-tile.large-right { grid-row: span 2; }
.galeria-page .gallery-tile.large-left { grid-column: 1 / span 2; }
.galeria-page .gallery-tile.large-right { grid-column: 3 / span 2; }
.galeria-page .gallery-tile.small-c1 { grid-column: 1; }
.galeria-page .gallery-tile.small-c2 { grid-column: 2; }
.galeria-page .gallery-tile.small-c3 { grid-column: 3; }
.galeria-page .gallery-tile.small-c4 { grid-column: 4; }
.galeria-page .gallery-cta { position: relative; display: flex; min-height: 444px; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; background: linear-gradient(135deg,#2faeb9,#63c4cb); padding: 45px 20px; text-align: center; }
.galeria-page .gallery-cta > * { position: relative; z-index: 1; }
.galeria-page .gallery-cta-eyebrow { margin: 0 0 29px; border-radius: 16px; background: rgba(245,245,245,.24); padding: 2px 15px 3px; color: #f5f5f5; font-size: 16px; font-weight: 600; }
.galeria-page .gallery-cta-title { max-width: 666px; color: #f5f5f5; font-size: clamp(34px,3.5vw,52px); font-weight: 800; line-height: 1.12; }
.galeria-page .gallery-cta .nb-arrow-button-v2 { margin-top: 24px; }
.galeria-page .gallery-lightbox { position: fixed; inset: 0; z-index: 10000; display: grid; place-items: center; background: rgba(14,27,29,.92); padding: 30px; opacity: 0; transform: scale(.985); transition: opacity 220ms cubic-bezier(0.23,1,0.32,1), transform 260ms cubic-bezier(0.23,1,0.32,1); }
.galeria-page .gallery-lightbox[data-open="true"] { opacity: 1; transform: scale(1); }
.galeria-page .gallery-lightbox img { max-width: min(1100px,100%); max-height: calc(100vh - 60px); border-radius: 18px; object-fit: contain; transform: scale(.985); transition: transform 280ms cubic-bezier(0.23,1,0.32,1); }
.galeria-page .gallery-lightbox[data-open="true"] img { transform: scale(1); }
.galeria-page .gallery-lightbox button { position: absolute; top: 18px; right: 24px; border: 0; background: transparent; color: #fff; cursor: pointer; font-size: 40px; line-height: 1; opacity: .8; transition: opacity 160ms ease-out, transform 160ms ease-out; }
.galeria-page .gallery-lightbox button:hover { opacity: 1; transform: rotate(90deg); }
@media (hover: none) {
  .galeria-page .gallery-lightbox button:hover { transform: none; }
}
@media (max-width: 767px) {
  .galeria-page .gallery-hero { padding-inline: 16px; }
  .galeria-page .gallery-title { font-size: 54px; }
  .galeria-page .gallery-wall-section { min-height: 1458px; padding: 45px 0; }
  .galeria-page .gallery-wall { grid-auto-rows: calc((100vw - 42px) / 4); gap: 14px; }
  .galeria-page .gallery-tile { border-radius: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .galeria-page .gallery-tile { animation: none; opacity: 1; }
  .galeria-page .gallery-tile img { transition: filter 180ms ease-out; }
  .galeria-page .gallery-lightbox,
  .galeria-page .gallery-lightbox img { transition: opacity 180ms ease-out; transform: none; }
}
`;

export interface GaleriaFoto {
  src: string;
  alt: string;
}

export interface GaleriaPageProps {
  chrome: Chrome;
  antetitulo?: string;
  titulo?: string;
  fotos?: GaleriaFoto[];
  ctaAntetitulo?: string;
  ctaTitulo?: string;
  ctaBoton?: { etiqueta: string; url: string };
}

export function GaleriaPage({
  chrome,
  antetitulo,
  titulo,
  fotos,
  ctaAntetitulo,
  ctaTitulo,
  ctaBoton,
}: GaleriaPageProps) {
  const imagenes: GaleriaFoto[] = fotos?.length
    ? fotos
    : PHOTOS.map((photo) => ({ src: `${ASSETS}/${photo}`, alt: "" }));

  const [selected, setSelected] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);

  const openLightbox = useCallback((src: string) => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    if (openFrameRef.current !== null) window.cancelAnimationFrame(openFrameRef.current);
    setSelected(src);
    setLightboxOpen(false);
    openFrameRef.current = window.requestAnimationFrame(() => {
      setLightboxOpen(true);
      openFrameRef.current = null;
    });
  }, []);

  const closeLightbox = useCallback(() => {
    if (openFrameRef.current !== null) {
      window.cancelAnimationFrame(openFrameRef.current);
      openFrameRef.current = null;
    }
    setLightboxOpen(false);
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setSelected(null);
      closeTimerRef.current = null;
    }, 260);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeLightbox, selected]);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    if (openFrameRef.current !== null) window.cancelAnimationFrame(openFrameRef.current);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  return (
    <div className="sendero-root sendero-base15 galeria-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="gallery-hero">
          <BlurReveal as="h3" className="gallery-eyebrow">
            {antetitulo ?? "Capturando momentos inolvidables"}
          </BlurReveal>
          <LetterLauncher as="h1" className="gallery-title">
            {titulo ?? "Postales de Nuestro Sendero"}
          </LetterLauncher>
          <span className="gallery-down" aria-hidden="true">↓</span>
        </section>
        <section className="gallery-wall-section brx-section" aria-label="Galería de momentos Sendero">
          <div className="gallery-wall">
            {imagenes.map((foto, index) => (
              <button
                className={`gallery-tile ${TILE_PLACEMENTS[index % TILE_PLACEMENTS.length].replace(" ", "-")}`}
                style={{ animationDelay: `${Math.min(index, 9) * 35}ms` }}
                type="button"
                key={foto.src}
                onClick={() => openLightbox(foto.src)}
                aria-label={foto.alt || `Ampliar fotografía ${index + 1}`}
              >
                <img src={foto.src} alt={foto.alt} />
              </button>
            ))}
          </div>
        </section>
        <section className="gallery-cta">
          <BlurReveal as="h3" className="gallery-cta-eyebrow">
            {ctaAntetitulo ?? "El mejor comienzo para grandes futuros"}
          </BlurReveal>
          <LetterLauncher as="h2" className="gallery-cta-title">
            {ctaTitulo ?? "Un espacio donde tus hijos crecerán con amor y aprendizaje"}
          </LetterLauncher>
          <ArrowButton
            href={ctaBoton?.url || "/admisiones/"}
            label={ctaBoton?.etiqueta || "¡Inscribe a tus hijos hoy!"}
          />
        </section>
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
      {selected ? <div className="gallery-lightbox" data-open={lightboxOpen ? "true" : "false"} role="dialog" aria-modal="true" aria-label="Fotografía ampliada" onClick={closeLightbox}><button type="button" onClick={closeLightbox} aria-label="Cerrar fotografía">×</button><img src={selected} alt="Fotografía ampliada de Sendero" onClick={(event) => event.stopPropagation()} /></div> : null}
    </div>
  );
}
