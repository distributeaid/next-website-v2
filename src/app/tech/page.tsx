import HeroSection from "@/components/tech/HeroSection";
import SponsorSection from "@/components/tech/SponsorSection";
import OpenSourceExplorersSection from "@/components/tech/OpenSourceExporersSection";
import { Box, Flex, Section } from "@radix-ui/themes";
import { TechStackSection } from "@/components/tech/TechStackSection";
import ImageTextCTA from "@/components/cta/ImageTextCTA";
import { WorkingSection } from "@/components/tech/WorkingSection";

const ctaText =
  "**We’re usually looking to onboard new volunteers, especially experienced backend and frontend developers.** \n\n You don’t need experience with our specific stack, as long as you’re self-motivated and happy to expand your skills. It would be best if you have at least some experience contributing to open-source software. If you don’t yet, check out our [Open Source Explorers program](/tech/open-source-explorers) instead. Our team meets once a month for a sprint meeting to coordinate. We also host two casual weekly tech hangs on Zoom to give folks a chance to collaborate. \n\n If you’re interested in joining our team, please tell us a bit about yourself, why you want to join Distribute Aid and your skills. A link to your GitHub profile would also be helpful!";

const page = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      direction="column"
      align="center"
      justify="start"
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
        <WorkingSection />
      </Section>
      <Section size={{ initial: "1", md: "2" }}>
        <ImageTextCTA
          image="/images/tech/ukraine-response-gallery-02.png"
          heading="How To Join Our Team!"
          text={ctaText}
          link="mailto:tech@distributeaid.org"
          bgColor="gray-300"
          textColor="text-gray-800"
          headingColor="text-navy-800"
          buttonClasses="w-fit px-10 py-[18px]"
          buttonText="Email us"
        />
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
