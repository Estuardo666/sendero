import { cn } from "@/lib/utils";
import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { LazyVideo } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LazyVideo";

const VIDEO_SRC =
  "/sites/sendero2-fmmarketingdigital-com-0ca8991d/quienes-somos-f2da167d/images/bg1c.mp4";

const ARROW_PATH =
  "M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z";

/**
 * quienes-somos hero (#brxe-ezitwk) — background video, eyebrow pill, letter
 * launcher headline and the round arrow badge whose two glyphs swap on hover.
 *
 * BASE rules below are the DESKTOP values; the site's only breakpoint
 * `@media (max-width: 478px)` lives in the same scoped stylesheet. Anything a
 * media query must override is never written inline, because inline styles win.
 */
const HERO_CSS = `
#brxe-ezitwk { height: 666px; }
#brxe-ezitwk::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0), #ffffff);
  pointer-events: none;
}
#brxe-ezitwk > *:not(.brx-bg-video) { position: relative; }
#brxe-iyjeor { width: 666px; align-items: center; }
#brxe-fujqiq-wrap > * {
  font-size: 1.1em;
  line-height: 23.1px;
  font-weight: 600;
  letter-spacing: -0.056em;
  color: #0099a5;
  background-color: rgba(255, 193, 7, 0.28);
  padding: 2px 15px 3px;
  border-radius: 1em;
  margin-bottom: 1em;
  display: block;
  width: fit-content;
}
#brxe-cypnlb-wrap > * {
  text-align: center;
  line-height: 44px;
  letter-spacing: 0;
  margin-top: 15px;
  color: #ffc107;
  font-size: 36px;
}
#brxe-mxyqma .bc-arrow {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  fill: #0099a5;
  transition: transform 0.4s ease;
}
#brxe-mxyqma .bc-arrow--second { transform: translateX(-90px); }
#brxe-mxyqma:hover .bc-arrow { transform: translateX(90px); }
#brxe-mxyqma:hover .bc-arrow--second { transform: translateX(0); }

@media (max-width: 478px) {
  #brxe-ezitwk { height: 505px; width: 100vw; }
  #brxe-iyjeor { width: 1260px; padding-right: 20px; padding-left: 20px; }
  #brxe-cypnlb-wrap > * { font-size: 1.9em; line-height: 4px; }
}
`;

export interface HeroSectionProps {
  video?: string;
  antetitulo?: string;
  titulo?: string;
}

export function HeroSection({ video, antetitulo, titulo }: HeroSectionProps = {}) {
  return (
    <section
      id="brxe-ezitwk"
      className={cn(
        "brx-section",
        "relative z-[1] mx-auto flex w-full flex-col items-center justify-center",
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />

      <div className="brx-bg-video">
        <LazyVideo src={video || VIDEO_SRC} />
      </div>

      <div
        id="brxe-iyjeor"
        className="brx-container flex flex-col items-center justify-center self-center"
      >
        {/* the shared elements take no id, so the source id lives on a
            `display: contents` wrapper the scoped CSS targets through. */}
        <div id="brxe-fujqiq-wrap" className="contents">
          <BlurReveal as="h3">
            {antetitulo ?? "Una educación integral para un futuro pleno"}
          </BlurReveal>
        </div>

        <div id="brxe-cypnlb-wrap" className="contents">
          <LetterLauncher
            as="h1"
            innerStyle={{
              fontFamily: '"Google Sans"',
              color: "#0099a5",
              lineHeight: "60px",
              fontSize: "1.75em",
              letterSpacing: "-2px",
            }}
          >
            {titulo ?? "Sendero: cultivando el potencial único de cada niño y niña"}
          </LetterLauncher>
        </div>

        <div
          id="brxe-mxyqma"
          className="relative mt-[15px] flex h-10 w-10 items-center justify-center overflow-hidden rounded-[2em] bg-[#f5f5f5]"
        >
          <svg className="bc-arrow" viewBox="0 0 24 24" aria-hidden>
            <path d={ARROW_PATH} />
          </svg>
          <svg
            className="bc-arrow bc-arrow--second"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d={ARROW_PATH} />
          </svg>
        </div>
      </div>
    </section>
  );
}
