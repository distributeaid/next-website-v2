// TODO: switch image props to next/image ImageProps once hooked to strapi
export interface Fund {
  img?: string;
  img_link?: string;
  title?: string;
  percentage?: number;
  goal_price?: number;
  donate_link?: string;
  more_link?: string;
  slug?: string;
  description?: string;
  doneColumnLeft?: string;
  doneColumnRight?: string;
  galleryImages?: Array<string>;
  doCTADescription?: string;
  doCTAImage?: string;
}
