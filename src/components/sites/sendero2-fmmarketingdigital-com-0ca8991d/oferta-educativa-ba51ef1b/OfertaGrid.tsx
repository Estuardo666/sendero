"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  OFERTA_CARD_CSS,
  OfertaLevelCard,
  type OfertaLevelItem,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/OfertaLevelCard";

const GRID_CSS = `
${OFERTA_CARD_CSS}
.oferta-educativa-page .oferta-grid {
  display: grid;
  width: 100%;
  max-width: 1260px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}
@media (max-width: 1023px) {
  .oferta-educativa-page .oferta-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
}
@media (max-width: 767px) {
  .oferta-educativa-page .oferta-grid { max-width: 520px; grid-template-columns: minmax(0, 1fr); gap: 24px; }
}
`;

interface OfertaGridProps {
  items: readonly OfertaLevelItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

/** Static grid of every level, revealed with a stagger as it scrolls in. */
export function OfertaGrid({ items, ctaLabel, ctaHref }: OfertaGridProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GRID_CSS }} />
      <motion.div
        className="oferta-cards oferta-grid"
        aria-label="Oferta académica por niveles"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
        }}
      >
        {items.map((item) => (
          <OfertaLevelCard
            item={item}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
            key={item.title}
          />
        ))}
      </motion.div>
    </>
  );
}
