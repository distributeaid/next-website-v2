import React, { FC } from "react";
import { HrtToolkitHero } from "@/components/responses/hrt-toolkit/HrtToolkitHero";
import { GetInvolved } from "@/components/responses/hrt-toolkit/GetInvolved";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";

const HrtToolkit: FC = () => {
  return (
    <main>
      <HrtToolkitHero />
      <HowItWorks />
      <GetInvolved />
    </main>
  );
};

export default HrtToolkit;
