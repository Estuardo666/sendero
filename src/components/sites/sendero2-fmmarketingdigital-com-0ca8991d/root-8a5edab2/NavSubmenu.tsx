"use client";

import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import type { Enlace } from "../shared/content";

/** Flecha del disparador. Gira cuando el desplegable está abierto. */
export function Chevron({ abierto }: { abierto: boolean }) {
  return (
    <svg
      className="sendero-sub-chevron"
      data-abierto={abierto ? "1" : undefined}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6 9.5 12 15.5 18 9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PanelProps {
  /** Elemento del menú bajo el que se ancla el panel. */
  anclaRef: RefObject<HTMLElement | null>;
  hijos: Enlace[];
  abierto: boolean;
  onCerrar: () => void;
  /** Mantiene el panel abierto mientras el puntero está encima. */
  onEntrar: () => void;
  onSalir: () => void;
  idPanel: string;
}

/**
 * Panel del segundo nivel en escritorio.
 *
 * Va en un portal a `body` a propósito: el nav del encabezado lleva un
 * `filter` SVG y la píldora recorta con `overflow: hidden`, así que un panel
 * anidado saldría borroso y cortado.
 */
export function SubmenuEscritorio({
  anclaRef,
  hijos,
  abierto,
  onCerrar,
  onEntrar,
  onSalir,
  idPanel,
}: PanelProps) {
  const [posicion, setPosicion] = useState({ top: 0, left: 0 });
  const sinMovimiento = useReducedMotion();

  // La posición se mide al abrir y se rehace si la página se mueve debajo.
  useEffect(() => {
    const ancla = anclaRef.current;

    if (!abierto || !ancla) return;

    const medir = () => {
      const caja = ancla.getBoundingClientRect();
      setPosicion({ top: caja.bottom + 10, left: caja.left });
    };

    medir();

    window.addEventListener("resize", medir);
    window.addEventListener("scroll", medir, true);

    return () => {
      window.removeEventListener("resize", medir);
      window.removeEventListener("scroll", medir, true);
    };
  }, [abierto, anclaRef]);

  useEffect(() => {
    if (!abierto) return;

    const alPulsar = (evento: KeyboardEvent) => {
      if ("Escape" === evento.key) onCerrar();
    };

    window.addEventListener("keydown", alPulsar);
    return () => window.removeEventListener("keydown", alPulsar);
  }, [abierto, onCerrar]);

  // El portal solo existe en el navegador; en el servidor no hay nada que
  // pintar. El contenido sigue dentro de AnimatePresence para que el panel
  // también se anime al cerrarse.
  if ("undefined" === typeof document) return null;

  return createPortal(
    <AnimatePresence>
      {abierto ? (
        <motion.div
          id={idPanel}
          className="sendero-submenu"
          style={{ top: posicion.top, left: posicion.left }}
          onMouseEnter={onEntrar}
          onMouseLeave={onSalir}
          initial={sinMovimiento ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
          animate={sinMovimiento ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={sinMovimiento ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
          transition={
            sinMovimiento
              ? { duration: 0.12 }
              : { type: "spring", stiffness: 520, damping: 34, mass: 0.7 }
          }
        >
          {hijos.map((hijo, indice) => (
            <motion.a
              key={`${hijo.url}-${hijo.etiqueta}`}
              href={hijo.url}
              onClick={onCerrar}
              {...(hijo.externo ? { target: "_blank", rel: "noreferrer" } : {})}
              initial={sinMovimiento ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                sinMovimiento
                  ? { duration: 0 }
                  : { delay: 0.03 + indice * 0.025, duration: 0.18 }
              }
            >
              {hijo.etiqueta}
            </motion.a>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

/**
 * Segundo nivel dentro del menú móvil: un acordeón que empuja al resto de la
 * lista en lugar de flotar sobre ella.
 */
export function SubmenuMovil({
  hijos,
  abierto,
  onNavegar,
  idPanel,
}: {
  hijos: Enlace[];
  abierto: boolean;
  onNavegar?: () => void;
  idPanel: string;
}) {
  const sinMovimiento = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {abierto ? (
        <motion.div
          id={idPanel}
          className="sendero-sub-movil"
          // Se anima la fila del grid, no la altura: no hay que medir el
          // contenido, asi que la fuente que aun esta cargando no falsea el
          // tamano final.
          initial={{ gridTemplateRows: "0fr", opacity: 0 }}
          animate={{ gridTemplateRows: "1fr", opacity: 1 }}
          exit={{ gridTemplateRows: "0fr", opacity: 0 }}
          transition={
            sinMovimiento
              ? { duration: 0.12 }
              : {
                  gridTemplateRows: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                  opacity: { duration: 0.2 },
                }
          }
        >
          <ul>
            {hijos.map((hijo) => (
              <li key={`${hijo.url}-${hijo.etiqueta}`}>
                <a
                  href={hijo.url}
                  onClick={onNavegar}
                  {...(hijo.externo ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {hijo.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/**
 * Abre con el puntero y cierra con un pequeño retraso, para que el viaje del
 * ratón hasta el panel no lo cierre a medio camino.
 */
export function useAperturaConRetraso(cerrarEn = 140) {
  const [abierto, setAbierto] = useState(false);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelar = () => {
    if (temporizador.current) {
      clearTimeout(temporizador.current);
      temporizador.current = null;
    }
  };

  useEffect(() => cancelar, []);

  return {
    abierto,
    abrir: () => {
      cancelar();
      setAbierto(true);
    },
    cerrarPronto: () => {
      cancelar();
      temporizador.current = setTimeout(() => setAbierto(false), cerrarEn);
    },
    cerrarYa: () => {
      cancelar();
      setAbierto(false);
    },
    alternar: () => {
      cancelar();
      setAbierto((valor) => !valor);
    },
  };
}
