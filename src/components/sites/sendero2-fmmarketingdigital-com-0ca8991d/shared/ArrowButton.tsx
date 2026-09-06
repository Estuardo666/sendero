import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  href: string;
  label: string;
  className?: string;
  /** Pill background colour. */
  background?: string;
  /** Text colour at rest. */
  textColor?: string;
  /** Circle background behind the arrow. */
  arrowBackground?: string;
  /** Arrow stroke/fill colour at rest. */
  arrowStroke?: string;
  /**
   * Text colour once the arrow circle has expanded across the pill. Defaults
   * to `arrowStroke`, which is the colour the source draws on top of
   * `arrowBackground`, so the label stays readable on the expanded fill.
   */
  hoverTextColor?: string;
  style?: React.CSSProperties;
}

/**
 * Port of the Bricks "Arrow Button v2" element. On hover the arrow circle
 * expands to fill the pill and the arrow rotates by --arrow-rotation. Because
 * that fill covers the pill background, the label swaps to --nb-text-hover so
 * it does not disappear (white-on-white on the teal variants).
 */
export function ArrowButton({
  href,
  label,
  className,
  background = "#ffc107",
  textColor = "#1c2728",
  arrowBackground = "#fff",
  arrowStroke = "#000",
  hoverTextColor,
  style,
}: ArrowButtonProps) {
  return (
    <Link
      href={href}
      data-direction="right"
      className={cn("nb-arrow-button-v2 group", className)}
      style={
        {
          "--padding-top": "2px",
          "--padding-right": "2px",
          "--padding-bottom": "2px",
          "--padding-left": "25px",
          "--gap": "20px",
          "--dimensions": "40px",
          "--arrow-rotation": "-45deg",
          "--arrow-default-rotation": "0deg",
          "--duration": "0.26s",
          "--ease": "cubic-bezier(0.22, 1, 0.36, 1)",
          "--stroke": arrowStroke,
          "--nb-text": textColor,
          "--nb-text-hover": hoverTextColor ?? arrowStroke,
          background,
          color: textColor,
          borderRadius: "100px",
          ...style,
        } as React.CSSProperties
      }
    >
      <span
        className="nb-arrow-button-v2__text"
        style={{ fontSize: 16, fontWeight: 500 }}
      >
        {label}
      </span>
      <div
        className="nb-arrow-button-v2__arrow-wrapper"
        style={{ background: arrowBackground, borderRadius: "100px" }}
      >
        <div className="nb-arrow-button-v2__arrow-container">
          <svg
            className="nb-arrow-button-v2__arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ padding: 12 }}
          >
            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
