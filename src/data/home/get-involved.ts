import GiveMoney from "@/components/home/icons/GiveMoney";
import DonateSupplies from "@/components/home/icons/DonateSupplies";
import VolunteerTech from "@/components/home/icons/VolunteerTech";

export const getInvolvedLinks = [
  {
    label: "Give Money",
    href: "/donate",
    bgColor: "#5AC597",
    Icon: GiveMoney,
  },
  {
    label: "Donate Supplies",
    href: "/donate",
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
