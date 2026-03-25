import HeroSection from "@/components/tech/HeroSection";
import SponsorSection from "@/components/tech/SponsorSection";
import OpenSourceExplorersSection from "@/components/tech/OpenSourceExporersSection";
import { Box, Flex, Section } from "@radix-ui/themes";
import { TechStackSection } from "@/components/tech/TechStackSection";
import ImageTextCTA from "@/components/cta/ImageTextCTA";
import { WorkingSection } from "@/components/tech/WorkingSection";

const ctaText =
  "**We continuously grow our diverse and international team of frontend, backend, and design volunteers!** \n\n We’re looking for experienced engineers, but you don’t need to know our entire stack, as long as you’re self-motivated and happy to expand your skills. Some experience contributing to open-source software is helpful. \n\n Our team meets once a month for a sprint meeting. We also host two casual weekly tech hangs on Zoom to give folks a chance to collaborate. Contributors are expected to join at least 1x tech hang per month and 1x sprint meeting per quarter. You can read more about how we run our tech team on [GitHub](https://github.com/distributeaid/docs/blob/saga/how-to-DA/contributing.md).\n\n If you’re interested in joining our team, please tell us a bit about yourself, why you want to join Distribute Aid and your skills. A link to your GitHub profile would also be helpful!";

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
          image="/images/photos/photo-ukr-response-01.png"
          heading="How To Join Our Tech Team!"
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
