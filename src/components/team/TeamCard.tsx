import { FC } from "react";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export type TeamCardProps = {
  name: string;
  title: string;
  photo: string;
};

export const TeamCard: FC<TeamCardProps> = ({ name, title, photo }) => (
  <Flex
    direction="row"
    m={{ initial: "3", md: "5" }}
    p={{ initial: "4", md: "6" }}
    className="bg-navy-300 rounded-md"
  >
    <Flex display="inline-flex">
      <Image
        src={photo}
        width={250}
        height={250}
        alt={`Headshot of ${name}`}
        className="rounded-md h-[250px] min-w-[250px] aspect-square"
      />
    </Flex>
    <Flex
      direction="column"
      justify="center"
      gap="6"
      ml="20px"
      p="3"
      align="start"
    >
      <Text as="p" size={{ initial: "5", md: "8" }} weight="bold" align="left">
        {name}
      </Text>
      <Text as="p" size={{ initial: "2", md: "5" }} weight="bold" align="left">
        {title}
      </Text>
    </Flex>
  </Flex>
);
