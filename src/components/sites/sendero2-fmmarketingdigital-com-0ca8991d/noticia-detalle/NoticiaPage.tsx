import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { NextTiles } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/NextTiles";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
import { ShareBar } from "./ShareBar";

export interface NoticiaRelacionada {
  title: string;
  image: string;
  alt?: string;
  href: string;
}

export interface NoticiaPageProps {
  chrome: Chrome;
  categoria?: string;
  fecha?: string;
  titulo: string;
  imagen?: string;
  imagenAlt?: string;
  /** HTML del cuerpo tal como lo entrega WordPress. */
  cuerpo: string;
  tiempoLectura?: string;
  relacionadas?: NoticiaRelacionada[];
}

const PAGE_CSS = `
.noticia-page { overflow-x: hidden; background: #fff; }
.noticia-page .noticia-tiles { width: 100%; border: 1px solid rgba(229,229,229,1); border-radius: 0 0 0 16px; }
.noticia-page .noticia-tiles .next-tiles__square { border: 0.5px solid rgba(229,229,229,.49); }
.noticia-page .noticia-tiles .next-tiles__content { align-items: flex-start; }
.noticia-page .noticia-hero { padding-bottom: 2em; }
.noticia-page .noticia-body { padding-top: 30px; }
.noticia-page .noticia-wrap { width: min(693px, calc(100% - 40px)); margin-inline: auto; padding-top: 135px; }
.noticia-page .noticia-media { overflow: hidden; border-radius: 30px; }
.noticia-page .noticia-media img { display: block; width: 100%; aspect-ratio: 693 / 555; object-fit: cover; }
.noticia-page .noticia-meta { display: flex; flex-wrap: wrap; gap: 10px; margin: 33px 0; }
.noticia-page .noticia-meta span { border-radius: 16.5px; padding: 1px 10px 2px; color: #0099a5; font-size: 16.5px; font-weight: 600; line-height: 23.1px; }
.noticia-page .noticia-cat { background: rgba(255,193,7,.17); }
.noticia-page .noticia-fecha { background: #ebebeb; }
.noticia-page .noticia-titulo { margin: 0; color: #363636; font-size: 36px; font-weight: 700; line-height: 44px; }
.noticia-page .noticia-lectura { margin: 12px 0 0; color: #7a7a7a; font-size: 13px; font-weight: 500; }
.noticia-page .noticia-cuerpo { margin-top: 16px; color: #1c2728; font-size: 15px; font-weight: 500; line-height: 25.5px; }
.noticia-page .noticia-cuerpo p { margin: 0 0 18px; }
.noticia-page .noticia-cuerpo ul, .noticia-page .noticia-cuerpo ol { margin: 15px 0; padding-left: 40px; list-style: revert; }
.noticia-page .noticia-cuerpo li { margin-bottom: 6px; }
.noticia-page .noticia-cuerpo h2, .noticia-page .noticia-cuerpo h3 { margin: 26px 0 10px; color: #363636; font-size: 20px; font-weight: 700; line-height: 1.2; }
.noticia-page .noticia-cuerpo a { color: #0099a5; text-decoration: underline; }
.noticia-page .noticia-cuerpo img { max-width: 100%; height: auto; border-radius: 16px; }
.noticia-page .noticia-share { display: flex; align-items: center; justify-content: center; gap: 14px; height: 30px; margin: 30px 0 0; padding: 0; border-radius: 13.5px; background: rgba(255,193,7,.34); list-style: none; }
.noticia-page .noticia-share a { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 50%; color: #0099a5; transition: transform 200ms cubic-bezier(0.23,1,0.32,1), color 200ms ease; }
.noticia-page .noticia-share svg { width: 16px; height: 16px; fill: currentColor; }
.noticia-page .noticia-relacionadas { width: min(777px, calc(100% - 40px)); margin: 90px auto 110px; }
.noticia-page .noticia-relacionadas .rel-eyebrow { display: inline-block; margin: 0 0 16px; border-radius: 16px; background: rgba(255,193,7,.22); padding: 1px 10px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.noticia-page .noticia-relacionadas .rel-titulo { margin: 0 0 28px; color: #0099a5; font-size: clamp(38px,4vw,54px); font-weight: 800; line-height: 1.05; }
.noticia-page .rel-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px 17px; }
.noticia-page .rel-card { min-width: 0; transition: transform 220ms cubic-bezier(0.23,1,0.32,1); }
.noticia-page .rel-card a { display: block; color: inherit; text-decoration: none; }
.noticia-page .rel-card img { display: block; width: 100%; height: 202px; border-radius: 24px; object-fit: cover; transition: transform .35s ease, filter .35s ease; }
.noticia-page .rel-card h3 { margin: 14px 13px 0; color: #1c2728; font-size: 18px; font-weight: 700; line-height: 1.1; }
@media (hover: hover) and (pointer: fine) {
  .noticia-page .noticia-share a:hover { transform: translateY(-2px); color: #007c86; }
  .noticia-page .rel-card:hover { transform: translateY(-3px); }
  .noticia-page .rel-card:hover img { transform: scale(1.025); filter: saturate(1.08); }
}
@media (prefers-reduced-motion: reduce) {
  .noticia-page .noticia-share a, .noticia-page .rel-card, .noticia-page .rel-card img { transition: filter 180ms ease-out; }
}
@media (max-width: 767px) {
  .noticia-page .noticia-wrap { padding-top: 110px; }
  .noticia-page .noticia-media { border-radius: 18px; }
  .noticia-page .noticia-titulo { font-size: 28px; line-height: 34px; }
  .noticia-page .noticia-relacionadas { margin: 60px auto 80px; }
  .noticia-page .rel-grid { grid-template-columns: 1fr; }
  .noticia-page .rel-card img { height: 220px; border-radius: 16px; }
}
`;

export function NoticiaPage({
  chrome,
  categoria = "Noticias",
  fecha,
  titulo,
  imagen,
  imagenAlt,
  cuerpo,
  tiempoLectura,
  relacionadas = [],
}: NoticiaPageProps) {
  return (
    <div className="sendero-root sendero-base15 noticia-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <NextTiles
          squareSize={40}
          enterColor="rgba(255, 193, 7, 0.55)"
          leaveColor="rgba(86, 152, 164, 0.53)"
          className="noticia-tiles"
        >
          <header className="noticia-wrap noticia-hero">
            {imagen ? (
              <div className="noticia-media">
                <img src={imagen} alt={imagenAlt ?? ""} />
              </div>
            ) : null}

            <div className="noticia-meta">
              <BlurReveal as="span" className="noticia-cat">
                {categoria}
              </BlurReveal>
              {fecha ? (
                <BlurReveal as="span" className="noticia-fecha">
                  {fecha}
                </BlurReveal>
              ) : null}
            </div>

            <LetterLauncher as="h1" className="noticia-titulo">
              {titulo}
            </LetterLauncher>

            {tiempoLectura ? (
              <p className="noticia-lectura">{tiempoLectura}</p>
            ) : null}
          </header>
        </NextTiles>

        <article className="noticia-wrap noticia-body">
          <div
            className="noticia-cuerpo"
            dangerouslySetInnerHTML={{ __html: cuerpo }}
          />

          <ShareBar titulo={titulo} />
        </article>

        {relacionadas.length ? (
          <section className="noticia-relacionadas">
            <BlurReveal as="p" className="rel-eyebrow">
              Más noticias
            </BlurReveal>
            <LetterLauncher as="h2" className="rel-titulo">
              Sigue leyendo
            </LetterLauncher>
            <div className="rel-grid">
              {relacionadas.map((item) => (
                <article className="rel-card" key={item.href}>
                  <a href={item.href}>
                    <img src={item.image} alt={item.alt ?? ""} />
                    <h3>{item.title}</h3>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
