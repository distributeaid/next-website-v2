import refugeeAid from "../../public/images/home/how-we-help-refugees.jpg";
import covid19Response from "../../public/images/home/how-we-help-covid.jpg";
import inKindDonations from "../../public/images/home/in-kind-donations.webp";
import fortPickett from "../../public/images/home/fort-pickett.jpg";
import facebook from "../../public/images/social-icons/facebook.svg";
import github from "../../public/images/social-icons/github.svg";
import instagram from "../../public/images/social-icons/instagram.svg";
import linkedin from "../../public/images/social-icons/linked-in.svg";
import twitter from "../../public/images/social-icons/twitter.svg";
import logoHero from "../../public/images/home/carousel/distributeAidHero.svg";
import loadingTruck from "../../public/images/home/carousel/loading_truck.png";
import moriaFireRelief from "../../public/images/home/carousel/moria_fire_relief.png";
import soapRelief from "../../public/images/home/carousel/soap_relief.png";
import waterRelief from "../../public/images/home/carousel/water_relief.png";

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
      "Distribute Aid is actively working to prevent the spread of COVID-19 globally. We regularly send hygiene and PPE shipments to our European partners who continue to work to protect people in crowded refugee camps. Because COVID-19 affects everybody, our response grew as the virus spread. We now also collaborate with multiple grassroots networks in the US to support their response.",
  },
  {
    title: "In-kind Donations",
    region: "Global",
    image: inKindDonations,
    description:
      "Distribute Aid runs a successful in-kind donation programme where we connect companies with aid organisations. Through our network of hundreds of charities, we can handle coordinating large volumes of donations. To date, we have secured over 5 million items through our in-kind donor programme. Email <donate-aid@distributeaid.org> if you can donate in-kind.",
  },
  {
    title: "Fort Pickett",
    region: "USA",
    image: fortPickett,
    description:
      "Distribute Aid was officially invited to join Operation *Allies* Welcome at Fort Pickett in November. Our role on base is to manage all the donated aid. We work with NGOs and departments across the base to assess the needs of our guests, and work with the community of external organizations supporting the Operation Allies Welcome mission to help facilitate aid deliveries. Once aid arrives on base we work with the US Marines to distribute items to guests, and supply materials for NGOs running education & activity programs to use in their classes. In November & December, our efforts resulted in more than 750,000 items being distributed to or used by 7,500 guests at Fort Pickett. You can support our work by **[donating to us through our Open Collective page!](https://opencollective.com/distribute-aid-usa/projects/fort-pickett?slug=fort-pickett)**",
  },
];

export const socials = [
  {
    icon: instagram,
    name: "instagram",
    href: "https://www.instagram.com/distributeaid/",
  },
  {
    icon: twitter,
    name: "twitter",
    href: "https://twitter.com/DistributeAid",
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

export { logoHero, loadingTruck, moriaFireRelief, soapRelief, waterRelief };
