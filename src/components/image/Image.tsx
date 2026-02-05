import { FC } from "react";
import Image from "next/image";

type Image = {
  image: string;
  width: number;
  height: number;
  altText: string;
  caption: string;
  attribution: string;
  alignment: "left" | "center" | "right";
};

const Images: FC<Image> = ({
  image,
  width,
  height,
  altText,
  caption,
  attribution,
  alignment,
}) => {
  let flexAlignment = getFlexAlignment(alignment);
  let textAlignment = getTextAlignment(alignment);

  return (
    <div className={`flex ${flexAlignment}`}>
      <div
        style={{
          width: width,
        }}
      >
        <div className="relative">
          <Image src={image} alt={altText} height={height} width={width} />
        </div>
        <p className={`text-neutral-500 text-sm ${textAlignment}`}>
          Photo Credit: {attribution}
        </p>
        <p className={`${textAlignment}`}>{caption}</p>
      </div>
    </div>
  );
};

export default Images;

export const getFlexAlignment = (alignment: string) => {
  if (alignment === "right") {
    return "justify-end";
  } else if (alignment === "left") {
    return "justify-start";
  } else {
    return "justify-center";
  }
};

export const getTextAlignment = (alignment: string) => {
  if (alignment === "right") {
    return "text-right";
  } else if (alignment === "left") {
    return "text-left";
  } else {
    return "text-center";
  }
};
