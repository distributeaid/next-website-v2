import React, { FC } from "react";
import AboutHero from "@/components/about-us/AboutHero";
import AboutOurMissionVision from "@/components/about-us/AboutOurMissionVision";
import missionStatementData from "@/data/about-us";
import { Separator } from "@radix-ui/themes";
import TimelineItem from "@/components/about-us/Timeline";

const AboutUsPage: FC = () => {
  const { aboutOurMission, aboutOurVision, timeline } =
    missionStatementData;

  return (
    <main>
      <AboutHero />
      <div className="flex mt-10 md:mt-20 bg-gray-50 h-full ">
        <div className="flex flex-col py-[47px] lg:flex-row justify-center items-center gap-0 lg:gap-10 xl:gap-20 px-[50px] md:px-[117px] h-full">
          <AboutOurMissionVision title="Mission" content={aboutOurMission} />
          <Separator
            orientation="vertical"
            className="hidden lg:block h-[500px]"
          />
          <AboutOurMissionVision title="Vision" content={aboutOurVision} />
        </div>
      </div>
      <TimelineItem items={timeline} />
    </main>
  );
};

export default AboutUsPage;
