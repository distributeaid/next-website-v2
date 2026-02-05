export interface TeamMember {
  photo: string;
  name: string;
  pronouns?: string;
  title: string;
}

export const team: { executiveTeam: TeamMember[] } = {
  executiveTeam: [
    {
      photo: "/images/photos-team/photo-team-sara-lonegard.jpg",
      name: "Sara Lonegard",
      pronouns: "she/her",
      title: "Executive Director & Founder",
    },
    {
      photo: "/images/photos-team/photo-team-taylor-fairbank.jpg",
      name: "Taylor Fairbank",
      pronouns: "he/they",
      title: "Founder & Director of Development",
    },
    {
      photo: "/images/photos-team/photo-team-asiya-mahmutcehajic.png",
      name: "Asiya Mahmutcehajic",
      pronouns: "she/her",
      title: "Field & Logistics Coordinator",
    },
    {
      photo: "/images/photos-team/photo-team-rosalind-jones.jpg",
      name: "Rosalind Jones",
      pronouns: "she/her",
      title: "LA Hub Coordinator",
    },
    {
      photo: "/images/photos-team/photo-team-lou-macfly.jpg",
      name: "Lou Macfly",
      pronouns: "she/her",
      title: "Design Coordinator",
    },
    {
      photo: "/images/photos-team/photo-team-kai-katschthaler.jpg",
      name: "Kai Katschthaler",
      pronouns: "he/they",
      title: 'Tech Team Lead & Program Manager \“Open Source Explorers"',
    },
    {
      photo: "/images/photos-team/photo-team-elliot-harris.jpg",
      name: "Elliot Harris",
      pronouns: "he/him",
      title: "Salesforce Development Lead",
    },
  ],
};
