import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { cn } from "@/lib/utils";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";
import type { Boton } from "../shared/content";

const VIDEO_SRC =
  "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/sendero_pagina-web-5_correcion_1.mp4";

/**
 * 01-hero — full-bleed section with a looping background video, the
 * letter-launcher heading, intro paragraph and the amber arrow button.
 *
 * BASE styles below are the true DESKTOP values; the single site breakpoint
 * `@media (max-width: 478px)` is applied through the scoped <style> element.
 * Every property that genuinely differs between the two lives in that stylesheet
 * (never inline), because inline styles would win over the media query.
 */
const HERO_CSS = `
#brxe-ywfgdp { height: 110vh; }
#brxe-yuirpz { width: 666px; padding-top: 445px; }
#brxe-wajdtr { line-height: 44px; letter-spacing: 0px; text-shadow: 0 0 30px var(--bricks-color-otnukj, #1c2728); }
#brxe-wprjcn { font-size: 1.2em; }
#brxe-rxkiae-wrap > * { margin-bottom: 100px; }

@media (max-width: 478px) {
  #brxe-ywfgdp { height: 95vh; padding-top: 18em; padding-bottom: 3em; }
  #brxe-quotpt { padding-right: 1em; padding-left: 1em; }
  #brxe-yuirpz { width: 100%; padding-top: 0; }
  #brxe-wajdtr {
    font-size: 1.5em;
    line-height: 0.8em;
    font-weight: 900;
    letter-spacing: -1px;
    text-shadow: 0 0 0 var(--bricks-color-otnukj, #1c2728);
    /* Bricks emits border-width/color with no border-style, so the source
       paints no border. Tailwind preflight forces border-style: solid, so it
       must be neutralised explicitly here too. */
    border-style: none;
    border-width: 2px;
    border-color: #ffffff;
    margin-top: 150px;
  }
  #brxe-wprjcn { font-size: 1em; text-shadow: 0 0 17px var(--bricks-color-otnukj, #1c2728); }
  #brxe-rxkiae-wrap > * { margin-bottom: 0; }
}
`;

export interface HeroSectionProps {
  video?: string;
  titulo?: string;
  texto?: string;
  boton?: Boton;
}

export function HeroSection({ video, titulo, texto, boton }: HeroSectionProps = {}) {
  return (
    <section
      id="brxe-ywfgdp"
      className={cn("brx-section", "relative w-full self-stretch justify-center")}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />

      <div className="brx-bg-video">
        <LazyVideo src={video || VIDEO_SRC} eager />
      </div>

      {/* #brxe-ywfgdp::before overlay gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(217deg, rgba(28, 39, 40, 0), rgba(28, 39, 40, 0.44))",
        }}
      />

      <div
        id="brxe-quotpt"
        className="brx-container relative"
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          alignSelf: "center",
          maxWidth: "100%",
        }}
      >
        <div
          id="brxe-yuirpz"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <LetterLauncher
            as="h2"
            start="top bottom"
            duration={0.3}
            delay={0.2}
            stagger={0.05}
            letterRotation={-30}
            letterAltitude={20}
            style={{
              textAlign: "center",
              // Bricks emits border-width/color with no border-style, so the
              // source paints no border. Tailwind preflight forces
              // border-style: solid, so it must be neutralised explicitly.
              borderStyle: "none",
            }}
            innerStyle={{
              fontFamily: '"Google Sans"',
              color: "#f5f5f5",
              lineHeight: "60px",
              fontSize: "1.95em",
            }}
          >
            {titulo ?? "Educación integral para un futuro pleno"}
          </LetterLauncher>

          <div
            id="brxe-wprjcn"
            style={{
              color: "#f5f5f5",
              textAlign: "center",
              fontWeight: 600,
              lineHeight: "26px",
              marginTop: "16px",
            }}
          >
            {texto ??
              "En la Unidad Educativa SENDERO, potenciamos las habilidades de cada niño y niña con el método Montessori y las Inteligencias Múltiples."}
          </div>

          <div id="brxe-rxkiae-wrap" className="contents">
            <ArrowButton
              href={boton?.url || "/oferta-educativa/"}
              label={boton?.etiqueta || "Conoce más"}
              className="botonamarillo"
              background="#ffc107"
              textColor="#1c2728"
              arrowBackground="#fff"
              arrowStroke="#000"
              style={{ marginTop: "25px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
