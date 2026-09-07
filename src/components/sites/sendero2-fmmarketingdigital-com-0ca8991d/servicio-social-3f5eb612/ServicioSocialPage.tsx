"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
interface Announcement {
  type: string;
  title: string;
  excerpt: string;
  phone: string;
  more?: boolean;
}

const ANNOUNCEMENTS: Announcement[] = [
  { type: "ofrece", title: "Tutorías de Matemáticas y Física", excerpt: "Docente certificado ofrece tutorías personalizadas para estudiantes de Básica y Bachillerato. Refuerzo académico y preparación para exámenes", phone: "0987654321", more: true },
  { type: "ofrece", title: "Apoyo Pedagógico en Lectoescritura", excerpt: "Especialista en dificultades de aprendizaje ofrece acompañamiento individual para estudiantes de Inicial y Básica Elemental", phone: "0995905100", more: true },
  { type: "solicita", title: "Se busca tutor de Inglés", excerpt: "Familia Sendero solicita clases de refuerzo en inglés para estudiante de Básica Media. Horario flexible, preferible experiencia con niños", phone: "0955444333", more: true },
  { type: "ofrece", title: "Asesoría en Proyectos de Ciencias", excerpt: "Ingeniero ofrece guía y acompañamiento en el desarrollo de proyectos de la feria de ciencias para estudiantes de Bachillerato", phone: "0999888777", more: true },
  { type: "ofrece", title: "Taller de Técnicas de Estudio", excerpt: "Psicopedagoga ofrece talleres grupales sobre hábitos y técnicas de estudio para estudiantes que inician Básica Superior", phone: "0912345678", more: true },
  { type: "solicita", title: "Busco material didáctico de Matemática", excerpt: "Docente solicita recomendaciones o donación de material didáctico y guías de ejercicios para nivel de Preparatoria", phone: "0923456789", more: true },
];

const PAGE_CSS = `
.social-page { overflow-x: hidden; background: #fff; }
.social-page .social-hero { position: relative; display: flex; min-height: 278px; margin-top: -85px; flex-direction: column; align-items: center; justify-content: center; padding: 110px 20px 0; }
.social-page .social-eyebrow { margin: 0 0 16px; border-radius: 16px; background: rgba(255,193,7,.2); padding: 1px 10px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.social-page .social-title { margin: 0; color: #0099a5; font-size: clamp(54px,5.1vw,75px); font-weight: 800; line-height: 1.05; text-align: center; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,6px 0 #fdb92e,-6px 0 #fdb92e,0 6px #fdb92e,0 -6px #fdb92e,4px 4px #fdb92e,-4px -4px #fdb92e; }
.social-page .social-content { display: grid; width: min(1656px,calc(100% - 80px)); grid-template-columns: 320px minmax(0,1fr); align-items: start; gap: 20px; margin: 0 auto; padding: 0 0 45px; }
@media (min-width: 768px) { .social-page .social-content { min-height: 1068px; } }
.social-page .social-spacer { min-height: 90px; }
.social-page .social-form { border: 2px solid rgba(0,153,165,.4); border-radius: 24px; background: #fffcf4; padding: 12px 16px 22px; }
.social-page .form-kicker { display: inline-block; margin: 0 0 12px; border-radius: 16px; background: rgba(255,193,7,.24); padding: 1px 10px 2px; color: #0099a5; font-size: 15px; font-weight: 700; }
.social-page .form-title { margin: 0 0 12px; color: #0099a5; font-size: 25px; font-weight: 800; line-height: 1.05; }
.social-page .form-intro { margin: 0 0 27px; color: #363636; font-size: 14px; line-height: 1.45; text-align: justify; }
.social-page label { display: block; margin: 0 0 15px; color: #363636; font-size: 13px; font-weight: 600; }
.social-page label span { color: #d44b33; }
.social-page input, .social-page select, .social-page textarea { display: block; width: 100%; margin-top: 6px; border: 1px solid #ddd; border-radius: 5px; background: #fff; padding: 9px 10px; color: #363636; font: inherit; font-size: 13px; }
.social-page textarea { min-height: 138px; resize: vertical; }
.social-page .editor-tools { display: flex; gap: 7px; margin-top: 6px; border: 1px solid #ddd; border-bottom: 0; background: #f5f5f5; padding: 7px; color: #666; font-size: 12px; }
.social-page .editor-tools span { font-weight: 700; }
.social-page .form-submit { width: 100%; border: 0; border-radius: 100px; background: #ffc107; padding: 11px; color: #1c2728; cursor: pointer; font: inherit; font-size: 14px; font-weight: 700; transition: transform 140ms cubic-bezier(0.23,1,0.32,1), background-color 160ms ease-out, box-shadow 220ms cubic-bezier(0.23,1,0.32,1); }
.social-page .form-status { min-height: 20px; margin: 10px 0 0; color: #007580; font-size: 12px; opacity: 0; transform: translateY(-4px); transition: opacity 180ms ease-out, transform 220ms cubic-bezier(0.23,1,0.32,1); }
.social-page .form-submit[disabled] { cursor: progress; opacity: .65; }
.social-page .form-status { min-height: 20px; }
.social-page .form-status[data-tone="error"] { color: #d44b33; }
.social-page .field-group { display: block; margin: 0 0 15px; border: 0; padding: 0; color: #363636; font-size: 13px; font-weight: 600; }
.social-page .field-group legend { padding: 0; }
.social-page .field-group legend span { color: #d44b33; }
.social-page .level-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 6px 10px; margin-top: 8px; border: 1px solid #ddd; border-radius: 5px; background: #fff; padding: 10px; }
.social-page .level-option { display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 500; line-height: 1.2; }
.social-page .level-option input { display: inline-block; width: 15px; height: 15px; margin: 0; flex: none; accent-color: #0099a5; }
@media (max-width: 767px) { .social-page .level-list { grid-template-columns: 1fr; } }
.social-page .form-status[data-visible="true"] { opacity: 1; transform: translateY(0); }
.social-page .announcement-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
.social-page .announcement-card { display: flex; width: calc(25% - 11px); min-height: 165px; flex-direction: column; border-radius: 24px; background: #f5f5f5; padding: 10px 13px 0; color: #1c2728; transition: transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1); }
.social-page .announcement-type { display: block; width: fit-content; min-width: 48px; min-height: 18px; border-radius: 16px; background: #ddd; padding: 1px 9px; color: #0099a5; font-size: 12px; font-weight: 700; }
.social-page .announcement-card h2 { margin: 14px 0 10px; font-size: 18px; font-weight: 800; line-height: 1.08; }
.social-page .announcement-card p { margin: 0 0 8px; font-size: 13px; line-height: 1.25; }
.social-page .announcement-card .read-more { color: #1c2728; font-size: 12px; font-weight: 700; }
.social-page .phone-link { display: flex; min-height: 38px; align-items: center; justify-content: center; margin: auto -13px 0; border-radius: 24px; background: #ffd84d; color: #1c2728; font-size: 15px; font-weight: 800; text-decoration: none; }
@media (hover: hover) and (pointer: fine) {
  .social-page .announcement-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(28,39,40,.1); }
  .social-page .phone-link:hover, .social-page .form-submit:hover { background: #ffe27a; }
}
@media (prefers-reduced-motion: reduce) {
  .social-page .form-status { transition: opacity 180ms ease-out; transform: none; }
  .social-page .announcement-card { transition: box-shadow 180ms ease-out; }
}
@media (max-width: 767px) {
  .social-page .social-hero { min-height: 278px; padding-inline: 16px; }
  .social-page .social-title { font-size: 54px; }
  .social-page .social-content { display: flex; width: 100%; flex-direction: column; gap: 20px; padding-inline: 16px; }
  .social-page .social-form { width: 100%; }
  .social-page .announcement-grid { width: 100%; flex-direction: column; }
  .social-page .announcement-card { width: 100%; min-height: 175px; }
}
`;

export interface AnuncioSocial {
  tipo: string;
  titulo: string;
  resumen: string;
  detalle?: string;
  telefono: string;
  whatsapp: string;
}

export interface ServicioSocialPageProps {
  chrome: Chrome;
  antetitulo?: string;
  titulo?: string;
  formAntetitulo?: string;
  formTitulo?: string;
  formIntro?: string;
  formBoton?: string;
  formConfirmacion?: string;
  opcionesTipo?: string[];
  etapas?: string[];
  anuncios?: AnuncioSocial[];
}

export function ServicioSocialPage({
  chrome,
  antetitulo,
  titulo,
  formAntetitulo,
  formTitulo,
  formIntro,
  formBoton,
  formConfirmacion,
  opcionesTipo,
  etapas,
  anuncios,
}: ServicioSocialPageProps) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const tipos = opcionesTipo?.length
    ? opcionesTipo
    : ["Ofrece apoyo académico", "Solicita apoyo académico"];
  const niveles = etapas?.length
    ? etapas
    : ["Inicial", "Básica Elemental", "Básica Media", "Básica Superior", "Bachillerato"];
  const items: AnuncioSocial[] = anuncios?.length
    ? anuncios
    : ANNOUNCEMENTS.map((anuncio) => ({
        tipo: anuncio.type,
        titulo: anuncio.title,
        resumen: anuncio.excerpt,
        detalle: anuncio.more ? " " : undefined,
        telefono: anuncio.phone,
        whatsapp: `https://api.whatsapp.com/send?phone=593${anuncio.phone}`,
      }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const datos = new FormData(form);
    const niveles = datos.getAll("level").map(String);

    if (niveles.length === 0) {
      setError(true);
      setStatus("Marca al menos un nivel académico.");
      return;
    }

    setEnviando(true);
    setError(false);
    setStatus("Enviando tu anuncio…");

    // El desplegable guarda la etiqueta que escribió el colegio; el backend
    // solo entiende "ofrece" o "solicita".
    const etiquetaTipo = String(datos.get("type") ?? "");
    const tipo = /solicit/i.test(etiquetaTipo) ? "solicita" : "ofrece";

    try {
      const respuesta = await fetch("/api/servicio-social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo,
          titulo: datos.get("profession"),
          niveles,
          descripcion: datos.get("description"),
          telefono: datos.get("phone"),
          email: datos.get("email"),
          website: datos.get("website"),
        }),
      });

      if (!respuesta.ok) {
        const detalle = (await respuesta.json().catch(() => null)) as {
          message?: string;
        } | null;

        setError(true);
        setStatus(
          detalle?.message ??
            "No se pudo enviar el anuncio. Inténtalo de nuevo en un momento.",
        );
        return;
      }

      setError(false);
      setStatus(formConfirmacion ?? "Tu anuncio está listo para revisión.");
      form.reset();
    } catch {
      setError(true);
      setStatus("No hay conexión con el servidor. Inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="sendero-root sendero-base15 social-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="social-hero">
          <BlurReveal as="h3" className="social-eyebrow">
            {antetitulo ??
              "Comprometidos con la formación académica de nuestra comunidad"}
          </BlurReveal>
          <LetterLauncher as="h1" className="social-title">
            {titulo ?? "Servicio social"}
          </LetterLauncher>
        </section>
        <section className="social-content">
          <form className="social-form" onSubmit={submit}>
            <p className="form-kicker">
              {formAntetitulo ?? "Publica tu anuncio académico"}
            </p>
            <h2 className="form-title">
              {formTitulo ?? "Apoyo académico entre familias Sendero"}
            </h2>
            <p className="form-intro">
              {formIntro ??
                "Este espacio está reservado exclusivamente para necesidades de índole académica: tutorías, refuerzo escolar, asesorías pedagógicas y recursos educativos entre docentes, estudiantes y familias de la Unidad Educativa Sendero. No se admiten anuncios ajenos al ámbito académico."}
            </p>
            <label>Tipo de Anuncio <span>*</span><select name="type" defaultValue={tipos[0]} required>
                {tipos.map((opcion) => (
                  <option key={opcion}>{opcion}</option>
                ))}
              </select></label>
            <label>Área o Asignatura <span>*</span><input name="profession" placeholder="Ej. Tutoría de Matemáticas, Refuerzo de Lectoescritura" required /></label>
            <fieldset className="field-group">
              <legend>
                Nivel académico <span>*</span>
              </legend>
              <div className="level-list">
                {niveles.map((nivel) => (
                  <label className="level-option" key={nivel}>
                    <input type="checkbox" name="level" value={nivel} />
                    {nivel}
                  </label>
                ))}
              </div>
            </fieldset>
            <label>Descripción <span>*</span><div className="editor-tools" aria-hidden="true"><span>Párrafo</span><span>B</span><span>I</span><span>↗</span><span>☷</span></div><textarea name="description" placeholder="Describe la asesoría o refuerzo académico que ofreces o necesitas" required /></label>
            <label>Número de Contacto <span>*</span><input name="phone" type="tel" required /></label>
            <label>Email <span>*</span><input name="email" type="email" placeholder="Email Address" required /></label>
            <label className="sr-only" aria-hidden="true">
              No rellenar
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </label>
            <button className="form-submit" type="submit" disabled={enviando}>
              {enviando ? "Enviando…" : (formBoton ?? "Enviar anuncio académico")}
            </button>
            <p
              className="form-status"
              data-visible={status ? "true" : "false"}
              data-tone={error ? "error" : "ok"}
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          </form>
          <div className="announcement-grid">
            {items.map((anuncio) => (
              <article
                className="announcement-card"
                key={`${anuncio.titulo}-${anuncio.telefono}`}
              >
                <span className="announcement-type">{anuncio.tipo}</span>
                <h2>{anuncio.titulo}</h2>
                <p>
                  {anuncio.resumen}
                  {anuncio.detalle ? (
                    <span className="read-more"> Leer más</span>
                  ) : null}
                </p>
                <a className="phone-link" href={anuncio.whatsapp}>
                  {anuncio.telefono}
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="social-spacer" aria-hidden="true" />
      </main>
      <SiteFooter {...chrome.footer} />
      <WhatsAppWidget {...chrome.whatsapp} />
    </div>
  );
}
