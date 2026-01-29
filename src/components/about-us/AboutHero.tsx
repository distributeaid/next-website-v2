import { FC } from "react";
import Image from "next/image";
import { Box, Flex, Section, Heading, Text } from "@radix-ui/themes";

export const AboutHero: FC = () => (
  <>
    <Section
      width="100%"
      pt={{ initial: "2", sm: "7", md: "9" }}
      pb={{ initial: "80px", sm: "140px", md: "148px" }}
      mb="0"
      className="bg-navy-800"
    >
      <Box
        pt={{ initial: "1", md: "4" }}
        pb={{ initial: "1", md: "8" }}
        px={{ initial: "6", md: "9", lg: "180px" }}
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
    </Section>
    <Flex
      width="100%"
      gap={{ initial: "2", sm: "4" }}
      wrap="nowrap"
      justify="center"
      mt={{ initial: "-60px", sm: "-100px", md: "-140px" }}
      mb={{ initial: "-10px" }}
    >
      {/* This could probably be cleaned up to avoid repeated code */}
      <Box className="rounded-2xl overflow-hidden flex-shrink-0 w-[100px] sm:w-[160px] md:w-[200px] lg:w-[280px]">
        <Image
          src={"/images/about-us/hero-1.jpg"}
          alt="Hero Image"
          width={280}
          height={280}
          className="w-full h-auto object-cover"
        />
      </Box>
      <Box className="rounded-2xl overflow-hidden flex-shrink-0 w-[100px] sm:w-[160px] md:w-[200px] lg:w-[280px]">
        <Image
          src={"/images/about-us/hero-2.png"}
          alt="Hero Image"
          width={280}
          height={280}
          className="w-full h-auto object-cover"
        />
      </Box>
      <Box className="rounded-2xl overflow-hidden flex-shrink-0 w-[100px] sm:w-[160px] md:w-[200px] lg:w-[280px]">
        <Image
          src={"/images/about-us/hero-3.png"}
          alt="Hero Image"
          width={280}
          height={280}
          className="w-full h-auto object-cover"
        />
      </Box>
    </Flex>
    <Section>
      <Box px={{ initial: "7", sm: "140px", md: "160px" }}>
        <Heading
          as="h1"
          size={{ initial: "7", sm: "8" }}
          weight="bold"
          align="center"
          className="text-navy-900 lg:leading-tight"
        >
          Support us today, so communities are prepared for tomorrow.
        </Heading>
      </Box>
    </Section>
  </>
);
