import React, { FC } from "react";
import { HrtToolkitHero } from "@/components/responses/hrt-toolkit/HrtToolkitHero";
import { GetInvolved } from "@/components/responses/hrt-toolkit/GetInvolved";

const HrtToolkit: FC = () => {
  return (
    <main>
      <HrtToolkitHero />
      <GetInvolved />
    </main>
  );
};

export default HrtToolkit;
