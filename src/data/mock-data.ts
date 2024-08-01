import { Region, Subregion } from "@/types/place";

export const regions: Region = {
  name: "Europe",
  // image: "europe.jpg",
  // alt: "Europe",
  path: "/regions/europe",
  overview: "Overview of Europe...",
  slug: "europe",
  governmentResponse: "Government response...",
  longText: "Long text...",
  needsUrl: "/needs-assessment/europe",
  map: {
    relativePath: "maps/europe.png",
    alt: "Europe Map",
    image: { src: "europe-map.png", alt: "Europe Map" },
  },
  population: {
    needsTotal: 12345,
    totalItemsRequested: 4563773,
    ngoBeneficiaries: 636636636,
    ngoPopulation: 83883883,
    ngoRespondents: 636636636,
    count: 883883,
    trend: "trend",
    description: "Population description...",
  },
  newsUpdates: "Latest news updates...",
  stayInformed: "Stay informed...",
  subregions: [], // Placeholder for subregions
};

export const subregion: Subregion = {
  name: "Eastern Europe",
  path: "/regions/eastern-europe",
  overview: "Overview of Eastern Europe...",
  slug: "eastern-europe",
  governmentResponse: "Government response...",
  longText: "Long text...",
  needsUrl: "/needs-assessment/eastern-europe",
  map: {
    relativePath: "maps/eastern-europe.png",
    alt: "Eastern Europe Map",
    image: { src: "eastern-europe-map.png", alt: "Eastern Europe Map" },
  },
  population: {
    needsTotal: 12345,
    totalItemsRequested: 4563773,
    ngoBeneficiaries: 636636636,
    ngoPopulation: 83883883,
    ngoRespondents: 636636636,
    count: 883883,
    trend: "trend",
    description: "Population description...",
  },
  newsUpdates: "Latest news updates...",
  stayInformed: "Stay informed...",
  region: regions, // Include the region data
};

regions.subregions.push(subregion);

export const regionsData = Array(7).fill(regions);
