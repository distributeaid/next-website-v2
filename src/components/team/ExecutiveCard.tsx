import { FC } from "react";
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

export type ExecutiveCardProps = {
  name: string;
  title: string;
  photo: string;
  index: number;
};

export const ExecutiveCard: FC<ExecutiveCardProps> = ({
  name,
  title,
  photo,
  index,
}) => (
  <Flex
    display="inline-flex"
    direction="row"
    m="5"
    p="5"
    className={`${background(index)} rounded-md`}
    width="40%"
  >
    <Box>
      <Image
        src={photo}
        width={300}
        height={300}
        alt={`Headshot of ${name}`}
        className="rounded-md"
      />
    </Box>
    <Flex
      display="inline-flex"
      direction="column"
      className="justify-around"
      ml="20px"
      p="3"
      align="start"
    >
      <Text as="p" size="8" weight="bold">
        {name}
      </Text>
      <Text as="p" size="5" weight="bold">
        {title}
      </Text>
    </Flex>
  </Flex>
);

// Makes a checkerboard pattern in the backgrounds of the tiles
// There's probably a better way to do this
function background(index: number) {
  if (index % 4 < 2 && index % 2 == 0) {
    return "bg-navy-300";
  } else if (index % 4 >= 2 && index % 2 == 1) {
    return "bg-navy-300";
  }

  return "bg-navy-400";
}
