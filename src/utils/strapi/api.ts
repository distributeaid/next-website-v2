"use server";
import { TeamMember } from "./types";

// The universal get function for the strapi API.
// The path you use here depends on the data you're looking for
// as defined in https://github.com/distributeaid/aggregated-public-information
async function strapiGet(urlPath: string): Promise<any> {
  const { STRAPI_URL, STRAPI_KEY } = process.env;

  const url = `${STRAPI_URL}/api/${urlPath}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRAPI_KEY}`,
  };

  console.log("URL: ", url);
  console.log("HEADERS: ", headers);

  return await fetch(url, {
    cache: "force-cache",
    headers,
  });
}

// Pulls a list of team members from the strapi API
export async function getTeam(): Promise<TeamMember[]> {
  const response = await strapiGet("members?populate=*");
  console.log("RESPONSE: ", response);
  const jsonData = await response.json();
  console.log("DATA: ", jsonData);
  return jsonData.data;
}
