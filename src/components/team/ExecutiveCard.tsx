import { FC } from "react";
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";


export type ExecutiveCardProps = {
  name: string;
  title: string;
  photo: string;
};

export const ExecutiveCard: FC<ExecutiveCardProps> = ({name, title, photo}) => (
  <Box>
    <Image src={photo}>
  </Box>
);