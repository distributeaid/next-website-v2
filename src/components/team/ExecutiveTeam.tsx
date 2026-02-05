import { FC } from "react";
import { TeamMembers } from "./TeamMembers";

import { team } from "../../data/team";

export const ExecutiveTeam: FC = () => (
  <TeamMembers
    people={team.executiveTeam}
    bannerImage="/images/photos/photo-fra-calais-water.png"
    header="Team Members"
  />
);
