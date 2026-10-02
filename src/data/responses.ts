import { StaticImageData } from "next/image";

import hrtToolkitHeaderImage from "../../public/images/photos/photo-250000-000001-usa-hrt-toolkit.jpg";

export type ResponseOverview = {
  name: string;
  url: string;
  headerImage: StaticImageData | string;
  headerImageAlt: string;
  about: string;
};

export const responses: ResponseOverview[] = [
  {
    name: "US Disaster Preparedness",
    url: "/responses/us-disaster-preparedness",
    headerImage:
      "https://res.cloudinary.com/dthervbn8/image/upload/v1756722462/Responses/USA/25-016-USA-USA/IMG_8747_fqfkej.jpg",
    headerImageAlt:
      "Emergency supplies being organized for US disaster preparedness",
    about:
      "We develop close relationships with mutual aid groups in areas around the country, and create disaster response plans together. Then we secure large quantities of emergency supplies, and pre-position them in centralized hubs. When a disaster strikes, we provide our grassroots partners with the supplies they need to protect their communities.",
  },
  {
    name: "Levant Response",
    url: "/responses/levant",
    headerImage:
      "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/Levant/Anera%20Photo%20Library/Gaza/gaza_emergency-response_2024-february-20_IMG-20240220-WA0019-EDIT_vstfeb.jpg",
    headerImageAlt: "Emergency relief being distributed in the Levant",
    about:
      "We provide emergency relief to war refugees, and equip them with the tools and training needed to help their own communities. We do this by sourcing bulk quantities of food, medical equipment, and hygiene products from donors—and asking displaced people what they need to heal. Then we package those goods into shipping containers and transport them to Lebanon, Jordan, and occupied Palestine.",
  },
  {
    name: "Refugee Support Europe",
    url: "/responses/refugee-support-eu",
    headerImage:
      "https://res.cloudinary.com/dthervbn8/image/upload/v1741004789/Responses/Refugees%20Europe/Calais/grand_synthe_eviction_jan_21_wjafzm.jpg",
    headerImageAlt: "Refugee support work in Europe",
    about:
      "We deliver supplies to refugee camps, community centers, and grassroots groups serving people on the move. We also work with a network of organizations across the continent to help them be more sustainable and effective by reducing costs and acquiring new sources of aid.",
  },
  {
    name: "HRT Harm Reduction Toolkit",
    url: "/responses/hrt-toolkit",
    headerImage: hrtToolkitHeaderImage,
    headerImageAlt: "HRT Harm Reduction Toolkit supplies",
    about:
      "Each kit includes a 1-year supply of medical equipment necessary to administer injection-based hormone therapy. Each kit is worth approximately $65 when purchased at retail value. Using our existing mutual aid networks, the kits are delivered to local frontline organizations who distribute the kits for free to trans people in need.",
  },
];
