import { Box, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

type Props = {
  title: string;
};

const data = {
  aboutOurMission: `Distribute Aid is a grassroots-to-grassroots humanitarian aid delivery team. We help communities survive and recover from disasters. We focus on three main types of relief work: sourcing shipments of humanitarian aid, coordinating its transportation to affected areas, and providing local people with the services and tools they need to rebuild their lives.`,
  aboutOurVision: `Powered by volunteers, we use open-source tech and a needs-first approach (i.e. asking people what they actually need before we send shipments) to minimize waste and maximize the impact of every donation. Our diverse team is composed of community organizers, logistics experts, and tech developers. We’re a nonprofit committed to human rights and dignity for everyone, everywhere.`,
};

export const AboutOurMissionVision: FC<Props> = ({ title }) => (
  <Box>
    <Box pb="2" asChild>
      <Heading as="h3" size="8" weight="bold" className="text-navy-800">
        About Our {title}
      </Heading>
    </Box>
    <Text className="leading-[35px]" size="4" align="center">
      {title === "Mission" ? data.aboutOurMission : data.aboutOurVision}
    </Text>
  </Box>
);
