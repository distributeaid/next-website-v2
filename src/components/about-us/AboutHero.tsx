import { FC } from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";

export const AboutHero: FC = () => (
  <Box
    className="bg-navy-900"
    width="100%"
    height="430px"
    mb={{ initial: "550px", sm: "500px" }}
  >
    <Flex
      gap={{ initial: "6", md: "9" }}
      align="center"
      direction="column"
      justify="center"
      position="relative"
    >
      <Heading size="9" align="center" mt="7" className="text-white">
        Distribute Aid
      </Heading>
      <Text size="7" align="center" className="text-white px-2 xl:px-48">
        To provide for basic human needs at scale by connecting communities and
        empowering people to uphold human dignity.
      </Text>
      <Flex
        align="start"
        justify="center"
        gap="5"
        display="flex"
        wrap="wrap"
        px="3"
      >
        <Image
          src={"/images/about-us/hero-1.png"}
          alt="Hero Image"
          width={384}
          height={393}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
        <Image
          src={"/images/about-us/hero-2.png"}
          alt="Hero Image"
          width={384}
          style={{
            width: "auto",
            height: "auto",
          }}
          height={393}
          className="hidden lg:block"
        />
        <Image
          src={"/images/about-us/hero-3.png"}
          alt="Hero Image"
          width={384}
          style={{
            width: "auto",
            height: "auto",
          }}
          height={393}
          className="hidden xl:block "
        />
      </Flex>
      <Heading
        size="9"
        className="text-navy-900 px-2 md:px-48"
        align="center"
        weight="bold"
      >
        Support us today, so communities are prepared for tomorrow.
      </Heading>
    </Flex>
  </Box>
);
