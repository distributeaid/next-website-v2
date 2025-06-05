import { FC } from "react";
import Image from "next/image";
import { Box, Flex, Container, Section, Heading, Text } from "@radix-ui/themes";

export const AboutHero: FC = () => (
  <>
    <Section
      position="relative"
      width="100%"
      pt={{ initial: "2", sm: "7", md: "9"}}
      px={{ lg: "9" }}
      mb="100px"
      className="bg-navy-900"
      style={{ paddingBottom: "120px" }}
    >
      <Box
        pt={{ initial: "1", md: "4" }}
        pb={{ initial: "2", md: "6" }}
        px={{ initial: "4", sm: "6", md: "9" }}
      >
        <Heading
          as="h1"
          size={{ initial: "7", sm: "8", md: "9" }}
          weight="bold"
          align="center"
          className="text-white"
          mb={{ initial: "3", sm: "4" }}
        >
          About Us
        </Heading>
        <Text
          as="p"
          size={{ initial: "5", sm: "6", md: "7" }}
          align="center"
          className="text-white"
        >
          We provide for basic human needs at scale by connecting communities
          and empowering people to uphold human dignity.
        </Text>
      </Box>
      <Flex
        position="absolute"
        bottom="-100px"
        width="100%"
        align="start"
        justify="center"
        wrap="wrap"
        gap="5"
        px="4"
      >
        <Box className="w-[96px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
          <Image
            src={"/images/about-us/hero-1.png"}
            alt="Hero Image"
            width={0}
            height={0}
            sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, (min-width: 640px) 120px, 96px"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
        <Box className="w-[96px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
          <Image
            src={"/images/about-us/hero-2.png"}
            alt="Hero Image"
            width={0}
            height={0}
            sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, (min-width: 640px) 120px, 96px"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
        <Box className="w-[96px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
          <Image
            src={"/images/about-us/hero-3.png"}
            alt="Hero Image"
            width={0}
            height={0}
            sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, (min-width: 640px) 120px, 96px"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}

          />
        </Box>
      </Flex>
    </Section>
    <Section>
      <Container size="3">
        <Heading
          as="h2"
          size="9"
          weight="bold"
          align="center"
          className="text-navy-900"
        >
          Support us today, so communities are prepared for tomorrow.
        </Heading>
      </Container>
    </Section>
  </>
);
