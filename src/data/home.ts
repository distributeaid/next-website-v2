import refugeeAid from "../../public/images/home/how-we-help-refugees.jpg";
import covid19Response from "../../public/images/home/how-we-help-covid.jpg";
import inKindDonations from "../../public/images/home/in-kind-donations.webp";
import fortPickett from "../../public/images/home/fort-pickett.jpg";
import facebook from "../../public/images/social-icons/facebook.svg";
import github from "../../public/images/social-icons/github.svg";
import instagram from "../../public/images/social-icons/instagram.svg";
import linkedin from "../../public/images/social-icons/linked-in.svg";
import logoHero from "../../public/images/home/carousel/distributeAidHero.svg";
import loadingTruck from "../../public/images/home/carousel/loading_truck.png";
import moriaFireRelief from "../../public/images/home/carousel/moria_fire_relief.png";
import soapRelief from "../../public/images/home/carousel/soap_relief.png";
import waterRelief from "../../public/images/home/carousel/water_relief.png";

// what we do images
import twoPeopleHoldingBoxes from "../../public/images/home/what-we-do/two-people-holding-boxes.png";
import wareHouseWIthSupplies from "../../public/images/home/what-we-do/warehouse-with-supplies.png";
import peopleCarryingBoxes from "../../public/images/home/what-we-do/people-carrying-boxes-from-truck.png";
import writingDataOnPaper from "../../public/images/home/what-we-do/writing-data-on-paper.png";

export const activities = [
  {
    title: "Refugee Aid",
    region: "Europe",
    image: refugeeAid,
    description:
      "Distribute Aid helps European grassroots refugee aid groups support over 100,000 asylum seekers. We assist with every point in the supply chain: assessing needs, gathering supplies at home or from in-kind donors, coordinating shipments, and advising on distributions. We currently send several regular shipments each month to multiple destinations and handle specialty/emergency response shipments as well.",
  },
  {
    title: " COVID-19 Response",
    region: "Europe & USA",
    image: covid19Response,
    description:
      "Distribute Aid is actively working to prevent the spread of COVID globally. We regularly send hygiene and PPE shipments to our European partners who continue to work to protect people in crowded refugee camps. Because COVID affects everybody, our response grew as the virus spread. We now also collaborate with multiple grassroots networks in the US to support their response.",
  },
  {
    title: "In-Kind Donations",
    region: "Global",
    image: inKindDonations,
    description:
      "Distribute Aid runs a successful in-kind donation programme where we connect companies with aid organisations. Through our network of hundreds of charities, we can handle coordinating large volumes of donations. To date, we have secured over 5 million items through our in-kind donor programme. Email <donate-aid@distributeaid.org> if you can donate in kind.",
  },
  {
    title: "Disaster Response",
    region: "USA",
    image: fortPickett,
    description:
      "Distribute Aid builds disaster response networks by connecting grassroots groups with the supplies, infrastructure, and coordination they need to respond quickly and effectively. We help local organizations prepare before disasters strike by securing warehouse space, stockpiling essentials, and enabling cross-state collaboration so communities are able to respond to disasters within days rather than weeks. In the US, our model was used to respond to Hurricane Helene in 2024 and the LA fires in 2025.",
  },
];

export const socials = [
  {
    icon: instagram,
    name: "instagram",
    href: "https://www.instagram.com/distributeaid/",
  },

  {
    icon: linkedin,
    name: "linkedin",
    href: "https://www.linkedin.com/company/distribute-aid/",
  },
  {
    icon: facebook,
    name: "facebook",
    href: "https://www.facebook.com/DistributeAidDotOrg/",
  },
  {
    icon: github,
    name: "github",
    href: "https://github.com/distributeaid",
  },
];

export const whatWeDoData = [
  {
    title: "Deliver Aid",
    description:
      "We bring food, medicine, and vital supplies to people suffering because of natural or man-made disasters.",
    img: twoPeopleHoldingBoxes,
    alt: "two volunteers holding boxes of aid supplies",
  },
  {
    title: "Minimize Waste",
    description:
      "We ensure the right aid is delivered in an efficient manner, reducing costs, emissions, and unwanted supplies.",
    img: wareHouseWIthSupplies,
    alt: "a warehouse filled with organized supplies",
  },
  {
    title: "Coordinate Relief Efforts",
    description:
      "We build coalitions of local grassroots groups, charities, and companies that respond quickly and effectively to crises.",
    img: peopleCarryingBoxes,
    alt: "people carrying boxes from a truck",
  },
  {
    title: "Share Knowledge",
    description:
      "We develop needs assessments, guides, trainings, and open-source tech tools to drive systemic change.",
    img: writingDataOnPaper,
    alt: "writing data on paper",
  },
];

export const partnerTestimonials: {
  name: string;
  role: string;
  quote: string;
  img?: {
    src: string;
    alt: string;
  };
}[] = [
  {
    name: "Kompass71",
    role: "European Refugee Response",
    quote:
      "These hygiene items were among our most urgently needed supplies. They are helping people on the move maintain health and dignity during a harsh winter in the under-resourced Sarajevo camps.",
  },
  {
    name: "Mutual Aid Disaster Relief",
    role: "Hurricane Helene Response",
    quote:
      "Being able to ensure clean water to working crews and having additional protective gear gave us the space to focus on other aspects of organizing. Before trying to organize water deliveries and sourcing more PPE was a large task.",
  },
  {
    name: "Anera M&E Officer in South Lebanon",
    role: " Levant Response",
    quote:
      "With the generous support of Distribute Aid, Anera recently received and distributed a full container of essential medical and mobility supplies to support people living with disabilities across Lebanon. This shipment included more than 120 mobility aids, including wheelchairs and crutches, and over 2,000 units of supplies such as gloves and underpads. The donation was distributed to ten health centers, reaching vulnerable Lebanese outside refugee camps and Palestinians inside refugee camps.",
  },
  {
    name: "Community Solidarity Project",
    role: "LA Fires Response",
    quote:
      "With the support of Distribute Aid, we were able to rapidly scale up our fire-related mutual aid efforts. During the acute response period, we supported over 250 families and individuals with essential supply deliveries. Due to the influx of infrastructure and supplies, Community Solidarity Project expanded to open a free store for families and individuals impacted by the fires. We are extremely grateful for the trust and support that was extended to us by Distribute Aid, which empowered us to have a robust mutual aid effort supporting people displaced by fires.",
  },
];

export { logoHero, loadingTruck, moriaFireRelief, soapRelief, waterRelief };
