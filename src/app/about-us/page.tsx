import React, { FC } from "react";
import AboutHero from "@/components/about-us/AboutHero";
import { AboutOurMissionVision } from "@/components/about-us/AboutOurMissionVision";
import { TimelineItem } from "@/components/about-us/Timeline";
import { CallOutText } from "@/components/about-us/Callout";
import { Flex, Separator } from "@radix-ui/themes";

const AboutUsPage: FC = () => {
  return (
    <main>
      <CallOutText message="some message here" color="green" />
      <AboutHero />
      <Flex
        py="9"
        direction={{ md: "row", initial: "column" }}
        justify="center"
        align="center"
        gap={{ initial: "4", lg: "6", xl: "9" }}
        px={{ initial: "4", md: "9" }}
        className="h-full bg-gray-50"
      >
        <AboutOurMissionVision title="Mission" />
        <Separator
          orientation="vertical"
          className="hidden lg:block self-stretch h-auto"
        />
        <AboutOurMissionVision title="Vision" />
      </Flex>
      <TimelineItem />
    </main>
  );
};

export default AboutUsPage;
