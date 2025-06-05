import { Badge, Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import SmartLink from "../link/SmartLink";

interface WorkingBoxProps {
  title: string;
  para: string;
  link: string;
  tech: string;
}

const colors: { [key: number]: string } = {
  0: "#3E63DD",
  1: "#5AC597",
  2: "#98BEC6",
  3: "#DFCDE8",
  4: "#4362A6",
};

export const WorkingBox = ({ title, para, link, tech }: WorkingBoxProps) => {
  const data = tech.split(",");
  return (
    <Container
      maxWidth={{ initial: "auto", md: "610px" }}
      align="left"
      width="full"
    >
      <Flex gap="4" p="5" direction="column" className="bg-navy-50 rounded-lg">
        <Heading
          as="h3"
          size={{ initial: "7", sm: "8" }}
          weight="medium"
          className="text-navy-800"
        >
          {title}
        </Heading>
        <Text
          as="p"
          size={{ initial: "3", sm: "5" }}
          className="sm:leading-[2]"
        >
          {para}{" "}
          <SmartLink href={link} className="text-navy-800 underline">
            [GitHub Repo]
          </SmartLink>
        </Text>
        <Box>
          {data.map((item, index) => {
            return (
              <Badge
                key={index}
                className={`${
                  //text will be white for first and last badge
                  index % Object.keys(colors).length === 0 ||
                  index % Object.keys(colors).length === 4
                    ? "text-white"
                    : "text-black"
                }`}
                style={{
                  backgroundColor: colors[index % Object.keys(colors).length], //bg-color based on position of badge
                }}
                mr="2"
                mt="1"
                variant="solid"
                highContrast={false}
                size="2"
              >
                {item}
              </Badge>
            );
          })}
        </Box>
      </Flex>
    </Container>
  );
};
