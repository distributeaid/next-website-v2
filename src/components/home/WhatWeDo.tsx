import { whatWeDoData } from "@/data/home/whatWeDo";
import { Grid, Heading, Section } from "@radix-ui/themes";
import React from "react";
import ServiceCard from "../service-card/ServiceCard";

const WhatWeDo = () => {
  return (
    <Section className="px-6  md:px-16">
      <Heading
        as="h1"
        weight="bold"
        align="center"
        className="text-navy-900"
        size="9"
      >
        What We Do
      </Heading>
      <Grid
        columns={{ initial: "1", md: "2" }}
        gapX="6"
        gapY={{
          initial: "5",
          md: "7",
        }}
        width="100%"
        mt="8"
      >
        {whatWeDoData.map((item, index) => (
          <ServiceCard
            key={index}
            img={item.img.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default WhatWeDo;
