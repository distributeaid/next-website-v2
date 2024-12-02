import React, { FC } from "react";
import { AboutHero } from "@/components/about-us/AboutHero";
import { Timeline } from "@/components/about-us/Timeline";
import { CallOutText } from "@/components/about-us/Callout";
import { SideBySide } from "@/components/text/SideBySide";

const AboutUsPage: FC = () => {
  const showCallOut = false; //toggle to display callout
  return (
    <main>
      {showCallOut && <CallOutText message="some message here" color="green" />}
      <AboutHero />
      <SideBySide
        missionTitle="Mission"
        visionTitle="Vision"
        bgColor="gray-50"
      />
      <Timeline />
    </main>
  );
};

export default AboutUsPage;
