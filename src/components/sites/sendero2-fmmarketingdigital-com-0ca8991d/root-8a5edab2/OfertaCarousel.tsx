"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  OFERTA_CARD_CSS,
  OfertaLevelCard,
  type OfertaLevelItem,
} from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/OfertaLevelCard";

const AUTOPLAY_MS = 4500;

const CAROUSEL_CSS = `
${OFERTA_CARD_CSS}
.oferta-carousel { position: relative; width: 100%; }
.oferta-carousel__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 8px 4px 16px;
}
.oferta-carousel__track::-webkit-scrollbar { display: none; }
.oferta-carousel__track > .oferta-card {
  flex: 0 0 calc((100% - 48px) / 3);
  scroll-snap-align: start;
}
.oferta-carousel__arrow {
  position: absolute;
  /* Roughly the vertical centre of the 4:3 photo, so the arrows never sit on
     top of the title or the buttons. */
  top: 26%;
  z-index: 2;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 100px;
  background: #fff;
  color: #0099a5;
  box-shadow: 0 6px 18px rgba(0,0,0,.18);
  cursor: pointer;
  transition: background-color 200ms ease-out, color 200ms ease-out, transform 200ms ease-out;
}
.oferta-carousel__arrow:hover { background: #0099a5; color: #fff; transform: scale(1.06); }
.oferta-carousel__arrow--prev { left: 6px; }
.oferta-carousel__arrow--next { right: 6px; }
.oferta-carousel__dots { display: flex; justify-content: center; gap: 10px; padding-top: 8px; }
.oferta-carousel__dot {
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: rgba(255,255,255,.65);
  box-shadow: 0 0 0 1px rgba(0,153,165,.35);
  cursor: pointer;
  transition: width 240ms ease-out, background-color 240ms ease-out;
}
.oferta-carousel__dot[aria-current="true"] { width: 28px; background: #0099a5; }
@media (max-width: 1023px) {
  .oferta-carousel__track > .oferta-card { flex: 0 0 calc((100% - 24px) / 2); }
}
@media (max-width: 767px) {
  .oferta-carousel__track > .oferta-card { flex: 0 0 100%; }
  .oferta-carousel__arrow { top: 22%; }
}
`;

interface OfertaCarouselProps {
  items: readonly OfertaLevelItem[];
}

/**
 * Home-only carousel of the level cards. Native scroll-snap does the paging so
 * touch swipes and keyboard scrolling keep working; the arrows, dots and the
 * autoplay timer only drive `scrollTo`. Autoplay pauses on hover, on focus,
 * while the tab is hidden, and never starts under reduced motion.
 */
export function OfertaCarousel({ items }: OfertaCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion() ?? false;

  const scrollToCard = useCallback(
    (target: number) => {
      const track = trackRef.current;
      const card = track?.children[target] as HTMLElement | undefined;
      if (!track || !card) return;
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: reduced ? "auto" : "smooth" });
    },
    [reduced],
  );

  /** Wraps back to the first card once the last one is fully in view. */
  const next = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    scrollToCard(atEnd ? 0 : index + 1);
  }, [index, scrollToCard]);

  const prev = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    scrollToCard(index === 0 ? items.length - 1 : index - 1);
  }, [index, items.length, scrollToCard]);

  // Derive the active card from the scroll position so swipes update the dots.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = [...track.children] as HTMLElement[];
        const left = track.scrollLeft + track.offsetLeft;
        let closest = 0;
        let best = Infinity;
        cards.forEach((card, i) => {
          const distance = Math.abs(card.offsetLeft - left);
          if (distance < best) {
            best = distance;
            closest = i;
          }
        });
        setIndex(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Native pointer/focus listeners rather than React's synthetic enter/leave:
  // the pause has to hold while the pointer is anywhere over the carousel,
  // including the cards that slide underneath it as the track scrolls.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const hold = () => setPaused(true);
    const release = () => setPaused(false);
    root.addEventListener("pointerenter", hold);
    root.addEventListener("pointerleave", release);
    root.addEventListener("focusin", hold);
    root.addEventListener("focusout", release);
    return () => {
      root.removeEventListener("pointerenter", hold);
      root.removeEventListener("pointerleave", release);
      root.removeEventListener("focusin", hold);
      root.removeEventListener("focusout", release);
    };
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      next();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next, paused, reduced]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CAROUSEL_CSS }} />
      <div ref={rootRef} className="oferta-cards oferta-carousel" data-autoplay={paused ? "paused" : "running"}>
        <button type="button" className="oferta-carousel__arrow oferta-carousel__arrow--prev" onClick={prev} aria-label="Nivel anterior">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <motion.div
          ref={trackRef}
          className="oferta-carousel__track"
          role="group"
          aria-roledescription="carrusel"
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
            <OfertaLevelCard item={item} key={item.title} />
          ))}
        </motion.div>

        <button type="button" className="oferta-carousel__arrow oferta-carousel__arrow--next" onClick={next} aria-label="Siguiente nivel">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="oferta-carousel__dots">
          {items.map((item, i) => (
            <button
              type="button"
              key={item.title}
              className="oferta-carousel__dot"
              aria-current={i === index}
              aria-label={`Ir a ${item.title}`}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
