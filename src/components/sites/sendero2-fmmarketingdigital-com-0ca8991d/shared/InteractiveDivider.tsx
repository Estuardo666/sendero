"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveDividerProps {
  /** data-bend-intensity — max vertical bend in px (source: 100). */
  bendIntensity?: number;
  /** --divider-height (source: 2px). */
  height?: string;
  /** Stroke colour (source: rgba(255, 193, 7, 0.63)). */
  stroke?: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * Port of the NextBricks "Interactive Divider": a straight SVG line that bends
 * toward the pointer while it is inside the (hover-expanded) hit box and springs
 * back on leave.
 */
export function InteractiveDivider({
  bendIntensity = 100,
  height = "2px",
  stroke = "rgba(255, 193, 7, 0.63)",
  className,
  style,
  id,
}: InteractiveDividerProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const path = pathRef.current;
    if (!line || !path) return;

    let width = line.clientWidth;
    let midY = 250; // --drop-height (500px) / 2
    let targetX = width / 2;
    let targetY = midY;
    let currentX = targetX;
    let currentY = midY;
    let frame = 0;

    const draw = () => {
      path.setAttribute(
        "d",
        `M 0 ${midY} Q ${currentX} ${currentY} ${width} ${midY}`,
      );
    };

    const render = () => {
      frame = requestAnimationFrame(render);
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      draw();
    };

    const onMove = (event: PointerEvent) => {
      const rect = line.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      const offset = event.clientY - (rect.top + rect.height / 2);
      targetY =
        midY +
        Math.max(-bendIntensity, Math.min(bendIntensity, offset * 2));
    };
    const onLeave = () => {
      targetX = width / 2;
      targetY = midY;
    };
    const onResize = () => {
      width = line.clientWidth;
      midY = 250;
      onLeave();
      draw();
    };

    onResize();
    render();
    line.addEventListener("pointermove", onMove);
    line.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      line.removeEventListener("pointermove", onMove);
      line.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [bendIntensity]);

  return (
    <div
      id={id}
      className={cn("next-interactive-divider", className)}
      style={
        {
          "--divider-height": height,
          ...style,
        } as React.CSSProperties
      }
    >
      <div ref={lineRef} className="next-interactive-divider__line">
        <div className="next-interactive-divider__box" />
        <svg className="next-interactive-divider__svg" aria-hidden>
          <path
            ref={pathRef}
            className="next-interactive-divider__path"
            style={{ stroke }}
          />
        </svg>
      </div>
    </div>
  );
}
