import europeMap from "./maps/europe.svg";
import middleEastMap from "./maps/middle-east.svg";
import unitedStatesMap from "./maps/united-states.svg";

type BackgroundColor = `bg-${string}`;

export interface MapKey {
  label: string;
  color: BackgroundColor;
}

export const cardContent: {
  map: React.SVGElementType;
  title: string;
  summary: string;
  alt: string;
}[] = [
  {
    map: europeMap,
    title: "Europe",
    summary:
      "In Europe, we work with local grassroots organizers who support people on the move, asylum seekers, houseless and low-income people, and those displaced due to war or disaster. Our partners provide support ranging from medical services, legal support, advocacy, and hot meals to non-food items.",
    alt: `Color-coded map of Europe showing three aid-flow categories. Receiving aid: France, Croatia, Bosnia & Herzegovina, Serbia, Romania, Moldova. Sending aid: Spain, United Kingdom, Norway, Austria, Hungary, Lithuania. Both: Netherlands, Germany, Poland, Italy, Ukraine, Greece.`,
  },
  {
    map: middleEastMap,
    title: "The Middle East",
    summary:
      "In the Middle East, our partners are primarily situated in the Levant region. There, we work with organisations providing educational support, employment opportunities, medical services and infrastructure, and shelter for refugees.",
    alt: `Color-coded map of The Middle East showing a single aid-flow category. Sending aid: Lebanon, Gaza, West Bank, Jordan.`,
  },
  {
    map: unitedStatesMap,
    title: "USA",
    summary:
      "In the US, our work is primarily centered around disaster relief and pre-positioning aid to be able to act swiftly when disaster strikes. We have a large network of partners and warehouses in disaster-prone areas who work locally with mutual aid in their communities.",
    alt: `Color-coded map of the continental United States showing three aid-flow categories. Receiving aid: Washington, Utah, New York, Delaware. Sending aid: Oregon, Texas, Indiana, Ohio, Tennessee, Florida. Both: California, Georgia, North Carolina, Pennsylvania.`,
  },
];
