"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
}

/**
 * Port of Bricks' `bricks-lazy-video` behaviour: the source never attaches a
 * video `src` until the wrapper scrolls near the viewport. Loading all four
 * page videos eagerly (one is 50 MB) stalls the renderer, so we defer the
 * source and only start playback once the element is close to view.
 */
export function LazyVideo({ src, className, style, tabIndex }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLoad(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !load) return;
    // Autoplay can be rejected before the element is visible; ignore it.
    void el.play().catch(() => {});
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      data-lazy-video="true"
      data-lazy-ready={ready ? "true" : "false"}
      onLoadedData={() => setReady(true)}
      onError={() => setReady(true)}
      tabIndex={tabIndex}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      src={load ? src : undefined}
    />
  );
}
