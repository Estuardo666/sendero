"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

interface MotionAccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Expo-style curve shared by the open/close height, fade and icon rotation. */
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN = [0.65, 0, 0.35, 1] as const;

/**
 * Accessible accordion primitive for requirements/FAQ-like content. Framer
 * Motion drives the height from 0 to `auto`, so the panel keeps its exit
 * animation on close instead of snapping shut.
 */
export function MotionAccordion({ title, children, className = "" }: MotionAccordionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <div className={`motion-accordion ${className}`} data-open={open ? "true" : "false"}>
      <button
        className="motion-accordion__trigger"
        type="button"
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{title}</span>
        <motion.span
          className="motion-accordion__icon"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.42, ease: open ? EASE_OUT : EASE_IN }
          }
        >
          ⌄
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            className="motion-accordion__panel"
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              height: 0,
              opacity: 0,
              transition: reduceMotion
                ? { duration: 0 }
                : {
                    height: { duration: 0.38, ease: EASE_IN },
                    opacity: { duration: 0.2, ease: "linear" },
                  },
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    height: { duration: 0.46, ease: EASE_OUT },
                    opacity: { duration: 0.28, ease: "linear" },
                  }
            }
          >
            <div className="motion-accordion__panel-inner">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
