import { FC } from "react";
import { TeamMembers } from "./TeamMembers";
import { getTeam } from "../../utils/strapi/api";

export async function ExecutiveTeam() {
  const team = await getTeam();
  return (
    <TeamMembers
      people={team}
      bannerImage="/images/photos/photo-fra-calais-water.png"
      header="Team Members"
    />
  );
}
