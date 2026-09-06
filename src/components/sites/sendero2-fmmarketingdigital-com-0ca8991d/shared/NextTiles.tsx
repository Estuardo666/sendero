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
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * Port of the NextBricks "Tiles" element (next_tiles.min.js + next_tiles.css).
 *
 * Builds a grid of `squareSize` squares covering 2x the container box, offset by
 * `calc(-50% - 20px)`, and lights the square under the pointer with
 * --mouseenter-color; the square just left keeps --mouseleave-color for 100ms.
 * Transition is `background-color 0.2s ease-in-out` (from the plugin stylesheet).
 */
export function NextTiles({
  children,
  squareSize = 40,
  enterColor = "rgba(255, 193, 7, 0.55)",
  leaveColor = "rgba(86, 152, 164, 0.53)",
  className,
  style,
  id,
}: NextTilesProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const layer = layerRef.current;
    if (!root || !layer) return;

    const build = () => {
      const rect = root.getBoundingClientRect();
      const cols = Math.ceil((rect.width * 2) / squareSize);
      const rows = Math.ceil((rect.height * 2) / squareSize);
      layer.replaceChildren();
      const frag = document.createDocumentFragment();
      for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < cols; j += 1) {
          const square = document.createElement("div");
          square.className = "next-tiles__square";
          square.style.width = `${squareSize}px`;
          square.style.height = `${squareSize}px`;
          square.style.left = `${j * squareSize}px`;
          square.style.top = `${i * squareSize}px`;
          frag.appendChild(square);
        }
      }
      layer.appendChild(frag);
    };

    build();
    const observer = new ResizeObserver(build);
    observer.observe(root);

    let current: Element | null = null;
    const leave = (square: Element | null) => {
      if (!square) return;
      square.classList.remove("next-tiles__square--mouseenter");
      square.classList.add("next-tiles__square--mouseleave");
      window.setTimeout(
        () => square.classList.remove("next-tiles__square--mouseleave"),
        100,
      );
    };

    const onMove = (event: MouseEvent) => {
      const square = document
        .elementsFromPoint(event.clientX, event.clientY)
        .find(
          (el) =>
            el.classList.contains("next-tiles__square") &&
            el.closest(".next-tiles") === root,
        );
      if (square === current) return;
      leave(current);
      if (square) square.classList.add("next-tiles__square--mouseenter");
      current = square ?? null;
    };
    const onLeave = () => {
      leave(current);
      current = null;
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      observer.disconnect();
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
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
          ...style,
        } as React.CSSProperties
      }
    >
      <div ref={layerRef} className="next-tiles__squares-layout" aria-hidden />
      <div className="next-tiles__content">{children}</div>
    </div>
  );
}
