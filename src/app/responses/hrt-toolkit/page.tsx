import React, { FC } from "react";
import { HrtToolkitHero } from "@/components/responses/hrt-toolkit/HrtToolkitHero";
import { GetInvolved } from "@/components/responses/hrt-toolkit/GetInvolved";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";
import { AboutTheProject } from "@/components/responses/hrt-toolkit/AboutTheProject";

const HrtToolkit: FC = () => {
  return (
    <main>
      <HrtToolkitHero />
      <HowItWorks />
      <GetInvolved />
      <AboutTheProject />
    </main>
  );
};

export default HrtToolkit;
