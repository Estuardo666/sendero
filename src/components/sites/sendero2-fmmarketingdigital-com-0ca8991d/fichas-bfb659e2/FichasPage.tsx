import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
const ROOT = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";
const FILES = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/admisiones-02e74418/files";
const PAGE_CSS = `
.fichas-page { overflow-x: hidden; background: #fff; }
.fichas-page .resource-hero { position: relative; display: flex; min-height: 313px; margin-top: -85px; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; padding: 127px 20px 0; }
.fichas-page .resource-hero > * { position: relative; z-index: 1; }
.fichas-page .resource-video { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
.fichas-page .resource-video video { width: 100%; height: 100%; object-fit: cover; }
.fichas-page .resource-video::after { content: ""; position: absolute; inset: 0; background: rgba(255,255,255,.74); }
.fichas-page .resource-eyebrow { margin: 0 0 16px; border-radius: 16px; background: rgba(255,193,7,.25); padding: 1px 10px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.fichas-page .resource-title { margin: 0; color: #0099a5; font-size: clamp(54px,5.1vw,75px); font-weight: 800; line-height: 1.05; text-align: center; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,6px 0 #fdb92e,-6px 0 #fdb92e,0 6px #fdb92e,0 -6px #fdb92e,4px 4px #fdb92e,-4px -4px #fdb92e; }
.fichas-page .resource-down { display: grid; width: 40px; height: 40px; margin-top: 42px; place-items: center; border-radius: 50%; background: rgba(245,245,245,.9); color: #0099a5; font-size: 25px; }
.fichas-page .resources-section { padding: 85px 20px 45px; }
.fichas-page .resources-grid { display: grid; width: min(1000px,100%); grid-template-columns: repeat(2,minmax(0,330px)); justify-content: space-between; gap: 20px; }
.fichas-page .resource-card { display: flex; min-height: 150px; flex-direction: column; align-items: flex-start; justify-content: center; border-radius: 20px; background: #f1f1f1; padding: 12px 13px; transition: transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1); }
.fichas-page .resource-card h2 { margin: 0 0 12px; color: #1c2728; font-size: 23px; font-weight: 800; line-height: 1.05; }
.fichas-page .resource-card p { margin: 0 0 8px; color: #363636; font-size: 11px; line-height: 1.1; }
.fichas-page .resource-card a { display: inline-flex; align-items: center; gap: 8px; border-radius: 100px; background: #ffc107; padding: 8px 15px; color: #1c2728; font-size: 15px; font-weight: 600; text-decoration: none; }
@media (hover: hover) and (pointer: fine) {
  .fichas-page .resource-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(28,39,40,.1); }
  .fichas-page .resource-card a:hover { background: #ffd84d; transform: translateY(-1px); }
}
@media (max-width: 767px) { .fichas-page .resource-hero { padding-inline: 16px; } .fichas-page .resource-title { font-size: 54px; } .fichas-page .resources-grid { grid-template-columns: 1fr; } }
`;

function ResourceCard({
  title,
  meta,
  href,
  cta,
}: {
  title: string;
  meta: string;
  href: string;
  cta?: string;
}) {
  return (
    <article className="resource-card">
      <h2>{title}</h2>
      <p>{meta}</p>
      <a href={href} download>
        {cta ?? "Descargar"} <span aria-hidden="true">↧</span>
      </a>
    </article>
  );
}

export interface FichasPageProps {
  chrome: Chrome;
  video?: string;
  antetitulo?: string;
  titulo?: string;
  textoDescarga?: string;
  recursos?: { titulo: string; detalle: string; url: string }[];
}

export function FichasPage({
  chrome,
  video,
  antetitulo,
  titulo,
  textoDescarga,
  recursos,
}: FichasPageProps) {

  return (
    <div className="sendero-root sendero-base15 fichas-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="resource-hero">
          <div className="resource-video" aria-hidden="true"><LazyVideo src={video || `${ROOT}/bg1c.mp4`} /></div>
          <BlurReveal as="h3" className="resource-eyebrow">
            {antetitulo ?? "Recursos para padres de familia"}
          </BlurReveal>
          <LetterLauncher as="h1" className="resource-title">
            {titulo ?? "Fichas"}
          </LetterLauncher>
          <span className="resource-down" aria-hidden="true">↓</span>
        </section>
        <section className="resources-section brx-section">
          <div className="resources-grid">
            {(
              recursos ?? [
                {
                  titulo: "Ficha Ejemplo 1",
                  detalle: "Campaña Sendero copy | agosto 28, 2025",
                  url: `${FILES}/Campana-Sendero-copy.pdf`,
                },
                {
                  titulo: "Ficha Ejemplo 2",
                  detalle: "Sendero | agosto 28, 2025",
                  url: `${FILES}/Sendero.docx`,
                },
              ]
            ).map((recurso) => (
              <ResourceCard
                key={recurso.url}
                title={recurso.titulo}
                meta={recurso.detalle}
                href={recurso.url}
                cta={textoDescarga}
              />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
