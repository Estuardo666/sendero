"use client";

import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import type { PodcastEpisode } from "@/types/sendero";

export interface Episode extends PodcastEpisode {
  /** YouTube id, used for both the embed and the preview thumbnail. */
  videoId: string;
  /** Bricks id of the column wrapper. */
  columnId: string;
  /** Bricks id of the off-white card. */
  cardId: string;
  /** Bricks id of the episode title heading. */
  titleId: string;
  /** Bricks id of the video box. */
  videoBoxId: string;
  /** Miniatura propia; si falta se usa la del sitio original. */
  thumbnail?: string;
}

export const EPISODES: Episode[] = [
  {
    number: "Episodio #5",
    title: "Educación sin barreras",
    videoId: "x84eyL2eaNU",
    href: "https://www.youtube.com/embed/x84eyL2eaNU?wmode=opaque&rel=0&enablejsapi=1",
    columnId: "brxe-ynvwto",
    cardId: "brxe-zprqzk",
    titleId: "brxe-juvszu",
    videoBoxId: "brxe-jdanqx",
  },
  {
    number: "Episodio #4",
    title: "Sowing and caring with love",
    videoId: "obxX5Ru6qIg",
    href: "https://www.youtube.com/embed/obxX5Ru6qIg?wmode=opaque&rel=0&enablejsapi=1",
    columnId: "brxe-udxxyr",
    cardId: "brxe-wuvyhy",
    titleId: "brxe-xgyuor",
    videoBoxId: "brxe-ouikee",
  },
  {
    number: "Episodio #3",
    title: "El desafío de confiar",
    videoId: "yuWAZM_hBow",
    href: "https://www.youtube.com/embed/yuWAZM_hBow?wmode=opaque&rel=0&enablejsapi=1",
    columnId: "brxe-csknpl",
    cardId: "brxe-wwxwtf",
    titleId: "brxe-skdkdg",
    videoBoxId: "brxe-xszphp",
  },
];

/**
 * The site's ONLY breakpoint. Inline styles beat stylesheet rules, so every
 * mobile override here is `!important` to win against the desktop inline props.
 */
const MOBILE_CSS = `
@media (max-width: 478px) {
  #brxe-fanklf {
    flex-direction: column !important;
    height: auto !important;
    padding-top: 90px !important;
    padding-right: 1em !important;
    padding-bottom: 90px !important;
    padding-left: 1em !important;
  }
  #brxe-savney {
    text-align: center !important;
    font-size: 1.9em !important;
    font-family: "Google Sans" !important;
  }
  #brxe-nyuxfm {
    align-items: center !important;
    justify-content: center !important;
    align-self: center !important;
  }
  #brxe-ynvwto,
  #brxe-udxxyr,
  #brxe-csknpl {
    width: 100% !important;
    justify-content: space-around !important;
    align-items: stretch !important;
    align-self: stretch !important;
  }
  #brxe-juvszu,
  #brxe-xgyuor,
  #brxe-skdkdg {
    text-align: center !important;
    font-size: 1.6em !important;
    font-family: "Google Sans" !important;
    line-height: 1em !important;
  }
  #brxe-jdanqx,
  #brxe-ouikee,
  #brxe-xszphp {
    height: 222px !important;
    aspect-ratio: auto !important;
  }
  #brxe-wwxwtf {
    line-height: 1em !important;
  }
}
`;

/** `#brxe-hailpb` / `#brxe-feaspm` / `#brxe-witetv` — the amber episode pill. */
const episodePillStyle: React.CSSProperties = {
  color: "#0099a5",
  fontSize: "1em",
  fontWeight: 600,
  marginBottom: "1em",
  backgroundColor: "rgba(255, 193, 7, 0.28)",
  borderRadius: "1em",
  backdropFilter: "blur(20px)",
  paddingTop: "2px",
  paddingRight: "15px",
  paddingBottom: "3px",
  paddingLeft: "15px",
};

/** `#brxe-juvszu` / `#brxe-xgyuor` / `#brxe-skdkdg` — desktop base. */
const episodeTitleStyle: React.CSSProperties = {
  textAlign: "left",
  letterSpacing: "0px",
  color: "#1c2728",
  fontSize: "1.5em",
  marginTop: 0,
  marginBottom: "10px",
};

/** `#brxe-zprqzk` / `#brxe-wuvyhy` / `#brxe-wwxwtf` — the off-white card. */
const cardStyle: React.CSSProperties = {
  paddingTop: "0.5em",
  paddingRight: "0.5em",
  paddingBottom: "0.5em",
  paddingLeft: "0.5em",
  backgroundColor: "#f5f5f5",
  borderRadius: "1.3em",
  flexWrap: "wrap",
};

/** `.brxe-video .bricks-video-overlay-icon` — Font Awesome `fa-circle-play`. */
function CirclePlayIcon() {
  return (
    <svg
      className="bricks-video-overlay-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      style={{
        color: "#ffc107",
        fontSize: "2em",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" />
    </svg>
  );
}

/** `06-podcast` — teal band with the three latest podcast episodes. */
export interface PodcastSectionProps {
  antetitulo?: string;
  titulo?: string;
  episodios?: Episode[];
}

export function PodcastSection({
  antetitulo,
  titulo,
  episodios,
}: PodcastSectionProps = {}) {
  const items = episodios?.length ? episodios : EPISODES;

  return (
    <section
      id="brxe-fanklf"
      className="brx-section"
      style={{
        backgroundColor: "#0099a5",
        paddingTop: "4em",
        paddingBottom: "4em",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: MOBILE_CSS }} />
      <div
        id="brxe-usebez"
        className="brx-container"
        style={{ alignItems: "center", flexDirection: "column" }}
      >
        {/* Header block */}
        <div
          id="brxe-skyjvh"
          className="brx-container"
          style={{
            paddingBottom: "20px",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BlurReveal
            as="h3"
            type="chars"
            start="top bottom"
            duration={0.6}
            delay={0.2}
            stagger={0.05}
            blurFrom={10}
            translateFrom={0}
            skewFrom={0}
            ease="power1"
            style={{
              fontWeight: 600,
              color: "#1c2728",
              fontSize: "1.1em",
              marginBottom: "1em",
              backgroundColor: "#ffc107",
              borderRadius: "1em",
              paddingTop: "1px",
              paddingRight: "10px",
              paddingBottom: "2px",
              paddingLeft: "10px",
            }}
          >
            {antetitulo ?? "Podcast"}
          </BlurReveal>

          {/*
            The id lives on a wrapper because `text-align` / `font-size` /
            `font-family` all inherit, and the mobile block needs an element it
            can override without fighting LetterLauncher's inline styles.
          */}
          <div
            id="brxe-savney"
            className="max-w-full"
            style={{ textAlign: "left", fontFamily: '"Google Sans"' }}
          >
            <LetterLauncher
              as="h2"
              start="top bottom"
              duration={0.3}
              delay={0.2}
              stagger={0.05}
              letterRotation={-30}
              letterAltitude={20}
              style={{
                fontWeight: 400,
                letterSpacing: "5px",
                color: "#f5f5f5",
              }}
              innerStyle={{
                letterSpacing: "-2px",
                color: "#f5f5f5",
                fontWeight: 800,
                lineHeight: "50px",
                fontSize: "1.4em",
              }}
            >
              {titulo ?? "Sendero al Aire"}
            </LetterLauncher>
          </div>
        </div>

        {/* Episode list */}
        <div id="brxe-kbdlws" className="brx-container">
          <section
            id="brxe-nyuxfm"
            className="brx-section"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              // Bricks sets a bare `width: 1360px`; the max-width cap keeps it
              // from overflowing the viewport below 1360px (e.g. at 390px).
              width: "1360px",
              maxWidth: "100%",
              alignItems: "center",
              columnGap: "1em",
              rowGap: "2em",
            }}
          >
            {items.map((episode) => (
              <div
                key={episode.videoId}
                id={episode.columnId}
                // NOT .brx-container: that primitive pins width to the 1260px
                // page container and outranks the 32% column width below.
                className="mx-auto flex max-w-full"
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  width: "32%",
                  alignItems: "stretch",
                  alignSelf: "center",
                }}
              >
                <div
                  id={episode.cardId}
                  className="flex w-full flex-col"
                  style={cardStyle}
                >
                  <BlurReveal
                    as="h3"
                    type="chars"
                    start="top bottom"
                    duration={0.6}
                    delay={0.2}
                    stagger={0.05}
                    blurFrom={10}
                    translateFrom={0}
                    skewFrom={0}
                    ease="power1"
                    style={episodePillStyle}
                  >
                    {episode.number}
                  </BlurReveal>

                  <h3
                    id={episode.titleId}
                    className="brxe-heading"
                    style={episodeTitleStyle}
                  >
                    {episode.title}
                  </h3>

                  <div
                    id={episode.videoBoxId}
                    className="brxe-video relative aspect-video w-full overflow-hidden"
                    style={{ borderRadius: "1em" }}
                  >
                    <div
                      className="bricks-video-preview-image absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${episode.thumbnail || `/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/yt-${episode.videoId}.jpg`})`,
                      }}
                    />
                    <div className="bricks-video-overlay absolute inset-0" />
                    <CirclePlayIcon />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
