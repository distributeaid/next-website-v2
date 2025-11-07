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
  img: {
    src: string;
    alt: string;
  };
}[] = [
  {
    name: "Emily Johnson",
    role: "Community Engagement Officer at Local Charity",
    quote:
      "Distribute Aid’s commitment to transparency and collaboration has been a game-changer for our initiatives.",
    img: {
      src: "unhcr.png",
      alt: "",
    },
  },
  {
    name: "John Doe Mark",
    role: "Executive Director of IRC",
    quote:
      "Working with Distribute Aid has been truly inspiring. Their dedication to creating positive change in our community is unmatched.",
    img: {
      src: "care.png",
      alt: "",
    },
  },
  {
    name: "Michael Brown",
    role: "Chief Operations Officer at Help Network",
    quote:
      "The partnership with Distribute Aid has allowed us to streamline our processes and maximize impact in disaster relief.",
    img: {
      src: "care.png",
      alt: "",
    },
  },
  {
    name: "Jane Smith",
    role: "Program Manager at NGO Connect",
    quote:
      "Collaborating with Distribute Aid has enhanced our outreach efforts, enabling us to better serve those in need.",
    img: {
      src: "unhcr.png",
      alt: "",
    },
  },
];

export { logoHero, loadingTruck, moriaFireRelief, soapRelief, waterRelief };
