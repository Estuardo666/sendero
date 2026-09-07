"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

interface MotionAccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Strong ease-out; entering and exiting both read as responsive with it. */
const EASE_OUT = [0.23, 1, 0.32, 1] as const;
/** Exit runs faster than entry — the system responding, not the user deciding. */
const OPEN_DURATION = 0.26;
const CLOSE_DURATION = 0.2;

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
        data-no-magnetic=""
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
              : { duration: open ? OPEN_DURATION : CLOSE_DURATION, ease: EASE_OUT }
          }
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15.4 5.6 9l1.4-1.4 5 5 5-5L18.4 9z" />
          </svg>
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
                    height: { duration: CLOSE_DURATION, ease: EASE_OUT },
                    opacity: { duration: 0.12, ease: "linear" },
                  },
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    height: { duration: OPEN_DURATION, ease: EASE_OUT },
                    opacity: { duration: 0.16, ease: "linear" },
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
