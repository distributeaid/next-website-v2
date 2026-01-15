import { whatWeDoData } from "@/data/home/whatWeDo";
import { Grid } from "@radix-ui/themes";
import React from "react";
import ServiceCard from "../service-card/ServiceCard";

import Section from "../ui/SectionWithTitle";

const WhatWeDo = () => {
  return (
    <Section title="What We Do">
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
