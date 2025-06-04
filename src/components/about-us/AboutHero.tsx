import { FC } from "react";
import Image from "next/image";
import { Box, Flex, Container, Section, Heading, Text } from "@radix-ui/themes";

export const AboutHero: FC = () => (
  <>
    <Section className="bg-navy-900 pb-20 relative z-0 sm:pb-12 pt-0 sm:pt-8 md:py-16">
      {/* heading and text */}
      <div className="max-w-7xl mx-auto px-8 pb-4 sm:pb-32 sm:px-16 md:px-24 pt-4">
        <Heading
          as="h1"
          weight="bold"
          align="center"
          className="text-white pb-8 text-[32px] sm:text-[48px] md:text-[60px]"
        >
          About Us
        </Heading>
        <Text
          as="p"
          size={{
            initial: "6",
            sm: "7",
            md: "8"
          }}
          align="center"
          className="text-white"
        >
          We provide for basic human needs at scale by connecting communities
          and empowering people to uphold human dignity.
        </Text>
      </div>
    </Section>
    <div className="-mt-16 sm:-mt-32 sm:px-16 z-10 relative w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 px-8">
      <div className="flex-1 max-w-[320px]">
        <Image
          src="/images/about-us/hero-1.png"
          alt="Hero 1"
          width={0}
          height={0}
          sizes="(max-widh: 1024px) 30vw, 200px"
          className="w-full h-auto rounded-xl"
        />
      </div>
      <div className="flex-1 max-w-[320px]">
        <Image
          src="/images/about-us/hero-2.png"
          alt="Hero 1"
          width={0}
          height={0}
          sizes="(max-widh: 1024px) 30vw, 200px"
          className="w-full h-auto rounded-xl"
        />
      </div>
      <div className="flex-1 max-w-[320px]">
        <Image
          src="/images/about-us/hero-3.png"
          alt="Hero 1"
          width={0}
          height={0}
          sizes="(max-widh: 1024px) 30vw, 200px"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Heading
          as="h1"
          weight="bold"
          align="center"
          className="text-navy-900 text-[32px] sm:text-[48px] md:text-[60px] leading-tight"
        >
          Support us today, so communities are prepared for tomorrow.
        </Heading>
      </div>
    </Section>
  </>
);
