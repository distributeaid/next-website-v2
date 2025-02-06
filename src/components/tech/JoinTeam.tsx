import {
  Button,
  Flex,
  Heading,
  Strong,
  Section,
  Text,
  Link,
  Box,
} from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

export const JoinTeam = () => {
  return (
    <Section
      mx={{ initial: "2", md: "94px" }}
      className="bg-[#98BEC6] rounded-3xl"
      px={{ initial: "6", md: "9" }}
      py="6"
    >
      <Flex
        gap="6"
        direction={{ initial: "column", lg: "row" }}
        justify="center"
        align="center"
      >
        <Flex
          gap="2"
          direction="column"
          justify="center"
          width={{ initial: "100%", lg: "60%" }}
        >
          <Heading as="h2" size="8" className="text-navy-800">
            How To Join Our Team!
          </Heading>
          <Strong>
            We’re usually looking to onboard new volunteers, especially
            experienced backend and frontend developers.
          </Strong>
          <Text size="5">
            You don’t need experience with our specific stack, as long as you’re
            self-motivated and happy to expand your skills. It would be best if
            you have at least some experience contributing to open-source
            software. If you don’t yet, check out our [Open Source Explorers
            program] instead. Our team meets once a month for a sprint meeting
            to coordinate. We also host two casual weekly tech hangs on Zoom to
            give folks a chance to collaborate.
          </Text>
          <Text size="4">
            If you’re interested in joining our team, please tell us a bit about
            yourself, why you want to join Distribute Aid and your skills. A
            link to your GitHub profile would also be helpful!
          </Text>
          <Box asChild width="160px">
            <Link href="mailto:tech@distributeaid.org">
              <Button size="4">Email us</Button>
            </Link>
          </Box>
        </Flex>
        <Box width={{ initial: "100%", lg: "40%" }}>
          <Image
            src="/images/tech/ukraine-response-gallery-02.png"
            alt="Ukraine response image"
            width={503}
            height={388}
          />
        </Box>
      </Flex>
    </Section>
  );
};
