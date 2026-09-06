"use client";

import { useEffect, useState } from "react";
import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { MotionAccordion } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/MotionAccordion";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "./content";
const TEAL = "#0099a5";

export interface AcademicLevelData {
  pageClass: string;
  /** Ruta de la que salen las imágenes cuando no vienen de WordPress. */
  assetBase: string;
  title: string;
  heroKicker: string;
  storyLabel: string;
  storyHeading: string;
  paragraphs: string[];
  requirements: string[];
  images: Array<{ src: string; alt: string }>;
  /** Foto de fondo del bloque de cierre. */
  ctaImage?: string;
  ctaKicker?: string;
  ctaTitle?: string;
  primaryButton?: { etiqueta: string; url: string };
  finalButton?: { etiqueta: string; url: string };
}

interface AcademicImageRailProps {
  images: AcademicLevelData["images"];
  title: string;
}

function AcademicImageRail({ images, title }: AcademicImageRailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  useEffect(() => {
    if (images.length < 2 || paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [images.length, paused]);

  const step = viewportWidth <= 767 ? Math.max(320, viewportWidth - 16) : viewportWidth * 0.45;
  const railStyle = { "--rail-shift": `${activeIndex ? `-${activeIndex * step}px` : "0px"}` } as React.CSSProperties;

  return (
    <div
      className="academic-level__rail"
      role="region"
      aria-label={`Galería de ${title}`}
      tabIndex={images.length > 1 ? 0 : -1}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (images.length < 2) return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setActiveIndex((current) => (current + 1) % images.length);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setActiveIndex((current) => (current - 1 + images.length) % images.length);
        }
      }}
    >
      <div className="academic-level__rail-track" style={railStyle}>
        {images.map((image, index) => (
          <figure className="academic-level__rail-item" key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              className="academic-level__rail-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </figure>
        ))}
      </div>
      {images.length > 1 ? (
        <div className="academic-level__rail-status" aria-live="polite">
          {activeIndex + 1} / {images.length}
        </div>
      ) : null}
    </div>
  );
}

const PAGE_CSS = `
.academic-level-page { overflow-x: hidden; background: #fff; }
.academic-level-page .academic-level__hero { position: relative; display: flex; min-height: 606px; margin-top: -100px; flex-direction: column; align-items: center; justify-content: center; padding-top: 100px; }
.academic-level-page .academic-level__hero::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(rgba(255,255,255,0), #fff); }
.academic-level-page .academic-level__hero > * { position: relative; z-index: 1; }
.academic-level-page .academic-level__kicker, .academic-level-page .academic-level__label { display: block; width: fit-content; margin: 0 auto 16px; border-radius: 16px; padding: 1px 10px 2px; background: rgba(255,193,7,.18); color: ${TEAL}; font-size: 16px; font-weight: 600; line-height: 23px; }
.academic-level-page .academic-level__title { margin: 0; padding: 10px; color: ${TEAL}; font-size: clamp(54px, 5.1vw, 75px); font-weight: 800; line-height: 1.05; letter-spacing: -2px; text-align: center; text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1.5px 1.5px #fff, -1.5px -1.5px #fff, 1.5px -1.5px #fff, -1.5px 1.5px #fff, 6px 0 #fdb92e, -6px 0 #fdb92e, 0 6px #fdb92e, 0 -6px #fdb92e, 4px 4px #fdb92e, -4px -4px #fdb92e, 4px -4px #fdb92e, -4px 4px #fdb92e; }
.academic-level-page .academic-level__down { display: grid; width: 40px; height: 40px; margin-top: 42px; place-items: center; border-radius: 50%; background: #f5f5f5; color: ${TEAL}; font-size: 26px; }
.academic-level-page .academic-level__story { display: flex; width: min(1260px, 100%); min-height: 923px; align-items: center; gap: 20px; margin: 0 auto; padding: 0 0 66px; }
.academic-level-page .academic-level__copy { width: 45%; flex: 0 0 45%; align-self: center; }
.academic-level-page .academic-level__label { margin: 0 0 20px; background: #ebebeb; color: ${TEAL}; }
.academic-level-page .academic-level__heading { margin: 0; color: ${TEAL}; font-size: clamp(32px, 3vw, 48px); font-weight: 800; line-height: 1.08; letter-spacing: 0; }
.academic-level-page .academic-level__copy-text { margin-top: 16px; color: #1c2728; font-size: 15px; font-weight: 500; line-height: 1.7; text-align: justify; }
.academic-level-page .academic-level__copy-text p { margin: 0 0 18px; }
.academic-level-page .academic-level__copy-text p:last-child { margin-bottom: 0; font-weight: 700; }
.academic-level-page .academic-level__requirements { margin: 20px 0 24px; border-radius: 16px; background: #f5f5f5; color: #1c2728; }
.academic-level-page .academic-level__requirements .motion-accordion__trigger { border: 0; background: #ffc107; padding: 8px 20px; color: #1c2728; font: inherit; font-weight: 700; }
.academic-level-page .academic-level__requirements .motion-accordion__panel-inner { padding: 0 38px 18px; }
.academic-level-page .academic-level__requirements ol { margin: 0; padding: 0; font-size: 14px; line-height: 1.7; }
.academic-level-page .academic-level__requirements li { padding-left: 2px; }
.academic-level-page .academic-level__rail { position: sticky; top: 90px; width: 55%; height: 666px; overflow: hidden; border-radius: 2em; outline: none; }
.academic-level-page .academic-level__rail:focus-visible { box-shadow: 0 0 0 4px rgba(0,153,165,.3); }
.academic-level-page .academic-level__rail-track { display: flex; width: max-content; height: 100%; gap: 5vw; transform: translate3d(var(--rail-shift), 0, 0); transition: transform 780ms cubic-bezier(.23,1,.32,1); will-change: transform; }
.academic-level-page .academic-level__rail-item { width: 40vw; height: 666px; flex: 0 0 40vw; overflow: hidden; margin: 0; border-radius: 2em; }
.academic-level-page .academic-level__rail-image { display: block; width: 100%; height: 100%; object-fit: cover; user-select: none; transition: transform 420ms cubic-bezier(.23,1,.32,1); }
@media (hover: hover) and (pointer: fine) {
  .academic-level-page .academic-level__rail:hover .academic-level__rail-image { transform: scale(1.025); }
  .academic-level-page .academic-level__rail:hover .academic-level__rail-status { opacity: 1; }
}
.academic-level-page .academic-level__rail-status { position: absolute; right: 16px; bottom: 16px; border-radius: 999px; padding: 5px 12px; background: rgba(28,39,40,.56); color: #fff; font-size: 12px; font-weight: 600; opacity: .82; transition: opacity 220ms ease; }
.academic-level-page .academic-level__rail:focus-visible .academic-level__rail-status { opacity: 1; }
.academic-level-page .academic-level__cta { position: relative; display: flex; min-height: 444px; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; background: ${TEAL} var(--academic-cta-image) center / cover; color: #fff; }
.academic-level-page .academic-level__cta::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: rgba(0,153,165,.79); }
.academic-level-page .academic-level__cta > * { position: relative; z-index: 1; }
.academic-level-page .academic-level__cta-kicker { margin: 0 0 29px; border-radius: 16px; padding: 2px 15px 3px; background: rgba(245,245,245,.24); color: #f5f5f5; font-size: 16px; font-weight: 600; }
.academic-level-page .academic-level__cta-title { max-width: 666px; margin: 0; color: #f5f5f5; font-size: clamp(34px, 3.5vw, 52px); font-weight: 800; line-height: 1.12; text-align: center; }
.academic-level-page .academic-level__cta .nb-arrow-button-v2 { margin-top: 24px; }
@media (max-width: 767px) {
  .academic-level-page .academic-level__hero { width: 100%; min-height: 600px; margin-top: -120px; padding: 200px 16px 0; }
  .academic-level-page .academic-level__kicker { max-width: calc(100vw - 32px); text-align: center; }
  .academic-level-page .academic-level__title { font-size: 54px; }
  .academic-level-page .academic-level__story { display: flex; width: 100%; min-height: 0; flex-direction: column; gap: 0; padding: 50px 16px 40px; }
  .academic-level-page .academic-level__copy { width: 100%; flex-basis: auto; text-align: center; }
  .academic-level-page .academic-level__heading { font-size: 36px; }
  .academic-level-page .academic-level__copy-text { text-align: center; }
  .academic-level-page .academic-level__rail { position: relative; top: auto; order: -1; width: 100%; height: 300px; margin-bottom: 32px; }
  .academic-level-page .academic-level__rail-track { gap: 16px; }
  .academic-level-page .academic-level__rail-item { width: calc(100vw - 32px); height: 300px; flex-basis: calc(100vw - 32px); }
  .academic-level-page .academic-level__cta { min-height: 600px; padding: 90px 16px; }
  .academic-level-page .academic-level__cta-title { max-width: 360px; }
}
@media (prefers-reduced-motion: reduce) {
  .academic-level-page .academic-level__rail-track, .academic-level-page .academic-level__rail-image { transition: none; }
}
`;

export function AcademicLevelPage({
  data,
  chrome,
}: {
  data: AcademicLevelData;
  chrome: Chrome;
}) {
  return (
    <div className={`sendero-root sendero-base15 academic-level-page ${data.pageClass} flex min-h-full flex-col`}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="academic-level__hero">
          <BlurReveal as="h3" className="academic-level__kicker">{data.heroKicker}</BlurReveal>
          <LetterLauncher as="h1" className="academic-level__title">{data.title}</LetterLauncher>
          <span className="academic-level__down" aria-hidden="true">↓</span>
        </section>

        <section className="academic-level__story">
          <div className="academic-level__copy">
            <BlurReveal as="h3" className="academic-level__label">{data.storyLabel}</BlurReveal>
            <LetterLauncher as="h2" className="academic-level__heading">{data.storyHeading}</LetterLauncher>
            <div className="academic-level__copy-text">
              {data.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <MotionAccordion className="academic-level__requirements" title="Requisitos para matriculación">
              <ol>{data.requirements.map((item) => <li key={item}>{item}</li>)}</ol>
            </MotionAccordion>
            <ArrowButton
              href={data.primaryButton?.url || "/admisiones/"}
              label={data.primaryButton?.etiqueta || "Ir a admisiones"}
              background={TEAL}
              textColor="#fff"
            />
          </div>
          <AcademicImageRail images={data.images} title={data.title} />
        </section>

        <section className="academic-level__cta" style={
            {
              "--academic-cta-image": `url('${data.ctaImage || `${data.assetBase}/MG_1996-scaled.jpg`}')`,
            } as React.CSSProperties
          }>
          <BlurReveal as="h3" className="academic-level__cta-kicker">
            {data.ctaKicker ?? "El mejor comienzo para grandes futuros"}
          </BlurReveal>
          <LetterLauncher as="h2" className="academic-level__cta-title">
            {data.ctaTitle ?? "Un espacio donde tus hijos crecerán con amor y aprendizaje"}
          </LetterLauncher>
          <ArrowButton
            href={data.finalButton?.url || "/admisiones/"}
            label={data.finalButton?.etiqueta || "¡Inscribe a tus hijos hoy!"}
            background="#ffc107"
            textColor="#1c2728"
          />
        </section>
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
