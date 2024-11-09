const subregion = {
  name: "Eastern Europe",
  image: "eastern_europe.jpg",
  alt: "Eastern Europe",
  path: "/regions/eastern-europe",
  overview: "Overview of Eastern Europe...",
  slug: "eastern-europe",
  governmentResponse: "Government response...",
  longText: "Long text...",
  needsUrl: "/needs-assessment/eastern-europe",
  map: {
    relativePath: "maps/eastern-europe.png",
    alt: "Eastern Europe Map",
    image: "eastern-europe-map.png",
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
  region: null, // Placeholder for the parent region
};

export const regions = {
  name: "Europe",
  image: "europe.jpg",
  alt: "Europe",
  path: "/regions/europe",
  overview: "Overview of Europe...",
  slug: "europe",
  governmentResponse: "Government response...",
  longText: "Long text...",
  needsUrl: "/needs-assessment/europe",
  map: {
    relativePath: "maps/europe.png",
    alt: "Europe Map",
    image: "europe-map.png",
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
  subregions: [subregion], // Include the subregion
};

export const regionsData: (typeof regions)[] = Array(7).fill(regions);
