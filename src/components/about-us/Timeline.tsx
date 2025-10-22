import React from "react";
import classNames from "classnames";
import {
  Box,
  Flex,
  Section,
  Container,
  Card,
  Inset,
  Separator,
  Heading,
  Text,
  Link,
} from "@radix-ui/themes";
import Image from "next/image";

const colors = {
  blue: "navy-500",
  green: "#5AC597",
  pink: "#DFCDE8",
  grey: "#98BEC6",
};

const data = [
  {
    id: "2018",
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
    id: "2019",
    period: "2019",
    description:
      "Distribute Aid became a registered charity in Sweden and facilitated its first large in-kind donation.",
    bgColor: colors.green,
    imageSrc: "/images/about-us/Water to Calais.png",
  },
  {
    id: "2020",
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
    id: "2021",
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
      "Began running Needs Assessments (in a quarterly/seasonal format) for our partners, the largest collection of data on the grassroots response and care for refugees and migrants in Europe. The data showed 845,818 needs being met per month, and 245,972 meals being prepared every month by volunteer organisers in their own communities.",
    bgColor: colors.pink,
    imageSrc: "/images/about-us/21-014-AUT-GRC.png",
  },
  {
    id: "2022",
    period: "2022",
    description:
      "Big response from us in Ukraine advising and reducing burden of unwanted donations (due to our Brexit guide on humanitarian goods being a leading resource). Got grant to work on aid delivery to Ukraine, and started expanding our reach into the country.",
    bgColor: colors.green,
    imageSrc: "/images/about-us/23-006-USA-UKR.png",
  },
  {
    id: "2023",
    period: "Spring 2023",
    description:
      "Received the Olof Palme grant in Sweden. Reached $25 million in aid delivered and $5 million in aid delivered to Ukraine.",
    bgColor: colors.grey,
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
    id: "2024",
    period: "Spring 2024",
    description:
      "Ran Open Source Explorers Programme, an impactful initiative designed to engage developers, designers, and other contributors in collaborative work on Distribute Aid’s tech projects, providing a comprehensive introduction to open source.",
    bgColor: colors.blue,
    imageSrc: "/images/about-us/image.png",
  },
];

export const Timeline: React.FC = () => {
  return (
    <Section>
      <Container size="4">
        <Heading
          as="h2"
          size={{ initial: "8", md: "9" }}
          mb="6"
          weight="bold"
          className="text-navy-900"
          align="center"
        >
          Our History
        </Heading>
        <Flex
          direction="row"
          gap="7"
          justify="center"
          display={{ initial: "none", sm: "flex" }}
        >
          <Link href="#2024" size="4">
            2024
          </Link>
          <Link href="#2023" size="4">
            2023
          </Link>
          <Link href="#2022" size="4">
            2022
          </Link>
          <Link href="#2021" size="4">
            2021
          </Link>
          <Link href="#2020" size="4">
            2020
          </Link>
          <Link href="#2019" size="4">
            2019
          </Link>
          <Link href="#2018" size="4">
            2018
          </Link>
        </Flex>
        <Box
          width="76%"
          mx="auto"
          display={{ initial: "none", sm: "block", md: "none" }}
        >
          <Separator mt="6" size="4" className="bg-navy-900 h-[2px]" />
        </Box>
        <Box
          className="space-y-3 md:space-y-[-60px]"
          mx={{ initial: "4", sm: "8" }}
        >
          {[...data].reverse().map((item, index) => (
            <Flex
              className="justify-center md:justify-normal md:even:flex-row-reverse"
              align="center"
              position="relative"
              key={index}
              pt={{  initial: "116px", md: "96px" }}
              pb={{  initial: "40px" }}
            >
              {/* Separator */}
              {data.length - 1 !== index && (
                <Box
                  asChild
                  position="absolute"
                  top="5"
                  left={{ initial: "50%", sm: "50%" }}
                  width="2px"
                  display={{ initial: "block", sm: "none", md: "block" }}
                  height="50%"
                >
                  <Separator
                    orientation="vertical"
                    size="4"
                    className="bg-navy-900"
                  />
                </Box>
              )}
              {/* Time/Year */}
              <Flex
                className={classNames(
                  `leading-[23.44px]  rounded-full border-white shadow-md`,
                  item.bgColor === "navy-500"
                    ? "bg-navy-500 text-gray-50"
                    : "text-turquoise-600",
                  "absolute md:relative lg:absolute",
                )}
                style={{ backgroundColor: `${item.bgColor}` }}
                align="center"
                justify="center"
                left={{
                  initial: "calc(50% - 40px)",
                  sm: "calc(50% - 40px)",
                  lg: "calc(50% - 50px)",
                }}
                top={{
                  initial: "3",
                  sm: "calc(50% - 40px)",
                  lg: "calc(50% - 50px)",
                }}
                height={{ initial: "80px", lg: "100px" }}
                width={{ initial: "80px", lg: "100px" }}
                direction="column"
              >
                <Text weight="bold" align="center">
                  {item.period.split(" ")[0]}
                </Text>
                <Text weight="bold" align="center">
                  {item.period.split(" ")[1]}
                </Text>
              </Flex>

              {/* Image */}
              {/* leave space for the timeline marker plus a bit of separation */}
              <Box
                asChild
                width={{
                  initial: "100%",
                  sm: "calc(50% - 40px - 12px)",
                  lg: "calc(50% - 50px - 12px)",
                }}
                mx={{ initial: "5" }}
              >
                <Card
                  variant="ghost"
                  className="shadow-lg bg-white rounded-3xl"
                >
                  <Flex gap="3" direction="column" align="center">
                    <Image
                      src={item.imageSrc}
                      alt="Timeline"
                      height={256}
                      width={1200}
                      sizes="100vw"
                      style={{
                        height: "calc(37.5vh - 30px)",
                        minHeight: "150px",
                        maxHeight: "200px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "15px",
                      }}
                    />
                    <Text as="div" size="2" align="center" className="text-navy-900">
                      {item.description}
                    </Text>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          ))}
        </Box>
      </Container>
    </Section>
  );
};
