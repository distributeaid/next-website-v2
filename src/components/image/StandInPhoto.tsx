import Image, { type ImageProps } from "next/image";

const STAND_IN_PHOTOS = [
  "/images/photos/photo-response-fallback-01.jpg",
  "/images/photos/photo-response-fallback-02.jpg",
  "/images/photos/photo-response-fallback-03.jpg",
  "/images/photos/photo-response-fallback-04.jpg",
  "/images/photos/photo-response-fallback-05.jpg",
  "/images/photos/photo-response-fallback-06.jpg",
  "/images/photos/photo-response-fallback-07.jpg",
  "/images/photos/photo-response-fallback-08.jpg",
];

type StandInPhotoProps = Omit<ImageProps, "src" | "alt"> & {
  /** Pass a list index so neighbouring stand-ins differ. */
  index: number;
};

/** Local aid photo used in place of a broken CMS photo. */
export const StandInPhoto = ({ index, ...props }: StandInPhotoProps) => (
  <Image
    {...props}
    src={STAND_IN_PHOTOS[index % STAND_IN_PHOTOS.length]}
    // Decorative: it doesn't show what the original photo showed.
    alt=""
  />
);
