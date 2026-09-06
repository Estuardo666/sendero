"use client";

import { useId, useState } from "react";

interface MotionAccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Accessible accordion primitive for requirements/FAQ-like content. The
 * panel stays mounted while its grid track and opacity transition, so opening
 * and closing never snaps or loses the exit animation.
 */
export function MotionAccordion({ title, children, className = "" }: MotionAccordionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

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
        <span className="motion-accordion__icon" aria-hidden="true">⌄</span>
      </button>
      <div id={panelId} className="motion-accordion__panel" aria-hidden={!open} inert={!open}>
        <div className="motion-accordion__panel-inner">{children}</div>
      </div>
    </div>
  );
}
