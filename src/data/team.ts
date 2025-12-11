export interface TeamMember {
  photo: string;
  name: string;
  pronouns?: string;
  title: string;
}

export const team: { executiveTeam: TeamMember[] } = {
  executiveTeam: [
    {
      photo: "/images/team/Sara_Lonegard.jpg",
      name: "Sara Lonegard",
      pronouns: "she/her",
      title: "Executive Director & Founder",
    },
    {
      photo: "/images/team/Taylor_Fairbank.jpg",
      name: "Taylor Fairbank",
      pronouns: "he/they",
      title: "Founder & Director of Development",
    },
    {
      photo: "/images/team/Asiya_Mahmutcehajic.png",
      name: "Asiya Mahmutcehajic",
      pronouns: "she/her",
      title: "Field & Logistics Coordinator",
    },
    {
      photo: "/images/team/Rosalind_Jones.jpg",
      name: "Rosalind Jones",
      pronouns: "she/her",
      title: "LA Hub Coordinator",
    },
    {
      photo: "/images/team/Lou_Macfly.jpg",
      name: "Lou Macfly",
      pronouns: "she/her",
      title: "Design Coordinator",
    },
    {
      photo: "/images/team/Kai Katschthaler .jpg",
      name: "Kai Katschthaler",
      pronouns: "he/they",
      title: 'Tech Team Lead & Program Manager \“Open Source Explorers"',
    },
    {
      photo: "/images/team/Elliot_Harris.jpg",
      name: "Elliot Harris",
      pronouns: "he/him",
      title: "Salesforce Development Lead",
    },
  ],
};
