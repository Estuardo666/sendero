"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SliderImage {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

interface InfiniteSliderProps {
  images: SliderImage[];
  /** --items-width, source: 40vw */
  itemsWidth?: string;
  /** --items-height, source: 500px */
  itemsHeight?: string;
  /** --gap in vw units, source: 5vw */
  gapVw?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * Port of the NextBricks "Infinite Slider" (next_infinite_slider.min.js).
 *
 * Absolutely positioned items laid out at `i * (itemWidth + gap) + scroll`, wrapped
 * modulo the strip width, driven by wheel (`deltaY * -0.9`) and pointer drag
 * (`dx * 2.5`), smoothed with `lerp(y, target, 0.1)` each frame. Speed drives
 * skewX (-speed * 0.2), rotate (speed * 0.01) and scale (1 - min(100,|speed|) * 0.003).
 * There is no autoplay — at rest the strip is still, exactly like the source.
 */
export function InfiniteSlider({
  images,
  itemsWidth = "40vw",
  itemsHeight = "500px",
  gapVw = 5,
  className,
  style,
  id,
}: InfiniteSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".nb-infinite-slider__item"),
    );
    if (items.length === 0) return;

    let itemWidth = items[0].clientWidth;
    let wrapWidth = items.length * itemWidth;
    let target = 0;
    let y = 0;
    let previous = 0;
    let dragging = false;
    let lastX = 0;
    let frame = 0;

    const wrap = (min: number, max: number, value: number) => {
      const range = max - min;
      return range === 0 ? min : ((((value - min) % range) + range) % range) + min;
    };

    const layout = (scroll: number, speed: number) => {
      const gap = (gapVw * window.innerWidth) / 100;
      const span = wrapWidth + gap * items.length;
      const scale = 1 - Math.min(100, Math.abs(speed)) * 0.003;
      items.forEach((item, i) => {
        const raw = i * (itemWidth + gap) + scroll;
        const x = wrap(-(itemWidth + gap), span - (itemWidth + gap), raw);
        item.style.transform = `translateX(${x}px) skewX(${-speed * 0.2}deg) rotate(${speed * 0.01}deg) scale(${scale})`;
      });
    };

    const render = () => {
      frame = requestAnimationFrame(render);
      y = y * 0.9 + target * 0.1;
      const speed = y - previous;
      previous = y;
      layout(y, speed);
    };

    const onWheel = (event: WheelEvent) => {
      target -= event.deltaY * 0.9;
    };
    const onDown = (event: PointerEvent) => {
      dragging = true;
      lastX = event.clientX;
      root.classList.add("nb-infinite-slider--is-dragging");
    };
    const onMove = (event: PointerEvent) => {
      if (!dragging) return;
      target += (event.clientX - lastX) * 2.5;
      lastX = event.clientX;
    };
    const onUp = () => {
      dragging = false;
      root.classList.remove("nb-infinite-slider--is-dragging");
    };
    const onResize = () => {
      itemWidth = items[0].clientWidth;
      wrapWidth = items.length * itemWidth;
      layout(y, 0);
    };

    layout(0, 0);
    render();
    root.addEventListener("wheel", onWheel, { passive: true });
    root.addEventListener("pointerdown", onDown);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerup", onUp);
    root.addEventListener("pointerleave", onUp);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("wheel", onWheel);
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointerleave", onUp);
      window.removeEventListener("resize", onResize);
    };
  }, [gapVw, images.length]);

  return (
    <div
      id={id}
      ref={rootRef}
      className={cn("nb-infinite-slider", className)}
      style={
        {
          "--items-width": itemsWidth,
          "--items-height": itemsHeight,
          "--gap": `${gapVw}vw`,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className="nb-infinite-slider__wrapper">
        {images.map((image) => (
          <div key={image.src} className="nb-infinite-slider__item">
            {/* eslint-disable-next-line @next/next/no-img-element -- strip items are sized by CSS vars and dragged by JS, not laid out by next/image */}
            <img
              src={image.src}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
              decoding="async"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
