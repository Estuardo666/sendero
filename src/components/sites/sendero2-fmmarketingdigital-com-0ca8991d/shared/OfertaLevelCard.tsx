"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowButton } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/ArrowButton";

const TEAL = "#0099a5";
const AMBER = "#ffc107";
const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export interface OfertaLevelItem {
  title: string;
  /** Absolute path to the level photo. */
  image: string;
  href: string;
}

/**
 * Card visuals shared by the Oferta educativa grid and the home carousel.
 * Scoped to `.oferta-cards` so the two surfaces can lay the cards out
 * differently without redefining the card itself.
 */
export const OFERTA_CARD_CSS = `
.oferta-cards .oferta-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 32px;
  background: var(--oferta-card-bg);
  box-shadow: 0 8px 24px rgba(0,0,0,.10);
  transition: background-color 320ms ease-out, box-shadow 320ms ease-out;
  will-change: transform;
}
.oferta-cards .oferta-card:nth-child(odd) { --oferta-card-bg: #e7f6f8; --oferta-card-bg-hover: #cfeef1; }
.oferta-cards .oferta-card:nth-child(even) { --oferta-card-bg: #fff4dd; --oferta-card-bg-hover: #ffe7b5; }
.oferta-cards .oferta-card:hover,
.oferta-cards .oferta-card:focus-within {
  background: var(--oferta-card-bg-hover);
  box-shadow: 0 18px 40px rgba(0,153,165,.22);
}
.oferta-cards .oferta-card-media { position: relative; aspect-ratio: 4 / 3; overflow: hidden; }
.oferta-cards .oferta-card-media img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(45%); transition: filter 260ms ease-out; }
.oferta-cards .oferta-card:hover .oferta-card-media img { filter: grayscale(0%); }
.oferta-cards .oferta-card-body { display: flex; flex: 1 1 auto; flex-direction: column; align-items: center; gap: 20px; padding: 28px 20px 32px; }
.oferta-cards .oferta-card-title { margin: 0; color: ${TEAL}; font-size: 34px; font-weight: 800; line-height: 1.05; letter-spacing: -1.5px; text-align: center; text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 3px 0 #fdb92e, -3px 0 #fdb92e, 0 3px #fdb92e, 0 -3px #fdb92e; }
.oferta-cards .oferta-card-buttons { display: grid; width: 100%; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: auto; }
.oferta-cards .oferta-card-buttons .nb-arrow-button-v2 { --padding-left: 12px; --gap: 6px; --dimensions: 32px; min-width: 0; width: 100%; justify-content: space-between; }
.oferta-cards .oferta-card-buttons .nb-arrow-button-v2__text { font-size: 14px !important; white-space: nowrap; }
@media (max-width: 767px) {
  .oferta-cards .oferta-card-title { font-size: 30px; }
  .oferta-cards .oferta-card-buttons { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .oferta-cards .oferta-card-media img { transition: none; }
}
`;

/** Entrance/hover variants. Exported so the parent can drive the stagger. */
export function useOfertaCardVariants() {
  const reduced = useReducedMotion() ?? false;

  const card: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduced ? 0.2 : 0.55, ease: EASE },
    },
    hover: reduced ? {} : { y: -8, transition: { duration: 0.32, ease: EASE } },
  };

  const image: Variants = {
    hidden: {},
    visible: { scale: 1, transition: { duration: 0.45, ease: EASE } },
    hover: reduced ? {} : { scale: 1.08, transition: { duration: 0.45, ease: EASE } },
  };

  return { card, image, reduced };
}

interface OfertaLevelCardProps {
  item: OfertaLevelItem;
  /** Texto y destino del botón secundario, configurables desde WordPress. */
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** One level card: photo, title and both calls to action, all visible at rest. */
export function OfertaLevelCard({
  item,
  ctaLabel,
  ctaHref,
  className,
  style,
}: OfertaLevelCardProps) {
  const { card, image } = useOfertaCardVariants();

  return (
    <motion.article
      className={className ? `oferta-card ${className}` : "oferta-card"}
      style={style}
      variants={card}
      whileHover="hover"
    >
      <div className="oferta-card-media">
        <motion.img src={item.image} alt="" variants={image} />
      </div>
      <div className="oferta-card-body">
        <h2 className="oferta-card-title">
          <a href={item.href}>{item.title}</a>
        </h2>
        <div className="oferta-card-buttons">
          <ArrowButton href={item.href} label="Saber más" background={AMBER} textColor="#1c2728" />
          <ArrowButton
            href={ctaHref || "/admisiones/"}
            label={ctaLabel || "Admisiones"}
            background={TEAL}
            textColor="#fff"
          />
        </div>
      </div>
    </motion.article>
  );
}
