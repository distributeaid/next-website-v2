"use server";
import { TeamMember } from "./types";

// The universal get function for the strapi API.
// The path you use here depends on the data you're looking for
// as defined in https://github.com/distributeaid/aggregated-public-information
async function strapiGet(urlPath: string): Promise<any> {
  const { STRAPI_URL, STRAPI_KEY } = process.env;
  return await fetch(`${STRAPI_URL}/api/${urlPath}`, {
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_KEY}`,
    },
  });
}

// Pulls a list of team members from the strapi API
export async function getTeam(): Promise<TeamMember[]> {
  const response = await strapiGet("members?populate=*");
  const jsonData = await response.json();
  return jsonData.data;
}
