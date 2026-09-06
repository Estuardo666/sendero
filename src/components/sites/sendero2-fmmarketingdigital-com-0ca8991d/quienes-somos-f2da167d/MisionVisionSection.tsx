import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { InfiniteSlider } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/InfiniteSlider";
import { NextTiles } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/NextTiles";
import { cn } from "@/lib/utils";
import type { Imagen } from "../shared/content";

const IMAGE_BASE =
  "/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images";

const SLIDER_IMAGES = [
  { src: `${IMAGE_BASE}/MG_4254-scaled.jpg`, alt: "", width: 2560, height: 1707 },
  { src: `${IMAGE_BASE}/MG_3848-1024x683.jpg`, alt: "", width: 1024, height: 683 },
  { src: `${IMAGE_BASE}/MG_1612-1024x683.jpg`, alt: "", width: 1024, height: 683 },
  {
    src: `${IMAGE_BASE}/Copia-de-IMG_2714-1024x683.jpg`,
    alt: "",
    width: 1024,
    height: 683,
  },
];

/**
 * ID-scoped CSS mirroring the source Bricks rules. These must live in a
 * stylesheet rather than Tailwind utilities because `.brx-container` rules from
 * globals.css outrank utilities on the nested containers, and because the single
 * `max-width: 478px` query (the site's only breakpoint) overrides them.
 * The two eyebrow headings are rendered through `BlurReveal`, which forwards a
 * className but not an id, so their source ids are carried as classes.
 */
const MISION_VISION_CSS = `
#brxe-elynap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center !important;
  width: 100%;
  padding-top: 99px;
  padding-bottom: 99px;
}
#brxe-zwomdi {
  width: 100%;
  height: auto;
  flex-direction: row;
  border: 1px solid #ffffff;
  border-radius: 0 0 0 16px;
  overflow: hidden;
  position: relative;
}
#brxe-nzbebo {
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
#brxe-aomfsb {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#brxe-aomfsb .mv-eyebrow {
  width: fit-content;
  margin-bottom: 0;
  color: #0099a5;
  background-color: #ebebeb;
  border-radius: 1em;
  font-size: 1.1em;
  line-height: 23.1px;
  font-weight: 600;
  padding: 1px 10px 2px;
}
.brxe-lmnrex {
  margin-top: 0;
}
.brxe-jthdpg {
  margin-top: 25px;
}
#brxe-pgfjas,
#brxe-oewlls {
  color: #1c2728;
  font-weight: 500;
  margin-top: 16px;
  font-size: 15px;
  line-height: 25.5px;
  text-align: justify;
}
#brxe-pgfjas { width: 100%; }
#brxe-pgfjas p,
#brxe-oewlls p {
  text-align: center;
}
#brxe-rwqtnf {
  width: 60%;
  overflow: hidden;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#brxe-bqymud { width: 100%; }
@media (max-width: 478px) {
  #brxe-elynap {
    height: auto;
    padding-top: 370px;
    padding-right: 1em;
    padding-left: 1em;
    margin-top: 0;
  }
  #brxe-zwomdi {
    height: auto;
  }
  #brxe-nzbebo {
    padding-right: 0;
    padding-left: 0;
  }
  #brxe-aomfsb {
    align-self: center;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
  }
  #brxe-rwqtnf {
    padding-right: 33px;
    padding-left: 33px;
    width: 100%;
  }
}
`;

/**
 * Misión / Visión block on `/quienes-somos/`: a hover-tiled panel holding the
 * two eyebrow-and-paragraph pairs on the left and the drag/wheel infinite image
 * slider on the right (columns mirrored versus the preceding section).
 */
export interface MisionVisionSectionProps {
  misionTitulo?: string;
  misionTexto?: string;
  visionTitulo?: string;
  visionTexto?: string;
  fotos?: Imagen[];
}

export function MisionVisionSection({
  misionTitulo,
  misionTexto,
  visionTitulo,
  visionTexto,
  fotos,
}: MisionVisionSectionProps = {}) {
  const imagenes = fotos?.length
    ? fotos.map((foto) => ({
        src: foto.url,
        alt: foto.alt,
        width: foto.width ?? 1024,
        height: foto.height ?? 683,
      }))
    : SLIDER_IMAGES;

  return (
    <div id="brxe-elynap" className="brxe-container brx-container">
      <style dangerouslySetInnerHTML={{ __html: MISION_VISION_CSS }} />
      <NextTiles
        id="brxe-zwomdi"
        squareSize={40}
        enterColor="rgba(255, 193, 7, 0.55)"
        leaveColor="rgba(86, 152, 164, 0.53)"
        className="brxe-next_tiles"
      >
        <div id="brxe-nzbebo" className="brxe-container brx-container">
          {/* Text column */}
          <div id="brxe-aomfsb" className="brxe-container brx-container">
            <BlurReveal
              as="h3"
              className={cn(
                "brxe-next_blur_reveal",
                "brxe-lmnrex",
                "mv-eyebrow",
              )}
            >
              {misionTitulo ?? "Misión"}
            </BlurReveal>

            <div id="brxe-pgfjas" className="brxe-text">
              <p>
                {misionTexto ??
                  "Nuestra misión es preparar a cada niño y niña para enfrentar los desafíos del futuro con confianza, empatía y un profundo sentido de comunidad. En Sendero, el aprendizaje es una experiencia enriquecedora que deja huellas para toda la vida."}
              </p>
            </div>

            <BlurReveal
              as="h3"
              className={cn(
                "brxe-next_blur_reveal",
                "brxe-jthdpg",
                "mv-eyebrow",
              )}
            >
              {visionTitulo ?? "Visión"}
            </BlurReveal>

            <div id="brxe-oewlls" className="brxe-text">
              <p>
                {visionTexto ??
                  "Nuestra institución nació de una visión clara: crear un espacio donde los niños y niñas puedan aprender, explorar y crecer en un entorno diseñado específicamente para sus necesidades. Desde el año 2015, hemos trabajado constantemente para ofrecer una educación que combina lo académico, lo emocional y lo práctico, promoviendo el respeto por uno mismo, por los demás y por el entorno natural."}
              </p>
            </div>
          </div>

          {/* Slider column */}
          <div id="brxe-rwqtnf" className="brxe-container brx-container">
            <InfiniteSlider
              id="brxe-bqymud"
              images={imagenes}
              itemsWidth="40vw"
              itemsHeight="500px"
              gapVw={5}
            />
          </div>
        </div>
      </NextTiles>
    </div>
  );
}
