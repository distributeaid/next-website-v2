import { FC } from "react";
import { TeamMembers } from "./TeamMembers";

import { team } from "../../data/team";

export const ExecutiveTeam: FC = () => (
  <TeamMembers
    people={team.executiveTeam}
    bannerImage="/images/about-us/Water-to-Calais.png"
    header="Team Members"
  />
);
