"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LetterLauncherProps {
  children: React.ReactNode;
  /** Rendered wrapper tag, matching the source heading level. */
  as?: "h1" | "h2" | "h3" | "h4" | "div" | "span";
  className?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  /** Retained for parity with the source element's data-start. */
  start?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  /** Initial per-character rotation in degrees. */
  letterRotation?: number;
  /** Initial per-character y offset in px. */
  letterAltitude?: number;
}

/**
 * Port of the NextBricks "Letter Launcher" element. The source split the text
 * into characters and tweened it in on scroll; this keeps the reveal timing
 * lightweight and interruptible at the heading level.
 */
export function LetterLauncher({
  children,
  as: Tag = "h2",
  className,
  style,
  innerStyle,
  delay = 0,
  duration = 0.5,
  letterAltitude = 12,
}: LetterLauncherProps) {
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
    "--reveal-distance": `${letterAltitude}px`,
  } as React.CSSProperties;

  return (
    <Tag
      ref={(node) => { nodeRef.current = node; }}
      className={cn("bc-letter-launcher", className)}
      data-reveal={visible ? "visible" : "pending"}
      style={revealStyle}
    >
      <span className="bc-letter-launcher__inner block" style={innerStyle}>
        {children}
      </span>
    </Tag>
  );
}
