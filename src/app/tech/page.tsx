import HeroSection from "@/components/tech/HeroSection";
import SponsorSection from "@/components/tech/SponsorSection";
import OpenSourceExplorersSection from "@/components/tech/OpenSourceExporersSection";
import { Box, Flex, Section } from "@radix-ui/themes";
import { TechStackSection } from "@/components/tech/TechStackSection";

const page = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      direction="column"
      align="center"
      justify="start"
      gap={{ initial: "4", lg: "6", xl: "9" }}
    >
      <Box
        width="100%"
        position="absolute"
        inset="0"
        height="450px"
        className="bg-navy-900 -z-10"
      />
      <Section size={{ initial: "1", md: "2" }}>
        <HeroSection />
      </Section>
      <Section size={{ initial: "1", md: "2" }}>
        <TechStackSection />
      </Section>
      <Section size={{ initial: "1", md: "2" }}>
        <OpenSourceExplorersSection />
      </Section>
      <Section>
        <SponsorSection />
      </Section>
    </Flex>
  );
};

export default page;
