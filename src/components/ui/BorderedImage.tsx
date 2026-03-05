import { Box } from "@radix-ui/themes";
import Image from "next/image";

interface imageProps {
  bgColor: string;
  image: {
    src: string;
    alt: string;
  };
  rightSide?: boolean;
}

const BorderedImage = (props: imageProps) => {
  const { bgColor, image, rightSide = true } = props;
  return (
    <Box
      className={`bg-[${bgColor}] ${rightSide ? "rounded-l-3xl" : "rounded-r-3xl"}`}
      px={{ initial: "20px", sm: "7", md: "61px" }}
      py={{ initial: "5", sm: "52px", md: "45px" }}
    >
      <Box
        className={`${rightSide ? "rounded-l-3xl" : "rounded-r-3xl"} w-full h-full overflow-hidden`}
      >
        <Image
          className="object-cover size-full"
          src={image.src}
          alt={image.alt}
          width={537}
          height={357}
        />
      </Box>
    </Box>
  );
};

export default BorderedImage;
