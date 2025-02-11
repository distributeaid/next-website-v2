import { Badge, Box, Container, Flex, Link, Text } from "@radix-ui/themes";
import React from "react";

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
      <Flex gap="4" p="5" direction="column" className="bg-navy-50">
        <Text size="7" weight="medium" className="text-navy-800">
          {title}
        </Text>
        <Text size="4" className="leading-10">
          {para} <Link href={`https://${link}`}>[GitHub Repo]</Link>
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
