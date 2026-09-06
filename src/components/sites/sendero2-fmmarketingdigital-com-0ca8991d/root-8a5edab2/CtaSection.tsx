import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { cn } from "@/lib/utils";

import type { Boton } from "../shared/content";
/**
 * Section `07-cta` — full-bleed photo with a teal gradient overlay, centred
 * letter-launcher eyebrow, lead line and the amber "Ir a admisiones" pill.
 */
export interface CtaSectionProps {
  antetitulo?: string;
  titulo?: string;
  boton?: Boton;
}

export function CtaSection({ antetitulo, titulo, boton }: CtaSectionProps = {}) {
  return (
    <section
      className={cn("brx-section", "relative w-full self-stretch justify-center")}
      style={{
        height: "444px",
        backgroundImage:
          "url(/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Copia-de-_MG_3150-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/*
        The site's only breakpoint: `@media (max-width: 478px)`.
        `!important` is required because the matching base values are inline styles.
      */}
      <style>{`
        @media (max-width: 478px) {
          .cta-zoeiwv { font-size: 1.9em !important; line-height: 4px !important; }
          .cta-vycmyr { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>

      {/* #brxe-lwijqv::before — teal gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(217deg, rgba(0, 153, 165, 0.79) 50%, rgba(0, 153, 165, 0.77) 70%)",
        }}
      />

      {/* #brxe-seattn */}
      <div
        className={cn("brx-container", "relative")}
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "row",
        }}
      >
        {/* #brxe-vycmyr */}
        <div
          className="brx-container cta-vycmyr"
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "666px",
            maxWidth: "100%",
          }}
        >
          {/* #brxe-zoeiwv */}
          <LetterLauncher
            as="h2"
            className="cta-zoeiwv"
            start="top bottom"
            duration={0.3}
            delay={0.2}
            stagger={0.05}
            letterRotation={-30}
            letterAltitude={20}
            style={{
              textAlign: "center",
              letterSpacing: "0px",
              lineHeight: "44px",
            }}
            innerStyle={{
              fontFamily: '"Google Sans"',
              color: "#f5f5f5",
              lineHeight: "60px",
              fontSize: "1.75em",
            }}
          >
            {titulo ?? "Un espacio donde tus hijos crecerán con amor y aprendizaje"}
          </LetterLauncher>

          {/* #brxe-sbomrs */}
          <div
            style={{
              marginTop: "29px",
              color: "#f5f5f5",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1.1em",
            }}
          >
            {antetitulo ?? "El mejor comienzo para grandes futuros"}
          </div>

          {/* #brxe-ohdzyw */}
          <ArrowButton
            href={boton?.url || "/admisiones/"}
            label={boton?.etiqueta || "Ir a admisiones"}
            className="botonamarillo"
            background="#ffc107"
            textColor="#1c2728"
            arrowBackground="#fff"
            arrowStroke="#000"
            style={{ marginTop: "24px" }}
          />
        </div>
      </div>
    </section>
  );
}
