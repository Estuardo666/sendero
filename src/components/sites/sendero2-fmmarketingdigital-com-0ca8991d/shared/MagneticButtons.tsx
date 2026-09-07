"use client";

import { useEffect } from "react";

const SELECTOR = [
  ".nb-arrow-button-v2",
  "button",
  ".bricks-button",
  '[role="button"]',
]
  .map((base) => `${base}:not([data-no-magnetic])`)
  .join(", ");

/** Full-width bars drift under the pointer instead of feeling pressable. */
const MAX_WIDTH = 320;

/** Pointer distance (px) at which a control starts reacting. */
const RADIUS = 90;
/** Maximum displacement (px) — deliberately slight. */
const MAX_SHIFT = 6;
/** Interpolation factor per frame. */
const EASE = 0.18;

/**
 * Global "magnetic" behaviour for every button on the site: the control drifts
 * a few pixels toward the pointer while it is nearby and springs back on exit.
 *
 * Displacement is written to the CSS `translate` property (not `transform`), so
 * it composes with the hover transforms components already declare.
 */
export function MagneticButtons() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    let active: HTMLElement | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const render = () => {
      frame = requestAnimationFrame(render);
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;
      if (!active) return;
      if (Math.abs(currentX) < 0.05 && Math.abs(currentY) < 0.05) {
        active.style.removeProperty("translate");
        active = null;
        return;
      }
      active.style.translate = `${currentX.toFixed(2)}px ${currentY.toFixed(2)}px`;
    };

    const release = () => {
      targetX = 0;
      targetY = 0;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const hovered = (event.target as Element | null)?.closest?.(SELECTOR) as
        | HTMLElement
        | null;

      if (hovered && hovered.offsetWidth > MAX_WIDTH) return;

      if (hovered && hovered !== active) {
        if (active) active.style.removeProperty("translate");
        active = hovered;
        currentX = 0;
        currentY = 0;
      }
      if (!active) return;

      const rect = active.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      if (distance > RADIUS + Math.max(rect.width, rect.height) / 2) {
        release();
        return;
      }
      const pull = Math.min(1, distance / RADIUS);
      const angle = Math.atan2(dy, dx);
      targetX = Math.cos(angle) * MAX_SHIFT * pull;
      targetY = Math.sin(angle) * MAX_SHIFT * pull;
    };

    frame = requestAnimationFrame(render);
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    window.addEventListener("blur", release);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
      window.removeEventListener("blur", release);
      if (active) active.style.removeProperty("translate");
    };
  }, []);

  return null;
}
