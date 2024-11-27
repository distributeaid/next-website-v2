import { CSSProperties, FC } from "react";
import Image from "next/image";

type Image = {
  image: string;
  width: number;
  height: number;
  altText: string;
  sizes?: string;
  style?: CSSProperties;
  alignment: "left" | "center" | "right";
};

const Images: FC<Image> = ({
  image,
  width,
  height,
  altText,
  alignment,
  sizes,
  style,
}) => {
  let flexAlignment = getFlexAlignment(alignment);

  return (
    <div className={`flex ${flexAlignment}`}>
      <div
        style={{
          width: width,
        }}
      >
        <div className="relative">
          <Image
            src={image}
            alt={altText}
            height={height}
            width={width}
            sizes={sizes}
            style={style}
          />
        </div>
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
