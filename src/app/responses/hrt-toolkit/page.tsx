import React, { FC } from "react";
import { HrtToolkitHero } from "@/components/responses/hrt-toolkit/HrtToolkitHero";
import { AboutTheProject } from "@/components/responses/hrt-toolkit/AboutTheProject";
import { HrtKitsInNumbers } from "@/components/responses/hrt-toolkit/HrtKitsInNumbers";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";
import { GetInvolved } from "@/components/responses/hrt-toolkit/GetInvolved";
import { HrtFaq } from "@/components/responses/hrt-toolkit/HrtFaq";

const HrtToolkit: FC = () => {
  return (
    <main>
      <HrtToolkitHero />
      <HrtKitsInNumbers />
      <AboutTheProject />
      <HowItWorks />
      <GetInvolved />
      <HrtFaq />
    </main>
  );
};

export default HrtToolkit;
