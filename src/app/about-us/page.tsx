import React, { FC } from "react";
import { AboutHero } from "@/components/about-us/AboutHero";
import { Timeline } from "@/components/about-us/Timeline";
import { CallOutText } from "@/components/callout/Callout";
import { SideBySide } from "@/components/text/SideBySide";
import { AboutOurMissionVision, data } from "@/components/about-us/AboutOurMissionVision";

const AboutUsPage: FC = () => {
  const showCallOut = false; //toggle to display callout
  return (
    <main>
      {showCallOut && <CallOutText message="some message here" color="green" />}
      <AboutHero />
      <SideBySide
        left={<AboutOurMissionVision title="Mission" content={data.mission} />}
        right={<AboutOurMissionVision title="Vision" content={data.vision} />}
      />
      <Timeline />
    </main>
  );
};

export default AboutUsPage;
