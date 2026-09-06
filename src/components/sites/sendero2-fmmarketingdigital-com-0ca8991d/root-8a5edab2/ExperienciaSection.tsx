"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { cn } from "@/lib/utils";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";

const IMG = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";
const VIDEO_SRC = `${IMG}/bg1c.mp4`;
import type { Boton } from "../shared/content";

const WA_HREF = "https://wa.link/etzumz";

/* ------------------------------------------------------------------ *
 * Local CSS: bc_flipbox.css + bc_image_reveal.css (verbatim values),
 * plus the section's only declared breakpoint (max-width: 478px).
 * Scoped under `.exp-sec` so nothing leaks outside this section.
 * ------------------------------------------------------------------ */
const SECTION_CSS = `
.exp-sec .bc-flipbox {
  width: 300px;
  --height: 300px;
  height: var(--height);
  perspective: 800px;
}
.exp-sec .bc-flipbox__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  border-radius: 30px;
  --trans-duration: 420ms;
  --trans-easing: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: -webkit-transform var(--trans-duration) var(--trans-easing);
  transition: transform var(--trans-duration) var(--trans-easing);
}
.exp-sec .bc-flipbox__flip {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  border-radius: 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.exp-sec .bc-flipbox__flip--front { position: relative; perspective: 1000px; }
.exp-sec .bc-flipbox__flip--back { position: absolute; top: 0; left: 0; }
.exp-sec .bc-flipbox__wrapper[data-x-reverse] .bc-flipbox__flip--back {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.exp-sec .bc-flipbox:hover .bc-flipbox__wrapper[data-x-reverse],
.exp-sec .bc-flipbox:focus-within .bc-flipbox__wrapper[data-x-reverse],
.exp-sec .bc-flipbox__wrapper[data-x-reverse][data-flipped] {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.exp-sec .bc-img-reveal {
  contain: paint;
  display: block;
  width: fit-content;
  height: auto;
  transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
}
.exp-sec .bc-img-reveal__element {
  overflow: hidden;
  width: 100%;
  height: 100%;
  --scale: 1.3;
  transition: transform 1.5s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.exp-sec .bc-img-reveal__element[data-direction='left'] { transform: translateX(-100%); }
.exp-sec .bc-img-reveal__element .bc-img-reveal__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform-origin: left;
  transition: transform 1.5s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.exp-sec .bc-img-reveal__element[data-direction='left'] .bc-img-reveal__img {
  transform: translateX(100%) scale(var(--scale));
}
.exp-sec .bc-img-reveal__element[data-revealed],
.exp-sec .bc-img-reveal__element[data-revealed] .bc-img-reveal__img {
  transform: translateX(0) scale(1);
}

@media (hover: hover) and (pointer: fine) {
  .exp-sec .bc-img-reveal:hover { transform: scale(1.04); }
}

@media (prefers-reduced-motion: reduce) {
  .exp-sec .bc-flipbox__wrapper,
  .exp-sec .bc-img-reveal,
  .exp-sec .bc-img-reveal__element,
  .exp-sec .bc-img-reveal__element .bc-img-reveal__img {
    transition-duration: 180ms;
  }
}

/* The tiles carry .brx-container purely for the Bricks flex primitives.
   \`.sendero-root .brx-container\` also injects \`padding-inline: 20px\` below
   1300px, which would eat into the tiles' own 24% / 100% widths — neutralise
   it at higher specificity for the nested tiles only (the row keeps it). */
.sendero-root .exp-sec .exp-tile { padding-inline: 0; }

@media (max-width: 478px) {
  .exp-sec { height: auto; padding-right: 1em !important; padding-left: 1em !important; }
  .exp-sec .exp-heading { text-align: center; font-size: 1.9em; font-family: "Google Sans"; }
  .exp-sec #brxe-tvmlce,
  .exp-sec #brxe-wctnuv,
  .exp-sec #brxe-asjpqr,
  .exp-sec #brxe-aqyodn { width: 100% !important; }
  .exp-sec #brxe-hmbwrz { width: 100% !important; }
  /* \`!important\` because FlipCard sets font-size: 0.9em inline on the back text. */
  .exp-sec #brxe-jesjzj { font-size: 1em !important; text-align: center; width: 100%; }
  .exp-sec #brxe-yznhyk,
  .exp-sec #brxe-zteqcs,
  .exp-sec #brxe-qdblrz { font-size: 1em !important; }
  .exp-sec #brxe-gkndoi,
  .exp-sec #brxe-ewenod,
  .exp-sec #brxe-ueseqe,
  .exp-sec #brxe-nbofcq { width: 100% !important; height: 250px !important; }
  .exp-sec #brxe-qdfbpz { width: 100% !important; height: 250px !important; flex-direction: column-reverse; }
}
`;

/* ------------------------------------------------------------------ *
 * Image reveal (bc-img-reveal): scroll-triggered clip/scale reveal.
 * ------------------------------------------------------------------ */
interface ImageRevealProps {
  id: string;
  src: string;
  width: number;
  height: number;
  /** GSAP delay in seconds (data-delay). */
  delay?: number;
}

function ImageReveal({ id, src, width, height, delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setRevealed(true), delay * 1000);
            observer.disconnect();
          }
        }
      },
      // data-start="top bottom" — fire as soon as the top edge enters the viewport.
      { rootMargin: "0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      id={id}
      className="bc-img-reveal"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "2em",
      }}
    >
      <div
        className="bc-img-reveal__element"
        data-direction="left"
        {...(revealed ? { "data-revealed": "" } : {})}
        style={{ visibility: "visible" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bc-img-reveal__img" src={src} width={width} height={height} alt="" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Flipbox (bc-flipbox): hover-driven 3D flip, data-x-reverse direction.
 * ------------------------------------------------------------------ */
interface FlipCardProps {
  ctaHref?: string;
  ctaLabel?: string;
  /** Outer .brxe-container id. */
  containerId: string;
  /** .bc-flipbox id. */
  flipId: string;
  frontId: string;
  frontHeadingId: string;
  backId: string;
  backTextId: string;
  title: string;
  body: string;
  frontBackground: string;
  backBackground: string;
  titleColor: string;
  bodyColor?: string;
  buttonBackground: string;
}

function FlipCard({
  ctaHref,
  ctaLabel,
  containerId,
  flipId,
  frontId,
  frontHeadingId,
  backId,
  backTextId,
  title,
  body,
  frontBackground,
  backBackground,
  titleColor,
  bodyColor,
  buttonBackground,
}: FlipCardProps) {
  return (
    <div
      id={containerId}
      className="brx-container exp-tile"
      style={{
        alignSelf: "stretch",
        width: "24%",
        borderRadius: "1.5em",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <div
        id={flipId}
        className="bc-flipbox"
        data-trigger="hover"
        style={{ alignSelf: "center", ["--height" as string]: "100%", width: "100%" }}
      >
        <div className="bc-flipbox__wrapper" data-x-reverse>
          <div
            id={frontId}
            className="bc-flipbox__flip bc-flipbox__flip--front"
            tabIndex={0}
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: frontBackground,
              paddingRight: "1em",
              paddingLeft: "1em",
            }}
          >
            <h3
              id={frontHeadingId}
              style={{
                color: titleColor,
                textAlign: "center",
                fontFamily: '"Google Sans"',
                fontWeight: 700,
                fontSize: "180%",
                lineHeight: 1,
                letterSpacing: "-1px",
              }}
            >
              {title}
            </h3>
          </div>
          <div
            id={backId}
            className="bc-flipbox__flip bc-flipbox__flip--back"
            tabIndex={0}
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: backBackground,
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <div
              id={backTextId}
              style={{
                fontWeight: 600,
                fontSize: "0.9em",
                lineHeight: "18px",
                ...(bodyColor ? { color: bodyColor } : {}),
              }}
            >
              {body}
            </div>
            <ArrowButton
              href={ctaHref || WA_HREF}
              label={ctaLabel || "Contáctanos"}
              className="botonamarillo"
              background={buttonBackground}
              textColor="#1c2728"
              arrowBackground="#fff"
              arrowStroke="#000"
              style={{ marginTop: "24px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 04-experiencia — white section over the bg1c.mp4 loop: eyebrow + letter
 * launcher heading, then a wrapping row of 8 quarter-width tiles alternating
 * image-reveal photos and hover-flip cards.
 * Duplicate Bricks rules that reappear in the 478px media query are treated
 * as mobile-only overrides (see SECTION_CSS).
 */
export interface ExperienciaSectionProps {
  video?: string;
  antetitulo?: string;
  titulo?: string;
  boton?: Boton;
  tarjetas?: { titulo: string; texto: string }[];
  fotos?: string[];
}

export function ExperienciaSection({
  video,
  antetitulo,
  titulo,
  boton,
  tarjetas,
  fotos,
}: ExperienciaSectionProps = {}) {
  const lineasTitulo = (
    titulo ?? "La experiencia de ser\nun estudiante Sendero"
  ).split("\n");
  const cta = { ctaHref: boton?.url, ctaLabel: boton?.etiqueta };

  return (
    <section
      id="brxe-hrltlt"
      className={cn("brx-section", "exp-sec", "has-bg-video")}
      style={{
        paddingTop: "6em",
        paddingRight: "9em",
        paddingBottom: "6em",
        paddingLeft: "9em",
        backgroundColor: "#ffffff",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: SECTION_CSS }} />

      <div className="brx-bg-video">
        <LazyVideo src={video || VIDEO_SRC} />
      </div>

      <BlurReveal
        as="h3"
        className="next-blur-reveal"
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
          color: "#0099a5",
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
        {antetitulo ?? "Un camino hacia el futuro"}
      </BlurReveal>

      <LetterLauncher
        as="h1"
        className="bc-letter-launcher exp-heading"
        start="top bottom"
        duration={0.3}
        delay={0.2}
        stagger={0.05}
        letterRotation={-30}
        letterAltitude={20}
        style={{
          textAlign: "center",
          lineHeight: "44px",
          letterSpacing: "0px",
          marginBottom: "0.5em",
          fontFamily: '"Google Sans"',
        }}
        innerStyle={{
          color: "#0099a5",
          lineHeight: "50px",
          fontSize: "1.4em",
          fontFamily: '"Google Sans"',
        }}
      >
        <>
          {lineasTitulo.map((linea, indice) => (
            <span key={linea}>
              {indice > 0 && <br />}
              {linea}
            </span>
          ))}
        </>
      </LetterLauncher>

      <div
        id="brxe-pncmqn"
        className="brx-container"
        style={{
          alignSelf: "stretch",
          width: "100%",
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: "5px",
          rowGap: "10px",
          paddingTop: "20px",
          paddingBottom: "20px",
          maxWidth: "1260px",
        }}
      >
        {/* 1 — photo */}
        <div
          id="brxe-tvmlce"
          className="brx-container exp-tile"
          style={{
            alignSelf: "center",
            width: "24%",
            borderRadius: "1.5em",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <ImageReveal
            id="brxe-wsquet"
            src={fotos?.[0] || `${IMG}/493276494_1261988252600529_3837458535512588900_n.webp`}
            width={1024}
            height={1024}
          />
        </div>

        {/* 2 — amber flip card */}
        <FlipCard
          containerId="brxe-ewenod"
          flipId="brxe-gkndoi"
          frontId="brxe-hmbwrz"
          frontHeadingId="brxe-qfjwcj"
          backId="brxe-ypnkte"
          backTextId="brxe-jesjzj"
          {...cta}
          title={tarjetas?.[0]?.titulo ?? "Metodología Centrada en su Potencial Único"}
          body={tarjetas?.[0]?.texto ?? "Fusionamos lo mejor de la filosofía Montessori y las Inteligencias Múltiples. Esto significa que no forzamos un ritmo de aprendizaje, sino que respetamos el de tu hijo, descubriendo y potenciando todos sus talentos, desde el artístico hasta el lógico, para que crezca con confianza e independencia."}
          frontBackground="#ffc107"
          backBackground="#f5f5f5"
          titleColor="#1c2728"
          buttonBackground="#ffc107"
        />

        {/* 3 — photo */}
        <div
          id="brxe-wctnuv"
          className="brx-container exp-tile"
          style={{
            borderRadius: "1.5em",
            height: "300px",
            width: "24%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ImageReveal id="brxe-zywvwj" src={fotos?.[1] || `${IMG}/MG_3644.jpg`} width={1024} height={683} />
        </div>

        {/* 4 — teal flip card */}
        <FlipCard
          containerId="brxe-ueseqe"
          flipId="brxe-ufyrdx"
          frontId="brxe-ocjoya"
          frontHeadingId="brxe-mrikum"
          backId="brxe-ztjuqi"
          backTextId="brxe-yznhyk"
          {...cta}
          title={tarjetas?.[1]?.titulo ?? "Inmersión Bilingüe desde el Primer Día"}
          body={tarjetas?.[1]?.texto ?? "El inglés no es solo una materia; es parte de nuestro día a día. A través de juegos, canciones y actividades cotidianas, tu hijo aprende y piensa en inglés de forma natural. Esta inmersión temprana le da una ventaja decisiva, preparándolo para un futuro globalizado sin el estrés de la traducción."}
          frontBackground="#0099a5"
          backBackground="#0099a5"
          titleColor="#ffffff"
          bodyColor="#ffffff"
          buttonBackground="#f5f5f5"
        />

        {/* 5 — teal flip card */}
        <FlipCard
          containerId="brxe-qdfbpz"
          flipId="brxe-tmfbja"
          frontId="brxe-pxboxz"
          frontHeadingId="brxe-hvdcyx"
          backId="brxe-mzjwei"
          backTextId="brxe-zteqcs"
          {...cta}
          title={tarjetas?.[2]?.titulo ?? "Desarrollo de Habilidades para la Vida"}
          body={tarjetas?.[2]?.texto ?? "Entendemos que las experiencias tempranas son clave. Por eso, nuestro enfoque va más allá de lo académico. Fomentamos la inteligencia emocional, la autonomía y la responsabilidad en cada actividad, sentando las bases firmes para que tu hijo se convierta en un adulto sano, pleno y feliz."}
          frontBackground="#0099a5"
          backBackground="#0099a5"
          titleColor="#ffffff"
          bodyColor="#ffffff"
          buttonBackground="#f5f5f5"
        />

        {/* 6 — photo */}
        <div
          id="brxe-asjpqr"
          className="brx-container exp-tile"
          style={{
            borderRadius: "1.5em",
            width: "24%",
            height: "300px",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ImageReveal
            id="brxe-ncvabz"
            src={fotos?.[2] || `${IMG}/493277712_1256740899791931_4380273605235822115_n.webp`}
            width={1280}
            height={1280}
          />
        </div>

        {/* 7 — amber flip card */}
        <FlipCard
          containerId="brxe-nbofcq"
          flipId="brxe-nxybto"
          frontId="brxe-ncapdw"
          frontHeadingId="brxe-hcvtzb"
          backId="brxe-zucpor"
          backTextId="brxe-qdblrz"
          {...cta}
          title={tarjetas?.[3]?.titulo ?? "Aprendizaje Activo y Significativo"}
          body={tarjetas?.[3]?.texto ?? "Creamos ambientes preparados donde los niños aprenden haciendo. En lugar de memorizar, ellos tocan, exploran y construyen su propio conocimiento a través de la experiencia. Esto no solo hace que el aprendizaje sea más divertido, sino que asegura que sea profundo y duradero."}
          frontBackground="#ffc107"
          backBackground="#f5f5f5"
          titleColor="#1c2728"
          buttonBackground="#ffc107"
        />

        {/* 8 — photo */}
        <div
          id="brxe-aqyodn"
          className="brx-container exp-tile"
          style={{
            borderRadius: "1.5em",
            width: "24%",
            height: "300px",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ImageReveal
            id="brxe-mmsowc"
            src={fotos?.[3] || `${IMG}/Copia-de-_MG_5893.jpg`}
            width={1024}
            height={683}
          />
        </div>
      </div>
    </section>
  );
}
