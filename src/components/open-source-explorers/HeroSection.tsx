import colors from "@/components/about-us/Timeline";
import BreadCrumbs from "@/components/ui/BreadCrumbs";

import { Flex, Box, Heading, Text, Link, Button } from "@radix-ui/themes";
import Image from "next/image";
const HeroSection = () => {
  const links = [
    {
      url: "/tech",
      title: "Tech",
      currentLink: false,
    },
    {
      url: `/tech/open-source-explorers`,
      title: "OSE",
      currentLink: true,
    },
  ];
  return (
    <Flex
      direction={"column"}
      // is it ok to imnport this color from timeline, or should we create a new grey bg color
      style={{ backgroundColor: colors.grey }}
      p={{ initial: "4", sm: "9" }}
      gapY={"4"}
    >
      <BreadCrumbs links={links} />
      {/* logo + OSE title */}
      <Flex align={"center"} mt={"4"}>
        {/* logo */}
        <Box width={{ initial: "80px", sm: "fit-content" }}>
          <Image
            src={"/images/tech/ose-program/ose-logo.png"}
            alt="Distribute aid OSE logo"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Heading
          size={{ initial: "6", sm: "8" }}
          as="h1"
          style={{
            color: "var(--blue-header)",
            textShadow: "2px 2px 4px rgba(5, 30, 93, 0.7)",
          }}
          className="text-shadow-lg"
        >
          OPEN SOURCE EXPLORERS
        </Heading>
      </Flex>
      <Text size={"5"} weight={"medium"}>
        Get ready to join the open source community
      </Text>
      <Text>
        Open Source Explorers is a structured, hands-on introduction to
        contributing to open-source projects. It’s for developers, designers,
        and technical writers who are experienced in their fields but new to
        open source. Our long-term goal is for the program to benefit the wider
        open-source community and ecosystem by consistently bringing new people
        into open source.
      </Text>
      <Text>
        Participant applications are currently closed but you can sign up for
        our mailing list and we’ll let you know when we’re running the next
        cohort.
      </Text>
      {/* what should sign up button link to */}
      <Box>
        <Button size={"4"} style={{ fontSize: ".875rem" }} asChild>
          <Link wrap={"nowrap"} target="_blank" href="">
            Sign up
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};
export default HeroSection;
