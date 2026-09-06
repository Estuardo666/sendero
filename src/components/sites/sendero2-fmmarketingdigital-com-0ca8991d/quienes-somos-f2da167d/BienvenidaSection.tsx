import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { NextTiles } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/NextTiles";
import {
  InfiniteSlider,
  type SliderImage,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/InfiniteSlider";
import { cn } from "@/lib/utils";

import type { Imagen } from "../shared/content";
const IMAGE_BASE =
  "/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images";

const SLIDER_IMAGES: SliderImage[] = [
  { src: `${IMAGE_BASE}/MG_4379-scaled.jpg`, alt: "", width: 2560, height: 1707 },
  { src: `${IMAGE_BASE}/DSC_0399-1024x681.jpg`, alt: "", width: 1024, height: 681 },
  { src: `${IMAGE_BASE}/IMG_0231-1024x683.jpg`, alt: "", width: 1024, height: 683 },
  {
    src: `${IMAGE_BASE}/Copia-de-IMG_9538-683x1024.jpg`,
    alt: "",
    width: 683,
    height: 1024,
  },
];

/**
 * ID-scoped CSS mirroring the source Bricks rules. These must live in a
 * stylesheet rather than Tailwind utilities because `.brx-container` rules
 * from globals.css outrank `w-*` utilities on the nested containers, and
 * because everything the single `max-width: 478px` query overrides has to be
 * a real rule (inline styles would always win).
 * Base = desktop; the 478px query is the site's only breakpoint.
 */
const BIENVENIDA_CSS = `
#brxe-brunlt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center !important;
  width: 100%;
  max-width: 100%;
}
#brxe-tvbtug {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 0 0 0 16px;
  overflow: hidden;
  position: relative;
}
#brxe-rgionp {
  width: 1260px;
  max-width: 100%;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  align-self: center !important;
  margin-left: auto;
  margin-right: auto;
}
#brxe-oaskdt {
  width: 60%;
  overflow: hidden;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#brxe-ohbpyr { width: 100%; }
#brxe-learok {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#brxe-learok .bienvenida-eyebrow {
  width: fit-content;
  font-size: 1.1em;
  line-height: 23.1px;
  font-weight: 600;
  color: #0099a5;
  background-color: #ebebeb;
  border-radius: 1em;
  padding: 1px 10px 2px;
  margin-bottom: 20px;
}
#brxe-learok .bienvenida-heading {
  text-align: left;
  line-height: 44px;
  letter-spacing: 0;
  font-size: 36px;
}
#brxe-learok .bienvenida-heading .bc-letter-launcher__inner {
  color: #ffc107;
  line-height: 50px;
  font-size: 1.4em;
  font-family: "Google Sans";
  letter-spacing: -2px;
}
/* Bricks paragraph rhythm: every <p> but the last carries margin-bottom: 18px. */
#brxe-qmpwxc p:not(:last-child) {
  margin-bottom: 18px;
}
#brxe-qmpwxc {
  color: #1c2728;
  text-align: justify;
  font-weight: 500;
  margin-top: 16px;
  font-size: 15px;
  line-height: 25.5px;
}
@media (max-width: 478px) {
  #brxe-brunlt {
    height: 100vh;
    width: 1260px;
    max-width: 100%;
    /* the source row has no side padding; the shared .brx-container fallback adds 20px */
    padding-inline: 0;
  }
  #brxe-tvbtug { height: auto; }
  #brxe-rgionp {
    padding-left: 1em;
    padding-right: 1em;
  }
  #brxe-oaskdt {
    padding-left: 33px;
    padding-right: 33px;
    width: 1260px;
    max-width: 100%;
  }
  #brxe-learok {
    align-self: center !important;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0;
    padding-right: 0;
    width: 1260px;
    max-width: 100%;
  }
  #brxe-learok .bienvenida-heading {
    text-align: center;
    font-size: 1.9em;
  }
}
`;

/**
 * Section `bienvenida` on /quienes-somos/: a hover-reactive tiles panel holding
 * a drag/wheel infinite photo strip beside the welcome copy.
 */
export interface BienvenidaSectionProps {
  antetitulo?: string;
  titulo?: string;
  /** HTML generado por el editor de WordPress. */
  contenido?: string;
  fotos?: Imagen[];
}

export function BienvenidaSection({
  antetitulo,
  titulo,
  contenido,
  fotos,
}: BienvenidaSectionProps = {}) {
  const imagenes: SliderImage[] = fotos?.length
    ? fotos.map((foto) => ({
        src: foto.url,
        alt: foto.alt,
        width: foto.width ?? 1024,
        height: foto.height ?? 683,
      }))
    : SLIDER_IMAGES;

  return (
    <div id="brxe-brunlt" className="brxe-container brx-container">
      <style dangerouslySetInnerHTML={{ __html: BIENVENIDA_CSS }} />
      <NextTiles
        id="brxe-tvbtug"
        className="brxe-next_tiles"
        squareSize={40}
        enterColor="rgba(255, 193, 7, 0.55)"
        leaveColor="rgba(86, 152, 164, 0.53)"
      >
        <div id="brxe-rgionp" className="brxe-container brx-container">
          {/* Slider column */}
          <div id="brxe-oaskdt" className="brxe-container brx-container">
            <InfiniteSlider
              id="brxe-ohbpyr"
              className="brxe-next_infinite_slider"
              images={imagenes}
              itemsWidth="40vw"
              itemsHeight="500px"
              gapVw={5}
            />
          </div>

          {/* Text column */}
          <div id="brxe-learok" className="brxe-container brx-container">
            <BlurReveal
              as="h3"
              className={cn("brxe-next_blur_reveal", "bienvenida-eyebrow")}
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
              {antetitulo ?? "Educación de altura"}
            </BlurReveal>

            <LetterLauncher
              as="h1"
              className={cn("brxe-letter-launcher", "bienvenida-heading")}
              start="top bottom"
              duration={0.3}
              delay={0.2}
              stagger={0.05}
              letterRotation={-30}
              letterAltitude={20}
            >
              {titulo ?? "Bienvenidos a Escuela Sendero"}
            </LetterLauncher>

            {contenido ? (
              <div
                id="brxe-qmpwxc"
                className="brxe-text"
                dangerouslySetInnerHTML={{ __html: contenido }}
              />
            ) : (
              <div id="brxe-qmpwxc" className="brxe-text">
                <p>
                  En el Centro de Educación <strong>Sendero</strong>, creemos en
                  una educación que trascienda las aulas y fomente el desarrollo
                  integral de cada estudiante.
                </p>
              </div>
            )}
          </div>
        </div>
      </NextTiles>
    </div>
  );
}
