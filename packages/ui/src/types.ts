import type { ImageMetadata } from 'astro';
import type { IconName } from './components/Icon.astro';

export type { IconName };

export interface Cta {
  label: string;
  href: string;
}

export interface Img {
  alt: string;
  /** Orientação para quem for produzir a imagem (aparece só no placeholder). */
  hint?: string;
  src?: ImageMetadata;
}

export interface IconItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface Plan {
  tag: string;
  name: string;
  features: string[];
  /** Itens que o plano NÃO inclui (exibidos riscados e esmaecidos). */
  excluded?: string[];
  /** Somente o valor, ex.: "27,90". */
  price: string;
  /** Preço "de" (riscado), ex.: "67,00". A economia é calculada automaticamente. */
  oldPrice?: string;
  /** Parcelamento, ex.: "9x de R$ 3,67". */
  installments?: string;
  /** Aviso abaixo do botão (ex.: empurrar para o plano superior). */
  notice?: {
    label: string;
    /** Aceita __sublinhado__. */
    text: string;
    /** Complemento quando o outro plano está abaixo (celular) ou ao lado (desktop). */
    below: string;
    beside: string;
  };
  currency?: string;
  cta: Cta;
  featured?: boolean;
  /** Imagem do produto exibida no card. */
  image?: Img;
}

export interface Bonus {
  tag: string;
  title: string;
  text: string;
  image: Img;
}

export interface Step {
  icon: IconName;
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
