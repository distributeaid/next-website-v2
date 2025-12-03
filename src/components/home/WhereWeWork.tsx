import Image from "next/image";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

type BackgroundColor = `bg-${string}`;

import europeMap from "./maps/europe.svg";
import middleEastMap from "./maps/middle-east.svg";
import unitedStatesMap from "./maps/united-states.svg";

const WhereWeWork = () => {
  const mapKey: {
    label: string;
    color: BackgroundColor;
  }[] = [
    {
      label: "Receiving Aid",
      color: "bg-key-dark-blue",
    },
    {
      label: "Sending Aid",
      color: "bg-key-light-blue",
    },
    {
      label: "Both",
      color: "bg-key-green",
    },
  ];

  const cardContent: {
    map: React.SVGElementType;
    title: string;
    summary: string;
    alt: string;
  }[] = [
    {
      map: europeMap,
      title: "Europe",
      summary:
        "In Europe, we work with local grassroots organizers who support people on the move, asylum seekers, houseless and low-income people, and those displaced due to war or disaster. Our partners provide support ranging from medical services, legal support, advocacy, hot meals, and NFI distributions.",
      alt: `Color-coded map of Europe showing three aid-flow categories. Receiving aid: France, Croatia, Bosnia & Herzegovina, Serbia, Romania, Moldova. Sending aid: Spain, United Kingdom, Norway, Austria, Hungary, Lithuania. Both: Netherlands, Germany, Poland, Italy, Ukraine, Greece.`,
    },
    {
      map: middleEastMap,
      title: "The Middle East",
      summary:
        "In the Middle East, our partners are primarily situated in the Levant region. There, we work with organisations providing educational support, employment opportunities, medical services and infrastructure, and shelter for refugees.",
      alt: `Color-coded map of The Middle East showing a single aid-flow category. Sending aid: Lebanon, Gaza, West Bank, Jordan.`,
    },
    {
      map: unitedStatesMap,
      title: "USA",
      summary:
        "In the US, our work is primarily centered around disaster relief and pre-positioning aid to be able to act swiftly when disaster strikes. We have a large network of partners and warehouses in disaster-prone areas who work locally with mutual aid in their communities.",
      alt: `Color-coded map of the continental United States showing three aid-flow categories. Receiving aid: Washington, Utah, New York, Delaware. Sending aid: Oregon, Texas, Indiana, Ohio, Tennessee, Florida. Both: California, Georgia, North Carolina, Pennsylvania.`,
    },
  ];

  return (
    <section className="bg-slate-100 p-12">
      <Box mb="9">
        <Heading as="h2" align="center" size="9" className="text-dark-blue">
          Where We Work
        </Heading>
        <Flex gap="6" justify="center" mt="5" asChild>
          <ul>
            {mapKey.map(({ label, color }) => (
              <li key={label}>
                <Flex gap="3">
                  <Box className={`size-8 rounded-full ${color}`} />
                  <Text size="6">{label}</Text>
                </Flex>
              </li>
            ))}
          </ul>
        </Flex>
      </Box>
      <Grid
        columns={{
          initial: "1",
          md: "3",
        }}
        gap="7"
        maxWidth={{ initial: "1242px" }}
        mx="auto"
      >
        {cardContent.map(({ map, title, summary, alt }) => {
          const id = `region-heading-${title.toLowerCase().replaceAll(" ", "-")}`;

          return (
            <Card key={title}>
              <Box m="4" asChild>
                <article aria-labelledby={id}>
                  <Flex
                    height={{ md: "191px" }}
                    width={{ initial: "100%", md: "auto" }}
                    justify="center"
                    mb="4"
                  >
                    <Image src={map} alt={alt} className="w-full" />
                  </Flex>
                  <Heading
                    id={id}
                    as="h3"
                    size={{
                      initial: "7",
                      md: "8",
                    }}
                    weight="medium"
                    mb="4"
                  >
                    {title}
                  </Heading>
                  <Text>{summary}</Text>
                </article>
              </Box>
            </Card>
          );
        })}
      </Grid>
    </section>
  );
};

export default WhereWeWork;
