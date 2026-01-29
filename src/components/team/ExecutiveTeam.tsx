import { FC } from "react";
import { TeamMembers } from "./TeamMembers";
import { getTeam } from "../../utils/strapi/api";

export async function ExecutiveTeam() {
  const data = await getTeam();
  return (
    <TeamMembers
      people={data}
      bannerImage="/images/about-us/Water-to-Calais.png"
      header="Team Members"
    />
  );
}
