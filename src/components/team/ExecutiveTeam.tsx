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
    <Heading>Executive Team</Heading>
    <Section>
      {executives.map((item, index) => (
        <ExecutiveCard
          name={item.name}
          title={item.title}
          photo={item.photo}
          key={`exec-${index}`}
        />
      ))}
    </Section>
  </Section>
);
