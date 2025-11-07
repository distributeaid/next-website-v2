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
    anchor: "2018",
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
    anchor: "2019",
    period: "2019",
    description:
      "Distribute Aid became a registered charity in Sweden and facilitated its first large in-kind donation.",
    bgColor: colors.green,
    imageSrc: "/images/about-us/Water to Calais.png",
  },
  {
    anchor: "2020",
    period: "Jan 2020",
    description:
      'Distribute Aid received the "Most Direct Human Impact" award by the UN Technology and Innovation Lab.',
    bgColor: colors.gray,
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
    anchor: "2021",
    period: "Spring 2021",
    description:
      "Distribute Aid set up aid hubs and regular routes from the U.K. to help grassroots organisations continue to send aid after Brexit. We also ran our first shipment of aid to displaced people in Lebanon.",
    bgColor: colors.gray,
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
      "Began running Needs Assessments (in a quarterly/seasonal format) for our partners, the largest collection of data on the grassroots response and care for refugees and migrants in Europe. The data showed 845,818 needs being met per month, and 245,972 meals being prepared every month by volunteer organisers in their own communities.",
    bgColor: colors.pink,
    imageSrc: "/images/about-us/21-014-AUT-GRC.png",
  },
  {
    anchor: "2022",
    period: "2022",
    description:
      "Big response from us in Ukraine advising and reducing burden of unwanted donations (due to our Brexit guide on humanitarian goods being a leading resource). Got grant to work on aid delivery to Ukraine, and started expanding our reach into the country.",
    bgColor: colors.green,
    imageSrc: "/images/about-us/23-006-USA-UKR.png",
  },
  {
    anchor: "2023",
    period: "Spring 2023",
    description:
      "Received the Olof Palme grant in Sweden. Reached $25 million in aid delivered and $5 million in aid delivered to Ukraine.",
    bgColor: colors.gray,
    imageSrc: "/images/about-us/21-033-GBR-BIH (CA 1).png",
  },
  {
    period: "Fall-Winter 2023",
    description:
      "Started a Gaza-response coalition, bringing together 20 organisations, doctors, and companies wanting to support the people of Gaza. Began a huge response of securing medicines, medical devices, food, hygiene, and clothes for people in Gaza, Jordan, and Lebanon.",
    bgColor: colors.pink,
    imageSrc:
      "/images/about-us/WhatsApp Image 2023-07-04 at 10.27.22 - Greece Field Visits - Media.png",
  },
  {
    anchor: "2024",
    period: "Spring 2024",
    description:
      "Ran Open Source Explorers Programme, an impactful initiative designed to engage developers, designers, and other contributors in collaborative work on Distribute Aid’s tech projects, providing a comprehensive introduction to open source.",
    bgColor: colors.green,
    imageSrc: "/images/about-us/image.png",
  },
  {
    period: "2024",
    title: "Levant Response",
    description:
      "Following the outbreak of violence in Palestine in 2023, Distribute Aid coordinated with regional partners to provide urgent humanitarian support. Shipments originally intended for Gaza were rerouted to the West Bank due to the blockade, including multiple pallets of essential aid such as personal hygiene kits and medical equipment. Additional shipments delivered an ultrasound machine to Jordan and hygiene items to Lebanon which also helped displaced people and Palestinian refugees. Working closely with partners, all shipments were documented, inventoried, and delivered to local organizations for distribution. These efforts ensured timely aid reached families affected by the conflict, supporting both immediate needs and ongoing humanitarian relief in the region.",
    bgColor: colors.gray,
    imageSrc: "/images/about-us/placeholder.png",
  },
  {
    period: "September 2024",
    title: "Hurricane Helene/Gulf Disaster Network",
    description:
      "Just as Distribute Aid was gearing up to form into a multi-state network of disaster groups across the Gulf Coast, Hurricane Helene raged through large parts of the Southeast. People stepped up from across the region to respond, and Distribute Aid connected them with free warehouse space, shipping, aid donations, infrastructure, and guidance.",
    bgColor: colors.blue,
    imageSrc: "/images/about-us/placeholder.png",
  },
  {
    anchor: "2025",
    period: "January 2025",
    title: "LA Fire Response",
    description:
      "When unprecedented wildfires began in LA in January 2025, Distribute Aid connected with local groups responding to the disaster, sending furniture, hygiene, medical supplies, clothes, and more. In collaboration with Community Solidarity Project, essential items were delivered to a community hub, sorted and inventoried, then delivered directly to displaced families. During the acute response throughout January and February, Distribute Aid coordinated with Lifting Hands International and the Afya Foundation to supply seven semi-trucks worth of supplies to Los Angeles. Through the collaboration with Community Solidarity Project, Distribute Aid’s support helped over 250 families that had survived the fires.",
    bgColor: colors.pink,
    imageSrc: "/images/about-us/placeholder.png",
  },
  {
    period: "Summer 2025",
    title: "HRT Harm Reduction Toolkit",
    description:
      "As attacks on transgender people in the US intensified, Distribute Aid started sourcing harm reduction kits that contain necessary medical equipment needed to safely administer gender-affirming hormone therapy. Distribute Aid used its logistics expertise and connections to source large donations and assemble toolkits. Each kit includes a 1-year supply of medical equipment necessary to administer injection-based hormone therapy. Grassroots groups distributed the kits for free, saving trans people about $65 a year. Find out more about this response on the HRT Harm Reduction Toolkit page.",
    bgColor: colors.green,
    imageSrc: "/images/about-us/placeholder.png",
  },
];
