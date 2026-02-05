import GiveMoney from "../../public/images/GiveMoney";
import DonateSupplies from "../../public/images/DonateSupplies";
import VolunteerTech from "../../public/images/VolunteerTech";

export const getInvolvedLinks = [
  {
    label: "Give Money",
    href: "/donate",
    bgColor: "#5AC597",
    Icon: GiveMoney,
  },
  {
    label: "Donate Supplies",
    href: "/donate#donate-supplies",
    bgColor: "var(--pink-5)",
    Icon: DonateSupplies,
  },
  {
    label: "Volunteer via Tech",
    buttonLabel: "Volunteer",
    href: "/tech",
    bgColor: "#4362A6",
    Icon: VolunteerTech,
  },
];
