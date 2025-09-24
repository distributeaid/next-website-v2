import React, { FC } from "react";
import { AboutTheProject } from "@/components/responses/hrt-toolkit/AboutTheProject";
import { GetInvolved } from "@/components/responses/hrt-toolkit/GetInvolved";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";
import { HrtFaq } from "@/components/responses/hrt-toolkit/HrtFaq";
import { HrtToolkitHero } from "@/components/responses/hrt-toolkit/HrtToolkitHero";

const HrtToolkit: FC = () => {
  return (
    <main>
      <HrtToolkitHero />
      <AboutTheProject />
      <HowItWorks />
      <GetInvolved />
      <HrtFaq />
    </main>
  );
};

export default HrtToolkit;
