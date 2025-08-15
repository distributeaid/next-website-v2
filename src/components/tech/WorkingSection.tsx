import { Container, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { WorkingBox } from "./WorkingBox";

const data = [
  {
    title: "Distribute Aid Website",
    para: "Since relaunching our website, we have been continually developing new ways to share information and insights from our projects, such as through data visualisations",
    link: "https://github.com/distributeaid/next-website-v2",
    tech: ["TypeScript", "Next.js", "React", "Radix UI", "Tailwind"],
  },
  {
    title: "Needs Assessment",
    para: "The goal of this project is to provide a way for Distribute Aid to run needs assessments using forms that can be modified using a low-code or zero-code approach",
    link: "https://github.com/distributeaid/aggregated-public-information",
    tech: ["Postgres", "Typescript", "NodeJS", "Strapi", "Jest", "SuperTest"],
  },
  {
    title: "Shipment Data Reporting Pipeline",
    para: "Our Shipment Data Reporting Pipeline ingests data that we record for each shipment, processes it into impact stats, and presents it through a public API that is consumed by our landing site and shared with researchers/other third parties",
    link: "https://github.com/distributeaid/aggregated-public-information",
    tech: ["Postgres", "Typescript", "NodeJS", "Strapi", "Jest", "SuperTest"],
  },
  {
    title: "Documentation Platform",
    para: "We always encourage people to be diligent with documentation. To make it easier for developers to create documentation, we are currently setting up a centralized platform to streamline the documentation process",
    link: "https://github.com/distributeaid/docs",
    tech: ["Mintlify"],
  },
];

export const WorkingSection = () => {
  return (
    <Container
      align="center"
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      px="4"
    >
      <Heading
        as="h2"
        align="center"
        size={{ initial: "8", sm: "8" }}
        color="blue"
        className="md:text-[48px]"
        highContrast
      >
        What we are working on
      </Heading>
      <Text
        as="p"
        mt="4"
        align="center"
        size={{ initial: "3", sm: "5" }}
        color="blue"
        highContrast
      >
        These are some of the ways our team of volunteer contributors currently
        supports Distribute Aid and the global aid work community with
        tech-based solutions.
      </Text>
      <Grid
        columns={{ initial: "1", md: "2" }}
        gap="5"
        width="auto"
        justify="center"
        mt={{ initial: "5", sm: "8" }}
      >
        {data.map((item, index) => (
          <WorkingBox
            title={item.title}
            para={item.para}
            link={item.link}
            key={index}
            tech={item.tech}
          />
        ))}
      </Grid>
    </Container>
  );
};
