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
      className="bg-gray-300"
      px={{ initial: "4", sm: "9" }}
      gapY={"4"}
      pb={"9"}
    >
      <BreadCrumbs links={links} />
      {/* logo + OSE title */}
      <Flex align={"center"} gap={"2"} mt={"4"}>
        {/* logo */}
        <Box width={{ initial: "75px", sm: "fit-content" }}>
          <Image
            src={"/images/tech/ose-program/ose-logo.png"}
            alt="Distribute aid OSE logo"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Heading
          size={{ initial: "6", sm: "8", md: "9" }}
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
        Participant applications are currently closed but stay tuned for another
        Open Source Explorers cohort!
      </Text>
      {/* what should sign up button link to */}
      {/* <Box mt={"2"}>
        <Button asChild>
          <Link wrap={"nowrap"} size={"4"} target="_blank" href="">
            Sign up
          </Link>
        </Button>
      </Box> */}
    </Flex>
  );
};
export default HeroSection;
