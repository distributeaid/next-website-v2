import { Box, Flex, Heading, Text } from "@radix-ui/themes";
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
      <Box className="relative w-[88px] h-[86px]">
        <Image src={src} alt={`${title}`} fill sizes="88px" />
      </Box>
      <Heading align="center">{title}</Heading>
      <Text align="center">{description}</Text>
    </Flex>
  );
};
