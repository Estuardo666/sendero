"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  className?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  /** Split granularity, matching the element's data-type. */
  type?: "lines" | "words" | "chars";
  start?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  /** Starting blur radius in px. */
  blurFrom?: number;
  /** Starting y translation in px. */
  translateFrom?: number;
  /** Starting skewX in degrees. */
  skewFrom?: number;
  ease?: string;
}

/**
 * Port of the NextBricks "Blur Reveal" element. The source revealed content as
 * it entered the viewport; this keeps that behavior without requiring GSAP and
 * uses a transition so the reveal remains interruptible.
 */
export function BlurReveal({
  children,
  as: Tag = "div",
  className,
  style,
  innerStyle,
  delay = 0,
  duration = 0.5,
  translateFrom = 12,
}: BlurRevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const reveal = () => {
      const timer = window.setTimeout(() => setVisible(true), Math.max(0, delay * 1000));
      return () => window.clearTimeout(timer);
    };

    if (typeof IntersectionObserver === "undefined") {
      return reveal();
    }

    let cleanupTimer: (() => void) | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        cleanupTimer = reveal();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cleanupTimer?.();
    };
  }, [delay]);

  const revealStyle = {
    ...style,
    "--reveal-delay": "0ms",
    "--reveal-duration": `${Math.min(0.8, Math.max(0.2, duration)) * 1000}ms`,
    "--reveal-distance": `${translateFrom}px`,
  } as React.CSSProperties;

  return (
    <Tag
      ref={(node) => { nodeRef.current = node; }}
      className={cn("next-blur-reveal", className)}
      data-reveal={visible ? "visible" : "pending"}
      style={revealStyle}
    >
      <span className="next-blur-reveal__inner block" style={innerStyle}>
        {children}
      </span>
    </Tag>
  );
}
