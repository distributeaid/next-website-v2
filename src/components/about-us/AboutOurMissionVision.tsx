import { Flex, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

type Props = {
  title: string;
};

const data = {
  aboutOurMission: `We are re-imagining humanitarian aid delivery. We aim to help move humanitarian aid to where it is needed most, create an efficient and time-saving system for shipments of aid, and lower carbon emissions for humanitarian aid. Distribute Aid has the end goal of producing a platform for the use of aid collection and service, providing groups that will incorporate all of these aims seamlessly. We offer support to a huge network of grassroots organizations working within the Refugee Aid movement in Europe, and COVID-19 response groups in Europe and the US`,
  aboutOurVision: `Distribute Aid wants to bring more transparency to all groups involved around what donations are on offer, and make it easier to see what is needed where, which also prevents waste. Creating a platform for aid delivery will connect hundreds of independent groups working in the same field, for the same greater cause but who currently have little oversight. This platform will also provide a way to collect data on regional needs, providing a wider overview of needs and assisting in securing in-kind donations to a scale never before possible!`,
};

export const AboutOurMissionVision: FC<Props> = ({ title }) => (
  <Flex
    px={{ md: "4" }}
    py={{ md: "4" }}
    direction="column"
    align="center"
    gap="4"
  >
    <Heading size="6" weight="bold">
      About our {title}
    </Heading>
    <Text className="leading-[35px]" size="4" align="center">
      {title === "Mission" ? data.aboutOurMission : data.aboutOurVision}
    </Text>
  </Flex>
);
