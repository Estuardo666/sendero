import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { cn } from "@/lib/utils";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";
import type { OfertaLevelItem } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/OfertaLevelCard";
import { OfertaCarousel } from "./OfertaCarousel";

const BASE = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";
const VIDEO_SRC = `${BASE}/604642_80s_90s_1920x1080.mp4`;

const ITEMS: readonly OfertaLevelItem[] = [
  { title: "Inicial 1", image: `${BASE}/IMG_1228.jpg`, href: "/oferta_academica/inicial-1/" },
  { title: "Inicial 2", image: `${BASE}/Copia-de-IMG_4456.jpg`, href: "/oferta_academica/inicial-2/" },
  { title: "Básica Preparatoria", image: `${BASE}/MG_4214.jpg`, href: "/oferta_academica/basica-preparatoria/" },
  { title: "Básica Elemental", image: `${BASE}/Copia-de-_DSC3240.jpg`, href: "/oferta_academica/basica-elemental/" },
  { title: "Básica Media", image: `${BASE}/Copia-de-IMG_9746-scaled-e1757601651844.jpg`, href: "/oferta_academica/basica-media/" },
  { title: "Básica Superior", image: `${BASE}/MG_8269-1-scaled.jpg`, href: "/oferta_academica/basica-superior/" },
];

/** Layout leftovers from the Bricks section that the carousel still sits in. */
const SECTION_CSS = `
#brxe-axagmd { width: 100%; }
#brxe-cghplz .bc-letter-launcher__inner { letter-spacing: -2px !important; }
@media (max-width: 478px) {
  #brxe-lmvaxg { height: auto !important; width: 100% !important; }
  #brxe-ubgffq { flex-direction: column !important; width: 100% !important; }
  #brxe-cghplz {
    flex-direction: column !important;
    height: auto !important;
    padding-top: 90px !important;
    padding-right: 1em !important;
    padding-bottom: 90px !important;
    padding-left: 1em !important;
  }
}
`;

/**
 * 03-oferta — white section with a looping background video, a teal/amber
 * gradient overlay, the "Nuestra Propuesta" eyebrow, the letter-launcher
 * heading and the six-panel, hover-driven image accordion.
 */
export interface OfertaSectionProps {
  video?: string;
  antetitulo?: string;
  titulo?: string;
  items?: readonly OfertaLevelItem[];
}

export function OfertaSection({
  video,
  antetitulo,
  titulo,
  items,
}: OfertaSectionProps = {}) {
  const niveles = items?.length ? items : ITEMS;

  return (
    <section
      id="brxe-cghplz"
      className={cn("brx-section", "relative")}
      style={{
        backgroundColor: "#ffffff",
        width: "100vw",
        height: "auto",
        minHeight: "100vh",
        flexDirection: "column",
        paddingTop: "3em",
        paddingBottom: "3em",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: SECTION_CSS }} />

      <div className="brx-bg-video">
        <LazyVideo src={video || VIDEO_SRC} />
      </div>

      {/* #brxe-cghplz::before */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.74), #0099a5)" }}
      />

      <div id="brxe-lmorob" className="brx-container relative" style={{ flexDirection: "row" }}>
        <div
          id="brxe-cvxnxj"
          className="brx-container"
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <BlurReveal
            as="h3"
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
              backgroundColor: "rgba(255, 193, 7, 0.28)",
              borderRadius: "1em",
              paddingTop: "2px",
              paddingRight: "15px",
              paddingBottom: "3px",
              paddingLeft: "15px",
            }}
          >
            {antetitulo ?? "Nuestra Propuesta"}
          </BlurReveal>

          <LetterLauncher
            as="h1"
            start="top bottom"
            duration={0.3}
            delay={0.2}
            stagger={0.05}
            letterRotation={-30}
            letterAltitude={20}
            className="brxe-auibpk"
            style={{
              textAlign: "left",
              lineHeight: "44px",
              letterSpacing: "0px",
            }}
            innerStyle={{
              color: "var(--bricks-color-vvsbjv, #0099a5)",
              lineHeight: "50px",
              fontSize: "1.4em",
              fontFamily: '"Google Sans"',
            }}
          >
            {titulo ?? "Oferta académica"}
          </LetterLauncher>
        </div>
      </div>

      <div
        id="brxe-ubgffq"
        className="brx-container relative"
        style={{
          flexDirection: "row",
          borderRadius: "2em",
          overflow: "hidden",
          width: "90vw",
        }}
      >
        <div
          id="brxe-lmvaxg"
          className="brx-container"
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <div id="brxe-axagmd" style={{ width: "100%" }}>
            <OfertaCarousel items={niveles} />
          </div>
        </div>
      </div>
    </section>
  );
}
