import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface ImageAttributionProps {
  name: string;
  href: string;
}

const ImageAttribution = ({ name, href }: ImageAttributionProps) => (
  <Text
    size="1"
    className="absolute right-0 bottom-0 bg-gray-500/75 text-white py-1 px-3"
  >
    Image credit:{" "}
    <a href={href} className="underline" target="_blank">
      {name}
    </a>
  </Text>
);

export default ImageAttribution;
