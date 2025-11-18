import { FC } from "react";
import { TeamMembers } from "./TeamMembers";

const executives = [
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
  {
    name: "Sara Lonegard",
    title: "Executive Director",
    photo: "/images/tech/Sponsor-DA-Tech.jpg",
  },
];

export const ExecutiveTeam: FC = () => (
  <TeamMembers
    people={executives}
    bannerImage="/images/about-us/Water-to-Calais.png"
    header="Executive Team"
  />
);
