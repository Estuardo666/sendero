"use client";

import { useState } from "react";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
const ROOT = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";
const PODCAST = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/podcast-ffccab66/images";
export interface EpisodioPodcast {
  number: string;
  title: string;
  id: string;
  thumbnail: string | null;
}

const EPISODES: EpisodioPodcast[] = [
  { number: "Episodio #1", title: "La navidad en los niños", id: "2Pprb0RV6Qa", thumbnail: null },
  { number: "Episodio #2", title: "La autoestima", id: "k9G4oDJazhA", thumbnail: `${PODCAST}/yt-k9G4oDJazhA.jpg` },
  { number: "Episodio #3", title: "El desafío de confiar", id: "yuWAZM_hBow", thumbnail: `${ROOT}/yt-yuWAZM_hBow.jpg` },
  { number: "Episodio #4", title: "Sowing and caring with love", id: "obxX5Ru6qIg", thumbnail: `${ROOT}/yt-obxX5Ru6qIg.jpg` },
  { number: "Episodio #5", title: "Educación sin barreras", id: "x84eyL2eaNU", thumbnail: null },
] as const;

const PAGE_CSS = `
.podcast-page { overflow-x: hidden; background: #fff; }
.podcast-page .podcast-hero { position: relative; display: flex; min-height: 435px; margin-top: -85px; flex-direction: column; align-items: center; justify-content: flex-start; overflow: hidden; background: linear-gradient(180deg,rgba(0,153,165,.58),rgba(0,153,165,.16) 48%,#fff 100%); padding: 110px 20px 0; text-align: center; }
.podcast-page .podcast-eyebrow { margin: 0 0 16px; border-radius: 16px; background: rgba(255,193,7,.23); padding: 1px 10px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.podcast-page .podcast-title { margin: 0; color: #0099a5; font-size: clamp(54px,5.1vw,75px); font-weight: 800; line-height: 1.05; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,6px 0 #fdb92e,-6px 0 #fdb92e,0 6px #fdb92e,0 -6px #fdb92e,4px 4px #fdb92e,-4px -4px #fdb92e; }
.podcast-page .podcast-description { width: min(666px,100%); margin: 38px 0 0; color: #1c2728; font-size: 15px; font-weight: 500; line-height: 1.45; }
.podcast-page .podcast-down { display: grid; width: 40px; height: 40px; margin-top: 20px; place-items: center; border-radius: 50%; background: rgba(245,245,245,.8); color: #0099a5; font-size: 25px; }
.podcast-page .episodes-section { padding: 0 20px 45px; }
.podcast-page .episodes-grid { display: grid; width: min(1360px,100%); grid-template-columns: repeat(2,minmax(0,1fr)); gap: 30px 20px; }
.podcast-page .episode-card { display: flex; min-height: 426px; flex-direction: column; border-radius: 21px; background: #f5f5f5; padding: 8px; }
.podcast-page .episode-card:last-child { grid-column: 1 / -1; width: calc(50% - 10px); justify-self: center; }
.podcast-page .episode-pill { width: fit-content; margin: 0 0 12px; border-radius: 16px; background: rgba(255,193,7,.28); padding: 2px 15px 3px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 22px; }
.podcast-page .episode-title { margin: 0 0 10px; color: #1c2728; font-size: 24px; font-weight: 800; line-height: 1.1; }
.podcast-page .episode-preview { position: relative; display: grid; width: 100%; aspect-ratio: 16 / 9; min-height: 0; flex: none; place-items: center; overflow: hidden; border-radius: 16px; border: 0; background: #cfcfcf; padding: 0; cursor: pointer; }
.podcast-page .episode-preview img { width: 100%; height: 100%; object-fit: cover; }
.podcast-page .episode-preview iframe { width: 100%; height: 100%; min-height: 0; border: 0; }
.podcast-page .episode-placeholder { position: absolute; inset: 0; display: grid; place-items: center; }
.podcast-page .episode-preview iframe { animation: podcast-media-in 240ms cubic-bezier(0.23,1,0.32,1) both; }
@keyframes podcast-media-in { from { opacity: 0; transform: scale(.985); } to { opacity: 1; transform: scale(1); } }
.podcast-page .play-icon { position: absolute; width: 42px; height: 42px; border-radius: 50%; background: #ffc107; color: #fff; font-size: 0; transition: transform 180ms cubic-bezier(0.23,1,0.32,1), background-color 160ms ease-out; }
.podcast-page .play-icon::after { content: ""; position: absolute; top: 12px; left: 17px; border-top: 9px solid transparent; border-bottom: 9px solid transparent; border-left: 13px solid #fff; }
@media (hover: hover) and (pointer: fine) {
  .podcast-page .episode-preview:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(28,39,40,.1); }
  .podcast-page .episode-preview:hover .play-icon { transform: scale(1.08); background: #ffd84d; }
}
@media (prefers-reduced-motion: reduce) {
  .podcast-page .episode-preview iframe { animation: none; }
  .podcast-page .play-icon { transition: background-color 160ms ease-out; }
}
@media (max-width: 767px) {
  .podcast-page .podcast-hero { min-height: 566px; padding-inline: 16px; }
  .podcast-page .podcast-title { font-size: 54px; }
  .podcast-page .podcast-description { margin-top: 34px; font-size: 15px; }
  .podcast-page .episodes-section { padding-inline: 8px; }
  .podcast-page .episodes-grid { grid-template-columns: 1fr; gap: 20px; }
  .podcast-page .episode-card, .podcast-page .episode-card:last-child { width: 100%; min-height: 0; grid-column: auto; }
  .podcast-page .episode-preview, .podcast-page .episode-preview iframe { min-height: 0; }
}
`;

export interface PodcastPageProps {
  chrome: Chrome;
  antetitulo?: string;
  titulo?: string;
  /** HTML del editor de WordPress. */
  descripcion?: string;
  episodios?: EpisodioPodcast[];
}

export function PodcastPage({
  chrome,
  antetitulo,
  titulo,
  descripcion,
  episodios,
}: PodcastPageProps) {
  const items = episodios?.length ? episodios : EPISODES;

  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <div className="sendero-root sendero-base15 podcast-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="podcast-hero">
          <BlurReveal as="h3" className="podcast-eyebrow">
            {antetitulo ?? "Dale Play al Aprendizaje"}
          </BlurReveal>
          <LetterLauncher as="h1" className="podcast-title">
            {titulo ?? "Sendero al Aire"}
          </LetterLauncher>
          {descripcion ? (
            <div
              className="podcast-description"
              dangerouslySetInnerHTML={{ __html: descripcion }}
            />
          ) : (
            <p className="podcast-description">
              Un espacio para nuestra comunidad donde educadores y expertos
              conversan sobre los temas que te importan:{" "}
              <b>crianza, innovación educativa y estrategias prácticas</b> para
              acompañar el crecimiento de tus hijos.
            </p>
          )}
          <span className="podcast-down" aria-hidden="true">↓</span>
        </section>
        <section className="episodes-section brx-section" aria-label="Episodios de Sendero al Aire">
          <div className="episodes-grid">
            {items.map((episode) => (
              <article className="episode-card" key={episode.id}>
                <BlurReveal as="h3" className="episode-pill">{episode.number}</BlurReveal>
                <h2 className="episode-title">{episode.title}</h2>
                <button className="episode-preview" type="button" onClick={() => setActiveId(episode.id)} aria-label={`Reproducir ${episode.title}`}>
                  {activeId === episode.id ? <iframe src={`https://www.youtube.com/embed/${episode.id}?wmode=opaque&rel=0&enablejsapi=1`} title={episode.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : episode.thumbnail ? <img src={episode.thumbnail} alt="" /> : <span className="episode-placeholder" aria-hidden="true" />}
                  {activeId !== episode.id ? <span className="play-icon" aria-hidden="true" /> : null}
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
