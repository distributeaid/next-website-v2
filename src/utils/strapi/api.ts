"use server";
import type {
  ResponseNavigationItem,
  ResponseOverview,
  TeamMember,
  TeamMemberRoleType,
} from "./types";

// The universal get function for the strapi API.
// The path you use here depends on the data you're looking for
// as defined in https://github.com/distributeaid/aggregated-public-information
async function strapiGet(
  urlPath: string,
  query?: Record<string, string>,
): Promise<Response> {
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

  return fetch(url, {
    cache: "no-cache",
    headers,
  });
}

// Pulls a list of team members from the strapi API
// optionally filtered by role type
export async function getTeam(
  roleType?: TeamMemberRoleType,
): Promise<TeamMember[]> {
  let query: Record<string, string> = {
    populate: "*",
  };

  if (roleType) {
    query = {
      ...query,
      "filters[roles][type][$eq]": roleType,
    };
  }

  const response = await strapiGet("members", query);
  const jsonData = await response.json();
  console.log(JSON.stringify(jsonData, null, 2));
  return jsonData.data;
}

const responseOverviewPopulate = {
  "populate[imageGallery]": "true",
  "populate[processImageMobile]": "true",
  "populate[processImageDesktop]": "true",
  "populate[callToActionCards]": "true",
  "populate[faqs]": "true",
  "populate[details]": "true",
  "populate[impactStatistics][populate][statistics]": "true",
  "populate[impactStatistics][populate][cta]": "true",
};

export async function getResponseNavigation(): Promise<
  ResponseNavigationItem[]
> {
  const response = await strapiGet("overviews", {
    "fields[0]": "name",
    "fields[1]": "slug",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch response navigation: ${response.status}`);
  }

  const jsonData: { data: ResponseNavigationItem[] } = await response.json();
  return jsonData.data;
}

export async function getResponseOverviews(): Promise<ResponseOverview[]> {
  const response = await strapiGet("overviews", responseOverviewPopulate);

  if (!response.ok) {
    throw new Error(`Failed to fetch response overviews: ${response.status}`);
  }

  const jsonData: { data: ResponseOverview[] } = await response.json();
  return jsonData.data;
}

export async function getResponseOverview(
  slug: string,
): Promise<ResponseOverview | null> {
  const response = await strapiGet("overviews", {
    ...responseOverviewPopulate,
    "filters[slug][$eq]": slug,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch response overview: ${response.status}`);
  }

  const jsonData: { data: ResponseOverview[] } = await response.json();
  return jsonData.data[0] ?? null;
}
