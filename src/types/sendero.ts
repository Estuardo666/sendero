/** Content model types for the Escuela Sendero clone. */

export interface OfertaCard {
  title: string;
  image: string;
  moreHref: string;
  admissionsHref: string;
}

export interface ExperienciaCard {
  title: string;
  /** Solid-colour card, or an image card. */
  variant: "color" | "image";
  background?: string;
  color?: string;
  image?: string;
}

export interface NoticiaCard {
  title: string;
  excerpt?: string;
  image: string;
  href: string;
  date?: string;
}

export interface PodcastEpisode {
  number: string;
  title: string;
  href?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
