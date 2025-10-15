import Image from "next/image";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

type BackgroundColor = `bg-[#${string}]`;

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
      color: "bg-[#000080]",
    },
    {
      label: "Sending Aid",
      color: "bg-[#5FBCD3]",
    },
    {
      label: "Both",
      color: "bg-[#5FD38D]",
    },
  ];

  const cardContent: {
    map: React.SVGElementType;
    title: string;
    summary: string;
  }[] = [
    {
      map: europeMap,
      title: "Europe",
      summary: "Refugee populations across the Mediterranean and Balkans.",
    },
    {
      map: middleEastMap,
      title: "The Middle East",
      summary: "Survivors of conflict and displacement in the Levant regions.",
    },
    {
      map: unitedStatesMap,
      title: "USA",
      summary:
        "Vulnerable communities facing disasters both natural and manmade.",
    },
  ];

  return (
    <Box className="bg-slate-100 p-12">
      <Box mb="9">
        <Heading as="h2" align="center" size="9" className="text-dark-blue">
          Where We Work
        </Heading>
        <Flex gap="6" justify="center" mt="5">
          {mapKey.map(({ label, color }) => (
            <Flex key={label} gap="3">
              <Box className={`size-8 rounded-full ${color}`} />
              <Text size="6">{label}</Text>
            </Flex>
          ))}
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
        {cardContent.map(({ map, title, summary }) => (
          <Card key={title}>
            <Box m="4">
              <Flex
                height={{ md: "191px" }}
                width={{ initial: "100%", md: "auto" }}
                justify="center"
                mb="4"
              >
                <Image src={map} alt="" className="w-full" />
              </Flex>
              <Heading
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
            </Box>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default WhereWeWork;
