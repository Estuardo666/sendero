import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { SiteFooter } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/SiteHeader";
import { WhatsAppWidget } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/WhatsAppWidget";

import type { Chrome } from "../shared/content";
const ASSETS = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";
export interface Article {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  featured?: boolean;
  /** Texto alternativo de la foto. */
  alt?: string;
}

const ARTICLES: Article[] = [
  {
    title: "Sendero lanza el programa “Pequeños Exploradores de la Naturaleza”",
    excerpt: "El Centro de Educación Sendero ha iniciado el programa \"Pequeños Exploradores de la Naturaleza\", una nueva iniciativa diseñada para que los estudiantes aprendan sobre biodiversidad, ecología y conservación de forma práctica y divertida. A través de salidas al aire libre, observaciones científicas y proyectos interactivos, los niños tendrán la oportunidad de descubrir la riqueza natural…",
    image: "Asset-2-80.jpg",
    href: "/noticias/pequenos-exploradores-de-la-naturaleza",
    featured: true,
  },
  {
    title: "Sendero obtiene reconocimiento por su enfoque educativo sostenible",
    excerpt: "Estamos orgullosos de anunciar que el Centro de Educación Sendero ha recibido el Premio a la Innovación Educativa Sostenible 2025, otorgado por la Asociación de Educación Ambiental del Ecuador. Este reconocimiento destaca nuestro compromiso con la formación integral de los estudiantes y la implementación de prácticas que promueven el respeto por el medio ambiente. Entre…",
    image: "457383708_1057851436347546_5414416323928490435_n.jpg",
    href: "/noticias/reconocimiento-enfoque-educativo-sostenible",
  },
  {
    title: "Sendero implementa clases de cocina para fomentar la autonomía infantil",
    excerpt: "En Sendero, seguimos innovando para ofrecer una educación que trascienda las aulas. Este mes, lanzamos un programa de clases de cocina dirigido a nuestros estudiantes de Inicial II y la sección escolar. Esta iniciativa busca fomentar la autonomía, la creatividad y los hábitos saludables desde temprana edad. Durante estas clases, los niños aprenderán a preparar…",
    image: "461961500_1085542313578458_7159791732944626862_n.jpg",
    href: "/noticias/clases-de-cocina-autonomia-infantil",
  },
  {
    title: "Sendero inaugura un nuevo huerto escolar para los estudiantes",
    excerpt: "La iniciativa busca fortalecer la educación integral a través del contacto directo con la naturaleza. En Sendero, seguimos comprometidos con brindar una educación integral que conecte a nuestros estudiantes con el mundo que los rodea. El pasado viernes, inauguramos oficialmente nuestro nuevo huerto escolar, un espacio diseñado para que los niños y niñas aprendan sobre…",
    image: "457377374_1057851423014214_775123418499165545_n.jpg",
    href: "/noticias/nuevo-huerto-escolar",
  },
];

const PAGE_CSS = `
.noticias-page { overflow-x: hidden; background: #fff; }
.noticias-page .news-section { position: relative; display: flex; min-height: 1107px; margin-top: -53px; flex-direction: column; align-items: center; overflow: hidden; padding: 45px 20px; }
.noticias-page .news-video { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
.noticias-page .news-video video { width: 100%; height: 100%; object-fit: cover; }
.noticias-page .news-video::after { content: ""; position: absolute; inset: 0; background: linear-gradient(rgba(255,255,255,.72),rgba(255,255,255,.72)); }
.noticias-page .news-intro, .noticias-page .news-grid { position: relative; z-index: 1; }
.noticias-page .news-intro { display: flex; width: min(666px,100%); flex-direction: column; align-items: center; }
.noticias-page .news-eyebrow { margin: 0 0 16px; border-radius: 16px; background: rgba(255,193,7,.22); padding: 1px 10px 2px; color: #0099a5; font-size: 16px; font-weight: 600; line-height: 23px; }
.noticias-page .news-title { margin: 0; color: #0099a5; font-size: clamp(54px,5.1vw,75px); font-weight: 800; line-height: 1.05; text-shadow: 2px 0 #fff,-2px 0 #fff,0 2px #fff,0 -2px #fff,6px 0 #fdb92e,-6px 0 #fdb92e,0 6px #fdb92e,0 -6px #fdb92e,4px 4px #fdb92e,-4px -4px #fdb92e; }
.noticias-page .news-down { display: grid; width: 40px; height: 40px; margin-top: 42px; place-items: center; border-radius: 50%; background: rgba(245,245,245,.8); color: #0099a5; font-size: 25px; }
.noticias-page .news-vacio { position: relative; z-index: 1; margin-top: 35px; color: #363636; font-size: 15px; font-weight: 500; }
.noticias-page .news-grid { display: grid; width: min(777px,100%); grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px 17px; margin-top: 35px; }
.noticias-page .article-card { min-width: 0; transition: transform 220ms cubic-bezier(0.23,1,0.32,1); }
.noticias-page .article-card.featured { grid-column: 1 / -1; }
.noticias-page .article-card a { display: block; color: inherit; text-decoration: none; }
.noticias-page .article-card img { display: block; width: 100%; height: 202px; border-radius: 24px; object-fit: cover; transition: transform .35s ease, filter .35s ease; }
.noticias-page .article-card a:focus-visible img { filter: saturate(1.08); }
.noticias-page .article-card h2 { margin: 14px 13px 8px; color: #1c2728; font-size: 18px; font-weight: 700; line-height: 1.1; }
.noticias-page .article-card p { margin: 0 13px; color: #363636; font-size: 12px; font-weight: 500; line-height: 1.4; }
.noticias-page .article-card.featured h2 { font-size: 22px; }
@media (hover: hover) and (pointer: fine) {
  .noticias-page .article-card:hover { transform: translateY(-3px); }
  .noticias-page .article-card:hover img { transform: scale(1.025); filter: saturate(1.08); }
}
@media (prefers-reduced-motion: reduce) {
  .noticias-page .article-card { transition: filter 180ms ease-out; }
  .noticias-page .article-card img { transition: filter 180ms ease-out; }
}
@media (max-width: 767px) {
  .noticias-page .news-section { min-height: 1312px; padding-inline: 1px; }
  .noticias-page .news-title { font-size: 54px; }
  .noticias-page .news-grid { width: 100%; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px 16px; }
  .noticias-page .article-card img { border-radius: 12px; }
  .noticias-page .article-card h2 { margin-inline: 8px; font-size: 17px; }
  .noticias-page .article-card p { margin-inline: 8px; font-size: 12px; }
}
`;

export interface NoticiasPageProps {
  chrome: Chrome;
  video?: string;
  antetitulo?: string;
  titulo?: string;
  articulos?: Article[];
}

export function NoticiasPage({
  chrome,
  video,
  antetitulo,
  titulo,
  articulos,
}: NoticiasPageProps) {
  // Una lista vacía es una sección sin publicaciones todavía, no un fallo de
  // conexión: solo se cae a la plantilla cuando no llega nada del backend.
  const items = articulos ?? ARTICLES;

  return (
    <div className="sendero-root sendero-base15 noticias-page flex min-h-full flex-col">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader {...chrome.header} />
      <main className="flex-1">
        <section className="news-section">
          <div className="news-video" aria-hidden="true"><LazyVideo src={video || `${ASSETS}/bg1c.mp4`} /></div>
          <div className="news-intro">
            <BlurReveal as="h3" className="news-eyebrow">
              {antetitulo ?? "Entérate de lo último en Sendero"}
            </BlurReveal>
            <LetterLauncher as="h1" className="news-title">
              {titulo ?? "Noticias"}
            </LetterLauncher>
            <span className="news-down" aria-hidden="true">↓</span>
          </div>
          {items.length === 0 ? (
            <p className="news-vacio">Todavía no hay publicaciones en esta sección.</p>
          ) : null}
          <div className="news-grid">
            {items.map((article) => (
              <article className={`article-card${article.featured ? " featured" : ""}`} key={article.href}>
                <a href={article.href} aria-label={`Read more about ${article.title}`}>
                  <img
                    src={
                      article.image.startsWith("http") || article.image.startsWith("/")
                        ? article.image
                        : `${ASSETS}/${article.image}`
                    }
                    alt={article.alt ?? ""}
                  />
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                </a>
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
