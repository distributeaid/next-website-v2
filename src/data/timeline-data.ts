const colors = {
  blue: "bg-circle-blue",
  green: "bg-circle-green",
  pink: "bg-circle-pink",
  gray: "bg-circle-gray",
};

// 'anchor' is used only for scroll navigation(e.g. <Link href="2018">).
// Only the first timeline entry get an anchor so that navigation jumps to the first event of that year.
export const data = [
  {
    period: "Fall 2017",
    title: "The Idea for Distribute Aid",
    description:
      "When sorting donations in Scotland in Fall 2017 and Spring 2018, Sara had the idea for Distribute Aid. She wanted to make it easier for everyday people to help other locals by surfacing information about what was needed where.",
    bgColor: colors.pink,
    imageSrc: "/images/photos/photo-210000-000002-usa-fra.png",
  },
  {
    anchor: "2018",
    period: "Summer 2018",
    title: "User Research & Feedback",
    description:
      "Sara and Taylor (co-founders) spent 3 months visiting and volunteering with 50+ aid organisations in Europe to discover the most effective ways to help them get relevant support.",
    bgColor: colors.blue,
    imageSrc: "/images/photos/photo-200000-000001-gbr-grc-oa.png",
  },
  {
    anchor: "2019",
    period: "2019",
    title: "Charity Registration",
    description:
      "Distribute Aid became a registered charity in Sweden and facilitated its first large in-kind donation.",
    bgColor: colors.green,
    imageSrc: "/images/photos/photo-fra-calais-water.png",
  },
  {
    anchor: "2020",
    period: "Feb 2020",
    title: "UN Human Impact Award",
    description:
      'Distribute Aid received the "Most Direct Human Impact" award by the UN Technology and Innovation Lab.',
    bgColor: colors.gray,
    imageSrc: "/images/photos/photo-201118-093158-deu-grc.png",
  },
  {
    period: "March 2020",
    title: "Covid-19 Grant",
    description:
      "Flexport.org awarded Distribute Aid with a $50,000 grant to provide emergency aid shipments during the start of the Covid-19 crisis. Distribute Aid sent PPE to several formal and informal refugee camps and living sites in Europe.",
    bgColor: colors.pink,
    imageSrc: "/images/photos/photo-200000-000001-deu-grc.png",
  },
  {
    period: "Fall 2020",
    title: "Moria Fire Response",
    description:
      "Distribute Aid facilitated the international response to the Moria fire, tripling its number of aid shipments to date.",
    bgColor: colors.green,
    imageSrc: "/images/photos/photo-210000-000001-usa-fra.png",
  },
  {
    anchor: "2021",
    period: "Spring 2021",
    title: "Brexit Guide & First Lebanon Shipments",
    description:
      "Distribute Aid set up aid hubs and regular routes from the U.K. to help grassroots organisations continue to send aid after Brexit. We also ran our first shipment of aid to displaced people in Lebanon.",
    bgColor: colors.gray,
    imageSrc: "/images/photos/photo-210000-000001-deu-grc-drop-nea-kavala.png",
  },
  {
    period: "Spring 2021",
    title: "Needs Assessments",
    description:
      "DA started running quarterly Needs Assessments for our partners. It was the largest collection of data on the grassroots response and care for refugees and migrants in Europe. Our first report got responses from 36 local aid groups and showed just over 600,000 unmet basic human needs. 20 grassroots organisations were responsible for feeding a staggering 76,490 people per month.",
    bgColor: colors.pink,
    imageSrc: "/images/photos/photo-210000-000001-aut-grc.png",
  },
  {
    period: "Fall 2021",
    title: "Afghan Safe Haven",
    description:
      "Distribute Aid was asked to help the urgent resettlement of people from Afghanistan when the Taliban took the country over in August 2021. We led the coordination of 20+ charities on the Ft Pickett military base where translators and their families were temporarily housed.",
    bgColor: colors.blue,
    imageSrc: "/images/photos/photo-210000-000001-afg-safe-haven.png",
    imgAlt:
      "A person is showing a pink dress to a child. Behind them, lots of clothes are laid out on a row of tables.",
  },
  {
    period: "Winter 2021",
    title: "Afghan Safe Haven Resettlement",
    description:
      "As all the people from the base got resettled, Distribute Aid took care of 800,000+ aid items that had been donated for the response. We matched them with resettlement agencies in the areas around the U.S. where people were placed. Our co-founder Taylor was awarded the Public Service Commendation Medal by the US Army.",
    bgColor: colors.blue,
    imageSrc: "/images/photos/photo-210000-000001-gbr-fra.png",
  },
  {
    anchor: "2022",
    period: "Spring 2022",
    title: "Ukraine Donation Management",
    description:
      "At the start of the 2022 war in Ukraine, Distribute Aid took on a limited role aimed at advising on donation procedure and reducing the burden of unwanted donations that were overwhelming systems in Ukraine and surrounding countries.",
    bgColor: colors.green,
    imageSrc: "/images/photos/photo-230000-000001-usa-ukr.png",
  },
  {
    period: "Fall 2022",
    title: "Ukraine Response",
    description:
      "A few months into the war in Ukraine, Distribute Aid worked with in-kind donors and local partners to bring medicine, food, and water infrastructure to key areas of Ukraine.",
    bgColor: colors.green,
    imageSrc: "/images/photos/photo-220000-000001-ukr-response.jpeg",
    imgAlt:
      "A group of smiling people in warm winter clothing posing for a photo in a warehouse. One of them is holding up a light green heart-shaped stuffy or small pillow. Behind the group, we see lots of boxes and pallets filled with donations.",
  },
  {
    anchor: "2023",
    period: "Spring 2023",
    title: "Olof Palme Award",
    description:
      "At the beginning of the year, Distribute Aid received the prestigious Olof Palme grant in Sweden. We also hit two important milestones: $25 million in total aid delivered and $5 million in aid delivered to Ukraine.",
    bgColor: colors.gray,
    imageSrc: "/images/photos/photo-210000-000001-gbr-bih-ca.png",
  },
  {
    period: "Fall–Winter 2023",
    title: "Gaza Response Coalition",
    description:
      "Distribute Aid launched the Gaza Response Coalition, bringing together 20 organisations, doctors, and companies wanting to support the people of Gaza. This kick-started a huge collaborative effort to secure medicines, medical devices, food, hygiene, and clothes for people in Gaza, the West Bank, Jordan, and Lebanon.",
    bgColor: colors.pink,
    imageSrc: "/images/photos/photo-230704-102722-grc-field-visits.png",
  },
  {
    period: "2024",
    title: "Levant Response",
    description:
      "Following the outbreak of violence in Palestine in 2023, Distribute Aid coordinated with regional partners to provide urgent humanitarian support. Shipments originally intended for Gaza were rerouted to the West Bank due to the blockade, including multiple pallets of essential aid such as personal hygiene kits and medical equipment. Additional shipments delivered an ultrasound machine to Jordan and hygiene items to Lebanon which also helped displaced people and Palestinian refugees. Working closely with partners, all shipments were documented, inventoried, and delivered to local organizations for distribution. These efforts ensured timely aid reached families affected by the conflict, supporting both immediate needs and ongoing humanitarian relief in the region. ©[Anera](https://www.anera.org/)",
    bgColor: colors.gray,
    imageSrc: "/images/photos/photo-240000-levant-response.jpg",
    imgAlt:
      "Women and children in Gaza are congregating around a man with a clipboard next to a sign by Distribute Aid partner organisation Anera which reads “Medical Healthcare. Free Health Day. Gaza Strip”. Photo by Anera.",
  },
  {
    anchor: "2024",
    period: "Spring 2024",
    title: "Open Source Explorers",
    description:
      "In January 2024 Distribute Aid ran the first cohort of the Open Source Explorers (OSE) program. OSE is a structured, hands-on introduction to contributing to open-source projects that simultaneously aims to help us drive our tech projects forward. Our long-term goal is for the program to benefit the wider open-source community and ecosystem by consistently bringing new people into open source. We plan to organize more cohorts in the future.",
    bgColor: colors.green,
    imageSrc: "/images/photos/photo-hands-circle-01.png",
  },
  {
    period: "September 2024",
    title: "Hurricane Helene/Gulf Disaster Network",
    description:
      "Just as Distribute Aid was gearing up to form into a multi-state network of disaster groups across the Gulf Coast, Hurricane Helene raged through large parts of the Southeast. People stepped up from across the region to respond, and Distribute Aid connected them with free warehouse space, shipping, aid donations, infrastructure, and guidance.",
    bgColor: colors.blue,
    imageSrc: "/images/photos/photo-240900-000001-usa-hurricane-helene.jpeg",
    imgAlt:
      "Two team members of the Gulf Disaster Network posing happily at the back of a truck that is already half filled with boxes full of aid supplies.",
  },
  {
    anchor: "2025",
    period: "January 2025",
    title: "LA Fire Response",
    description:
      "When unprecedented wildfires began in LA in January 2025, Distribute Aid connected with local groups responding to the disaster, sending furniture, hygiene, medical supplies, clothes, and more. In collaboration with Community Solidarity Project, essential items were delivered to a community hub, sorted and inventoried, then delivered directly to displaced families. During the acute response throughout January and February, Distribute Aid coordinated with Lifting Hands International and the Afya Foundation to supply seven semi-trucks worth of supplies to Los Angeles. Through the collaboration with Community Solidarity Project, Distribute Aid’s support helped over 250 families that had survived the fires.",
    bgColor: colors.pink,
    imageSrc: "/images/photos/photo-250100-000001-usa-la-fire-response.png",
    imgAlt:
      "Group photo of the Community Solidarity Project team in LA in front of a 99c only store. They’re holding up a banner that says, “thank you, Distribute Aid”.",
  },
  {
    period: "Summer 2025",
    title: "HRT Harm Reduction Toolkit",
    description:
      "As attacks on transgender people in the US intensified, Distribute Aid started sourcing harm reduction kits that contain necessary medical equipment needed to safely administer gender-affirming hormone therapy. Distribute Aid used its logistics expertise and connections to source large donations and assemble toolkits. Each kit includes a 1-year supply of medical equipment necessary to administer injection-based hormone therapy. Grassroots groups distributed the kits for free, saving trans people about $65 a year. Find out more about this response on the HRT Harm Reduction Toolkit page.",
    bgColor: colors.green,
    imageSrc: "/images/photos/photo-250000-000001-usa-hrt-toolkit.jpg",
    imgAlt:
      "A hand wearing medical gloves is slipping one of our HRT zines into a clear plastic bag holding various medical supplies. The zine reads “All we have is each other. All we have is now.” and is decorated with illustrations of flowers in pink and blue. More zines are piled up in the background.",
  },
];
