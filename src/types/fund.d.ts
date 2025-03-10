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
  done_column_left?: string;
  done_column_right?: string;
  gallery_images?: Array<string>;
  do_CTA_text?: string;
  do_CTA_image?: string;
}

export interface FundProps {
  fund: Fund;
}
