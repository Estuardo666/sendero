import { BlurReveal } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/BlurReveal";
import { InteractiveDivider } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/InteractiveDivider";
import { LetterLauncher } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/LetterLauncher";
import { cn } from "@/lib/utils";

/**
 * Every value below comes from `getComputedStyle` on the live section
 * `#brxe-movtox` of https://sendero2.fmmarketingdigital.com/contacto/.
 *
 * The rules live in this module-level template string (rendered through
 * `<style dangerouslySetInnerHTML>`) rather than in inline `style` props,
 * because inline styles would outrank the site's single
 * `@media (max-width: 478px)` breakpoint.
 */
const CONTACTO_CSS = `
/* ---------- BASE (desktop) ---------- */
#brxe-movtox {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  margin-top: 0;
}
#brxe-movtox::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.56), #ffffff);
  pointer-events: none;
}
#brxe-movtox > * { position: relative; }

/* map column */
#brxe-dkmzer {
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}
#brxe-yxukjo { width: 100%; height: 100%; }

/* contact column */
#brxe-frnrlj {
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 150px 0 75px;
}

.sendero-root .brxe-xchcnw {
  font-size: 1.1em;
  line-height: 23.1px;
  font-weight: 600;
  color: #0099a5;
  background-color: #ebebeb;
  padding: 1px 10px 2px;
  border-radius: 1em;
  margin-bottom: 0.5em;
  width: fit-content;
}

.sendero-root .brxe-gzizku {
  text-align: left;
  line-height: 44px;
  letter-spacing: 0;
  margin-top: 20px;
  padding-bottom: 20px;
  font-size: 36px;
}

#brxe-vipung {
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}
#brxe-vipung li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 0 15px 15px;
  font-size: 1.3em;
  line-height: 25.35px;
  font-weight: 500;
  color: #1c2728;
}
#brxe-vipung .contacto-icon {
  display: inline-flex;
  color: #0099a5;
  width: 27px;
  height: 27px;
  flex: none;
}

#brxe-igdbhn, #brxe-mbtgqi { width: 66%; }
#brxe-mbtgqi { margin-block: 10px; }

.sendero-root .brxe-izzxjz, .sendero-root .brxe-jrikfd {
  font-size: 1.1em;
  line-height: 23.1px;
  color: #0099a5;
  background-color: rgba(255, 193, 7, 0.13);
  padding: 1px 10px 2px;
  border-radius: 1em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  width: fit-content;
}
.sendero-root .brxe-izzxjz { font-weight: 600; }
.sendero-root .brxe-jrikfd { font-weight: 500; }

#brxe-mgyfiz, #brxe-rkigza {
  padding: 0 15px;
  font-size: 1.3em;
  line-height: 25.35px;
  font-weight: 500;
  color: #1c2728;
}
#brxe-mgyfiz .prefix, #brxe-rkigza .prefix {
  font-weight: 600;
  color: #0099a5;
  font-size: 0.9em;
}
#brxe-mgyfiz .count, #brxe-rkigza .count { font-size: 0px; }
#brxe-mgyfiz .suffix, #brxe-rkigza .suffix {
  font-size: 1.1em;
  font-weight: 600;
  color: #1c2728;
}

#brxe-fmarrc {
  display: flex;
  flex-direction: row;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}
#brxe-fmarrc li {
  background: #0099a5;
  border-radius: 31px;
  margin-bottom: 26px;
  width: 40px;
  height: 39px;
}
#brxe-fmarrc a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  padding-block: 6px;
  color: #ffffff;
}
#brxe-fmarrc a svg {
  height: 16px;
  width: auto;
  fill: currentColor;
}

/* ---------- MOBILE — the only breakpoint on the site ---------- */
@media (max-width: 478px) {
  #brxe-movtox {
    margin-block: 2em;
    height: 100%;
    padding: 100px 1em 40px;
  }
  /* Bricks wraps the section below 767px and both columns take the full width;
     the map keeps the viewport-height box it has on desktop (measured 844px at 390x844). */
  #brxe-movtox { flex-wrap: wrap; }
  #brxe-dkmzer { width: 100%; height: 100vh; }
  #brxe-frnrlj { width: 100%; }
  #brxe-frnrlj {
    padding-inline: 0;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .sendero-root .brxe-gzizku {
    text-align: center;
    font-size: 1.9em;
    width: 100%;
  }
  #brxe-vipung li {
    align-items: center;
    justify-content: center;
  }
  #brxe-igdbhn, #brxe-mbtgqi { width: 50%; }
  .sendero-root .brxe-izzxjz, .sendero-root .brxe-jrikfd {
    text-align: center;
    align-self: center;
  }
  #brxe-mgyfiz, #brxe-rkigza { text-align: center; }
}
`;

const WhatsAppIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-70.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M64 96h384c17.7 0 32 14.3 32 32v22.6L256 293.6 32 150.6V128c0-17.7 14.3-32 32-32zM32 188.5l211.7 135.2c7.6 4.8 17.1 4.8 24.6 0L480 188.5V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V188.5z" />
  </svg>
);

const TikTokIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2A121.4 121.4 0 0 0 448 121.9z" />
  </svg>
);

const FacebookIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
  </svg>
);

const InstagramIcon = (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const SOCIAL_ICONS: Record<string, { label: string; icon: React.ReactElement }> = {
  tiktok: { label: "TikTok", icon: TikTokIcon },
  facebook: { label: "Facebook", icon: FacebookIcon },
  instagram: { label: "Instagram", icon: InstagramIcon },
};

const SOCIAL_LINKS = [
  { href: "https://www.tiktok.com/@senderoeducacion", label: "TikTok", icon: TikTokIcon },
  { href: "https://www.facebook.com/SenderoEducacion/", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.instagram.com/senderoeducacion/?hl=es", label: "Instagram", icon: InstagramIcon },
];

const DIRECTORY = [
  { id: "brxe-mgyfiz", prefix: "Secretaría :", suffix: "0991200556" },
  { id: "brxe-rkigza", prefix: "Inspección:", suffix: "0969225363" },
];

/**
 * Section `#brxe-movtox` of /contacto/ — map column beside the contact column
 * (headings, phone/e-mail rows, directory and the social pills).
 */
export interface ContactoSectionProps {
  antetitulo?: string;
  titulo?: string;
  telefono?: string;
  /** Uno o varios correos de contacto, en el orden en que los ordenó el editor. */
  correos?: { email: string; etiqueta?: string }[];
  tituloDirectorio?: string;
  directorio?: { area: string; telefono: string }[];
  tituloRedes?: string;
  redes?: { red: string; url: string }[];
  mapaTitulo?: string;
  mapaLatitud?: string;
  mapaLongitud?: string;
}

export function ContactoSection({
  antetitulo,
  titulo,
  telefono,
  correos,
  tituloDirectorio,
  directorio,
  tituloRedes,
  redes,
  mapaTitulo,
  mapaLatitud,
  mapaLongitud,
}: ContactoSectionProps = {}) {
  const coordenadas = `${mapaLatitud ?? "-3.9614687544471994"},${mapaLongitud ?? "-79.22471118700119"}`;

  const correosVisibles = correos?.length
    ? correos
    : [{ email: "senderocdi@gmail.com" }];

  const filasDirectorio = directorio?.length
    ? directorio.map((entrada, indice) => ({
        id: DIRECTORY[indice]?.id ?? `sendero-directorio-${indice}`,
        prefix: entrada.area,
        suffix: entrada.telefono,
      }))
    : DIRECTORY;

  const enlacesSociales = redes?.length
    ? redes.flatMap((red) => {
        const icono = SOCIAL_ICONS[red.red];
        return icono ? [{ href: red.url, label: icono.label, icon: icono.icon }] : [];
      })
    : SOCIAL_LINKS;

  return (
    <section id="brxe-movtox" className={cn("brx-section")}>
      <style dangerouslySetInnerHTML={{ __html: CONTACTO_CSS }} />

      {/* #brxe-dkmzer — map column */}
      <div id="brxe-dkmzer">
        {/* #brxe-yxukjo */}
        <div id="brxe-yxukjo">
          {/*
            Deliberate deviation from the source: the original embeds a
            third-party Elfsight widget carrying its own Google Maps API key.
            We render a keyless Google Maps iframe instead.
          */}
          <iframe
            src={`https://www.google.com/maps?q=${coordenadas}&z=18&output=embed`}
            title={mapaTitulo ?? "Escuela EGB Sendero"}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* #brxe-frnrlj — contact column */}
      <div id="brxe-frnrlj">
        {/*
          BlurReveal / LetterLauncher expose no `id` prop, so the source ids of
          the headings are carried as class names (`.brxe-xchcnw`, …) and the
          CSS above targets them accordingly.
        */}
        <BlurReveal as="h3" className="brxe-xchcnw">
          {antetitulo ?? "Estamos aquí para ayudarte"}
        </BlurReveal>

        <LetterLauncher
          as="h1"
          className="brxe-gzizku"
          innerStyle={{
            color: "#ffc107",
            lineHeight: "50px",
            fontSize: "1.4em",
            fontFamily: '"Google Sans"',
            letterSpacing: "-2px",
          }}
        >
          {titulo ?? "Hablemos y construyamos juntos el futuro de tus hijos"}
        </LetterLauncher>

        {/* #brxe-vipung — phone + e-mail (plain text, not links) */}
        <ul id="brxe-vipung">
          <li>
            <span className="contacto-icon">{WhatsAppIcon}</span>
            <span>{telefono ?? "0985970887"}</span>
          </li>
          {correosVisibles.map((correo) => (
            <li key={correo.email}>
              <span className="contacto-icon">{MailIcon}</span>
              <span>
                {correo.etiqueta ? `${correo.etiqueta}: ` : ""}
                {correo.email}
              </span>
            </li>
          ))}
        </ul>

        <InteractiveDivider id="brxe-igdbhn" bendIntensity={100} height="2px" stroke="rgba(255, 193, 7, 0.63)" />

        <BlurReveal as="h3" className="brxe-izzxjz">
          {tituloDirectorio ?? "Directorio:"}
        </BlurReveal>

        {filasDirectorio.map((entry) => (
          <div key={entry.id} id={entry.id}>
            <span className="prefix">{entry.prefix}</span>
            <span className="count" />
            <span className="suffix">{entry.suffix}</span>
          </div>
        ))}

        <InteractiveDivider id="brxe-mbtgqi" bendIntensity={100} height="2px" stroke="rgba(255, 193, 7, 0.63)" />

        <BlurReveal as="h3" className="brxe-jrikfd">
          {tituloRedes ?? "Síguenos en nuestras redes sociales"}
        </BlurReveal>

        {/* #brxe-fmarrc — social pills */}
        <ul id="brxe-fmarrc">
          {enlacesSociales.map((social) => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
