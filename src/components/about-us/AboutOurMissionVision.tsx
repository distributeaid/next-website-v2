import { Box, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

export const data = {
  mission: `We are re-imagining humanitarian aid delivery. We aim to help move humanitarian aid to where it is needed most, create an efficient and time-saving system for shipments of aid, and lower carbon emissions for humanitarian aid. \n\nDistribute Aid has the end goal of producing a platform for the use of aid collection and service, providing groups that will incorporate all of these aims seamlessly. \n\nWe offer support to a huge network of grassroots organizations working within the Refugee Aid movement in Europe, and COVID-19 response groups in Europe and the US`,
  vision: `Distribute Aid wants to bring more transparency to all groups involved around what donations are on offer, and make it easier to see what is needed where, which also prevents waste. \n\nCreating a platform for aid delivery will connect hundreds of independent groups working in the same field, for the same greater cause but who currently have little oversight. \n\nThis platform will also provide a way to collect data on regional needs, providing a wider overview of needs and assisting in securing in-kind donations to a scale never before possible!`,
};

type Props = {
  title: string;
  content: string;
};

export const AboutOurMissionVision: FC<Props> = ({ title, content }) => (
  <Box>
    <Box pb="4" asChild>
      <Heading
        as="h3"
        size={{ initial: "6", sm: "7" }}
        weight="bold"
        className="text-navy-800 text-center lg:text-left"
      >
        Our {title}
      </Heading>
    </Box>
    <Text
      as="p"
      size={{ initial: "3", md: "4" }}
      className="leading-6 whitespace-pre-line text-center lg:text-left"
    >
      {content}
    </Text>
  </Box>
);
