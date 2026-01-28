"use server";
import { TeamMember } from "./types";

async function strapiGet(url: string) {
  const { STRAPI_URL, STRAPI_KEY } = process.env;
  return await fetch(`${STRAPI_URL}/api/${url}`, {
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_KEY}`,
    },
  });
}

export async function getTeam() {
  const response = await strapiGet("members?populate=*");
  const jsonData = await response.json();
  return processTeamData(jsonData.data);
}

function processTeamData(data: TeamMember[]) {
  const { STRAPI_URL } = process.env;

  data.forEach((teamMember: TeamMember) => {
    teamMember.Profile.url = `${STRAPI_URL}${teamMember.Profile.url}`;
  });

  return data;
}
