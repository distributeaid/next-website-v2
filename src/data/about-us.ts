interface TimelineItem {
  period: string;
  description: string;
  bgColor: string;
  imageSrc: string;
}
// imageSrc,
//   title,
//   year,
//   parentBgColor,
//   description,

interface MissionStatement {
  missionStatement: string;
  aboutOurMission: string;
  aboutOurVision: string;
  timeline: TimelineItem[];
}

const colors = {
  blue: "#4362A6",
  green: "#5AC597",
  pink: "#DFCDE8",
  grey: "#98BEC6",
};

const missionStatementData: MissionStatement = {
  missionStatement:
    "Distribute Aid’s mission is to provide for basic human needs at scale by connecting communities and empowering people to uphold human dignity.",
  aboutOurMission: `We are re-imagining humanitarian aid delivery. We aim to help move humanitarian aid to where it is needed most, create an efficient and time-saving system for shipments of aid, and lower carbon emissions for humanitarian aid. Distribute Aid has the end goal of producing a platform for the use of aid collection and service, providing groups that will incorporate all of these aims seamlessly. We offer support to a huge network of grassroots organizations working within the Refugee Aid movement in Europe, and COVID-19 response groups in Europe and the US`,
  aboutOurVision: `Distribute Aid wants to bring more transparency to all groups involved around what donations are on offer, and make it easier to see what is needed where, which also prevents waste. Creating a platform for aid delivery will connect hundreds of independent groups working in the same field, for the same greater cause but who currently have little oversight. This platform will also provide a way to collect data on regional needs, providing a wider overview of needs and assisting in securing in-kind donations to a scale never before possible!`,
  timeline: [
    {
      period: "Summer 2018",
      description:
        "Sara and Taylor (co-founders) spent 3 months visiting and volunteering with 50+ aid organisations in Europe to discover the most effective ways to help.",
      bgColor: colors.blue,
      imageSrc: "/images/about-us/20-036-GBR-GRC (OA).png",
    },
    {
      period: "Fall 2018",
      description:
        "When sorting donations in Scotland, Sara had the idea for Distribute Aid to make it easier for people to help.",
      bgColor: colors.pink,
      imageSrc: "/images/about-us/21-38-USA-FRA (1).png",
    },
    {
      period: "2019",
      description:
        "Distribute Aid became a registered charity in Sweden and facilitated its first large in-kind donation.",
      bgColor: colors.green,
      imageSrc: "/images/about-us/Water to Calais.png",
    },
    {
      period: "Jan 2020",
      description:
        'Distribute Aid received the "Most Direct Human Impact" award by the UN Technology and Innovation Lab.',
      bgColor: colors.grey,
      imageSrc:
        "/images/about-us/WhatsApp Image 2020-11-18 at 09.31.58 (1) - 20-40-DEU-GRC.png",
    },
    {
      period: "March 2020",
      description:
        "Flexport.org rewarded Distribute Aid with a $50,000 grant to provide emergency aid shipments.",
      bgColor: colors.pink,
      imageSrc: "/images/about-us/20-34-DEU-GRC (1).png",
    },
    {
      period: "Fall 2020",
      description:
        "Distribute Aid facilitated the international response to the Moria fire, tripling its number of aid shipments to date.",
      bgColor: colors.green,
      imageSrc: "/images/about-us/21-38-USA-FRA (3).png",
    },
    {
      period: "Spring 2021",
      description:
        "Distribute Aid set up aid hubs and regular routes from the U.K. to help grassroots organisations continue to send aid after Brexit. We also ran our first shipment of aid to displaced people in Lebanon.",
      bgColor: colors.grey,
      imageSrc: "/images/about-us/21-026-DEU-GRC (Drop Nea Kavala 1).png",
    },
    {
      period: "Fall 2021",
      description:
        "Led coordination of 20+ charities on the base. Took care of 800,000 aid items that had been donated to people on base, and matched them with resettling agencies in the areas where people were placed. Awarded the Public Service Commendation Medal by the US Army (4th highest army can give to civilian).",
      bgColor: colors.blue,
      imageSrc: "/images/about-us/21-013-GBR-FRA (1).png",
    },
    {
      period: "Winter 2021",
      description:
        "Began running needs assessments (in a quarterly/seasonal format) for our partners. The largest collection of data on the grassroots response and care for refugees and migrants in Europe. Showed XX needs per month, and XX meals being prepared every XXX by volunteer organisers in their own communities.",
      bgColor: colors.pink,
      imageSrc: "/images/about-us/21-014-AUT-GRC.png",
    },
    {
      period: "2022",
      description:
        "Big response from us in Ukraine advising and reducing burden of unwanted donations (due to our Brexit guide on humanitarian goods being a leading resource). Got grant to work on aid delivery to Ukraine, and started expanding our reach into the country.",
      bgColor: colors.green,
      imageSrc: "/images/about-us/23-006-USA-UKR.png",
    },
    {
      period: "Spring 2023",
      description:
        "Received the Olof Palme grant in Sweden.Reached $25 million in aid delivered and $5 million in aid delivered to Ukraine.",
      bgColor: colors.grey,
      imageSrc: "/images/about-us/21-033-GBR-BIH (CA 1).png",
    },
    {
      period: "Fall-Winter 2023",
      description:
        "Started a Gaza-response coalition, bringing together 20 organisations, doctors, and companies wanting to support the people of Gaza. Begun a huge response of securing medicines, medical devices, food, hygiene, and clothes for people in Gaza, Jordan, and Lebanon.",
      bgColor: colors.pink,
      imageSrc:
        "/images/about-us/WhatsApp Image 2023-07-04 at 10.27.22 - Greece Field Visits - Media.png",
    },
    {
      period: "Spring 2024",
      description:
        "Ran Open Source Explorers Programme ( An impactful initiative designed to engage Developers, Designers, and other contributors in collaborative work on Distribute Aid’s projects, providing a comprehensive introduction to open source.) ",
      bgColor: colors.blue,
      imageSrc: "/images/about-us/image.png",
    },
  ],
};

export default missionStatementData;
