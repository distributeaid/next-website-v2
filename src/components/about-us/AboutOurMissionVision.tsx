import { Box, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

export const data = {
  mission: `Distribute Aid is a grassroots-to-grassroots humanitarian aid delivery team. We help communities survive and recover from disasters. We focus on three main types of relief work: sourcing shipments of humanitarian aid, coordinating its transportation to affected areas, and providing local people with the services and tools they need to rebuild their lives.`,
  vision: `Powered by volunteers, we use open-source tech and a needs-first approach (i.e. asking people what they actually need before we send shipments) to minimize waste and maximize the impact of every donation. Our diverse team is composed of community organizers, logistics experts, and tech developers. We’re a nonprofit committed to human rights and dignity for everyone, everywhere.`,
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
