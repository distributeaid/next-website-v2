import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

interface SortingControlProps {
  src: string;
  title: string;
  description: string;
}

export const SortingControl = ({
  src,
  title,
  description,
}: SortingControlProps) => {
  return (
    <Flex
      align="center"
      direction="column"
      gap="2"
      my={{ md: "8", initial: "2" }}
      width={{ md: "496px" }}
      className="text-navy-800"
    >
      <Image src={src} alt={`${title}`} width={88} height={86} />
      <Heading align="center">{title}</Heading>
      <Text align="center">{description}</Text>
    </Flex>
  );
};
