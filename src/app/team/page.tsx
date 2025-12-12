import React, { FC } from "react";
import { ExecutiveTeam } from "@/components/team/ExecutiveTeam";
import Board from "@/components/team/Board";
import IntroSection from "@/components/team/IntroSection";

const Team: FC = () => {
  return (
    <main>
      <IntroSection />
      <Board />
      <ExecutiveTeam />
    </main>
  );
};

export default Team;
