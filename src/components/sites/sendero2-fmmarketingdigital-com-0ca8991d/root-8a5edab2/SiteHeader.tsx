"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { conIds, type Enlace, type Imagen } from "../shared/content";
import {
  Chevron,
  SubmenuEscritorio,
  SubmenuMovil,
  useAperturaConRetraso,
} from "./NavSubmenu";

const LOGO_SRC =
  "/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2/images/Recurso-21@2x.png";

/* ------------------------------------------------------------------
   CSS extracted verbatim from the Bricks output (duplicates merged in
   source order — later rules win).
   ------------------------------------------------------------------ */
const HEADER_CSS = `
#brx-header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

/* ---------- section #brxe-hvpcew ---------- */
#brxe-hvpcew {
  border-color: var(--bricks-color-93a8da, #ffc107);
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  overflow: hidden;
}

/* ---------- container pill #brxe-dxwxhl ---------- */
#brxe-dxwxhl {
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 33px;
  background-color: rgba(0, 153, 165, 0.95);
  margin-top: 10px;
  width: 90%;
  border: 1px solid #0099a5;
  border-radius: 1.5em;
  height: 75px;
  overflow: hidden;
  flex-direction: row;
  align-self: center !important;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}

/* ---------- logo ---------- */
#brxe-miywbb {
  width: 200px;
  display: block;
  flex: 0 0 auto;
}
#brxe-miywbb img {
  width: 100%;
  height: auto;
  display: block;
}

/* ==================================================================
   GOOEY NAV (next_gooey_nav.css)
   ================================================================== */
.nb-gooey-nav {
  filter: url("#nb-gooey-nav__filter");
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nb-gooey-nav svg {
  display: none;
}
.nb-gooey-nav__item {
  position: relative;
  white-space: nowrap;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 160ms ease-out;
}
.nb-gooey-nav--horizontal {
  flex-direction: row;
}
.nb-gooey-nav--vertical {
  flex-direction: column;
}
.nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {
  transform: scale(1.04);
}
.nb-gooey-nav--vertical .nb-gooey-nav__item:hover {
  transform: scale(1.04);
}
.nb-gooey-nav__item a {
  color: inherit;
  text-decoration: none;
  display: block;
}
.nb-gooey-nav__item > span {
  display: block;
}

/* ---------- desktop text nav #brxe-qxzqgo ---------- */
#brxe-qxzqgo {
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  gap: 12px;
  --gooey-merge-distance: 20px;
  --gooey-duration: 0.5s;
  --gooey-ease: ease;
}
#brxe-qxzqgo .nb-gooey-nav__item {
  padding-top: 5px;
  padding-right: 14px;
  padding-bottom: 5px;
  padding-left: 14px;
  background: #0099a5;
  border-radius: 12px;
  font-size: 0.9em;
  font-weight: 600;
  color: #ffffff;
}
#brxe-qxzqgo .nb-gooey-nav__item:hover {
  background: #00707a;
}
#brxe-oasrwn {
  background-color: #0099a5;
}

/* ---------- desktop CTA nav #brxe-dbgcpo / #brxe-pbdegl ---------- */
#brxe-dbgcpo {
  width: auto;
  row-gap: 5px;
  flex-direction: row;
  display: flex;
}
#brxe-pbdegl {
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  gap: 10px;
  --gooey-merge-distance: -10px;
  --gooey-duration: 0.5s;
  --gooey-ease: ease;
  align-self: center;
  justify-content: center;
  align-items: center;
}
#brxe-pbdegl .nb-gooey-nav__item {
  padding-top: 7px;
  padding-right: 14px;
  padding-bottom: 7px;
  padding-left: 14px;
  border-radius: 12px;
  font-size: 0.9em;
  font-weight: 600;
  color: #ffffff;
}
#brxe-suhixc {
  background-color: #ffc107;
}
#brxe-wjscpr {
  color: #1c2728;
}
#brxe-xyeneb {
  background-color: #f5f5f5;
}
#brxe-xsdgbj {
  color: #666666;
}

/* ---------- offcanvas CTA nav #brxe-hklxtu / #brxe-mzqpmk ---------- */
#brxe-hklxtu {
  width: auto;
  row-gap: 5px;
  flex-direction: row;
  display: flex;
}
#brxe-mzqpmk {
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  gap: 10px;
  --gooey-merge-distance: -10px;
  --gooey-duration: 0.5s;
  --gooey-ease: ease;
}
#brxe-mzqpmk .nb-gooey-nav__item {
  padding-top: 7px;
  padding-right: 14px;
  padding-bottom: 7px;
  padding-left: 14px;
  border-radius: 12px;
  font-size: 0.9em;
  font-weight: 600;
  color: #ffffff;
}
#brxe-flcbfg {
  background-color: #0099a5;
}
#brxe-teblgs {
  background-color: #366068;
}

/* ==================================================================
   SWAP TITLE (bc_swap_title.css)
   ================================================================== */
.bc-swap-title__anchor {
  display: block;
  width: fit-content;
  height: fit-content;
  color: inherit;
  text-decoration: none;
}
.bc-swap-title * {
  will-change: transform;
}
.bc-swap-title {
  display: block;
  width: fit-content;
  position: relative;
  padding: 0;
  line-height: normal;
  margin: 0;
  font-size: inherit;
}
.bc-swap-title__span-wrapper {
  display: block;
  overflow: hidden;
}
.bc-swap-title__span,
.bc-swap-title__span .char,
.bc-swap-title__span .word {
  --skew: 0deg;
  --duration: 220ms;
  --ease: cubic-bezier(0.19, 1, 0.22, 1);
  --fromtype: 1;
  display: block;
  position: relative;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  transition: transform var(--duration) var(--ease),
    -webkit-transform var(--duration) var(--ease);
}
.bc-swap-title__span::after,
.bc-swap-title__span .char::after,
.bc-swap-title__span .word::after {
  content: var(--after-content);
  display: block;
  position: absolute;
  top: calc(var(--fromtype) * 100%);
  left: 0;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  transform: skewY(calc(var(--skew) * var(--fromtype)));
  transition: transform var(--duration) var(--ease),
    -webkit-transform var(--duration) var(--ease);
}
.bc-swap-title:hover .bc-swap-title__span,
.bc-swap-title:hover .bc-swap-title__span .char,
.bc-swap-title:hover .bc-swap-title__span .word {
  -webkit-transform: translateY(calc(var(--fromtype) * -100%))
    skewY(calc(var(--skew) * -1 * var(--fromtype)));
  transform: translateY(calc(var(--fromtype) * -100%))
    skewY(calc(var(--skew) * -1 * var(--fromtype)));
}
.bc-swap-title--remove-line:hover .bc-swap-title__span-wrapper .bc-swap-title__span {
  -webkit-transform: none !important;
  transform: none !important;
}
.bc-swap-title:hover .bc-swap-title__span::after,
.bc-swap-title:hover .bc-swap-title__span .char::after,
.bc-swap-title:hover .bc-swap-title__span .word::after {
  -webkit-transform: skewY(calc(var(--skew) * var(--fromtype)));
  transform: skewY(calc(var(--skew) * var(--fromtype)));
}
#brxe-swwnnk .bc-swap-title__span,
#brxe-relqna .bc-swap-title__span,
#brxe-qbijkc .bc-swap-title__span,
#brxe-isdrss .bc-swap-title__span,
#brxe-afaofh .bc-swap-title__span,
#brxe-fhgqjk .bc-swap-title__span,
#brxe-jiwsor .bc-swap-title__span {
  --fromtype: 1;
}

/* ==================================================================
   SEGUNDO NIVEL (añadido: el original no tenía desplegables)
   ================================================================== */
.sendero-sub-chevron {
  width: 1em;
  height: 1em;
  flex: 0 0 auto;
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.sendero-sub-chevron[data-abierto] {
  transform: rotate(180deg);
}

/* --- escritorio: panel flotante en un portal a body --- */
.sendero-submenu {
  position: fixed;
  z-index: 200;
  display: flex;
  min-width: 216px;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
  border: 1px solid #0099a5;
  border-radius: 16px;
  background: rgba(0, 153, 165, 0.97);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform-origin: top left;
}
.sendero-submenu a {
  display: block;
  padding: 8px 12px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9em;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 160ms ease-out;
}
.sendero-submenu a:hover,
.sendero-submenu a:focus-visible {
  background: #00707a;
}

/* --- escritorio: el disparador lleva el texto y la flecha en una fila --- */
.nb-gooey-nav__item .sendero-sub-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nb-gooey-nav__item .sendero-sub-trigger button {
  display: flex;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  line-height: 0;
}

/* --- móvil: acordeón dentro del panel lateral --- */
#brxe-hfdzvx .sendero-has-sub {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
#brxe-hfdzvx .sendero-has-sub button {
  display: flex;
  padding: 4px;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  line-height: 0;
}
#brxe-hfdzvx .sendero-has-sub .sendero-sub-chevron {
  width: 26px;
  height: 26px;
}
.sendero-sub-movil li {
  padding: 2px 0 2px 18px;
}
.sendero-sub-movil {
  display: grid;
}
.sendero-sub-movil > ul {
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}
.sendero-sub-movil li {
  padding: 4px 0 4px 16px;
}
.sendero-sub-movil a {
  /* Tamano propio: hereda de un h3 muy grande y quedaria desproporcionado. */
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  text-decoration: none;
  opacity: 0.9;
}
.sendero-sub-movil a:hover,
.sendero-sub-movil a:focus-visible {
  opacity: 1;
  text-decoration: underline;
}

/* ==================================================================
   OFFCANVAS MENU (bc_offcanvas_menu.css)
   ================================================================== */
.bc-offcanvas-menu {
  width: fit-content;
  --transition-duration-backdrop: 240ms;
  --transition-easing-backdrop: cubic-bezier(0.23, 1, 0.32, 1);
}
.bc-core-burguer--offcanvas-menu {
  top: 0px;
  z-index: 3;
  position: relative;
}
.bc-offcanvas-menu__items-wrapper {
  position: absolute;
  width: fit-content;
  height: 100vh;
  padding: 50px;
  background: #a0e806;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  z-index: 2;
  overflow: auto;
}
[data-classtype="bc-offcanvas-menu--fromright"] .bc-offcanvas-menu__items-wrapper {
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  top: 0;
  right: 0;
}
.bc-offcanvas-menu__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  background: rgba(2, 105, 33, 0.4);
  -webkit-transition: visibility 0s calc(var(--transition-duration-backdrop) * 2),
    opacity var(--transition-duration-backdrop) var(--transition-easing-backdrop);
  transition: visibility 0s calc(var(--transition-duration-backdrop) * 2),
    opacity var(--transition-duration-backdrop) var(--transition-easing-backdrop);
}
[data-open="bc-offcanvas-menu--opened"] .bc-offcanvas-menu__backdrop {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity var(--transition-duration-backdrop)
    var(--transition-easing-backdrop);
  transition: opacity var(--transition-duration-backdrop)
    var(--transition-easing-backdrop);
}
.bc-offcanvas-menu[data-hide-content="true"] .bc-offcanvas-menu__items-wrapper {
  opacity: 0;
  visibility: hidden;
}

/* items wrapper #brxe-hfdzvx */
#brxe-hfdzvx {
  max-width: 420px;
  /* slide-in: data-type="fromRight", data-duration="1", data-easing="power2.out" */
  transition: clip-path 260ms cubic-bezier(0.23, 1, 0.32, 1),
    opacity 220ms cubic-bezier(0.23, 1, 0.32, 1), visibility 0s linear 260ms;
}
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: clip-path 260ms cubic-bezier(0.23, 1, 0.32, 1),
    opacity 220ms cubic-bezier(0.23, 1, 0.32, 1), visibility 0s linear 0s;
}

#brxe-hfdzvx .bc-swap-title {
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 180ms ease-out, transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
}
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title {
  opacity: 1;
  transform: translateX(0);
}
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(1) { transition-delay: 40ms; }
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(2) { transition-delay: 70ms; }
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(3) { transition-delay: 100ms; }
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(4) { transition-delay: 130ms; }
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(5) { transition-delay: 160ms; }
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(6) { transition-delay: 190ms; }
#brxe-wkrhux[data-open="bc-offcanvas-menu--opened"] #brxe-hfdzvx .bc-swap-title:nth-of-type(7) { transition-delay: 220ms; }

/* ==================================================================
   BURGER (next-burger-animated--1)
   ================================================================== */
.next-burger-animated {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  line-height: 0;
}
.next-burger-animated svg {
  width: var(--burguer-dimensions);
  height: var(--burguer-dimensions);
  display: block;
}
.next-burger-animated svg circle {
  fill: none;
  stroke: var(--burguer-stroke-color);
  stroke-width: 3;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 240ms cubic-bezier(0.23, 1, 0.32, 1),
    stroke-dashoffset 240ms cubic-bezier(0.23, 1, 0.32, 1);
}
.next-burger-animated svg path {
  fill: none;
  stroke: var(--burguer-stroke-color);
  stroke-width: 5.5;
  stroke-linecap: round;
  transition: stroke-dasharray 240ms cubic-bezier(0.23, 1, 0.32, 1),
    stroke-dashoffset 240ms cubic-bezier(0.23, 1, 0.32, 1);
}
.next-burger-animated svg path.line--1,
.next-burger-animated svg path.line--3 {
  stroke-dasharray: 24 126.95;
}
.next-burger-animated svg path.line--2 {
  stroke-dasharray: 24 70;
}
.next-burger-animated--1--opened svg path.line--1,
.next-burger-animated--1--opened svg path.line--3 {
  stroke-dashoffset: -94.1213;
}
.next-burger-animated--1--opened svg path.line--2 {
  stroke-dashoffset: -50;
}

/* ==================================================================
   BREAKPOINTS
   ================================================================== */
#brxe-wkrhux {
  display: none;
}
@media (max-width: 478px) {
  #brxe-wkrhux {
    display: block;
  }
  #brxe-qxzqgo,
  #brxe-pbdegl {
    display: none;
  }
  #brxe-hvpcew,
  #brxe-dxwxhl {
    overflow: visible;
  }
  div#brxe-hfdzvx {
    border-radius: 20px;
  }
  #brxe-hfdzvx {
    background-color: #f5f5f5;
    background-image: linear-gradient(#5698a4, #ffc107);
    font-size: 1.1em;
    font-weight: 400;
    color: #ffffff;
    border-left: 2px solid #ffc107;
    row-gap: 15px;
    height: 85vh;
    width: 100%;
  }
  #brxe-hklxtu {
    margin-top: 22px;
  }
  #brxe-mzqpmk .nb-gooey-nav__item {
    font-size: 1.1em;
    padding-right: 14px;
    padding-left: 14px;
  }
  #brxe-mzqpmk {
    padding-right: 0;
    padding-left: 0;
  }
  #brxe-mrxjem {
    margin-left: 25px;
  }
  #brxe-mrxjem .next-burger-animated {
    --burguer-stroke-color: #f5f5f5;
    --burguer-dimensions: 66px;
  }
  #brxe-mrxjem .next-burger-animated--1--opened {
    --burguer-stroke-color: #ffc107;
  }
  #brxe-xejdki {
    color: #a0e806;
    position: absolute;
    right: 25px;
    top: 10px;
  }
  #brxe-xejdki .next-burger-animated {
    --burguer-stroke-color: #f5f5f5;
    --burguer-dimensions: 66px;
  }
  #brxe-xejdki .next-burger-animated--1--opened {
    --burguer-stroke-color: #ffc107;
  }
  #brxe-swwnnk,
  #brxe-relqna,
  #brxe-qbijkc,
  #brxe-isdrss,
  #brxe-afaofh,
  #brxe-fhgqjk,
  #brxe-jiwsor {
    font-weight: 500;
  }
  .nb-gooey-nav--horizontal {
    flex-direction: column;
  }
  .nb-gooey-nav--horizontal .nb-gooey-nav__item:hover {
    margin-left: 0;
    margin-right: 0;
    transform: scale(1.04);
  }
  .nb-gooey-nav--vertical {
    flex-direction: row;
  }
  .nb-gooey-nav--vertical .nb-gooey-nav__item:hover {
    margin-top: 0;
    margin-bottom: 0;
    transform: scale(1.04);
  }
}

@media (max-width: 478px) and (hover: none) {
  .nb-gooey-nav__item:hover {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bc-offcanvas-menu__backdrop,
  #brxe-hfdzvx,
  #brxe-hfdzvx .bc-swap-title,
  .next-burger-animated svg circle,
  .next-burger-animated svg path,
  .nb-gooey-nav__item {
    transition-duration: 1ms !important;
    transition-delay: 0ms !important;
  }
}
`;

type SwapLink = { id: string; label: string; href: string; hijos?: Enlace[] };

const OFFCANVAS_LINKS: SwapLink[] = [
  { id: "brxe-swwnnk", label: "Quienes somos", href: "/quienes-somos" },
  { id: "brxe-relqna", label: "Oferta académica", href: "/oferta-educativa/" },
  { id: "brxe-qbijkc", label: "Eventos", href: "/eventos/" },
  { id: "brxe-isdrss", label: "Noticias", href: "/noticias/" },
  { id: "brxe-afaofh", label: "Blog", href: "" },
  { id: "brxe-fhgqjk", label: "Servicio Social", href: "/servicio-social/" },
  { id: "brxe-jiwsor", label: "Contacto", href: "/contacto" },
];

type GooeyItem = {
  itemId: string;
  headingId: string;
  /** Segundo nivel. Solo lo usan los menús del encabezado. */
  hijos?: Enlace[];
  label: string;
  href: string;
  external?: boolean;
};

const DESKTOP_NAV_ITEMS: GooeyItem[] = [
  { itemId: "brxe-ddputh", headingId: "brxe-bmsbko", label: "Quienes somos", href: "/quienes-somos" },
  { itemId: "brxe-oasrwn", headingId: "brxe-mvkkyx", label: "Oferta académica", href: "/oferta-educativa/" },
  { itemId: "brxe-ajingo", headingId: "brxe-nmoziy", label: "Noticias", href: "/noticias/" },
  { itemId: "brxe-iqtvqy", headingId: "brxe-cctpdw", label: "Galería", href: "/galeria/" },
  { itemId: "brxe-bdygzt", headingId: "brxe-bgindt", label: "Servicio social", href: "/servicio-social/" },
  { itemId: "brxe-yutuak", headingId: "brxe-jkoars", label: "Contacto", href: "/contacto" },
];

const DESKTOP_CTA_ITEMS: GooeyItem[] = [
  { itemId: "brxe-suhixc", headingId: "brxe-wjscpr", label: "Admisiones", href: "/admisiones/" },
  {
    itemId: "brxe-xyeneb",
    headingId: "brxe-xsdgbj",
    label: "Plataforma",
    href: "https://idukay.net/colegios/#/login",
    external: true,
  },
];

const OFFCANVAS_CTA_ITEMS: GooeyItem[] = [
  { itemId: "brxe-flcbfg", headingId: "brxe-xgvsck", label: "Admisiones", href: "/admisiones/" },
  {
    itemId: "brxe-teblgs",
    headingId: "brxe-lhfvxt",
    label: "Plataforma",
    href: "https://idukay.net/colegios/#/login",
  },
];

function GooeyFilterDefs() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      aria-hidden="true"
      /* Defs-only SVG: stays in the DOM for the filter reference, but out of
         flow so it does not reserve its default 300x150 replaced-element box. */
      className="absolute h-0 w-0 overflow-hidden"
    >
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
  );
}

function GooeyItems({ items, onNavigate }: { items: GooeyItem[]; onNavigate?: () => void }) {
  return (
    <>
      {items.map((item) =>
        item.hijos?.length ? (
          <GooeyItemConSubmenu key={item.itemId} item={item} onNavigate={onNavigate} />
        ) : (
          <div key={item.itemId} id={item.itemId} className="brxe-block nb-gooey-nav__item">
            <span id={item.headingId} className="brxe-heading">
              <a
                href={item.href}
                onClick={onNavigate}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
              </a>
            </span>
          </div>
        ),
      )}
    </>
  );
}

/**
 * Elemento del menú de escritorio que despliega su segundo nivel. Se abre al
 * pasar el puntero y también con el teclado, desde la flecha.
 */
function GooeyItemConSubmenu({
  item,
  onNavigate,
}: {
  item: GooeyItem;
  onNavigate?: () => void;
}) {
  const anclaRef = useRef<HTMLDivElement | null>(null);
  const { abierto, abrir, cerrarPronto, cerrarYa, alternar } = useAperturaConRetraso();
  const idPanel = `${item.itemId}-submenu`;

  return (
    <div
      ref={anclaRef}
      id={item.itemId}
      className="brxe-block nb-gooey-nav__item"
      onMouseEnter={abrir}
      onMouseLeave={cerrarPronto}
      onFocus={abrir}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget as Node)) {
          cerrarPronto();
        }
      }}
    >
      <span id={item.headingId} className="brxe-heading sendero-sub-trigger">
        <a
          href={item.href}
          onClick={onNavigate}
          {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {item.label}
        </a>
        <button
          type="button"
          aria-expanded={abierto}
          aria-controls={idPanel}
          aria-label={`Ver secciones de ${item.label}`}
          onClick={alternar}
        >
          <Chevron abierto={abierto} />
        </button>
      </span>

      <SubmenuEscritorio
        anclaRef={anclaRef}
        hijos={item.hijos ?? []}
        abierto={abierto}
        idPanel={idPanel}
        onCerrar={() => {
          cerrarYa();
          onNavigate?.();
        }}
        onEntrar={abrir}
        onSalir={cerrarPronto}
      />
    </div>
  );
}

function Burger({
  id,
  opened,
  onClick,
  label,
}: {
  id: string;
  opened: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <div id={id} className="brxe-coreburguer bc-core-burguer--offcanvas-menu bc-core-burguer">
      <button
        type="button"
        aria-label={label}
        aria-expanded={opened}
        onClick={onClick}
        className={cn(
          "next-burger-animated--1 next-burger-animated",
          opened && "next-burger-animated--1--opened",
        )}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" />
          <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path className="line--2" d="M0 50h70" />
          <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </button>
    </div>
  );
}

/**
 * Enlace del menú móvil. Si trae segundo nivel, el texto sigue navegando y la
 * flecha despliega los hijos empujando al resto de la lista.
 *
 * Se mantiene como <h3> hermano del acordeón porque el CSS original escalona
 * la entrada de los enlaces con `nth-of-type`.
 */
function EnlaceMovil({
  link,
  onNavigate,
  panelAbierto,
}: {
  link: SwapLink;
  onNavigate: () => void;
  panelAbierto: boolean;
}) {
  const [abierto, setAbierto] = useState(false);
  const [panelPrevio, setPanelPrevio] = useState(panelAbierto);
  const hijos = link.hijos ?? [];
  const idPanel = `${link.id}-submenu`;

  // Al cerrarse el panel lateral, el acordeón vuelve a su sitio.
  if (panelPrevio !== panelAbierto) {
    setPanelPrevio(panelAbierto);
    if (!panelAbierto) setAbierto(false);
  }

  return (
    <>
      <h3
        id={link.id}
        className={cn(
          "brxe-swap-hover bc-swap-title",
          hijos.length && "sendero-has-sub",
        )}
        data-type="line"
        data-stagger="0.25"
      >
        <a className="bc-swap-title__anchor" href={link.href || undefined} onClick={onNavigate}>
          <span className="bc-swap-title__span-wrapper">
            <span
              className="bc-swap-title__span"
              style={{ "--after-content": `"${link.label}"` } as CSSProperties}
            >
              {link.label}
            </span>
          </span>
        </a>

        {hijos.length ? (
          <button
            type="button"
            aria-expanded={abierto}
            aria-controls={idPanel}
            aria-label={`Ver secciones de ${link.label}`}
            onClick={() => setAbierto((valor) => !valor)}
          >
            <Chevron abierto={abierto} />
          </button>
        ) : null}
      </h3>

      {hijos.length ? (
        <SubmenuMovil
          hijos={hijos}
          abierto={abierto}
          idPanel={idPanel}
          onNavegar={onNavigate}
        />
      ) : null}
    </>
  );
}

export interface SiteHeaderProps {
  logo?: Imagen;
  menuEscritorio?: Enlace[];
  menuDesplegable?: Enlace[];
  botonesCta?: Enlace[];
}

export function SiteHeader({
  logo,
  menuEscritorio,
  menuDesplegable,
  botonesCta,
}: SiteHeaderProps = {}) {
  const offcanvasLinks = conIds(OFFCANVAS_LINKS, menuDesplegable);
  const desktopNavItems = conIds(DESKTOP_NAV_ITEMS, menuEscritorio);
  const desktopCtaItems = conIds(DESKTOP_CTA_ITEMS, botonesCta);
  const offcanvasCtaItems = conIds(OFFCANVAS_CTA_ITEMS, botonesCta);

  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // data-close-on-esc="1"
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header id="brx-header" className="sticky">
      <style dangerouslySetInnerHTML={{ __html: HEADER_CSS }} />
      <GooeyFilterDefs />

      <section id="brxe-hvpcew" className="brxe-section brx-section">
        <div id="brxe-dxwxhl" className="brxe-container brx-container">
          <Link id="brxe-miywbb" className="brxe-image tag" href="/">
            <img
              width={642}
              height={161}
              className="css-filter size-full"
              alt={logo?.alt ?? ""}
              decoding="async"
              fetchPriority="high"
              src={logo?.url || LOGO_SRC}
            />
          </Link>

          {/* -------- off-canvas menu (mobile) -------- */}
          <div
            id="brxe-wkrhux"
            className="brxe-offcanvasmenu bc-core-menu bc-offcanvas-menu"
            data-hide-content="true"
            data-type="fromRight"
            data-duration="1"
            data-easing="power2.out"
            data-classtype="bc-offcanvas-menu--fromright"
            data-open={open ? "bc-offcanvas-menu--opened" : undefined}
          >
            <Burger id="brxe-mrxjem" opened={open} onClick={() => setOpen((v) => !v)} label="open" />

            <div id="brxe-hfdzvx" className="brxe-block bc-offcanvas-menu__items-wrapper">
              <Burger id="brxe-xejdki" opened={open} onClick={close} label="close" />

              {offcanvasLinks.map((link) => (
                <EnlaceMovil
                  key={link.id}
                  link={link}
                  onNavigate={close}
                  // Al cerrar el panel lateral se pliegan los acordeones.
                  panelAbierto={open}
                />
              ))}

              <div id="brxe-hklxtu" className="brxe-block">
                <nav
                  id="brxe-mzqpmk"
                  className="brxe-next-gooey-nav nb-gooey-nav nb-gooey-nav--horizontal"
                >
                  <GooeyItems items={offcanvasCtaItems} onNavigate={close} />
                </nav>
              </div>
            </div>

            <div
              id="brxe-hevuyp"
              className="brxe-block bc-offcanvas-menu__backdrop"
              onClick={close}
              aria-hidden="true"
            />
          </div>

          {/* -------- desktop text nav -------- */}
          <nav
            id="brxe-qxzqgo"
            className="brxe-next-gooey-nav nb-gooey-nav nb-gooey-nav--horizontal"
          >
            <GooeyItems items={desktopNavItems} />
          </nav>

          {/* -------- desktop CTA nav -------- */}
          <div id="brxe-dbgcpo" className="brxe-block">
            <nav
              id="brxe-pbdegl"
              className="brxe-next-gooey-nav nb-gooey-nav nb-gooey-nav--horizontal"
            >
              <GooeyItems items={desktopCtaItems} />
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
}
