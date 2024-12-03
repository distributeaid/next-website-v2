import React, { FC } from "react";
import { AboutHero } from "@/components/about-us/AboutHero";
import { Timeline } from "@/components/about-us/Timeline";
import { CallOutText } from "@/components/callout/Callout";
import { SideBySide } from "@/components/text/SideBySide";
import { AboutOurMissionVision } from "@/components/about-us/AboutOurMissionVision";

const AboutUsPage: FC = () => {
  const showCallOut = false; //toggle to display callout
  return (
    <main>
      {showCallOut && <CallOutText message="some message here" color="green" />}
      <AboutHero />
      <SideBySide
        left={<AboutOurMissionVision title="Mission" />}
        right={<AboutOurMissionVision title="Vision" />}
        bgColor="[#3e63dd]/[.05]"
      />
      <Timeline />
    </main>
  );
};

export default AboutUsPage;
