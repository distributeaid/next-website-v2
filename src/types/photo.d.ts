interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  }


export type PhotoData = {
  /**
   * relative path to media file
   */
  url: string
  /**
   * Alternative text
   */
  alt: string
}

export type Photo = {
  /**
   * relative path to media file
   */
  relativePath: string
  /**
   * Alternative text
   */
  alt: string
  /**
   * Image process by sharp
   */
  image: ImageProps;
}
