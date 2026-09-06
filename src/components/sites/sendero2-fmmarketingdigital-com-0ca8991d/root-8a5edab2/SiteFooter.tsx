import type { CSSProperties } from "react";

import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import type { NavLink } from "@/types/sendero";
import { conIds, type Enlace, type Imagen } from "../shared/content";

const ASSET_BASE = "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images";

/** #brxe-vvjqty — first gooey nav (amber pills). */
const PRIMARY_LINKS: (NavLink & { id: string })[] = [
  { id: "brxe-wveqlc", label: "Quienes somos", href: "/quienes-somos" },
  { id: "brxe-fctvvn", label: "Oferta académica", href: "/oferta-educativa/" },
  { id: "brxe-ecocui", label: "Noticias", href: "/noticias/" },
  { id: "brxe-cdtaqp", label: "Galería", href: "/galeria/" },
  { id: "brxe-mebnhe", label: "Servicio social", href: "/servicio-social/" },
  { id: "brxe-gelmsf", label: "Contacto", href: "/contacto" },
];

/** #brxe-oapqzl — second gooey nav (off-white pills). */
const SECONDARY_LINKS: (NavLink & { id: string })[] = [
  { id: "brxe-bimkof", label: "Admisiones", href: "/admisiones/" },
  { id: "brxe-kuates", label: "Lista de útiles", href: "/lista-de-utiles/" },
  { id: "brxe-hguucb", label: "Fichas", href: "/fichas/" },
  { id: "brxe-qwdtvr", label: "Podcast", href: "/podcast/" },
];

interface SocialLink {
  href: string;
  label: string;
  /** Inline SVG replacement for the Font Awesome brand glyph. */
  icon: React.ReactNode;
}

const TikTokIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2A121.4 121.4 0 0 0 448 121.9z" />
  </svg>
);

const FacebookSquareIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
  </svg>
);

const InstagramIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

/** Iconos disponibles, indexados por la clave que guarda WordPress. */
const SOCIAL_ICONS: Record<string, { label: string; icon: SocialLink["icon"] }> = {
  tiktok: { label: "TikTok", icon: TikTokIcon },
  facebook: { label: "Facebook", icon: FacebookSquareIcon },
  instagram: { label: "Instagram", icon: InstagramIcon },
};

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://www.tiktok.com/@senderoeducacion", label: "TikTok", icon: TikTokIcon },
  { href: "https://www.facebook.com/SenderoEducacion/", label: "Facebook", icon: FacebookSquareIcon },
  { href: "https://www.instagram.com/senderoeducacion/?hl=es", label: "Instagram", icon: InstagramIcon },
];

/** `.nb-gooey-nav` base (filter + flex centring). */
const gooeyNavBase: CSSProperties = {
  filter: 'url("#nb-gooey-nav__filter")',
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/** `.nb-gooey-nav__item` base. */
const gooeyItemBase: CSSProperties = {
  position: "relative",
  whiteSpace: "nowrap",
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1), background-color 160ms ease-out",
};

/**
 * Everything that differs between desktop (base) and the site's single
 * `@media (max-width: 478px)` breakpoint. These properties are deliberately
 * kept OUT of the inline `style` objects below, because inline styles would
 * outrank the media query.
 */
const FOOTER_CSS = `
/* ---------- BASE (desktop) ---------- */
/* .brx-container is 1260px wide via globals.css (0,2,0); the id wins (1,0,0)
   so the footer container can never force horizontal overflow. */
#brxe-ydoymy {
  max-width: 100%;
  box-sizing: border-box;
  align-self: center !important;
  justify-content: center;
  align-items: center;
}
#brxe-dhaxsw { max-width: 100%; box-sizing: border-box; }
#brxe-vvjqty { place-items: center !important; align-items: center; }
#brxe-oapqzl { align-items: center; }
#brx-footer .nb-gooey-nav--horizontal { flex-direction: row; }
#brx-footer .nb-gooey-nav--vertical { flex-direction: column; }
#brx-footer .nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {
  transform: scale(1.04);
}
#brx-footer .nb-gooey-nav--vertical .nb-gooey-nav__item:hover {
  transform: scale(1.04);
}

/* ---------- MOBILE — the only breakpoint on the site ---------- */
@media (max-width: 478px) {
  #brxe-btgyiy { align-self: center; flex-grow: 0; flex-shrink: 1; }
  #brxe-wveqlc, #brxe-fctvvn, #brxe-ecocui,
  #brxe-cdtaqp, #brxe-mebnhe, #brxe-gelmsf { font-size: 1.1em; }
  #brxe-bimkof, #brxe-kuates, #brxe-hguucb, #brxe-qwdtvr { font-size: 0.9em; }
  #brxe-vvjqty {
    place-items: flex-start !important;
    align-items: flex-start !important;
    gap: 12px;
    flex-direction: column;
  }
  #brxe-oapqzl { align-items: center; flex-direction: column; }
  #brxe-ydoymy {
    align-self: flex-start !important;
    justify-content: flex-start;
    align-items: center;
  }
  #brxe-ohnarn { height: auto; }
  #brx-footer .nb-gooey-nav--horizontal { flex-direction: column; }
  #brx-footer .nb-gooey-nav--vertical { flex-direction: row; }
  #brx-footer .nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {
    margin-left: 0;
    margin-right: 0;
    transform: scale(1.04);
  }
  #brx-footer .nb-gooey-nav--vertical .nb-gooey-nav__item:hover {
    margin-top: 0;
    margin-bottom: 0;
    transform: scale(1.04);
  }
}

@media (max-width: 478px) and (hover: none) {
  #brx-footer .nb-gooey-nav__item:hover {
    transform: none;
  }
}
`;

/**
 * `footer#brx-footer` of https://sendero2.fmmarketingdigital.com/ —
 * logo, social row and the two stacked gooey-nav link columns over the
 * Artboard-9 background, plus the teal copyright bar.
 */
export interface SiteFooterProps {
  logo?: Imagen;
  enlacesPrincipales?: Enlace[];
  enlacesSecundarios?: Enlace[];
  redes?: { red: string; url: string }[];
  tituloRedes?: string;
  copyright?: string;
}

export function SiteFooter({
  logo,
  enlacesPrincipales,
  enlacesSecundarios,
  redes,
  tituloRedes,
  copyright,
}: SiteFooterProps = {}) {
  const primaryLinks = conIds(PRIMARY_LINKS, enlacesPrincipales);
  const secondaryLinks = conIds(SECONDARY_LINKS, enlacesSecundarios);
  const socialLinks = redes?.length
    ? redes
        .map((red) => {
          const icono = SOCIAL_ICONS[red.red];
          return icono
            ? { href: red.url, label: icono.label, icon: icono.icon }
            : null;
        })
        .filter((item): item is SocialLink => item !== null)
    : SOCIAL_LINKS;

  return (
    <footer id="brx-footer">
      <style>{FOOTER_CSS}</style>

      {/* Shared gooey filter (both navs reference #nb-gooey-nav__filter). */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }} aria-hidden="true">
        <defs>
          <filter id="nb-gooey-nav__filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <section
        id="brxe-ohnarn"
        className="brx-section"
        style={{
          paddingBottom: "3em",
          backgroundImage: `url(${ASSET_BASE}/Artboard-9-100-1-scaled.jpg)`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      >
        <div
          id="brxe-ydoymy"
          className="brx-container"
          style={{
            paddingTop: "62px",
            flexWrap: "wrap",
          }}
        >
          <img
            id="brxe-btgyiy"
            src={logo?.url || `${ASSET_BASE}/Recurso-22@2x.png`}
            width={318}
            height={288}
            alt=""
            decoding="async"
            style={{
              objectFit: "contain",
              marginBottom: "29px",
              width: "170px",
              maxWidth: "100%",
              height: "auto",
            }}
          />

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
            className="next-blur-reveal"
            style={{
              display: "block",
              width: "fit-content",
              marginBottom: "1em",
              fontSize: "1em",
              fontWeight: 600,
              backgroundColor: "#007a85",
              borderRadius: "1em",
              color: "var(--bricks-color-feb49f, #f5f5f5)",
              paddingTop: "4px",
              paddingRight: "20px",
              paddingBottom: "4px",
              paddingLeft: "20px",
            }}
          >
            {tituloRedes ?? "Síguenos en nuestras redes sociales"}
          </BlurReveal>

          <ul
            id="brxe-wqtwjz"
            className="brxe-social-icons"
            style={{ display: "flex", flexDirection: "row", gap: "8px", listStyle: "none", margin: 0, padding: 0 }}
          >
            {socialLinks.map((social) => (
              <li
                key={social.href}
                className="repeater-item has-link"
                style={{
                  borderRadius: "31px",
                  marginBottom: "26px",
                  backgroundColor: "var(--bricks-color-feb49f, #f5f5f5)",
                }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  style={{
                    display: "flex",
                    paddingTop: "6px",
                    paddingRight: 0,
                    paddingBottom: "6px",
                    paddingLeft: 0,
                    color: "#ffffff",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                  }}
                >
                  <span
                    className="icon"
                    style={{
                      display: "inline-flex",
                      color: "var(--bricks-color-tmzgyd, #0099a5)",
                      fontSize: "18px",
                      height: "18px",
                      width: "auto",
                    }}
                  >
                    {social.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <nav
            id="brxe-vvjqty"
            className="nb-gooey-nav nb-gooey-nav--horizontal"
            style={{
              ...gooeyNavBase,
              paddingRight: "20px",
              paddingLeft: "20px",
              gap: "12px",
              ["--gooey-merge-distance" as string]: "20px",
              ["--gooey-duration" as string]: "0.5s",
              ["--gooey-ease" as string]: "ease",
              flexShrink: 1,
              zIndex: 333,
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "100%",
              flexWrap: "wrap",
            }}
          >
            {primaryLinks.map((link) => (
              <div
                key={link.href}
                className="nb-gooey-nav__item"
                style={{
                  ...gooeyItemBase,
                  paddingTop: "5px",
                  paddingRight: "14px",
                  paddingBottom: "5px",
                  paddingLeft: "14px",
                  background: "var(--bricks-color-93a8da, #ffc107)",
                  borderRadius: "12px",
                  fontSize: "0.8em",
                  fontWeight: 600,
                  color: "var(--bricks-color-otnukj, #1c2728)",
                  textAlign: "center",
                }}
              >
                <span id={link.id} className="brxe-heading">
                  <a href={link.href} style={{ color: "inherit", textDecoration: "none" }}>
                    {link.label}
                  </a>
                </span>
              </div>
            ))}
          </nav>

          <nav
            id="brxe-oapqzl"
            className="nb-gooey-nav nb-gooey-nav--horizontal"
            style={{
              ...gooeyNavBase,
              paddingRight: "20px",
              paddingLeft: "20px",
              gap: "12px",
              ["--gooey-merge-distance" as string]: "20px",
              ["--gooey-duration" as string]: "0.5s",
              ["--gooey-ease" as string]: "ease",
              flexShrink: 1,
              zIndex: 333,
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "1em",
              maxWidth: "100%",
              flexWrap: "wrap",
            }}
          >
            {secondaryLinks.map((link) => (
              <div
                key={link.href}
                className="nb-gooey-nav__item"
                style={{
                  ...gooeyItemBase,
                  paddingTop: "5px",
                  paddingRight: "14px",
                  paddingBottom: "5px",
                  paddingLeft: "14px",
                  background: "var(--bricks-color-feb49f, #f5f5f5)",
                  borderRadius: "12px",
                  fontSize: "1em",
                  fontWeight: 600,
                  color: "var(--bricks-color-otnukj, #1c2728)",
                  textAlign: "center",
                }}
              >
                <span id={link.id} className="brxe-heading">
                  <a href={link.href} style={{ color: "inherit", textDecoration: "none" }}>
                    {link.label}
                  </a>
                </span>
              </div>
            ))}
          </nav>
        </div>
      </section>

      <section
        id="brxe-dhaxsw"
        className="brx-section"
        style={{
          width: "100vw",
          height: "30px",
          maxHeight: "30px",
          flexDirection: "column",
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: "#007580",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <h6
          id="brxe-uflrab"
          className="brxe-heading"
          style={{
            color: "var(--bricks-color-feb49f, #f5f5f5)",
            fontWeight: 500,
            fontSize: "0.9em",
          }}
        >
          {copyright ??
            "Unidad Educativa Particular Sendero © Todos los derechos reservados"}
        </h6>
      </section>
    </footer>
  );
}
