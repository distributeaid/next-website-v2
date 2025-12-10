import React, { FC } from "react";
import { ExecutiveTeam } from "@/components/team/ExecutiveTeam";
import IntroSection from "@/components/team/IntroSection";

const Team: FC = () => {
  return (
    <main>
      <IntroSection />
      <ExecutiveTeam />
    </main>
  );
};

export default Team;
