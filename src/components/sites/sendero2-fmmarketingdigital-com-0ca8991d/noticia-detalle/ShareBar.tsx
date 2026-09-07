"use client";

import { useSyncExternalStore } from "react";

interface ShareBarProps {
  titulo: string;
}

/** La URL nunca cambia mientras la página está montada: no hay a qué suscribirse. */
const sinCambios = () => () => {};

/**
 * Barra de compartir del sitio original. La URL se lee en el navegador para no
 * depender de una variable de entorno con el dominio público.
 */
export function ShareBar({ titulo }: ShareBarProps) {
  const url = useSyncExternalStore(
    sinCambios,
    () => window.location.href,
    () => "",
  );

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(titulo);

  const redes = [
    {
      nombre: "Facebook",
      href: `https://www.facebook.com/sharer.php?u=${u}&title=${t}`,
      path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.45-.1-2.42 0-4.08 1.48-4.08 4.2v2.2H7.45V13h2.72v8h3.33Z",
    },
    {
      nombre: "X",
      href: `https://x.com/share?text=${t}&url=${u}`,
      path: "M17.2 3h2.9l-6.35 7.26L21.5 21h-5.9l-4.6-6.02L5.72 21H2.8l6.8-7.77L2.5 3h6.05l4.16 5.5L17.2 3Zm-1.02 16.2h1.6L7.9 4.7H6.18l10 14.5Z",
    },
    {
      nombre: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=*${t}*%20${u}`,
      path: "M12 2.9a9 9 0 0 0-7.7 13.7L3 21.5l5-1.3A9 9 0 1 0 12 2.9Zm0 1.8a7.2 7.2 0 1 1-3.7 13.4l-.3-.2-2.9.8.8-2.9-.2-.3A7.2 7.2 0 0 1 12 4.7Zm4.1 9.1c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a5.9 5.9 0 0 1-2.9-2.6c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.9.9-.9 2.2 0 3.6a9.1 9.1 0 0 0 4 3.6c1.3.5 2.1.5 2.8.3.5-.1 1.3-.6 1.5-1.2.2-.5.2-1 .1-1.1l-.4-.2Z",
    },
    {
      nombre: "Telegram",
      href: `https://t.me/share/url?url=${u}&text=${t}`,
      path: "M21.3 4.3 2.9 11.4c-.9.35-.9 1.6.05 1.9l4.4 1.4 1.7 5.2c.25.75 1.2.95 1.75.4l2.4-2.35 4.5 3.3c.65.5 1.6.15 1.8-.65l3.1-14.5c.2-.9-.65-1.7-1.3-1.4ZM9.9 14.3l-.3 3.3-1.2-3.7 8.9-5.6-7.4 6Z",
    },
    {
      nombre: "Correo",
      href: `mailto:?subject=${t}&body=${u}`,
      path: "M3.5 5.5h17c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-17c-.55 0-1-.45-1-1v-11c0-.55.45-1 1-1Zm.9 2 7.6 5.1 7.6-5.1H4.4Z",
    },
  ];

  return (
    <ul className="noticia-share" aria-label="Compartir esta noticia">
      {redes.map((red) => (
        <li key={red.nombre}>
          <a
            href={red.href}
            target="_blank"
            rel="noopener nofollow"
            aria-label={`Compartir en ${red.nombre}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={red.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
