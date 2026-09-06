import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { cn } from "@/lib/utils";
import type { Boton } from "../shared/content";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";

const VIDEO_SRC =
  "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/SenderoMatriculateYa.mp4";

/**
 * ID-scoped CSS mirroring the source Bricks rules. These must live in a
 * stylesheet rather than Tailwind utilities because `.sendero-root
 * .brx-container { width: 1260px }` has specificity (0,2,0) and would
 * otherwise outrank any `w-*` utility on the nested containers.
 * Base = desktop; the single `max-width: 478px` query is the site's only
 * breakpoint.
 */
const FILOSOFIA_CSS = `
#brxe-icgmlu {
  height: 777px;
  align-self: center !important;
  justify-content: center;
  align-items: center;
}
#brxe-bajnwe {
  width: 100%;
  max-width: 100%;
  height: 777px;
  flex-direction: row;
  align-self: center !important;
  justify-content: center;
  align-items: center;
}
#brxe-mzonlv {
  width: 1260px;
  max-width: 100%;
  flex-direction: row;
  column-gap: 3em;
  align-self: center !important;
  justify-content: center;
  align-items: center;
}
#brxe-jetnzg { width: 40%; }
#brxe-dbwfpj { width: 60%; }
#brxe-xdfcei { text-align: justify; }
#brxe-jetnzg .filo-heading { text-align: left; }
@media (max-width: 478px) {
  #brxe-icgmlu {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  #brxe-bajnwe {
    height: 100%;
    width: 1260px;
    max-width: 100%;
    flex-direction: column;
    padding-right: 0;
    padding-left: 0;
  }
  #brxe-mzonlv {
    align-self: center !important;
    justify-content: center;
    align-items: center;
    padding-right: 1em;
    padding-left: 1em;
    flex-direction: column;
    width: 1260px;
    max-width: 100%;
  }
  #brxe-jetnzg {
    align-self: center !important;
    align-items: center;
    padding-top: 20px;
    padding-right: 0;
    padding-bottom: 20px;
    padding-left: 0;
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
  #brxe-dbwfpj {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    flex-direction: column;
  }
  #brxe-nkfexj {
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
  }
  #brxe-xdfcei {
    width: 100%;
    align-self: center;
    text-align: center;
  }
  #brxe-jetnzg .filo-heading {
    text-align: center;
    font-size: 1.9em;
    font-family: "Google Sans";
  }
  #brxe-jetnzg .filo-eyebrow {
    align-self: center;
    text-align: center;
    margin-top: 25px;
  }
}
`;

/**
 * Section `02-filosofia`: left text column (eyebrow + letter-launcher heading +
 * blur-reveal body + amber arrow button) beside a rounded autoplay video panel.
 */
export interface FilosofiaSectionProps {
  video?: string;
  antetitulo?: string;
  titulo?: string;
  texto?: string;
  boton?: Boton;
}

export function FilosofiaSection({
  video,
  antetitulo,
  titulo,
  texto,
  boton,
}: FilosofiaSectionProps = {}) {
  return (
    <section id="brxe-icgmlu" className="brxe-section brx-section">
      <style>{FILOSOFIA_CSS}</style>
      <div id="brxe-bajnwe" className="brxe-container brx-container">
        <div id="brxe-jcpyhf" className="brxe-container brx-container">
          <div id="brxe-mzonlv" className="brxe-container brx-container">
            {/* Text column */}
            <div id="brxe-jetnzg" className="brxe-container brx-container">
              <BlurReveal
                as="h3"
                className="brxe-next_blur_reveal next-blur-reveal filo-eyebrow"
                type="chars"
                start="top bottom"
                duration={0.6}
                delay={0.2}
                stagger={0.05}
                blurFrom={10}
                translateFrom={0}
                skewFrom={0}
                ease="power1"
                style={{
                  marginBottom: "1em",
                  color: "var(--bricks-color-vvsbjv, #0099a5)",
                  fontSize: "1.1em",
                  fontWeight: 600,
                  backgroundColor: "#ebebeb",
                  borderRadius: "1em",
                  paddingTop: "1px",
                  paddingRight: "10px",
                  paddingBottom: "2px",
                  paddingLeft: "10px",
                }}
              >
                {antetitulo ?? "Así educamos"}
              </BlurReveal>

              <LetterLauncher
                as="h1"
                className="brxe-letter-launcher bc-letter-launcher filo-heading"
                start="top bottom"
                duration={0.3}
                delay={0.2}
                stagger={0.05}
                letterRotation={-30}
                letterAltitude={20}
                style={{
                  lineHeight: "44PX",
                  letterSpacing: "0px",
                }}
                innerStyle={{
                  color: "var(--bricks-color-vvsbjv, #0099a5)",
                  lineHeight: "50px",
                  fontSize: "1.4em",
                  fontFamily: '"Google Sans"',
                  letterSpacing: "-2px",
                }}
              >
                {titulo ?? "Nuestra filosofía educativa"}
              </LetterLauncher>

              <div
                id="brxe-xdfcei"
                className="brxe-text-basic"
                style={{
                  color: "var(--bricks-color-otnukj, #1c2728)",
                  fontWeight: 500,
                  marginTop: "16px",
                }}
              >
                {texto ??
                  "Desde nuestro inicio, hemos trabajado para construir un espacio donde la educación sea integral, combinando el aprendizaje académico con el desarrollo emocional, social y práctico. Nuestro enfoque no solo busca formar estudiantes exitosos, sino también personas conscientes del mundo que los rodea."}
              </div>

              <ArrowButton
                href={boton?.url || "/quienes-somos"}
                label={boton?.etiqueta || "Conoce más"}
                background="var(--bricks-color-93a8da, #ffc107)"
                textColor="#1c2728"
                arrowBackground="#fff"
                arrowStroke="#000"
                className={cn(
                  "botonazul",
                  "hover:![--stroke:#ffc107] hover:!text-[#0099a5]",
                  "hover:[&_.nb-arrow-button-v2__text]:!text-[#0099a5]",
                )}
                style={{ marginTop: "24px" }}
              />
            </div>

            {/* Video column */}
            <div id="brxe-dbwfpj" className="brxe-container brx-container">
              <div
                id="brxe-nkfexj"
                className={cn(
                  "brxe-video",
                  "h-[606px] w-full max-w-full overflow-hidden rounded-[2em]",
                )}
              >
                <LazyVideo
                  className="h-full w-full object-cover"
                  tabIndex={-1}
                  src={video || VIDEO_SRC}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
