import { Heading, Text, Grid, Section } from "@radix-ui/themes";
import React from "react";
import ImpactCard from "../impact-card/ImpactCard";
import { ImpactData } from "@/data/ourImpact";

const OurImpact = () => {
  return (
    <Section className="px-6 md:px-16">
      <Heading weight="bold" align="center" className="text-navy-900" mb="4">
        Our Impact
      </Heading>
      <Text
        align="center"
        weight="regular"
        className="text-navy-900"
        mb="8"
        as="p"
      >
        July 2021—June 2024 in numbers
      </Text>

      <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="4">
        {ImpactData.map((item, index) => (
          <ImpactCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
            className={`${index === 0 && "md:col-span-2 lg:col-span-1"} ${index === 6 && "xl:col-span-2"} ${index === 7 && "md:col-span-2 lg:col-span-1"} `}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default OurImpact;
