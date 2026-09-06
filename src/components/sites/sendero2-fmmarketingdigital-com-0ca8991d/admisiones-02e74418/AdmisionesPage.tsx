import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
const FILES = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/admisiones-02e74418/files";

const REQUIREMENTS = [
  {
    title: "Sección Inicial - Preparatoria",
    items: [
      "Entrevista al estudiante y representantes legales (Nuevos)",
      "Copia de cédula del estudiante y representantes legales",
      "Copia del Carnet de Vacunación (Inicial – Preparatoria)",
      "Copia del pago de Luz",
      "Llenar los formularios entregados por la Institución",
      "Pago de Matrícula",
    ],
  },
  {
    title: "Sección Escuela - Nuevos",
    items: [
      "Entrevista al estudiante y representantes legales",
      "Carpeta del estudiante en la institución que estudio",
      "Libretas y pases de año cursados del estudiante",
      "Copia de cédula del estudiante y representantes legales.",
      "Copia del pago de Luz",
      "Certificado de no adeudar en la otra institución.",
      "Llenar los formularios entregados por la Institución",
      "Pago de Matrícula",
    ],
  },
] as const;

const PAGE_CSS = `
.admisiones-page { overflow-x: hidden; background: #fff; }
.admisiones-page .admissions-hero { position: relative; display: flex; min-height: 606px; margin-top: -153px; flex-direction: column; align-items: center; justify-content: center; padding: 150px 20px 0; }
.admisiones-page .admissions-hero > * { position: relative; z-index: 1; }
.admisiones-page .admissions-eyebrow, .admisiones-page .admissions-label { width: fit-content; margin: 0 auto 16px; border-radius: 16px; padding: 1px 10px 2px; background: rgba(255,193,7,.2); color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.admisiones-page .admissions-title { max-width: 666px; margin: 0; color: #0099a5; font-size: clamp(54px, 5.1vw, 75px); font-weight: 800; line-height: 1.05; letter-spacing: -3px; text-align: center; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,6px 0 #fdb92e,-6px 0 #fdb92e,0 6px #fdb92e,0 -6px #fdb92e,4px 4px #fdb92e,-4px -4px #fdb92e,4px -4px #fdb92e,-4px 4px #fdb92e; }
.admisiones-page .admissions-down { display: grid; width: 40px; height: 40px; margin-top: 42px; place-items: center; border-radius: 50%; background: #f5f5f5; color: #0099a5; font-size: 25px; line-height: 1; }
.admisiones-page .requirements-section { min-height: 540px; padding: 45px 20px; }
.admisiones-page .requirements-grid { display: grid; width: min(1260px,100%); grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; }
.admisiones-page .requirement-card { display: flex; min-height: 310px; flex-direction: column; align-items: center; border-radius: 32px; background: #f5f5f5; padding: 12px 42px 18px; color: #1c2728; }
.admisiones-page .requirement-card h2 { margin: 0 0 28px; border-radius: 16px; background: #ddd; padding: 1px 18px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; text-align: center; }
.admisiones-page .requirement-card ul { align-self: stretch; margin: 0; padding-left: 20px; font-size: 15px; font-weight: 600; line-height: 1.65; }
.admisiones-page .requirement-card .nb-arrow-button-v2 { margin-top: auto; }
.admisiones-page .resources-heading { display: flex; min-height: 96px; align-items: center; justify-content: center; }
.admisiones-page .resources-heading h2 { margin: 0; color: #0099a5; font-size: clamp(48px, 5vw, 61px); font-weight: 800; line-height: 1; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,4px 0 #fdb92e,-4px 0 #fdb92e,0 4px #fdb92e,0 -4px #fdb92e; }
.admisiones-page .downloads-section { padding: 0 20px 45px; }
.admisiones-page .downloads-grid { display: grid; width: min(1000px,100%); grid-template-columns: repeat(2,minmax(0,330px)); justify-content: space-between; gap: 20px; }
.admisiones-page .download-card { display: flex; min-height: 150px; flex-direction: column; align-items: center; justify-content: center; border-radius: 18px; background: #fafafa; padding: 18px; text-align: center; }
.admisiones-page .download-card h3 { margin: 0 0 6px; color: #1c2728; font-size: 24px; line-height: 1.15; }
.admisiones-page .download-card p { margin: 0 0 9px; color: #363636; font-size: 12px; line-height: 1.2; }
.admisiones-page .download-card a { display: inline-flex; align-items: center; gap: 8px; border-radius: 100px; background: #ffc107; padding: 8px 16px; color: #1c2728; font-size: 15px; font-weight: 600; text-decoration: none; }
@media (hover: hover) and (pointer: fine) {
  .admisiones-page .requirement-card:hover, .admisiones-page .download-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(28,39,40,.1); }
  .admisiones-page .download-card a:hover { background: #ffd84d; transform: translateY(-1px); }
}
@media (prefers-reduced-motion: reduce) {
  .admisiones-page .requirement-card, .admisiones-page .download-card { transition: box-shadow 180ms ease-out; }
}
@media (max-width: 767px) {
  .admisiones-page .admissions-hero { padding-inline: 16px; }
  .admisiones-page .admissions-title { font-size: 54px; }
  .admisiones-page .requirements-grid, .admisiones-page .downloads-grid { grid-template-columns: 1fr; }
  .admisiones-page .requirement-card { min-height: 0; padding-inline: 22px; padding-bottom: 24px; }
  .admisiones-page .requirement-card .nb-arrow-button-v2 { margin-top: 24px; }
}
`;

function DownloadCard({ title, meta, href }: { title: string; meta: string; href: string }) {
  return (
    <article className="download-card">
      <h3>{title}</h3>
      <p>{meta}</p>
      <a href={href} download>
        Descargar <span aria-hidden="true">↧</span>
      </a>
    </article>
  );
}

export interface GrupoRequisitos {
  titulo: string;
  requisitos: string[];
  boton?: { etiqueta: string; url: string };
}

export interface Descarga {
  titulo: string;
  detalle: string;
  url: string;
}

export interface AdmisionesPageProps {
  chrome: Chrome;
  antetitulo?: string;
  titulo?: string;
  grupos?: GrupoRequisitos[];
  fichasTitulo?: string;
  fichas?: Descarga[];
}

export function AdmisionesPage({
  chrome,
  antetitulo,
  titulo,
  grupos,
  fichasTitulo,
  fichas,
}: AdmisionesPageProps) {
  const bloques: GrupoRequisitos[] = grupos?.length
    ? grupos
    : REQUIREMENTS.map((grupo) => ({
        titulo: grupo.title,
        requisitos: [...grupo.items],
      }));

  const lineasTitulo = (titulo ?? "Inicia el Sendero\nHacia su Futuro").split(
    "\n",
  );

  return (
    <div className="sendero-root sendero-base15 admisiones-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="admissions-hero">
          <BlurReveal as="h3" className="admissions-eyebrow">
            {antetitulo ?? "Únete a nuestra familia educativa"}
          </BlurReveal>
          <LetterLauncher as="h1" className="admissions-title">
            {lineasTitulo.map((linea, indice) => (
              <span key={linea}>
                {indice > 0 && <br />}
                {linea}
              </span>
            ))}
          </LetterLauncher>
          <span className="admissions-down" aria-hidden="true">↓</span>
        </section>

        <section className="requirements-section brx-section">
          <div className="requirements-grid">
            {bloques.map((group) => (
              <article className="requirement-card" key={group.titulo}>
                <h2>{group.titulo}</h2>
                <ul>
                  {group.requisitos.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ArrowButton
                  href={group.boton?.url || "https://wa.link/etzumz"}
                  label={group.boton?.etiqueta || "Contactar a un asesor"}
                />
              </article>
            ))}
          </div>
        </section>

        <section className="resources-heading brx-section">
          <LetterLauncher as="h2">{fichasTitulo ?? "Fichas"}</LetterLauncher>
        </section>
        <section className="downloads-section brx-section">
          <div className="downloads-grid">
            {(
              fichas ?? [
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
            ).map((ficha) => (
              <DownloadCard
                key={ficha.url}
                title={ficha.titulo}
                meta={ficha.detalle}
                href={ficha.url}
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
