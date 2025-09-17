import React, { FC } from "react";
import { HrtToolkitHero } from "@/components/responses/hrt-toolkit/HrtToolkitHero";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";

const HrtToolkit: FC = () => {
  return (
    <main>
      <HrtToolkitHero />
      <HowItWorks />
    </main>
  );
};

export default HrtToolkit;
