import { FC } from "react";
import Image from "next/image";
import { Box, Flex, Container, Section, Heading, Text } from "@radix-ui/themes";

export const AboutHero: FC = () => (
  <>
    <Section
      position="relative"
      width="100%"
      pb="164px"
      mb="100px"
      className="bg-navy-900"
    >
      <Container size="3">
        <Heading
          as="h1"
          size="9"
          weight="bold"
          align="center"
          className="text-white"
        >
          About Us
        </Heading>
        <Text as="p" size="7" align="center" className="text-white">
          We provide for basic human needs at scale by connecting communities
          and empowering people to uphold human dignity.
        </Text>
      </Container>
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
        <Image
          src={"/images/about-us/hero-1.png"}
          alt="Hero Image"
          width={200}
          height={200}
        />
        <Image
          src={"/images/about-us/hero-2.png"}
          alt="Hero Image"
          width={200}
          height={200}
          className="hidden sm:block"
        />
        <Image
          src={"/images/about-us/hero-3.png"}
          alt="Hero Image"
          width={200}
          height={200}
          className="hidden md:block "
        />
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
