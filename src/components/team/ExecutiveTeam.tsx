import { FC } from "react";
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { ExecutiveCard } from "./ExecutiveCard";

const executives = [
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
];

export const ExecutiveTeam: FC = () => (
  <Section>
    <Box
      p="8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/images/about-us/Water-to-Calais.png)",
        backgroundSize: "100% auto",
        backgroundPositionY: "25%",
      }}
    >
      <Heading as="h1" size="9" align="center">
        EXECUTIVE TEAM
      </Heading>
    </Box>
    <Section className="text-center">
      {executives.map((item, index) => (
        <ExecutiveCard
          name={item.name}
          title={item.title}
          photo={item.photo}
          index={index}
          key={`exec-${index}`}
        />
      ))}
    </Section>
  </Section>
);
