"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NextTilesProps {
  children: React.ReactNode;
  /** Square edge length in px — source uses data-square-dimensions="40". */
  squareSize?: number;
  /** --mouseenter-color */
  enterColor?: string;
  /** --mouseleave-color */
  leaveColor?: string;
  /** Grid line colour (source draws a 0.5px border per square). */
  lineColor?: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * Port of the NextBricks "Tiles" element (next_tiles.min.js + next_tiles.css).
 *
 * The source builds one <div> per square — thousands of nodes that it rebuilds
 * on every resize, which stalls any layout animation running inside the tiles
 * (the requirements accordion, for one). We draw the same grid with two
 * repeating gradients and move a single highlight square with `translate`, so
 * pointer tracking never touches layout and resizing costs nothing. A second
 * square trails the pointer with --mouseleave-color for 100ms, matching the
 * plugin's `background-color 0.2s ease-in-out` fade.
 */
export function NextTiles({
  children,
  squareSize = 40,
  enterColor = "rgba(255, 193, 7, 0.55)",
  leaveColor = "rgba(86, 152, 164, 0.53)",
  lineColor = "rgba(255, 255, 255, 0.49)",
  className,
  style,
  id,
}: NextTilesProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const enterRef = useRef<HTMLDivElement>(null);
  const leaveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const enter = enterRef.current;
    const leave = leaveRef.current;
    if (!root || !enter || !leave) return;

    let cellX = Number.NaN;
    let cellY = Number.NaN;
    let trailTimer = 0;
    /* Cached so pointermove never forces a synchronous layout after the
       previous move wrote a translate; re-read only once after a scroll,
       resize or reflow marks it stale. */
    let rect = root.getBoundingClientRect();
    let stale = false;
    const invalidate = () => {
      stale = true;
    };

    const place = (element: HTMLElement, x: number, y: number) => {
      element.style.translate = `${x * squareSize}px ${y * squareSize}px`;
    };

    const hide = () => {
      enter.style.opacity = "0";
      cellX = Number.NaN;
      cellY = Number.NaN;
    };

    const onMove = (event: PointerEvent) => {
      if (stale) {
        rect = root.getBoundingClientRect();
        stale = false;
      }
      const x = Math.floor((event.clientX - rect.left) / squareSize);
      const y = Math.floor((event.clientY - rect.top) / squareSize);
      if (x === cellX && y === cellY) return;

      if (!Number.isNaN(cellX)) {
        place(leave, cellX, cellY);
        leave.style.opacity = "1";
        window.clearTimeout(trailTimer);
        trailTimer = window.setTimeout(() => {
          leave.style.opacity = "0";
        }, 100);
      }

      cellX = x;
      cellY = y;
      place(enter, x, y);
      enter.style.opacity = "1";
    };

    const onLeave = () => {
      if (!Number.isNaN(cellX)) {
        place(leave, cellX, cellY);
        leave.style.opacity = "1";
        window.clearTimeout(trailTimer);
        trailTimer = window.setTimeout(() => {
          leave.style.opacity = "0";
        }, 100);
      }
      hide();
    };

    const observer = new ResizeObserver(invalidate);
    observer.observe(root);
    root.addEventListener("pointerenter", invalidate);
    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", invalidate, { passive: true });
    window.addEventListener("resize", invalidate);
    return () => {
      window.clearTimeout(trailTimer);
      observer.disconnect();
      root.removeEventListener("pointerenter", invalidate);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", invalidate);
      window.removeEventListener("resize", invalidate);
    };
  }, [squareSize]);

  return (
    <div
      id={id}
      ref={rootRef}
      className={cn("next-tiles", className)}
      style={
        {
          "--mouseenter-color": enterColor,
          "--mouseleave-color": leaveColor,
          "--tile-line": lineColor,
          "--tile-size": `${squareSize}px`,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className="next-tiles__squares-layout" aria-hidden>
        <div
          ref={leaveRef}
          className="next-tiles__square next-tiles__square--mouseleave"
        />
        <div
          ref={enterRef}
          className="next-tiles__square next-tiles__square--mouseenter"
        />
      </div>
      <div className="next-tiles__content">{children}</div>
    </div>
  );
}
