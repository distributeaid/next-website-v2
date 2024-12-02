import { Flex, Separator } from "@radix-ui/themes";
import { AboutOurMissionVision } from "../about-us/AboutOurMissionVision";
import React from "react";

interface SideBySideProps {
  missionTitle: string;
  visionTitle: string;
  bgColor: string;
}

export const SideBySide: React.FC<SideBySideProps> = ({
  missionTitle,
  visionTitle,
  bgColor,
}) => {
  return (
    <Flex
      py="9"
      direction={{ md: "row", initial: "column" }}
      justify="center"
      align="center"
      gap={{ initial: "4", lg: "6", xl: "9" }}
      px={{ initial: "4", md: "9" }}
      className={`h-full bg-${bgColor}`}
    >
      <AboutOurMissionVision title={missionTitle} />
      <Separator
        orientation="vertical"
        className="hidden lg:block self-stretch h-auto"
      />
      <AboutOurMissionVision title={visionTitle} />
    </Flex>
  );
};
