"use server";
import { TeamMember } from "./types";

// The universal get function for the strapi API.
// The path you use here depends on the data you're looking for
// as defined in https://github.com/distributeaid/aggregated-public-information
async function strapiGet(
  urlPath: string,
  query?: { [key: string]: any },
): Promise<any> {
  const { STRAPI_URL, STRAPI_KEY } = process.env;

  if (!STRAPI_URL) {
    throw Error("Missing STRAPI_URL");
  }

  if (!STRAPI_KEY) {
    throw Error("Missing STRAPI_KEY");
  }

  const url = new URL(`${STRAPI_URL}`);
  url.pathname = `/api/${urlPath}`;

  if (query) {
    for (let [key, value] of Object.entries(query)) {
      url.searchParams.append(key, value);
    }
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRAPI_KEY}`,
  };

  return await fetch(url, {
    cache: "no-cache",
    headers,
  });
}

// Pulls a list of team members from the strapi API
export async function getTeam(): Promise<TeamMember[]> {
  const response = await strapiGet("members", { populate: "*" });
  const jsonData = await response.json();
  return jsonData.data;
}
