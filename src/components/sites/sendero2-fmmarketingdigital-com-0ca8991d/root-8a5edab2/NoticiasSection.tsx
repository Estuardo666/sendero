import type { CSSProperties } from "react";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import type { NoticiaCard } from "@/types/sendero";
import { cn } from "@/lib/utils";

const IMG = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";

const NOTICIAS: NoticiaCard[] = [
  {
    title: "Sendero lanza el programa “Pequeños Exploradores de la Naturaleza”",
    image: `${IMG}/Asset-2-80.jpg`,
    href: "/sendero-lanza-el-programa-pequenos-exploradores-de-la-naturaleza/",
  },
  {
    title: "Sendero obtiene reconocimiento por su enfoque educativo sostenible",
    image: `${IMG}/457383708_1057851436347546_5414416323928490435_n.jpg`,
    href: "/sendero-obtiene-reconocimiento-por-su-enfoque-educativo-sostenible/",
  },
  {
    title: "Sendero implementa clases de cocina para fomentar la autonomía infantil",
    image: `${IMG}/461961500_1085542313578458_7159791732944626862_n.jpg`,
    href: "/sendero-implementa-clases-de-cocina-para-fomentar-la-autonomia-infantil/",
  },
  {
    title: "Sendero inaugura un nuevo huerto escolar para los estudiantes",
    image: `${IMG}/457377374_1057851423014214_775123418499165545_n.jpg`,
    href: "/sendero-inaugura-un-nuevo-huerto-escolar-para-los-estudiantes/",
  },
];

/* #brxe-rvrhil */
const sectionStyle: CSSProperties = {
  backgroundColor: "#ffc107",
};

/* #brxe-vfbzmz */
const outerContainerStyle: CSSProperties = {
  width: "1260px",
  maxWidth: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
};

/* #brxe-khyata — inline paddings live in the scoped <style> so the 478px
   media query can override them (inline styles always beat a media query). */
const innerContainerStyle: CSSProperties = {
  width: "999px",
  maxWidth: "100%",
  paddingTop: "5em",
  paddingBottom: "5em",
  alignItems: "center",
};

/* #brxe-mcqesu + its padding rule */
const eyebrowStyle: CSSProperties = {
  marginBottom: "1em",
  color: "#0099a5",
  fontSize: "1.1em",
  fontWeight: 600,
  backgroundColor: "rgba(255, 255, 255, 0.91)",
  borderRadius: "1em",
  paddingTop: "2px",
  paddingRight: "15px",
  paddingBottom: "3px",
  paddingLeft: "15px",
};

/* #brxe-fpilzg — line-height/font-size are breakpoint-dependent, see <style> below */
const headingStyle: CSSProperties = {
  textAlign: "center",
  letterSpacing: "0px",
  color: "#1c2728",
};

/* #brxe-fpilzg .bc-letter-launcher__inner */
const headingInnerStyle: CSSProperties = {
  fontFamily: '"Google Sans"',
  color: "#0099a5",
  lineHeight: "60px",
  fontSize: "1.75em",
  letterSpacing: "-2px",
};

/* #brxe-rsfewo — no base rules at desktop; the flex/centering set is mobile-only
   (see the 478px block in the scoped <style>). */
const postsStyle: CSSProperties = {
  maxWidth: "100%",
};

/* #brxe-rsfewo .bricks-layout-wrapper — --gutter:15px, --columns:3 */
const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "15px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
};

/* #brxe-rsfewo .bricks-layout-inner */
const cardInnerStyle: CSSProperties = {
  border: "1px solid #0099a5",
  borderRadius: "2em",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

/* #brxe-rsfewo .content-wrapper (both blocks merged; later padding-left 0 wins) */
const contentWrapperStyle: CSSProperties = {
  backgroundColor: "#f5f5f5",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "space-between",
};

/* #brxe-rsfewo .repeater-item [data-field-id="50bda6"] — font-size is
   breakpoint-dependent (1.2em / 0.9em), see the scoped <style> below */
const cardTitleStyle: CSSProperties = {
  margin: "20px 0",
  color: "#1c2728",
  lineHeight: "19px",
  textAlign: "center",
  paddingRight: "10px",
  paddingLeft: "10px",
};

/* #brxe-rsfewo .repeater-item [data-field-id="lzrlam"] */
const cardCtaStyle: CSSProperties = {
  margin: "20px",
  fontSize: "1em",
  color: "#f5f5f5",
  backgroundColor: "#0099a5",
  padding: "5px 20px",
  borderRadius: "20px",
};

/* #brxe-rsfewo [data-layout="grid"] .bricks-layout-item:first-child */
const firstItemStyle: CSSProperties = {
  gridColumn: "1 / -1",
  width: "100%",
};

/* Breakpoint-dependent rules. These live in a stylesheet rather than inline so the
   478px media query (the site's only breakpoint) can actually override the desktop
   values — inline styles would always win. ID selectors here are (1,0,0), which
   outranks `.sendero-root .brx-container { width: 1260px }` at (0,2,0). */
const SCOPED_CSS = `
#brxe-fpilzg { line-height: 44px; }
#brxe-khyata { padding-right: 1.5em; }
#brxe-rsfewo .repeater-item [data-field-id="50bda6"] { font-size: 1.2em; }

@media (max-width: 478px) {
  #brxe-fpilzg { font-size: 1.9em; line-height: 4px; }
  #brxe-rsfewo .repeater-item [data-field-id="50bda6"] { font-size: 0.9em; }
  #brxe-rsfewo {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #brxe-khyata {
    align-items: center;
    padding-right: 1em;
    padding-left: 1em;
  }
}
`;

const imageStyle: CSSProperties = {
  height: "303px",
  width: "100%",
  maxWidth: "100%",
  objectFit: "cover",
  display: "block",
};

export interface NoticiaResumen {
  title: string;
  image: string;
  href: string;
  alt?: string;
}

export interface NoticiasSectionProps {
  antetitulo?: string;
  titulo?: string;
  textoEnlace?: string;
  noticias?: NoticiaResumen[];
}

export function NoticiasSection({
  antetitulo,
  titulo,
  textoEnlace,
  noticias,
}: NoticiasSectionProps = {}) {
  const items = noticias?.length ? noticias : NOTICIAS;

  return (
    <section id="brxe-rvrhil" className="brxe-section brx-section" style={sectionStyle}>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />
      <div id="brxe-vfbzmz" className="brxe-container brx-container" style={outerContainerStyle}>
        <div
          id="brxe-khyata"
          className="brxe-container brx-container"
          style={innerContainerStyle}
        >
          <BlurReveal
            as="h3"
            className="brxe-next_blur_reveal"
            style={eyebrowStyle}
            type="chars"
            start="top bottom"
            duration={0.6}
            delay={0.2}
            stagger={0.05}
            blurFrom={10}
            translateFrom={0}
            skewFrom={0}
            ease="power1"
          >
            {antetitulo ?? "Mantente al día"}
          </BlurReveal>

          <LetterLauncher
            as="h3"
            className="brxe-letter-launcher"
            style={headingStyle}
            innerStyle={headingInnerStyle}
            start="top bottom"
            duration={0.3}
            delay={0.2}
            stagger={0.05}
            letterRotation={-30}
            letterAltitude={20}
          >
            {titulo ?? "Noticias"}
          </LetterLauncher>

          <div id="brxe-rsfewo" className="brxe-posts w-full" style={postsStyle}>
            <ul className="bricks-layout-wrapper" data-layout="grid" style={gridStyle}>
              {items.map((noticia, index) => (
                <li
                  key={noticia.href}
                  className={cn("bricks-layout-item", "repeater-item", "brxe-rsfewo")}
                  style={index === 0 ? firstItemStyle : undefined}
                >
                  <a href={noticia.href} className="block max-w-full">
                    <div className="bricks-layout-inner" style={cardInnerStyle}>
                      <figure className="image-wrapper m-0 max-w-full">
                        <img
                          src={noticia.image}
                          alt={"alt" in noticia ? (noticia.alt ?? "") : ""}
                          width={1024}
                          height={index === 0 ? 683 : 1024}
                          decoding="async"
                          className="image css-filter"
                          style={imageStyle}
                        />
                      </figure>
                      <div className="content-wrapper" style={contentWrapperStyle}>
                        <h3 className="dynamic" data-field-id="50bda6" style={cardTitleStyle}>
                          {noticia.title}
                        </h3>
                        <h3
                          className="dynamic transition-colors duration-300"
                          data-field-id="lzrlam"
                          style={cardCtaStyle}
                        >
                          {textoEnlace ?? "Leer más"}
                        </h3>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
