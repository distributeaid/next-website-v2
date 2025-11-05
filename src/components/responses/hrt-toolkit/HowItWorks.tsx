import { FC } from "react";
import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import Image from "next/image";
import graphHorizontal from "../../../../public/images/responses/hrt-toolkit/how-it-works-graph.png";
import graphVertical from "../../../../public/images/responses/hrt-toolkit/how-it-works-vertical.png";

export const HowItWorks: FC = () => (
  <Section>
    <Heading as="h2" align="center" className="text-navy-800" size="8">
      How It Works
    </Heading>
    <Flex justify="center" p="4">
      <Image
        src={graphHorizontal}
        className="w-1/2 h-auto hidden md:block"
        alt="Materials purchased with monetary donations and obtained through in-kind donations are assembled to make the kits. The kits are sent to frontline groups who distribute them in their area."
      />
      <Image
        src={graphVertical}
        className="w-full h-auto block md:hidden"
        alt="Materials purchased with monetary donations and obtained through in-kind donations are assembled to make the kits. The kits are sent to frontline groups who distribute them in their area."
      />
    </Flex>
    <Box className="font-bold text-center text-lg">
      Good to know: Kits are never distributed directly to people but only
      through frontline organizations!
    </Box>
  </Section>
);
